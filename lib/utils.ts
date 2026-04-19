import { AGENT_DISPLAY_NAMES, ROLE_LABELS } from "@/lib/constants";
import type { AgentRole, MessageType, SourceType } from "@/types";

const NUMBER_WORD_VALUES: Record<string, number> = {
  zero: 0,
  o: 0,
  oh: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90
};

const SCALE_WORDS: Record<string, number> = {
  hundred: 100,
  thousand: 1000,
  million: 1000000
};

const SPOKEN_NUMBER_TOKEN_PATTERN =
  "(?:zero|oh|o|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|and)";

const SPOKEN_NUMBER_SEQUENCE = new RegExp(
  `\\b((?:${SPOKEN_NUMBER_TOKEN_PATTERN})(?:[-\\s]+(?:${SPOKEN_NUMBER_TOKEN_PATTERN})){1,7})(?:\\s+(k|grand|dollars?|bucks))?\\b`,
  "gi"
);

const MONEY_CONTEXT_HINTS =
  /\b(offer|asking|ask|price|priced|listing|listed|counter|meet|move|hit|come|budget|worth|bill|cost|credit|cover|premium|close|closed|comp|repair|roof|hvac|inspection|offset|payment)\b/i;

export function dedupeStrings(values: Array<string | null | undefined>) {
  return [...new Set(values.map((value) => value?.trim()).filter(Boolean))] as string[];
}

export function formatCurrency(value: number | null | undefined) {
  if (typeof value !== "number") {
    return "Not yet set";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

export function formatRoleName(role: AgentRole) {
  return ROLE_LABELS[role];
}

export function getDefaultSenderName(role: AgentRole) {
  return AGENT_DISPLAY_NAMES[role];
}

export function formatTimestamp(value: string | null | undefined) {
  if (!value) {
    return "No timestamp";
  }

  return new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

export function formatRelativeTime(value: string | null | undefined) {
  if (!value) {
    return "Never analyzed";
  }

  const deltaMs = Date.now() - new Date(value).getTime();
  const minutes = Math.round(deltaMs / 60000);

  if (minutes < 1) {
    return "just now";
  }

  if (minutes < 60) {
    return `${minutes} min ago`;
  }

  const hours = Math.round(minutes / 60);
  if (hours < 24) {
    return `${hours} hr ago`;
  }

  const days = Math.round(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

export function extractJsonObject(raw: string) {
  const fencedMatch = raw.match(/```json\s*([\s\S]*?)```/i);
  if (fencedMatch?.[1]) {
    return fencedMatch[1].trim();
  }

  const firstBrace = raw.indexOf("{");
  const lastBrace = raw.lastIndexOf("}");
  if (firstBrace >= 0 && lastBrace > firstBrace) {
    return raw.slice(firstBrace, lastBrace + 1);
  }

  return raw.trim();
}

export function messageTypeToSourceType(messageType: MessageType): SourceType {
  if (messageType === "email") {
    return "email";
  }

  if (messageType === "call_transcript") {
    return "call";
  }

  return "chat";
}

export function summarizeEmailLine(content: string) {
  return content.split(/\r?\n/)[0]?.replace(/^Subject:\s*/i, "").slice(0, 60) ?? "Email update";
}

export function normalizeWhitespace(input: string) {
  return input.replace(/\s+/g, " ").trim();
}

export function normalizeNegotiationNumbers(input: string) {
  return input.replace(
    SPOKEN_NUMBER_SEQUENCE,
    (fullMatch, phrase: string, suffix: string | undefined, offset: number, fullText: string) => {
      const trailingText = fullText.slice(offset + fullMatch.length);
      if (/^\s*\(\$\d/.test(trailingText)) {
        return fullMatch;
      }

      const sentence = getSentenceWindow(fullText, offset, fullMatch.length);
      const tokens = tokenizeNumberPhrase(phrase);
      const numericValue = parseMoneyLikeNumber(tokens, suffix, sentence);

      if (numericValue === null) {
        return fullMatch;
      }

      return `${fullMatch} (${formatCurrency(numericValue)})`;
    }
  );
}

function getSentenceWindow(content: string, startIndex: number, matchLength: number) {
  const previousBoundary = Math.max(
    content.lastIndexOf(".", startIndex),
    content.lastIndexOf("!", startIndex),
    content.lastIndexOf("?", startIndex),
    content.lastIndexOf("\n", startIndex)
  );
  const nextCandidates = [
    content.indexOf(".", startIndex + matchLength),
    content.indexOf("!", startIndex + matchLength),
    content.indexOf("?", startIndex + matchLength),
    content.indexOf("\n", startIndex + matchLength)
  ].filter((value) => value >= 0);
  const nextBoundary = nextCandidates.length ? Math.min(...nextCandidates) : content.length;

  return content.slice(previousBoundary + 1, nextBoundary).toLowerCase();
}

function tokenizeNumberPhrase(phrase: string) {
  return phrase
    .toLowerCase()
    .split(/[\s-]+/)
    .map((token) => token.replace(/[^a-z]/g, ""))
    .filter((token) => token.length > 0 && token !== "and");
}

function parseMoneyLikeNumber(tokens: string[], suffix: string | undefined, sentence: string) {
  if (!tokens.length) {
    return null;
  }

  const explicitSuffix = suffix?.toLowerCase();
  const hasScaleWord = tokens.some((token) => token in SCALE_WORDS && SCALE_WORDS[token] >= 1000);
  const shorthandWithScale = parseScaleShorthand(tokens);
  const shorthandValue = parsePriceShorthand(tokens);
  const standardValue = parseStandardNumberWords(tokens);

  let value = shorthandWithScale ?? shorthandValue ?? standardValue;
  if (value === null) {
    return null;
  }

  if (explicitSuffix === "k" || explicitSuffix === "grand") {
    value *= 1000;
  }

  const hasExplicitMoneyScale = hasScaleWord || explicitSuffix === "k" || explicitSuffix === "grand";
  const looksMonetary = hasExplicitMoneyScale || Boolean(explicitSuffix) || MONEY_CONTEXT_HINTS.test(sentence);

  if (!looksMonetary) {
    return null;
  }

  if (!hasExplicitMoneyScale && value >= 100 && value <= 999) {
    value *= 1000;
  }

  return value >= 1000 ? value : null;
}

function parseScaleShorthand(tokens: string[]) {
  if (tokens.length < 2) {
    return null;
  }

  const lastToken = tokens[tokens.length - 1];
  const scale = SCALE_WORDS[lastToken];
  if (!scale || scale < 1000) {
    return null;
  }

  const prefixTokens = tokens.slice(0, -1);
  const prefixValue = parsePriceShorthand(prefixTokens);
  return prefixValue !== null ? prefixValue * scale : null;
}

function parsePriceShorthand(tokens: string[]) {
  const rawValues = tokens.map((token) => NUMBER_WORD_VALUES[token]);
  if (rawValues.some((value) => typeof value !== "number")) {
    return null;
  }

  if (tokens.length === 2) {
    const [hundreds, remainder] = rawValues;
    if (hundreds >= 1 && hundreds <= 9 && remainder >= 10 && remainder <= 99) {
      return hundreds * 100 + remainder;
    }
  }

  if (tokens.length === 3) {
    const [hundreds, middle, ones] = rawValues;
    if (hundreds >= 1 && hundreds <= 9 && middle === 0 && ones >= 0 && ones <= 99) {
      return hundreds * 100 + ones;
    }

    if (hundreds >= 1 && hundreds <= 9 && middle >= 10 && middle <= 99 && ones >= 0 && ones <= 9) {
      return hundreds * 100 + middle + ones;
    }
  }

  return null;
}

function parseStandardNumberWords(tokens: string[]) {
  let current = 0;
  let total = 0;
  let consumed = false;

  for (const token of tokens) {
    if (token in NUMBER_WORD_VALUES) {
      current += NUMBER_WORD_VALUES[token];
      consumed = true;
      continue;
    }

    if (token === "hundred") {
      current = Math.max(current, 1) * 100;
      consumed = true;
      continue;
    }

    if (token === "thousand" || token === "million") {
      current = Math.max(current, 1);
      total += current * SCALE_WORDS[token];
      current = 0;
      consumed = true;
      continue;
    }

    return null;
  }

  return consumed ? total + current : null;
}

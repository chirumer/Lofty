import { DEMO_LISTING } from "@/lib/demo";
import { callLLMWithFallback, hasOpenRouterConfig } from "@/lib/openrouter";
import { AGENT_SYSTEM_PROMPT, buildAnalysisPrompt } from "@/lib/prompts";
import { getSupabaseServerClient } from "@/lib/supabase-server";
import {
  dedupeStrings,
  extractJsonObject,
  formatCurrency,
  formatRoleName,
  messageTypeToSourceType,
  normalizeNegotiationNumbers,
  normalizeWhitespace,
  summarizeEmailLine
} from "@/lib/utils";
import type {
  AgentRole,
  Message,
  Negotiation,
  NegotiationAnalysis,
  NegotiationEvent,
  NegotiationStatus
} from "@/types";

const CONCERN_HINTS =
  /(roof|inspection|repair|timeline|closing|condition|leaseback|contingenc|appraisal|financing|foundation|seller credit|credit|as-is|work)/i;
const AGREEMENT_HINTS =
  /(agree|agreed|included in the sale|appliances included|included appliances|leaseback|closing date|closing on|credit toward|seller paid)/i;
const PENDING_HINTS = /(pending|awaiting|waiting on|need|needs|subject to|if the|confirm|finalize|inspection)/i;
const GLOBAL_AGREEMENT_HINTS =
  /(we have a deal|deal is accepted|offer accepted|under contract|accepted the offer|mutually agreed to all terms)/i;
const FAILURE_HINTS = /(deal is off|not moving forward|walk away|walking away|failed|terminate)/i;
const PENDING_STATUS_HINTS = /(pending|awaiting|waiting on|subject to|needs to|need to)/i;

interface SavedNegotiation extends Negotiation {
  summary: string;
}

export async function runAgent(listingId: string) {
  const supabase = getSupabaseServerClient();

  const [{ data: messages, error: messagesError }, { data: negotiation, error: negotiationError }] =
    await Promise.all([
      supabase.from("messages").select("*").eq("listing_id", listingId).order("created_at", { ascending: true }),
      supabase.from("negotiations").select("*").eq("listing_id", listingId).maybeSingle()
    ]);

  if (messagesError) {
    throw new Error(messagesError.message);
  }

  if (negotiationError) {
    throw new Error(negotiationError.message);
  }

  if (!messages?.length) {
    return null;
  }

  const analysis = await analyzeNegotiation(messages, negotiation);
  const savedNegotiation: SavedNegotiation = {
    listing_id: listingId,
    asking_price: analysis.asking_price ?? negotiation?.asking_price ?? DEMO_LISTING.asking_price,
    current_offer_price: analysis.current_offer_price,
    status: analysis.status,
    buyer_concerns: analysis.buyer_concerns,
    seller_concerns: analysis.seller_concerns,
    agreed_terms: analysis.agreed_terms,
    pending_items: analysis.pending_items,
    agent_summary: analysis.summary,
    last_analyzed_at: new Date().toISOString(),
    summary: analysis.summary
  };

  const { error: upsertError } = await supabase.from("negotiations").upsert({
    listing_id: listingId,
    asking_price: savedNegotiation.asking_price,
    current_offer_price: savedNegotiation.current_offer_price,
    status: savedNegotiation.status,
    buyer_concerns: savedNegotiation.buyer_concerns,
    seller_concerns: savedNegotiation.seller_concerns,
    agreed_terms: savedNegotiation.agreed_terms,
    pending_items: savedNegotiation.pending_items,
    agent_summary: savedNegotiation.summary,
    last_analyzed_at: savedNegotiation.last_analyzed_at
  });

  if (upsertError) {
    throw new Error(upsertError.message);
  }

  await detectAndWriteEvents(listingId, negotiation, savedNegotiation, messages[messages.length - 1]);

  return savedNegotiation;
}

async function analyzeNegotiation(messages: Message[], negotiation: Negotiation | null) {
  const normalizedMessages = messages.map((message) => ({
    ...message,
    content: normalizeNegotiationNumbers(message.content)
  }));

  if (!hasOpenRouterConfig()) {
    return heuristicAnalysis(normalizedMessages, negotiation);
  }

  try {
    const prompt = buildAnalysisPrompt(normalizedMessages, negotiation);
    const rawResponse = await callLLMWithFallback(AGENT_SYSTEM_PROMPT, prompt);
    const parsed = JSON.parse(extractJsonObject(rawResponse)) as Partial<NegotiationAnalysis>;
    return sanitizeAnalysis(parsed, negotiation, normalizedMessages.length);
  } catch {
    return heuristicAnalysis(normalizedMessages, negotiation);
  }
}

function sanitizeAnalysis(
  analysis: Partial<NegotiationAnalysis>,
  negotiation: Negotiation | null,
  messageCount: number
): NegotiationAnalysis {
  const status: NegotiationStatus =
    analysis.status && ["active", "pending", "agreed", "failed"].includes(analysis.status)
      ? analysis.status
      : negotiation?.status ?? "active";

  return {
    current_offer_price: typeof analysis.current_offer_price === "number" ? analysis.current_offer_price : null,
    asking_price:
      typeof analysis.asking_price === "number"
        ? analysis.asking_price
        : negotiation?.asking_price ?? DEMO_LISTING.asking_price,
    status,
    buyer_concerns: dedupeStrings(analysis.buyer_concerns ?? negotiation?.buyer_concerns ?? []),
    seller_concerns: dedupeStrings(analysis.seller_concerns ?? negotiation?.seller_concerns ?? []),
    agreed_terms: dedupeStrings(analysis.agreed_terms ?? negotiation?.agreed_terms ?? []),
    pending_items: dedupeStrings(analysis.pending_items ?? negotiation?.pending_items ?? []),
    summary:
      analysis.summary?.trim() ||
      negotiation?.agent_summary ||
      "The agent needs more conversation context before it can summarize the negotiation.",
    low_confidence: messageCount < 3
  };
}

function heuristicAnalysis(messages: Message[], negotiation: Negotiation | null): NegotiationAnalysis {
  const askingPrice = negotiation?.asking_price ?? DEMO_LISTING.asking_price;
  const currentOffer = detectLatestOffer(messages, askingPrice);
  const buyerConcerns = dedupeStrings([
    ...(negotiation?.buyer_concerns ?? []),
    ...collectRoleSentences(messages, "buyer_agent", CONCERN_HINTS)
  ]);
  const sellerConcerns = dedupeStrings([
    ...(negotiation?.seller_concerns ?? []),
    ...collectRoleSentences(messages, "seller_agent", CONCERN_HINTS)
  ]);
  const agreedTerms = dedupeStrings([
    ...(negotiation?.agreed_terms ?? []),
    ...messages.flatMap((message) => extractMatchingSentences(message.content, AGREEMENT_HINTS))
  ]);
  const pendingItems = dedupeStrings([
    ...messages.flatMap((message) => extractMatchingSentences(message.content, PENDING_HINTS))
  ]).slice(0, 6);
  const status = detectStatus(messages, negotiation?.status);
  const summary = buildHeuristicSummary({
    askingPrice,
    currentOffer,
    buyerConcerns,
    sellerConcerns,
    agreedTerms,
    pendingItems,
    status
  });

  return {
    current_offer_price: currentOffer,
    asking_price: askingPrice,
    status,
    buyer_concerns: buyerConcerns,
    seller_concerns: sellerConcerns,
    agreed_terms: agreedTerms,
    pending_items: pendingItems,
    summary,
    low_confidence: messages.length < 3
  };
}

function detectLatestOffer(messages: Message[], askingPrice: number | null) {
  let latestOffer: number | null = null;

  for (const message of messages) {
    const amounts = parseDollarAmounts(message.content);
    if (!amounts.length) {
      continue;
    }

    const messageText = message.content.toLowerCase();
    const isPureAskReference =
      message.sender_role === "seller_agent" &&
      amounts.length === 1 &&
      askingPrice === amounts[0] &&
      /(asking|listed at|priced at)/i.test(messageText);

    if (isPureAskReference) {
      continue;
    }

    latestOffer = amounts[amounts.length - 1];
  }

  return latestOffer;
}

function parseDollarAmounts(content: string) {
  const matches = [...content.matchAll(/\$?\s*(\d{3}(?:,\d{3})+|\d{3,6})(?:\s*([kK]))?/g)];

  return matches
    .map((match) => {
      const base = Number(match[1].replace(/,/g, ""));
      if (!Number.isFinite(base)) {
        return null;
      }

      return match[2] ? base * 1000 : base;
    })
    .filter((value): value is number => typeof value === "number");
}

function collectRoleSentences(messages: Message[], role: AgentRole, pattern: RegExp) {
  return messages
    .filter((message) => message.sender_role === role)
    .flatMap((message) => extractMatchingSentences(message.content, pattern));
}

function extractMatchingSentences(content: string, pattern: RegExp) {
  return content
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => normalizeWhitespace(sentence))
    .filter((sentence) => sentence.length > 8 && pattern.test(sentence));
}

function detectStatus(messages: Message[], previousStatus: NegotiationStatus | undefined): NegotiationStatus {
  const combined = messages.map((message) => message.content.toLowerCase()).join("\n");

  if (FAILURE_HINTS.test(combined)) {
    return "failed";
  }

  if (GLOBAL_AGREEMENT_HINTS.test(combined)) {
    return "agreed";
  }

  if (PENDING_STATUS_HINTS.test(combined)) {
    return "pending";
  }

  return previousStatus ?? "active";
}

function buildHeuristicSummary({
  askingPrice,
  currentOffer,
  buyerConcerns,
  sellerConcerns,
  agreedTerms,
  pendingItems,
  status
}: {
  askingPrice: number;
  currentOffer: number | null;
  buyerConcerns: string[];
  sellerConcerns: string[];
  agreedTerms: string[];
  pendingItems: string[];
  status: NegotiationStatus;
}) {
  const sentences: string[] = [];

  if (currentOffer) {
    sentences.push(
      `The current offer sits at ${formatCurrency(currentOffer)} against the ${formatCurrency(askingPrice)} ask.`
    );
  } else {
    sentences.push(
      `The listing is still anchored at ${formatCurrency(askingPrice)} with no clear offer captured yet.`
    );
  }

  if (buyerConcerns.length || sellerConcerns.length) {
    const concernParts = [];
    if (buyerConcerns.length) {
      concernParts.push(`buyer concerns include ${buyerConcerns[0].toLowerCase()}`);
    }
    if (sellerConcerns.length) {
      concernParts.push(`seller concerns include ${sellerConcerns[0].toLowerCase()}`);
    }
    sentences.push(`${concernParts.join(", and ")}.`);
  }

  if (agreedTerms.length) {
    sentences.push(`Confirmed terms so far: ${agreedTerms.slice(0, 2).join("; ")}.`);
  }

  if (pendingItems.length) {
    sentences.push(`Still pending: ${pendingItems.slice(0, 2).join("; ")}.`);
  }

  if (status !== "active") {
    sentences.push(`Negotiation status is currently ${status}.`);
  }

  return sentences.join(" ");
}

async function detectAndWriteEvents(
  listingId: string,
  previousState: Negotiation | null,
  newState: SavedNegotiation,
  latestMessage: Message
) {
  const supabase = getSupabaseServerClient();
  const source = messageTypeToSourceType(latestMessage.message_type);

  const candidates: Array<Omit<NegotiationEvent, "id">> = [];

  if (
    typeof newState.current_offer_price === "number" &&
    newState.current_offer_price !== previousState?.current_offer_price
  ) {
    const previousPrice = previousState?.current_offer_price;
    candidates.push({
      listing_id: listingId,
      event_type: previousPrice ? "counter_offer" : "offer_made",
      summary: previousPrice
        ? `Counter offer: ${formatCurrency(newState.current_offer_price)} (was ${formatCurrency(previousPrice)})`
        : `First offer: ${formatCurrency(newState.current_offer_price)}`,
      source_type: source,
      price_at_event: newState.current_offer_price,
      created_at: latestMessage.created_at
    });
  }

  const previousConcerns = new Set([...(previousState?.buyer_concerns ?? []), ...(previousState?.seller_concerns ?? [])]);
  for (const concern of [...newState.buyer_concerns, ...newState.seller_concerns]) {
    if (previousConcerns.has(concern)) {
      continue;
    }

    candidates.push({
      listing_id: listingId,
      event_type: "concern_raised",
      summary: `Concern raised: ${concern}`,
      source_type: source,
      price_at_event: newState.current_offer_price,
      created_at: latestMessage.created_at
    });
  }

  const previousTerms = new Set(previousState?.agreed_terms ?? []);
  for (const term of newState.agreed_terms) {
    if (previousTerms.has(term)) {
      continue;
    }

    candidates.push({
      listing_id: listingId,
      event_type: "term_agreed",
      summary: `Term agreed: ${term}`,
      source_type: source,
      price_at_event: newState.current_offer_price,
      created_at: latestMessage.created_at
    });
  }

  if (previousState?.status && previousState.status !== newState.status) {
    candidates.push({
      listing_id: listingId,
      event_type:
        newState.status === "agreed"
          ? "deal_agreed"
          : newState.status === "failed"
            ? "deal_failed"
            : "status_changed",
      summary: `Negotiation status changed to ${newState.status.toUpperCase()}.`,
      source_type: source,
      price_at_event: newState.current_offer_price,
      created_at: latestMessage.created_at
    });
  }

  if (latestMessage.message_type === "email") {
    candidates.push({
      listing_id: listingId,
      event_type: "email_received",
      summary: `Email received: ${summarizeEmailLine(latestMessage.content)}`,
      source_type: "email",
      price_at_event: newState.current_offer_price,
      created_at: latestMessage.created_at
    });
  }

  if (latestMessage.message_type === "call_transcript") {
    candidates.push({
      listing_id: listingId,
      event_type: "call_completed",
      summary: `Call transcript captured from ${formatRoleName(latestMessage.sender_role)}.`,
      source_type: "call",
      price_at_event: newState.current_offer_price,
      created_at: latestMessage.created_at
    });
  }

  if (!candidates.length) {
    return;
  }

  const { data: recentEvents, error: recentEventsError } = await supabase
    .from("negotiation_events")
    .select("event_type, summary")
    .eq("listing_id", listingId)
    .order("created_at", { ascending: false })
    .limit(20);

  if (recentEventsError) {
    throw new Error(recentEventsError.message);
  }

  const filtered = candidates.filter(
    (candidate) =>
      !recentEvents?.some((event) => event.event_type === candidate.event_type && event.summary === candidate.summary)
  );

  if (!filtered.length) {
    return;
  }

  const { error } = await supabase.from("negotiation_events").insert(filtered);

  if (error) {
    throw new Error(error.message);
  }
}

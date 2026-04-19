import { normalizeNegotiationNumbers } from "@/lib/utils";
import type { Message, Negotiation } from "@/types";

export const AGENT_SYSTEM_PROMPT = `
You are an AI negotiation analyst for real estate transactions.
You monitor conversations between a seller's agent and a buyer's agent and extract the latest negotiation state.

Rules:
- Use only information explicitly stated in the messages.
- Track the most recent offer price precisely.
- If a spoken amount appears with a numeric annotation in parentheses, trust the numeric form.
- Keep buyer and seller concerns separate.
- Preserve already agreed terms when they remain valid.
- Set status to "agreed" only when the parties explicitly indicate the overall deal is accepted.
- Only update the active listing's negotiation state.
- Return valid JSON only. No markdown. No commentary.
`;

export function buildAnalysisPrompt(messages: Message[], currentNegotiation: Negotiation | null) {
  const messageHistory = messages
    .map(
      (message) =>
        `[${message.message_type.toUpperCase()}] ${message.sender_role} (${new Date(
          message.created_at
        ).toLocaleString()}): ${normalizeNegotiationNumbers(message.content)}`
    )
    .join("\n");

  return `
LISTING: ${currentNegotiation?.listing_id ?? "listing_001"}
ASKING PRICE: $${currentNegotiation?.asking_price?.toLocaleString() ?? "unknown"}

CURRENT NEGOTIATION STATE:
${JSON.stringify(currentNegotiation, null, 2)}

CONVERSATION HISTORY:
${messageHistory}

Return JSON with this exact shape:
{
  "current_offer_price": number | null,
  "asking_price": number | null,
  "status": "active" | "pending" | "agreed" | "failed",
  "buyer_concerns": string[],
  "seller_concerns": string[],
  "agreed_terms": string[],
  "pending_items": string[],
  "summary": string,
  "low_confidence": boolean
}
`;
}

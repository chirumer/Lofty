import type { AgentRole } from "@/types";

export const DEMO_LISTING_ID = "listing_001";

export const ROLE_LABELS: Record<AgentRole, string> = {
  seller_agent: "Seller's Agent",
  buyer_agent: "Buyer's Agent"
};

export const AGENT_DISPLAY_NAMES: Record<AgentRole, string> = {
  seller_agent: "Ryan",
  buyer_agent: "Alex"
};

export const DEFAULT_AGENT_EMAILS: Record<AgentRole, string> = {
  seller_agent: process.env.SELLER_AGENT_EMAIL ?? "seller.agent@example.com",
  buyer_agent: process.env.BUYER_AGENT_EMAIL ?? "buyer.agent@example.com"
};

export const DEFAULT_VOICE_IDS: Record<AgentRole, string> = {
  seller_agent: process.env.ELEVENLABS_VOICE_ID ?? "pNInz6obpgDQGcFmaJgB",
  buyer_agent: "21m00Tcm4TlvDq8ikWAM"
};

export const NEGOTIATION_STATUS_OPTIONS = ["active", "pending", "agreed", "failed"] as const;

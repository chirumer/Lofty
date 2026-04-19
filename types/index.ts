export type AgentRole = "seller_agent" | "buyer_agent";

export type MessageType = "chat" | "call_transcript" | "email";

export type NegotiationStatus = "active" | "pending" | "agreed" | "failed";

export type NegotiationEventType =
  | "negotiation_started"
  | "offer_made"
  | "counter_offer"
  | "concern_raised"
  | "term_agreed"
  | "status_changed"
  | "email_received"
  | "call_completed"
  | "deal_agreed"
  | "deal_failed";

export type SourceType = "chat" | "email" | "call" | "system";

export interface Listing {
  id: string;
  address: string;
  asking_price: number;
  bedrooms: number | null;
  bathrooms: number | null;
  description: string | null;
  created_at: string;
}

export interface Message {
  id: string;
  listing_id: string;
  sender_role: AgentRole;
  sender_name: string;
  content: string;
  message_type: MessageType;
  created_at: string;
}

export interface Negotiation {
  listing_id: string;
  asking_price: number | null;
  current_offer_price: number | null;
  status: NegotiationStatus;
  buyer_concerns: string[];
  seller_concerns: string[];
  agreed_terms: string[];
  pending_items: string[];
  agent_summary: string | null;
  last_analyzed_at: string | null;
}

export interface NegotiationEvent {
  id: string;
  listing_id: string;
  event_type: NegotiationEventType;
  summary: string;
  source_type: SourceType;
  price_at_event: number | null;
  created_at: string;
}

export interface NegotiationAnalysis {
  current_offer_price: number | null;
  asking_price: number | null;
  status: NegotiationStatus;
  buyer_concerns: string[];
  seller_concerns: string[];
  agreed_terms: string[];
  pending_items: string[];
  summary: string;
  low_confidence?: boolean;
}

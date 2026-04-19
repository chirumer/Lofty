import { DEMO_LISTING_ID } from "@/lib/constants";
import type { Listing, Message, Negotiation, NegotiationEvent } from "@/types";

export const DEMO_LISTING: Listing = {
  id: DEMO_LISTING_ID,
  address: "4522 Sycamore Drive, Austin TX",
  asking_price: 625000,
  bedrooms: 4,
  bathrooms: 3,
  description:
    "A polished family home in a sought-after school district, featuring a custom chef's kitchen with Sub-Zero appliances and an older roof/HVAC pair that is driving the negotiation.",
  created_at: "2026-04-18T14:00:00.000Z"
};

export const DEMO_NEGOTIATION: Negotiation = {
  listing_id: DEMO_LISTING_ID,
  asking_price: 625000,
  current_offer_price: 605000,
  status: "active",
  buyer_concerns: [
    "Roof age could create a $20,000 replacement bill in year one.",
    "Original HVAC adds near-term systems risk for the buyers."
  ],
  seller_concerns: [
    "Sellers want the custom chef's kitchen and Sub-Zero appliances valued in the price.",
    "The listing momentum and school district demand support a premium ask."
  ],
  agreed_terms: [],
  pending_items: [
    "Seller response to the $605,000 ask is still outstanding.",
    "Open House traffic this weekend could strengthen the seller position.",
    "Roof and HVAC risk still need to be priced into the deal."
  ],
  agent_summary:
    "Alex opened at $595,000 due to roof and HVAC concerns, then improved to $605,000 after citing a nearby comp with a new roof. Ryan held the premium position by pointing to the custom chef's kitchen, strong school district demand, and heavy Open House traffic, so the two sides remain apart with no accepted counter yet.",
  last_analyzed_at: "2026-04-18T14:56:00.000Z"
};

export const DEMO_MESSAGES: Array<Omit<Message, "id">> = [
  {
    listing_id: DEMO_LISTING_ID,
    sender_role: "buyer_agent",
    sender_name: "Alex",
    content:
      "Hey Ryan! My clients loved the walkthrough at 4522 Sycamore. They're ready to move, but the roof age is a big sticking point for them.",
    message_type: "chat",
    created_at: "2026-04-18T14:05:00.000Z"
  },
  {
    listing_id: DEMO_LISTING_ID,
    sender_role: "seller_agent",
    sender_name: "Ryan",
    content:
      "Glad they liked it! It's a gem. The roof has zero leaks, and the sellers have been meticulous with maintenance. What are they thinking?",
    message_type: "chat",
    created_at: "2026-04-18T14:12:00.000Z"
  },
  {
    listing_id: DEMO_LISTING_ID,
    sender_role: "buyer_agent",
    sender_name: "Alex",
    content:
      "They're worried about a $20k bill in year one. They want to offer $595k (asking is $625k) to offset the roof and the original HVAC.",
    message_type: "chat",
    created_at: "2026-04-18T14:23:00.000Z"
  },
  {
    listing_id: DEMO_LISTING_ID,
    sender_role: "seller_agent",
    sender_name: "Ryan",
    content:
      "Ouch. $595k won't work. Remember, they just put $40k into that custom chef's kitchen. You won't find Sub-Zero appliances anywhere else in this zip code at this price point.",
    message_type: "chat",
    created_at: "2026-04-18T14:38:00.000Z"
  },
  {
    listing_id: DEMO_LISTING_ID,
    sender_role: "buyer_agent",
    sender_name: "Alex",
    content:
      "The kitchen is elite, but you can't cook if the roof is leaking! Comps across the street closed at $610k with a new roof. Can we meet at $605k?",
    message_type: "chat",
    created_at: "2026-04-18T14:49:00.000Z"
  },
  {
    listing_id: DEMO_LISTING_ID,
    sender_role: "seller_agent",
    sender_name: "Ryan",
    content:
      "My sellers are firm that the kitchen and the school district justifies the premium. Plus, I have 15+ groups confirmed for the Open House this weekend.",
    message_type: "chat",
    created_at: "2026-04-18T14:54:00.000Z"
  }
];

export const DEMO_EVENTS: Array<Omit<NegotiationEvent, "id">> = [
  {
    listing_id: DEMO_LISTING_ID,
    event_type: "negotiation_started",
    summary: "Negotiation opened. Asking price: $625,000.",
    source_type: "system",
    price_at_event: 625000,
    created_at: "2026-04-18T14:00:00.000Z"
  },
  {
    listing_id: DEMO_LISTING_ID,
    event_type: "concern_raised",
    summary: "Buyer flagged roof age and original HVAC risk right after the walkthrough.",
    source_type: "chat",
    price_at_event: 625000,
    created_at: "2026-04-18T14:05:00.000Z"
  },
  {
    listing_id: DEMO_LISTING_ID,
    event_type: "offer_made",
    summary: "Buyer opened at $595,000 to offset roof and HVAC concerns.",
    source_type: "chat",
    price_at_event: 595000,
    created_at: "2026-04-18T14:23:00.000Z"
  },
  {
    listing_id: DEMO_LISTING_ID,
    event_type: "counter_offer",
    summary: "Buyer improved to $605,000 after citing a nearby comp with a new roof.",
    source_type: "chat",
    price_at_event: 605000,
    created_at: "2026-04-18T14:49:00.000Z"
  },
  {
    listing_id: DEMO_LISTING_ID,
    event_type: "status_changed",
    summary: "Seller held firm on value, citing the kitchen upgrade, school district, and strong Open House demand.",
    source_type: "chat",
    price_at_event: 605000,
    created_at: "2026-04-18T14:54:00.000Z"
  }
];

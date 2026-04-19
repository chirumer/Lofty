export type CopilotModelId =
  | "gemini-2.5-flash"
  | "gemini-3.1-flash-lite-preview"
  | "gemini-3-flash-preview";

export type CopilotChatRole = "user" | "assistant";
export type CopilotChatActionKind = "smart-plan-guide";

export interface CopilotModelOption {
  id: CopilotModelId;
  label: string;
  isDefault: boolean;
}

export interface CopilotChatAction {
  kind: CopilotChatActionKind;
  label: string;
}

export interface CopilotChatMessage {
  id: string;
  role: CopilotChatRole;
  content: string;
  createdAt: string;
  action?: CopilotChatAction;
}

export interface CopilotListingSummary {
  id: string;
  type: string;
  headline: string;
  address: string;
  city: string;
  state: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  neighborhood: string;
}

export interface CopilotChatContext {
  activeView: string;
  roleName: string;
  enabledFeatures: string[];
  siteGoal?: string;
  marketFocus?: string;
  enabledListings?: CopilotListingSummary[];
}

export interface CopilotChatRequest {
  modelId?: string;
  messages?: CopilotChatMessage[];
  context?: CopilotChatContext;
}

export interface CopilotChatResponse {
  message?: CopilotChatMessage;
  error?: string;
}

export const COPILOT_MODEL_OPTIONS: CopilotModelOption[] = [
  {
    id: "gemini-2.5-flash",
    label: "Lofty 2.5 flash",
    isDefault: true
  },
  {
    id: "gemini-3.1-flash-lite-preview",
    label: "Lofty 3.1 flash lite preview",
    isDefault: false
  },
  {
    id: "gemini-3-flash-preview",
    label: "Lofty 3.0 flash",
    isDefault: false
  }
];

const DEFAULT_COPILOT_MODEL_ID = COPILOT_MODEL_OPTIONS.find((option) => option.isDefault)?.id ?? COPILOT_MODEL_OPTIONS[0].id;
export const SMART_PLAN_GUIDE_RESPONSE =
  "To set this up, head to the Automations tab and create a new Smart Plan that triggers when a lead is created from your website. Within the plan, use the Populate Variable action to grab your nextDayAvailability and follow it with an Auto Email that inserts the #availability# token directly into your message. It's a great way to stay responsive while you're busy, and I can guide you through the specific configuration steps if you need a hand.";
export const SMART_PLAN_GUIDE_ACTION: CopilotChatAction = {
  kind: "smart-plan-guide",
  label: "Guide Me"
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

export function getDefaultCopilotModelId() {
  return DEFAULT_COPILOT_MODEL_ID;
}

export function isCopilotModelId(value: string): value is CopilotModelId {
  return COPILOT_MODEL_OPTIONS.some((option) => option.id === value);
}

export function getCopilotModelOption(modelId: string) {
  return COPILOT_MODEL_OPTIONS.find((option) => option.id === modelId) ?? COPILOT_MODEL_OPTIONS[0];
}

export function matchesSmartPlanHelpPrompt(value: string) {
  const normalized = value.trim();
  return /\bhelp\b/i.test(normalized) && /\bsmart\b/i.test(normalized) && /\bplans?\b/i.test(normalized);
}

export function buildCopilotSystemInstruction(context: CopilotChatContext) {
  const enabledFeatures = context.enabledFeatures.length > 0 ? context.enabledFeatures.join(", ") : "None configured yet";
  const lines = [
    "You are Lofty's AI Copilot inside a real-estate workspace.",
    "Be concise, practical, and action-oriented.",
    "Ground your answers only in the context provided by the workspace and user messages.",
    "When the user is working on a website, prioritize launch-ready copy, structure, and next steps over abstract brainstorming.",
    "Avoid claiming that changes have already been applied inside the product unless the user explicitly says so.",
    `Current view: ${context.activeView}.`,
    `Current user role: ${context.roleName}.`,
    `Enabled Lofty features: ${enabledFeatures}.`
  ];

  if (context.activeView === "idx-builder") {
    lines.push("The user is inside IDX Builder and wants help producing the first website draft.");

    if (context.siteGoal) {
      lines.push(`Website goal: ${context.siteGoal}.`);
    }

    if (context.marketFocus) {
      lines.push(`Market focus: ${context.marketFocus}.`);
    }

    if (context.enabledListings?.length) {
      lines.push("Available listings:");
      lines.push(...context.enabledListings.map((listing) => `- ${formatListingForPrompt(listing)}`));
    } else {
      lines.push("No enabled listings are available yet.");
    }
  }

  return lines.join("\n");
}

export function buildIdxBuilderStarterPrompt({
  siteGoal,
  marketFocus,
  listings
}: {
  siteGoal?: string;
  marketFocus?: string;
  listings: CopilotListingSummary[];
}) {
  const listingLine =
    listings.length > 0
      ? listings.map((listing) => formatListingForPrompt(listing)).join("\n")
      : "No enabled listings are available yet.";

  const marketLine = marketFocus?.trim() ? `Market focus: ${marketFocus.trim()}.` : "Market focus: use the connected listings to infer the best local positioning.";
  const goalLine = siteGoal?.trim() ? `Primary website goal: ${siteGoal.trim()}.` : "Primary website goal: generate a strong first draft for lead capture.";

  return [
    "Create the first draft for my Lofty IDX website.",
    goalLine,
    marketLine,
    "Use the available listings below as the main source material:",
    listingLine,
    "Please give me:",
    "1. A homepage concept with hero headline, subheadline, and CTA.",
    "2. A recommended page structure for the first launch.",
    "3. Featured-listing strategy based on the connected inventory.",
    "4. Short sample copy for the hero, featured listings section, and about section.",
    "5. The top three follow-up refinements I should ask you for next."
  ].join("\n");
}

function formatListingForPrompt(listing: CopilotListingSummary) {
  return `${listing.headline} at ${listing.address}, ${listing.city}, ${listing.state} for ${currencyFormatter.format(listing.price)} (${listing.bedrooms} bd, ${listing.bathrooms} ba, ${listing.squareFeet.toLocaleString()} sqft, ${listing.neighborhood}, ${listing.type})`;
}

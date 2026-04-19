import type { LucideIcon } from "lucide-react";

export type RoleId =
  | "company-owner"
  | "company-admin"
  | "office-owner"
  | "office-admin"
  | "agent-user"
  | "lender";

export type LibraryCardId =
  | "crm"
  | "sales"
  | "marketing"
  | "content"
  | "automation"
  | "reporting"
  | "marketplace"
  | "ai-copilots";

export type SetupPhase = "role-selection" | "builder" | "launch-success";
export type CardState = "not-started" | "draft" | "built";
export type LockType = "role" | "permission" | "add-on";
export type FieldType = "text" | "textarea" | "select" | "toggle";

export interface RoleDefinition {
  id: RoleId;
  name: string;
  summary: string;
  whatYouSee: string;
  setupFocus: string;
  icon: LucideIcon;
  accessSummary: string[];
}

export interface PromptFieldDefinition {
  id: string;
  label: string;
  type: FieldType;
  helperText: string;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  defaultValue?: string | boolean;
}

export interface SubfeatureDefinition {
  id: string;
  name: string;
  description: string;
  allowedRoles: RoleId[];
  requiredFor: RoleId[];
  defaultEnabled: boolean;
  setupSummary: string;
  lockedReason: string;
  example: string;
  promptFields: PromptFieldDefinition[];
}

export interface LibraryCardDefinition {
  id: LibraryCardId;
  label: string;
  description: string;
  allowedRoles: RoleId[];
  requiredFor: RoleId[];
  icon: LucideIcon;
  whatItDoes: string;
  whyItMatters: string;
  tip: string;
  lockType?: LockType;
  lockExplanation: string;
  subfeatures: SubfeatureDefinition[];
}

export interface PresetDefinition {
  id: string;
  name: string;
  description: string;
  roleIds: RoleId[];
  recommendedCards: LibraryCardId[];
}

export type PromptValues = Record<string, string | boolean>;
export type PromptConfigStore = Record<string, PromptValues>;
export type CardToggleStore = Record<string, boolean>;
export type LaunchedListingType = "mlx" | "pocket";
export type LaunchedShellView =
  | "home"
  | "crm-people"
  | "messages"
  | "negotiation"
  | "automation-smart-plans"
  | "listings"
  | "websites"
  | "idx-builder";
export type LeadTaskType = "Call" | "Text" | "Email" | "Other";
export type AppointmentType = "Appointment" | "Showing";
export type OpportunityType = "High Interest" | "Likely Seller" | "Back to Site";
export type KeepInTouchType = "Birthday" | "Follow-Up";
export type LeadViewId = "all-leads" | "my-leads" | "lead-pond" | "partial-leads";

export interface LeadTask {
  id: string;
  type: LeadTaskType;
  title: string;
  timeLabel: string;
  completed?: boolean;
}

export interface LeadAppointment {
  id: string;
  type: AppointmentType;
  title: string;
  timeLabel: string;
  incomplete?: boolean;
}

export interface LeadTransaction {
  id: string;
  address: string;
  status: "Near Deadline" | "Expired";
  checklistCount: number;
}

export interface DashboardPerson {
  id: string;
  name: string;
  email: string;
  phone: string;
  leadType: string;
  source: string;
  stage: string;
  score: number;
  assignedAgent: string;
  lastTouch: string;
  lastReply: string;
  communicationSummary: string;
  interestedListing: string;
  roles: string[];
  views: LeadViewId[];
  untouched?: boolean;
  isNewLead?: boolean;
  keepInTouch?: KeepInTouchType;
  birthdayLabel?: string;
  followUpLabel?: string;
  opportunities?: OpportunityType[];
  segments?: string[];
  savedSearch?: string;
  location?: string;
  lastActivity?: string;
  tasks: LeadTask[];
  appointments: LeadAppointment[];
  transaction?: LeadTransaction | null;
}

export interface DashboardUpdate {
  id: string;
  title: string;
  description: string;
  accent: string;
}

export interface ListingInsight {
  id: string;
  title: string;
  location: string;
  trend?: string;
}

export interface LaunchedListing {
  id: string;
  type: LaunchedListingType;
  sourceName: string;
  agentId?: string;
  referenceId?: string;
  contactName?: string;
  availability?: string;
  headline: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  neighborhood: string;
  trend: string;
  imageUrl: string;
  description: string;
  enabled: boolean;
}

export interface LaunchedMlsFeed {
  id: string;
  sourceName: string;
  agentId: string;
  referenceId: string;
  enabled: boolean;
}

export interface HotSheetItem {
  id: string;
  label: string;
  count: number;
}

export interface PromptTarget {
  cardId: LibraryCardId;
  subfeatureId: string;
}

export interface OnboardingSnapshot {
  selectedRole: RoleId | null;
  activeCardId: LibraryCardId | null;
  cardStates: Partial<Record<LibraryCardId, CardState>>;
  subfeatureToggles: Partial<Record<LibraryCardId, CardToggleStore>>;
  subfeatureConfigs: Partial<Record<LibraryCardId, PromptConfigStore>>;
  phase: SetupPhase;
  templatePreset: string | null;
  pendingPrompt: PromptTarget | null;
  launchReady: boolean;
  launchedMlsFeeds: LaunchedMlsFeed[];
  launchedListings: LaunchedListing[];
}

export interface RoleDashboardPreferences {
  builtCards: LibraryCardId[];
  enabledSubfeatures: Partial<Record<LibraryCardId, string[]>>;
  subfeatureConfigOverrides?: Partial<Record<LibraryCardId, PromptConfigStore>>;
}

export interface LaunchedNavItem {
  label: string;
  href?: string;
  icon?: string;
  isAi?: boolean;
  view?: LaunchedShellView;
  submenu?: LaunchedNavItem[];
}

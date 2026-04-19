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
}

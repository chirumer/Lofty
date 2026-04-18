import type { LucideIcon } from "lucide-react";

export type RoleId =
  | "company-owner"
  | "company-admin"
  | "office-owner"
  | "office-admin"
  | "agent-user"
  | "lender";

export type LayerId =
  | "profile-branding"
  | "website"
  | "mls-idx"
  | "communication"
  | "lead-capture"
  | "database-contacts"
  | "lead-routing"
  | "automation-smart-plans"
  | "tasks-calendar"
  | "ai-copilots"
  | "marketing"
  | "reporting"
  | "team-management"
  | "transactions"
  | "mobile-app"
  | "marketplace-addons"
  | "compliance-permissions";

export type FeatureId = string;

export type SetupPhase = "role-selection" | "overview" | "configure" | "review" | "website-live";

export interface RoleDefinition {
  id: RoleId;
  title: string;
  subtitle: string;
  description: string;
  accessLabel: string;
  setupFocus: string;
  icon: LucideIcon;
  accessSummary: string[];
  hiddenSummary: string[];
}

export interface FeatureDefinition {
  id: FeatureId;
  name: string;
  description: string;
  whatItIs: string;
  whyItMatters: string;
  whenToUse: string;
  whoCanUse: RoleId[];
  skipImpact: string;
  example: string;
  enabledByDefault?: boolean;
}

export interface StepDefinition {
  id: string;
  title: string;
  description: string;
  required: boolean;
  featureId?: FeatureId;
}

export interface FieldDefinition {
  id: string;
  label: string;
  type: "text" | "textarea" | "select" | "toggle";
  placeholder?: string;
  options?: string[];
  defaultValue?: string | boolean;
}

export interface LayerDefinition {
  id: LayerId;
  name: string;
  shortDescription: string;
  description: string;
  whatItIs: string;
  whyItMatters: string;
  whenToUse: string;
  whoCanUseLabel: string;
  skipImpact: string;
  example: string;
  roles: RoleId[];
  lockedExplanation?: string;
  requiredFor: RoleId[];
  skippableFor: RoleId[];
  dependencies: LayerId[];
  unlocks: string[];
  featureIds: FeatureId[];
  steps: StepDefinition[];
  configSchema: FieldDefinition[];
}

export interface TemplateDefinition {
  id: string;
  name: string;
  description: string;
  roleIds: RoleId[];
  activeLayers: LayerId[];
  pinnedLayers?: LayerId[];
  skippedLayers?: LayerId[];
  adminOnly?: boolean;
}

export type LayerConfigValues = Record<string, string | boolean>;

export interface SavedTemplate {
  id: string;
  name: string;
  description: string;
  roleIds: RoleId[];
  activeLayers: LayerId[];
  pinnedLayers: LayerId[];
  skippedLayers: LayerId[];
  createdAt: number;
}

export interface OnboardingSnapshot {
  selectedRole: RoleId | null;
  activeLayers: LayerId[];
  skippedLayers: LayerId[];
  completedLayers: LayerId[];
  pinnedLayers: LayerId[];
  hiddenLayers: LayerId[];
  featureOrder: Partial<Record<LayerId, FeatureId[]>>;
  layerConfigs: Partial<Record<LayerId, LayerConfigValues>>;
  stepCompletion: Record<string, boolean>;
  savedTemplates: SavedTemplate[];
  phase: SetupPhase;
}

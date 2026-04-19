"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import {
  ArrowLeft,
  Bell,
  Bot,
  CalendarClock,
  ChevronDown,
  ChevronRight,
  Clock3,
  CopyPlus,
  Database,
  Eye,
  FolderPlus,
  LayoutGrid,
  ListChecks,
  Mail,
  MessageSquare,
  Phone,
  Plus,
  Search,
  Settings2,
  Sparkles,
  Tag,
  Target,
  Workflow,
  X
} from "lucide-react";
import type { RoleDefinition, SmartPlanGuidePhase } from "../types";
import dialog1Image from "../../dialog1.png";
import dialog2Image from "../../dialog2.png";

type SmartPlanIndexTab = "plans" | "library";
type SmartPlanSurface = "index" | "builder";
type SmartPlanScope = "My Plan" | "Office Plan" | "Company Plan";
type LeadTypeMode = "Equals To" | "Include All" | "Include One Of";
type SmartPlanVariableSource = "Calendar";
type SmartPlanVariableCalendarOutput = "sameDayAvailability" | "nextDayAvailability";
type SmartPlanVariableFormat = "continuous time availability" | "comma separated time slots";

type TriggerCriteriaOption = {
  field: string;
  logicOptions: string[];
  valueOptions: string[];
};

type SmartPlanCriterion = {
  id: string;
  field: string;
  logic: string;
  values: string[];
};

type SmartPlanTriggerDefinition = {
  id: string;
  category: string;
  label: string;
  description: string;
  criteriaOptions: TriggerCriteriaOption[];
};

type SmartPlanTrigger = {
  definitionId: string;
  label: string;
  criteria: SmartPlanCriterion[];
};

type SmartPlanActionField = {
  id: string;
  label: string;
  type: "text" | "textarea" | "select" | "toggle";
  options?: string[];
  defaultValue?: string | boolean;
};

type SmartPlanActionDefinition = {
  id: string;
  group: string;
  label: string;
  icon: ReactNode;
  summaryPrefix: string;
  fields: SmartPlanActionField[];
};

type SmartPlanConditionDefinition = {
  id: string;
  group: string;
  label: string;
  icon: ReactNode;
  fields: SmartPlanActionField[];
};

type SmartPlanVariable = {
  id: string;
  name: string;
  token: string;
  source: SmartPlanVariableSource;
  sourceConfig: {
    calendarSelection: SmartPlanVariableCalendarOutput;
  };
  format: SmartPlanVariableFormat;
  createdByStepId: string;
};

type SmartPlanStep =
  | {
      id: string;
      type: "action";
      definitionId: string;
      label: string;
      summary: string;
      config: Record<string, string | boolean>;
    }
  | {
      id: string;
      type: "condition";
      definitionId: string;
      label: string;
      summary: string;
      config: Record<string, string | boolean>;
    };

type SmartPlanDraft = {
  id: string;
  name: string;
  scope: SmartPlanScope;
  targetLeadTypeMode: LeadTypeMode;
  targetLeadTypes: string[];
  autoApply: boolean;
  autoReapply: boolean;
  autoPause: string[];
  trigger: SmartPlanTrigger | null;
  steps: SmartPlanStep[];
  variables: SmartPlanVariable[];
};

type SmartPlanRow = {
  id: string;
  name: string;
  scope: SmartPlanScope;
  leadTypeSummary: string;
  duration: string;
  autoApply: boolean;
};

type SmartPlanTemplate = {
  id: string;
  name: string;
  leadTypeSummary: string;
  duration: string;
  badges: ReactNode[];
  buildDraft: (scope: SmartPlanScope) => SmartPlanDraft;
};

type DrawerState =
  | { type: "none" }
  | { type: "trigger-list" }
  | { type: "trigger-detail"; draft: SmartPlanTrigger }
  | { type: "action-list" }
  | {
      type: "action-detail";
      definition: SmartPlanActionDefinition;
      draft: Record<string, string | boolean>;
      editingStepId: string | null;
      insertTargetFieldId: string | null;
    }
  | { type: "condition-list" }
  | {
      type: "condition-detail";
      definition: SmartPlanConditionDefinition;
      draft: Record<string, string | boolean>;
      editingStepId: string | null;
    };

type SmartPlansWorkspaceProps = {
  role: RoleDefinition;
  guidePhase?: SmartPlanGuidePhase;
  onGuideAdvance?: (phase: SmartPlanGuidePhase) => void;
  onGuideExit?: () => void;
};

const leadTypes = ["Buyer", "Seller", "Renter", "Investor", "Other"];
const populateVariableSources: SmartPlanVariableSource[] = ["Calendar"];
const calendarVariableOptions: SmartPlanVariableCalendarOutput[] = ["sameDayAvailability", "nextDayAvailability"];
const variableFormatOptions: SmartPlanVariableFormat[] = [
  "continuous time availability",
  "comma separated time slots"
];
const autoPauseOptions = [
  "Lead responds or reaches out",
  "Lead is added to a segment",
  "Outbound call marked as talked",
  "Lead pipeline changes"
];

const triggerDefinitions: SmartPlanTriggerDefinition[] = [
  {
    id: "lead-created",
    category: "Lead Change",
    label: "Lead Created",
    description: "Run automatically when a new lead is created in Lofty.",
    criteriaOptions: [
      {
        field: "Source",
        logicOptions: ["is", "is not"],
        valueOptions: ["Website", "Email Parsing", "Facebook", "Google", "Zillow", "Open House"]
      },
      {
        field: "Pipeline",
        logicOptions: ["is", "is not"],
        valueOptions: ["New", "Attempting Contact", "Nurture", "Hot", "Active Client"]
      },
      {
        field: "Tag",
        logicOptions: ["contains", "does not contain"],
        valueOptions: ["Hot buyer", "Warm seller", "AI nurtured", "New registration"]
      }
    ]
  },
  {
    id: "pipeline-changed",
    category: "Lead Change",
    label: "Pipeline Changed",
    description: "Start a plan when a lead moves into a new stage.",
    criteriaOptions: [
      {
        field: "Pipeline",
        logicOptions: ["is", "is not"],
        valueOptions: ["New", "Attempting Contact", "Nurture", "Hot", "Active Client"]
      }
    ]
  },
  {
    id: "tag-changed",
    category: "Lead Change",
    label: "Tag Changed",
    description: "Start a plan when tags are added or removed.",
    criteriaOptions: [
      {
        field: "Tag",
        logicOptions: ["contains", "does not contain"],
        valueOptions: ["Open house", "Buyer lead", "Seller lead", "AI qualified"]
      }
    ]
  },
  {
    id: "communication-events",
    category: "Lead Engagement",
    label: "Communication Events",
    description: "Use replies, opens, or other communication activity.",
    criteriaOptions: [
      {
        field: "Event",
        logicOptions: ["is"],
        valueOptions: ["Email replied", "Email opened", "Text replied", "Call connected"]
      }
    ]
  },
  {
    id: "website-activity",
    category: "Lead Engagement",
    label: "Website Activity",
    description: "Trigger from saved listings, searches, and website behavior.",
    criteriaOptions: [
      {
        field: "Activity",
        logicOptions: ["is"],
        valueOptions: ["Saved listing", "Viewed listing", "Requested showing", "Started valuation"]
      }
    ]
  }
];

const actionDefinitions: SmartPlanActionDefinition[] = [
  {
    id: "auto-email",
    group: "Communication",
    label: "Auto Email",
    icon: <Mail size={18} />,
    summaryPrefix: "Email Subject is",
    fields: [
      { id: "sendFrom", label: "Send From", type: "select", options: ["Agent", "ISA", "Team inbox"], defaultValue: "Agent" },
      { id: "subject", label: "Email Subject", type: "text", defaultValue: "Your inquiry about 123 Main St!" },
      {
        id: "body",
        label: "Email Body",
        type: "textarea",
        defaultValue:
          "Hi Sarah,\n\nThanks for reaching out about 123 Main St! I just received your request. I have a few openings for tours tomorrow. Would morning or afternoon work better for you?"
      },
      { id: "familyCc", label: "CC all family members", type: "toggle", defaultValue: false }
    ]
  },
  {
    id: "auto-text",
    group: "Communication",
    label: "Auto Text",
    icon: <MessageSquare size={18} />,
    summaryPrefix: "Text says",
    fields: [
      { id: "sender", label: "Send From", type: "select", options: ["Assigned Agent", "Team number"], defaultValue: "Assigned Agent" },
      {
        id: "message",
        label: "Message",
        type: "textarea",
        defaultValue:
          "Hi {{lead_name}}, thanks for your inquiry. I just sent you an email with the details and I can line up a tour whenever you're ready."
      }
    ]
  },
  {
    id: "notification",
    group: "Communication",
    label: "Notification",
    icon: <Bell size={18} />,
    summaryPrefix: "Notify",
    fields: [
      { id: "recipient", label: "Recipient", type: "select", options: ["Assigned Agent", "ISA", "Lender partner"], defaultValue: "Assigned Agent" },
      { id: "note", label: "Note", type: "text", defaultValue: "New lead needs outreach in the next 5 minutes." }
    ]
  },
  {
    id: "call-task",
    group: "Manage Tasks and Plans",
    label: "Call",
    icon: <Phone size={18} />,
    summaryPrefix: "Task is",
    fields: [{ id: "title", label: "Task title", type: "text", defaultValue: "Call the lead and offer two showing windows." }]
  },
  {
    id: "checklist",
    group: "Manage Tasks and Plans",
    label: "Checklist",
    icon: <ListChecks size={18} />,
    summaryPrefix: "Checklist includes",
    fields: [{ id: "title", label: "Checklist name", type: "text", defaultValue: "New lead speed-to-lead checklist" }]
  },
  {
    id: "change-pipeline",
    group: "Update Lead",
    label: "Change Pipeline",
    icon: <Workflow size={18} />,
    summaryPrefix: "Move lead to",
    fields: [{ id: "pipeline", label: "Pipeline", type: "select", options: ["New", "Attempting Contact", "Nurture", "Hot"], defaultValue: "Attempting Contact" }]
  },
  {
    id: "change-tag",
    group: "Update Lead",
    label: "Change Tag",
    icon: <Tag size={18} />,
    summaryPrefix: "Tag",
    fields: [{ id: "tag", label: "Tag", type: "select", options: ["AI nurtured", "Website inquiry", "Requested showing"], defaultValue: "Website inquiry" }]
  },
  {
    id: "ai-generator",
    group: "AI Actions",
    label: "AI Generator",
    icon: <Bot size={18} />,
    summaryPrefix: "AI writes",
    fields: [
      { id: "tone", label: "Tone", type: "select", options: ["Friendly", "Professional", "Warm"], defaultValue: "Friendly" },
      {
        id: "prompt",
        label: "Instructions",
        type: "textarea",
        defaultValue: "Write a short follow-up email that confirms availability, offers a tour, and asks the lead's buying timeline."
      }
    ]
  },
  {
    id: "start-smart-plan",
    group: "Automate and Integrate",
    label: "Start Smart Plan",
    icon: <CopyPlus size={18} />,
    summaryPrefix: "Start",
    fields: [{ id: "planName", label: "Plan", type: "select", options: ["Buyer Long-Term Nurture", "Seller Re-Engage", "Open House Follow-Up"], defaultValue: "Buyer Long-Term Nurture" }]
  },
  {
    id: "populate-variable",
    group: "Automate and Integrate",
    label: "Populate Variable",
    icon: <Database size={18} />,
    summaryPrefix: "Variable",
    fields: [
      { id: "variableName", label: "Variable Name", type: "text", defaultValue: "availability" },
      { id: "source", label: "Source", type: "select", options: populateVariableSources, defaultValue: "Calendar" },
      {
        id: "calendarSelection",
        label: "Calendar Selection",
        type: "select",
        options: calendarVariableOptions,
        defaultValue: "sameDayAvailability"
      },
      {
        id: "formatType",
        label: "Formatting Type",
        type: "select",
        options: variableFormatOptions,
        defaultValue: "continuous time availability"
      }
    ]
  }
];

const conditionDefinitions: SmartPlanConditionDefinition[] = [
  {
    id: "wait-period",
    group: "Condition",
    label: "Wait a Period of Time",
    icon: <Clock3 size={18} />,
    fields: [
      { id: "amount", label: "Amount", type: "text", defaultValue: "10" },
      { id: "unit", label: "Unit", type: "select", options: ["Minutes", "Hours", "Days"], defaultValue: "Minutes" }
    ]
  },
  {
    id: "wait-event",
    group: "Condition",
    label: "Wait Until an Event",
    icon: <CalendarClock size={18} />,
    fields: [{ id: "event", label: "Event", type: "select", options: ["Email replied", "Text replied", "Saved listing"], defaultValue: "Email replied" }]
  },
  {
    id: "branch",
    group: "Condition",
    label: "Branch",
    icon: <Target size={18} />,
    fields: [{ id: "rule", label: "Branch rule", type: "select", options: ["Lead score", "Recent reply", "Saved listing"], defaultValue: "Recent reply" }]
  }
];

function createId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeVariableBaseName(input: string) {
  const normalized = input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return normalized || "variable";
}

function buildVariableToken(baseName: string) {
  return `#${baseName}#`;
}

function buildPopulateVariableSummary(config: Record<string, string | boolean>) {
  const variableName = String(config.variableName ?? "variable");
  const token = buildVariableToken(normalizeVariableBaseName(variableName));
  const sourceOutput = String(config.calendarSelection ?? "sameDayAvailability");
  const format = String(config.formatType ?? "continuous time availability");
  return `Variable ${token} from ${sourceOutput} as ${format}`;
}

function formatStepSummary(actionId: string, prefix: string, config: Record<string, string | boolean>) {
  if (actionId === "populate-variable") {
    return buildPopulateVariableSummary(config);
  }

  const firstTextValue = Object.values(config).find((value) => typeof value === "string" && value.trim().length > 0);
  return `${prefix} ${typeof firstTextValue === "string" ? firstTextValue : "Configured"}`;
}

function formatConditionSummary(label: string, config: Record<string, string | boolean>) {
  if (label === "Wait a Period of Time") {
    return `Wait ${config.amount ?? "1"} ${String(config.unit ?? "Day").toLowerCase()}`;
  }
  if (label === "Wait Until an Event") {
    return `Wait for ${config.event ?? "event"}`;
  }
  return `Branch on ${config.rule ?? "criteria"}`;
}

function summarizeLeadTypes(mode: LeadTypeMode, values: string[]) {
  if (!values.length) {
    return `${mode}: Not set`;
  }
  return `${mode}: ${values.join(", ")}`;
}

function computeDurationFromDraft(draft: SmartPlanDraft) {
  const durationDays = draft.steps.reduce((total, step) => {
    if (step.type !== "condition" || step.label !== "Wait a Period of Time") {
      return total;
    }

    const amount = Number(step.config.amount ?? 0);
    const unit = String(step.config.unit ?? "Days");
    if (!Number.isFinite(amount)) {
      return total;
    }
    if (unit === "Minutes") {
      return total;
    }
    if (unit === "Hours") {
      return total + Math.max(1, Math.round(amount / 24));
    }
    return total + amount;
  }, 0);

  return `${durationDays} day${durationDays === 1 ? "" : "s"}`;
}

function getScopeOptions(role: RoleDefinition): SmartPlanScope[] {
  if (role.id === "company-owner" || role.id === "company-admin") {
    return ["My Plan", "Company Plan"];
  }
  if (role.id === "office-owner" || role.id === "office-admin") {
    return ["My Plan", "Office Plan"];
  }
  return ["My Plan"];
}

function getDefaultScope(role: RoleDefinition): SmartPlanScope {
  return getScopeOptions(role)[0];
}

function getActionDefaults(definition: SmartPlanActionDefinition | SmartPlanConditionDefinition) {
  const values: Record<string, string | boolean> = {};

  definition.fields.forEach((field) => {
    if (typeof field.defaultValue !== "undefined") {
      values[field.id] = field.defaultValue;
      return;
    }
    if (field.type === "select") {
      values[field.id] = field.options?.[0] ?? "";
      return;
    }
    if (field.type === "toggle") {
      values[field.id] = false;
      return;
    }
    values[field.id] = "";
  });

  return values;
}

function buildActionStep(actionId: string, config: Record<string, string | boolean> = {}): SmartPlanStep {
  const definition = actionDefinitions.find((item) => item.id === actionId)!;
  return {
    id: createId("step"),
    type: "action",
    definitionId: definition.id,
    label: definition.label,
    summary: formatStepSummary(definition.id, definition.summaryPrefix, config),
    config
  };
}

function buildConditionStep(conditionId: string, config: Record<string, string | boolean> = {}): SmartPlanStep {
  const definition = conditionDefinitions.find((item) => item.id === conditionId)!;
  return {
    id: createId("step"),
    type: "condition",
    definitionId: definition.id,
    label: definition.label,
    summary: formatConditionSummary(definition.label, config),
    config
  };
}

function buildSmartPlanVariable(
  stepId: string,
  config: Record<string, string | boolean>,
  existingTokens: Set<string>
): SmartPlanVariable {
  const requestedBaseName = normalizeVariableBaseName(String(config.variableName ?? "variable"));
  let candidateBaseName = requestedBaseName;
  let suffix = 2;

  while (existingTokens.has(buildVariableToken(candidateBaseName))) {
    candidateBaseName = `${requestedBaseName}_${suffix}`;
    suffix += 1;
  }

  const token = buildVariableToken(candidateBaseName);
  existingTokens.add(token);

  return {
    id: createId("variable"),
    name: candidateBaseName,
    token,
    source: "Calendar",
    sourceConfig: {
      calendarSelection: (config.calendarSelection as SmartPlanVariableCalendarOutput) ?? "sameDayAvailability"
    },
    format: (config.formatType as SmartPlanVariableFormat) ?? "continuous time availability",
    createdByStepId: stepId
  };
}

function syncPopulateVariables(steps: SmartPlanStep[]) {
  const nextSteps = [...steps];
  const variables: SmartPlanVariable[] = [];
  const seenTokens = new Set<string>();

  nextSteps.forEach((step, index) => {
    if (step.type !== "action" || step.definitionId !== "populate-variable") {
      return;
    }
    const variable = buildSmartPlanVariable(step.id, step.config, seenTokens);
    variables.push(variable);
    nextSteps[index] = {
      ...step,
      summary: `Variable ${variable.token} from ${variable.sourceConfig.calendarSelection} as ${variable.format}`
    };
  });

  return { steps: nextSteps, variables };
}

function replaceTokenInText(value: string, fromToken: string, toToken: string) {
  return value.split(fromToken).join(toToken);
}

function syncBuilderStructure(steps: SmartPlanStep[], previousVariables: SmartPlanVariable[] = []) {
  const synced = syncPopulateVariables(steps);
  const nextSteps = synced.steps.map((step) => ({ ...step, config: { ...step.config } }));
  const previousTokenByStep = new Map(previousVariables.map((variable) => [variable.createdByStepId, variable.token]));

  synced.variables.forEach((variable) => {
    const oldToken = previousTokenByStep.get(variable.createdByStepId);
    if (!oldToken || oldToken === variable.token) {
      return;
    }

    nextSteps.forEach((step, index) => {
      if (step.type !== "action" || step.definitionId === "populate-variable") {
        return;
      }

      const definition = actionDefinitions.find((item) => item.id === step.definitionId);
      if (!definition) {
        return;
      }

      let nextConfig = step.config;
      let touched = false;
      ["subject", "body", "message"].forEach((fieldId) => {
        const currentValue = nextConfig[fieldId];
        if (typeof currentValue !== "string" || !currentValue.includes(oldToken)) {
          return;
        }
        if (!touched) {
          nextConfig = { ...nextConfig };
          touched = true;
        }
        nextConfig[fieldId] = replaceTokenInText(currentValue, oldToken, variable.token);
      });

      if (!touched) {
        return;
      }

      nextSteps[index] = {
        ...step,
        config: nextConfig,
        summary: formatStepSummary(definition.id, definition.summaryPrefix, nextConfig)
      };
    });
  });

  return syncPopulateVariables(nextSteps);
}

function buildPlanDraft(scope: SmartPlanScope, overrides: Partial<SmartPlanDraft> = {}): SmartPlanDraft {
  const draft: SmartPlanDraft = {
    id: createId("plan"),
    name: `Unnamed Smart Plan ${Math.floor(10000 + Math.random() * 89999)}`,
    scope,
    targetLeadTypeMode: "Equals To",
    targetLeadTypes: [],
    autoApply: false,
    autoReapply: false,
    autoPause: [...autoPauseOptions],
    trigger: null,
    steps: [],
    variables: [],
    ...overrides
  };

  return {
    ...draft,
    ...syncBuilderStructure(draft.steps)
  };
}

const templateCards: SmartPlanTemplate[] = [
  {
    id: "buyer-no-response-ai",
    name: "Buyer-No Response (AI)",
    leadTypeSummary: "Include one of: Buyer",
    duration: "75 days duration",
    badges: [<Mail key="mail" size={16} />, <MessageSquare key="text" size={16} />, <Bot key="bot" size={16} />],
    buildDraft: (scope) =>
      buildPlanDraft(scope, {
        name: "Buyer-No Response (AI)",
        targetLeadTypeMode: "Include One Of",
        targetLeadTypes: ["Buyer"],
        autoApply: true,
        trigger: {
          definitionId: "communication-events",
          label: "Communication Events",
          criteria: [{ id: createId("criteria"), field: "Event", logic: "is", values: ["Email replied"] }]
        },
        steps: [
          buildActionStep("ai-generator", {
            tone: "Friendly",
            prompt: "Write a short re-engagement email for a buyer who has gone quiet after the first response."
          }),
          buildConditionStep("wait-period", { amount: "3", unit: "Days" }),
          buildActionStep("auto-text", {
            sender: "Assigned Agent",
            message: "Just checking in to see if you're still hoping to tour homes this week. I can send a few options if that helps."
          })
        ]
      })
  },
  {
    id: "seller-engagement",
    name: "Realty.com Seller Engagement Campaign",
    leadTypeSummary: "Equals To: Seller",
    duration: "379 days duration",
    badges: [<Phone key="call" size={16} />, <Mail key="mail" size={16} />, <MessageSquare key="text" size={16} />, <Bot key="bot" size={16} />],
    buildDraft: (scope) =>
      buildPlanDraft(scope, {
        name: "Realty.com Seller Engagement Campaign",
        targetLeadTypeMode: "Equals To",
        targetLeadTypes: ["Seller"],
        autoApply: true,
        steps: [
          buildActionStep("call-task", { title: "Call seller within 5 minutes of inquiry" }),
          buildActionStep("auto-email", {
            sendFrom: "Agent",
            subject: "Thanks for your home value request",
            body: "Thanks for reaching out. I would love to learn a bit more about your selling timeline and walk through pricing with you."
          })
        ]
      })
  },
  {
    id: "buyer-cold-workflow",
    name: "Buyer Lead - Cold Workflow",
    leadTypeSummary: "Include one of: Buyer, Renter, Other",
    duration: "361 days duration",
    badges: [<Phone key="call" size={16} />, <Mail key="mail" size={16} />, <MessageSquare key="text" size={16} />, <CalendarClock key="calendar" size={16} />],
    buildDraft: (scope) =>
      buildPlanDraft(scope, {
        name: "Buyer Lead - Cold Workflow",
        targetLeadTypeMode: "Include One Of",
        targetLeadTypes: ["Buyer", "Renter", "Other"],
        steps: [
          buildActionStep("auto-email"),
          buildConditionStep("wait-period", { amount: "7", unit: "Days" }),
          buildActionStep("call-task")
        ]
      })
  },
  {
    id: "buyer-requested-showing",
    name: "Lofty AI - Buyer Requested Showing",
    leadTypeSummary: "Include one of: Buyer, Seller, Renter, Other",
    duration: "0 day duration",
    badges: [<Phone key="call" size={16} />, <Mail key="mail" size={16} />, <MessageSquare key="text" size={16} />, <Workflow key="workflow" size={16} />],
    buildDraft: (scope) =>
      buildPlanDraft(scope, {
        name: "Lofty AI - Buyer Requested Showing",
        targetLeadTypeMode: "Include One Of",
        targetLeadTypes: ["Buyer", "Seller", "Renter", "Other"],
        autoApply: true,
        trigger: {
          definitionId: "website-activity",
          label: "Website Activity",
          criteria: [{ id: createId("criteria"), field: "Activity", logic: "is", values: ["Requested showing"] }]
        },
        steps: [
          buildActionStep("notification", { recipient: "Assigned Agent", note: "Lead requested a showing. Reach out immediately." }),
          buildActionStep("auto-email", {
            sendFrom: "Agent",
            subject: "Your showing request for 123 Main St",
            body: "Thanks for requesting a showing at 123 Main St. I can line up times for today or tomorrow. Reply with your preferred window and I will confirm it."
          })
        ]
      })
  }
];

const initialPlans: SmartPlanRow[] = [
  {
    id: "lofty-bloom-companion",
    name: "Lofty Bloom Companion Smart Plan",
    scope: "My Plan",
    leadTypeSummary: "Include one of: Buyer, Seller",
    duration: "28 days",
    autoApply: false
  }
];

function isGuideActive(guidePhase: SmartPlanGuidePhase) {
  return guidePhase !== "inactive";
}

function isGuideComplete(guidePhase: SmartPlanGuidePhase) {
  return guidePhase === "completed";
}

function isGuideTriggerConfigured(trigger: SmartPlanTrigger) {
  return (
    trigger.definitionId === "lead-created" &&
    trigger.criteria.some(
      (criterion) =>
        criterion.field === "Source" &&
        criterion.logic === "is" &&
        criterion.values.some((value) => value === "Website")
    )
  );
}

function isGuidePopulateVariableConfigured(config: Record<string, string | boolean>) {
  return (
    String(config.source ?? "") === "Calendar" &&
    String(config.calendarSelection ?? "") === "nextDayAvailability" &&
    String(config.formatType ?? "") === "comma separated time slots"
  );
}

function isGuideAutoEmailConfigured(config: Record<string, string | boolean>) {
  return String(config.body ?? "").includes("#availability#");
}

function SmartPlansGuideCallout({
  imageSrc,
  content,
  className = ""
}: {
  imageSrc: string;
  content: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mascot-callout smartplans-guide-callout ${className}`.trim()}>
      <img src={imageSrc} alt="" aria-hidden="true" />
      <div className="mascot-callout__bubble">{content}</div>
    </div>
  );
}

function getInsertTargetFieldId(definition: SmartPlanActionDefinition) {
  if (definition.id === "auto-email") {
    return "body";
  }
  if (definition.id === "auto-text") {
    return "message";
  }
  return null;
}

function getAvailableVariablesForStep(builder: SmartPlanDraft, editingStepId: string | null) {
  if (!editingStepId) {
    return builder.variables;
  }

  const stepIndex = builder.steps.findIndex((step) => step.id === editingStepId);
  if (stepIndex < 0) {
    return builder.variables;
  }

  const visibleStepIds = new Set(builder.steps.slice(0, stepIndex).map((step) => step.id));
  return builder.variables.filter((variable) => visibleStepIds.has(variable.createdByStepId));
}

function insertStepAtTarget(
  steps: SmartPlanStep[],
  nextStep: SmartPlanStep,
  target: "initial" | "after-trigger" | number | null
) {
  if (target === "initial" || target === "after-trigger") {
    return [nextStep, ...steps];
  }

  if (typeof target === "number") {
    const nextSteps = [...steps];
    nextSteps.splice(target + 1, 0, nextStep);
    return nextSteps;
  }

  return [...steps, nextStep];
}

function SmartPlanField({
  field,
  value,
  onChange
}: {
  field: SmartPlanActionField;
  value: string | boolean | undefined;
  onChange: (nextValue: string | boolean) => void;
}) {
  if (field.type === "select") {
    return (
      <select value={String(value ?? "")} onChange={(event) => onChange(event.target.value)}>
        {field.options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  if (field.type === "textarea") {
    return <textarea value={String(value ?? "")} rows={7} onChange={(event) => onChange(event.target.value)} />;
  }

  if (field.type === "toggle") {
    return (
      <label className="smartplans-inline-check">
        <input checked={Boolean(value)} type="checkbox" onChange={(event) => onChange(event.target.checked)} />
        <span>{field.label}</span>
      </label>
    );
  }

  return <input type="text" value={String(value ?? "")} onChange={(event) => onChange(event.target.value)} />;
}

function SmartPlansSection({
  title,
  children,
  actions
}: {
  title: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="smartplans-panel-section">
      <div className="smartplans-panel-section-header">
        <h3>{title}</h3>
        {actions}
      </div>
      {children}
    </div>
  );
}

function SmartPlansSettingsPanel({
  builder,
  onClose,
  scopeOptions,
  setBuilder
}: {
  builder: SmartPlanDraft;
  onClose: () => void;
  scopeOptions: SmartPlanScope[];
  setBuilder: Dispatch<SetStateAction<SmartPlanDraft | null>>;
}) {
  return (
    <div className="smartplans-settings-popover-card">
      <div className="smartplans-settings-header">
        <h2>Settings</h2>
        <button className="smartplans-ghost-icon" type="button" onClick={onClose} aria-label="Close settings">
          <X size={18} />
        </button>
      </div>

      <div className="smartplans-setting-block smartplans-setting-block--expanded">
        <div className="smartplans-setting-title-row">
          <span>Plan Name</span>
          <Settings2 size={18} />
        </div>
        <div className="smartplans-setting-content">
          <input
            value={builder.name}
            onChange={(event) => setBuilder({ ...builder, name: event.target.value })}
            placeholder="Plan name"
          />
        </div>
      </div>

      <div className="smartplans-setting-block smartplans-setting-block--expanded">
        <button className="smartplans-setting-toggle" type="button">
          <span>Plan Scope Setting</span>
          <ChevronDown size={18} />
        </button>
        <div className="smartplans-setting-content">
          <select
            value={builder.scope}
            onChange={(event) => setBuilder({ ...builder, scope: event.target.value as SmartPlanScope })}
          >
            {scopeOptions.map((scope) => (
              <option key={scope} value={scope}>
                {scope}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="smartplans-setting-block smartplans-setting-block--expanded">
        <button className="smartplans-setting-toggle" type="button">
          <span>Target Lead Type Setting</span>
          <ChevronDown size={18} />
        </button>
        <div className="smartplans-setting-content">
          <select
            value={builder.targetLeadTypeMode}
            onChange={(event) => setBuilder({ ...builder, targetLeadTypeMode: event.target.value as LeadTypeMode })}
          >
            {(["Equals To", "Include All", "Include One Of"] as LeadTypeMode[]).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={builder.targetLeadTypes[0] ?? ""}
            onChange={(event) =>
              setBuilder({
                ...builder,
                targetLeadTypes: event.target.value ? [event.target.value] : []
              })
            }
          >
            <option value="">Select Something...</option>
            {leadTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            className="smartplans-link-button"
            type="button"
            onClick={() =>
              setBuilder((current) => {
                if (!current) {
                  return current;
                }
                const next = leadTypes.find((type) => !current.targetLeadTypes.includes(type));
                if (!next) {
                  return current;
                }
                return { ...current, targetLeadTypes: [...current.targetLeadTypes, next] };
              })
            }
          >
            <Plus size={16} />
            Add Lead Type
          </button>
        </div>
      </div>

      <div className="smartplans-setting-block smartplans-setting-block--expanded">
        <button className="smartplans-setting-toggle" type="button">
          <span>Auto Apply Setting</span>
          <ChevronDown size={18} />
        </button>
        <div className="smartplans-setting-content smartplans-setting-content--compact">
          <label className="smartplans-inline-check">
            <input
              checked={builder.autoApply}
              type="checkbox"
              onChange={(event) => setBuilder({ ...builder, autoApply: event.target.checked })}
            />
            <span>Auto Apply</span>
          </label>
          <label className="smartplans-inline-check">
            <input
              checked={builder.autoReapply}
              type="checkbox"
              onChange={(event) => setBuilder({ ...builder, autoReapply: event.target.checked })}
            />
            <span>Auto Re-apply</span>
          </label>
        </div>
      </div>

      <div className="smartplans-setting-block">
        <button className="smartplans-setting-toggle" type="button">
          <span>Auto Pause Setting</span>
          <ChevronDown size={18} />
        </button>
        <div className="smartplans-setting-content smartplans-setting-content--compact">
          {autoPauseOptions.map((option) => (
            <label key={option} className="smartplans-inline-check">
              <input
                checked={builder.autoPause.includes(option)}
                type="checkbox"
                onChange={(event) =>
                  setBuilder((current) => {
                    if (!current) {
                      return current;
                    }
                    return {
                      ...current,
                      autoPause: event.target.checked
                        ? [...current.autoPause, option]
                        : current.autoPause.filter((item) => item !== option)
                    };
                  })
                }
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function SmartPlansStepChooser({
  choices,
  className = "",
  dragResetKey,
  onClose
}: {
  choices: Array<{
    className?: string;
    disabled?: boolean;
    icon: ReactNode;
    label: string;
    onClick?: () => void;
  }>;
  className?: string;
  dragResetKey: string;
  onClose: () => void;
}) {
  const chooserRef = useRef<HTMLDivElement | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStateRef = useRef<{
    maxDeltaX: number;
    maxDeltaY: number;
    minDeltaX: number;
    minDeltaY: number;
    originX: number;
    originY: number;
    startX: number;
    startY: number;
  } | null>(null);

  useEffect(() => {
    setDragOffset({ x: 0, y: 0 });
    setIsDragging(false);
    dragStateRef.current = null;
  }, [dragResetKey]);

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    function clamp(value: number, min: number, max: number) {
      return Math.min(Math.max(value, min), max);
    }

    function handlePointerMove(event: PointerEvent) {
      const dragState = dragStateRef.current;
      if (!dragState) {
        return;
      }

      const nextDeltaX = clamp(event.clientX - dragState.startX, dragState.minDeltaX, dragState.maxDeltaX);
      const nextDeltaY = clamp(event.clientY - dragState.startY, dragState.minDeltaY, dragState.maxDeltaY);

      setDragOffset({
        x: dragState.originX + nextDeltaX,
        y: dragState.originY + nextDeltaY
      });
    }

    function handlePointerUp() {
      dragStateRef.current = null;
      setIsDragging(false);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointercancel", handlePointerUp);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("button")) {
      return;
    }

    const chooserElement = chooserRef.current;
    const boundsElement = chooserElement?.closest(".smartplans-canvas-area");
    if (!(chooserElement instanceof HTMLDivElement) || !(boundsElement instanceof HTMLDivElement)) {
      return;
    }

    const chooserRect = chooserElement.getBoundingClientRect();
    const boundsRect = boundsElement.getBoundingClientRect();
    const minDeltaX = boundsRect.left - chooserRect.left;
    const maxDeltaX = boundsRect.right - chooserRect.right;
    const minDeltaY = boundsRect.top - chooserRect.top;
    const maxDeltaY = boundsRect.bottom - chooserRect.bottom;

    dragStateRef.current = {
      maxDeltaX,
      maxDeltaY,
      minDeltaX,
      minDeltaY,
      originX: dragOffset.x,
      originY: dragOffset.y,
      startX: event.clientX,
      startY: event.clientY
    };
    setIsDragging(true);
    event.preventDefault();
  }

  const baseTransform = className.includes("smartplans-step-chooser--initial") ? "translateX(-50%)" : "";
  const dragTransform = dragOffset.x || dragOffset.y ? ` translate(${dragOffset.x}px, ${dragOffset.y}px)` : "";
  const chooserTransform = `${baseTransform}${dragTransform}`.trim();

  return (
    <div
      ref={chooserRef}
      className={`smartplans-step-chooser ${className} ${isDragging ? "smartplans-step-chooser--dragging" : ""}`.trim()}
      style={chooserTransform ? { transform: chooserTransform } : undefined}
    >
      <div className="smartplans-step-chooser-header" onPointerDown={handlePointerDown}>
        <strong>Add a Step</strong>
        <button className="smartplans-ghost-icon" type="button" onClick={onClose}>
          <X size={18} />
        </button>
      </div>
      <div className="smartplans-step-chooser-grid">
        {choices.map((choice) => (
          <button
            key={choice.label}
            className={`smartplans-step-choice ${choice.className ?? ""}`.trim()}
            type="button"
            disabled={choice.disabled}
            onClick={choice.onClick}
          >
            {choice.icon}
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SmartPlansWorkspace({
  role,
  guidePhase = "inactive",
  onGuideAdvance
}: SmartPlansWorkspaceProps) {
  const [surface, setSurface] = useState<SmartPlanSurface>("index");
  const [indexTab, setIndexTab] = useState<SmartPlanIndexTab>("plans");
  const [plans, setPlans] = useState<SmartPlanRow[]>(initialPlans);
  const [createMenuOpen, setCreateMenuOpen] = useState(false);
  const [scopeModalOpen, setScopeModalOpen] = useState(false);
  const [pendingCreateMode, setPendingCreateMode] = useState<"scratch" | "template" | null>(null);
  const [pendingTemplate, setPendingTemplate] = useState<SmartPlanTemplate | null>(null);
  const [selectedScope, setSelectedScope] = useState<SmartPlanScope>(getDefaultScope(role));
  const [builder, setBuilder] = useState<SmartPlanDraft | null>(null);
  const [drawer, setDrawer] = useState<DrawerState>({ type: "none" });
  const [stepMenuTarget, setStepMenuTarget] = useState<"initial" | "after-trigger" | number | null>(null);
  const [settingsPopoverOpen, setSettingsPopoverOpen] = useState(false);
  const [planSearch, setPlanSearch] = useState("");
  const [librarySearch, setLibrarySearch] = useState("");
  const settingsPopoverAnchorRef = useRef<HTMLDivElement | null>(null);

  const scopeOptions = useMemo(() => getScopeOptions(role), [role]);
  const guideActive = isGuideActive(guidePhase);
  const guideCompleted = isGuideComplete(guidePhase);
  const guideLocked = guideActive && !guideCompleted;
  const populateVariableStepIndex = useMemo(
    () => builder?.steps.findIndex((step) => step.type === "action" && step.definitionId === "populate-variable") ?? -1,
    [builder]
  );
  const guideRequiresActionChoice = guidePhase === "builder-add-populate-variable" || guidePhase === "builder-add-auto-email";

  const filteredPlans = useMemo(() => {
    const query = planSearch.trim().toLowerCase();
    if (!query) {
      return plans;
    }
    return plans.filter((plan) => `${plan.name} ${plan.scope} ${plan.leadTypeSummary}`.toLowerCase().includes(query));
  }, [planSearch, plans]);

  const filteredTemplates = useMemo(() => {
    const query = librarySearch.trim().toLowerCase();
    if (!query) {
      return templateCards;
    }
    return templateCards.filter((template) => `${template.name} ${template.leadTypeSummary}`.toLowerCase().includes(query));
  }, [librarySearch]);

  useEffect(() => {
    if (guidePhase !== "index-create") {
      return;
    }

    setSurface("index");
    setIndexTab("plans");
    setCreateMenuOpen(false);
    setScopeModalOpen(false);
    setDrawer({ type: "none" });
    setSettingsPopoverOpen(false);
    setStepMenuTarget(null);
  }, [guidePhase]);

  useEffect(() => {
    if (guidePhase !== "scope-modal") {
      return;
    }

    setSurface("index");
    setIndexTab("plans");
    setCreateMenuOpen(false);
    setScopeModalOpen(true);
    setDrawer({ type: "none" });
    setSettingsPopoverOpen(false);
    setStepMenuTarget(null);
  }, [guidePhase]);

  useEffect(() => {
    if (
      !builder ||
      !guideLocked ||
      guidePhase === "index-create" ||
      guidePhase === "scope-modal" ||
      surface === "builder"
    ) {
      return;
    }

    setSurface("builder");
    setIndexTab("plans");
    setScopeModalOpen(false);
  }, [builder, guideLocked, guidePhase, surface]);

  useEffect(() => {
    if (!settingsPopoverOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      const anchor = settingsPopoverAnchorRef.current;
      if (!anchor || !(event.target instanceof Node) || anchor.contains(event.target)) {
        return;
      }
      setSettingsPopoverOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSettingsPopoverOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [settingsPopoverOpen]);

  function openCreateFlow(mode: "scratch" | "template", template?: SmartPlanTemplate) {
    if (guidePhase === "index-create" && mode !== "scratch") {
      return;
    }

    setPendingCreateMode(mode);
    setPendingTemplate(template ?? null);
    setSelectedScope(getDefaultScope(role));
    setScopeModalOpen(true);
    setCreateMenuOpen(false);

    if (guidePhase === "index-create" && mode === "scratch") {
      onGuideAdvance?.("scope-modal");
    }
  }

  function startBuilderFromScope() {
    const draft =
      pendingCreateMode === "template" && pendingTemplate
        ? pendingTemplate.buildDraft(selectedScope)
        : buildPlanDraft(selectedScope);

    setBuilder(draft);
    setSurface("builder");
    setScopeModalOpen(false);
    setSettingsPopoverOpen(false);
    setDrawer({ type: "none" });
    setStepMenuTarget(draft.trigger ? "after-trigger" : guidePhase === "scope-modal" ? null : "initial");

    if (guidePhase === "scope-modal") {
      onGuideAdvance?.("builder-add-trigger");
    }
  }

  function saveCurrentPlan() {
    if (!builder) {
      return;
    }

    const nextRow: SmartPlanRow = {
      id: builder.id,
      name: builder.name,
      scope: builder.scope,
      leadTypeSummary: summarizeLeadTypes(builder.targetLeadTypeMode, builder.targetLeadTypes),
      duration: computeDurationFromDraft(builder),
      autoApply: builder.autoApply
    };

    setPlans((current) => {
      const existing = current.find((item) => item.id === builder.id);
      if (!existing) {
        return [nextRow, ...current];
      }
      return current.map((item) => (item.id === builder.id ? nextRow : item));
    });

    setSurface("index");
    setIndexTab("plans");
    setSettingsPopoverOpen(false);
    setDrawer({ type: "none" });
    setStepMenuTarget(null);
  }

  function addTriggerCriteriaRow(triggerId: string) {
    const definition = triggerDefinitions.find((item) => item.id === triggerId);
    if (!definition) {
      return;
    }

    const firstOption = definition.criteriaOptions[0];
    setDrawer({
      type: "trigger-detail",
      draft: {
        definitionId: definition.id,
        label: definition.label,
        criteria: [
          {
            id: createId("criteria"),
            field: firstOption.field,
            logic: firstOption.logicOptions[0],
            values: [firstOption.valueOptions[0]]
          }
        ]
      }
    });

    if (guidePhase === "trigger-list" && triggerId === "lead-created") {
      onGuideAdvance?.("trigger-detail");
    }
  }

  function saveTrigger(trigger: SmartPlanTrigger) {
    if (!builder) {
      return;
    }

    setBuilder({ ...builder, trigger });

    if (guidePhase === "trigger-detail") {
      if (isGuideTriggerConfigured(trigger)) {
        setDrawer({ type: "none" });
        setStepMenuTarget(null);
        onGuideAdvance?.("builder-add-populate-variable");
        return;
      }

      setDrawer({
        type: "trigger-detail",
        draft: {
          ...trigger,
          criteria: trigger.criteria.map((criterion) => ({
            ...criterion,
            values: [...criterion.values]
          }))
        }
      });
      setStepMenuTarget(null);
      return;
    }

    setDrawer({ type: "none" });
    setStepMenuTarget("after-trigger");
  }

  function openTriggerEditor() {
    if (!builder?.trigger) {
      return;
    }

    setDrawer({
      type: "trigger-detail",
      draft: {
        ...builder.trigger,
        criteria: builder.trigger.criteria.map((criterion) => ({
          ...criterion,
          values: [...criterion.values]
        }))
      }
    });
  }

  function openActionConfig(definition: SmartPlanActionDefinition, stepId: string | null = null) {
    if (!stepId && guidePhase === "action-list-populate-variable" && definition.id !== "populate-variable") {
      return;
    }

    if (!stepId && guidePhase === "action-list-auto-email" && definition.id !== "auto-email") {
      return;
    }

    const existingStep =
      stepId && builder
        ? builder.steps.find((step) => step.id === stepId && step.type === "action" && step.definitionId === definition.id)
        : null;

    setDrawer({
      type: "action-detail",
      definition,
      draft: existingStep ? { ...existingStep.config } : getActionDefaults(definition),
      editingStepId: stepId,
      insertTargetFieldId: getInsertTargetFieldId(definition)
    });

    if (!stepId && guidePhase === "action-list-populate-variable" && definition.id === "populate-variable") {
      onGuideAdvance?.("action-detail-populate-variable");
    }

    if (!stepId && guidePhase === "action-list-auto-email" && definition.id === "auto-email") {
      onGuideAdvance?.("action-detail-auto-email");
    }
  }

  function openConditionConfig(definition: SmartPlanConditionDefinition, stepId: string | null = null) {
    const existingStep =
      stepId && builder
        ? builder.steps.find((step) => step.id === stepId && step.type === "condition" && step.definitionId === definition.id)
        : null;

    setDrawer({
      type: "condition-detail",
      definition,
      draft: existingStep ? { ...existingStep.config } : getActionDefaults(definition),
      editingStepId: stepId
    });
  }

  function saveAction(definition: SmartPlanActionDefinition, config: Record<string, string | boolean>) {
    if (!builder) {
      return;
    }

    const editingStepId = drawer.type === "action-detail" ? drawer.editingStepId : null;
    const nextStep =
      drawer.type === "action-detail" && drawer.editingStepId
        ? {
            ...builder.steps.find((step) => step.id === drawer.editingStepId && step.type === "action")!,
            label: definition.label,
            summary: formatStepSummary(definition.id, definition.summaryPrefix, config),
            config
          }
        : buildActionStep(definition.id, config);

    const nextSteps =
      drawer.type === "action-detail" && drawer.editingStepId
        ? builder.steps.map((step) => (step.id === drawer.editingStepId ? nextStep : step))
        : insertStepAtTarget(builder.steps, nextStep, stepMenuTarget);

    const nextStructure = syncBuilderStructure(nextSteps, builder.variables);
    setBuilder({
      ...builder,
      steps: nextStructure.steps,
      variables: nextStructure.variables
    });
    setStepMenuTarget(null);

    if (guidePhase === "action-detail-populate-variable" && definition.id === "populate-variable") {
      if (isGuidePopulateVariableConfigured(config)) {
        setDrawer({ type: "none" });
        onGuideAdvance?.("builder-add-auto-email");
        return;
      }

      setDrawer({
        type: "action-detail",
        definition,
        draft: { ...config },
        editingStepId: editingStepId ?? nextStep.id,
        insertTargetFieldId: getInsertTargetFieldId(definition)
      });
      return;
    }

    if (guidePhase === "action-detail-auto-email" && definition.id === "auto-email") {
      if (isGuideAutoEmailConfigured(config)) {
        setDrawer({ type: "none" });
        onGuideAdvance?.("completed");
        return;
      }

      setDrawer({
        type: "action-detail",
        definition,
        draft: { ...config },
        editingStepId: editingStepId ?? nextStep.id,
        insertTargetFieldId: getInsertTargetFieldId(definition)
      });
      return;
    }

    setDrawer({ type: "none" });
  }

  function saveCondition(definition: SmartPlanConditionDefinition, config: Record<string, string | boolean>) {
    if (!builder) {
      return;
    }

    const nextStep =
      drawer.type === "condition-detail" && drawer.editingStepId
        ? {
            ...builder.steps.find((step) => step.id === drawer.editingStepId && step.type === "condition")!,
            label: definition.label,
            summary: formatConditionSummary(definition.label, config),
            config
          }
        : buildConditionStep(definition.id, config);

    const nextSteps =
      drawer.type === "condition-detail" && drawer.editingStepId
        ? builder.steps.map((step) => (step.id === drawer.editingStepId ? nextStep : step))
        : insertStepAtTarget(builder.steps, nextStep, stepMenuTarget);

    const nextStructure = syncBuilderStructure(nextSteps, builder.variables);
    setBuilder({
      ...builder,
      steps: nextStructure.steps,
      variables: nextStructure.variables
    });
    setStepMenuTarget(null);

    setDrawer({ type: "none" });
  }

  function openTriggerList() {
    setStepMenuTarget(null);
    setDrawer({ type: "trigger-list" });

    if (guidePhase === "builder-add-trigger") {
      onGuideAdvance?.("trigger-list");
    }
  }

  function openActionList() {
    setStepMenuTarget(null);
    setDrawer({ type: "action-list" });

    if (guidePhase === "builder-add-populate-variable") {
      onGuideAdvance?.("action-list-populate-variable");
      return;
    }

    if (guidePhase === "builder-add-auto-email") {
      onGuideAdvance?.("action-list-auto-email");
    }
  }

  function openConditionList() {
    if (guideRequiresActionChoice) {
      return;
    }

    setStepMenuTarget(null);
    setDrawer({ type: "condition-list" });
  }

  function isGuideInsertTarget(target: "initial" | "after-trigger" | number | null) {
    if (guidePhase === "builder-add-populate-variable") {
      return target === "after-trigger";
    }

    if (guidePhase === "builder-add-auto-email") {
      return typeof target === "number" && target === populateVariableStepIndex;
    }

    return true;
  }

  function handleStepMenuTarget(target: "initial" | "after-trigger" | number | null) {
    if (!isGuideInsertTarget(target)) {
      return;
    }

    setStepMenuTarget(target);
  }

  const initialStepChoices = [
    {
      className: [
        "smartplans-step-choice--trigger",
        guidePhase === "builder-add-trigger" ? "smartplans-guide-target smartplans-guide-target--active" : ""
      ]
        .join(" ")
        .trim(),
      icon: <Target size={18} />,
      label: "Trigger",
      onClick: openTriggerList
    },
    {
      className: "smartplans-step-choice--disabled",
      disabled: true,
      icon: <Clock3 size={18} />,
      label: "Condition"
    },
    {
      className: "smartplans-step-choice--disabled",
      disabled: true,
      icon: <Workflow size={18} />,
      label: "Action"
    }
  ];

  const followupStepChoices = [
    {
      className: "smartplans-step-choice--disabled",
      disabled: true,
      icon: <Target size={18} />,
      label: "Trigger"
    },
    {
      className: [
        guideRequiresActionChoice ? "smartplans-step-choice--disabled" : "smartplans-step-choice--condition"
      ]
        .join(" ")
        .trim(),
      disabled: guideRequiresActionChoice,
      icon: <Clock3 size={18} />,
      label: "Condition",
      onClick: openConditionList
    },
    {
      className: [
        "smartplans-step-choice--action",
        guideRequiresActionChoice ? "smartplans-guide-target smartplans-guide-target--active" : ""
      ]
        .join(" ")
        .trim(),
      icon: <Workflow size={18} />,
      label: "Action",
      onClick: openActionList
    }
  ];

  if (surface === "builder" && builder) {
    const availableDrawerVariables =
      drawer.type === "action-detail"
        ? getAvailableVariablesForStep(builder, drawer.editingStepId)
        : builder.variables;

    return (
      <section className="smartplans-builder-page">
        <header className="smartplans-builder-header">
          <button
            className="smartplans-back-button"
            disabled={guideLocked}
            onClick={() => {
              setSurface("index");
              setDrawer({ type: "none" });
              setSettingsPopoverOpen(false);
            }}
          >
            <ArrowLeft size={20} />
          </button>
          <h1>Create Smart Plan</h1>
          <div className="smartplans-builder-actions">
            {guidePhase === "completed" ? (
              <SmartPlansGuideCallout
                imageSrc={dialog1Image.src}
                className="smartplans-guide-callout--completion"
                content="Nice work. This automation is ready to save whenever you are."
              />
            ) : null}
            <div className="smartplans-settings-anchor" ref={settingsPopoverAnchorRef}>
              <button
                className="smartplans-settings-button"
                type="button"
                aria-expanded={settingsPopoverOpen}
                aria-label="Open smart plan settings"
                onClick={() => setSettingsPopoverOpen((current) => !current)}
              >
                <Settings2 size={18} />
              </button>
              {settingsPopoverOpen ? (
                <div className="smartplans-settings-popover" role="dialog" aria-label="Smart plan settings">
                  <SmartPlansSettingsPanel
                    builder={builder}
                    onClose={() => setSettingsPopoverOpen(false)}
                    scopeOptions={scopeOptions}
                    setBuilder={setBuilder}
                  />
                </div>
              ) : null}
            </div>
            <button
              className={`smartplans-save-button ${guidePhase === "completed" ? "smartplans-guide-target smartplans-guide-target--active" : ""}`.trim()}
              onClick={() => {
                saveCurrentPlan();
                setSettingsPopoverOpen(false);
              }}
            >
              Save Smart Plan
            </button>
          </div>
        </header>

        <div className="smartplans-builder-layout">
          <div className="smartplans-canvas-area">
            <div className="smartplans-canvas">
              {!builder.trigger ? (
                <>
                  {guidePhase === "builder-add-trigger" ? (
                    <div className="smartplans-guide-anchor smartplans-guide-anchor--centered">
                      <SmartPlansGuideCallout
                        imageSrc={dialog1Image.src}
                        className="smartplans-guide-callout--builder"
                        content="Choose Trigger to start the automation."
                      />
                    </div>
                  ) : null}
                  <SmartPlansStepChooser
                    choices={initialStepChoices}
                    className="smartplans-step-chooser--initial"
                    dragResetKey="initial-step-chooser"
                    onClose={() => setStepMenuTarget(null)}
                  />
                </>
              ) : (
                <div className="smartplans-flow-column">
                  <article className="smartplans-node smartplans-node--trigger smartplans-node--interactive" onClick={openTriggerEditor}>
                    <div className="smartplans-node-head">
                      <span className="smartplans-node-kind">WHEN</span>
                      <strong>{builder.trigger.label}</strong>
                    </div>
                    <div className="smartplans-node-body">
                      <span>Filter Criteria are</span>
                      <div className="chip-wrap">
                        {builder.trigger.criteria.length ? (
                          builder.trigger.criteria.map((criterion) => (
                            <span key={criterion.id} className="mini-chip">
                              {criterion.field}
                            </span>
                          ))
                        ) : (
                          <span className="mini-chip">No criteria</span>
                        )}
                      </div>
                    </div>
                  </article>

                  <div className="smartplans-flow-line" />
                  {guidePhase === "builder-add-populate-variable" ? (
                    <div className="smartplans-guide-anchor smartplans-guide-anchor--centered">
                      <SmartPlansGuideCallout
                        imageSrc={dialog1Image.src}
                        className="smartplans-guide-callout--builder"
                        content="Click the plus button, then choose Action."
                      />
                    </div>
                  ) : null}
                  <button
                    className={`smartplans-plus-node ${guidePhase === "builder-add-populate-variable" ? "smartplans-guide-target smartplans-guide-target--active" : ""}`.trim()}
                    type="button"
                    disabled={!isGuideInsertTarget("after-trigger")}
                    onClick={() => handleStepMenuTarget("after-trigger")}
                  >
                    <Plus size={20} />
                  </button>

                  {stepMenuTarget === "after-trigger" ? (
                    <SmartPlansStepChooser
                      choices={followupStepChoices}
                      dragResetKey="after-trigger-step-chooser"
                      onClose={() => setStepMenuTarget(null)}
                    />
                  ) : null}

                  {builder.steps.map((step, index) => (
                    <div key={step.id} className="smartplans-step-stack">
                      <article
                        className={`smartplans-node smartplans-node--interactive ${step.type === "action" ? "smartplans-node--action" : "smartplans-node--condition"}`}
                        onClick={() => {
                          if (step.type === "action") {
                            const definition = actionDefinitions.find((item) => item.id === step.definitionId);
                            if (definition) {
                              openActionConfig(definition, step.id);
                            }
                            return;
                          }

                          const definition = conditionDefinitions.find((item) => item.id === step.definitionId);
                          if (definition) {
                            openConditionConfig(definition, step.id);
                          }
                        }}
                      >
                        <div className="smartplans-node-head">
                          <span className={`smartplans-node-kind ${step.type === "action" ? "smartplans-node-kind--action" : "smartplans-node-kind--condition"}`}>
                            {step.type === "action" ? "DO" : "WAIT"}
                          </span>
                          <strong>{step.label}</strong>
                        </div>
                        <div className="smartplans-node-body">
                          <span>{step.summary}</span>
                        </div>
                      </article>
                      <div className="smartplans-flow-line" />
                      {guidePhase === "builder-add-auto-email" && index === populateVariableStepIndex ? (
                        <div className="smartplans-guide-anchor smartplans-guide-anchor--centered">
                          <SmartPlansGuideCallout
                            imageSrc={dialog1Image.src}
                            className="smartplans-guide-callout--builder"
                            content="Add one more Action after Populate Variable, then choose Auto Email."
                          />
                        </div>
                      ) : null}
                      <button
                        className={`smartplans-plus-node ${guidePhase === "builder-add-auto-email" && index === populateVariableStepIndex ? "smartplans-guide-target smartplans-guide-target--active" : ""}`.trim()}
                        type="button"
                        disabled={!isGuideInsertTarget(index)}
                        onClick={() => handleStepMenuTarget(index)}
                      >
                        <Plus size={20} />
                      </button>
                      {stepMenuTarget === index ? (
                        <SmartPlansStepChooser
                          choices={followupStepChoices}
                          dragResetKey={`step-${index}-chooser`}
                          onClose={() => setStepMenuTarget(null)}
                        />
                      ) : null}
                    </div>
                  ))}

                  <article className="smartplans-node smartplans-node--end">
                    <div className="smartplans-node-head">
                      <span className="smartplans-node-end-flag">
                        <ChevronRight size={16} />
                      </span>
                      <strong>End</strong>
                    </div>
                  </article>
                </div>
              )}
            </div>
          </div>

          <aside className="smartplans-drawer">
            {drawer.type === "none" ? (
              <div className="smartplans-drawer-empty">
                <h3>Smart Plans</h3>
                <p>Select a trigger, condition, or action to keep building this flow.</p>
              </div>
            ) : null}

            {drawer.type === "trigger-list" ? (
              <>
                <div className="smartplans-drawer-header">
                  <h3>Add a Trigger</h3>
                  <button className="smartplans-ghost-icon" type="button" onClick={() => setDrawer({ type: "none" })}>
                    <X size={18} />
                  </button>
                </div>
                {guidePhase === "trigger-list" ? (
                  <div className="smartplans-drawer-body smartplans-drawer-body--guide">
                    <SmartPlansGuideCallout
                      imageSrc={dialog1Image.src}
                      className="smartplans-guide-callout--drawer"
                      content="Choose Lead Created so this plan starts the moment a website lead appears."
                    />
                  </div>
                ) : null}
                {Array.from(new Set(triggerDefinitions.map((item) => item.category))).map((category) => (
                  <SmartPlansSection key={category} title={category} actions={<ChevronDown size={18} />}>
                    <div className="smartplans-option-list">
                      {triggerDefinitions
                        .filter((item) => item.category === category)
                        .map((trigger) => {
                          const isGuideTarget = guidePhase === "trigger-list" && trigger.id === "lead-created";
                          const isDisabled = guidePhase === "trigger-list" && trigger.id !== "lead-created";

                          return (
                            <button
                              key={trigger.id}
                              className={`smartplans-option-card ${isGuideTarget ? "smartplans-guide-target smartplans-guide-target--active smartplans-option-card--guided" : ""}`.trim()}
                              type="button"
                              disabled={isDisabled}
                              onClick={() => addTriggerCriteriaRow(trigger.id)}
                            >
                            <div className="smartplans-option-card-main">
                              <span className="smartplans-option-icon">
                                <Target size={18} />
                              </span>
                              <strong>{trigger.label}</strong>
                            </div>
                            <small>{trigger.description}</small>
                            </button>
                          );
                        })}
                    </div>
                  </SmartPlansSection>
                ))}
              </>
            ) : null}

            {drawer.type === "trigger-detail" ? (
              <>
                <div className="smartplans-drawer-header">
                  <div className="smartplans-drawer-back-title">
                    <button className="smartplans-ghost-icon" type="button" onClick={() => setDrawer({ type: "trigger-list" })}>
                      <ArrowLeft size={18} />
                    </button>
                    <h3>{drawer.draft.label}</h3>
                  </div>
                  <button className="smartplans-ghost-icon" type="button" onClick={() => setDrawer({ type: "none" })}>
                    <X size={18} />
                  </button>
                </div>
                {guidePhase === "trigger-detail" ? (
                  <div className="smartplans-drawer-body smartplans-drawer-body--guide">
                    <SmartPlansGuideCallout
                      imageSrc={dialog2Image.src}
                      className="smartplans-guide-callout--drawer"
                      content="Set the trigger to Lead Created, then make the criteria Source is Website."
                    />
                  </div>
                ) : null}
                <SmartPlansSection
                  title="Criteria"
                  actions={
                    <button
                      className="smartplans-link-button"
                      type="button"
                      onClick={() => {
                        const definition = triggerDefinitions.find((item) => item.id === drawer.draft.definitionId);
                        if (!definition) {
                          return;
                        }
                        const nextField = definition.criteriaOptions[0];
                        setDrawer({
                          type: "trigger-detail",
                          draft: {
                            ...drawer.draft,
                            criteria: [
                              ...drawer.draft.criteria,
                              {
                                id: createId("criteria"),
                                field: nextField.field,
                                logic: nextField.logicOptions[0],
                                values: [nextField.valueOptions[0]]
                              }
                            ]
                          }
                        });
                      }}
                    >
                      <Plus size={16} />
                      Add Criteria
                    </button>
                  }
                >
                  <div className="smartplans-criteria-stack">
                    {drawer.draft.criteria.map((criterion, index) => {
                      const definition = triggerDefinitions.find((item) => item.id === drawer.draft.definitionId)!;
                      const fieldOptions = definition.criteriaOptions;
                      const selectedField = fieldOptions.find((item) => item.field === criterion.field) ?? fieldOptions[0];

                      return (
                        <div key={criterion.id} className="smartplans-criteria-card">
                          <div className="smartplans-criteria-index-row">
                            <span className="smartplans-criteria-index">{index + 1}</span>
                            <button
                              className="smartplans-ghost-icon"
                              type="button"
                              onClick={() =>
                                setDrawer({
                                  type: "trigger-detail",
                                  draft: {
                                    ...drawer.draft,
                                    criteria: drawer.draft.criteria.filter((item) => item.id !== criterion.id)
                                  }
                                })
                              }
                            >
                              <X size={16} />
                            </button>
                          </div>

                          <label>
                            <span>Field</span>
                            <select
                              value={criterion.field}
                              onChange={(event) => {
                                const nextField = fieldOptions.find((item) => item.field === event.target.value) ?? fieldOptions[0];
                                setDrawer({
                                  type: "trigger-detail",
                                  draft: {
                                    ...drawer.draft,
                                    criteria: drawer.draft.criteria.map((item) =>
                                      item.id === criterion.id
                                        ? {
                                            ...item,
                                            field: nextField.field,
                                            logic: nextField.logicOptions[0],
                                            values: [nextField.valueOptions[0]]
                                          }
                                        : item
                                    )
                                  }
                                });
                              }}
                            >
                              {fieldOptions.map((option) => (
                                <option key={option.field} value={option.field}>
                                  {option.field}
                                </option>
                              ))}
                            </select>
                          </label>

                          <label>
                            <span>Logic</span>
                            <select
                              value={criterion.logic}
                              onChange={(event) =>
                                setDrawer({
                                  type: "trigger-detail",
                                  draft: {
                                    ...drawer.draft,
                                    criteria: drawer.draft.criteria.map((item) =>
                                      item.id === criterion.id ? { ...item, logic: event.target.value } : item
                                    )
                                  }
                                })
                              }
                            >
                              {selectedField.logicOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </label>

                          <label>
                            <span>Value</span>
                            <select
                              value={criterion.values[0] ?? ""}
                              onChange={(event) =>
                                setDrawer({
                                  type: "trigger-detail",
                                  draft: {
                                    ...drawer.draft,
                                    criteria: drawer.draft.criteria.map((item) =>
                                      item.id === criterion.id ? { ...item, values: [event.target.value] } : item
                                    )
                                  }
                                })
                              }
                            >
                              {selectedField.valueOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </SmartPlansSection>
                <div className="smartplans-drawer-footer">
                  <button className="smartplans-subtle-button" type="button" onClick={() => setDrawer({ type: "none" })}>
                    Cancel
                  </button>
                  <button className="smartplans-primary-inline" type="button" onClick={() => saveTrigger(drawer.draft)}>
                    Save
                  </button>
                </div>
              </>
            ) : null}

            {drawer.type === "action-list" ? (
              <>
                <div className="smartplans-drawer-header">
                  <h3>Add an Action</h3>
                  <button className="smartplans-ghost-icon" type="button" onClick={() => setDrawer({ type: "none" })}>
                    <X size={18} />
                  </button>
                </div>
                {guidePhase === "action-list-populate-variable" || guidePhase === "action-list-auto-email" ? (
                  <div className="smartplans-drawer-body smartplans-drawer-body--guide">
                    <SmartPlansGuideCallout
                      imageSrc={dialog1Image.src}
                      className="smartplans-guide-callout--drawer"
                      content={
                        guidePhase === "action-list-populate-variable"
                          ? "Choose Populate Variable so we can pull your calendar availability into a token."
                          : "Choose Auto Email so the availability token can be sent automatically."
                      }
                    />
                  </div>
                ) : null}
                {Array.from(new Set(actionDefinitions.map((item) => item.group))).map((group) => (
                  <SmartPlansSection key={group} title={group} actions={<ChevronDown size={18} />}>
                    <div className="smartplans-option-list">
                      {actionDefinitions
                        .filter((item) => item.group === group)
                        .map((action) => {
                          const isGuidePopulateTarget =
                            guidePhase === "action-list-populate-variable" && action.id === "populate-variable";
                          const isGuideAutoEmailTarget =
                            guidePhase === "action-list-auto-email" && action.id === "auto-email";
                          const isDisabled =
                            (guidePhase === "action-list-populate-variable" && action.id !== "populate-variable") ||
                            (guidePhase === "action-list-auto-email" && action.id !== "auto-email");

                          return (
                            <button
                              key={action.id}
                              className={`smartplans-option-card ${(isGuidePopulateTarget || isGuideAutoEmailTarget) ? "smartplans-guide-target smartplans-guide-target--active smartplans-option-card--guided" : ""}`.trim()}
                              type="button"
                              disabled={isDisabled}
                              onClick={() => openActionConfig(action)}
                            >
                            <div className="smartplans-option-card-main">
                              <span className="smartplans-option-icon smartplans-option-icon--action">{action.icon}</span>
                              <strong>{action.label}</strong>
                            </div>
                            </button>
                          );
                        })}
                    </div>
                  </SmartPlansSection>
                ))}
              </>
            ) : null}

            {drawer.type === "condition-list" ? (
              <>
                <div className="smartplans-drawer-header">
                  <h3>Add a Condition</h3>
                  <button className="smartplans-ghost-icon" type="button" onClick={() => setDrawer({ type: "none" })}>
                    <X size={18} />
                  </button>
                </div>
                <SmartPlansSection title="Condition" actions={<ChevronDown size={18} />}>
                  <div className="smartplans-option-list">
                    {conditionDefinitions.map((condition) => (
                      <button key={condition.id} className="smartplans-option-card" type="button" onClick={() => openConditionConfig(condition)}>
                        <div className="smartplans-option-card-main">
                          <span className="smartplans-option-icon smartplans-option-icon--condition">{condition.icon}</span>
                          <strong>{condition.label}</strong>
                        </div>
                      </button>
                    ))}
                  </div>
                </SmartPlansSection>
              </>
            ) : null}

            {drawer.type === "action-detail" ? (
              <>
                <div className="smartplans-drawer-header">
                  <div className="smartplans-drawer-back-title">
                    <button className="smartplans-ghost-icon" type="button" onClick={() => setDrawer({ type: "action-list" })}>
                      <ArrowLeft size={18} />
                    </button>
                    <h3>{drawer.definition.label}</h3>
                  </div>
                  <button className="smartplans-ghost-icon" type="button" onClick={() => setDrawer({ type: "none" })}>
                    <X size={18} />
                  </button>
                </div>
                <div className="smartplans-drawer-body">
                  {guidePhase === "action-detail-populate-variable" ? (
                    <SmartPlansGuideCallout
                      imageSrc={dialog2Image.src}
                      className="smartplans-guide-callout--drawer"
                      content={
                        <div className="smartplans-guide-copy">
                          <strong>Populate Variable</strong>
                          <span>Set Source = Calendar</span>
                          <span>Set Calendar Selection = nextDayAvailability</span>
                          <span>Pick comma separated time slots for the format</span>
                        </div>
                      }
                    />
                  ) : null}
                  {guidePhase === "action-detail-auto-email" ? (
                    <SmartPlansGuideCallout
                      imageSrc={dialog2Image.src}
                      className="smartplans-guide-callout--drawer"
                      content={
                        <div className="smartplans-guide-copy">
                          <strong>Auto Email</strong>
                          <span>Put the availability token in the body.</span>
                          <span>Example: Tomorrow I'm available at #availability#</span>
                        </div>
                      }
                    />
                  ) : null}
                  {drawer.definition.id === "populate-variable" ? (
                    <div className="smartplans-form-stack">
                      <label className="smartplans-form-field">
                        <span>Variable Name</span>
                        <input
                          type="text"
                          value={String(drawer.draft.variableName ?? "")}
                          onChange={(event) =>
                            setDrawer({
                              ...drawer,
                              draft: {
                                ...drawer.draft,
                                variableName: event.target.value
                              }
                            })
                          }
                        />
                      </label>
                      <div className="smartplans-variable-preview">
                        <span>Token preview</span>
                        <strong>{buildVariableToken(normalizeVariableBaseName(String(drawer.draft.variableName ?? "variable")))}</strong>
                      </div>
                      <label className="smartplans-form-field">
                        <span>Source</span>
                        <select
                          value={String(drawer.draft.source ?? "Calendar")}
                          onChange={(event) =>
                            setDrawer({
                              ...drawer,
                              draft: {
                                ...drawer.draft,
                                source: event.target.value
                              }
                            })
                          }
                        >
                          {populateVariableSources.map((source) => (
                            <option key={source} value={source}>
                              {source}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="smartplans-form-field">
                        <span>Calendar Selection</span>
                        <select
                          value={String(drawer.draft.calendarSelection ?? "sameDayAvailability")}
                          onChange={(event) =>
                            setDrawer({
                              ...drawer,
                              draft: {
                                ...drawer.draft,
                                calendarSelection: event.target.value
                              }
                            })
                          }
                        >
                          {calendarVariableOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="smartplans-form-field">
                        <span>Formatting Type</span>
                        <select
                          value={String(drawer.draft.formatType ?? "continuous time availability")}
                          onChange={(event) =>
                            setDrawer({
                              ...drawer,
                              draft: {
                                ...drawer.draft,
                                formatType: event.target.value
                              }
                            })
                          }
                        >
                          {variableFormatOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  ) : (
                    <>
                      {(drawer.definition.id === "auto-email" || drawer.definition.id === "auto-text") && availableDrawerVariables.length ? (
                        <div className="smartplans-variable-insert-panel">
                          <div className="smartplans-variable-insert-header">
                            <strong>Populate Variables</strong>
                            {drawer.definition.id === "auto-email" ? (
                              <select
                                value={drawer.insertTargetFieldId ?? "body"}
                                onChange={(event) =>
                                  setDrawer({
                                    ...drawer,
                                    insertTargetFieldId: event.target.value
                                  })
                                }
                              >
                                <option value="subject">Insert into Subject</option>
                                <option value="body">Insert into Body</option>
                              </select>
                            ) : null}
                          </div>
                          <div className="smartplans-variable-chip-row">
                            {availableDrawerVariables.map((variable) => (
                              <button
                                key={variable.id}
                                className="smartplans-variable-chip"
                                type="button"
                                onClick={() => {
                                  const targetFieldId = drawer.definition.id === "auto-email" ? drawer.insertTargetFieldId ?? "body" : "message";
                                  const currentValue = String(drawer.draft[targetFieldId] ?? "");
                                  const spacer = currentValue && !currentValue.endsWith(" ") ? " " : "";
                                  setDrawer({
                                    ...drawer,
                                    draft: {
                                      ...drawer.draft,
                                      [targetFieldId]: `${currentValue}${spacer}${variable.token}`
                                    }
                                  });
                                }}
                              >
                                {variable.token}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      <div className="smartplans-form-stack">
                        {drawer.definition.fields.map((field) => (
                          <label key={field.id} className="smartplans-form-field">
                            <span>{field.label}</span>
                            <SmartPlanField
                              field={field}
                              value={drawer.draft[field.id]}
                              onChange={(nextValue) =>
                                setDrawer({
                                  ...drawer,
                                  draft: {
                                    ...drawer.draft,
                                    [field.id]: nextValue
                                  }
                                })
                              }
                            />
                          </label>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="smartplans-drawer-footer">
                  <button className="smartplans-subtle-button" type="button" onClick={() => setDrawer({ type: "none" })}>
                    Cancel
                  </button>
                  <button className="smartplans-primary-inline" type="button" onClick={() => saveAction(drawer.definition, drawer.draft)}>
                    Save
                  </button>
                </div>
              </>
            ) : null}

            {drawer.type === "condition-detail" ? (
              <>
                <div className="smartplans-drawer-header">
                  <div className="smartplans-drawer-back-title">
                    <button className="smartplans-ghost-icon" type="button" onClick={() => setDrawer({ type: "condition-list" })}>
                      <ArrowLeft size={18} />
                    </button>
                    <h3>{drawer.definition.label}</h3>
                  </div>
                  <button className="smartplans-ghost-icon" type="button" onClick={() => setDrawer({ type: "none" })}>
                    <X size={18} />
                  </button>
                </div>
                <div className="smartplans-drawer-body">
                  <div className="smartplans-form-stack">
                    {drawer.definition.fields.map((field) => (
                      <label key={field.id} className="smartplans-form-field">
                        <span>{field.label}</span>
                        <SmartPlanField
                          field={field}
                          value={drawer.draft[field.id]}
                          onChange={(nextValue) =>
                            setDrawer({
                              ...drawer,
                              draft: {
                                ...drawer.draft,
                                [field.id]: nextValue
                              }
                            })
                          }
                        />
                      </label>
                    ))}
                  </div>
                </div>
                <div className="smartplans-drawer-footer">
                  <button className="smartplans-subtle-button" type="button" onClick={() => setDrawer({ type: "none" })}>
                    Cancel
                  </button>
                  <button className="smartplans-primary-inline" type="button" onClick={() => saveCondition(drawer.definition, drawer.draft)}>
                    Save
                  </button>
                </div>
              </>
            ) : null}
          </aside>
        </div>
      </section>
    );
  }

  return (
    <section className="smartplans-page">
      <header className="smartplans-index-header">
        <div className="smartplans-index-title">
          <h1>Smart Plans</h1>
          <div className="smartplans-title-pills">
            <span className="smartplans-title-pill">
              <ListChecks size={15} />
              Get Training
            </span>
            <span className="smartplans-title-pill">
              <Sparkles size={15} />
              What&apos;s New?
            </span>
          </div>
        </div>

        <div className="smartplans-index-switcher">
          <button
            className={indexTab === "plans" ? "smartplans-index-switcher-button is-active" : "smartplans-index-switcher-button"}
            type="button"
            onClick={() => setIndexTab("plans")}
          >
            Plans
          </button>
          <button
            className={indexTab === "library" ? "smartplans-index-switcher-button is-active" : "smartplans-index-switcher-button"}
            type="button"
            disabled={guideLocked}
            onClick={() => setIndexTab("library")}
          >
            Library
          </button>
        </div>

        <div className="smartplans-create-box">
          {guidePhase === "index-create" ? (
            <SmartPlansGuideCallout
              imageSrc={dialog1Image.src}
              className="smartplans-guide-callout--index"
              content={
                createMenuOpen
                  ? "Choose From Scratch to build this Smart Plan step by step."
                  : "Click Create Smart Plan, then choose From Scratch."
              }
            />
          ) : null}
          {indexTab === "plans" ? (
            <div className="smartplans-create-menu">
              <button
                className={`smartplans-create-button ${guidePhase === "index-create" ? "smartplans-guide-target smartplans-guide-target--active" : ""}`.trim()}
                type="button"
                onClick={() => setCreateMenuOpen((open) => !open)}
              >
                <Plus size={18} />
                Create Smart Plan
                <ChevronDown size={18} />
              </button>
              {createMenuOpen ? (
                <div className="smartplans-create-dropdown">
                  <button
                    className={guidePhase === "index-create" ? "smartplans-guide-target smartplans-guide-target--active" : ""}
                    type="button"
                    onClick={() => openCreateFlow("scratch")}
                  >
                    From Scratch
                  </button>
                  <button
                    type="button"
                    disabled={guideLocked}
                    onClick={() => {
                      setIndexTab("library");
                      setCreateMenuOpen(false);
                    }}
                  >
                    From Template
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <button className="smartplans-create-button" type="button" onClick={() => openCreateFlow("scratch")}>
              <Plus size={18} />
              Create From Scratch
            </button>
          )}
        </div>
      </header>

      {indexTab === "plans" ? (
        <div className="smartplans-index-layout">
          <aside className="smartplans-sidebar">
            <label className="smartplans-search-field">
              <Search size={18} />
              <input value={planSearch} placeholder="Search by name" onChange={(event) => setPlanSearch(event.target.value)} />
            </label>

            <button className="smartplans-sidebar-item smartplans-sidebar-item--active" type="button">
              <LayoutGrid size={18} />
              All Smart Plans
            </button>

            <div className="smartplans-folder-block">
              <div className="smartplans-folder-title">
                <span>MY FOLDER</span>
                <ChevronDown size={18} />
              </div>
              <p>No folders</p>
            </div>

            <div className="smartplans-folder-block">
              <div className="smartplans-folder-title">
                <span>COMPANY FOLDER</span>
                <ChevronDown size={18} />
              </div>
              <p>No folders</p>
            </div>

            <button className="smartplans-folder-add" type="button">
              <FolderPlus size={18} />
              Add Folder
            </button>
          </aside>

          <div className="smartplans-main-panel">
            <div className="smartplans-toolbar">
              <label className="smartplans-search-field">
                <Search size={18} />
                <input value={planSearch} placeholder="Search by plan name" onChange={(event) => setPlanSearch(event.target.value)} />
              </label>

              <button className="smartplans-filter-button" type="button">
                Auto Apply: All
                <ChevronDown size={16} />
              </button>
              <button className="smartplans-filter-button" type="button">
                Scope: {scopeOptions[0]}
                <ChevronDown size={16} />
              </button>

              <div className="smartplans-view-toggle">
                <button className="is-active" type="button">
                  <LayoutGrid size={16} />
                </button>
              </div>
            </div>

            <div className="smartplans-table">
              <div className="smartplans-table-head">
                <span className="smartplans-table-check" />
                <span>Plan Name</span>
                <span>Scope</span>
                <span>Lead Type</span>
                <span>Duration</span>
                <span>Auto Apply</span>
                <span>Action</span>
              </div>
              <div className="smartplans-table-body">
                {filteredPlans.map((plan) => (
                  <div key={plan.id} className="smartplans-table-row">
                    <span className="smartplans-table-check">
                      <input type="checkbox" />
                    </span>
                    <strong>{plan.name}</strong>
                    <span>{plan.scope}</span>
                    <span>{plan.leadTypeSummary}</span>
                    <span>{plan.duration}</span>
                    <label className="smartplans-mini-switch">
                      <input
                        checked={plan.autoApply}
                        type="checkbox"
                        onChange={(event) =>
                          setPlans((current) =>
                            current.map((item) =>
                              item.id === plan.id ? { ...item, autoApply: event.target.checked } : item
                            )
                          )
                        }
                      />
                      <span />
                    </label>
                    <div className="smartplans-table-actions">
                      <button className="smartplans-ghost-icon" type="button" onClick={() => setIndexTab("library")}>
                        <Eye size={17} />
                      </button>
                      <button className="smartplans-ghost-icon" type="button" onClick={() => openCreateFlow("scratch")}>
                        <Settings2 size={17} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="smartplans-library-panel">
          <div className="smartplans-toolbar">
            <label className="smartplans-search-field">
              <Search size={18} />
              <input value={librarySearch} placeholder="Search by plan name" onChange={(event) => setLibrarySearch(event.target.value)} />
            </label>
            <button className="smartplans-filter-button" type="button">
              Plan Type: All
              <ChevronDown size={16} />
            </button>
            <button className="smartplans-filter-button" type="button">
              Lead Type: All
              <ChevronDown size={16} />
            </button>
            <button className="smartplans-filter-button" type="button">
              Scenario: All
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="smartplans-library-grid">
            {filteredTemplates.map((template) => (
              <article key={template.id} className="smartplans-template-card">
                <div className="smartplans-template-title">{template.name}</div>
                <div className="smartplans-template-meta">{template.leadTypeSummary}</div>
                <div className="smartplans-template-badges">
                  {template.badges.map((badge, index) => (
                    <span key={`${template.id}-${index}`} className="smartplans-template-badge">
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="smartplans-template-duration">
                  <Clock3 size={16} />
                  {template.duration}
                </div>
                <div className="smartplans-template-actions">
                  <button className="smartplans-template-use" type="button" onClick={() => openCreateFlow("template", template)}>
                    Use Template
                  </button>
                  <button className="smartplans-template-preview" type="button" onClick={() => openCreateFlow("template", template)}>
                    <Eye size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {scopeModalOpen ? (
        <div
          className="smartplans-modal-backdrop"
          onClick={() => {
            if (!guideLocked || guidePhase !== "scope-modal") {
              setScopeModalOpen(false);
            }
          }}
        >
          <div className="smartplans-modal" onClick={(event) => event.stopPropagation()}>
            <div className="smartplans-modal-header">
              <h2>CREATE A PLAN</h2>
              <button
                className="smartplans-ghost-icon"
                type="button"
                disabled={guidePhase === "scope-modal"}
                onClick={() => setScopeModalOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
            <div className="smartplans-modal-body">
              <p className="smartplans-modal-label">Plan Scope</p>
              <div className="smartplans-scope-options">
                {scopeOptions.map((scope) => (
                  <label key={scope} className="smartplans-radio-row">
                    <input checked={selectedScope === scope} name="plan-scope" type="radio" onChange={() => setSelectedScope(scope)} />
                    <span>{scope}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="smartplans-modal-footer">
              {guidePhase === "scope-modal" ? (
                <SmartPlansGuideCallout
                  imageSrc={dialog2Image.src}
                  className="smartplans-guide-callout--modal"
                  content="Choose the right scope for this plan, then click Create Plan."
                />
              ) : null}
              <button
                className="smartplans-subtle-button"
                type="button"
                disabled={guidePhase === "scope-modal"}
                onClick={() => setScopeModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className={`smartplans-save-button smartplans-save-button--inline ${guidePhase === "scope-modal" ? "smartplans-guide-target smartplans-guide-target--active" : ""}`.trim()}
                type="button"
                onClick={startBuilderFromScope}
              >
                Create Plan
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

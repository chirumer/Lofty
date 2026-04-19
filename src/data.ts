import {
  Bot,
  BriefcaseBusiness,
  Building,
  Building2,
  FileBarChart2,
  House,
  Landmark,
  Layers3,
  Megaphone,
  ShoppingBag,
  Sparkles,
  Target,
  UserRound
} from "lucide-react";
import type {
  CardState,
  CardToggleStore,
  DashboardPerson,
  DashboardUpdate,
  HotSheetItem,
  LeadAppointment,
  LeadTask,
  LeadViewId,
  LibraryCardDefinition,
  LibraryCardId,
  ListingInsight,
  OnboardingSnapshot,
  PresetDefinition,
  PromptConfigStore,
  PromptFieldDefinition,
  PromptTarget,
  RoleDefinition,
  RoleId,
  SubfeatureDefinition
} from "./types";
import testUser from "./config/test-user.json";

const allRoles: RoleId[] = [
  "company-owner",
  "company-admin",
  "office-owner",
  "office-admin",
  "agent-user",
  "lender"
];

const ownerAndAdminRoles: RoleId[] = ["company-owner", "company-admin", "office-owner", "office-admin"];
const ownerLikeRoles: RoleId[] = ["company-owner", "company-admin", "office-owner"];
const nonLenderRoles: RoleId[] = ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"];

function selectField(
  id: string,
  label: string,
  options: string[],
  helperText: string,
  defaultValue?: string,
  required = true
): PromptFieldDefinition {
  return { id, label, type: "select", options, helperText, defaultValue, required };
}

function textField(
  id: string,
  label: string,
  helperText: string,
  placeholder?: string,
  required = true
): PromptFieldDefinition {
  return { id, label, type: "text", helperText, placeholder, required };
}

function toggleField(id: string, label: string, helperText: string, defaultValue = false): PromptFieldDefinition {
  return { id, label, type: "toggle", helperText, defaultValue, required: false };
}

function subfeature(
  id: string,
  name: string,
  description: string,
  allowedRoles: RoleId[],
  requiredFor: RoleId[],
  promptFields: PromptFieldDefinition[],
  setupSummary: string,
  example: string,
  lockedReason: string,
  defaultEnabled = false
): SubfeatureDefinition {
  return {
    id,
    name,
    description,
    allowedRoles,
    requiredFor,
    promptFields,
    setupSummary,
    example,
    lockedReason,
    defaultEnabled
  };
}

function leadTask(id: string, type: LeadTask["type"], title: string, timeLabel: string, completed = false): LeadTask {
  return { id, type, title, timeLabel, completed };
}

function leadAppointment(
  id: string,
  type: LeadAppointment["type"],
  title: string,
  timeLabel: string,
  incomplete = false
): LeadAppointment {
  return { id, type, title, timeLabel, incomplete };
}

export const topNavItems: Array<{ id: LibraryCardId; label: string }> = [
  { id: "crm", label: "CRM" },
  { id: "sales", label: "Sales" },
  { id: "marketing", label: "Marketing" },
  { id: "content", label: "Content" },
  { id: "automation", label: "Automation" },
  { id: "reporting", label: "Reporting" },
  { id: "marketplace", label: "Marketplace" },
  { id: "ai-copilots", label: "AI Copilots" }
];

export const roleDefinitions: RoleDefinition[] = [
  {
    id: "company-owner",
    name: "Company Owner",
    summary: "Runs the full Lofty account and makes the top-level setup decisions.",
    whatYouSee: "You will see every setup tab, every shared workflow, and owner-level controls.",
    setupFocus: "Company profile, sales workflows, websites, automation, reporting, integrations, and add-ons.",
    icon: Building2,
    accessSummary: [
      "Full access to all tabs and most controls.",
      "Can manage company-wide websites, reporting, permissions, and add-ons.",
      "Can launch shared operational templates across the company."
    ]
  },
  {
    id: "company-admin",
    name: "Company Admin",
    summary: "Operates the company day to day without owner-only financial control.",
    whatYouSee: "You will see almost all setup tabs, with only owner-only controls separated out.",
    setupFocus: "Company operations, communication, routing, reporting, and team-wide tools.",
    icon: BriefcaseBusiness,
    accessSummary: [
      "Nearly full access to the setup builder.",
      "Can manage most company workflows and support users.",
      "Owner-only controls remain locked."
    ]
  },
  {
    id: "office-owner",
    name: "Office / Team Owner",
    summary: "Launches Lofty for one office or team and manages the shared workflow.",
    whatYouSee: "You will see the setup tabs needed to run an office or team, not company-wide ownership controls.",
    setupFocus: "Office CRM, sales workflows, content, automation, communication, and reporting.",
    icon: Building,
    accessSummary: [
      "Team-scoped access to operational setup.",
      "Can manage office workflows, templates, reporting, and communication.",
      "Company-wide ownership settings stay out of scope."
    ]
  },
  {
    id: "office-admin",
    name: "Office / Team Admin",
    summary: "Supports one office or team with shared setup and operational help.",
    whatYouSee: "You will see most office setup tabs, but some owner and add-on controls stay limited.",
    setupFocus: "Shared workflows, content basics, communication, templates, reporting, and support tasks.",
    icon: House,
    accessSummary: [
      "Scoped admin access for an office or team.",
      "Can manage many shared workflows inside admin permissions.",
      "Owner-level and some add-on controls stay locked."
    ]
  },
  {
    id: "agent-user",
    name: "Agent / User",
    summary: "Uses Lofty for personal CRM, website, follow-up, and daily production.",
    whatYouSee: "You will see the tabs needed for your own pipeline, website, communication, and reporting.",
    setupFocus: "Personal CRM, sales, content, automation, AI, and day-to-day production.",
    icon: UserRound,
    accessSummary: [
      "Personal production access focused on daily work.",
      "Can launch the tabs needed for an individual real estate workflow.",
      "Admin-only controls remain hidden or locked."
    ]
  },
  {
    id: "lender",
    name: "Lender",
    summary: "Collaborates on shared leads with limited, lender-safe access.",
    whatYouSee: "You will only see collaboration-safe tabs and lender-relevant subfeatures.",
    setupFocus: "Shared leads, shared tasks, transaction collaboration, and lender-safe AI help.",
    icon: Landmark,
    accessSummary: [
      "Limited collaboration access on shared leads.",
      "Can see lender-safe setup and assigned-lead context.",
      "Full content, marketing, reporting, and admin controls stay locked."
    ]
  }
];

export const libraryCardDefinitions: LibraryCardDefinition[] = [
  {
    id: "crm",
    label: "CRM",
    description: "The people and relationship layer of Lofty.",
    allowedRoles: allRoles,
    requiredFor: allRoles,
    icon: Layers3,
    whatItDoes: "Organizes people, follow-up structure, and the daily CRM foundation.",
    whyItMatters: "This is where the database becomes usable instead of just imported.",
    tip: "Turn on People first if you want the rest of the workflow to feel connected.",
    lockExplanation: "CRM is available to every role, but lender users only get collaboration-safe CRM features.",
    subfeatures: [
      subfeature(
        "people",
        "People",
        "Creates the main people workspace for leads and contacts.",
        allRoles,
        allRoles,
        [
          selectField("importSource", "Lead source", ["Website", "CSV import", "Partner leads", "Manual entry"], "Choose the first source you want to use.", "Website"),
          textField("ownerRule", "Default owner or team", "This helps route people into the right workspace.", testUser.name),
          toggleField("mergeDuplicates", "Merge duplicates", "Turn this on to auto-flag duplicate people records.", true)
        ],
        "Sets up the main lead database and ownership defaults.",
        "This helps you bring in leads and start working them right away.",
        "People access depends on role-safe lead visibility."
      ),
      subfeature(
        "segments",
        "Segments",
        "Groups people into saved audiences and pipeline slices.",
        ownerAndAdminRoles.concat(["agent-user"]),
        ownerAndAdminRoles,
        [
          textField("firstSegmentName", "First segment name", "Create one saved segment to get started.", "Warm buyers"),
          selectField("segmentLogic", "Segment rule", ["Lead source", "Stage", "Location", "Recent activity"], "Pick the main rule for this segment.", "Lead source")
        ],
        "Builds the first saved segment so people are easier to filter.",
        "Use this to separate warm buyers from the rest of your database.",
        "Segments are limited when the role only sees shared lead slices."
      ),
      subfeature(
        "tasks",
        "Tasks",
        "Tracks calls, to-dos, and relationship follow-up work.",
        allRoles,
        ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user", "lender"],
        [
          selectField("taskDefaultType", "Default task type", ["Call", "Text", "Email", "Other"], "Set the task type your team uses most.", "Call"),
          selectField("taskReminderCadence", "Reminder cadence", ["Same day", "Next day", "Weekly"], "Choose how task reminders should behave.", "Same day")
        ],
        "Turns on the core to-do workflow for this tab.",
        "This keeps relationship work from slipping through the cracks.",
        "Task workflows only appear where the role can own or collaborate on follow-up."
      ),
      subfeature(
        "calendar",
        "Calendar",
        "Schedules appointments and keeps team availability in sync.",
        ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
        ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
        [
          selectField("calendarType", "Calendar connection", ["Google Calendar", "Outlook", "Lofty only"], "Choose how this calendar should be connected.", "Google Calendar"),
          toggleField("showAvailability", "Share availability", "Show open slots during scheduling.", true)
        ],
        "Connects the calendar and prepares the scheduling experience.",
        "This helps appointments and follow-up show up in one place.",
        "Calendar setup is only available where the role owns a calendar workflow."
      )
    ]
  },
  {
    id: "sales",
    label: "Sales",
    description: "High-intent actions, deal momentum, and conversion steps.",
    allowedRoles: allRoles,
    requiredFor: allRoles,
    icon: Target,
    whatItDoes: "Brings active buying and selling steps into one working tab.",
    whyItMatters: "This is how interest turns into offers, showings, and real transactions.",
    tip: "Keep this tab simple for launch, then add more detail later.",
    lockExplanation: "Sales is available to all roles, but some deal controls stay limited for lenders.",
    subfeatures: [
      subfeature(
        "showing",
        "Showing",
        "Tracks showing requests and viewing activity.",
        nonLenderRoles,
        ["company-owner", "company-admin", "office-owner", "agent-user"],
        [
          selectField("showingMode", "Showing flow", ["Request based", "Instant booking", "Agent approval"], "Choose how showings should be requested.", "Request based"),
          toggleField("sendReminders", "Send reminders", "Send reminder messages before a showing.", true)
        ],
        "Prepares showing intake and reminder rules.",
        "This helps clients request a tour and keeps the follow-up organized.",
        "Showing tools are only available to roles managing buyer activity directly."
      ),
      subfeature(
        "offers",
        "Offers",
        "Organizes offer activity and related negotiation steps.",
        ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
        ["company-owner", "company-admin", "office-owner"],
        [
          selectField("offerStage", "Starting offer stage", ["Draft", "Submitted", "Under review"], "Pick the stage you use to start offer tracking.", "Draft"),
          toggleField("notifyTeam", "Notify team", "Notify the team when a new offer is tracked.", true)
        ],
        "Turns on offer tracking with a default stage and notifications.",
        "This helps you see which deals are moving toward contract.",
        "Offer tools stay limited to roles that actively manage negotiations."
      ),
      subfeature(
        "transactions",
        "Transactions",
        "Tracks the live deal record and closing progress.",
        allRoles,
        ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user", "lender"],
        [
          selectField("transactionView", "Transaction view", ["Agent view", "Team view", "Shared lender view"], "Choose the starting transaction view.", "Agent view"),
          toggleField("deadlineAlerts", "Deadline alerts", "Turn on alerts for key transaction dates.", true)
        ],
        "Creates the base transaction workflow and deadline awareness.",
        "This keeps everyone aligned once a deal is active.",
        "Transaction visibility depends on role-safe collaboration permissions."
      )
    ]
  },
  {
    id: "marketing",
    label: "Marketing",
    description: "Outbound promotion, campaigns, and lead generation.",
    allowedRoles: nonLenderRoles,
    requiredFor: [],
    icon: Megaphone,
    whatItDoes: "Handles email, texting, outreach, and top-of-funnel demand generation.",
    whyItMatters: "This tab helps create demand instead of only reacting to incoming activity.",
    tip: "If you want a lighter launch, build this after CRM and Sales.",
    lockExplanation: "Marketing is for operational and agent roles. Lenders do not get the full marketing suite.",
    subfeatures: [
      subfeature(
        "emails",
        "Emails",
        "Sends branded marketing emails and nurture content.",
        nonLenderRoles,
        ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
        [
          textField("senderName", "Sender name", "This is the name shown in outgoing emails.", "Lofty Team"),
          textField("senderEmail", "Sender email", "Use the email address you want campaigns to come from.", "hello@blueridge.com")
        ],
        "Prepares your sender identity and basic email marketing setup.",
        "This helps email campaigns look branded and trustworthy.",
        "Email marketing is not available to lender roles."
      ),
      subfeature(
        "text-messages",
        "Text Messages",
        "Sends campaign texts and nurture follow-up messages.",
        nonLenderRoles,
        ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
        [
          textField("textNumber", "Sending number", "Enter the number or short code that will send texts.", "+1 (555) 000-1111"),
          selectField("approvalStatus", "Approval status", ["Pending A2P", "Approved", "Using shared number"], "Choose the texting approval status.", "Pending A2P")
        ],
        "Sets the sending number and texting approval status.",
        "This helps campaign texting launch without confusion.",
        "Campaign texting is not available to lender roles."
      ),
      subfeature(
        "social-agent",
        "Social Agent",
        "Uses AI and templates to help create social posts.",
        nonLenderRoles,
        [],
        [
          selectField("socialGoal", "Primary social goal", ["Brand awareness", "Lead generation", "Listings"], "Pick what social should focus on first.", "Brand awareness"),
          toggleField("autoCaptions", "Auto captions", "Generate caption ideas automatically.", true)
        ],
        "Prepares AI-assisted social planning and post ideas.",
        "This helps keep social marketing consistent without extra manual work.",
        "Social tools are only available to marketing-capable roles."
      ),
      subfeature(
        "direct-mail",
        "Direct Mail",
        "Prepares mail-based campaigns for geographic and listing outreach.",
        ownerAndAdminRoles.concat(["agent-user"]),
        [],
        [
          selectField("mailAudience", "Mail audience", ["Sphere", "Farm area", "Open house follow-up"], "Choose the first audience for direct mail.", "Sphere"),
          selectField("mailCadence", "Mail cadence", ["One-time", "Monthly", "Quarterly"], "Choose the starting send cadence.", "Monthly")
        ],
        "Creates a simple mail audience and cadence.",
        "This helps printed outreach feel intentional instead of one-off.",
        "Direct mail depends on marketing access and campaign permissions."
      ),
      subfeature(
        "lead-generation",
        "Lead Generation",
        "Turns ads and forms into new lead flow.",
        nonLenderRoles,
        ownerLikeRoles,
        [
          selectField("leadGenSource", "Primary source", ["Facebook Ads", "Google PPC", "Landing pages"], "Choose the main lead generation source.", "Facebook Ads"),
          textField("destinationRule", "Lead destination", "Choose where new leads should be routed first.", "Buyer team")
        ],
        "Connects the first lead generation source and destination.",
        "This helps paid and organic lead capture land in the right place.",
        "Lead generation controls stay limited when routing access is restricted."
      ),
      subfeature(
        "lofty-bloom",
        "Lofty Bloom",
        "Runs brand growth campaigns for visibility and awareness.",
        ["company-owner", "company-admin", "office-owner", "office-admin"],
        [],
        [
          selectField("bloomObjective", "Bloom objective", ["Awareness", "Traffic", "Retargeting"], "Pick the main Bloom objective.", "Awareness")
        ],
        "Sets the first Bloom campaign objective.",
        "This helps brand growth campaigns launch with a clear goal.",
        "Bloom is only available to roles with broader marketing control."
      ),
      subfeature(
        "brand-awareness",
        "Brand Awareness",
        "Tracks broader visibility campaigns across marketing channels.",
        nonLenderRoles,
        [],
        [
          selectField("awarenessFocus", "Awareness focus", ["Neighborhood", "Office brand", "Agent brand"], "Choose the focus for awareness campaigns.", "Agent brand")
        ],
        "Starts a simple awareness strategy around your brand focus.",
        "This helps the platform support top-of-funnel growth, not just conversion.",
        "Brand awareness setup is not available to lender roles."
      )
    ]
  },
  {
    id: "content",
    label: "Content",
    description: "Website and content surfaces that prospects can see and use.",
    allowedRoles: nonLenderRoles,
    requiredFor: nonLenderRoles,
    icon: Building,
    whatItDoes: "Builds the website, landing pages, and event-ready content experiences.",
    whyItMatters: "This is where the public-facing side of the platform gets built.",
    tip: "If you only build one public-facing tab early on, make it this one.",
    lockExplanation: "Content setup is for the roles that own websites and lead capture surfaces.",
    subfeatures: [
      subfeature(
        "websites",
        "Websites",
        "Creates the main public website and listing search experience.",
        nonLenderRoles,
        nonLenderRoles,
        [
          selectField("siteType", "Website type", ["Agent site", "Team site", "Office site"], "Pick the main site type to generate.", "Agent site"),
          selectField("template", "Template", ["Modern IDX", "Classic Realty", "Luxury brand"], "Choose the template to start from.", "Modern IDX")
        ],
        "Generates the main website type and base theme.",
        "This is where your website is built.",
        "Website setup is only available to roles that own a public site."
      ),
      subfeature(
        "landing-pages",
        "Landing Pages",
        "Creates focused conversion pages for one campaign or audience.",
        nonLenderRoles,
        ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
        [
          selectField("pageGoal", "Page goal", ["Buyer leads", "Seller leads", "Open house signups"], "Choose what this landing page should do.", "Buyer leads"),
          textField("pageName", "Page name", "Give the first landing page a simple internal name.", "Spring Buyer Launch")
        ],
        "Sets the first landing page goal and working name.",
        "This helps one campaign convert without changing the main website.",
        "Landing pages follow the same public-site permissions as website setup."
      ),
      subfeature(
        "lofty-present",
        "Lofty Present",
        "Builds presentation-ready content for listing and client conversations.",
        nonLenderRoles,
        [],
        [
          selectField("presentationType", "Presentation type", ["Listing presentation", "Buyer presentation", "Market update"], "Choose the first presentation type.", "Listing presentation")
        ],
        "Creates a starting presentation format for client conversations.",
        "This helps sales conversations feel polished and consistent.",
        "Presentation tools are limited to roles with outward-facing content access."
      ),
      subfeature(
        "open-house-form",
        "Open House Form",
        "Captures open house visitors and routes them into Lofty.",
        nonLenderRoles,
        [],
        [
          textField("eventName", "Open house name", "Name the event or listing for the form.", "1327 Maple Open House"),
          selectField("followUpPlan", "Follow-up plan", ["Call task", "Email nurture", "Text follow-up"], "Pick the first follow-up path.", "Text follow-up")
        ],
        "Prepares an open house capture form and follow-up path.",
        "This helps in-person traffic become usable leads quickly.",
        "Open house forms depend on content and lead capture access."
      ),
      subfeature(
        "design-center",
        "Design Center",
        "Creates branded visuals and editable marketing assets.",
        nonLenderRoles,
        [],
        [
          selectField("designStyle", "Design style", ["Clean modern", "Luxury", "Neighborhood local"], "Pick the style you want to start from.", "Clean modern")
        ],
        "Sets the first design style for branded assets.",
        "This keeps generated content visually consistent.",
        "Design tools are only available to roles that manage brand content."
      )
    ]
  },
  {
    id: "automation",
    label: "Automation",
    description: "Smart plans, workflows, alerts, and follow-up automation.",
    allowedRoles: nonLenderRoles,
    requiredFor: ["company-owner", "company-admin", "office-owner", "office-admin"],
    icon: Sparkles,
    whatItDoes: "Automates follow-up so the team does not have to manage every step manually.",
    whyItMatters: "Automation is how Lofty keeps the database moving even when no one is online.",
    tip: "Start with one simple workflow before turning on every automation option.",
    lockExplanation: "Automation is reserved for the roles managing the full follow-up system.",
    subfeatures: [
      subfeature(
        "smart-plans",
        "Smart Plans",
        "Builds saved follow-up plans for consistent outreach.",
        nonLenderRoles,
        ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
        [
          selectField("planTemplate", "Plan template", ["New lead nurture", "Seller follow-up", "Sphere touch"], "Choose the first plan template.", "New lead nurture"),
          selectField("planOwner", "Plan owner", ["Personal", "Team", "Office"], "Choose who this plan belongs to.", "Personal")
        ],
        "Creates the first reusable smart plan template.",
        "This sends automatic follow-up messages.",
        "Smart Plans require follow-up permissions and communication tools."
      ),
      subfeature(
        "email-automation",
        "Email Automation",
        "Automates email sends inside your follow-up workflows.",
        nonLenderRoles,
        ownerAndAdminRoles.concat(["agent-user"]),
        [
          selectField("emailSeries", "Email series", ["Welcome series", "Open house follow-up", "Buyer nurture"], "Choose the first email sequence.", "Welcome series")
        ],
        "Connects the first automated email sequence.",
        "This keeps outreach going without manual sends each time.",
        "Email automation is available where campaign email is supported."
      ),
      subfeature(
        "text-automation",
        "Text Automation",
        "Automates text touchpoints inside nurture workflows.",
        nonLenderRoles,
        ownerAndAdminRoles.concat(["agent-user"]),
        [
          selectField("textSeries", "Text series", ["Speed to lead", "Open house follow-up", "Long-term nurture"], "Choose the first text sequence.", "Speed to lead")
        ],
        "Turns on automated texting as part of follow-up.",
        "This helps teams respond faster to new leads.",
        "Text automation requires texting access and approval."
      ),
      subfeature(
        "workflows",
        "Workflows",
        "Links triggers and actions into broader operational automations.",
        nonLenderRoles,
        ownerAndAdminRoles,
        [
          selectField("workflowTrigger", "Trigger", ["New lead", "Stage change", "Property saved"], "Choose the main trigger for the first workflow.", "New lead"),
          selectField("workflowAction", "Action", ["Assign task", "Send email", "Notify team"], "Choose the first automated action.", "Assign task")
        ],
        "Creates one trigger-to-action workflow.",
        "This helps teams automate repeatable ops work.",
        "Workflow automation stays limited to broader operational roles."
      ),
      subfeature(
        "property-alerts",
        "Property Alerts",
        "Sends saved search and property update alerts automatically.",
        nonLenderRoles,
        ownerAndAdminRoles.concat(["agent-user"]),
        [
          selectField("alertType", "Alert type", ["New listings", "Price changes", "Saved search matches"], "Choose the first property alert type.", "New listings")
        ],
        "Turns on automated property update alerts.",
        "This keeps buyers engaged with fresh listing activity.",
        "Property alerts depend on listing and communication access."
      ),
      subfeature(
        "ai-workflows",
        "AI Workflows",
        "Adds AI-generated steps and recommendations into automations.",
        nonLenderRoles,
        ["company-owner", "company-admin", "office-owner", "office-admin"],
        [
          selectField("aiGoal", "AI workflow goal", ["Lead qualification", "Database cleanup", "Seller nurture"], "Choose where AI should help first.", "Lead qualification")
        ],
        "Sets the first AI-assisted workflow goal.",
        "This gives automation a smarter starting point.",
        "AI workflow controls are limited to admin-style roles."
      )
    ]
  },
  {
    id: "reporting",
    label: "Reporting",
    description: "Performance views that show what is working and what is not.",
    allowedRoles: nonLenderRoles,
    requiredFor: ["company-owner", "company-admin", "office-owner", "office-admin"],
    icon: FileBarChart2,
    whatItDoes: "Surfaces business, agent, source, and site performance inside Lofty.",
    whyItMatters: "Reporting turns activity into decisions instead of just noise.",
    tip: "Use one summary and one source view first so reporting stays practical.",
    lockExplanation: "Reporting is reserved for operational roles that need full performance visibility.",
    subfeatures: [
      subfeature(
        "business-summary",
        "Business Summary",
        "Shows the overall business snapshot for the account.",
        nonLenderRoles,
        ownerAndAdminRoles,
        [
          selectField("summaryRange", "Reporting range", ["Last 7 days", "Last 30 days", "This quarter"], "Choose the range you want to start with.", "Last 30 days")
        ],
        "Sets the main business summary view.",
        "This shows the big picture without digging through separate reports.",
        "Business summaries are limited to operational roles."
      ),
      subfeature(
        "agent-performance",
        "Agent Performance",
        "Compares production and activity across agents or teams.",
        nonLenderRoles,
        ownerAndAdminRoles,
        [
          selectField("performanceGroup", "Performance group", ["Agents", "Teams", "Offices"], "Choose how performance should be grouped.", "Agents")
        ],
        "Prepares the first team performance view.",
        "This helps leaders see who is moving work forward.",
        "Agent performance views are only available to leadership roles."
      ),
      subfeature(
        "source-performance",
        "Source Performance",
        "Shows which lead sources create the best outcomes.",
        nonLenderRoles,
        ownerAndAdminRoles.concat(["agent-user"]),
        [
          selectField("sourceMetric", "Primary source metric", ["Lead volume", "Conversion", "Appointments"], "Choose how source performance should be judged.", "Conversion")
        ],
        "Turns on source-based reporting and comparison.",
        "This tells you which lead sources are worth keeping.",
        "Source reporting requires visibility into lead origin data."
      ),
      subfeature(
        "activity-metrics",
        "Activity Metrics",
        "Measures call, text, email, and task activity.",
        nonLenderRoles,
        ownerAndAdminRoles.concat(["agent-user"]),
        [
          selectField("activityMetric", "Primary activity metric", ["Calls", "Texts", "Emails", "Tasks"], "Choose the activity view to highlight first.", "Calls")
        ],
        "Shows the main productivity metric first.",
        "This helps teams understand whether outreach is actually happening.",
        "Activity reporting requires follow-up visibility."
      ),
      subfeature(
        "site-traffic",
        "Site Traffic",
        "Measures how the website is performing.",
        nonLenderRoles,
        ownerAndAdminRoles.concat(["agent-user"]),
        [
          selectField("analyticsSource", "Analytics source", ["Built-in Lofty", "Google Analytics", "Google Tag Manager"], "Choose the first analytics source.", "Built-in Lofty"),
          textField("trackingLabel", "Tracking label", "Add a simple label for this analytics connection.", "Main website")
        ],
        "Connects the main analytics source for the site.",
        "This shows how your website is performing.",
        "Site traffic reporting is only available where a website exists."
      ),
      subfeature(
        "email-accountability",
        "Email Accountability",
        "Measures email volume and response consistency.",
        nonLenderRoles,
        ownerAndAdminRoles,
        [
          selectField("accountabilityView", "Accountability view", ["By sender", "By team", "By campaign"], "Choose how to review email accountability.", "By sender")
        ],
        "Creates a starting email accountability lens.",
        "This helps teams see whether email follow-up is consistent.",
        "Email accountability requires admin-style reporting access."
      )
    ]
  },
  {
    id: "marketplace",
    label: "Marketplace",
    description: "Add-ons, partners, and system integrations.",
    allowedRoles: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    requiredFor: [],
    icon: ShoppingBag,
    whatItDoes: "Connects Lofty to extra tools and partner services.",
    whyItMatters: "Marketplace makes the platform fit the rest of your stack.",
    tip: "Leave this for later unless you already know a must-have integration.",
    lockExplanation: "Marketplace access is limited for lender users and can be scoped by account permissions.",
    subfeatures: [
      subfeature(
        "marketplace",
        "Marketplace",
        "Browses and enables additional Lofty add-ons.",
        ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
        [],
        [
          selectField("addonCategory", "Add-on category", ["Lead sources", "Marketing", "Operations"], "Choose the first add-on category to explore.", "Marketing")
        ],
        "Sets the first add-on category to explore.",
        "This helps you discover optional tools without leaving Lofty.",
        "Marketplace access depends on account permissions."
      ),
      subfeature(
        "integration-center",
        "Integration Center",
        "Connects external systems to Lofty workflows.",
        ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
        ["company-owner", "company-admin", "office-owner", "office-admin"],
        [
          selectField("integrationType", "Integration type", ["Calendar", "Email", "Lead source", "Analytics"], "Choose the first integration type to connect.", "Calendar"),
          textField("integrationLabel", "Connection label", "Give the first connection a simple internal label.", "Main Google Calendar")
        ],
        "Starts the first external connection through the integration center.",
        "This helps Lofty work with the tools your team already uses.",
        "Integration Center access is usually limited to admin-capable roles."
      )
    ]
  },
  {
    id: "ai-copilots",
    label: "AI Copilots",
    description: "AI agents and assistants that support selling and scaling.",
    allowedRoles: allRoles,
    requiredFor: [],
    icon: Bot,
    whatItDoes: "Adds AI assistants and AI agents into the setup experience.",
    whyItMatters: "AI Copilots can speed up setup, follow-up, and content work.",
    tip: "Only enable the AI tools you really plan to use so launch stays simple.",
    lockExplanation: "AI Copilots vary by role and by add-on availability.",
    subfeatures: [
      subfeature(
        "ai-assistant",
        "AI Assistant",
        "A conversational assistant for search, questions, and quick actions.",
        allRoles,
        [],
        [
          selectField("assistantFocus", "Assistant focus", ["Daily support", "Lead search", "Setup help"], "Choose what the AI Assistant should help with first.", "Setup help")
        ],
        "Turns on the main AI helper experience.",
        "This gives the user an AI guide inside the platform.",
        "AI Assistant availability depends on workspace access."
      ),
      subfeature(
        "sales-agent",
        "Sales Agent",
        "An AI ISA that captures and nurtures leads automatically.",
        nonLenderRoles,
        [],
        [
          selectField("salesGoal", "Sales Agent goal", ["Lead qualification", "Appointment setting", "Speed to lead"], "Choose what the Sales Agent should optimize first.", "Lead qualification")
        ],
        "Prepares the AI Sales Agent for lead follow-up.",
        "This helps more leads turn into appointments.",
        "Sales Agent is not available to lender-only collaboration roles."
      ),
      subfeature(
        "social-agent-ai",
        "Social Agent",
        "An AI agent for social planning and post creation.",
        nonLenderRoles,
        [],
        [
          selectField("channel", "Primary channel", ["Instagram", "Facebook", "LinkedIn"], "Choose the first channel the Social Agent should target.", "Instagram")
        ],
        "Starts AI-assisted social planning.",
        "This helps marketing content stay active without extra work.",
        "Social Agent depends on marketing-capable access."
      ),
      subfeature(
        "homeowner-agent",
        "Homeowner Agent",
        "An AI helper that nurtures homeowner opportunities in your database.",
        nonLenderRoles,
        [],
        [
          selectField("homeownerGoal", "Homeowner Agent goal", ["Seller intent", "Retention", "Database reactivation"], "Choose the first homeowner goal.", "Seller intent")
        ],
        "Sets the first homeowner nurture goal.",
        "This helps surface seller-side opportunities already in your database.",
        "Homeowner Agent is only available where database marketing is supported."
      ),
      subfeature(
        "ai-workflow-copilot",
        "AI Workflow",
        "AI-driven workflow assistance for operations and automation.",
        ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
        [],
        [
          selectField("workflowUseCase", "AI Workflow use case", ["Lead sorting", "Task suggestions", "Nurture tuning"], "Choose where AI Workflow should help first.", "Task suggestions")
        ],
        "Turns on AI workflow support in the workspace.",
        "This helps the system recommend next-best actions automatically.",
        "AI Workflow depends on automation access."
      ),
      subfeature(
        "website-building-agent",
        "Website Building Agent",
        "AI-assisted website generation for a faster launch.",
        nonLenderRoles,
        [],
        [
          selectField("siteGoal", "Website goal", ["Lead capture", "Brand launch", "Listing search"], "Choose what the generated site should optimize first.", "Lead capture"),
          textField("marketFocus", "Market focus", "Enter the market or area the website should speak to.", "Scottsdale buyers")
        ],
        "Prepares AI-assisted website generation.",
        "This helps the site get built faster.",
        "Website Building Agent is only available where website creation is supported."
      ),
      subfeature(
        "agent-studio",
        "Agent Studio",
        "Builds custom AI agents with prompts, tools, and memory.",
        ["company-owner", "company-admin", "office-owner", "office-admin"],
        [],
        [
          textField("agentName", "Agent name", "Give the first custom agent a working name.", "Ops Copilot"),
          selectField("agentPurpose", "Agent purpose", ["Support", "Lead ops", "Marketing"], "Choose the first purpose for Agent Studio.", "Support")
        ],
        "Creates a first custom agent concept for Agent Studio.",
        "This helps advanced teams shape AI around their own workflow.",
        "Agent Studio is limited to admin-style roles and may depend on beta access."
      )
    ]
  }
];

export const presetDefinitions: PresetDefinition[] = [
  {
    id: "new-agent-setup",
    name: "New Agent Setup",
    description: "Focuses on the core tabs an agent needs first.",
    roleIds: ["agent-user"],
    recommendedCards: ["crm", "sales", "content", "automation"]
  },
  {
    id: "team-owner-setup",
    name: "Team Owner Setup",
    description: "Covers the core operational tabs for a team launch.",
    roleIds: ["office-owner"],
    recommendedCards: ["crm", "sales", "content", "automation", "reporting"]
  },
  {
    id: "office-admin-setup",
    name: "Office Admin Setup",
    description: "Prioritizes day-to-day office operations and reporting.",
    roleIds: ["office-admin"],
    recommendedCards: ["crm", "sales", "automation", "reporting"]
  },
  {
    id: "lender-setup",
    name: "Lender Setup",
    description: "Focuses only on collaboration-safe tabs.",
    roleIds: ["lender"],
    recommendedCards: ["crm", "sales", "ai-copilots"]
  },
  {
    id: "advanced-marketing-setup",
    name: "Advanced Marketing Setup",
    description: "Adds the public-facing and growth tabs first.",
    roleIds: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    recommendedCards: ["content", "marketing", "automation", "ai-copilots"]
  },
  {
    id: "minimal-launch-setup",
    name: "Minimal Launch Setup",
    description: "Keeps launch tight with only the minimum required tabs.",
    roleIds: allRoles,
    recommendedCards: ["crm", "sales", "content"]
  }
];

export const roleSelectionCopy: Record<RoleId, string> = {
  "company-owner": "See and manage everything for your company.",
  "company-admin": "Set up and admin company-wide settings.",
  "office-owner": "Manage a single office or team environment.",
  "office-admin": "Admin access for one office or team.",
  "agent-user": "Work your personal leads, follow-up, and marketing.",
  lender: "Collaborate with agents on shared leads."
};

export const dashboardUpdates: DashboardUpdate[] = [
  {
    id: "done-for-you-site",
    title: "New service: done-for-you website",
    description: "We build the site, you focus on leads and follow-up.",
    accent: "gradient-blue"
  },
  {
    id: "ai-feature",
    title: "AI follow-up now supports seller nurture",
    description: "Use AI workflows to keep warm sellers moving.",
    accent: "gradient-soft"
  }
];

export const dashboardPeople: DashboardPerson[] = [
  {
    id: "lead-emily-wilson",
    name: "Emily Wilson",
    email: "emily.wilson@email.com",
    phone: "(602) 555-0112",
    leadType: "Renter",
    source: "Facebook",
    stage: "New lead",
    score: 59,
    assignedAgent: testUser.name,
    lastTouch: "Today · 9:12 AM",
    lastReply: "No reply yet",
    communicationSummary: "Last text sent 22 min ago",
    interestedListing: "Skyline Lofts · Unit 5B",
    roles: ["Renter"],
    views: ["all-leads", "my-leads"],
    untouched: true,
    isNewLead: true,
    segments: ["Not replied to today", "Lofty paid leads"],
    opportunities: ["Back to Site"],
    lastActivity: "Opened three rental listings this morning",
    tasks: [leadTask("task-emily-call", "Call", "Call back for rental needs", "10:00 AM")],
    appointments: [leadAppointment("appt-emily-showing", "Showing", "Downtown loft tour", "04:30 PM", true)],
    transaction: null
  },
  {
    id: "lead-carlos-garcia",
    name: "Carlos Garcia",
    email: "carlos.garcia@email.com",
    phone: "(408) 555-0171",
    leadType: "Other",
    source: "Zillow",
    stage: "Engaged",
    score: 44,
    assignedAgent: testUser.name,
    lastTouch: "Today · 11:40 AM",
    lastReply: "Yesterday · 6:10 PM",
    communicationSummary: "Last call connected for 8 min",
    interestedListing: "3931 Via Montalvo",
    roles: ["Buyer", "Seller"],
    views: ["all-leads", "my-leads"],
    untouched: true,
    isNewLead: true,
    keepInTouch: "Follow-Up",
    followUpLabel: "Follow up every 14 days",
    opportunities: ["High Interest"],
    segments: ["Call activity", "Active website browsing"],
    lastActivity: "Requested a market update",
    tasks: [leadTask("task-carlos-text", "Text", "Send market update text", "01:15 PM")],
    appointments: [],
    transaction: {
      id: "txn-carlos-1",
      address: "3931 Via Montalvo, Campbell, CA 95008",
      status: "Near Deadline",
      checklistCount: 2
    }
  },
  {
    id: "lead-samuel-scott",
    name: "Samuel Scott",
    email: "samuel.scott@email.com",
    phone: "(480) 555-0104",
    leadType: "Buyer",
    source: "YouTube",
    stage: "Active search",
    score: 43,
    assignedAgent: testUser.name,
    lastTouch: "Today · 12:05 PM",
    lastReply: "Today · 8:45 AM",
    communicationSummary: "Email opened 2 times today",
    interestedListing: "Mid-century homes under $900K",
    roles: ["Buyer"],
    views: ["all-leads", "my-leads"],
    untouched: true,
    isNewLead: true,
    opportunities: ["High Interest"],
    segments: ["Text activity", "Active website browsing"],
    savedSearch: "Phoenix mid-century homes",
    lastActivity: "Saved a listing and viewed financing tips",
    tasks: [leadTask("task-samuel-email", "Email", "Send saved search recap", "02:00 PM")],
    appointments: [leadAppointment("appt-samuel-buyer", "Appointment", "Buyer consult", "03:00 PM", true)],
    transaction: null
  },
  {
    id: "lead-kristin-watson",
    name: "Kristin Watson",
    email: "kristin.watson@email.com",
    phone: "(650) 555-0188",
    leadType: "Buyer",
    source: "Website",
    stage: "Nurture",
    score: 88,
    assignedAgent: testUser.name,
    lastTouch: "Yesterday · 4:20 PM",
    lastReply: "Yesterday · 4:28 PM",
    communicationSummary: "Email reply received on valuation follow-up",
    interestedListing: "87 Valencia St · Seller valuation",
    roles: ["Buyer", "Seller", "Renter", "Investor"],
    views: ["all-leads", "my-leads"],
    keepInTouch: "Birthday",
    birthdayLabel: "Birthday · Apr 29",
    opportunities: ["Likely Seller"],
    segments: ["Birthday this month", "Email activity"],
    lastActivity: "Viewed home valuation page twice this week",
    tasks: [leadTask("task-kristin-other", "Other", "Prepare seller valuation packet", "Anytime")],
    appointments: [leadAppointment("appt-kristin-listing", "Appointment", "Seller strategy session", "11:00 AM", true)],
    transaction: {
      id: "txn-kristin-1",
      address: "87 Valencia St, Half Moon Bay, CA 94019",
      status: "Near Deadline",
      checklistCount: 1
    }
  },
  {
    id: "lead-annette-black",
    name: "Annette Black",
    email: "annette.black@email.com",
    phone: "(714) 555-0167",
    leadType: "Buyer",
    source: "Website",
    stage: "Showing requested",
    score: 81,
    assignedAgent: testUser.name,
    lastTouch: "Today · 9:30 AM",
    lastReply: "Today · 9:36 AM",
    communicationSummary: "Showing request confirmed by text",
    interestedListing: "182 Saint Peter St",
    roles: ["Buyer"],
    views: ["all-leads", "my-leads", "partial-leads"],
    opportunities: ["High Interest"],
    segments: ["Active website browsing"],
    lastActivity: "Requested a tour from the listing page",
    tasks: [leadTask("task-annette-call", "Call", "Confirm showing request", "09:30 AM")],
    appointments: [leadAppointment("appt-annette-showing", "Showing", "Request review for 182 Saint Peter", "12:00 PM", true)],
    transaction: null
  },
  {
    id: "lead-wade-warren",
    name: "Wade Warren",
    email: "wade.warren@email.com",
    phone: "(315) 555-0120",
    leadType: "Buyer",
    source: "Home valuation",
    stage: "Warm seller",
    score: 76,
    assignedAgent: testUser.name,
    lastTouch: "Today · 3:10 PM",
    lastReply: "No reply yet",
    communicationSummary: "Call task created from valuation form",
    interestedListing: "2118 Thornridge Circus",
    roles: ["Buyer", "Seller", "Renter", "Investor", "Agent"],
    views: ["all-leads", "lead-pond"],
    keepInTouch: "Follow-Up",
    followUpLabel: "Home valuation follow-up",
    opportunities: ["Likely Seller"],
    segments: ["Seller watchlist"],
    lastActivity: "Requested a home valuation",
    tasks: [leadTask("task-wade-call", "Call", "Discuss home valuation request", "04:00 PM")],
    appointments: [],
    transaction: {
      id: "txn-wade-1",
      address: "2118 Thornridge Circus, Syracuse, CT 35624",
      status: "Expired",
      checklistCount: 2
    }
  },
  {
    id: "lead-jessica-phillips",
    name: "Jessica Phillips",
    email: "jessica.phillips@email.com",
    phone: "(602) 555-0199",
    leadType: "Buyer",
    source: "Website",
    stage: "Re-engaged",
    score: 61,
    assignedAgent: testUser.name,
    lastTouch: "Today · 11:05 AM",
    lastReply: "Today · 11:18 AM",
    communicationSummary: "Welcome-back text sent and clicked",
    interestedListing: "North Central starter homes",
    roles: ["Buyer", "Seller", "Renter", "Investor", "Agent"],
    views: ["all-leads", "my-leads", "lead-pond"],
    opportunities: ["Back to Site"],
    segments: ["Back to site", "Text activity"],
    lastActivity: "Returned to site after 21 days away",
    tasks: [leadTask("task-jessica-text", "Text", "Welcome back text", "11:30 AM")],
    appointments: [],
    transaction: null
  },
  {
    id: "lead-michael-scott",
    name: "Michael Scott",
    email: "michael.scott@email.com",
    phone: "(480) 555-0145",
    leadType: "Buyer",
    source: "Website",
    stage: "Database nurture",
    score: 48,
    assignedAgent: testUser.name,
    lastTouch: "Yesterday · 2:00 PM",
    lastReply: "3 days ago",
    communicationSummary: "Last text sent in Spanish nurture flow",
    interestedListing: "Arcadia family homes",
    roles: ["Buyer"],
    views: ["all-leads", "my-leads", "partial-leads"],
    keepInTouch: "Follow-Up",
    followUpLabel: "Spanish speaking follow-up",
    segments: ["Text activity"],
    lastActivity: "Asked for neighborhood recommendations",
    tasks: [leadTask("task-michael-other", "Other", "Spanish follow-up", "12:00 AM")],
    appointments: [],
    transaction: null
  }
];

export const listingInsights: ListingInsight[] = [
  {
    id: "listing-182-saint-peter",
    title: "182 Saint Peter St",
    location: "Riverside, CA 10192",
    trend: "No engagement in 15 days"
  },
  {
    id: "listing-1824-saint-peter",
    title: "1824 Saint Peter St",
    location: "Riverside, CA 10192",
    trend: "New showing request"
  },
  {
    id: "listing-93-orchard",
    title: "93 Orchard Way",
    location: "Scottsdale, AZ 85251",
    trend: "Viewed by 4 warm buyers"
  }
];

export const hotSheetItems: HotSheetItem[] = [
  { id: "hs-open-house", label: "Upcoming Open House", count: 12 },
  { id: "hs-back-market", label: "Back on Market", count: 8 },
  { id: "hs-price-reduced", label: "Price Reduced", count: 21 },
  { id: "hs-new-listings", label: "New Listings", count: 36 }
];

export function getRoleById(roleId: RoleId) {
  return roleDefinitions.find((role) => role.id === roleId)!;
}

export function getCardById(cardId: LibraryCardId) {
  return libraryCardDefinitions.find((card) => card.id === cardId)!;
}

export function getSubfeature(cardId: LibraryCardId, subfeatureId: string) {
  return getCardById(cardId).subfeatures.find((item) => item.id === subfeatureId)!;
}

export function getAccessibleCards(roleId: RoleId) {
  return libraryCardDefinitions.filter((card) => card.allowedRoles.includes(roleId));
}

export function getLockedCards(roleId: RoleId) {
  return libraryCardDefinitions.filter((card) => !card.allowedRoles.includes(roleId));
}

export function isCardRequiredForRole(card: LibraryCardDefinition, roleId: RoleId) {
  return card.requiredFor.includes(roleId);
}

export function getRecommendedCards(roleId: RoleId) {
  return presetDefinitions.find((preset) => preset.roleIds.includes(roleId))?.recommendedCards ?? getAccessibleCards(roleId).map((card) => card.id);
}

export function buildInitialCardStates(): Partial<Record<LibraryCardId, CardState>> {
  return Object.fromEntries(libraryCardDefinitions.map((card) => [card.id, "not-started"])) as Partial<Record<LibraryCardId, CardState>>;
}

export function buildInitialToggleStore(roleId: RoleId): Partial<Record<LibraryCardId, CardToggleStore>> {
  return Object.fromEntries(
    libraryCardDefinitions.map((card) => [
      card.id,
      Object.fromEntries(
        card.subfeatures.map((item) => [
          item.id,
          item.allowedRoles.includes(roleId) ? item.defaultEnabled || item.requiredFor.includes(roleId) : false
        ])
      )
    ])
  ) as Partial<Record<LibraryCardId, CardToggleStore>>;
}

export function buildInitialConfigStore(roleId: RoleId): Partial<Record<LibraryCardId, PromptConfigStore>> {
  return Object.fromEntries(
    libraryCardDefinitions.map((card) => [
      card.id,
      Object.fromEntries(
        card.subfeatures
          .filter((item) => item.allowedRoles.includes(roleId) && item.requiredFor.includes(roleId))
          .map((item) => [
            item.id,
            Object.fromEntries(
              item.promptFields.map((field) => {
                if (field.defaultValue !== undefined) {
                  return [field.id, field.defaultValue];
                }
                if (field.type === "select") {
                  return [field.id, field.options?.[0] ?? ""];
                }
                if (field.type === "toggle") {
                  return [field.id, true];
                }
                return [field.id, field.placeholder ?? `${item.name} setup`];
              })
            )
          ])
      )
    ])
  ) as Partial<Record<LibraryCardId, PromptConfigStore>>;
}

export function buildPromptDefaults(promptTarget: PromptTarget): Record<string, string | boolean> {
  const subfeature = getSubfeature(promptTarget.cardId, promptTarget.subfeatureId);
  return Object.fromEntries(
    subfeature.promptFields.map((field) => {
      if (field.defaultValue !== undefined) {
        return [field.id, field.defaultValue];
      }
      if (field.type === "select") {
        return [field.id, field.options?.[0] ?? ""];
      }
      if (field.type === "toggle") {
        return [field.id, true];
      }
      return [field.id, field.placeholder ?? `${subfeature.name} setup`];
    })
  );
}

export function cardHasConfiguredRequiredSubfeatures(snapshot: OnboardingSnapshot, card: LibraryCardDefinition, roleId: RoleId) {
  const toggles = snapshot.subfeatureToggles[card.id] ?? {};
  return card.subfeatures.every((item) => {
    if (!item.requiredFor.includes(roleId)) {
      return true;
    }
    if (!item.allowedRoles.includes(roleId)) {
      return true;
    }
    return Boolean(toggles[item.id]);
  });
}

export function deriveLaunchReady(snapshot: OnboardingSnapshot) {
  if (!snapshot.selectedRole) {
    return false;
  }
  return getAccessibleCards(snapshot.selectedRole)
    .filter((card) => card.requiredFor.includes(snapshot.selectedRole!))
    .every((card) => snapshot.cardStates[card.id] === "built");
}

export function getDashboardPeopleForRole(roleId: RoleId) {
  if (roleId === "lender") {
    return dashboardPeople.filter((person) => person.transaction || person.views.includes("partial-leads"));
  }
  if (roleId === "agent-user") {
    return dashboardPeople.filter((person) => person.views.includes("my-leads"));
  }
  return dashboardPeople;
}

export function getPeopleViewList(viewId: LeadViewId, roleId: RoleId) {
  const people = getDashboardPeopleForRole(roleId);
  return people.filter((person) => person.views.includes(viewId));
}

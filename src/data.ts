import {
  BriefcaseBusiness,
  Building2,
  Building,
  House,
  Landmark,
  UserRound
} from "lucide-react";
import type {
  FeatureDefinition,
  LayerDefinition,
  LayerId,
  RoleDefinition,
  RoleId,
  TemplateDefinition
} from "./types";

export const roleDefinitions: RoleDefinition[] = [
  {
    id: "company-owner",
    title: "Company Owner",
    subtitle: "Runs the full Lofty account",
    description: "You manage the whole company, the top-level settings, and the full CRM footprint.",
    accessLabel: "Full company access",
    setupFocus: "Company structure, brand, website foundation, communication, permissions, and reporting.",
    icon: Building2,
    accessSummary: [
      "Sees every setup layer and every company-level control.",
      "Can manage company websites, MLS setup, users, routing, permissions, billing, and add-ons.",
      "Can build templates for the rest of the organization."
    ],
    hiddenSummary: []
  },
  {
    id: "company-admin",
    title: "Company Admin",
    subtitle: "Operates the company day to day",
    description: "You help run the company setup and operations, but owner-only financial controls stay separate.",
    accessLabel: "Top-level admin access",
    setupFocus: "Company systems, communication, user setup, routing, reporting, and compliance.",
    icon: BriefcaseBusiness,
    accessSummary: [
      "Sees nearly all company setup layers.",
      "Can manage company-wide operations, offices, templates, reporting, and shared tools.",
      "Can support users without becoming the billing owner."
    ],
    hiddenSummary: ["Owner-only billing and payer controls remain locked."]
  },
  {
    id: "office-owner",
    title: "Office / Team Owner",
    subtitle: "Leads one office or team",
    description: "You manage one office or team, its members, routing, website, and shared performance.",
    accessLabel: "Office or team owner access",
    setupFocus: "Office CRM, office website, routing, shared communication, templates, and team reporting.",
    icon: Building,
    accessSummary: [
      "Sees the layers needed to run an office or team.",
      "Can manage scoped routing, numbers, AI Sales Agent, templates, and reporting.",
      "Can invite users and set up team-facing workflows."
    ],
    hiddenSummary: ["Company-wide ownership and enterprise-only controls stay hidden."]
  },
  {
    id: "office-admin",
    title: "Office / Team Admin",
    subtitle: "Supports one office or team",
    description: "You help keep one office or team organized, but strategic ownership controls stay limited.",
    accessLabel: "Scoped office admin access",
    setupFocus: "Shared office tools, communication setup, team templates, website basics, and support workflows.",
    icon: House,
    accessSummary: [
      "Sees the layers needed to operate within one office or team.",
      "Can configure many shared workflows, but not owner-level structure changes.",
      "Can support agents and keep the office launch-ready."
    ],
    hiddenSummary: ["Ownership decisions, payer settings, and some add-on controls stay locked."]
  },
  {
    id: "agent-user",
    title: "Agent / User",
    subtitle: "Works leads and serves clients",
    description: "You use Lofty for your personal CRM, website, follow-up, listings, and day-to-day pipeline.",
    accessLabel: "Personal production access",
    setupFocus: "Profile, website, communication, database, tasks, automation, AI, and mobile.",
    icon: UserRound,
    accessSummary: [
      "Sees the layers needed to launch and work a personal book of business.",
      "Can configure personal website, communication tools, tasks, automation, and reporting.",
      "Can learn the product without being overloaded by admin-only tools."
    ],
    hiddenSummary: ["Admin-only routing, team hierarchy, and company permissions stay out of the workflow."]
  },
  {
    id: "lender",
    title: "Lender",
    subtitle: "Collaborates on shared leads",
    description: "You use Lofty to collaborate with agents on shared leads, notes, and loan-related follow-up.",
    accessLabel: "Lender collaboration access",
    setupFocus: "Lender profile, shared lead visibility, notes, collaboration, and limited communication tools.",
    icon: Landmark,
    accessSummary: [
      "Sees only lender-relevant layers and shared lead collaboration surfaces.",
      "Can work notes, limited lead context, collaboration, and lender-specific setup.",
      "Learns exactly what is visible on the lender side and what stays on the agent side."
    ],
    hiddenSummary: [
      "Website management, team routing controls, agent communication history, and most transactions stay unavailable."
    ]
  }
];

export const featureDefinitions: FeatureDefinition[] = [
  {
    id: "business-profile",
    name: "Business profile",
    description: "Set the name, logo, headshot, and profile details the platform uses everywhere.",
    whatItIs: "Your public-facing identity inside Lofty.",
    whyItMatters: "It powers branding, websites, signatures, and AI-generated content.",
    whenToUse: "At the start of setup.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user", "lender"],
    skipImpact: "Your account will feel unfinished and your website will look generic.",
    example: "Add your logo so the website, emails, and listing pages all match your brand."
  },
  {
    id: "social-media",
    name: "Social media connections",
    description: "Connect social accounts so Lofty can help with posting and branding.",
    whatItIs: "A connection between Lofty and your social channels.",
    whyItMatters: "It unlocks social posting and keeps your brand consistent.",
    whenToUse: "When you want Lofty to support social growth.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "You can still launch, but social tools will feel disconnected.",
    example: "Connect Instagram so your team can schedule branded content later."
  },
  {
    id: "website-template",
    name: "Website template",
    description: "Pick the site style Lofty uses to generate your website.",
    whatItIs: "The visual starting point for your website.",
    whyItMatters: "It sets your first impression and page structure.",
    whenToUse: "As soon as you are ready to establish your web presence.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "You cannot generate the website experience until this is chosen.",
    example: "Choose a clean, listing-first template for a buyer-focused team."
  },
  {
    id: "website-domain",
    name: "Website domain",
    description: "Choose the domain or subdomain the site will use.",
    whatItIs: "The address clients use to reach your website.",
    whyItMatters: "It affects branding, MLS applications, and email domain setup.",
    whenToUse: "Before website launch.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "Your site can exist in draft mode, but not under your preferred address.",
    example: "Use homeswithalexa.com for your brand or alexa.loftyagent.com for a fast launch."
  },
  {
    id: "website-builder-agent",
    name: "Website Building Agent",
    description: "Use Lofty's AI website builder to generate a live site from your setup data.",
    whatItIs: "An AI tool that assembles your site from branding, market, and content choices.",
    whyItMatters: "It shortens the time between onboarding and launch.",
    whenToUse: "After profile, website, and MLS basics are complete.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "You will need to build more of the site manually later.",
    example: "Click Build Website and get a site populated with your market focus and lead capture blocks."
  },
  {
    id: "mls-application",
    name: "MLS / IDX connection",
    description: "Connect the MLS feeds needed to show listings and unlock IDX tools.",
    whatItIs: "The feed connection that powers listing search, alerts, and valuation tools.",
    whyItMatters: "Without it, the website loses its strongest real estate workflows.",
    whenToUse: "During website setup.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "Your website will not have full listing search and lead capture behavior.",
    example: "Connect your office MLS so listing search and property alerts work from day one."
  },
  {
    id: "email-integration",
    name: "Email integration",
    description: "Sync your inbox so messages and lead parsing work inside Lofty.",
    whatItIs: "A direct connection between Lofty and your email provider.",
    whyItMatters: "It powers email sync, lead parsing, and better communication tracking.",
    whenToUse: "Early in setup.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "Your communication history and email workflows will stay fragmented.",
    example: "Connect Gmail so new lead emails can flow into the CRM automatically."
  },
  {
    id: "calendar-integration",
    name: "Calendar integration",
    description: "Connect your calendar so tasks, appointments, and showings stay organized.",
    whatItIs: "A sync between Lofty and Google or Microsoft calendars.",
    whyItMatters: "It keeps your follow-up and schedule in one workflow.",
    whenToUse: "Right after email setup.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "You can still create tasks, but time-based work will be easier to miss.",
    example: "Sync Google Calendar so your Lofty appointments also show on your phone."
  },
  {
    id: "virtual-number",
    name: "Virtual number",
    description: "Set up the business number used for calling and texting from Lofty.",
    whatItIs: "A Lofty-managed phone number for CRM communication.",
    whyItMatters: "It protects your personal number and keeps lead communication trackable.",
    whenToUse: "During communication setup.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "You lose some of the clean CRM communication workflow.",
    example: "Pick a local number so new leads recognize your area code."
  },
  {
    id: "a2p-approval",
    name: "A2P texting approval",
    description: "Register texting traffic so Lofty can send compliant business texts.",
    whatItIs: "Carrier approval for business messaging.",
    whyItMatters: "It is required for reliable outbound texting in the U.S.",
    whenToUse: "Before you rely on text follow-up.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "Text outreach will be limited or delayed.",
    example: "Finish A2P review before turning on automated text follow-up."
  },
  {
    id: "lead-import",
    name: "Lead import",
    description: "Bring existing contacts into Lofty so your database is ready to work.",
    whatItIs: "A way to move leads from spreadsheets, portals, or other systems into Lofty.",
    whyItMatters: "It gives you an immediate database instead of starting from zero.",
    whenToUse: "Once communication basics are ready.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "Your automation and reporting will start from a smaller data set.",
    example: "Import your sphere and past clients before turning on Smart Plans."
  },
  {
    id: "lead-integrations",
    name: "Lead source integrations",
    description: "Connect sources like Zillow, Realtor.com, and email parsing.",
    whatItIs: "The connectors that bring third-party leads into Lofty.",
    whyItMatters: "It centralizes new opportunities and reduces manual entry.",
    whenToUse: "During database and lead capture setup.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "You will miss automation and visibility from outside channels.",
    example: "Turn on Zillow sync so new portal leads show up in People instantly."
  },
  {
    id: "lead-ownership",
    name: "Lead ownership",
    description: "Define who owns a lead once it enters the system.",
    whatItIs: "The assignment logic that ties each lead to a person or team.",
    whyItMatters: "It prevents confusion and makes follow-up accountable.",
    whenToUse: "When you have more than one user or shared lead sources.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin"],
    skipImpact: "Leads may land without a clear owner.",
    example: "Send seller leads to one office queue and buyer leads to another."
  },
  {
    id: "smart-plans",
    name: "Smart Plans",
    description: "Build automated follow-up campaigns for new and existing leads.",
    whatItIs: "A sequence of emails, texts, and tasks that Lofty runs automatically.",
    whyItMatters: "It keeps leads warm without manual work every day.",
    whenToUse: "After your communication channels are connected.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user", "lender"],
    skipImpact: "You will need to handle more nurture work manually.",
    example: "Create a new-buyer Smart Plan with a text, an email, and a call reminder."
  },
  {
    id: "ai-assistant",
    name: "AI Assistant",
    description: "Use Lofty's AI to prioritize leads, draft messages, and explain the product.",
    whatItIs: "The main AI helper inside the CRM.",
    whyItMatters: "It makes the platform feel proactive instead of manual.",
    whenToUse: "Once your database and communication are active.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "The team loses a major shortcut for prioritization and content drafting.",
    example: "Ask AI Assistant which leads deserve attention today."
  },
  {
    id: "sales-agent",
    name: "AI Sales Agent",
    description: "Turn on Lofty's AI sales rep for website, SMS, and email conversations.",
    whatItIs: "A specialized AI agent that can engage and qualify leads.",
    whyItMatters: "It helps new leads get a fast response even when your team is busy.",
    whenToUse: "After website, communication, and lead capture are ready.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin"],
    skipImpact: "Your lead response speed will depend more on human availability.",
    example: "Let the office AI Sales Agent answer website chat and pass warm leads to agents."
  },
  {
    id: "tasks-calendar",
    name: "Tasks and calendar",
    description: "Use Lofty to organize follow-up, appointments, and schedule-driven work.",
    whatItIs: "The daily execution layer for calls, reminders, and meetings.",
    whyItMatters: "It turns leads into a clear action plan.",
    whenToUse: "As soon as your CRM starts filling up.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "Important follow-ups will stay in your head instead of in a system.",
    example: "Create a task for every new lead that has not replied in three days."
  },
  {
    id: "reporting-suite",
    name: "Reporting",
    description: "Track activity, source performance, and website results.",
    whatItIs: "The analytics layer across CRM and website workflows.",
    whyItMatters: "It shows what is working and what needs attention.",
    whenToUse: "Once workflows are live and generating data.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "You will launch without clear feedback loops.",
    example: "Check whether website traffic is turning into new contacts."
  },
  {
    id: "team-management",
    name: "Team management",
    description: "Invite users, define hierarchy, and manage office or company structure.",
    whatItIs: "The organizational control layer inside Lofty.",
    whyItMatters: "It decides who sees what and who can support which workflows.",
    whenToUse: "When you are setting up more than one person.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin"],
    skipImpact: "The account may launch without the right people, roles, or scopes.",
    example: "Add an office admin and give them shared setup responsibility."
  },
  {
    id: "transactions",
    name: "Transactions",
    description: "Manage offers, documents, deadlines, and the client portal once deals go active.",
    whatItIs: "The deal execution layer after a lead converts.",
    whyItMatters: "It keeps deals moving with deadlines, paperwork, and visibility.",
    whenToUse: "Once you want Lofty to carry a lead all the way to close.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "You will need another tool or a manual process for active deals.",
    example: "Track offer deadlines and document templates for an accepted deal."
  },
  {
    id: "lender-collaboration",
    name: "Lender collaboration",
    description: "Share leads with lender accounts and collaborate through notes and visibility.",
    whatItIs: "A limited lender-side workflow for shared lead support.",
    whyItMatters: "It helps agents and lenders coordinate without giving full CRM access.",
    whenToUse: "When you work with a partner lender.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user", "lender"],
    skipImpact: "Lender coordination stays outside the CRM.",
    example: "Invite a lender so they can see shared lead notes and limited profile details."
  },
  {
    id: "marketplace-addons",
    name: "Marketplace and add-ons",
    description: "Review Lofty upgrades, add-ons, and optional tools.",
    whatItIs: "The commercial layer for extra capabilities and upgrades.",
    whyItMatters: "It helps users expand beyond the default plan when needed.",
    whenToUse: "After you understand your baseline workflow.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "agent-user"],
    skipImpact: "You may miss optional growth tools, but core launch can still happen.",
    example: "Add a team add-on or Home Report once the base system is live."
  },
  {
    id: "mobile-app",
    name: "Mobile app",
    description: "Set up the Lofty mobile experience for field work and fast follow-up.",
    whatItIs: "The phone-based version of Lofty for daily work on the move.",
    whyItMatters: "It keeps lead response fast outside the office.",
    whenToUse: "Near the end of onboarding so the desktop setup is already ready.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "You can still work on desktop, but speed and mobility will suffer.",
    example: "Download the app so you can answer a hot lead from your phone."
  },
  {
    id: "permissions",
    name: "Permissions and compliance",
    description: "Control user access, texting compliance, and shared safeguards.",
    whatItIs: "The rules layer that keeps the account safe and correctly scoped.",
    whyItMatters: "It prevents the wrong users from seeing or changing the wrong things.",
    whenToUse: "As part of company or office launch.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin"],
    skipImpact: "Your launch may create risk around access, texting, or ownership.",
    example: "Limit routing controls to admins and finish texting approval before launch."
  },
  {
    id: "lead-capture-tools",
    name: "Lead capture tools",
    description: "Turn on forms, website chat, valuation pages, and source connectors.",
    whatItIs: "The set of tools that bring people into the CRM.",
    whyItMatters: "It gives the website and marketing layers a way to create new opportunities.",
    whenToUse: "After the website basics are in place.",
    whoCanUse: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skipImpact: "The website will look fine but will not convert as well.",
    example: "Add a home valuation page so seller traffic turns into registered leads."
  }
];

const featureMap = new Map(featureDefinitions.map((feature) => [feature.id, feature]));

const getFeatureIds = (...ids: string[]) => ids;

const layer = (
  id: LayerId,
  config: Omit<LayerDefinition, "id" | "featureIds"> & { featureIds: string[] }
): LayerDefinition => ({
  id,
  ...config
});

export const layerDefinitions: LayerDefinition[] = [
  layer("profile-branding", {
    name: "Profile & Branding",
    shortDescription: "Set the identity Lofty will use everywhere.",
    description: "Configure the brand, headshot, business profile, and social links the platform uses in every customer-facing surface.",
    whatItIs: "The layer that turns a blank account into a recognizable business.",
    whyItMatters: "Everything else looks more polished once this is complete.",
    whenToUse: "First. Every role starts here.",
    whoCanUseLabel: "All roles",
    skipImpact: "The account stays generic and the website cannot be personalized properly.",
    example: "Add a logo, headshot, and market focus so the site and CRM feel like your business.",
    roles: roleDefinitions.map((role) => role.id),
    requiredFor: roleDefinitions.map((role) => role.id),
    skippableFor: [],
    dependencies: [],
    unlocks: ["Website generation", "Better CRM personalization", "Cleaner AI-generated content"],
    featureIds: getFeatureIds("business-profile", "social-media"),
    steps: [
      { id: "profile-branding-business", title: "Add business profile", description: "Name, logo, market focus, and brand basics.", required: true, featureId: "business-profile" },
      { id: "profile-branding-photo", title: "Upload marketing headshot", description: "The profile image used across marketing surfaces.", required: true },
      { id: "profile-branding-social", title: "Connect social accounts", description: "Optional, but useful for social publishing and brand consistency.", required: false, featureId: "social-media" }
    ],
    configSchema: [
      { id: "businessName", label: "Business or team name", type: "text", placeholder: "Blue Ridge Realty" },
      { id: "personaTitle", label: "Primary role title", type: "select", options: ["Broker", "Team Lead", "Agent", "Lender Partner", "Office Admin"], defaultValue: "Agent" },
      { id: "marketFocus", label: "Main market", type: "text", placeholder: "Phoenix metro buyers and sellers" },
      { id: "brandVoice", label: "Brand voice", type: "select", options: ["Professional", "Warm", "Luxury", "Neighborhood expert"], defaultValue: "Professional" }
    ]
  }),
  layer("website", {
    name: "Website",
    shortDescription: "Choose the Lofty site experience this role can launch.",
    description: "Pick the website type, layout, domain strategy, and generation mode Lofty should use for this role.",
    whatItIs: "The customer-facing website foundation.",
    whyItMatters: "It is where many leads first meet the business.",
    whenToUse: "Immediately after Profile & Branding.",
    whoCanUseLabel: "Owners, admins, agents",
    skipImpact: "Without it, the launch will feel incomplete and lead capture will stay weak.",
    example: "An agent can launch a fast subdomain site, while a company owner can build the main company website.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    requiredFor: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skippableFor: [],
    dependencies: ["profile-branding"],
    unlocks: ["Lead capture pages", "Website Builder", "IDX search", "SEO setup"],
    featureIds: getFeatureIds("website-template", "website-domain", "website-builder-agent"),
    steps: [
      { id: "website-template-step", title: "Pick a website template", description: "Choose the design direction Lofty should use.", required: true, featureId: "website-template" },
      { id: "website-domain-step", title: "Choose a domain or subdomain", description: "Set where the site will live.", required: true, featureId: "website-domain" },
      { id: "website-builder-step", title: "Enable AI website builder", description: "Let Lofty generate the first version for you.", required: true, featureId: "website-builder-agent" }
    ],
    configSchema: [
      { id: "websiteType", label: "Website type", type: "select", options: ["Agent Website", "Office Website", "Company Website", "Vanity Domain Site"], defaultValue: "Agent Website" },
      { id: "domain", label: "Domain or subdomain", type: "text", placeholder: "homes.example.com" },
      { id: "headline", label: "Homepage headline", type: "text", placeholder: "Modern guidance for Phoenix buyers and sellers" },
      { id: "heroStyle", label: "Hero style", type: "select", options: ["Listing-first", "Brand-first", "Neighborhood-first"], defaultValue: "Listing-first" }
    ]
  }),
  layer("mls-idx", {
    name: "MLS / IDX",
    shortDescription: "Connect listing feeds so Lofty can show inventory and alerts.",
    description: "Verify MLS access, set feed expectations, and explain what listing tools will unlock for this role.",
    whatItIs: "The listing data layer behind search, alerts, and valuations.",
    whyItMatters: "Real estate sites are stronger when live listing data is connected.",
    whenToUse: "After Website is in progress.",
    whoCanUseLabel: "Owners, admins, agents",
    skipImpact: "Search, valuations, alerts, and IDX workflows stay limited.",
    example: "Agents can inherit a parent MLS connection or apply for their own upgraded site feed.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    requiredFor: ["company-owner", "company-admin", "office-owner", "office-admin"],
    skippableFor: ["agent-user"],
    dependencies: ["website"],
    unlocks: ["Listing search pages", "Property alerts", "Home valuation", "Hot Sheets"],
    featureIds: getFeatureIds("mls-application"),
    steps: [
      { id: "mls-connect-step", title: "Verify MLS access", description: "Confirm whether this role uses inherited MLS access or a direct application.", required: true, featureId: "mls-application" },
      { id: "mls-listing-tools-step", title: "Enable listing-driven tools", description: "Turn on search, alerts, and valuation experiences tied to the feed.", required: true }
    ],
    configSchema: [
      { id: "mlsMode", label: "MLS setup path", type: "select", options: ["Inherited from parent site", "Direct application", "Will finish later"], defaultValue: "Inherited from parent site" },
      { id: "primaryMls", label: "Primary MLS", type: "text", placeholder: "Arizona Regional MLS" },
      { id: "enableValuation", label: "Enable valuation pages", type: "toggle", defaultValue: true }
    ]
  }),
  layer("communication", {
    name: "Communication",
    shortDescription: "Connect the channels Lofty uses for calls, texts, email, and calendar.",
    description: "Set up virtual numbers, texting approval, email sync, and calendar sync so communication lives inside the CRM.",
    whatItIs: "The messaging and calling foundation.",
    whyItMatters: "It turns Lofty into a daily operating system instead of a passive database.",
    whenToUse: "Early. Before you rely on follow-up.",
    whoCanUseLabel: "Owners, admins, agents",
    skipImpact: "Automation, communication history, and fast follow-up will feel incomplete.",
    example: "Finish email, calendar, and virtual number setup before you import leads and turn on automation.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    requiredFor: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skippableFor: [],
    dependencies: ["profile-branding"],
    unlocks: ["Texts from Lofty", "Synced email history", "Shared schedule visibility"],
    featureIds: getFeatureIds("email-integration", "calendar-integration", "virtual-number", "a2p-approval"),
    steps: [
      { id: "communication-number", title: "Set up virtual number", description: "Choose the number Lofty will use for calls and texts.", required: true, featureId: "virtual-number" },
      { id: "communication-a2p", title: "Finish texting approval", description: "Complete A2P registration so business texting is compliant.", required: true, featureId: "a2p-approval" },
      { id: "communication-email", title: "Connect email", description: "Sync your inbox for email tracking and parsing.", required: true, featureId: "email-integration" },
      { id: "communication-calendar", title: "Connect calendar", description: "Sync appointments and follow-up schedules.", required: true, featureId: "calendar-integration" }
    ],
    configSchema: [
      { id: "emailProvider", label: "Email provider", type: "select", options: ["Gmail", "Office 365", "IMAP / SMTP", "Not sure yet"], defaultValue: "Gmail" },
      { id: "calendarProvider", label: "Calendar provider", type: "select", options: ["Google Calendar", "Microsoft Outlook", "No calendar yet"], defaultValue: "Google Calendar" },
      { id: "phoneAreaCode", label: "Preferred area code", type: "text", placeholder: "602" },
      { id: "textingReady", label: "A2P submitted", type: "toggle", defaultValue: false }
    ]
  }),
  layer("lead-capture", {
    name: "Lead Capture",
    shortDescription: "Turn the website and integrations into active lead sources.",
    description: "Configure forms, chat, home valuation, and source integrations so Lofty can actually collect new opportunities.",
    whatItIs: "The conversion layer that creates new leads.",
    whyItMatters: "A launch without lead capture is just a polished brochure.",
    whenToUse: "After Website and MLS / IDX are understood.",
    whoCanUseLabel: "Owners, admins, agents",
    skipImpact: "Your website may launch, but it will not do enough lead creation work.",
    example: "Turn on valuation pages and chat so buyers and sellers can register from day one.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    requiredFor: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skippableFor: [],
    dependencies: ["website"],
    unlocks: ["Website registration", "Seller capture", "Chat-driven conversion"],
    featureIds: getFeatureIds("lead-capture-tools", "lead-integrations"),
    steps: [
      { id: "lead-capture-chat", title: "Choose website capture tools", description: "Pick which capture blocks and pages are active.", required: true, featureId: "lead-capture-tools" },
      { id: "lead-capture-integrations", title: "Connect lead source integrations", description: "Bring outside lead channels into Lofty.", required: true, featureId: "lead-integrations" }
    ],
    configSchema: [
      { id: "captureMode", label: "Primary lead capture mode", type: "select", options: ["Website registration", "Home valuation", "Chat and forms", "Mixed strategy"], defaultValue: "Mixed strategy" },
      { id: "enableChat", label: "Enable website chat", type: "toggle", defaultValue: true },
      { id: "primaryLeadSource", label: "Most important source", type: "text", placeholder: "Zillow, Realtor.com, website chat" }
    ]
  }),
  layer("database-contacts", {
    name: "Database / Contacts",
    shortDescription: "Bring contacts in and shape them into a usable CRM.",
    description: "Import leads, define ownership and organization rules, and explain how People, lead profiles, and filters work for this role.",
    whatItIs: "The CRM data foundation.",
    whyItMatters: "It makes every later workflow smarter.",
    whenToUse: "After communication basics are ready.",
    whoCanUseLabel: "All roles, with different depth",
    skipImpact: "Lofty will launch with too little data and too little context.",
    example: "Import your sphere, label hot buyers, and make sure the right person owns each lead.",
    roles: roleDefinitions.map((role) => role.id),
    requiredFor: roleDefinitions.map((role) => role.id),
    skippableFor: [],
    dependencies: ["communication"],
    unlocks: ["Smart filters", "Lead health visibility", "Automation triggers"],
    featureIds: getFeatureIds("lead-import", "lead-integrations", "lead-ownership", "lender-collaboration"),
    steps: [
      { id: "database-import", title: "Import or connect contacts", description: "Bring in current clients, leads, and portals.", required: true, featureId: "lead-import" },
      { id: "database-organization", title: "Choose contact structure", description: "Set how this role will use People, filters, and lead context.", required: true },
      { id: "database-ownership", title: "Define ownership or shared lead visibility", description: "Only show the ownership controls available for this role.", required: false, featureId: "lead-ownership" }
    ],
    configSchema: [
      { id: "databaseGoal", label: "Main database goal", type: "select", options: ["Import and organize", "Connect sources", "Review shared leads", "Start fresh"], defaultValue: "Import and organize" },
      { id: "defaultSegment", label: "Default segment or lens", type: "text", placeholder: "New buyers, shared lender leads, sphere" },
      { id: "sharedLeadNotes", label: "Share notes by default", type: "toggle", defaultValue: true }
    ]
  }),
  layer("lead-routing", {
    name: "Lead Routing",
    shortDescription: "Decide who gets which lead and why.",
    description: "Set the routing logic that sends leads to the right agent, office, or lender partner.",
    whatItIs: "The assignment logic for shared lead flow.",
    whyItMatters: "It keeps new leads from getting stuck or misrouted.",
    whenToUse: "When more than one person is involved in lead handling.",
    whoCanUseLabel: "Owners and admins only",
    skipImpact: "Shared teams can launch with confusion around lead ownership.",
    example: "Send Facebook buyer leads to one office and seller valuation leads to another.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin"],
    lockedExplanation: "Only company and office leadership roles can set routing rules because routing affects multiple users.",
    requiredFor: ["company-owner", "company-admin", "office-owner"],
    skippableFor: ["office-admin"],
    dependencies: ["database-contacts"],
    unlocks: ["Faster lead handling", "Cleaner ownership", "Lender routing where allowed"],
    featureIds: getFeatureIds("lead-ownership", "lender-collaboration"),
    steps: [
      { id: "routing-logic", title: "Choose routing model", description: "Pick round robin, next up, office logic, or simple ownership.", required: true, featureId: "lead-ownership" },
      { id: "routing-lender", title: "Set lender collaboration rules", description: "Only enable lender routing if this role can manage it.", required: false, featureId: "lender-collaboration" }
    ],
    configSchema: [
      { id: "routingMode", label: "Routing mode", type: "select", options: ["Round robin", "Next up", "Manual ownership", "Office-based routing"], defaultValue: "Round robin" },
      { id: "lenderRouting", label: "Allow lender routing", type: "toggle", defaultValue: false }
    ]
  }),
  layer("automation-smart-plans", {
    name: "Automation / Smart Plans",
    shortDescription: "Automate follow-up so Lofty keeps working after launch.",
    description: "Teach what Smart Plans do, help the user choose the right workflow depth, and configure starter campaigns.",
    whatItIs: "The automation layer for outreach and nurture.",
    whyItMatters: "It helps the platform keep momentum after leads arrive.",
    whenToUse: "After communication and database basics are ready.",
    whoCanUseLabel: "Most roles, with lender limitations explained",
    skipImpact: "More daily work stays manual and the system feels less proactive.",
    example: "Create a three-touch new lead plan with AI-generated drafts and call reminders.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user", "lender"],
    requiredFor: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skippableFor: ["lender"],
    dependencies: ["communication", "database-contacts"],
    unlocks: ["Auto follow-up", "AI Smart Plans", "Less manual nurture"],
    featureIds: getFeatureIds("smart-plans"),
    steps: [
      { id: "automation-strategy", title: "Choose a starter automation strategy", description: "Pick the first campaign type this role needs.", required: true, featureId: "smart-plans" },
      { id: "automation-ai", title: "Enable AI assistance for follow-up", description: "Use Lofty AI to speed up multi-step setup.", required: false }
    ],
    configSchema: [
      { id: "automationPreset", label: "Starter Smart Plan", type: "select", options: ["New lead follow-up", "Sphere nurture", "Open house nurture", "Lender check-in"], defaultValue: "New lead follow-up" },
      { id: "useAiDrafting", label: "Use AI drafting", type: "toggle", defaultValue: true }
    ]
  }),
  layer("tasks-calendar", {
    name: "Tasks & Calendar",
    shortDescription: "Show how Lofty turns follow-up into a clear daily plan.",
    description: "Explain the daily execution layer and let the user decide how reminders, appointments, and task views should work.",
    whatItIs: "The day-to-day execution workspace.",
    whyItMatters: "It helps the user turn the CRM into action.",
    whenToUse: "Any time after communication setup.",
    whoCanUseLabel: "Owners, admins, agents",
    skipImpact: "The CRM may capture leads, but it will not guide the work as well.",
    example: "Use task views for callbacks and appointments so nothing slips.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    lockedExplanation: "Lender accounts can collaborate through notes and limited visibility, but lender tasks are not assigned the same way in Lofty.",
    requiredFor: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skippableFor: [],
    dependencies: ["communication"],
    unlocks: ["Calendar visibility", "Appointment workflow", "Clear task ownership"],
    featureIds: getFeatureIds("tasks-calendar"),
    steps: [
      { id: "tasks-views", title: "Choose task view style", description: "Pick whether this role works from list, calendar, or both.", required: true, featureId: "tasks-calendar" },
      { id: "tasks-reminders", title: "Set reminder expectations", description: "Decide how often the role wants nudges and due-date visibility.", required: true }
    ],
    configSchema: [
      { id: "taskView", label: "Default task view", type: "select", options: ["Task list", "Calendar", "Both"], defaultValue: "Both" },
      { id: "remindersEnabled", label: "Enable reminders", type: "toggle", defaultValue: true }
    ]
  }),
  layer("ai-copilots", {
    name: "AI Copilots",
    shortDescription: "Introduce the Lofty AI layer in a way that feels useful, not overwhelming.",
    description: "Show which AI tools this role can use and how they support lead response, drafting, website generation, and prioritization.",
    whatItIs: "Lofty's AI operating layer.",
    whyItMatters: "It changes the experience from passive software to guided action.",
    whenToUse: "After the user understands the core CRM basics.",
    whoCanUseLabel: "Most roles, with role-aware limits",
    skipImpact: "The user will miss some of Lofty's strongest differentiation.",
    example: "Turn on AI Assistant for prioritization and use Website Building Agent at launch.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    lockedExplanation: "Lender accounts see a narrower collaboration experience and do not get the full AI Copilots setup.",
    requiredFor: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    skippableFor: [],
    dependencies: ["automation-smart-plans"],
    unlocks: ["AI Assistant", "Website Builder", "Sales Agent", "AI health analysis"],
    featureIds: getFeatureIds("ai-assistant", "sales-agent", "website-builder-agent"),
    steps: [
      { id: "ai-assistant-step", title: "Choose which AI copilots to enable", description: "Turn on only the AI tools this role can actually use.", required: true, featureId: "ai-assistant" },
      { id: "ai-explainability-step", title: "Set trust and approval style", description: "Decide where the user wants approval gates and explanations.", required: true }
    ],
    configSchema: [
      { id: "assistantEnabled", label: "Enable AI Assistant", type: "toggle", defaultValue: true },
      { id: "salesAgentEnabled", label: "Enable AI Sales Agent", type: "toggle", defaultValue: false },
      { id: "approvalStyle", label: "AI approval style", type: "select", options: ["Show every recommendation", "Approve only risky actions", "Auto-apply safe suggestions"], defaultValue: "Approve only risky actions" }
    ]
  }),
  layer("marketing", {
    name: "Marketing",
    shortDescription: "Configure the optional campaigns and content layers the role can actually own.",
    description: "Show the campaign tools that match the role, from ads and social to branded materials and newsletters.",
    whatItIs: "The growth layer for generating and warming demand.",
    whyItMatters: "It helps users move from setup to traffic and pipeline growth.",
    whenToUse: "After the base system is ready.",
    whoCanUseLabel: "Owners, admins, agents",
    skipImpact: "The launch can still happen, but growth will be more manual.",
    example: "Turn on listing blasts and basic social workflows after the site is live.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    lockedExplanation: "Lender accounts collaborate on shared leads but do not run the main Lofty marketing stack.",
    requiredFor: [],
    skippableFor: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    dependencies: ["lead-capture"],
    unlocks: ["Ads", "Social content", "Geographic farming", "Marketing source analysis"],
    featureIds: getFeatureIds("lead-capture-tools", "reporting-suite"),
    steps: [
      { id: "marketing-channel", title: "Choose first marketing focus", description: "Pick the first demand channel this role should care about.", required: false },
      { id: "marketing-content", title: "Choose lightweight content support", description: "Decide whether to lean on listing blasts, newsletters, or social tools.", required: false }
    ],
    configSchema: [
      { id: "marketingFocus", label: "Marketing focus", type: "select", options: ["Listing promotion", "Lead generation ads", "Sphere nurture", "Minimal launch"], defaultValue: "Minimal launch" },
      { id: "enableSocial", label: "Enable social workflows", type: "toggle", defaultValue: true }
    ]
  }),
  layer("reporting", {
    name: "Reporting",
    shortDescription: "Show what this role can measure after launch.",
    description: "Explain the reporting and website analytics available to the role and help them pick the metrics that matter first.",
    whatItIs: "The feedback loop for the Lofty setup.",
    whyItMatters: "It teaches the user how to judge whether the launch is working.",
    whenToUse: "Toward the end, after core setup exists.",
    whoCanUseLabel: "Owners, admins, agents",
    skipImpact: "The user will launch without a clear way to measure success.",
    example: "Track activity, lead source performance, and site traffic in one place.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    lockedExplanation: "Lender accounts see collaboration, not the full Lofty reporting suite.",
    requiredFor: [],
    skippableFor: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    dependencies: ["database-contacts"],
    unlocks: ["Readiness score tracking", "Performance review", "Website analytics"],
    featureIds: getFeatureIds("reporting-suite"),
    steps: [
      { id: "reporting-metrics", title: "Pick the first metrics to watch", description: "Start with a few metrics the role can act on.", required: false, featureId: "reporting-suite" }
    ],
    configSchema: [
      { id: "northStarMetric", label: "North star metric", type: "select", options: ["New leads", "Speed to lead", "Conversations started", "Site traffic"], defaultValue: "New leads" }
    ]
  }),
  layer("team-management", {
    name: "Team Management",
    shortDescription: "Set up the people, hierarchy, and permission structure for shared work.",
    description: "Invite users, define roles, explain hierarchy, and show what parts of team setup this role controls.",
    whatItIs: "The org setup layer for multi-user Lofty accounts.",
    whyItMatters: "It decides who can use the rest of the platform safely and effectively.",
    whenToUse: "For company and office leadership roles.",
    whoCanUseLabel: "Owners and admins only",
    skipImpact: "Multi-user accounts may launch without the right roles or visibility.",
    example: "Create a team admin, assign an office owner, and import a member list.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin"],
    lockedExplanation: "Team and company structure are managed by leadership roles so agents are not overloaded with org controls.",
    requiredFor: ["company-owner", "company-admin", "office-owner"],
    skippableFor: ["office-admin"],
    dependencies: ["profile-branding"],
    unlocks: ["Shared routing", "Permission clarity", "Template rollout"],
    featureIds: getFeatureIds("team-management", "permissions", "lender-collaboration"),
    steps: [
      { id: "team-invite", title: "Invite or import users", description: "Add the people who need Lofty access.", required: true, featureId: "team-management" },
      { id: "team-permissions", title: "Review permission boundaries", description: "Make the access model obvious before launch.", required: true, featureId: "permissions" },
      { id: "team-lender", title: "Invite lender partners if needed", description: "Only show this if the role can manage lender access.", required: false, featureId: "lender-collaboration" }
    ],
    configSchema: [
      { id: "teamSize", label: "Expected team size", type: "select", options: ["1-5", "6-20", "21-50", "50+"], defaultValue: "1-5" },
      { id: "needLenderPartner", label: "Need lender partner access", type: "toggle", defaultValue: false }
    ]
  }),
  layer("transactions", {
    name: "Transactions",
    shortDescription: "Prepare the deal-management side of Lofty.",
    description: "Teach what happens after a lead converts and show the steps needed for offers, documents, and client visibility.",
    whatItIs: "The post-conversion workflow layer.",
    whyItMatters: "It helps Lofty support the whole real estate journey, not just lead generation.",
    whenToUse: "After CRM basics are in place.",
    whoCanUseLabel: "Owners, admins, agents",
    skipImpact: "The team may need another tool for active deals.",
    example: "Turn on document templates and show the client portal in the review stage.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user", "lender"],
    lockedExplanation: "Lenders can collaborate on shared leads, but the full agent-side transaction workflow is not mirrored in lender accounts.",
    requiredFor: [],
    skippableFor: roleDefinitions.map((role) => role.id),
    dependencies: ["database-contacts"],
    unlocks: ["Offer management", "Document workflows", "Client portal"],
    featureIds: getFeatureIds("transactions", "lender-collaboration"),
    steps: [
      { id: "transactions-enable", title: "Decide whether transactions belong in Lofty", description: "Choose if this role should actively work deals here.", required: false, featureId: "transactions" },
      { id: "transactions-docs", title: "Review templates and client visibility", description: "Show what document workflows unlock later.", required: false }
    ],
    configSchema: [
      { id: "transactionMode", label: "Transaction mode", type: "select", options: ["Full transaction workflow", "Light offer tracking", "Review later"], defaultValue: "Review later" }
    ]
  }),
  layer("mobile-app", {
    name: "Mobile App",
    shortDescription: "Finish the setup with Lofty on the phone.",
    description: "Explain what the mobile app is good at and encourage the user to connect the account for real-world follow-up speed.",
    whatItIs: "The mobile extension of the CRM.",
    whyItMatters: "It keeps speed to lead high when the user is away from the desk.",
    whenToUse: "Near the end of setup.",
    whoCanUseLabel: "Owners, admins, agents",
    skipImpact: "Desktop workflows still work, but speed and convenience drop.",
    example: "Download the app so a new inquiry can be answered during a showing.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    lockedExplanation: "The lender experience is focused on limited collaboration, so the main mobile workflow is not emphasized here.",
    requiredFor: [],
    skippableFor: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    dependencies: ["communication"],
    unlocks: ["Mobile notifications", "On-the-go lead response", "Portable appointments"],
    featureIds: getFeatureIds("mobile-app"),
    steps: [
      { id: "mobile-download", title: "Download and sign in", description: "Connect the mobile app after your main settings are in place.", required: false, featureId: "mobile-app" }
    ],
    configSchema: [
      { id: "mobilePriority", label: "Mobile use style", type: "select", options: ["Notifications only", "Full daily workflow", "Open house support"], defaultValue: "Full daily workflow" }
    ]
  }),
  layer("marketplace-addons", {
    name: "Marketplace / Add-ons",
    shortDescription: "Show optional Lofty upgrades without cluttering the core launch.",
    description: "Introduce the marketplace only when it is useful and only for roles that can act on it.",
    whatItIs: "The optional upgrade layer.",
    whyItMatters: "It helps the user expand with intention instead of being distracted too early.",
    whenToUse: "Late in setup.",
    whoCanUseLabel: "Owners, company admins, office/team owners, and agents where allowed",
    skipImpact: "Core launch is still fine, but advanced add-ons may stay undiscovered.",
    example: "Review Home Report, office add-ons, or extra upgrades after the system basics are done.",
    roles: ["company-owner", "company-admin", "office-owner", "agent-user"],
    lockedExplanation: "Marketplace upgrades affect billing or ownership, so they stay hidden for office admins and lenders.",
    requiredFor: [],
    skippableFor: ["company-owner", "company-admin", "office-owner", "agent-user"],
    dependencies: ["website"],
    unlocks: ["Optional growth tools", "Plan upgrades", "Specialized add-ons"],
    featureIds: getFeatureIds("marketplace-addons"),
    steps: [
      { id: "marketplace-review", title: "Review recommended add-ons", description: "Only surface upgrades relevant to the selected role.", required: false, featureId: "marketplace-addons" }
    ],
    configSchema: [
      { id: "marketplaceIntent", label: "Marketplace intent", type: "select", options: ["No add-ons right now", "Review growth tools", "Need website or reporting upgrades"], defaultValue: "No add-ons right now" }
    ]
  }),
  layer("compliance-permissions", {
    name: "Compliance / Permissions",
    shortDescription: "Keep the launch safe, scoped, and communication-ready.",
    description: "Explain texting compliance, permission structure, and role-based safety checks for the launch.",
    whatItIs: "The guardrail layer for access and regulated communication.",
    whyItMatters: "It protects the organization before the platform gets busy.",
    whenToUse: "Before final review.",
    whoCanUseLabel: "Leadership roles only",
    skipImpact: "The launch may work, but with avoidable access and compliance risk.",
    example: "Finish permission review so only admins can change routing or team structure.",
    roles: ["company-owner", "company-admin", "office-owner", "office-admin"],
    lockedExplanation: "Permissions and compliance are maintained by leadership so end users can stay focused on production work.",
    requiredFor: ["company-owner", "company-admin", "office-owner"],
    skippableFor: ["office-admin"],
    dependencies: ["communication", "team-management"],
    unlocks: ["Safer launch", "Cleaner admin boundaries", "More confident texting"],
    featureIds: getFeatureIds("permissions", "a2p-approval"),
    steps: [
      { id: "compliance-review", title: "Review access boundaries", description: "Confirm who can manage users, routing, and shared settings.", required: true, featureId: "permissions" },
      { id: "compliance-texting", title: "Confirm texting readiness", description: "Make sure communication permissions and compliance are understood.", required: true, featureId: "a2p-approval" }
    ],
    configSchema: [
      { id: "permissionPolicy", label: "Permission posture", type: "select", options: ["Tight admin control", "Balanced flexibility", "Delegated setup"], defaultValue: "Balanced flexibility" },
      { id: "textingPolicyReady", label: "Texting compliance reviewed", type: "toggle", defaultValue: false }
    ]
  })
];

export const templateDefinitions: TemplateDefinition[] = [
  {
    id: "new-agent-setup",
    name: "New Agent Setup",
    description: "A light personal launch with website, CRM basics, tasks, AI, and mobile.",
    roleIds: ["agent-user"],
    activeLayers: ["profile-branding", "website", "mls-idx", "communication", "lead-capture", "database-contacts", "automation-smart-plans", "tasks-calendar", "ai-copilots", "mobile-app"],
    pinnedLayers: ["profile-branding", "website", "communication"]
  },
  {
    id: "team-owner-setup",
    name: "Team Owner Setup",
    description: "A shared launch for routing, templates, office tools, and website foundations.",
    roleIds: ["office-owner"],
    activeLayers: ["profile-branding", "website", "mls-idx", "communication", "team-management", "lead-capture", "database-contacts", "lead-routing", "automation-smart-plans", "tasks-calendar", "ai-copilots", "reporting", "compliance-permissions"],
    pinnedLayers: ["team-management", "lead-routing", "communication"]
  },
  {
    id: "office-admin-setup",
    name: "Office Admin Setup",
    description: "A support-focused setup with office communication, website, and shared workflows.",
    roleIds: ["office-admin"],
    activeLayers: ["profile-branding", "website", "communication", "lead-capture", "database-contacts", "automation-smart-plans", "tasks-calendar", "reporting", "team-management"],
    pinnedLayers: ["communication", "database-contacts"]
  },
  {
    id: "lender-setup",
    name: "Lender Setup",
    description: "A focused collaboration setup for lender-side shared lead visibility.",
    roleIds: ["lender"],
    activeLayers: ["profile-branding", "database-contacts", "automation-smart-plans", "transactions"],
    pinnedLayers: ["database-contacts"]
  },
  {
    id: "advanced-marketing-setup",
    name: "Advanced Marketing Setup",
    description: "Layer in demand generation, marketing, reporting, and AI after the essentials.",
    roleIds: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    activeLayers: ["profile-branding", "website", "mls-idx", "communication", "lead-capture", "database-contacts", "automation-smart-plans", "ai-copilots", "marketing", "reporting", "marketplace-addons"],
    pinnedLayers: ["marketing", "reporting"]
  },
  {
    id: "minimal-launch-setup",
    name: "Minimal Launch Setup",
    description: "Only the required layers needed to get live fast.",
    roleIds: ["company-owner", "company-admin", "office-owner", "office-admin", "agent-user"],
    activeLayers: ["profile-branding", "website", "communication", "database-contacts"],
    pinnedLayers: ["profile-branding", "website"]
  }
];

export function getLayerById(id: LayerId): LayerDefinition {
  const found = layerDefinitions.find((layerItem) => layerItem.id === id);
  if (!found) {
    throw new Error(`Unknown layer: ${id}`);
  }
  return found;
}

export function getFeatureById(id: string): FeatureDefinition {
  const found = featureMap.get(id);
  if (!found) {
    throw new Error(`Unknown feature: ${id}`);
  }
  return found;
}

export function getRoleById(id: RoleId): RoleDefinition {
  const found = roleDefinitions.find((role) => role.id === id);
  if (!found) {
    throw new Error(`Unknown role: ${id}`);
  }
  return found;
}

export function isRoleAdmin(roleId: RoleId): boolean {
  return roleId !== "agent-user" && roleId !== "lender";
}

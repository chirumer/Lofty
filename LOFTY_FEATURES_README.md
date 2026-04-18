# Lofty Features Guide

This README summarizes the major features available in Lofty and explains what each one is used for.

It is based on the public Lofty Help Center structure and the local scrape in this workspace. The goal is to turn the Help Center into a simple product map.

## What Lofty Is

Lofty is a real estate operating system made up of several connected layers:

- `CRM`: manage leads, communication, tasks, listings, and transactions
- `Website + IDX`: create websites, capture leads, and show listings
- `Marketing`: run campaigns, ads, and nurture flows
- `AI`: assist agents, automate work, and generate content
- `Reporting`: measure activity, lead sources, and website performance
- `Mobile`: manage leads and tasks on the go

## Core Objects In Lofty

Most Lofty features revolve around these objects:

- `Lead`
- `Pipeline Stage`
- `Segment`
- `Task`
- `Appointment`
- `Listing`
- `Website`
- `Smart Plan`
- `Transaction`
- `AI Agent`

## 1. Getting Started Features

These features help new users get Lofty up and running.

- `Guided Setup`
  Used to walk a new user through account setup step by step.

- `Profile Setup`
  Used to add business info, branding, and signature details so the account is ready for outreach.

- `CRM Integrations`
  Used to connect outside tools that feed data or activity into Lofty.

- `Website Integrations`
  Used to connect analytics, search tools, tracking scripts, calendars, and other website-related tools.

- `Lead Source Integrations`
  Used to bring leads into Lofty from portals, landing pages, forms, and third-party services.

- `Calendar Integrations`
  Used to sync Lofty tasks and appointments with Google or Microsoft calendars.

- `Email Integrations`
  Used to send and receive email from inside Lofty using connected inboxes.

## 2. CRM Features

The CRM is the main operating layer for agents and teams.

### Dashboard

- `Dashboard Overview`
  Used as the main daily summary screen.

- `New Updates`
  Used to surface announcements, product updates, and promotions.

- `Need Keep In Touch`
  Used to remind agents about birthdays and follow-up relationships that need attention.

- `Today's New Leads`
  Used to show fresh leads and untouched contacts.

- `Today's Opportunities`
  Used to surface behavior-based high-priority leads like high-interest, back-to-site, and sell signals.

- `Today's Tasks`
  Used to show due actions such as calls, texts, emails, and custom tasks.

- `Appointments and Showings`
  Used to track upcoming meetings, tours, and showing requests.

- `Transactions Widget`
  Used to surface near-deadline deals and overdue transaction work.

- `My Listings`
  Used to show active listings the agent is marketing.

- `Hot Sheets`
  Used to show saved MLS updates such as new listings, price changes, and back-on-market inventory.

### People and Lead Management

- `People Page`
  Used to view and manage the full lead database.

- `Lead Profile`
  Used to see one lead's complete context, including communication, searches, notes, tasks, and transactions.

- `Search Bar`
  Used to quickly find leads, listings, and records.

- `Add a Lead`
  Used to create a contact manually.

- `Lead Score and Lead Analysis`
  Used to understand how likely a lead is to convert based on activity and quality signals.

- `Family Members`
  Used to group related contacts under one lead context.

- `Lead Preference Profiles`
  Used to capture what the lead wants in a property or transaction.

- `Lead Ownership`
  Used to control which agent or team owns a lead.

- `Partial Leads`
  Used to handle incomplete leads that have limited data.

- `Lead Pond`
  Used as a shared lead pool for team distribution.

- `Lead Filters`
  Used to build saved views and find specific lead groups.

- `Pipeline Stages`
  Used to move leads through a sales process.

- `Segments`
  Used to group leads into audiences for workflow and marketing.

- `Tags`
  Used to label leads for quick organization.

- `Sources`
  Used to track where a lead came from.

- `Custom Fields`
  Used to store extra business-specific lead data.

- `Lead Merge / Duplicate Management`
  Used to combine duplicate contacts into one clean record.

- `Delete / Erase Leads`
  Used to remove contacts when required.

### Lead Distribution and Collaboration

- `Lead Routing Rules`
  Used to automatically assign incoming leads based on source, location, tag, price range, and other rules.

- `Lead Routing Logs`
  Used to audit how a lead was assigned.

- `Lead Routing Notifications`
  Used to notify agents when routed leads are ready to accept or claim.

- `Round Robin / Next Up`
  Used to distribute leads fairly across agents.

- `Assignment Groups`
  Used to control which teams or users receive lead traffic.

- `Reassignment Groups`
  Used to redistribute existing leads after qualification or workflow changes.

- `Re-Run Lead Routing`
  Used to send a lead back through routing logic again.

- `Agent-to-Agent Collaboration`
  Used to let multiple agents work around the same lead.

- `Lender Collaboration`
  Used to coordinate agent and lender workflows on shared leads.

### Communication Features

- `Calling`
  Used to call leads directly from Lofty.

- `Receiving Calls`
  Used to receive inbound lead calls inside the Lofty calling setup.

- `Inbound Voicemail`
  Used to review missed-call voice messages.

- `Call Lists`
  Used to batch outbound calling activity.

- `Smart Call Lists`
  Used to prioritize call targets using lead logic and filters.

- `Call Scripts`
  Used to guide conversations with prepared scripts.

- `Call Questionnaires`
  Used to gather structured information while calling.

- `Voice Messages`
  Used to manage pre-recorded or stored messages.

- `Live Call Transfer`
  Used to hand a live lead call to another person.

- `Texting`
  Used to text leads from Lofty.

- `Group Texting`
  Used to send text messages to multiple recipients in one flow.

- `Text Templates`
  Used to reuse standard SMS responses.

- `MMS Image Messaging`
  Used to send images with text messages.

- `Email`
  Used to communicate with leads by email inside Lofty.

- `Email Templates`
  Used to reuse standard email content.

- `Scheduled Emails`
  Used to send messages later at a chosen time.

- `Drag-and-Drop Email Editor`
  Used to build richer email content visually.

- `Mass Emails and Mass Texts`
  Used to broadcast campaigns to lead groups.

- `Email Variables`
  Used to personalize messages with lead and agent data.

- `Sending Email Address / Domain`
  Used to define which email identity messages come from.

- `Subscription Status and Opt-In`
  Used to manage permission-based communication.

- `Phone Number Validity`
  Used to check whether a number is usable for outreach.

- `Do Not Contact Settings`
  Used to suppress messaging or calling to protected leads.

### Tasks, Calendar, and Appointments

- `Task Management`
  Used to create and complete follow-up work tied to leads.

- `Lofty Calendar`
  Used to view tasks, appointments, and schedule-related activity in calendar form.

- `Appointments`
  Used to schedule meetings and lead-related events.

- `Working Hours / Vacation Mode`
  Used to control availability.

- `Task and Appointment Reminders`
  Used to prevent missed follow-ups.

- `Showing Management`
  Used to manage tour and showing requests.

- `Buyer/Renter Tour`
  Used to coordinate property tours for active clients.

### Smart Plans and Automation

- `Smart Plan Builder`
  Used to build automated follow-up sequences.

- `Smart Plans FAQs`
  Used to understand automation behavior and best practices.

- `Zapier + Smart Plans`
  Used to trigger Smart Plan workflows from external tools.

- `AI Smart Plan Workflows`
  Used to add AI classification, extraction, summarization, or generation inside automation.

- `Auto Property Alerts`
  Used to automatically send new matching listings to leads.

### Listings and Property Features

- `All Listings`
  Used to browse available inventory in Lofty.

- `Hot Sheets`
  Used to track saved MLS searches and market movement.

- `My/Team Listings`
  Used to manage listings tied to the agent or team.

- `Smart Listings`
  Used to highlight listings with useful sales or engagement context.

- `Manual Listings`
  Used to add listings manually when MLS-fed inventory is not enough.

- `Property Alerts`
  Used to send listing matches to leads automatically.

- `Market Snapshots`
  Used to share market-style listing updates with leads.

- `Seller Report`
  Used to provide sellers with listing and market-related information.

- `Market Reports`
  Used to share broader local market insights.

- `Property Preferences`
  Used to store what a lead is looking for in a property.

### Marketing and Lead Generation

- `Facebook Landing Page Ads`
  Used to run Facebook campaigns that push leads into Lofty.

- `Google and Bing PPC Search Ads`
  Used to capture search-intent leads through paid ads.

- `Google Local Service Ads`
  Used to capture local-service lead calls and inquiries from Google.

- `Geographic Farming`
  Used to market repeatedly to a target neighborhood or area.

- `Design Center`
  Used to create branded marketing materials.

- `Print House Mailers`
  Used to send physical mail marketing.

- `Postcards and Letters`
  Used for offline lead generation and follow-up.

- `Boost Post`
  Used to promote listings socially.

- `Listing Blast`
  Used to advertise a listing to a broad audience.

- `Zip Code Blast`
  Used to target listing promotion by area.

- `Open House Forms`
  Used to capture visitor information during open houses.

- `Marketing Source Analysis`
  Used to understand which marketing channels are generating results.

- `Brand Awareness Tools`
  Used to support personal branding and top-of-funnel presence.

### Presentations and Seller Tools

- `Lofty Present`
  Used to build CMAs and listing presentations.

- `CMA Creation`
  Used to prepare a comparative market analysis for sellers.

- `Listing Presentation Templates`
  Used to standardize seller presentation decks.

### Transactions

- `Transaction Management`
  Used to manage deals after a lead moves into contract.

- `Transaction Checklists`
  Used to track required steps and deadlines in a transaction.

- `Transaction Documents`
  Used to upload and manage deal paperwork.

- `Transaction Document Templates`
  Used to reuse document layouts with autofill fields.

- `Offer Management`
  Used to review, compare, and manage offers.

- `Vendor and Partner Management`
  Used to coordinate outside partners involved in a transaction.

- `Commission Disbursement Authorization`
  Used for commission paperwork and processing.

- `Transaction Lead Portal / Closely`
  Used to give clients visibility into transaction status and documents.

### Reporting

- `Business Summary Reporting`
  Used to view high-level business performance.

- `Performance by Agent`
  Used to compare output across agents.

- `Agent Activity Metrics`
  Used to measure outreach and workflow activity.

- `Agent Accountability Leaderboard`
  Used to compare productivity across users.

- `Activities Timeline`
  Used to review action history and engagement over time.

- `Email Accountability Reporting`
  Used to measure email usage and responsiveness.

- `Reporting Page Metrics`
  Used to understand what metrics appear on the reporting screen.

- `Site Traffic Report`
  Used to measure website traffic and lead activity.

### Notifications and Workspace

- `Opportunity Notifications`
  Used to alert agents when lead behavior suggests urgent intent.

- `Lofty Notifications`
  Used to control or review notification behavior.

- `Additional New Lead Alert Emails`
  Used to forward new-lead alerts to extra email addresses.

- `Dashboard Announcement Board`
  Used to manage the announcement content shown on the dashboard.

- `Workspace`
  Used to organize or separate working environments inside Lofty.

### Team, Roles, and Account Management

- `Team Management`
  Used to add and manage people in the organization.

- `Custom Roles`
  Used to define permission structures.

- `Permission Profiles`
  Used to control what users can access.

- `Organizational Hierarchy`
  Used to model company, office, team, and agent relationships.

- `Invite Team Members`
  Used to bring new users into the CRM.

- `Import Agents`
  Used to bulk add users.

- `Agent Tags`
  Used to classify agents for routing or management.

- `Single Sign-On`
  Used to connect Lofty access to an identity provider.

- `Billing Center`
  Used to manage payment and subscription details.

- `ACH Payments`
  Used to pay Lofty by bank transfer.

- `Sales Tax`
  Used to understand billing tax treatment.

- `Security and Account Access`
  Used to manage login safety and account security.

- `Password Reset`
  Used to recover account access.

- `CRM Settings`
  Used to configure major account-level CRM behavior.

- `Goal Setting Portal`
  Used to set productivity or business goals.

### Virtual Numbers and Telephony

- `Virtual Numbers`
  Used to call and text leads without using a personal phone number.

- `Personal Virtual Number`
  Used as an agent-owned business line.

- `Company Number`
  Used as a shared central line.

- `Office Virtual Number`
  Used at the office level for communication routing.

- `Port In / Port Out`
  Used to move numbers into or out of Lofty.

- `Call and Text Packages`
  Used to manage telephony usage and availability.

### Compliance and Legal

- `A2P 10DLC`
  Used to register and stay compliant for business texting.

- `TCPA Guidance`
  Used to understand text and call compliance rules.

- `Text Subscription / Permission to Contact`
  Used to manage consent before messaging.

- `DNC Compliance`
  Used to avoid contacting restricted leads.

- `RESPA Guidance`
  Used to explain supported compliance-related cost-sharing arrangements.

### AI Features

- `AI Assistant`
  Used as Lofty's main embedded AI helper for lead prioritization, drafting, scheduling, questions, and workflow help.

- `AI Smart Notifications`
  Used to summarize the most meaningful lead updates.

- `AI Call Summary + Transcript`
  Used to summarize calls and surface action items.

- `AI Lead Health Analysis`
  Used to assess lead quality and database health.

- `AI Assistant Multi-Step Tasks`
  Used to generate automated follow-up plans.

- `AI Copilots Ecosystem`
  Used as the broader framework for assistant plus specialized agents.

- `Sales Agent`
  Used as an AI employee that handles website, SMS, and email conversations with leads.

- `Homeowner Agent`
  Used to support homeowner-facing follow-up and engagement.

- `SEO Agent`
  Used to support search visibility and SEO work.

- `Social Agent`
  Used to support social content and promotion.

- `Website Building Agent`
  Used to generate a website using AI.

- `Agent Studio`
  Used to build custom AI agents with configurable prompts, tools, and behavior.

## 3. Website Features

The Website category covers Lofty's website builder, IDX system, and lead capture tools.

### Website Creation and Templates

- `Agent Websites`
  Used to create an individual agent site.

- `Vanity Domain Sites`
  Used to create branded lead capture sites on custom domains.

- `Full SEO Sites`
  Used to create content-rich sites with stronger search visibility.

- `Team / Office / Company Websites`
  Used to create broader organizational web properties.

- `Website Template Library`
  Used to choose prebuilt website designs.

- `Theme, Color, and Font Settings`
  Used to control brand styling.

- `Custom Fonts`
  Used to apply brand typography.

- `Advanced Customization`
  Used for deeper site-level customization.

### Website Builder and Content Editing

- `Page Editor`
  Used to create and edit site pages.

- `Navigation Editor`
  Used to control the website menu.

- `Save / Restore Website Versions`
  Used to roll back site changes.

- `Header, Footer, and Logo`
  Used to manage main brand elements.

- `Favicon`
  Used to customize the browser tab icon.

- `Pages`
  Used to manage standard pages like Home, About, Sell, Reviews, and Contact.

- `Blank Pages and Link Pages`
  Used to add custom content or external navigation.

- `QR Codes`
  Used to share site or page links offline.

### Block Library

- `Hero Block`
  Used for top-of-page branding and call-to-action.

- `Quick Search Block`
  Used to let visitors search listings quickly.

- `Contact Block`
  Used to capture inquiries.

- `Reviews Block`
  Used to show social proof.

- `Featured Areas Block`
  Used to highlight neighborhoods or markets.

- `Listing Blocks`
  Used to show property inventory inside pages.

- `Content Block`
  Used for general text and media content.

- `Media / Embed Blocks`
  Used to add videos, tools, or external embeds.

- `Guide / Group / Vendor Blocks`
  Used to structure richer page content.

- `Market Trend / Market Snapshot Blocks`
  Used to show real estate market information.

- `Logo Wall / Company Intro / Agent Blocks`
  Used for branding and credibility.

### Lead Capture Tools

- `Registration Pop-Ups`
  Used to ask website visitors to register.

- `Questionnaire Settings`
  Used to collect more information when someone signs up.

- `Form Block`
  Used to place lead capture forms on pages.

- `Webchat`
  Used to talk to visitors live or with AI-assisted chat.

- `Home Valuation Page`
  Used to capture seller leads.

- `Mortgage / Affordability Calculator`
  Used to engage buyers with financial tools.

- `Reviews Integration`
  Used to show outside review sources like Google and Zillow.

### IDX and Listing Website Features

- `MLS Connection`
  Used to feed IDX listing data into the site.

- `MLS Application and Compliance`
  Used to complete the approval process for IDX access.

- `Listing Search Pages`
  Used to browse inventory on the public website.

- `Property Detail Pages`
  Used to show an individual listing.

- `Listing Filter Settings`
  Used to control which listings and search options appear.

- `Global Listing Filters`
  Used to set listing filtering rules across the site.

- `External Website Widgets`
  Used to embed Lofty listings in outside websites.

- `WordPress IDX Plugin`
  Used to put Lofty listing search onto a WordPress site.

### SEO and Analytics

- `SEO Tool`
  Used to manage search optimization from inside Lofty.

- `Meta Tags`
  Used to control search result titles and descriptions.

- `Google Search Console`
  Used to monitor indexing and search visibility.

- `Google Analytics`
  Used to measure site traffic and behavior.

- `Google Tag Manager`
  Used to manage tracking scripts.

- `Facebook Pixel`
  Used for advertising and conversion tracking.

- `Bing / Meta Search Console`
  Used to monitor search performance outside Google.

- `SEO Best Practices`
  Used to guide stronger organic search performance.

- `Backlink Guidance`
  Used to improve off-page SEO.

- `Domain Change SEO Support`
  Used to reduce ranking loss when changing domains.

### Domain, SSL, and Site Operations

- `Domain Configuration`
  Used to connect a custom domain.

- `GoDaddy Domain Guide`
  Used to connect a GoDaddy-managed domain.

- `Vanity Domain Purchase`
  Used to buy branded domains.

- `SSL Certificates`
  Used to secure the website with HTTPS.

- `DNS Issue Strategy`
  Used to troubleshoot domain and DNS setup issues.

- `Website Reporting`
  Used to review website traffic and usage.

- `Blocking Spam Emails`
  Used to reduce spam submissions or unwanted email behavior.

### Website Compliance and Accessibility

- `Cookie Settings`
  Used to manage site cookie notices and consent.

- `DSAR`
  Used to support data access requests.

- `Accessibility / ADA / WCAG`
  Used to support accessible websites.

- `Security for Websites`
  Used to explain site safety and protection basics.

## 4. Mobile Features

- `Lofty Mobile App`
  Used to manage leads, tasks, messaging, and notifications on mobile.

- `Mobile Lead Management`
  Used to work lead records from the phone.

- `Mobile Notifications`
  Used to receive alerts for new leads and follow-up activity.

- `Caller Identification`
  Used to identify incoming lead-related calls on mobile.

- `Merge Leads via Mobile`
  Used to clean duplicate leads from the app.

- `Property Alerts from Mobile`
  Used to manage listing alerts while away from desktop.

- `Open House Tablet App`
  Used to collect visitor sign-ins during open houses.

- `Closely Mobile App`
  Used by clients to review transaction progress and documents.

## 5. Developer Features

- `Developer Platform`
  Used to build custom integrations with Lofty.

- `API Key Management`
  Used to create and manage API credentials.

- `OAuth 2.0 API`
  Used to connect apps securely to Lofty.

## 6. Feature Updates, Playbooks, and Support

- `Feature Updates`
  Used to see what has changed across Lofty releases.

- `Done-For-You Playbooks`
  Used to give agents ready-made marketing and communication campaigns such as Just Listed, Price Reduced, Open House, and newsletter flows.

- `Help and Troubleshooting`
  Used to solve support and setup issues.

- `Product Requests and Feedback`
  Used to submit ideas and product feedback.

- `Support Contact`
  Used to reach Lofty support directly.

## Simplified Feature Map

If you want the shortest version of what Lofty does, it is:

1. `Capture leads`
   Through websites, ads, forms, chat, valuation tools, and integrations.

2. `Organize leads`
   Through People, filters, tags, segments, routing, and lead profiles.

3. `Work leads`
   Through calls, texts, emails, tasks, appointments, and Smart Plans.

4. `Match inventory`
   Through listings, hot sheets, alerts, and listing sharing.

5. `Close deals`
   Through transactions, offers, documents, and client portals.

6. `Scale with AI`
   Through AI Assistant, Sales Agent, Agent Studio, and AI workflows.

7. `Measure results`
   Through reporting, website analytics, and source analysis.

## Notes

- This file is a feature inventory, not a step-by-step tutorial.
- Some features are role-based, add-on-based, region-based, or beta-only.
- The inventory is grouped by product area so it is easier to understand than the raw Help Center article list.
- For the most detailed source material, see [context/lofty_help_center/LOFTY_HELP_CENTER_FULL_CONTEXT.md](/Users/manaswi/Desktop/Lofty/context/lofty_help_center/LOFTY_HELP_CENTER_FULL_CONTEXT.md).

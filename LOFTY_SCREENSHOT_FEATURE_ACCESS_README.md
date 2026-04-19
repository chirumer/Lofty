# Lofty Screenshot Feature Access README

This README maps the Lofty features visible in your screenshots to:

- what the feature is used for
- what setup is required for it to work
- who can access it

It is based on the Lofty Help Center content already scraped into this workspace, especially the dashboard, guided setup, hierarchy, and lender-collaboration docs.

## Role Key

- `CO` = Company Owner
- `CA` = Company Admin
- `OO` = Office / Team Owner
- `OA` = Office / Team Admin
- `AU` = Agent / User
- `L` = Lender

## Important Note

Lofty access is not only role-based. It is also affected by:

- permission profiles
- office/team hierarchy
- purchased add-ons
- whether a lead is shared
- whether a website / MLS / communication channel has been set up

So the access notes below are the best product-level mapping from the Help Center, not a promise that every account will look identical.

---

## 1. Main Navigation Features

### `People`

- `What it is`
  The main CRM database for leads, contacts, saved filters, segments, and lead profiles.
- `What it is used for`
  Finding leads, organizing them, opening lead profiles, checking activity, and taking communication actions.
- `Setup needed`
  - Lead import or live lead capture
  - Lead ownership rules if multiple users exist
  - Segments / filters / custom fields if desired
  - Source integrations if leads are coming from outside systems
- `If nothing is required`
  Not applicable. It becomes useful only when there is lead data.
- `Who has access`
  - Full / normal: `CO, CA, OO, OA, AU`
  - Limited shared-lead view only: `L`

### `Transactions`

- `What it is`
  Lofty’s deal-management area for active transactions.
- `What it is used for`
  Tracking offers, stages, deadlines, checklists, documents, and client-facing transaction progress.
- `Setup needed`
  - Transaction workflow usage
  - Transaction records created from leads
  - Optional checklist templates and document templates
- `If nothing is required`
  No dedicated setup is required to see the menu, but it is not useful until transactions exist.
- `Who has access`
  - Full / normal: `CO, CA, OO, OA, AU`
  - Not fully shared to lender accounts: `L`

### `Calendar`

- `What it is`
  The scheduling layer for tasks, appointments, and showings.
- `What it is used for`
  Viewing scheduled work, meetings, appointments, and showing-related items.
- `Setup needed`
  - Calendar integration is recommended
  - Appointments / task workflow should be in use
- `If nothing is required`
  Can still be used without integration, but works better once calendars are connected.
- `Who has access`
  - Normal: `CO, CA, OO, OA, AU`
  - Limited / not full workflow: `L`

### `Listings`

- `What it is`
  Listing discovery, buyer matching, hot sheets, and listing-related workflow.
- `What it is used for`
  Viewing listings, matching them to leads, tracking inventory, and surfacing market changes.
- `Setup needed`
  - MLS / IDX connection
  - Listing filters or saved hot sheets if you want curated views
  - Manual or synced listing data
- `If nothing is required`
  It is not useful without listing / MLS data.
- `Who has access`
  - Normal: `CO, CA, OO, OA, AU`
  - Limited property/search visibility only in collaboration cases: `L`

### `Marketing`

- `What it is`
  The campaign and lead-generation layer.
- `What it is used for`
  Ads, listing blasts, nurture campaigns, social workflows, and marketing execution.
- `Setup needed`
  - Campaign tools turned on
  - Templates, source settings, or social/account connections depending on the feature
  - Compliance / opt-in setup for outbound communications
- `If nothing is required`
  No basic setup is required to know it exists, but each marketing sub-feature needs its own setup.
- `Who has access`
  - Usually available: `CO, CA, OO, OA, AU`
  - Normally not a lender-facing workspace: `L`

### `Reporting`

- `What it is`
  Analytics and performance reporting.
- `What it is used for`
  Activity tracking, source performance, website performance, business metrics, and team visibility.
- `Setup needed`
  - No dedicated setup beyond having data
  - Website reporting may require website traffic and connected web tools
  - Team reporting depends on hierarchy and permissions
- `If nothing is required`
  Yes. It mostly becomes valuable automatically once the platform is being used.
- `Who has access`
  - Usually available: `CO, CA, OO, OA, AU`
  - Normally not full reporting access: `L`

### `Website`

- `What it is`
  The website / IDX / CMS layer.
- `What it is used for`
  Building pages, managing domain/site content, enabling lead capture, and powering public-facing search.
- `Setup needed`
  - Website template or website type
  - Prefix or domain
  - MLS / IDX connection
  - Page editor / blocks / lead capture setup if desired
- `If nothing is required`
  No. It is setup-heavy.
- `Who has access`
  - Normal: `CO, CA, OO, OA, AU`
  - Not a lender-facing management area: `L`

### `Marketplace`

- `What it is`
  Add-ons, upgrades, and optional tools.
- `What it is used for`
  Expanding the account with extra Lofty tools and purchased features.
- `Setup needed`
  - None to browse
  - Purchase / activation needed to use add-ons
- `If nothing is required`
  Yes, for browsing only.
- `Who has access`
  - Strongest access: `CO, CA`
  - Often scoped / partial: `OO`
  - Sometimes accessible depending on add-on context: `AU`
  - Usually limited: `OA`
  - Normally not relevant: `L`

### `Settings`

- `What it is`
  Admin and configuration area.
- `What it is used for`
  Users, hierarchy, permissions, routing, communication settings, and system configuration.
- `Setup needed`
  This is where much of the setup actually happens.
- `If nothing is required`
  Not applicable.
- `Who has access`
  - Main admin access: `CO, CA, OO, OA`
  - Personal / limited settings only: `AU`
  - Very limited: `L`

---

## 2. Top-Right Utility Features

### `Search`

- `What it is`
  Global quick search.
- `What it is used for`
  Finding leads, listings, and records quickly.
- `Setup needed`
  None beyond having data in the system.
- `Who has access`
  Most signed-in operational users.

### `Notifications`

- `What it is`
  Alert center for opportunities, tasks, lead activity, and announcements.
- `What it is used for`
  Surfacing urgent or notable changes.
- `Setup needed`
  Optional notification preferences. Otherwise none.
- `Who has access`
  Most signed-in operational users.

### `Help`

- `What it is`
  Help / support / learning entry point.
- `What it is used for`
  Training, docs, and support.
- `Setup needed`
  None.
- `Who has access`
  Everyone.

### `Profile Menu`

- `What it is`
  Personal account menu.
- `What it is used for`
  Accessing user-specific account actions and profile settings.
- `Setup needed`
  Profile setup if the user wants branding / personal details completed.
- `Who has access`
  Everyone, but options vary by role.

---

## 3. Dashboard Widgets In The Screenshot

### `New Updates`

- `What it is`
  Informational dashboard card.
- `What it is used for`
  Product announcements, webinars, feature updates, and promo content.
- `Setup needed`
  Usually none.
- `If nothing is required`
  Yes. This is not setup-heavy.
- `Who has access`
  Likely most normal signed-in users.

### `Need Keep In Touch`

- `What it is`
  Relationship-maintenance widget.
- `What it is used for`
  Surfacing birthdays, follow-up reminders, and warm-relationship leads that need a personal touch.
- `Setup needed`
  - Lead/contact records
  - Birthday or follow-up data
  - Lead activity data
- `If nothing is required`
  No. It needs lead data.
- `Who has access`
  - Normal: `CO, CA, OO, OA, AU`
  - Limited lender version at best: `L`

### `Today's New Leads`

- `What it is`
  New-lead triage widget.
- `What it is used for`
  Showing fresh leads, untouched leads, source context, and response priorities.
- `Setup needed`
  - Lead sources, imports, or website capture
  - Optional automation / Smart Plans
  - People database populated
- `If nothing is required`
  No. It needs incoming lead data.
- `Who has access`
  - Normal: `CO, CA, OO, OA, AU`
  - Only limited if leads are shared: `L`

### `Today's Opportunities`

- `What it is`
  Intent-signal widget.
- `What it is used for`
  Surfacing high-interest leads, back-to-site activity, likely sellers, and other priority behavior signals.
- `Setup needed`
  - Website activity or lead behavior data
  - Opportunity logic / notifications
  - Active leads in system
- `If nothing is required`
  No. It needs tracked lead behavior.
- `Who has access`
  - Normal: `CO, CA, OO, OA, AU`
  - Not typically a full lender-facing widget: `L`

### `Transactions` Widget

- `What it is`
  Deal-status dashboard widget.
- `What it is used for`
  Showing near-deadline transactions, expired items, and transaction-related urgency.
- `Setup needed`
  - Transactions created from leads
  - Dates / stages / checklists in use
- `If nothing is required`
  No. It needs active transactions.
- `Who has access`
  - Normal: `CO, CA, OO, OA, AU`
  - Not synced to lender-type accounts in the same way: `L`

### `Today's Tasks`

- `What it is`
  Daily action widget.
- `What it is used for`
  Showing calls, texts, emails, and custom tasks due today.
- `Setup needed`
  - Task workflow in use
  - Optional Smart Plans / automation
  - Optional calendar integration
- `If nothing is required`
  No. It needs task data.
- `Who has access`
  - Normal: `CO, CA, OO, OA, AU`
  - Limited for lenders because lender tasks are restricted: `L`

### `Appointments / Showings`

- `What it is`
  Scheduling dashboard widget.
- `What it is used for`
  Showing meetings, scheduled appointments, and showing requests.
- `Setup needed`
  - Appointments or showing requests
  - Calendar integration recommended
  - Website / IDX showing requests if using that flow
- `If nothing is required`
  No. It needs appointments or showing data.
- `Who has access`
  - Normal: `CO, CA, OO, OA, AU`
  - Limited lender version at best: `L`

### `My Listings`

- `What it is`
  Listing portfolio widget.
- `What it is used for`
  Showing the user’s active listings and listing-related engagement.
- `Setup needed`
  - MLS listing data or manual listings
  - Listing ownership / listing management in use
- `If nothing is required`
  No. It needs listings.
- `Who has access`
  - Normal: `CO, CA, OO, OA, AU`
  - Not a normal lender workspace: `L`

### `Hot Sheets`

- `What it is`
  Market-watch widget.
- `What it is used for`
  Surfacing saved MLS listing updates like new listings, price changes, open houses, and back-on-market inventory.
- `Setup needed`
  - MLS connection
  - Hot Sheets created or default hot sheets available
- `If nothing is required`
  Not really. It needs MLS data.
- `Who has access`
  - Normal: `CO, CA, OO, OA, AU`
  - Typically not a core lender-facing feature: `L`

---

## 4. Simplified Access View By Role

### `Company Owner`

- Can generally access all main product areas.
- Should see dashboard, People, Transactions, Calendar, Listings, Marketing, Reporting, Website, Marketplace, and Settings.
- Setup burden is highest because this role also configures company number, MLS, users, routing, communication, and database foundations.

### `Company Admin`

- Can access nearly all company-level tools.
- Usually similar to Company Owner for day-to-day configuration.
- Main difference is owner-only financial / payer / some top-level ownership controls.

### `Office / Team Owner`

- Can access office/team-scoped CRM, website, communication, routing, templates, reporting, and team operations.
- Should see most operational features, but not company-wide ownership controls.

### `Office / Team Admin`

- Can usually access most office/team-scoped operational features.
- More limited than owner on structural / ownership-sensitive settings and some add-on controls.

### `Agent / User`

- Main focus is personal CRM, communication, tasks, website, listings, automation, and reporting relevant to them.
- Should not be overloaded with admin-only routing, org hierarchy, or company controls.

### `Lender`

- Access is limited collaboration access only.
- Shared leads, notes, some profile/search/property context, and lender-safe workflows are available.
- Full communication history, IDX activity history, full transactions, main reporting, and most admin areas are not fully visible.

---

## 5. Best Redesign Takeaway

If you are simplifying Lofty, the features from the screenshot that matter most are:

- `People`
- `Today's New Leads`
- `Today's Opportunities`
- `Need Keep In Touch`
- `Today's Tasks`
- `Appointments / Showings`
- `Transactions`
- `Listings / Hot Sheets`

The features that are more secondary or can be pushed back in the UI are:

- `New Updates`
- `Marketplace`
- some `Marketing` tools
- deep `Settings`
- broad `Reporting` unless the user is a manager or owner

---

## Sources Used

Local files:

- [DASHBOARD_WIDGET_FLOW_README.md](/Users/manaswi/Desktop/Lofty/DASHBOARD_WIDGET_FLOW_README.md)
- [LOFTY_FEATURES_README.md](/Users/manaswi/Desktop/Lofty/LOFTY_FEATURES_README.md)
- [Organizational Hierarchy in Lofty](/Users/manaswi/Desktop/Lofty/context/lofty_help_center/articles/crm/team-management/4407349639067-organizational-hierarchy-in-lofty.md)
- [Company Owner Guided Setup](/Users/manaswi/Desktop/Lofty/context/lofty_help_center/articles/getting-started/getting-started-guides/48475807532699-company-owner-guided-setup-getting-started-step-by-step.md)
- [User Guided Setup](/Users/manaswi/Desktop/Lofty/context/lofty_help_center/articles/getting-started/getting-started-guides/48574168766235-user-guided-setup-getting-started-step-by-step.md)
- [Office Team Owner Admin Setup Guide](/Users/manaswi/Desktop/Lofty/context/lofty_help_center/articles/getting-started/getting-started-guides/46182047758235-lofty-office-team-owner-admin-setup-training-guide.md)
- [Lender and Agent Lead Collaboration](/Users/manaswi/Desktop/Lofty/context/lofty_help_center/articles/crm/assigning-leads-collaboration/360055290491-lender-and-agent-lead-collaboration.md)

Public Help Center URLs:

- https://help.lofty.com/hc/en-us/articles/8472031391131-Dashboard-Overview
- https://help.lofty.com/hc/en-us/articles/4407349639067-Organizational-Hierarchy-in-Lofty
- https://help.lofty.com/hc/en-us/articles/48475807532699-Company-Owner-Guided-Setup-Getting-Started-Step-by-Step
- https://help.lofty.com/hc/en-us/articles/48574168766235-User-Guided-Setup-Getting-Started-Step-by-Step
- https://help.lofty.com/hc/en-us/articles/46182047758235-Lofty-Office-Team-Owner-Admin-Setup-Training-Guide
- https://help.lofty.com/hc/en-us/articles/360055290491-Lender-and-Agent-Lead-Collaboration

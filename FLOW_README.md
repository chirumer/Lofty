# Lofty Product Flow

This document maps the current Lofty product flow based on the public Lofty Help Center and related Lofty product pages.

It is meant to answer one question clearly:

`How does Lofty actually work from setup to daily usage to closing deals?`

## Purpose

Lofty is not just a CRM and not just a website builder.

It is a connected real estate operating system made up of:

- a CRM for leads, communication, tasks, and transactions
- a website and IDX layer for lead capture
- a marketing layer for traffic and nurture
- an AI layer that can assist, automate, or execute parts of the workflow

The Help Center shows that Lofty has many features, but they are spread across multiple categories. This README turns that documentation into one understandable flow.

## Product Layers

The easiest way to understand Lofty is in six layers:

1. `Setup`
2. `Lead Capture`
3. `Lead Management`
4. `Communication and Automation`
5. `Conversion and Transactions`
6. `AI and Optimization`

## Core System Objects

The platform revolves around a few main objects:

- `Lead`
- `Website`
- `Listing`
- `Task`
- `Appointment`
- `Segment`
- `Pipeline Stage`
- `Smart Plan`
- `Transaction`
- `AI Agent`

Most screens are different views or workflows around these objects.

## End-to-End Flow

## 1. Account Setup

The first experience starts with guided setup.

Based on the current setup docs, a user is expected to:

- complete their profile
- link social accounts
- create or activate their website
- connect MLS feeds
- connect email
- connect calendar
- import existing leads
- connect third-party lead sources
- turn on automation

This is the current setup sequence:

1. `Profile Setup`
2. `Website Setup`
3. `Communication Setup`
4. `Database Setup`
5. `Automation Setup`

This setup is important because many later features depend on it:

- website activity tracking depends on the website being active
- email features depend on email integration
- calendar and appointments depend on calendar setup
- listing and property alerts depend on MLS setup
- automation depends on leads being imported and organized

## 2. Website and IDX Setup

The website is Lofty's main lead capture surface.

Lofty supports different site types:

- `Agent Website`
- `Vanity Domain Site`
- `Full SEO Site`
- `Company Website`
- `Team Website`
- `Office Website`

The website layer includes:

- AI website generation
- manual template selection
- CMS editing
- navigation editing
- pages and blocks
- blog
- SEO tools
- listing filters
- domain and SSL configuration
- registration popups
- home valuation pages
- website chat

The website flow is roughly:

1. Choose site type
2. Generate with AI or build with template
3. Review profile and branding
4. Publish site structure
5. Connect domain
6. Connect MLS
7. Configure lead capture settings
8. Configure chat, forms, popups, and valuation tools

## 3. Lead Capture

Leads can enter Lofty through multiple channels.

Main lead capture paths include:

- website registration
- website chat
- home valuation requests
- listing inquiries
- showing or tour requests
- landing pages
- Facebook ads
- Google and Bing PPC ads
- Google LSA
- third-party integrations
- CSV or contact imports
- manual lead entry

The website and marketing layers feed new contacts into the CRM.

## 4. Dashboard Entry Point

After login, the user typically lands on the dashboard.

The dashboard is a summary layer, not the main system of record.

It shows cards like:

- New Updates
- Need Keep In Touch
- Today's New Leads
- Today's Opportunities
- Transactions
- Today's Tasks
- Appointments and Showings
- My Listings
- Hot Sheets

The dashboard helps the user notice what needs attention, but actual work usually happens in other modules.

## 5. Lead Management

The `People` area is the operational core of Lofty.

This is where agents:

- view all leads
- switch between lead views
- use filters
- organize leads by pipeline stage
- organize leads into segments
- open lead profiles
- import and export leads
- merge duplicates
- assign ownership
- manage privacy

### People Page

The People Page supports:

- `All Leads`
- `My Leads`
- `Lead Pond`
- `Partial Leads`
- custom views
- filters
- saved views
- editable columns
- segment views

Prebuilt view ideas include:

- not replied to today
- not replied this week
- email activity
- call activity
- text activity
- active website browsing
- birthday this month
- Lofty paid leads

### Lead Profile

The lead profile is one of the most important pages in the entire platform.

A lead profile includes:

- contact info
- lead type
- assignment
- pipeline stage
- segments
- call / text / email actions
- activities timeline
- notes
- saved searches
- properties
- transaction links
- documents
- automations

This is where the agent gets full context before deciding what to do next.

## 6. Communication and Follow-Up

Lofty has a large communication layer built around leads.

It includes:

- direct calling
- direct texting
- direct email
- group texting
- mass emails
- mass texts
- email templates
- text templates
- questionnaires
- call scripts
- call lists
- virtual numbers

Important constraints also exist:

- some calling and texting features require paid packages
- DNC and phone validity affect automation eligibility
- email features depend on integration setup

## 7. Tasks, Appointments, and Calendar

Tasks in Lofty are tied to leads.

This means the task system is not a standalone to-do app. It is connected to relationship management.

Users can:

- create tasks manually
- create appointments
- view all tasks in one task page
- use filters by task type, pipeline, and task origin
- manage tasks from lead records
- view calendar events
- set reminders
- configure working hours
- use scheduling links
- sync third-party calendars

The calendar can surface:

- tasks
- appointments
- showings
- lead birthdays
- transaction dates
- integrated calendar events

## 8. Automation

Lofty automates follow-up primarily through `Smart Plans`.

A Smart Plan can combine:

- scheduled emails
- scheduled texts
- call tasks
- other task steps

Users can:

- create their own Smart Plans
- import templates from the library
- auto-apply plans
- apply plans to segments
- trigger plans based on conditions
- organize plans by personal, office, or company scope

This is one of the major scaling tools in the product.

## 9. Listings and Search Intelligence

Lofty also includes a listings workspace inside the CRM.

Main listing-related features include:

- MLS listing discovery
- listing search
- hot sheets
- buyer matching
- listing sharing by text or email
- smart listings
- listing agent contact details when available
- property alerts and market snapshots

This part of the system connects website activity and lead preferences to active inventory.

A common pattern is:

1. Lead browses listings
2. Lofty records interest and preferences
3. Agent sees matched listings or hot sheets
4. Agent sends relevant properties
5. System continues nurturing via alerts and follow-up

## 10. Marketing

Lofty includes a marketing layer for generating and nurturing demand.

This includes:

- Facebook landing page ads
- Google and Bing PPC
- Google LSA
- branding tools
- design center
- postcards and letters
- listing blasts
- zip code blasts
- social tools
- geographic farming

Marketing in Lofty is not completely separate from CRM. It is connected to leads, source tracking, website traffic, and follow-up.

## 11. Transactions

Once a lead turns into an active deal, the workflow moves into the transaction layer.

Main transaction capabilities include:

- transaction records
- deadlines and checklist tracking
- offer management
- document templates
- document uploads
- transaction checklists
- vendor and partner management
- client-facing transaction portal

### Offer Management

Lofty supports:

- offer links for listing-side submission
- buyer-side offer tracking
- AI-assisted offer comparison
- status management
- automated notifications

### Transaction Documents

Users can:

- create reusable PDF-based document templates
- add autofill fields
- attach templates to transactions

### Lead Portal

Through the Closely app, clients can:

- view transaction progress
- see approved documents
- e-sign forms
- upload their own files

This helps move Lofty beyond simple CRM into client-facing operations.

## 12. Reporting and Optimization

Lofty includes reporting across both operations and website performance.

Examples include:

- business summary
- agent activity metrics
- activity timeline
- accountability leaderboard
- email reporting
- reporting page metrics
- website site report

The website side also includes monthly reporting around traffic and conversion behavior when there are active leads.

## 13. Mobile and Companion Apps

Lofty includes a mobile app for agents and Closely for clients.

The mobile stack supports:

- managing leads
- notifications
- property alerts
- merging leads
- open house workflows
- client transaction visibility via Closely

This extends Lofty outside the desktop CRM.

## AI Layer Across The Product

Lofty's AI features are spread across multiple parts of the product.

They are not just one chatbot.

## 1. AI Assistant

AI Assistant is the main embedded conversational assistant.

It can help with:

- daily recommendations
- lead prioritization
- lead filtering
- message drafting
- replying to texts and emails
- task scheduling
- appointment scheduling
- property search
- listing insertion
- call summaries
- product questions
- ticket updates
- feedback submission
- web search
- file upload
- offline tasks

## 2. AI Multi-Step Tasks

AI can generate follow-up plans made of:

- AI emails
- AI texts
- call reminders

These can pause automatically if the lead replies.

## 3. Sales Agent

The AI Sales Agent works across:

- website chat
- SMS
- email

Its goal is to:

- capture leads
- qualify them
- complete missing profile info
- keep conversations alive
- hand warm leads to the assigned agent

## 4. Website Building Agent

The Website Building Agent can:

- gather public profile information
- draft a marketing profile
- generate a website layout
- write content
- choose a template
- add imagery

The user reviews and approves before finalizing.

## 5. Agent Studio

Agent Studio allows teams to build custom agents with:

- model selection
- prompt configuration
- tool selection
- memory depth
- web search
- preview and debugging

This is a deeper AI power-user layer and is currently beta.

## 6. Other AI Agents Listed In Lofty

The Help Center also shows:

- Homeowner Agent
- SEO Agent
- Social Agent

Together, these confirm that Lofty is trying to become an AI-native operating system rather than a traditional CRM with one assistant.

## Navigation Mapping

The Help Center taxonomy and the product top nav are not identical, but the likely product mapping looks like this:

### `People`

- leads
- views
- segments
- pipeline
- lead profiles
- imports and exports

### `Transactions`

- offers
- checklists
- documents
- portals
- vendors and templates

### `Calendar`

- tasks
- appointments
- reminders
- working hours
- schedule views

### `Listings`

- all listings
- hot sheets
- buyer matching
- smart listings
- property alerts

### `Marketing`

- ads
- postcards
- design center
- social tools
- campaigns
- Smart Plans

### `Reporting`

- business metrics
- agent activity
- email reporting
- site reports

### `Website`

- site list
- CMS
- pages
- SEO
- domains
- listing filters
- chat and forms
- MLS connection

### `Marketplace`

- AI Assistant
- website packages
- other purchasable upgrades and add-ons

### `Settings`

- profile
- permissions
- notifications
- billing
- templates
- transaction settings
- integrations

## Simplified Product Story

If Lofty were explained in one simple sentence, it would be:

`Capture leads, understand them, follow up automatically, recommend the next best action, and help the agent move them all the way to a closed transaction.`

The practical business flow is:

1. Build website and lead capture channels
2. Bring in leads
3. Organize and qualify leads
4. Communicate and automate follow-up
5. Use listings and alerts to maintain engagement
6. Schedule calls, tasks, tours, and appointments
7. Move hot leads into offers and transactions
8. Manage documents and client collaboration
9. Measure activity and optimize performance

## What Matters Most For UX Simplification

If the goal is to simplify Lofty for agents, the most important parts of the product are:

- lead capture status
- lead priority
- conversation state
- next best action
- task and appointment urgency
- listing match relevance
- transaction progress

The least important things to surface on the primary home screen are:

- documentation links
- low-frequency configuration tools
- admin-heavy settings
- complex reporting for first-time users
- advanced marketing controls

## Key Product Insight

The Help Center suggests that Lofty has already built many of the right capabilities.

The UX challenge is not lack of features.

The UX challenge is that users still have to:

- know where each feature lives
- understand which tool to use first
- mentally stitch together CRM, website, communication, and AI
- translate system capability into a daily workflow

That is the core opportunity for an AI-native redesign.

## Source Notes

This flow is based primarily on the following public Lofty resources:

- Lofty Help Center home: <https://help.lofty.com/hc/en-us>
- User Guided Setup: <https://help.lofty.com/hc/en-us/articles/48574168766235-User-Guided-Setup-Getting-Started-Step-by-Step>
- Lofty Agent User Setup Guide: <https://help.lofty.com/hc/en-us/articles/360054969331-Lofty-Agent-User-Setup-Training-Guide>
- Dashboard Overview: <https://help.lofty.com/hc/en-us/articles/8472031391131-Dashboard-Overview>
- People Page: <https://help.lofty.com/hc/en-us/articles/21282508051227-People-Page>
- Lead Profile Page: <https://help.lofty.com/hc/en-us/articles/360055290591-Lead-Profile-Page>
- Add a Lead: <https://help.lofty.com/hc/en-us/articles/360038382932-Add-a-Lead>
- Smart Plan Builder: <https://help.lofty.com/hc/en-us/articles/45537578767643-Smart-Plan-Builder>
- Task Management: <https://help.lofty.com/hc/en-us/articles/360017514112-Task-Management>
- Lofty Calendar: <https://help.lofty.com/hc/en-us/articles/6582612402715-Lofty-Calendar>
- All Listings and Hot Sheets: <https://help.lofty.com/hc/en-us/articles/360002361751-All-Listings-Hot-Sheets>
- Offer Management: <https://help.lofty.com/hc/en-us/articles/4412776507163-Offer-Management>
- Transaction Lead Portal: <https://help.lofty.com/hc/en-us/articles/48972164737435-Transaction-Lead-Portal>
- Transaction Document Templates: <https://help.lofty.com/hc/en-us/articles/37425534313115-Transaction-Document-Templates>
- Start your Lofty IDX Website: <https://help.lofty.com/hc/en-us/articles/360054969871-Start-your-Lofty-IDX-Website>
- Websites on Lofty: <https://help.lofty.com/hc/en-us/articles/37950239399451-Websites-on-Lofty>
- Website Options: <https://help.lofty.com/hc/en-us/articles/360055394331-Understanding-Website-Options-Agent-Websites-vs-Vanity-Domain-Sites-vs-Full-SEO-Sites>
- Chat Box Settings: <https://help.lofty.com/hc/en-us/articles/360038610171-Chat-Box-Settings>
- AI Assistant: <https://help.lofty.com/hc/en-us/articles/33090360187675-AI-Assistant>
- AI Assistant Multi-Step Tasks: <https://help.lofty.com/hc/en-us/articles/40528908682907-Using-AI-Assistant-Multi-Step-Tasks>
- AI Sales Agent: <https://help.lofty.com/hc/en-us/articles/39659584983067-Getting-Started-with-AI-Sales-Agent>
- Agent Studio: <https://help.lofty.com/hc/en-us/articles/46003047603867-Getting-Started-with-Lofty-Agent-Studio>
- Website Building Agent: <https://help.lofty.com/hc/en-us/articles/46049898651291-How-to-Create-Your-Website-with-the-Website-Building-Agent>
- Lofty AOS overview: <https://lofty.com/aos>

## Notes

- Some features are role-based and permission-based.
- Some AI features are beta and may not be available to every user.
- Some communication features depend on paid call or text packages.
- Website behavior depends on the website type and MLS configuration.

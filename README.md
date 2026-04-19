# Lofty Reimagined

A Lofty-inspired CRM prototype focused on one core idea:

**make setup, daily work, and feature discovery much simpler for real estate agents and admins.**

This project redesigns the Lofty experience into a more guided, teachable workflow by combining:

- role-based onboarding
- tab-by-tab platform setup
- an explainable AI guide / mascot
- a workflow-first dashboard
- Smart Plans exploration
- negotiation assistance concepts

## Problem

This prototype is built around three main product problems surfaced across the Lofty Help Center research, the CRM screenshots, and the hackathon framing:

### 1. Overwhelming Website / CRM Surface
Agents often land on a dense widget wall or a large feature set with no clear sense of:

- what matters first
- what to set up now
- what can wait
- where key tools live

The result is slower onboarding, weaker adoption, and more time spent searching than acting.

### 2. Feature Discovery Failure
Lofty has a broad set of useful tools, but many of them are hidden behind menu layers, settings, or specific workflows.

That creates a common problem:

- users do not know what a feature does
- users do not know whether they need it
- users do not know what information is required to configure it
- advanced tools stay unused because they are learned too late

### 3. Blind Negotiation / Workflow Gaps
During transactions and deal motion, users need more contextual guidance:

- where a conversation stands
- what action should happen next
- what to send
- what should be automated

Without that, the experience feels operationally fragmented.

## Solution Overview

The project is organized into four major solution components.

### 1. Guided Onboarding
Instead of exposing the whole platform at once, the app starts with role selection and then reveals only the tabs and features that make sense for that role.

The goal is:

- reduce setup anxiety
- teach the product while configuring it
- hide irrelevant complexity
- make the user build their platform one tab at a time

### 2. Simplified Dashboard
The old dashboard pattern was replaced with a workflow-first dashboard.

Instead of a flat wall of widgets, the launched home page now emphasizes:

- **Next Best Action**
- **Today’s Flow**
- **Must Do Soon**
- supporting side panels like appointments, pipeline, inventory, and updates

This turns the homepage into a guided daily work surface rather than a reporting wall.

### 3. AI Guide / Mascot
Each feature in the builder has an `Explain` action.

The guide helps users understand:

- what the feature does
- why it matters
- what setup is needed
- whether it is required for their role
- whether it can be skipped for now

The guide also supports freeform questions so users can ask about any visible feature in simple English.

### 4. Smart Plans + Negotiation Concepts
The prototype also explores deeper operational flows:

- a Lofty-style Smart Plans builder
- variable population for reusable message tokens
- communication automation concepts
- negotiation-oriented workspace ideas

These pieces show how setup can connect directly to execution later in the CRM.

## Main Product Components

### Role-Based Setup Builder
The `Build your platform` flow is the main setup experience.

It includes:

- role selection first
- tab library on the left
- one active tab workspace in the center
- per-feature enable / configure flow
- `Build` action per tab
- final `Launch website` step

Core tabs in the builder:

- CRM
- Sales
- Marketing
- Content
- Automation
- Reporting
- Marketplace
- AI Copilots

Each tab contains role-aware subfeatures derived from the Lofty screenshots and Help Center research.

### Explainable Feature Setup
Every feature can be explained before it is enabled.

This is important because the project is not just trying to reduce clicks. It is trying to reduce uncertainty.

The guide is meant to answer:

- What is this?
- What do I need to set up?
- Can I skip this?
- Who can use this?

### Launched Workspace
After launch, the user lands in a Lofty-style shell with:

- top navigation
- dashboard home
- People workspace
- Listings / websites areas
- Smart Plans area
- negotiation-related surfaces

The goal is to show that the setup builder is not separate from the product. It builds into the product.

## Dashboard Design

The restored dashboard uses a guided workflow model instead of a traditional equal-weight widget grid.

### Primary sections

- **Next Best Action**
  Shows the single most recommended task to do now.

- **Today’s Flow**
  Lists work in the order it should happen during the day.

- **Must Do Soon**
  Shows work that matters, but does not need to interrupt the current queue.

- **Appointments / Showings**
  Keeps upcoming meetings visible and sorted by time.

- **Background Panels**
  Pipeline, inventory, and updates remain accessible but visually secondary.

### Workflow behavior

- tasks are ordered by planned time
- appointments/showings can anchor the day
- completed tasks stay in the list but collapse and move downward
- the next unfinished item rises naturally to the top

This is meant to feel calm, directive, and operational.

## People Workspace

The `People` section is modeled as a Lofty-style CRM list rather than a simple contact grid.

It includes lead-management fields like:

- name
- contact info
- lead type
- source
- stage
- score
- last touch
- last reply
- communication update
- interested listing
- tags / segments
- assigned agent

This is based on the Lofty Help Center structure and the CRM mental model we mapped from the docs.

## Smart Plans

The project includes a Lofty-inspired Smart Plans workspace that demonstrates:

- plans view
- template library
- create-from-scratch flow
- trigger / condition / action builder
- action configuration drawers
- variable population flow

It also includes a custom `Populate Variable` action so reusable tokens such as `#availability#` can be created and used later in email/text actions.

This is a concept extension based on the Smart Plans research extracted from the Help Center.

## Research and Context Sources

This repo includes local research artifacts built from the public Lofty Help Center and product mapping work.

Important docs in this repo:

- [LOFTY_FEATURES_README.md](/Users/manaswi/Desktop/Lofty/LOFTY_FEATURES_README.md)
- [LOFTY_HELP_CENTER_FULL_CONTEXT.md](/Users/manaswi/Desktop/Lofty/LOFTY_HELP_CENTER_FULL_CONTEXT.md)
- [LOFTY_SCREENSHOT_FEATURE_ACCESS_README.md](/Users/manaswi/Desktop/Lofty/LOFTY_SCREENSHOT_FEATURE_ACCESS_README.md)
- [SMART_PLANS_CONTEXT.md](/Users/manaswi/Desktop/Lofty/SMART_PLANS_CONTEXT.md)

Supporting scraped context:

- [context/lofty_help_center/README.md](/Users/manaswi/Desktop/Lofty/context/lofty_help_center/README.md)

These files document:

- Lofty features
- dashboard widgets
- role access
- Smart Plans behavior
- Help Center structure

## Tech Stack

- Next.js App Router
- React
- TypeScript
- `@dnd-kit` for drag-and-drop interactions
- `lucide-react` icons

## Project Structure

High-level folders:

- [app](/Users/manaswi/Desktop/Lofty/app)
  Next.js app entry and layout
- [src](/Users/manaswi/Desktop/Lofty/src)
  main UI logic, styling, and local feature state
- [src/components](/Users/manaswi/Desktop/Lofty/src/components)
  launched shell, Smart Plans, negotiation views, AI copilots panel
- [lib](/Users/manaswi/Desktop/Lofty/lib)
  helper logic, constants, and supporting utilities
- [context](/Users/manaswi/Desktop/Lofty/context)
  local research and scraped Help Center context

Important app files:

- [app/page.tsx](/Users/manaswi/Desktop/Lofty/app/page.tsx)
- [app/layout.tsx](/Users/manaswi/Desktop/Lofty/app/layout.tsx)
- [src/App.tsx](/Users/manaswi/Desktop/Lofty/src/App.tsx)
- [src/styles.css](/Users/manaswi/Desktop/Lofty/src/styles.css)

## How To Run The Project

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 3. Build for production

```bash
npm run build
```

### 4. Run the production server

```bash
npm run start
```

## Environment Notes

There is an `.env` file locally in this workspace, but this README does not document secrets.

If you need environment-specific values:

- keep them in `.env`
- do not commit secrets
- `.env` is already ignored in [.gitignore](/Users/manaswi/Desktop/Lofty/.gitignore)

## Demo Flow

If you are presenting this project, a good flow is:

1. Start at role selection
2. Build the platform tab by tab
3. Use `Explain` on features to show the guide
4. Launch the website / workspace
5. Open the workflow dashboard
6. Open `People`
7. Open `Automation > Smart Plans`
8. Show negotiation / AI concepts if needed

## What This Prototype Is Trying To Prove

This project is not just a visual redesign.

It is trying to prove that Lofty can become:

- easier to start
- easier to learn
- easier to operate daily
- easier to trust

The central idea is:

**do not force users to learn the whole platform first. Let the product reveal itself through guided setup and guided work.**


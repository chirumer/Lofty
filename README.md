# Lofty Launchpad

An AI-native onboarding and daily command experience for Lofty that reduces setup friction, removes dashboard overload, and helps real estate agents focus only on the actions that matter.

## Overview

This project is a hackathon concept for reimagining how users first experience Lofty as an AI-native platform.

Instead of forcing agents to:

- read Help Center articles
- manually configure multiple settings pages
- scan a crowded dashboard full of widgets
- decide on their own what to do first

`Lofty Launchpad` acts as an AI setup concierge and daily operating layer.

It guides the user through setup, automates repetitive configuration steps, and then becomes a simplified home screen that highlights only the most useful actions for the agent.

## Problem

Lofty already has strong AI capabilities, but the current experience still expects the user to navigate the product like a traditional software tool.

From the current Lofty experience:

- setup requires the user to move through profile, website, MLS, email, calendar, database, and automation steps
- the Help Center remains a major dependency for learning and setup
- the dashboard presents many cards, which creates cognitive load
- users must mentally prioritize what matters first

This creates a gap between Lofty's AI promise and the user’s actual first experience.

## Proposed Solution

Build a single AI-first entry point that does two jobs:

1. Set up the agent with minimal effort
2. Tell the agent what to do next every day

The product behaves more like a guided AI operating system than a documentation-heavy CRM.

## Core Concept

`Lofty Launchpad` has two phases:

### 1. AI Setup Concierge

The user is greeted by a simple conversational setup flow.

Instead of reading multiple guides, the agent answers a few short questions:

- Are you a solo agent, team agent, or admin?
- Do you focus on buyers, sellers, or both?
- Which market and MLS do you work in?
- Where do your leads come from?
- What is your top goal: faster response, better organization, or more automation?

The AI then creates a setup plan and completes as much of the work as possible on the user’s behalf.

Example setup checklist:

- Build profile
- Connect website and MLS
- Connect email and calendar
- Import leads
- Clean and tag database
- Turn on AI follow-up

### 2. Simplified Daily Home

After setup, the user lands on a much simpler AI-driven home.

Instead of a dense dashboard, the page focuses on:

- Top 3 priorities today
- Hot leads
- Messages needing reply
- Appointments and showings
- AI actions waiting for approval

This gives the agent a calm, guided, action-oriented workspace.

## What Makes It AI-Native

This is not just a chatbot added to an existing dashboard.

The AI is the primary interaction model:

- it asks for intent instead of requiring navigation
- it performs setup actions instead of only explaining them
- it surfaces next-best actions instead of showing raw modules
- it uses context from leads, tasks, and communications to guide daily work
- it works as an operating layer across the product

The key shift is from `tool discovery` to `goal completion`.

## Focus Only on Useful Agent Elements

The prototype should prioritize the modules that directly help agents close deals or respond faster.

### Keep Front and Center

- New leads
- Priority opportunities
- Inbox and unreplied messages
- Tasks due today
- Appointments and showings
- AI follow-up recommendations
- Action approvals

### Deprioritize or Hide

- Announcements
- Billing
- Reporting
- Community links
- Advanced marketing tools
- Admin-heavy settings unless the current user is an admin

## Mascot Concept

Add an AI mascot that acts like a calm guide, not a gimmick.

The mascot should support three modes:

- `Ask` for questions and product help
- `Do` for actions like setup, tagging, drafting, or scheduling
- `Explain` for trust, reasoning, and transparency

Example prompt:

> I’ll handle setup and surface only what needs your attention.

## Trust and Safety

Because many agents may be skeptical of AI, the system should clearly show:

- what action is being taken
- why the action matters
- what data is being used
- whether the user can approve, edit, or skip it

Example:

`I found 482 leads from your synced sources. I removed 17 duplicates and tagged 63 as warm buyers. Approve, edit, or skip?`

Trust comes from visibility and control, not just automation.

## Suggested Demo Flow

For the hackathon, the strongest demo story is:

1. Show the current pain: too many widgets, too much setup, too much documentation
2. Enter the new AI-first welcome screen
3. Let the mascot ask a few onboarding questions
4. Show AI generating and completing a setup checklist
5. Present approval checkpoints for key actions
6. Land on a simplified daily command center
7. Show one or two high-value actions being completed by AI

## Why This Entry Point

This concept focuses on onboarding plus the first daily experience because that is where trust, clarity, and habit formation begin.

If the first session feels simple, helpful, and proactive, users are more likely to believe Lofty is truly AI-native.

## Target User

The primary target user is:

- a new or overwhelmed Lofty agent
- someone who wants outcomes quickly
- someone who may not trust AI yet
- someone who does not want to learn the platform by reading documentation

## Success Metrics

If this shipped, success could be measured by:

- onboarding completion rate
- time to first value
- reduction in Help Center dependency
- faster first response to new leads
- number of AI-suggested actions accepted
- daily active usage of the AI home
- reduction in setup drop-off

## Trade-Offs

To keep the concept focused, this project intentionally does not try to redesign every part of Lofty.

Trade-offs made:

- focus on agent setup and daily priorities instead of the full platform
- prioritize high-frequency tasks over edge-case workflows
- simplify the interface rather than expose every available feature
- use approval-based automation to balance speed and trust

## What to Build Next

With more time, the next steps would be:

- role-based experiences for admin, team owner, and individual agent
- deeper automation across transactions and listings
- personalized learning mode based on user behavior
- voice-based AI guidance
- full action history and explainability logs

## Submission Notes

This README can also support the hackathon design rationale by explaining:

- why this entry point was chosen
- who the target user is
- why the concept is AI-native
- how trust is built
- what was intentionally cut
- how success would be measured

## Reference Sources

The concept is grounded in the current public Lofty materials:

- Lofty Help Center: <https://help.lofty.com/hc/en-us>
- Guided setup article: <https://help.lofty.com/hc/en-us/articles/48574168766235-User-Guided-Setup-Getting-Started-Step-by-Step>
- Dashboard overview: <https://help.lofty.com/hc/en-us/articles/8472031391131-Dashboard-Overview>
- AI Assistant: <https://help.lofty.com/hc/en-us/articles/33090360187675-AI-Assistant>
- AI Sales Agent: <https://help.lofty.com/hc/en-us/articles/39659584983067-Getting-Started-with-AI-Sales-Agent>
- Lofty AOS overview: <https://lofty.com/aos>

## AI Tools Used

This concept was developed with AI assistance for:

- problem framing
- product strategy
- UX direction
- README drafting
- organizing the design rationale into a presentable structure

# Lofty Smart Plans Context

This file consolidates the Smart Plan-related documentation found in the local Lofty Help Center scrape and explains how Smart Plans work in Lofty in plain English.

## What Smart Plans Are

Lofty Smart Plans are Lofty's lead-nurturing automation system. A Smart Plan combines:

- automated emails
- automated texts
- manual tasks
- branching logic
- lead updates
- optional integrations

The goal is to keep leads moving through follow-up without the user manually doing every step.

In Lofty, Smart Plans are closer to a workflow builder than a simple drip campaign tool.

## Where Smart Plans Live

Main location:

- `Automation > Smart Plans`

Supporting places:

- `People` page for mass apply / mass remove / mass pause / mass resume
- lead profile for per-lead Smart Plan management
- Smart Plan Library for templates

## How Smart Plans Work In Lofty

### 1. Choose the plan scope

When creating a Smart Plan, the user first chooses the scope:

- `My Smart Plans`
- `Office Smart Plans`
- `Company Smart Plans`

What that means:

- `My Smart Plans` are personal and only usable by the user who created them.
- `Office Smart Plans` are shared within an office and sub-offices if applicable.
- `Company Smart Plans` are shared across the whole company.

Permissions matter here. Office and Company plans can only be edited by users with the right template-management permissions.

### 2. Configure plan settings

Before building the workflow, Lofty asks for the core rules:

- plan name
- plan scope
- target lead type
- auto-apply
- auto re-apply
- auto-pause conditions

#### Target lead type

Lofty supports multiple lead-type matching modes:

- `Equals To`
- `Include All`
- `Include One Of`

This controls exactly which leads qualify for the plan.

### 3. Set how the Smart Plan starts

The next layer is the trigger. This determines when the plan should apply.

Lofty supports two main trigger families:

- lead-based triggers
- event/date-based triggers

#### Lead-based triggers

Examples:

- lead created
- lead assignment changed
- pipeline changed
- tag changed
- segment changed
- contact permission changed
- website activity
- lead meets specified criteria

#### Event or date-based triggers

Examples:

- communication event
- holiday
- lead date
- transaction date
- fixed calendar date

This is why Smart Plans are powerful in Lofty: they can be used both for new-lead automation and for milestone-based follow-up.

### 4. Add timing and branching logic

In Lofty, actions run immediately unless a condition delays or branches them.

Core condition types:

- `Wait a Period of Time`
- `Wait Until a Specific Date`
- `Branch`
- `Wait Until an Event`

#### Branching

Branching supports:

- `AND` logic
- `OR` logic
- ordered checks
- a default fallback branch

This lets one Smart Plan split into different paths depending on lead behavior or lead data.

#### Event waits

Lofty can pause until something happens, such as:

- email opened
- email replied
- email bounced
- text replied
- call behavior
- lead meets condition

This is how Smart Plans become behavior-aware instead of just time-based.

### 5. Add actions

Actions are what the Smart Plan actually does.

#### Communication actions

- auto email
- auto text
- postcard
- letter
- notification
- buyer property alert

#### Task actions

- email task
- text task
- call task
- custom task
- checklist

#### Lead update actions

- change pipeline
- change segment
- change tag
- reassignment group
- add note

#### Automation / integration actions

- start another Smart Plan
- trigger Zapier Zap
- Slybroadcast ringless voicemail

#### AI actions

- Sales Agent action
- AI Classifier
- AI Generator
- AI Summarizer
- AI Extractor

So the real Smart Plan model is:

`trigger -> condition(s) -> action(s) -> more condition(s) -> more action(s)`

### 6. Apply the plan

A Smart Plan can be applied in two ways:

- automatically
- manually

#### Auto-apply

If `Auto-Apply` is on, Lofty applies the Smart Plan to leads that match the trigger and criteria.

#### Auto Re-apply

If `Auto Re-apply` is also on, Lofty can apply the same plan to a lead again after it has already run, as long as the lead matches the trigger conditions again.

#### Manual apply

Users can manually apply Smart Plans:

- from the `People` page in bulk
- from the lead profile individually

### 7. Pause, resume, or remove

Smart Plans do not always run uninterrupted. Lofty supports:

- manual pause
- mass pause
- manual resume
- mass resume
- per-lead removal
- remove from all leads

Auto-pause can happen because of plan settings or system conditions.

#### Auto-pause settings

A Smart Plan can pause automatically when:

- the lead replies
- the lead reaches out
- the lead is added to a segment
- an outbound call is logged as `talked`
- the lead's pipeline changes
- trigger tags are removed
- the lead source changes

#### System pause examples

- daily text limit reached
- too many bounced emails
- invalid phone or email
- assignee inactive
- missing variable data
- inactive or missing website for website-based variables
- delivery/system exceptions

## Smart Plan Limits And Behavior

From the Smart Plan FAQ:

- a Smart Plan can have up to `80` steps
- behavior-based triggers do not repeatedly fire forever by default
- many website behavior triggers behave like `OR`, not `AND`
- if a pending Smart Plan-generated task exists and the plan is edited, that task may be deleted and recreated
- if auto texts hit the daily text limit, the plan pauses and usually resumes the next day
- automated texts include opt-out language for compliance

## Why Smart Plans Sometimes Do Not Apply

Common reasons Lofty gives:

- lead type does not match target lead type rules
- auto-apply is off
- trigger conditions do not actually match the lead
- website activity trigger has some delay before being recognized

## Why Smart Plan Messages Sometimes Do Not Send

Common reasons from the docs:

- daily text limit reached
- lead unsubscribed from Smart Plans
- email is bounced or invalid
- phone number is invalid
- too many emails rejected

Important behavior:

- if email or phone data is bad, Lofty may skip that step and continue to the next one

## Editing A Smart Plan After It Is Live

Lofty does not always restart leads from the top.

If you edit a part of the plan that a lead has not reached yet:

- that lead will hit the updated step later

If you edit a part the lead already passed:

- the lead does not go backward and replay it

If you remove the Smart Plan from a lead:

- it does not auto-apply again unless re-added or auto re-apply conditions are met

## AI Smart Plans Workflow

Lofty also has AI actions inside Smart Plans. The scraped AI Smart Plan workflow doc describes four AI action types:

- `AI Classifier`
- `AI Generator`
- `AI Summarizer`
- `AI Extractor`

### AI Classifier

Used to categorize lead intent or message tone from lead communication. It can feed branch logic.

Example:

- if latest text is positive, send one path
- if latest text is negative, send another path

### AI Generator

Generates an email or message based on:

- tone
- instructions
- lead variables
- communication history
- prior AI output

### AI Summarizer

Condenses long emails, texts, calls, or other AI output into short bullet-point summaries.

### AI Extractor

Pulls structured data out of conversations, such as:

- name
- budget
- timeline
- location

The doc notes this feature is in beta and may not be available to all accounts.

## Zapier + Smart Plans

Lofty lets a Smart Plan step trigger a Zapier workflow.

How it works:

1. Add `Zapier Zap` as a Smart Plan action.
2. Lofty generates a unique `Zap Trigger ID` for that step.
3. In Zapier, use Lofty as the trigger app.
4. Choose `Smart Plan Action`.
5. Paste the `Zap Trigger ID`.
6. Build the downstream Zap in Zapier.

This effectively lets Smart Plans trigger actions outside Lofty.

## Slybroadcast + Smart Plans

Lofty can also use Smart Plans to send ringless voicemail through Slybroadcast.

Important details from the integration doc:

- Slybroadcast must be connected in `Settings > Integrations`
- Smart Plan Slybroadcast support is only for `My Smart Plan`
- if voicemail delivery fails, Lofty converts that step into a `Call` task for manual follow-up
- Lofty sends error notifications for abnormal cases like bad credentials, low usage balance, or missing voice templates

## Lender Limitations

Smart Plans behave differently for lender collaboration.

According to the lender collaboration doc:

- Smart Plans are not synced from the agent side to the lender side
- lenders can only apply Smart Plans built in their own lender-type account
- tasks between lender and agent accounts cannot be assigned, including Smart Plan-generated tasks

So Smart Plans are not a fully shared cross-role automation surface in lender collaboration.

## Related Smart Plan Building Blocks

Some adjacent docs materially affect Smart Plans:

- `Text Templates`
  Text templates can be reused inside Smart Plans.
- `Call or Text Packages`
  Auto texts depend on the user's texting package and daily limits.
- `Spam, Bounced, Phishing, and Unsafe Emails`
  Email deliverability issues directly affect Smart Plan email steps.
- `Open House Forms`
  Smart Plans are often used to automate follow-up for captured open house leads.

## Best Plain-English Summary

If you had to explain Smart Plans in one sentence:

Lofty Smart Plans are rule-based automation workflows that apply to leads when certain events happen, wait or branch based on logic, then send communications, create tasks, update lead data, or trigger integrations until the nurture sequence is complete or paused.

If you had to explain the user flow:

1. Pick the plan scope.
2. Decide which leads it should target.
3. Choose how the plan starts.
4. Add waits, branches, and event logic.
5. Add emails, texts, tasks, lead updates, AI actions, or integrations.
6. Turn on auto-apply if desired.
7. Monitor, pause, resume, edit, or remove it from leads later.

## Core Smart Plan Docs Extracted

### 1. Smart Plan Builder

- Local file: `context/lofty_help_center/articles/crm/smart-plan/45537578767643-smart-plan-builder.md`
- Source URL: `https://help.lofty.com/hc/en-us/articles/45537578767643-Smart-Plan-Builder`
- What it covers:
  - where Smart Plans live
  - plan scope
  - target lead type
  - auto-apply / auto re-apply
  - auto-pause
  - triggers
  - conditions
  - actions
  - editing
  - applying / removing / pausing / resuming

### 2. Smart Plans FAQs

- Local file: `context/lofty_help_center/articles/crm/smart-plan/4419016941083-smart-plans-faqs.md`
- Source URL: `https://help.lofty.com/hc/en-us/articles/4419016941083-Smart-Plans-FAQs`
- What it covers:
  - step limits
  - timing rules
  - resubscribe behavior
  - recurring behavior
  - task recreation after edits
  - why plans fail to apply
  - why texts/emails fail
  - auto-pause reasons
  - manual vs mass resume
  - opt-out handling

### 3. Zapier Zaps + Smart Plans

- Local file: `context/lofty_help_center/articles/crm/smart-plan/4414537621275-zapier-zaps-smart-plans.md`
- Source URL: `https://help.lofty.com/hc/en-us/articles/4414537621275-Zapier-Zaps-Smart-Plans`
- What it covers:
  - using Smart Plan steps to trigger Zapier
  - Zap Trigger ID
  - Lofty `Smart Plan Action` trigger in Zapier

### 4. AI Smart Plans Workflow

- Local file: `context/lofty_help_center/articles/crm/ai-smart-plan-workflows/45958201968411-ai-smart-plans-workflow.md`
- Source URL: `https://help.lofty.com/hc/en-us/articles/45958201968411-AI-Smart-Plans-Workflow`
- What it covers:
  - AI classifier
  - AI generator
  - AI summarizer
  - AI extractor

## Related Docs That Affect Smart Plans

### Lender and Agent Lead Collaboration

- Local file: `context/lofty_help_center/articles/crm/assigning-leads-collaboration/360055290491-lender-and-agent-lead-collaboration.md`
- Smart Plan impact:
  - lender-side Smart Plans are separate from agent-side Smart Plans
  - Smart Plan-generated tasks are not assignable between lender and agent accounts

### Slybroadcast Integration

- Local file: `context/lofty_help_center/articles/getting-started/crm-integrations/40530886539803-slybroadcast-integration.md`
- Smart Plan impact:
  - Smart Plans can send ringless voicemail
  - failed deliveries turn into call tasks

### Text Templates

- Local file: `context/lofty_help_center/articles/crm/texting/4402878822285-text-templates.md`
- Smart Plan impact:
  - templates can be reused in Smart Plan texts
  - welcome texts are global, while Smart Plan texts are better for source-specific logic

## Smart Plan-Related Article Inventory From The Local Scrape

This is the article inventory I found by searching the local Help Center index for `smart plan` / `smart plans`.

### Core docs

- `45958201968411` `AI Smart Plans Workflow` — `CRM / AI Smart Plan Workflows`
- `45537578767643` `Smart Plan Builder` — `CRM / Smart Plan`
- `4419016941083` `Smart Plans FAQs` — `CRM / Smart Plan`
- `4414537621275` `Zapier Zaps + Smart Plans` — `CRM / Smart Plan`

### Related operational docs

- `360054858692` `Adding / Removing Call or Text Packages`
- `360004120452` `Spam, Bounced, Phishing, and Unsafe Emails`
- `360054872312` `Send Mass Emails & Texts`
- `360023770952` `Open House Forms`
- `4402878822285` `Text Templates`
- `40530886539803` `Slybroadcast Integration`
- `40530843859995` `Slybroadcast Integration`
- `360055290491` `Lender and Agent Lead Collaboration`

### Other scraped docs that reference Smart Plans

- `360037126792` `Lofty Lead Generation FAQs`
- `360036238411` `Feature Updates for CRM 3.0.4, Site 3.6.8`
- `4406531387419` `Feature Updates for CRM 3.34, Site 5.22`
- `360047671172` `Feature Updates for CRM 3.8.0 and Site 4.13`
- `115002771172` `Feature Updates for CRM Version 2.3.0`
- `115003433231` `Feature Updates for CRM Version 2.3.4`
- `115003958352` `Feature Updates for CRM Version 2.3.6`
- `360000621532` `Feature Updates for CRM Version 2.3.8`
- `360000874772` `Feature Updates for CRM Version 2.4.0`
- `360001945311` `Feature Updates for CRM Version 2.4.2`
- `360002920972` `Feature Updates for CRM Version 2.4.4`
- `360003077431` `Feature Updates for CRM Version 2.4.6`
- `360004080531` `Feature Updates for CRM Version 2.4.8`
- `360007262411` `Feature Updates for CRM Version 2.5.4`
- `360012117412` `Feature Updates for CRM Version 2.5.6`
- `360014360612` `Feature Updates for CRM Version 2.5.8`
- `360016021631` `Feature Updates for CRM Version 2.6.0`
- `360018863192` `Feature Updates for CRM Version 2.6.4`
- `360024533531` `Feature Updates for CRM Version 2.7.0`
- `360025345932` `Feature Updates for CRM Version 2.7.2`
- `360028212531` `Feature Updates for CRM Version 2.7.8`
- `360028768331` `Feature Updates for CRM Version 2.8.0`
- `360029023572` `Feature Updates for CRM Version 2.8.2`
- `35577670694043` `Feature Updates for Lofty 4.23`

## Most Important Source Files

- `context/lofty_help_center/articles/crm/smart-plan/45537578767643-smart-plan-builder.md`
- `context/lofty_help_center/articles/crm/smart-plan/4419016941083-smart-plans-faqs.md`
- `context/lofty_help_center/articles/crm/smart-plan/4414537621275-zapier-zaps-smart-plans.md`
- `context/lofty_help_center/articles/crm/ai-smart-plan-workflows/45958201968411-ai-smart-plans-workflow.md`
- `context/lofty_help_center/articles/crm/assigning-leads-collaboration/360055290491-lender-and-agent-lead-collaboration.md`
- `context/lofty_help_center/articles/getting-started/crm-integrations/40530886539803-slybroadcast-integration.md`
- `context/lofty_help_center/articles/crm/texting/4402878822285-text-templates.md`

## Bottom Line

The best mental model for Lofty Smart Plans is:

- they are automation workflows, not just drip sequences
- they can start from lead events, website behavior, dates, or transactions
- they support waits, branches, and event-based logic
- they can send messages, create tasks, update lead data, trigger AI, and call external integrations
- they can pause automatically based on lead response, compliance, bad data, or delivery/system issues
- they are one of the main engines behind Lofty's follow-up automation

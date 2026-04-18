# Sales Agent Smart Leads & Playbook Settings

- Article ID: `45951611704603`
- Category: `CRM`
- Section: `Sales Agent`
- Updated: `2026-04-10T17:33:49Z`
- Source: https://help.lofty.com/hc/en-us/articles/45951611704603-Sales-Agent-Smart-Leads-Playbook-Settings

## Body

## Introduction

## Summary

- Playbook Settings
- Smart Leads View on People Page
- How to monitor the Sales Agent

## Playbook Settings

The Playbook defines how Sales Agent engages with leads at each stage of their journey. Unlike one-size-fits-all automation, the Playbook uses a goal-based methodology similar to how experienced real estate agents work. Sales Agent adapts its strategy based on where each lead is in their decision-making process.

### Where to Find Playbook Settings

1. Navigate to AI Copilots in the main menu
2. Select Sales Agent
3. Click on Settings
4. Select the Playbook tab

### The Four Playbook Goals

The Playbook is organized around four sequential goals. Each goal represents a stage in the lead qualification and conversion process:

#### Goal 1: Capture Contact Details

Objective: Convert anonymous website visitors into known leads by capturing their name and contact information.

When leads enter this goal: New visitors who land on your website and haven't yet been created as leads in your CRM.

How Sales Agent works:

- Proactive Welcome Message: Uses website chat box to send a friendly welcome message on the visitor's first visit
- Instant Auto Reply: Answers visitor messages and asks for their name and contact information

What this goal delivers:

- New Lead Created in CRM
- Tag Applied to identify the lead
- Call Task Assigned for agent follow-up

#### Goal 2: Clarify Intent & Preferences

Objective: Turn vague interest into clear, actionable signals about what the lead is looking for.

Information gathered:

- Buyer or seller intent
- Timeline for purchase/sale
- Budget range
- Location or property criteria

How Sales Agent works:

- Sends structured follow-up messages
- Adjusts cadence based on lead engagement
- Creates call tasks when human conversation would be valuable

Benefit: When you step in to call the lead, you have full context on their preferences instead of starting from zero.

#### Goal 3: Win Appointment

Objective: Make it easy for qualified leads to say "yes" to a meeting with you.

How Sales Agent works:

- Appointment-focused outreach
- Clear next-step suggestions
- Stops automatically once an appointment is booked

Key point: Sales Agent gets the lead ready and qualified; you close the loop by conducting the appointment.

#### Goal 4: Grow Long-Term Trust

Objective: Maintain relationships with leads who aren't ready to act immediately, keeping you top-of-mind for when they are.

How Sales Agent works:

- Low-touch, long-term follow-up sequences
- Periodic check-ins to gauge readiness
- Re-engages leads when they show renewed interest

### Opportunity Behavior Playbook

In addition to the four goals, Sales Agent detects Opportunity behaviors —signals of strong interest or intent—and engages appropriately. These settings determine how the AI Sales Agent reacts to specific lead behaviors.

Behavior categories:

- Missed Call: Lead attempted to call but didn't connect
- Buyer Interest: Property views, saved listings, share listing requests, tour requests, saved searches, mortgage usage, form submissions
- Seller Interest: Home evaluation requests
- Back on Market: Return visits, new inquiries from past leads

### How Each Goal Works

Each goal in the Playbook answers three key questions:

1. How does Sales Agent work in this stage? Is it doing proactive outreach or auto-reply only? What cadence and tone?
2. What does Sales Agent deliver? Tags, call tasks, appointments, and clear signals for agent intervention.
3. When does the lead move forward? What qualifies the lead for the next goal? What information must be clarified first?

This structure makes Sales Agent's behavior predictable and explainable—you always know what the AI is doing and why.

### Customization Options

Within each goal, you can configure:

- Whether proactive messaging is enabled
- Which communication channels to use (text, email, website chat)
- What tags are applied at each stage
- When call tasks are created for agent follow-up

## Smart Leads View on People Page

The Smart Leads view is a new tab on the People page that provides at-a-glance visibility into all leads being managed by Sales Agent. This view organizes leads into three priority categories, making it easy to understand which leads need your immediate attention and which ones are being actively nurtured by AI.

### Where to Find Smart Leads

Navigate to the People page and look for the Smart Leads tab. The tab displays a count of leads in each category and is marked with an AI indicator.

1. Go to Sales in the main navigation
2. Click on All Leads or My Leads
3. Select the Smart Leads tab

### Lead Status Categories

Smart Leads organizes leads into three categories based on their engagement level and required actions:

#### High Priority

What it means: These are leads actively managed by Sales Agent that require your immediate action. The AI has identified an opportunity or task that needs human intervention.

Examples of required actions:

- Making a phone call to a qualified lead
- Handling an offline appointment
- Updating lead information or preferences

What you see in this view:

- Name, Inquiries, Tags: Same as the standard CRM Lead List
- AI-Generated Summary: Quick context on the lead and their current status
- Tasks: The most recent incomplete task (Call, Appointment, or Lead Update) created by AI
- AI Suggestion: Helpful call-to-action buttons based on task type

#### AI Prospecting

What it means: These are leads actively managed by Sales Agent that require no immediate action from you. The AI is actively working these leads through the qualification process.

Criteria: Leads have shown activity within the past 30 days.

What you see in this view:

- Name, Last Visit, Activities: Same as the standard CRM Lead List
- AI-Generated Summary: Context on recent engagement and lead preferences
- AI Next Step: The most recent incomplete task in the AI's follow-up plan
- AI Goal: The Playbook goal the AI is currently working toward
- AI Suggestions: Always shows "Call with AI Script" CTA

Tip: Clicking "Call with AI Script" generates a custom call script based on the lead summary and current AI goal.

#### AI Monitoring

What it means: These are leads that require no immediate action and have not shown activity in the last 30 days. Sales Agent continues low-touch, long-term follow-up to re-engage these leads.

Criteria: Leads have had no activity within the past 30 days.

What you see in this view:

- Name, Score, Last Touch: Same as the standard CRM Lead List
- AI-Generated Summary: Overview of the lead's current status
- AI Nurturing Plan: Shows how the AI is re-engaging inactive leads
- Calls Made: Number of calls already made to the lead

### Benefits of Smart Leads View

- Clarity: Instantly see which leads need your attention versus which ones are being handled by AI
- Efficiency: Understand what needs to be done without digging through lead details
- Actionable: Complete tasks right away using AI-generated suggestions and scripts

### Best Practices

1. Prioritize High Priority leads: These leads have been qualified by AI and are ready for human engagement. Responding promptly avoids missed opportunities.
2. Monitor AI Prospecting progress: Check in on these leads periodically to see how the AI is progressing toward appointment setting.
3. Use the AI Script feature: When calling leads, use the AI-generated script for context-aware talking points.
4. Let AI handle monitoring: Leads in AI Monitoring don't need your attention unless they re-engage or are escalated to High Priority.

## How to monitor the Sales Agent

The Sales Agent is designed to notify you when a conversation is out of their scope or is making great progress and ready for your involvement. If you want to make sure things are going well, you can monitor the active leads that the Sales Agent is working on, qualifying.

A few notes regarding permissions:

- All users have access to monitor conversations on the chat list and the lead detail page of leads assigned to them .
- The Team Owner/Admin and users with the “Access All Team Leads” permission (see Team permissions ) are only able to monitor conversations on the lead detail page, but it is not visible on their chat list unless the leads are assigned to them.

To monitor conversations, click the Workspace icon, then click AI

This will take you to the AI Sales Assistant Following conversations.

In this section, you can:

- View all active text and website chat conversations the AI is having
- "Mute" the conversation (keep the Sales Agent from qualifying the lead)
- Type in your own message to take over the conversation

*IMPORTANT : Please note the following:

- When clicking the "Mute" option, you are stopping the Sales Agent. You can unmute the Sales Agent at any time by clicking on the ellipses in the lead's profile, followed by Unmute AI Sales Assistant .
- Please also note that any form of manual communication (making a phone call, sending a text message, or sending an email) will also take over from the Sales Agent. This does not include automatic content sent out via Smart Plans.

### What if a lead unsubscribes on a Sales Agent email?

If a lead clicks the unsubscribe option on an email sent by the Sales Agent, they will only unsubscribe from emails sent from the sales agent's email address. The lead can still be sent other automated emails, smart plan emails, and manual emails. The Sales Agent can also still send text messages to the lead.

If the lead is moved into the Do Not Contact (DNC) pipeline stage, they will automatically be unsubscribed from all communications from the Sales Agent.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
Summary
Playbook Settings (#h_01KG0KKC48YR6F3X4D15DV7Q1F)
Smart Leads View on People Page (#h_01KG0KRXM1JRBKYPT8YKKRH55P)
How to monitor the Sales Agent (#h_01EY4GH7VGYB45E2T9CT96M6WK)
Playbook Settings
The Playbook defines how Sales Agent engages with leads at each stage of their journey. Unlike one-size-fits-all automation, the Playbook uses a goal-based methodology similar to how experienced real estate agents work. Sales Agent adapts its strategy based on where each lead is in their decision-making process.
Where to Find Playbook Settings
Navigate to AI Copilots in the main menu
Select Sales Agent
Click on Settings
Select the Playbook tab
The Four Playbook Goals
The Playbook is organized around four sequential goals. Each goal represents a stage in the lead qualification and conversion process:
Goal 1: Capture Contact Details
Objective:
Convert anonymous website visitors into known leads by capturing their name and contact information.
When leads enter this goal:
New visitors who land on your website and haven't yet been created as leads in your CRM.
How Sales Agent works:
Proactive Welcome Message: Uses website chat box to send a friendly welcome message on the visitor's first visit
Instant Auto Reply: Answers visitor messages and asks for their name and contact information
What this goal delivers:
New Lead Created in CRM
Tag Applied to identify the lead
Call Task Assigned for agent follow-up
Goal 2: Clarify Intent & Preferences
Objective:
Turn vague interest into clear, actionable signals about what the lead is looking for.
Information gathered:
Buyer or seller intent
Timeline for purchase/sale
Budget range
Location or property criteria
How Sales Agent works:
Sends structured follow-up messages
Adjusts cadence based on lead engagement
Creates call tasks when human conversation would be valuable
Benefit:
When you step in to call the lead, you have full context on their preferences instead of starting from zero.
Goal 3: Win Appointment
Objective:
Make it easy for qualified leads to say "yes" to a meeting with you.
How Sales Agent works:
Appointment-focused outreach
Clear next-step suggestions
Stops automatically once an appointment is booked
Key point:
Sales Agent gets the lead ready and qualified; you close the loop by conducting the appointment.
Goal 4: Grow Long-Term Trust
Objective:
Maintain relationships with leads who aren't ready to act immediately, keeping you top-of-mind for when they are.
How Sales Agent works:
Low-touch, long-term follow-up sequences
Periodic check-ins to gauge readiness
Re-engages leads when they show renewed interest
Opportunity Behavior Playbook
In addition to the four goals, Sales Agent detects
Opportunity behaviors
—signals of strong interest or intent—and engages appropriately. These settings determine how the AI Sales Agent reacts to specific lead behaviors.
Behavior categories:
Missed Call: Lead attempted to call but didn't connect
Buyer Interest: Property views, saved listings, share listing requests, tour requests, saved searches, mortgage usage, form submissions
Seller Interest: Home evaluation requests
Back on Market: Return visits, new inquiries from past leads
How Each Goal Works
Each goal in the Playbook answers three key questions:
How does Sales Agent work in this stage? Is it doing proactive outreach or auto-reply only? What cadence and tone?
What does Sales Agent deliver? Tags, call tasks, appointments, and clear signals for agent intervention.
When does the lead move forward? What qualifies the lead for the next goal? What information must be clarified first?
This structure makes Sales Agent's behavior predictable and explainable—you always know what the AI is doing and why.
Customization Options
Within each goal, you can configure:
Whether proactive messaging is enabled
Which communication channels to use (text, email, website chat)
What tags are applied at each stage
When call tasks are created for agent follow-up
Smart Leads View on People Page
The Smart Leads view is a new tab on the People page that provides at-a-glance visibility into all leads being managed by Sales Agent. This view organizes leads into three priority categories, making it easy to understand which leads need your immediate attention and which ones are being actively nurtured by AI.
Where to Find Smart Leads
Navigate to the People page and look for the
Smart Leads
tab. The tab displays a count of leads in each category and is marked with an AI indicator.
Go to Sales in the main navigation
Click on All Leads or My Leads
Select the Smart Leads tab
Lead Status Categories
Smart Leads organizes leads into three categories based on their engagement level and required actions:
High Priority
What it means:
These are leads actively managed by Sales Agent that require your immediate action. The AI has identified an opportunity or task that needs human intervention.
Examples of required actions:
Making a phone call to a qualified lead
Handling an offline appointment
Updating lead information or preferences
What you see in this view:
Name, Inquiries, Tags: Same as the standard CRM Lead List
AI-Generated Summary: Quick context on the lead and their current status
Tasks: The most recent incomplete task (Call, Appointment, or Lead Update) created by AI
AI Suggestion: Helpful call-to-action buttons based on task type
AI Prospecting
What it means:
These are leads actively managed by Sales Agent that require no immediate action from you. The AI is actively working these leads through the qualification process.
Criteria:
Leads have shown activity within the past 30 days.
What you see in this view:
Name, Last Visit, Activities: Same as the standard CRM Lead List
AI-Generated Summary: Context on recent engagement and lead preferences
AI Next Step: The most recent incomplete task in the AI's follow-up plan
AI Goal: The Playbook goal the AI is currently working toward
AI Suggestions: Always shows "Call with AI Script" CTA
Tip:
Clicking "Call with AI Script" generates a custom call script based on the lead summary and current AI goal.
AI Monitoring
What it means:
These are leads that require no immediate action and have not shown activity in the last 30 days. Sales Agent continues low-touch, long-term follow-up to re-engage these leads.
Criteria:
Leads have had no activity within the past 30 days.
What you see in this view:
Name, Score, Last Touch: Same as the standard CRM Lead List
AI-Generated Summary: Overview of the lead's current status
AI Nurturing Plan: Shows how the AI is re-engaging inactive leads
Calls Made: Number of calls already made to the lead
Benefits of Smart Leads View
Clarity: Instantly see which leads need your attention versus which ones are being handled by AI
Efficiency: Understand what needs to be done without digging through lead details
Actionable: Complete tasks right away using AI-generated suggestions and scripts
Best Practices
Prioritize High Priority leads: These leads have been qualified by AI and are ready for human engagement. Responding promptly avoids missed opportunities.
Monitor AI Prospecting progress: Check in on these leads periodically to see how the AI is progressing toward appointment setting.
Use the AI Script feature: When calling leads, use the AI-generated script for context-aware talking points.
Let AI handle monitoring: Leads in AI Monitoring don't need your attention unless they re-engage or are escalated to High Priority.
How to monitor the Sales Agent
The Sales Agent is designed to notify you when a conversation is out of their scope or is making great progress and ready for your involvement. If you want to make sure things are going well, you can monitor the active leads that the Sales Agent is working on, qualifying.
A few notes regarding permissions:
All users have access to monitor conversations on the chat list and the lead detail page
of leads assigned to them
.
The Team Owner/Admin and users with the “Access All Team Leads” permission (see
Team permissions (https://help.lofty.com/hc/en-us/articles/360055290451)
) are only able to monitor conversations on the lead detail page, but it is not visible on their chat list unless the leads are assigned to them.
To monitor conversations, click the
Workspace
icon, then click
AI
This will take you to the AI Sales Assistant Following conversations.
In this section, you can:
View all active text and website chat conversations the AI is having
"Mute" the conversation (keep the Sales Agent from qualifying the lead)
Type in your own message to take over the conversation
*IMPORTANT
: Please note the following:
When clicking the "Mute" option, you are
stopping
the Sales Agent. You can unmute the Sales Agent at any time by clicking on the ellipses in the lead's profile, followed by
Unmute AI Sales Assistant
.
Please also note that any form of manual communication (making a phone call, sending a text message, or sending an email) will also take over from the Sales Agent. This does
not
include automatic content sent out via Smart Plans.
What if a lead unsubscribes on a Sales Agent email?
If a lead clicks the unsubscribe option on an email sent by the Sales Agent, they will only unsubscribe from emails sent from the sales agent's email address. The lead can still be sent other automated emails, smart plan emails, and manual emails. The Sales Agent can also still send text messages to the lead.
If the lead is moved into the Do Not Contact (DNC) pipeline stage, they will automatically be unsubscribed from all communications from the Sales Agent.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

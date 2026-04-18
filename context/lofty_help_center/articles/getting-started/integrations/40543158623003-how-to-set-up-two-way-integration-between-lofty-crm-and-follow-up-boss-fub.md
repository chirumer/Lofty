# How to Set Up Two-Way Integration Between Lofty CRM and Follow Up Boss (FUB)

- Article ID: `40543158623003`
- Category: `Getting Started`
- Section: `Integrations`
- Updated: `2026-02-05T03:26:27Z`
- Source: https://help.lofty.com/hc/en-us/articles/40543158623003-How-to-Set-Up-Two-Way-Integration-Between-Lofty-CRM-and-Follow-Up-Boss-FUB

## Body

## Introduction

Lofty supports a powerful two-way integration with Follow Up Boss (FUB), making it easier than ever to manage leads, track activities, and sync transactions across platforms.

## Summary

- Getting Started
- Integration Options
- Lead Mapping Logic
- What Data Is Synced?
- Disconnecting the Integration

## Getting Started

### Step 1: Connect Lofty to FUB

1. Go to Settings in your Lofty account.
2. Click Lead Capture .
3. Find the Follow Up Boss integration option and select Connect .
4. Authenticate via OAuth to link your FUB account.

## Integration Options

IMPORTANT: If the connected FUB account is not the owner, we can not register the webhook from the FUB side. There are two distinct synchronization modes for the Follow Up Boss (FUB) integration.

Option 1: Full Two‑Way Sync

Full Two‑Way Sync means that all leads, both from Lofty and Follow Up Boss, will sync in both directions. This includes new leads and any updates to existing leads. If a lead is added or modified in either system, it will automatically sync to the other.

Sub‑Option: Sync Existing Leads (Optional)

- Appears after selecting Full Two‑Way Sync
- Allows you to decide whether Lofty or Follow Up Boss is the source of truth for the initial lead sync.

Option 2: Limited Two‑Way Sync

Limited Two‑Way Sync means that any new leads created in Follow Up Boss will automatically sync to Lofty. New leads created in Lofty will not be sent to Follow Up Boss. Only leads that are connected through the Follow Up Boss integration will sync between the two systems.

Sub‑Option: Sync Existing Leads (Optional)

- Syncs historical FUB leads into Lofty

Note: only leads where you are the primary assigned agent will be synced. By default, only leads where the person who integrated FUB (e.g., the company owner) is the primary assigned agent in Lofty will be synced to FUB.Leads assigned to other team members (agents) will NOT be synced to FUB under the owner's integration, unless those leads are directly assigned to the owner.

## Lead Mapping Logic

When FUB sends leads to Lofty, the system uses the FUB Assignee to determine how to handle the lead:

#### Step 1: Does the FUB Assignee exist in Lofty?

- Yes → Proceed to lead matching.
- No → Lead import will fail.

#### Step 2: Lead Matching

If the agent exists in Lofty, the system checks for matching leads based on email:

- One match found → Lead is mapped.
- Multiple matches → Most recent last touch is used. If tied, the most recent creation time is used.
- No match → A new lead is created based on your company’s duplicate lead rules and agent permissions.

### How Synced Data Appears

A FUB icon will appear on leads and transactions that are successfully synced. This icon is visible on both the list view and detail view .

## What Data Is Synced?

#### Automatically Synced

Lead Info:

- Lead Type, Name, Phone, Email, Tags, Family Members, Mailing Address
- Buying/Selling Time Frame, Search Criteria (Price)

Communication Logs:

- Calls, Texts, Notes (manual), Tasks (type, description, due date/time, assignee) Communication logs in Follow Up Boss that were created before integrating to Lofty will not be synced to Lofty. Once the integration is established, all newly-created communication logs will sync over.

Transactions:

- Name, Type, Stage, Sales Price, GCI, Team Revenue, Agent Revenue, Close Date, Assigned Agent, Contacts Transactions in Follow Up Boss that were created before integrating to Lofty will not be synced to Lofty. Once the integration is established, all newly-created Transactions will sync over.

#### Manually Synced

Lead Pipeline:

- If the lead is FUB-mapped, you’ll see a FUB Stage field.
- When you update the pipeline status in Lofty, you’ll be prompted to sync the change to FUB.

## Disconnecting the Integration

To stop syncing:

1. Go to Settings → Lead Capture → Disconnect next to the Follow Up Boss integration.
2. Click Disconnect to cancel the integration.

Once disconnected, the data will no longer sync between the platforms.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

Related Terms: FUB, Follow up Boss, Follow-up Boss

## Plain Text

Introduction
Lofty supports a powerful two-way integration with Follow Up Boss (FUB), making it easier than ever to manage leads, track activities, and sync transactions across platforms.
Summary
Getting Started (#h_01K0QBPZPV2PJC08J5K9P18WNQ)
Integration Options (#h_01K0QBW5C2RQ427PZA4WW9CX1J)
Lead Mapping Logic (#h_01K0QC80T7YAGWP5S94NN3FKGK)
What Data Is Synced? (#h_01K0QCFSAQK9YX0MPB6ZSJ73C6)
Disconnecting the Integration (#h_01K0QCHGC2AGTTA9JB9TXVE0Z1)
Getting Started
Step 1: Connect Lofty to FUB
Go to
Settings
in your Lofty account.
Click
Lead Capture
.
Find the Follow Up Boss integration option and select
Connect
.
Authenticate via
OAuth
to link your FUB account.
Integration Options
IMPORTANT:
If the connected FUB account is not the owner, we can not register the webhook from the FUB side.
There are
two distinct synchronization modes
for the Follow Up Boss (FUB) integration.
Option 1:
Full Two‑Way Sync
Full Two‑Way Sync
means that all leads, both from Lofty and Follow Up Boss, will sync in both directions. This includes new leads and any updates to existing leads. If a lead is added or modified in either system, it will automatically sync to the other.
Sub‑Option: Sync Existing Leads (Optional)
Appears after selecting Full Two‑Way Sync
Allows you to decide whether Lofty or Follow Up Boss is the source of truth for the initial lead sync.
Option 2:
Limited Two‑Way Sync
Limited Two‑Way Sync means that any new leads created in Follow Up Boss will automatically sync to Lofty. New leads created in Lofty will not be sent to Follow Up Boss. Only leads that are connected through the Follow Up Boss integration will sync between the two systems.
Sub‑Option: Sync Existing Leads (Optional)
Syncs historical FUB leads into Lofty
Note:
only leads where you are the primary assigned agent will be synced.
By default, only leads where the person who integrated FUB (e.g., the company owner) is the primary assigned agent in Lofty will be synced to FUB.Leads assigned to other team members (agents) will
NOT
be synced to FUB under the owner's integration, unless those leads are directly assigned to the owner.
Lead Mapping Logic
When FUB sends leads to Lofty, the system uses the
FUB Assignee
to determine how to handle the lead:
Step 1: Does the FUB Assignee exist in Lofty?
Yes
→ Proceed to lead matching.
No
→ Lead import will fail.
Step 2: Lead Matching
If the agent exists in Lofty, the system checks for matching leads based on email:
One match found
→ Lead is mapped.
Multiple matches
→ Most recent
last touch
is used. If tied, the most recent
creation time
is used.
No match
→ A new lead is created based on your company’s duplicate lead rules and agent permissions.
How Synced Data Appears
A
FUB icon
will appear on leads and transactions that are successfully synced. This icon is visible on both the
list view
and
detail view
.
What Data Is Synced?
Automatically Synced
Lead Info:
Lead Type, Name, Phone, Email, Tags, Family Members, Mailing Address
Buying/Selling Time Frame, Search Criteria (Price)
Communication Logs:
Calls, Texts, Notes (manual), Tasks (type, description, due date/time, assignee)
Communication logs in Follow Up Boss that were created
before integrating to Lofty
will not be synced to Lofty. Once the integration is established, all
newly-created
communication logs will sync over.
Transactions:
Name, Type, Stage, Sales Price, GCI, Team Revenue, Agent Revenue, Close Date, Assigned Agent, Contacts
Transactions in Follow Up Boss that were created
before integrating to Lofty
will not be synced to Lofty. Once the integration is established, all
newly-created
Transactions will sync over.
Manually Synced
Lead Pipeline:
If the lead is FUB-mapped, you’ll see a
FUB Stage
field.
When you update the pipeline status in Lofty, you’ll be prompted to sync the change to FUB.
Disconnecting the Integration
To stop syncing:
Go to
Settings → Lead Capture → Disconnect
next to the Follow Up Boss integration.
Click
Disconnect
to cancel the integration.
Once disconnected, the data will no longer sync between the platforms.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.
Related Terms: FUB, Follow up Boss, Follow-up Boss

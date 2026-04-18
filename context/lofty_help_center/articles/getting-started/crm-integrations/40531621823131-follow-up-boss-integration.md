# Follow Up Boss Integration

- Article ID: `40531621823131`
- Category: `Getting Started`
- Section: `CRM Integrations`
- Updated: `2026-02-10T15:45:00Z`
- Source: https://help.lofty.com/hc/en-us/articles/40531621823131-Follow-Up-Boss-Integration

## Body

## Introduction

This integration allows you to see lead activity from your Lofty-built website in your Follow Up Boss CRM.

## Setting up the Integration

Navigate to the CMS tool, select Settings > Tools > Integrations. Here, select the Follow Up Boss integration. Here, enter your Follow Up Boss tracking pixel.

##### Hierarchical Integration Logic

Lofty supports optimized lead syncing rules across Company, Office/Team, and Personal integration levels.

##### Sync scope:

Company-level integration: syncs all leads owned by the company.

Office-level integration: syncs all leads owned by the office.

Team-level integration: syncs all leads owned by the team.

##### Priority order:

Personal > Office > Company A lead can only be mapped to one FUB integration level at a time. Once mapped, it remains linked unless the integration is manually disconnected.

##### Mapping logic:

Lofty’s primary agent will be synced to the "assignedTo" field in FUB. When syncing, if a corresponding FUB user exists, the lead will be assigned to that user; otherwise, the lead will not sync.

##### Integration Disconnection & Reassignment

When an integration is disconnected (unbound), Lofty will intelligently reassign mapped leads to the next available integration level.

Disconnected Level | Reassignment Logic
Personal-level | Leads are unlinked first. If the owner’s Office or Company has integration, leads will be reassigned accordingly.
Office-level | Leads are unlinked first. If the owner has a Personal or Company-level integration, leads will be reassigned accordingly.
Company-level | Leads are unlinked first. If the owner has a Personal or Office-level integration, leads will be reassigned accordingly.

##### Duplicate Lead Prevention

When creating people in FUB, Lofty now uses the deduplicate=true parameter to prevent duplicate entries. If FUB detects an existing person, Lofty will map and update that record instead of creating a new one. If the returned personID is already mapped, Lofty will skip both mapping and creation.

Zillow / FUB exclusivity messaging: New help-icon tooltips clarify that leads integrated with one system will not sync to the other.

Assignment Change Handling

When “Assigned To” changes in Lofty (Agent A → B):

Lofty checks whether the new agent exists in FUB.

If found → update FUB assignedTo.

If not found → skip update.

##### When “Assigned To” changes in FUB (via Webhook):

FUB checks if the new user exists in Lofty.

If found → update Lofty lead’s “assigned to.”

If not → Lead is no longer synced Mailing Addresses sync Optimization Only mailing addresses from Lofty will be synced to the Addresses field in FUB People profiles. Property-related activities will continue to be pushed to FUB via the Lofty website activity timeline

- Lofty’s Web Activities Timeline will be synced to the FUB Event:
- A lead views a listing three times
- A lead saves a listing on the site
- A lead requests a showing (tour request) from a listing page
- A lead leaves a message in the fields on the website
- A lead saves a search on the website
- A lead uses the mortgage calculator 3+ times in one day
- A lead submits a form on your website when logged in
- A lead who has not returned to the website for at least five days but then visits the website again.
- Leads that intend to sell and request to do so through the "Sell My Home" or "Home Evaluation" options on the website.
- Back on Market - re-register through third-party lead source
- Back on Market - lead sends in a text code

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com> or by phone at 1 (855) 981-7557.

Related Terms: FUB, Follow up Boss, Follow-up Boss

## Plain Text

Introduction
This integration allows you to see lead activity from your Lofty-built website in your Follow Up Boss CRM.
Setting up the Integration
Navigate to the CMS tool, select
Settings > Tools > Integrations.
Here, select the Follow Up Boss integration. Here, enter your Follow Up Boss tracking pixel.
Hierarchical Integration Logic
Lofty supports optimized lead syncing rules across Company, Office/Team, and Personal integration levels.
Sync scope:
Company-level integration: syncs all leads owned by the company.
Office-level integration: syncs all leads owned by the office.
Team-level integration: syncs all leads owned by the team.
Priority order:
Personal > Office > Company
A lead can only be mapped to one FUB integration level at a time. Once mapped, it remains linked unless the integration is manually disconnected.
Mapping logic:
Lofty’s primary agent will be synced to the "assignedTo" field in FUB.
When syncing, if a corresponding FUB user exists, the lead will be assigned to that user; otherwise, the lead will not sync.
Integration Disconnection & Reassignment
When an integration is disconnected (unbound), Lofty will intelligently reassign mapped leads to the next available integration level.
Disconnected Level
Reassignment Logic
Personal-level
Leads are unlinked first. If the owner’s Office or Company has integration, leads will be reassigned accordingly.
Office-level
Leads are unlinked first. If the owner has a Personal or Company-level integration, leads will be reassigned accordingly.
Company-level
Leads are unlinked first. If the owner has a Personal or Office-level integration, leads will be reassigned accordingly.
Duplicate Lead Prevention
When creating people in FUB, Lofty now uses the deduplicate=true parameter to prevent duplicate entries.
If FUB detects an existing person, Lofty will map and update that record instead of creating a new one.
If the returned personID is already mapped, Lofty will skip both mapping and creation.
Zillow / FUB exclusivity messaging:
New help-icon tooltips clarify that leads integrated with one system will not sync to the other.
Assignment Change Handling
When “Assigned To” changes in Lofty (Agent A → B):
Lofty checks whether the new agent exists in FUB.
If found → update FUB assignedTo.
If not found → skip update.
When “Assigned To” changes in FUB (via Webhook):
FUB checks if the new user exists in Lofty.
If found → update Lofty lead’s “assigned to.”
If not → Lead is no longer synced
Mailing Addresses sync Optimization
Only mailing addresses from Lofty will be synced to the Addresses field in FUB People profiles.
Property-related activities will continue to be pushed to FUB via the Lofty website activity timeline
Lofty’s Web Activities Timeline will be synced to the FUB Event:
A lead views a listing three times
A lead saves a listing on the site
A lead requests a showing (tour request) from a listing page
A lead leaves a message in the fields on the website
A lead saves a search on the website
A lead uses the mortgage calculator 3+ times in one day
A lead submits a form on your website when logged in
A lead who has not returned to the website for at least five days but then visits the website again.
Leads that intend to sell and request to do so through the "Sell My Home" or "Home Evaluation" options on the website.
Back on Market - re-register through third-party lead source
Back on Market - lead sends in a text code
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com> or by phone at 1 (855) 981-7557.
Related Terms: FUB, Follow up Boss, Follow-up Boss

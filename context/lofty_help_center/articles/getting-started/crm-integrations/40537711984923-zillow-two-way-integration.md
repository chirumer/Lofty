# Zillow Two-Way Integration

- Article ID: `40537711984923`
- Category: `Getting Started`
- Section: `CRM Integrations`
- Updated: `2026-01-13T13:07:46Z`
- Source: https://help.lofty.com/hc/en-us/articles/40537711984923-Zillow-Two-Way-Integration

## Body

## Introduction

A two-way Zillow Premier Agent integration is now available. Please note, that both one-way and two-way integrations will be available with Zillow, but if both are connected, information will be synced according to the two-way integration.

Our Help Center article on the One-Way Zillow integration is here: Zillow Integration

## Summary

- Instructions
- Mapping and Syncing Lead Logic
- FAQs

## Instructions

Important:

Before connecting Lofty to Zillow, make sure that you have your Status and Assignee up-to-date in Zillow for your clients because that is the information that will be synced into Lofty upon initiating the integration. Failure to do so may cause issues syncing when importing your leads.

- The integration will go back and sync in the last 2 years of data, so please ensure that these updates are made back to that point.

All agents involved in Zillow routing must have an active account in both Zillow and Lofty. They also must integrate their accounts individually.

Navigate to Settings → Lead Capture and click Two-Way Connect to connect to Zillow via OAuth authentication.

Once connected, Zillow will sync the Contacts that were created in the past 2 years to Lofty.

When a lead has been successfully mapped to Zillow, the Zillow icon will be added to the lead in both the Lead list page and the detail page.

- Web: Click the Zillow icon to access the Zillow contact page
- APP: Display Only, does not access the Zillow contact page

## Mapping and Syncing Lead Logic

The contacts that Zillow pushes to Lofty will have a Zillow assignee and a Zillow owner. The following rules are all judged by Zillow Assignee:

1. Is the Zillow Assignee's email address used for an existing Lofty user on the account? That is, is the Zillow Assignee a user on the Lofty account?

Yes | No
The system will check to see if the lead already exists on the Lofty account | The lead will fail to import to Lofty

2. Do the Lofty account settings allow duplicate Company/Team leads?

Yes | No
The system will check the email addresses of the Team/Company leads whose primary assigned agent is the Zillow assignee. | The system will check the email addresses of all Team/Company leads, including deleted leads.
If a matching lead is found, the lead will map successfully and update the lead's information in the Lofty CRM. If no lead is found with a matching email address, a new lead will be created and assigned to the Zillow assignee. | If the lead is found but the primary agent is not the Zillow lead assignee, the lead will fail to import to the Lofty CRM. If the lead is found and the primary agent is the Zillow lead assignee, the lead will map successfully and update the lead's information in the Lofty CRM. If no lead is found with a matching email address, a new lead will be created and assigned to the Zillow assignee.

Important:

Currently, the two-way Zillow integration only supports creating and mapping Company/Team leads . The Company/Team leads imported by the Zillow two-way integration will not go through any lead routing. When converting a connected Company/Team Zillow lead to a Private lead, the lead will be automatically disconnected from Zillow Contact. One lofty lead can only be connected with one Zillow contact.

### What data is synced?

With the two-way Zillow integration, lead and transaction details are synced between your Lofty and Zillow accounts. Some data is synced automatically, while other data is only synced when done manually.

#### Automatic Sync

The following data will be synced automatically between Lofty and Zillow:

Basic Lead Information:

- Lead Type The Lead Type is only synced from Lofty to Zillow
- First Name
- Last Name
- Phone Number
- Email
- Mailing Address
- With Agent Question
- Buying/Selling Time Frame
- Notes

Lead Assignment

- If the corresponding Lofty user is found, the assigned user will be updated to match
- If the Assignee becomes a Lead Pond or the corresponding Lofty user is not found, the assigned user will not be updated

Lead Communication Log (One-way sync, Lofty → Zillow)

- Calls
- Texts: Manual/Auto/Logged/Smart Plan Texts
- Emails: Manual/Auto/Logged/Smart Plan Emails

Lead Property Inquiries (Zillow → Lofty)

- The following property inquiries will be synced to the lead profile, and search criteria will be added, based on the property information.
- Lead Property Inquiry Created
- Lead Tour Inquiry Created
- Lead Profile Inquiry Created

#### Manual Sync

The following data will be synced between Lofty and Zillow when prompted manually:

Lead Pipeline

- If the lead's pipeline pipeline status is changed, a pop-up window will ask you if you also want to change the lead's Zillow Contact Status.

Transaction

- This integration only supports syncing Zillow leads‘ transactions from Lofty to Zillow.
- When creating/editing a transaction in Lofty, you can choose whether to synchronize the transaction to Zillow.
- The Close Price must have an amount in order to sync the transaction to Zillow
- Information that may be synced: Address Transaction Pipeline Close Date Close Price GCI

## FAQs

Q: How do Zillow statuses work in Lofty?

A: The Lofty "Pipeline" is maintained separately from the "Zillow Status." This means that the Lofty pipeline, as configured in Lofty, will remain independent from anything occurring at Zillow. However, the integration will work as follows:

(a) There is a unique field on each lead record that is synced with Zillow in Lofty called "Zillow Status." Here is where that displays on the lead record:

This field can be edited manually in Lofty, and the updates will automatically sync to Zillow. Otherwise, if edited at Zillow, it will automatically update in Lofty.

Here is where it can be edited in Lofty:

To ensure your activity in Lofty keeps Zillow up-to-date, every time you change a pipeline stage at Lofty, you will be prompted to update the status at Zillow:

Q: Does Lofty allow filtering by Zillow rejected leads on the People Page?

A: No, Lofty does not currently support filtering by the Zillow contact status.

Q: Can Zillow two-way integration be connected directly in Lofty, without having to go to Zillow's settings?

A: Yes, the Zillow two-way integration is set up through your Lofty account. You do not need to set anything up on Zillow.

Q: How often is the lead assignment checked? That is, if the lead does not have an assigned user in Lofty initially, will it import later if a user becomes assigned?

A: If any associated lead is modified in Zillow or Lofty, the update will be synchronized to the other party immediately, with a delay of up to one minute.

Q: What contact/lead communication information is synced between Zillow and Lofty?

A: A communication log is synced, which has the following format:

- User Name called/emailed/texted Lead Full Name on Date at Time
- Any content saved regarding this communication is not synced.

Q: If the Zillow Contact Status is updated, will that field on the Lofty lead profile automatically update?

A: Yes, if the Zillow Contact Status is updated, it will automatically update that field on the Lofty lead profile.

Q: Can the Zillow Contact Status field on a lead profile be updated manually?

A: Yes, we support changing the Zillow Contact Status in Lofty manually.

Q: If I am having issues with the two-way integration and would like to revert to the one-way integration, is this possible?

A: Currently, yes, it is possible. Eventually, the two-way integration will be the only one supported. If you would like to revert to the one-way integration, follow these steps:

Step 1 : Please provide feedback to your Lofty support rep or the Lofty Support Team ( support@lofty.com ) on why the two-way integration is not meeting your expectations. We'll need to address any concerns you have with enhancements.

Step 2 : Disconnect the two-way integration in Lofty

Step 3 : Re-connect the one-way connection navigating to your Zillow account settings, select App Integrations, and link to Lofty there.

Q: If the client has 2-way integration with Zillow and the lead isn't assigned to an agent, will it follow lead routing rules?

A: No, they will not go through lead routing rules. The lead (called contact in Zillow) has to have an owner in Zillow, who will also be the owner in Lofty. If the Zillow owner is not in Lofty, the lead will not sync.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

Related terms: 2-way integration, Zillow two way

## Plain Text

Introduction
A two-way Zillow Premier Agent integration is now available. Please note, that both one-way and two-way integrations will be available with Zillow, but if both are connected, information will be synced according to the two-way integration.
Our Help Center article on the One-Way Zillow integration is here:
Zillow Integration (https://help.lofty.com/hc/en-us/articles/115000320103)
Summary
Instructions (#h_01HCZ8QQ7VQET1YBTW9219JA6W)
Mapping and Syncing Lead Logic (#h_01H9NTHA93TG388WWX3T39MX8R)
FAQs (#h_01H9NTHA94SZXH12C40YQ74AVT)
Instructions
Important:
Before connecting Lofty to Zillow, make sure that you have your
Status
and
Assignee
up-to-date in Zillow for your clients because that is the information that will be synced into Lofty upon initiating the integration. Failure to do so may cause issues syncing when importing your leads.
The integration will go back and sync in the last
2 years
of data, so please ensure that these updates are made back to that point.
All agents involved in Zillow routing must have an active account in both Zillow and Lofty. They also must integrate their accounts individually.
Navigate to Settings → Lead Capture and click Two-Way Connect to connect to Zillow via OAuth authentication.
Once connected, Zillow will sync the Contacts that were created in the past 2 years to Lofty.
When a lead has been successfully mapped to Zillow, the Zillow icon will be added to the lead in both the Lead list page and the detail page.
Web: Click the Zillow icon to access the Zillow contact page
APP: Display Only, does not access the Zillow contact page
Mapping and Syncing Lead Logic
The contacts that Zillow pushes to Lofty will have a Zillow assignee and a Zillow owner. The following rules are all judged by Zillow Assignee:
1. Is the Zillow Assignee's email address used for an existing Lofty user on the account? That is, is the Zillow Assignee a user on the Lofty account?
Yes
No
The system will check to see if the lead already exists on the Lofty account
The lead will fail to import to Lofty
2. Do the Lofty account settings allow duplicate Company/Team leads?
Yes
No
The system will check the email addresses of the Team/Company leads whose primary assigned agent is the Zillow assignee.
The system will check the email addresses of all Team/Company leads, including deleted leads.
If a matching lead is found, the lead will map successfully and update the lead's information in the Lofty CRM.
If no lead is found with a matching email address, a new lead will be created and assigned to the Zillow assignee.
If the lead is found but the primary agent
is not
the Zillow lead assignee, the lead will fail to import to the Lofty CRM.
If the lead is found and the primary agent
is
the Zillow lead assignee, the lead will map successfully and update the lead's information in the Lofty CRM.
If no lead is found with a matching email address, a new lead will be created and assigned to the Zillow assignee.
Important:
Currently, the two-way Zillow integration only supports creating and mapping
Company/Team leads
. The Company/Team leads imported by the Zillow two-way integration will not go through any lead routing. When converting a connected Company/Team Zillow lead to a Private lead, the lead will be automatically disconnected from Zillow Contact. One lofty lead can only be connected with one Zillow contact.
What data is synced?
With the two-way Zillow integration, lead and transaction details are synced between your Lofty and Zillow accounts. Some data is synced automatically, while other data is only synced when done manually.
Automatic Sync
The following data will be synced automatically between Lofty and Zillow:
Basic Lead Information:
Lead Type
The Lead Type is only synced from Lofty to Zillow
First Name
Last Name
Phone Number
Email
Mailing Address
With Agent Question
Buying/Selling Time Frame
Notes
Lead Assignment
If the corresponding Lofty user is found, the assigned user will be updated to match
If the Assignee becomes a Lead Pond or the corresponding Lofty user is not found, the assigned user will not be updated
Lead Communication Log (One-way sync, Lofty → Zillow)
Calls
Texts: Manual/Auto/Logged/Smart Plan Texts
Emails: Manual/Auto/Logged/Smart Plan Emails
Lead Property Inquiries (Zillow → Lofty)
The following property inquiries will be synced to the lead profile, and search criteria will be added, based on the property information.
Lead Property Inquiry Created
Lead Tour Inquiry Created
Lead Profile Inquiry Created
Manual Sync
The following data will be synced between Lofty and Zillow when prompted manually:
Lead Pipeline
If the lead's pipeline pipeline status is changed, a pop-up window will ask you if you also want to change the lead's Zillow Contact Status.
Transaction
This integration only supports syncing Zillow leads‘ transactions from Lofty to Zillow.
When creating/editing a transaction in Lofty, you can choose whether to synchronize the transaction to Zillow.
The Close Price must have an amount in order to sync the transaction to Zillow
Information that may be synced:
Address
Transaction Pipeline
Close Date
Close Price
GCI
FAQs
Q:
How do Zillow statuses work in Lofty?
A:
The Lofty "Pipeline" is maintained separately from the "Zillow Status." This means that the Lofty pipeline, as configured in Lofty, will remain independent from anything occurring at Zillow. However, the integration will work as follows:
(a) There is a unique field on each lead record
that is synced with Zillow
in Lofty called "Zillow Status." Here is where that displays on the lead record:
This field can be edited manually in Lofty, and the updates will automatically sync to Zillow. Otherwise, if edited at Zillow, it will automatically update in Lofty.
Here is where it can be edited in Lofty:
To ensure your activity in Lofty keeps Zillow up-to-date, every time you change a pipeline stage at Lofty, you will be prompted to update the status at Zillow:
Q:
Does Lofty allow filtering by Zillow rejected leads on the People Page?
A:
No, Lofty does not currently support filtering by the Zillow contact status.
Q:
Can Zillow two-way integration be connected directly in Lofty, without having to go to Zillow's settings?
A:
Yes, the Zillow two-way integration is set up through your Lofty account. You do not need to set anything up on Zillow.
Q:
How often is the lead assignment checked? That is, if the lead does not have an assigned user in Lofty initially, will it import later if a user becomes assigned?
A:
If any associated lead is modified in Zillow or Lofty, the update will be synchronized to the other party immediately, with a delay of up to one minute.
Q:
What contact/lead communication information is synced between Zillow and Lofty?
A:
A communication log is synced, which has the following format:
User Name called/emailed/texted Lead Full Name on Date at Time
Any content saved regarding this communication is
not
synced.
Q:
If the Zillow Contact Status is updated, will that field on the Lofty lead profile automatically update?
A:
Yes, if the Zillow Contact Status is updated, it will automatically update that field on the Lofty lead profile.
Q:
Can the Zillow Contact Status field on a lead profile be updated manually?
A:
Yes, we support changing the Zillow Contact Status in Lofty manually.
Q:
If I am having issues with the two-way integration and would like to revert to the one-way integration, is this possible?
A:
Currently, yes, it is possible. Eventually, the two-way integration will be the only one supported. If you would like to revert to the one-way integration, follow these steps:
Step 1
: Please provide feedback to your Lofty support rep or the Lofty Support Team (
support@lofty.com (mailto:support@chimeinc.com)
) on why the two-way integration is not meeting your expectations. We'll need to address any concerns you have with enhancements.
Step 2
: Disconnect the two-way integration in Lofty
Step 3
: Re-connect the one-way connection navigating to your Zillow account settings, select App Integrations, and link to Lofty there.
Q:
If the client has 2-way integration with Zillow and the lead isn't assigned to an agent, will it follow lead routing rules?
A:
No, they will not go through lead routing rules. The lead (called contact in Zillow) has to have an owner in Zillow, who will also be the owner in Lofty. If the Zillow owner is not in Lofty, the lead will not sync.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.
Related terms: 2-way integration, Zillow two way

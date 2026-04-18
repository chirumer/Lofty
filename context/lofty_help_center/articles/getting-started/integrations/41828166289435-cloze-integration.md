# Cloze Integration

- Article ID: `41828166289435`
- Category: `Getting Started`
- Section: `Integrations`
- Updated: `2025-12-03T18:39:58Z`
- Source: https://help.lofty.com/hc/en-us/articles/41828166289435-Cloze-Integration

## Body

## Introduction

The Cloze integration empowers you to connect Lofty's IDX website activity and lead information to your Cloze CRM, without the need for third-party connection tools like Zapier.

## About the Integration

This is a one-way integration that syncs your website activity and lead information from Lofty to Cloze .

The following data will be synced automatically from Lofty to Cloze:

### Basic Lead Information

- First Name
- Last Name
- Phone Numbers
- Email Addresses
- Tags
- Mailing Addresses

### Lofty Website Activities

- A lead views a listing 3+ times
- A lead saves a listing on the site
- A lead requests a showing from a listing page
- A lead saves a message from the fields on the website
- A lead saves a search on the website
- A lead uses the mortgage calculator 3+ times in one day
- A lead submits a form on your website when logged in
- A lead returns to your website who has not visited for at least 5 days before
- A lead indicates that they intend to sell via the "Sell My Home" or "Home Evaluation" forms on your Lofty website
- Back on Market - a lead re-registers through a third-party source
- Back on Market - a lead sends in a text code

### Manual Notes

- Any manually-added notes will sync from Lofty to Cloze

## Connect your Lofty and Cloze accounts

To connect Cloze and Lofty, open your Lofty account and navigate to Personal Settings > Integrations . Scroll down until you find the Cloze option, then click Connect .

*Note: this integration connects your accounts via Oauth. Please make sure that you are logged into your desired Cloze account in the same browser.

Clicking Connect opens a pop-up that will ask you to confirm the one-way integration:

Then you will be asked to authorize Lofty to access your Cloze account. At the bottom of the window, you will see which Cloze account you are currently logged into. Confirm that this is correct before you approve the integration. If you need to switch accounts, close out of the integration window.

## Lead Syncing Logic

After you authorize the integration, all leads where you are the primary agent will be synced to Cloze.

We will call Cloze's API to determine whether you are on a team or individual account.

- In Individual Mode: When there is a new or updated lead, we will create/update the person in Cloze
- In Team Mode: In addition to creating/updating the person in Cloze, we will set the defaultAssignTo attribute to the assignee's email

## Questions?

If you have any questions regarding this topic or any others, please contact our Support Team via email at support@lofty.com, by phone at 1 (855) 981-7557, or by chat through your Lofty CRM.

## Plain Text

Introduction
The Cloze integration empowers you to connect Lofty's IDX website activity and lead information to your Cloze CRM, without the need for third-party connection tools like Zapier.
About the Integration
This is a one-way integration that syncs your website activity and lead information
from Lofty to Cloze
.
The following data will be synced automatically from Lofty to Cloze:
Basic Lead Information
First Name
Last Name
Phone Numbers
Email Addresses
Tags
Mailing Addresses
Lofty Website Activities
A lead views a listing 3+ times
A lead saves a listing on the site
A lead requests a showing from a listing page
A lead saves a message from the fields on the website
A lead saves a search on the website
A lead uses the mortgage calculator 3+ times in one day
A lead submits a form on your website when logged in
A lead returns to your website who has not visited for at least 5 days before
A lead indicates that they intend to sell via the "Sell My Home" or "Home Evaluation" forms on your Lofty website
Back on Market - a lead re-registers through a third-party source
Back on Market - a lead sends in a text code
Manual Notes
Any manually-added notes will sync from Lofty to Cloze
Connect your Lofty and Cloze accounts
To connect Cloze and Lofty, open your Lofty account and navigate to
Personal Settings
>
Integrations
. Scroll down until you find the
Cloze
option, then click
Connect
.
*Note: this integration connects your accounts via Oauth. Please make sure that you are logged into your desired Cloze account in the same browser.
Clicking Connect opens a pop-up that will ask you to confirm the one-way integration:
Then you will be asked to authorize Lofty to access your Cloze account. At the bottom of the window, you will see which Cloze account you are currently logged into. Confirm that this is correct before you approve the integration. If you need to switch accounts, close out of the integration window.
Lead Syncing Logic
After you authorize the integration, all leads where you are the
primary agent
will be synced to Cloze.
We will call Cloze's API to determine whether you are on a team or individual account.
In Individual Mode:
When there is a new or updated lead, we will create/update the person in Cloze
In Team Mode:
In addition to creating/updating the person in Cloze, we will set the defaultAssignTo attribute to the assignee's email
Questions?
If you have any questions regarding this topic or any others, please contact our Support Team via email at support@lofty.com, by phone at 1 (855) 981-7557, or by chat through your Lofty CRM.

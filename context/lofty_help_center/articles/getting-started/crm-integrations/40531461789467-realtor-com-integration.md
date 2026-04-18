# Realtor.com Integration

- Article ID: `40531461789467`
- Category: `Getting Started`
- Section: `CRM Integrations`
- Updated: `2025-11-12T06:07:17Z`
- Source: https://help.lofty.com/hc/en-us/articles/40531461789467-Realtor-com-Integration

## Body

## Introduction

In this article, we will review how to set up email parsing in Lofty for Realtor.com leads or a direct/automatic lead import into Lofty of Connections℠ Plus or Market VIP leads from Realtor.com via API.

- Email Parsing Method
- Connections℠ Plus Leads via API
- Market VIP Leads via API

## Email Parsing Method

#### What kind of Email will be parsed?

Lofty can parse a new lead into your CRM based on an email alert that comes from Realtor.com to your Lofty-integrated email. Here are the common items that Lofty searches for in Email Parsing:

From address : leads@email.realtor.com

#### How to Set it Up

Go to https://dashboard.realtor.com/ and use your agent login details to sign in. This will take you to the Realtor.com agent dashboard.

Click the Settings in the dropdown menu of your profile photo.

Click Lead Settings .

In Connections SM for Buyers , Profile leads and Courtesy leads , click on Change to open the Send leads to the dropdown menu.

In the dropdown menu, select CRM . To the right, enter your integrated email address (with Lofty) or your unique Lofty email address.

In Email format , please choose HTML emails. Finally, click Save, and your Realtor.com leads will now be forwarded directly into your CRM.

Note: We suggest that you also add your email to Realtor.com to receive leads. In this way, you can test whether a lead has been imported to your CRM after you receive the lead notification email.

#### How to find your unique lofty email address in Lofty

Go to the Settings page, and under the Features section on the right of the page, click Lead Capture .

At the bottom of this page, you will find the option to auto-import leads via third-party providers. Here, you will see your Lofty email, which you will use to auto-import leads from Realtor.com. In this section, click the Copy.

## Connections℠ Plus Leads via API

This connection is only for Connections℠ Plus Leads and works via Realtor.com's lead delivery API (eLeads). If you have a Pro account with Realtor.com, you can have your Connections℠ Plus leads imported into Lofty automatically when a new lead is generated.

Any lead added to Lofty via the API will have a tag added to it of "Realtor API".

*IMPORTANT : Please note that this connection method is available for Connections℠ Plus leads only. It is not currently available for other leads, including Advantage℠ Pro and Profile leads. These kinds of leads can only be imported through the email parsing mentioned previously.

#### Lofty Setup

This connection is found under Settings > Lead Settings > Lead Capture > Lofty CRM Preferred Lead Providers :

The "Imported as Company Leads" option can be used to bring the lead in as either a Company Lead or a Personal Lead (see Lead Ownership ). If turned off, the lead will come in as a Personal Lead and will not be distributed via lead routing.

If the lead comes in as a Company Lead, it will be distributed according to lead routing as long as "Third Party Providers" is checked under Settings > Lead Distribution > Lead Routing :

If you would like to send a Welcome Email to the leads imported via this method, you can do so via the option seen below. You can always manually invite these leads to view your website later, so this is not a requirement. See Set Up the Welcome Email for more information.

#### Realtor.com Setup

This setup is mainly done in the settings of your Realtor Pro account. Navigate to Realtor.com and log in via your Pro account. Then, in your Realtor.com account, go to Settings > Lead Settings > ConnectionsSM Plus > Add Lead Delivery API . You can also click THIS link to go there directly.

In this section, you have to complete the four different fields seen in the screenshot below:

1. Under "API source application," choose "Other application" 2. For "Application URL," copy the URL found in Lofty under Settings > Features > Lead Capture Lofty CRM Preferred Lead Providers > Realtor.com > Webhook Link .

3. For "API Key," copy the key found in Lofty under Settings > Features > Integrations > API (at the bottom) :

4. For "Application login name," add the email address you use to log into Lofty.

FINISHED

Once the above steps have been completed, click 'Test Connection' and then click 'Save'. New Connections℠ Plus leads should automatically begin triggering into Lofty via the API.

*Please note that after clicking 'Test Connection', Realtor.com will send a test lead to your account.

## Market VIP Leads via API

Please contact your Realtor.com Account Manager for assistance with setting up your integration.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM. Related terms: third-party integration, lead capture, realtor.com

## Plain Text

Introduction
In this article, we will review how to set up email parsing in Lofty for Realtor.com leads or a direct/automatic lead import into Lofty of Connections℠ Plus or Market VIP leads from Realtor.com via API.
Email Parsing Method (https://help.lofty.com/hc/en-us/articles/115001411906#h_2fe0b8a5-1125-4d94-9034-ba490db66e2f)
Connections℠ Plus Leads via API (https://help.lofty.com/hc/en-us/articles/115001411906#h_fd98e714-dc65-47aa-ab40-37b668e8d63a)
Market VIP Leads via API (https://help.lofty.com/hc/en-us/articles/115001411906#h_01HT5XV0W9NTB7SQE4T7EYF8H0)
Email Parsing Method
What kind of Email will be parsed?
Lofty can parse a new lead into your CRM based on an email alert that comes from Realtor.com to your Lofty-integrated email. Here are the common items that Lofty searches for in Email Parsing:
From address
:
leads@email.realtor.com (mailto:leads@email.realtor.com)
How to Set it Up
Go to
https://dashboard.realtor.com/
and use your agent login details to sign in. This will take you to the Realtor.com agent dashboard.
Click the
Settings
in the dropdown menu of your profile photo.
Click
Lead Settings
.
In
Connections
SM
for Buyers
,
Profile leads
and
Courtesy leads
, click on
Change
to open the
Send leads to
the dropdown menu.
In the dropdown menu, select
CRM
.
To the right, enter your integrated email address (with Lofty) or your unique Lofty email address.
In
Email format
, please choose HTML emails.
Finally, click
Save,
and your Realtor.com leads will now be forwarded directly into your CRM.
Note: We suggest that you also add your email to Realtor.com to receive leads. In this way, you can test whether a lead has been imported to your CRM after you receive the lead notification email.
How to find your unique lofty email address in Lofty
Go to the Settings page, and under the Features section on the right of the page, click
Lead Capture
.
At the bottom of this page, you will find the option to auto-import leads via third-party providers. Here, you will see your Lofty email, which you will use to auto-import leads from Realtor.com. In this section, click the Copy.
Connections℠ Plus Leads via API
This connection is only for Connections℠ Plus Leads and works via Realtor.com's lead delivery API (eLeads). If you have a Pro account with Realtor.com, you can have your Connections℠ Plus leads imported into Lofty automatically when a new lead is generated.
Any lead added to Lofty via the API will have a tag added to it of "Realtor API".
*IMPORTANT
: Please note that this connection method is available for Connections℠ Plus leads only. It is not currently available for other leads, including Advantage℠ Pro and Profile leads. These kinds of leads can only be imported through the email parsing mentioned previously.
Lofty Setup
This connection is found under
Settings
>
Lead Settings
>
Lead Capture
>
Lofty CRM Preferred Lead Providers
:
The "Imported as Company Leads" option can be used to bring the lead in as either a Company Lead or a Personal Lead (see
Lead Ownership (https://help.lofty.com/hc/en-us/articles/115003544406)
). If turned off, the lead will come in as a Personal Lead and
will not
be distributed via lead routing.
If the lead comes in as a Company Lead, it
will
be distributed according to lead routing as long as "Third Party Providers" is checked under
Settings
>
Lead Distribution
>
Lead Routing
:
If you would like to send a Welcome Email to the leads imported via this method, you can do so via the option seen below. You can always manually invite these leads to view your website later, so this is not a requirement. See
Set Up the Welcome Email (https://help.lofty.com/hc/en-us/articles/360022134491)
for more information.
Realtor.com Setup
This setup is mainly done in the settings of your Realtor Pro account. Navigate to Realtor.com and log in via your Pro account. Then, in your Realtor.com account, go to
Settings
>
Lead Settings
>
ConnectionsSM Plus
>
Add Lead Delivery API
. You can also click
THIS (https://dashboard.realtor.com/products-config?tab=inquiry-settings#)
link to go there directly.
In this section, you have to complete the four different fields seen in the screenshot below:
1. Under "API source application," choose "Other application"
2. For "Application URL," copy the URL found
in Lofty
under
Settings
>
Features
>
Lead Capture
Lofty
CRM Preferred Lead Providers
>
Realtor.com
>
Webhook Link
.
3. For "API Key," copy the key found
in Lofty
under
Settings
>
Features
>
Integrations
>
API
(at the bottom)
:
4. For "Application login name," add the email address you use to log into Lofty.
FINISHED
Once the above steps have been completed, click 'Test Connection' and then click 'Save'. New Connections℠ Plus leads should automatically begin triggering into Lofty via the API.
*Please note that after clicking 'Test Connection', Realtor.com will send a test lead to your account.
Market VIP Leads via API
Please contact your Realtor.com Account Manager for assistance with setting up your integration.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.
Related terms: third-party integration, lead capture, realtor.com

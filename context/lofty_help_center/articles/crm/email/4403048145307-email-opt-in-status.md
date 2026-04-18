# Email Opt-In Status

- Article ID: `4403048145307`
- Category: `CRM`
- Section: `Email`
- Updated: `2025-11-07T07:06:30Z`
- Source: https://help.lofty.com/hc/en-us/articles/4403048145307-Email-Opt-In-Status

## Body

## Introduction

The email opt-in status refers to a lead's status of opting in or out for auto-email communication (one-off manual communication can be sent still). Per Lofty's Terms of Use , the platform tools for email communication, etc. should not be utilized for sending emails to leads that have not given their permission to be contacted.

Lofty has put certain systems in place to protect email reputations and comply with email marketing and industry standards for unwanted communication being sent.

This article addresses how a lead's opt-in status is determined.

## Summary

- Opt-In Triggers High Bounce Rate Email-Only Leads CSV Import Double Opt-In Rules
- Filtering by Opt-In Status
- Opting-In Leads Send Opt-In Email Via Lead Profile Via People Page During Lead Import Opt-In Manually

## Opt-In Triggers

By default, any lead that is entered into the CRM is considered to have opted-in. However, there are certain exceptions to that rule outlined below:

### High Bounce Rate

When your team has a high bounce rate, this will trigger an opt-in probationary period which will require leads in future imports to receive an opt-in email and agree before they are sent automated communication. This is outlined in detail here: Spam, Bounced, Phishing, and Unsafe Emails > What systems does Lofty have in place to prevent high amounts of bounced emails?

### Email-Only Leads

Leads that have entered the system but have only provided their email address during the registration step are considered "Email-Only Leads." These leads have not completely registered on the website and as such will be considered as opted-out by default.

More information about what an email-only lead is can be found here: Registration Pop-up Style & Settings > Email-Only Lead Registration .

### CSV Import Double Opt-In Rules

#### New Leads

For New Leads that come from CSV Imports. These 2 steps are automatically triggered and cover your entire sending domain.

1. If the total number of emails sent is greater than 500, the bounce rate is greater than 10%, and within a 15-minute time period (based in real-time from the email send time), then your team's email service through Lofty will be suspended for 2 hours. This affects manual emails, delays Smart Plan automated emails till the next day, and pauses property alerts.
2. If the total number of emails sent is greater than 10 and more than .5% of the emails are marked as junk/spam by the receiver or the total number of emails sent is greater than 10 and the bounce rate is greater than 10%, then an "Opt-in Probationary Period" will begin temporarily during the Lead Import process for the entire sending domain of the account. The period lasts for 30 days and will require new CSV Lead Imports to have an opt-in email sent to any new leads from the import. Once 30 days have passed, and the bounce rate is less than 5%, the Opt-in Probationary Period will end. If the bounce rate remains about 5%, the system will re-check daily until 30 days with a bounce rate of less than 5% has been reached. Once a low bounce rate has been obtained, the opt-in option will no longer be required when importing through CVS. Leads who did not choose to opt-in during that probationary period will still need to opt-in, you can find the manual steps to trigger this here.

#### Existing Leads

We have also added an opt-in strategy for existing leads. This does not affect leads that have already been communicated via email. This is also based on the domain's email performance in the last 30 days.

If the total number of leads imported is greater than 50 and the rate at which they are marked as junk/spam is greater than 10%, or , the total number of leads imported is greater than 50 and the bounce rate for these leads is more than 0.5% then all leads that are part of the same CSV import will do the following:

- Automatically unsubscribe them from Smart Plans, Property Alerts, Market Reports, and Market Snapshots
- Send a double opt-in email that they must click before you are able to send email communication to them via the Lofty platform.

Once a lead has opted-in the system will automatically adjust their status back to subscribed and you can continue to send email communication to them via Lofty.

## Filtering by Opt-In Status

There is a dedicated filter that has been created for this purpose. See Lead Organization with Filters > All Filters > (2) Lead Details > Contact Info .

## Opting-In Leads

The following actions can be taken to opt-in leads:

### Send Opt-In Email

Any lead that has not been opted in (the option will not be available for those that are considered opt-in) can be sent an "Opt-In Email."

- This email looks similar to the one below and cannot currently be edited.
- This email is essentially another version of the Welcome Email but specifically requests that the lead agree to opt-in to receive communication.
- The email does not expire meaning a lead can find it at any point in the future and choose to opt-in without issue.

If a lead clicks the I agree button and decides to opt in, they will see the following confirmation message. They will then be redirected to your website after 10 seconds. If a lead opted-in, you can now send them any type of email via the Lofty platform just like before the probationary period began.

However, if a lead does not opt-in, meaning they did not click the button in the email, you cannot send any auto emails to them including mass emails, Smart Plans emails, property alerts, etc. There is currently no limit to the number of times you can send an opt-in email to a lead.

#### Via Lead Profile

To send the Opt-In Email to an individual lead, find a lead that has not opted in navigate to their lead profile, click the three dots, and then select Send Opt-In Email . The lead will then be sent the opt-in email.

#### Via People Page

Navigate to the People Page , select leads that have not yet opted-in (maybe use a filter ), and then choose the option to Send Opt-In Email :

#### During Lead Import

*IMPORTANT : This is only available as an option if the Opt-In Probationary Period has been triggered due to a high bounce rate. For more information see above .

When importing leads via CSV or Google Contacts , you will need to choose whether or not you will send them an Opt-In Email. Here is where the option will appear during the lead import process:

### Opt-In Manually

The ability to manually opt-in a lead without them clicking the Yes button in an opt-in email (as outlined above) is only available on a one-on-one basis--meaning you cannot manually opt-in multiple leads at the same time.

To manually opt-in to one specific lead, do any of the following from their Lead Profile Page :

- Manually apply a Smart Plan
- Manually apply a Property Alert

When doing any of the actions above, a prompt will appear to confirm whether you would like to manually mark the lead as having opted-in in order to proceed. If you choose Yes , then the lead will be opted-in and auto email content can be sent to them now.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
The email opt-in status refers to a lead's status of opting in or out for auto-email communication (one-off manual communication can be sent still). Per Lofty's
Terms of Use (https://chime.me/privacy-terms?from=terms)
, the platform tools for email communication, etc. should not be utilized for sending emails to leads that have not given their permission to be contacted.
Lofty has put certain systems in place to protect email reputations and comply with email marketing and industry standards for unwanted communication being sent.
This article addresses how a lead's opt-in status is determined.
Summary
Opt-In Triggers (#h_01F9MBYKQCTG2HV4GAVYKSR4HN)
High Bounce Rate (#h_01F9MBYSQZ61ZM24QR6PSB6B0C)
Email-Only Leads (#h_01F9MBYY24RY1PY4RS0XJWK3WC)
CSV Import Double Opt-In Rules (#h_01FMSYMKREB8WBVMKRAZ1SEHM3)
Filtering by Opt-In Status (#h_01F9MBZ2NS232WV1A6RW893RB8)
Opting-In Leads (#h_01F9MBZBYXRW8H3G10GMJVDD36)
Send Opt-In Email (#h_01F9MBZKCC2206QV3HE011G5BQ)
Via Lead Profile (#h_01F9MC0BG7PTV2D1YVQH8G2NSN)
Via People Page (#h_01F9MC0K1P366E1SXBK68DB5S4)
During Lead Import (#h_01F9MD8N4BWKT0GE9NX0NJTZ8T)
Opt-In Manually (#h_01F9MC0QCNA0ZC12FHF7Y6VZJF)
Opt-In Triggers
By default, any lead that is entered into the CRM is considered to have opted-in. However, there are certain exceptions to that rule outlined below:
High Bounce Rate
When your team has a high bounce rate, this will trigger an opt-in probationary period which will require leads in future imports to receive an opt-in email and agree before they are sent automated communication. This is outlined in detail here:
Spam, Bounced, Phishing, and Unsafe Emails > What systems does Lofty have in place to prevent high amounts of bounced emails? (https://help.lofty.com/hc/en-us/articles/360004120452#Spam,Bounced,Phishing,andUnsafeEmails-WhatsystemsdoesChimehaveinplacetopreventhighamountsofbouncedemails?)
Email-Only Leads
Leads that have entered the system but have only provided their email address during the registration step are considered "Email-Only Leads." These leads have not completely registered on the website and as such will be considered as opted-out by default.
More information about what an email-only lead is can be found here:
Registration Pop-up Style & Settings > Email-Only Lead Registration (https://help.lofty.com/hc/en-us/articles/360056629652#h_01F01X3SWYR57CWQCDJ5R69GFH)
.
CSV Import Double Opt-In Rules
New Leads
For New Leads that come from CSV Imports. These 2 steps are automatically triggered and cover your entire sending domain.
If the total number of emails sent is greater than 500, the bounce rate is greater than 10%, and within a 15-minute time period (based in real-time from the email send time), then your team's email service through Lofty will be suspended for 2 hours. This affects manual emails, delays Smart Plan automated emails till the next day, and pauses property alerts.
If the total number of emails sent is greater than 10 and more than .5% of the emails are marked as junk/spam by the receiver
or
the total number of emails sent is greater than 10 and the bounce rate is greater than 10%, then an "Opt-in Probationary Period" will begin temporarily during the
Lead Import (https://help.chime.me/hc/en-us/articles/360001710831)
process for the entire sending domain of the account.
The period lasts for 30 days and will require new CSV Lead Imports to have an opt-in email sent to any new leads from the import.
Once 30 days have passed, and the bounce rate is less than 5%, the Opt-in Probationary Period will end. If the bounce rate remains about 5%, the system will re-check daily until 30 days with a bounce rate of less than 5% has been reached.
Once a low bounce rate has been obtained, the opt-in option will no longer be required when importing through CVS.
Leads who did not choose to opt-in during that probationary period will still need to opt-in, you can find the manual steps to trigger this
here. (#h_01F9MC0QCNA0ZC12FHF7Y6VZJF)
Existing Leads
We have also added an opt-in strategy for existing leads. This does not affect leads that have already been communicated via email. This is also based on the domain's email performance in the last 30 days.
If the total number of leads imported is greater than 50 and the rate at which they are marked as junk/spam is greater than 10%,
or
, the total number of leads imported is greater than 50 and the bounce rate for these leads is more than 0.5% then all leads that are part of the same CSV import will do the following:
Automatically unsubscribe them from Smart Plans, Property Alerts, Market Reports, and Market Snapshots
Send a double opt-in email that they must click before you are able to send email communication to them via the Lofty platform.
Once a lead has
opted-in the system will automatically adjust their status back to subscribed and you can continue to send email communication to them via Lofty.
Filtering by Opt-In Status
There is a dedicated filter that has been created for this purpose. See
Lead Organization with Filters > All Filters > (2) Lead Details > Contact Info (https://help.lofty.com/hc/en-us/articles/360055290571#h_01F3V9EB2QB575MN87W4P0GE9X)
.
Opting-In Leads
The following actions can be taken to opt-in leads:
Send Opt-In Email
Any lead that has
not
been opted in (the option will not be available for those that are considered opt-in) can be sent an "Opt-In Email."
This email looks similar to the one below and
cannot
currently be edited.
This email is essentially another version of the
Welcome Email (https://help.lofty.com/hc/en-us/articles/360022134491-Set-Up-the-Welcome-Email)
but specifically requests that the lead agree to opt-in to receive communication.
The email does
not
expire meaning a lead can find it at any point in the future and choose to opt-in without issue.
If a lead clicks the
I agree
button and decides to opt in, they will see the following confirmation message. They will then be redirected to your website after 10 seconds. If a lead opted-in, you can now send them any type of email via the Lofty platform just like before the probationary period began.
However, if a lead does
not
opt-in, meaning they did
not
click the button in the email, you
cannot
send any auto emails to them including mass emails, Smart Plans emails, property alerts, etc. There is currently
no
limit to the number of times you can send an opt-in email to a lead.
Via Lead Profile
To send the Opt-In Email to an individual lead, find a lead that has not opted in navigate to their lead profile, click the three dots, and then select
Send Opt-In Email
. The lead will then be sent the opt-in email.
Via People Page
Navigate to the
People Page
, select leads that have not yet opted-in (maybe use
a filter (https://help.chime.me/hc/en-us/articles/4403048145307#h_01F9MBZ2NS232WV1A6RW893RB8)
), and then choose the option to
Send Opt-In Email
:
During Lead Import
*IMPORTANT
: This is only available as an option if the Opt-In Probationary Period has been triggered due to a high bounce rate. For more information see
above (#h_01F9MBYSQZ61ZM24QR6PSB6B0C)
.
When importing leads
via
CSV (https://help.lofty.com/hc/en-us/articles/360001710831)
or
Google Contacts (https://help.lofty.com/hc/en-us/articles/360049874951)
,
you will need to choose whether or not you will send them an Opt-In Email. Here is where the option will appear during the lead import process:
Opt-In Manually
The ability to manually opt-in a lead without them clicking the
Yes
button in an opt-in email (as outlined above) is only available on a one-on-one basis--meaning you cannot manually opt-in multiple leads at the same time.
To manually opt-in to one specific lead, do any of the following from their
Lead Profile Page
:
Manually apply a Smart Plan
Manually apply a Property Alert
When doing any of the actions above, a prompt will appear to confirm whether you would like to manually mark the lead as having opted-in in order to proceed. If you choose
Yes
, then the lead will be opted-in and auto email content can be sent to them now.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

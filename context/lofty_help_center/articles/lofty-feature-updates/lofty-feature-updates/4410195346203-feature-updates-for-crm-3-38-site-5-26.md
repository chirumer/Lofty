# Feature Updates for CRM 3.38, Site 5.26

- Article ID: `4410195346203`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T03:01:37Z`
- Source: https://help.lofty.com/hc/en-us/articles/4410195346203-Feature-Updates-for-CRM-3-38-Site-5-26

## Body

## Introduction

*Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/agent user). For any questions related to your Lofty package or feature availability, please contact Lofty Support ( support@lofty.com ).

## Release Date

Tuesday, November 16, 2021.

## Summary

- CRM 3.38 Lead Pond: Set Pond Owner Email Deliverability Optimizations New Leads From CSV Import Existing Leads from CSV Import Property Alert Automatic Sending Frequency Design Center: Interaction Optimizations Self-Service Mail Improvements
- Site 5.26 CMA Tool

## CRM 3.38

### Lead Pond: Set Pond Owner

You can now set a Pond Owner for your Lead Pond. This will be a required field with all Lead Ponds going forward.

Learn More: Lead Pond

### Email Deliverability Optimizations

In an effort to maximize email deliverability and protect your email reputation, we have made some changes to the way our automated email system monitors emailed content in the Lofty platform.

##### New Leads From CSV Import

First, we've made some slight changes to our Double Opt-In Strategy for New Leads that come from CSV Imports. These 2 steps are automatically triggered and cover your entire sending domain.

1. If the total number of emails sent is greater than 500, the bounce rate is greater than 10%, and within a 15-minute time period, then your team's email service through Lofty will be suspended for 2 hours. This affects manual emails, delays Smart Plan automated emails till the next day, and pauses property alerts.
2. If the total number of emails is sent is greater than 10 and more than .5% of the emails are marked as junk/spam by the receiver or the total number of emails sent is greater than 10 and the bounce rate is greater than 10%, then an "Opt-in Probationary Period" will begin temporarily during the Lead Import process for the entire sending domain of the account. The period lasts for 30 days and will require new CSV Lead Imports to have an opt-in email sent to any new leads from the import. Once 30 days have passed, and the bounce rate is less than 5%, the Opt-in Probationary Period will end. If the bounce rate remains about 5%, the system will re-check daily until 30 days with a bounce rate of less than 5% has been reached. Once a low bounce rate has been obtained, the opt-in option will no longer be required when importing through CVS. Leads who did not choose to opt-in during that probationary period will still need to opt in, you can find the manual steps to trigger this here.

##### Existing Leads from CSV Import

Second, we have adjusted how existing leads that were already in the system from a CSV import are communicated with as well. This does not affect leads that have already been communicated via email. This is also based on the domain's email performance in the last 30 days.

If the total number of leads imported is greater than 50 and the rate at which they are marked as junk/spam is greater than 10%, or , the total number of leads imported is greater than 50 and the bounce rate for these leads is more than 0.5% then all leads that are part of the same CSV import will do the following:

- Automatically unsubscribe them from Smart Plans, Property Alerts, Market Reports, and Market Snapshots
- Send a double opt-in email that they must click before you are able to send email communication to them via the Lofty platform.

Once a lead has opted-in the system will automatically adjust their status back to subscribed and you can continue to send email communication to them via Lofty .

##### Property Alert Automatic Sending Frequency

The amount in which property alerts will be sent will lessen in frequency when alerts are not being opened after a certain amount of time.

1. If the lead is set to I nstantly get a property alert, and the number of alerts sent in the last 7 days is greater than 6, the alert frequency will adjust to D aily .
2. If the lead is set to receive a property alert Daily, and the alert's creation time or last time it was downgraded was more than 7 days, and if at least one alert email has been sent in the last 7 days, then the sending frequency will be set to Weekly.
3. If the lead is set to receive a property alert Weekly, and the alert creation time or last frequency adjustment time is more than 7 days, and if one alert email has been sent in the last 7 days, then the sending frequency will be adjusted down to Biweekly(every two weeks.)
4. If the lead is set to receive a property alert Biweekly, and the alert creation time or last frequency adjustment time is more than 60 days, and at least one alert email has been sent in the last 7 days, then this will trigger an adjustment down to a Monthly sending frequency.

##### Additional Optimizations

In addition to these technical changes, we have also added a customizable email template for the Double Opt-In Emails. This can be accessed under Settings > Templates > Emails > Automated Emails > Double Opt-In Email

Also with this update, if a double-opt-in email is triggered for a lead, it will show as such in the Lead Profile timeline.

Learn More:

- Spam, Bounced, Phishing, and Unsafe Emails
- Email Opt-In Status
- Email Templates
- Setting Up and Using Auto Property Alerts > Frequency Reduction for Auto Property Alerts

### Design Center: Interaction Optimizations

We have added a number of improvements to our Lofty Design Center, such as Keyboard Shortcuts, default font size improvements, zoom-in/out speeds, and general UI improvements.

#### Listing Photos

You can now access your own listings to pull their images into your designs within the Design Center. You can access the following:

- My Listings
- Team Listings
- Pocket Listings

You will not be able to access all the listings on the MLS.

#### Agent Profile Photo

In the future, when designs are added to the Design Center, images can be tagged as an agent's profile photo. This means that when the design is used, the system will automatically check the CRM first and then the CMS (Site) for a headshot profile photo and automatically use that one in the design. These images can only be tagged on upload by Lofty . If there is no profile photo available in the CRM or CMS then it will not replace it at all.

Learn More: Design Center

### Self-Service Mail Improvements

#### Mailers via Lead Profile Page

With this update, you can now send direct mailers straight from the Lead profile page.

#### Home Valuation Reports

We have improved the way Home Valuation Reports select the address that is used. Some homeowners have a mailing address to receive communication but they are property owners of other locations including vacant land, rental properties, etc. With this update, we have added some additional logic to determine these steps.

#### Free Mailer Sample

We have created a new CTA under Campaigns > Direct Mail that will allow for users to request a free postcard sample:

Learn More: Self-Service Mail, Lead Profile Page

## Site 5.26

### CMA Tool

We now offer our own CMA Tool available, as a purchased add-on, to all Lofty Users. This CMA Tool allows agents to use basic search filters in Lofty to find comparable listings and then revise the results using their expertise in their specific real estate market.

You can find this tool under Campaigns > Listing Suite > CMA , or in the Market Place, and is open to all users who have access to Sold Listing data.

Learn More: CMA Tool

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@ Lofty .com>, by phone at 1 (855) 981-7557, or by a chat with us through your Lofty CRM.

## Plain Text

Introduction
*Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/agent user). For any questions related to your Lofty package or feature availability, please contact Lofty Support (
support@lofty.com (mailto:support@chimeinc.com)
).
Release Date
Tuesday, November 16, 2021.
Summary
CRM 3.38 (#h_01FMKKWZD3TG0FPCF0TKJHA5XG)
Lead Pond: Set Pond Owner (#h_01FMAWAZAQ7YY146V9R18EQZKQ)
Email Deliverability Optimizations (#h_01FMB66SAT7CVSSW9CJVNRKCJ0)
New Leads From CSV Import (#h_01FMKPMQ0AGZ8V5T6CRAVFB8T0)
Existing Leads from CSV Import (#h_01FMKPN0CBPHE1AYEZTR48T6JN)
Property Alert Automatic Sending Frequency (#h_01FMKPN914KPHG2Q16VFJFQ18A)
Design Center: Interaction Optimizations (#h_01FMJBQ9KQQ88SNGFK7FTG10BV)
Self-Service Mail Improvements (#h_01FMJBQQK4QAM9WQ9JQ5E39VZ7)
Site 5.26 (#h_01FMKKX7X8QAAR0Z9WWSGN3486)
CMA Tool (#h_01FMB68CHPXA0A5FMG19V2D9MY)
CRM 3.38
Lead Pond: Set Pond Owner
You can now set a
Pond Owner
for your Lead Pond. This will be a required field with all Lead Ponds going forward.
Learn More:
Lead Pond (https://help.lofty.com/hc/en-us/articles/360038382872)
Email Deliverability Optimizations
In an effort to maximize email deliverability and protect your email reputation, we have made some changes to the way our automated email system monitors emailed content in the Lofty platform.
New Leads From CSV Import
First, we've made some slight changes to our Double Opt-In Strategy for New Leads that come from CSV Imports. These 2 steps are automatically triggered and cover your entire sending domain.
If the total number of emails sent is greater than 500, the bounce rate is greater than 10%, and within a 15-minute time period, then your team's email service through Lofty will be suspended for 2 hours. This affects manual emails, delays Smart Plan automated emails till the next day, and pauses property alerts.
If the total number of emails is sent is greater than 10 and more than .5% of the emails are marked as junk/spam by the receiver
or
the total number of emails sent is greater than 10 and the bounce rate is greater than 10%, then an "Opt-in Probationary Period" will begin temporarily during the
Lead Import (https://help.lofty.com/hc/en-us/articles/360001710831)
process for the entire sending domain of the account.
The period lasts for 30 days and will require new CSV Lead Imports to have an opt-in email sent to any new leads from the import.
Once 30 days have passed, and the bounce rate is less than 5%, the Opt-in Probationary Period will end. If the bounce rate remains about 5%, the system will re-check daily until 30 days with a bounce rate of less than 5% has been reached.
Once a low bounce rate has been obtained, the opt-in option will no longer be required when importing through CVS.
Leads who did not choose to opt-in during that probationary period will still need to opt in, you can find the manual steps to trigger this
here. (https://help.chime.me/hc/en-us/articles/4403048145307#h_01F9MC0QCNA0ZC12FHF7Y6VZJF)
Existing Leads from CSV Import
Second, we have adjusted how existing leads that were already in the system from a CSV import are communicated with as well. This does not affect leads that have already been communicated via email. This is also based on the domain's email performance in the last 30 days.
If the total number of leads imported is greater than 50 and the rate at which they are marked as junk/spam is greater than 10%,
or
, the total number of leads imported is greater than 50 and the bounce rate for these leads is more than 0.5% then all leads that are part of the same CSV import will do the following:
Automatically unsubscribe them from Smart Plans, Property Alerts, Market Reports, and Market Snapshots
Send a double opt-in email that they must click before you are able to send email communication to them via the
Lofty
platform.
Once a lead has
opted-in the system will automatically adjust their status back to subscribed and you can continue to send email communication to them via
Lofty
.
Property Alert Automatic Sending Frequency
The amount in which property alerts will be sent will lessen in frequency when alerts are not being opened after a certain amount of time.
If the lead is set to I
nstantly
get a property alert, and the number of alerts sent in the last 7 days is greater than 6, the alert frequency will adjust to D
aily
.
If the lead is set to receive a property alert
Daily,
and the alert's creation time or last time it was downgraded was more than 7 days, and if at least one alert email has been sent in the last 7 days, then the sending frequency will be set to
Weekly.
If the lead is set to receive a property alert
Weekly,
and the alert creation time or last frequency adjustment time is more than 7 days, and if one alert email has been sent in the last 7 days, then the sending frequency will be adjusted down to
Biweekly(every two weeks.)
If the lead is set to receive a property alert
Biweekly,
and the alert creation time or last frequency adjustment time is more than 60 days, and at least one alert email has been sent in the last 7 days, then this will trigger an adjustment down to a
Monthly
sending frequency.
Additional Optimizations
In addition to these technical changes, we have also added a customizable email template for the Double Opt-In Emails. This can be accessed under
Settings > Templates > Emails > Automated Emails > Double Opt-In Email
Also with this update, if a double-opt-in email is triggered for a lead, it will show as such in the Lead Profile timeline.
Learn More:
Spam, Bounced, Phishing, and Unsafe Emails (https://help.chime.me/hc/en-us/articles/360004120452-Avoid-Emails-Being-Marked-as-Spam)
Email Opt-In Status (https://help.chime.me/hc/en-us/articles/4403048145307)
Email Templates (https://help.chime.me/hc/en-us/articles/360055290611)
Setting Up and Using Auto Property Alerts > Frequency Reduction for Auto Property Alerts (https://help.chime.me/hc/en-us/articles/115002891271-Setting-up-Auto-Property-Alerts#h_4f7317b2-000b-45f0-b389-e0f84cec9107)
Design Center: Interaction Optimizations
We have added a number of improvements to our
Lofty
Design Center, such as Keyboard Shortcuts, default font size improvements, zoom-in/out speeds, and general UI improvements.
Listing Photos
You can now access your own listings to pull their images into your designs within the Design Center. You can access the following:
My Listings
Team Listings
Pocket Listings
You will
not
be able to access all the listings on the MLS.
Agent Profile Photo
In the future, when designs are added to the Design Center, images can be tagged as an agent's profile photo. This means that when the design is used, the system will automatically check the CRM first and then the CMS (Site) for a headshot profile photo and automatically use that one in the design. These images can only be tagged on upload
by
Lofty
. If there is no profile photo available in the CRM or CMS then it will not replace it at all.
Learn More:
Design Center (https://help.lofty.com/hc/en-us/articles/360055290711)
Self-Service Mail Improvements
Mailers via Lead Profile Page
With this update, you can now send direct mailers straight from the Lead profile page.
Home Valuation Reports
We have improved the way Home Valuation Reports select the address that is used.
Some homeowners have a mailing address to receive communication but they are property owners of other locations including vacant land, rental properties, etc. With this update, we have added some additional logic to determine these steps.
Free Mailer Sample
We have created a new CTA under
Campaigns
>
Direct Mail
that will allow for users to request a free postcard sample:
Learn More:
Self-Service Mail, (https://help.lofty.com/hc/en-us/articles/360058318632)
Lead Profile Page (https://help.lofty.com/hc/en-us/articles/360055290591)
Site 5.26
CMA Tool
We now offer our own CMA Tool available, as a purchased add-on, to all Lofty Users. This CMA Tool allows agents to use basic search filters in Lofty to find comparable listings and then revise the results using their expertise in their specific real estate market.
You can find this tool under
Campaigns > Listing Suite > CMA
, or in the
Market Place,
and is open to all users who have access to Sold Listing data.
Learn More:
CMA Tool (https://help.lofty.com/hc/en-us/articles/4408440387099)
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@
Lofty
.com>, by phone at 1 (855) 981-7557, or by a chat with us through your
Lofty
CRM.

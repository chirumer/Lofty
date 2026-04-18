# Feature Updates for CRM 3.29, Site 5.17

- Article ID: `4402696152475`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T03:07:58Z`
- Source: https://help.lofty.com/hc/en-us/articles/4402696152475-Feature-Updates-for-CRM-3-29-Site-5-17

## Body

## Introduction

*Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/agent user). For any questions related to your Lofty package or feature availability, please contact Lofty Support ( support@lofty.com ).

## Release Date

Monday, July 5, 2021.

## Summary

- Misc. Announcements API vendorKey
- CRM 3.29 Lead Routing: Active Hours Email Opt-In Logic
- Site 5.17 Zillow Reviews Update

## Misc. Announcements

### API vendorKey

Please be aware that a new requirement has been added to the Lofty API. This requirement is a "vendorKey" that must be requested by every partner/vendor utilizing the Lofty API. If you or a partner service/app is utilizing Lofty 's API and have not already received the notifications regarding this change, please take the time to reference the following: Lofty API > Vendor Key . Failure to adjust the API connection will result in loss of API access and therefore disruption of services.

## CRM 3.29

### Lead Routing: Active Hours

A new setting is available when configuring lead routing rules that establish a specific schedule for each individual lead routing rule. So, depending on the time and day that a lead enters the CRM, it will skip any rules that do not have active schedules.

In the flowchart below, you can see how it fits into the lead routing logic already in place. The logic outlined in red is what has been added with this release.

For more information on this improvement, see Lead Routing Rules > Active Hours .

### Email Opt-In Logic

The email opt-in logic was first introduced as part of Feature Updates for CRM 3.27, Site 5.15 > Spam, Bounced, Phishing, and Unsafe Emails . Some additional improvements have been added to this.

#### Email Only Leads

Email-Only leads will now be marked as opted- out by default meaning no automatic emails can be sent to them until they are opted-in. This is due to the fact that these leads have not finished the registration process and are therefore not likely expecting automated marketing communication from you.

#### Opt-In Status

More information regarding Opt-In Status has been documented HERE including the explanation of a new filter that has been added to find the opt-in status of leads (pictured below).

## Site 5.17

### Zillow Reviews Update

The method used to capture Zillow reviews has been updated with this release. Previously, Zillow reviews were scraped from your Zillow Reviews URL but this method was not stable resulting in inconsistent review syncing. The new method uses Zillow API which is way more stable and allows for the 10 most recent reviews from Zillow to be displayed within a Reviews Block.

Another important part of this update is that Zillow reviews are now configured individually within each Reviews Block which essentially means that if you want to configure multiple Zillow review sources on one page you can now do so.

See Reviews Block > Configuring the Reviews Block for more information on the updated product logic. Please note that if you had previously configured Zillow reviews via the old method (website "scraping"), these reviews will be saved and moved under the "Default" review source within a Reviews Block (see Reviews Block for more info), but they will no longer sync future reviews.

Take a minute to assess the best way to display your future Zillow reviews. If you used the previous method to pull in Zillow reviews then you may consider keeping those accessible and then adding a new block for the most recent 10 Zillow reviews right next to it on the same page.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
*Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/agent user). For any questions related to your Lofty package or feature availability, please contact Lofty Support (
support@lofty.com (mailto:support@chimeinc.com)
).
Release Date
Monday, July 5, 2021.
Summary
Misc. Announcements (#h_01F9M8SJB2X29BWNQBJR908KJ2)
API vendorKey (#h_01F9MESX6TQQZ1R7CJHANX407D)
CRM 3.29 (#h_01F8ZWFF95W7K2SZZ30B9C830F)
Lead Routing: Active Hours (#id-7/1/21:FeatureReleaseTrainingforCRM3.29,Site5.17,Finance1.84-LeadRouting:ActiveHours)
Email Opt-In Logic (#id-7/1/21:FeatureReleaseTrainingforCRM3.29,Site5.17,Finance1.84-Email-OnlyLeadRegistration)
Site 5.17 (#h_01F8ZWFK1FQJ96B8M51CNPA51Q)
Zillow Reviews Update (#h_01F9N2BVK020AAXY6T6SYEBYMD)
Misc. Announcements
API vendorKey
Please be aware that a new requirement has been added to the
Lofty
API. This requirement is a "vendorKey" that must be requested by every partner/vendor utilizing the
Lofty
API. If you or a partner service/app is utilizing
Lofty
's API and have not already received the notifications regarding this change, please take the time to reference the following:
Lofty
API > Vendor Key (https://help.chime.me/hc/en-us/articles/360061955671#h_01F9M6TV6XRDTTFXTA723SX3EH)
. Failure to adjust the API connection will result in loss of API access and therefore disruption of services.
CRM 3.29
Lead Routing: Active Hours
A new setting is available when configuring lead routing rules that establish a specific schedule for each individual lead routing rule. So, depending on the time and day that a lead enters the CRM, it will skip any rules that do not have active schedules.
In the flowchart below, you can see how it fits into the lead routing logic already in place. The logic outlined in red is what has been added with this release.
For more information on this improvement, see
Lead Routing Rules > Active Hours (https://help.chime.me/hc/en-us/articles/360055177831#h_01F9M5BVDG27YXMSVG03Q8NYSE)
.
Email Opt-In Logic
The email opt-in logic was first introduced as part of
Feature Updates for CRM 3.27, Site 5.15 > Spam, Bounced, Phishing, and Unsafe Emails (https://help.chime.me/hc/en-us/articles/4402375716621-Feature-Updates-for-CRM-3-27-Site-5-15#h_01F7A7ZVS0K1ECM3EYK97WYGKS)
. Some additional improvements have been added to this.
Email Only Leads
Email-Only leads (https://help.chime.me/hc/en-us/articles/360056629652#h_01F01X3SWYR57CWQCDJ5R69GFH)
will now be marked as opted-
out
by default meaning no automatic emails can be sent to them until they are opted-in. This is due to the fact that these leads have not finished the registration process and are therefore not likely expecting automated marketing communication from you.
Opt-In Status
More information regarding Opt-In Status has been documented
HERE (https://help.chime.me/hc/en-us/articles/4403048145307)
including the explanation of a new filter that has been added to find the opt-in status of leads (pictured below).
Site 5.17
Zillow Reviews Update
The method used to capture Zillow reviews has been updated with this release. Previously, Zillow reviews were scraped from your Zillow Reviews URL but this method was
not
stable resulting in inconsistent review syncing. The new method uses Zillow API which is way more stable and allows for the 10 most recent reviews from Zillow to be displayed within a Reviews Block.
Another important part of this update is that Zillow reviews are now configured
individually within each Reviews Block
which essentially means that if you want to configure multiple Zillow review sources on one page you can now do so.
See
Reviews Block > Configuring the Reviews Block (https://help.chime.me/hc/en-us/articles/360038293251#h_01F9N1Q7V705EXP556CTRJ96SH)
for more information on the updated product logic. Please note that if you had previously configured Zillow reviews via the old method (website "scraping"), these reviews will be saved and moved under the "Default" review source within a Reviews Block (see
Reviews Block (https://help.chime.me/hc/en-us/articles/360038293251)
for more info), but they will no longer sync future reviews.
Take a minute to assess the best way to display your future Zillow reviews. If you used the previous method to pull in Zillow reviews then you may consider keeping those accessible and then adding a new block for the most recent 10 Zillow reviews right next to it on the same page.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

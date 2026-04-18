# Feature Updates for Lofty 3.48

- Article ID: `6071299038619`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T02:54:54Z`
- Source: https://help.lofty.com/hc/en-us/articles/6071299038619-Feature-Updates-for-Lofty-3-48

## Body

## Introduction

*Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/agent user). For any questions related to your Lofty package or feature availability, please contact Lofty Support ( support@lofty.com ).

## Release Date

Monday, May 23rd, 2022

## Summary

- Lofty Calendar
- Smart Plan Logs
- 10 DLC Brand & Campaign Self-Service Registration
- Transaction Quick Add
- Design Center Optimizations
- Google Ads Integration
- Chat Support
- CMA Optimizations
- Google My Business Integration
- Social Studio Improvements
- Lofty -Purchased Domain Auto-Renewal
- AI Assistant Improvements
- Neighborhood Page Optimizations

## Lofty Calendar

Previously, as part of CRM 3.44 , we released the "Tasks Calendar View." The goal moving forward will continue to be to make the calendar more useful within the Lofty platform. These updates reflect that.

You can now integrate your Google Calendar, Outlook Calendar, and Calendly with the Lofty calendar. There are three different places you can do that:

(1) Settings > Integrations :

(2) Marketplace > Productivity :

(3) Tasks > Calendar View > Integrated Calendars > + :

Here are some important notes about how this works:

- You can integrate more than one calendar into Lofty. For example, you can have 1 Google Calendar + 1 Outlook Calendar + 1 Calendly connection in place, but you cannot have 2 Google/Outlook calendars connected at the same time. This is on a per-user basis.
- Google Calendar and Outlook Calendar support a two-way sync. This means if events are added to the third-party calendar, they will sync to the Lofty Calendar. There is a toggle for each integrated calendar that, when enabled, allows for events to continue to sync from Lofty to the third-party calendar as well.
- Only "appointments" on the Lofty Calendar will be synced to the third-party calendars. If multiple calendars are integrated into Lofty then the appointment will be synced to all of them. Currently, if a Lofty appointment syncs to an integrated calendar, all of the integrated calendars will send a calendar invite to the lead via email.
- Calendly only supports a one-way sync from Calendly to the Lofty Calendar.
- All shared calendars on the integrated calendar will be connected and visible on the Lofty calendar. For example, if you have a personal Google Calendar shared with a work Google Calendar, it will be available to display within Lofty.
- Only future events will be synced between calendars.
- Events that are synced to the Lofty Calendar are only displayed in Lofty and cannot be edited/deleted.
- When an event is updated/deleted on a third-party calendar, it will also be updated/deleted on the Lofty Calendar.
- The following fields sync from third-party calendars: Title Description Date Participants Location Source

## Smart Plan Logs

There are many reasons why a Smart Plan might have its status changed when applied to a lead. Sometimes a Smart Plan is paused or a step skipped, etc. This update provides a detailed log of what a Smart Plan is doing when applied to leads so that you can tell what happened without having to dig for it.

*IMPORTANT: This log will only be accessible when a Smart Plan is either active or paused, but not when it has been completed/terminated.

When you navigate to Lead Profile > Smart Plans and hover over the Smart Plan, there will be three options to the right. The middle action button is the Plan Log :

Once this has been clicked, a detailed window will appear that shows a log of everything that the Smart Plan has done as related to this particular lead. The log will look something like this one, with the name of the Smart Plan at the top and details for each of the events that have occurred with the Smart Plan.

## 10 DLC Brand & Campaign Self-Service Registration

In an effort to protect consumers, increase deliverability, and create a trusted ecosystem with high customer engagement, major U.S. carriers (AT&T, T-Mobile, etc.) are requiring companies that send SMS messages within the United States to register their messaging campaigns. With this particular release, we have enabled self-service registration to take place on Enterprise and Multi-Team Lofty packages only. Other packages will be supported in the future. Only the Company Owner/Admin (Enterprise Package) and Multi-Team Owner (Multi-Team Package) can edit this setting.

This option is available under Settings > Manage Dialer > Register your Business Profile :

You will then be required to fill out the information below to proceed with registration:

After submission, the application will be sent for review to the Campaign Registry for review. Click on the button to register your information for an updated status on your application. The timeline for this can vary as it still requires manual intervention, but should be approximately 1-2 weeks at most.

## Transaction Quick Add

In order to simplify the process to add a new transaction, whenever you click the button to do so it will open up a simplified view with only the required fields. If you are in a hurry and need to get a transaction added quickly then this option will make doing so easier so that you do not see unnecessary fields.

More detailed information can be added later or by clicking on the Details View . This view is similar to what was active prior to this update.

Also as part of this update, when saving a new transaction it will open up in a new tab so that you can reference multiple tabs of information if needed.

## Design Center Optimizations

#### Create Designs Using All Listings

When creating designs in the Design Center, you can now select any listing from your connected MLS(s) to add to your designs. This does not change the fact that permission must be received before marketing a listing that is not your own–and the system will indicate this warning as well.

## Google Ads Integration

You can now add your Google conversion code directly into your Lofty -built website via the CMS . Google will typically provide you with two codes but the only one you will need to use is the event snippet that looks like this one (use your own not this one!):

<!-- Event snippet for Website Lead conversion page --> <script> gtag('event', 'conversion', {'send_to': 'AW-10853745497/upojCPH8s6EDENmGvLco'} ); </script>

This can be added via CMS > Settings > Integrations > Google Ads . Paste your code into the field and then save it to begin tracking conversions.

## Chat Support

Chat support is available for all users ! You can access chat support by clicking on the ? icon in the top-right of your CRM and choosing to Chat with Support . If a Support Rep is unavailable to chat with you at the time, you will see a form to submit a ticket and will receive a response via email as soon as possible.

## CMA Optimizations

#### New Creation Process

When you click on the + Add New button, you will now be asked to choose the presentation type before actually starting the CMA:

Once you click to Create Presentation , you can start the process of choosing a lead, a subject property, etc.

#### New CMA Type: Present Yourself

In addition to the Seller and Buyer CMA Presentations , a new option to Present Yourself has been added with this release.

This presentation takes you right to the page selection process because (a) there is no subject property with this presentation type and (b) no lead has to be selected. The pages available to choose from will be those that present the value of an agent only–no comp data necessary.

#### New User Interface

A variety of UI aspects have changed in Step 2 of the CMA creation process including the following:

- Map Search Tools are now more visible and floating on the top-middle instead of the top-left. Switching between "Neighborhood," "Radius," and "Polygon Draw" is now easier.
- The applied criteria collapse and expand on hover instead of taking up a large part of the screen at the top.
- The "Filters" and "View Selected" buttons have swapped locations.
- The display of the "Subject Property" is slightly different now.
- The Comps List is no longer separated by drop-downs for listing status and is now in the order of "Sold," "Pending," and "Active" instead of the reverse

Before Update | After Update

#### Add By MLS Listing ID

You can now add listings to a CMA by using their MLS Listing ID on the "View Selected" menu and at the bottom of the comps list in step 3.

#### Adjust Specific Comps

Add Remarks

Click on the Add Remarks option and type in any notes that you would like to display for your lead:

Adjust DOM (Days On Market)

The DOM should sync from the MLS but if for whatever reason you need to manually override this, you can do so with this option:

Make Pricing Adjustments

If the comps you have selected are perfect matches for the subject property besides for only a small number of things, you can apply adjustments to each individual comp to show why it should be higher/lower than what it currently shows as. You may also consider adding a pricing adjustment for a comp that sold some time ago and you want to account for what it would be worth today vs. what it sold for a long time ago.

#### New Form

At the end of each CMA, there is now a quick drop-down form that is to be completed by the lead. This action is equivalent to the lead leaving a message on your website and the notifications will behave the same (opportunity notifications) when sent to you as a user.

#### PDF Improvements

The downloadable PDF has now been improved. A sample of what this PDF looks like can be downloaded here .

## Google My Business Integration

You can now integrate Google My Business with Lofty to power your website reviews.

Navigate to CMS > Settings > Integrations > Google My Business :

Follow the steps to integrate and it will ask you which business profile you want to connect to Lofty:

Once connected, your Google My Business profile information will display in the CMS:

Currently, the only place you can actually use this integration is in the Reviews Block . Instead of choosing the source of the review as Zillow or manual reviews that you have added (Default), you can sync in your Google reviews. All reviews will be synced and you are unable to pick and choose the ones you would like to display.

Reference these links for Google My Business access:

- https://www.google.com/business/
- https://support.google.com/business/answer/6300717

## Social Studio Improvements

#### Link Previewing

The Lofty Social Studio has had yet another improvement! Now, when you create a post that has a link associated with it (typically a listing detail page), you can choose between displaying the photos from that listing on a carousel or simply using the link preview image. The platform samples displayed at the right side will update based on this selection as well–but keep in mind that Instagram does not support showing a link preview so it will just be displayed as normal text on that platform.

This can be toggled back and forth here in the post-creation process:

#### More Auto-Posting Variables

In the auto-post settings, previously only listing-type variables (merge fields) were supported. Now, agent-type variables are also supported:

Before Update | After Update

#### Listing Sharing Method

Once the Social Studio was released, its social posting feature took over all locations in Lofty where you could share to social channels. For example, with Listing Discovery , the ability to simply share directly to Facebook, etc. was replaced by the Social Studio. With this update, you can now choose whether you want to use Social Studio or if you want to simply open Facebook and post to share a listing:

## Lofty -Purchased Domain Auto-Renewal

If you have purchased a domain for your website using Lofty, this will auto-renew prior to expiration. You will receive a notification email informing you that it has auto-renewed and that you have been billed or if payment failed for whatever reason. These emails will look like the following:

## AI Assistant Improvements

#### Manual Triggers for Seller Leads

As part of CRM 3.45 , the ability to manually trigger the AI Assistant to pursue a specific objective with a buyer lead was supported. Now that additional seller lead scripts have been added to the AI's toolbox, the same feature will be enabled for seller leads as well.

For seller or buyer leads, the following actions are available to select from:

If the lead is marked as Buyer & Seller, there will be tabs with both sets of options available:

#### AI Smart Plan Action

The AI Assistant can now be triggered (or muted) using a Smart Plan action. Some key benefits of enabling this include the following:

- This will help ensure that every lead (even those that are added manually to the CRM) can have the AI Assistant triggered.
- Mass muting of the AI Assistant will be easier to accomplish

Depending on the lead type applicable to the Smart Plan, the options will change. In this example screenshot, this is looking at leads that are Buyer & Seller:

Please note that currently, you can only use the mute/unmute action once in a Smart Plan. So you cannot constantly unmute/mute at different stages of the same Smart Plan.

## Neighborhood Page Optimizations

#### Multi-Level Neighborhood Selection

The data used to produce data and boundaries for neighborhoods oftentimes has multiple levels. What this means is that there are multiple definitions for a neighborhood using the exact same name. With this update, you can toggle between them using the icon next to their name and this will result in the boundary displaying at the left adjusting accordingly. This icon will only appear when there are multiple options for that same neighborhood name.

#### Canada Neighborhoods

First of all, be sure that you have "Canada" selected under CMS > Settings > Basic Info > Country .

The following are supported when adding neighborhoods for Canada:

- Map
- Area Introduction Field
- Listings
- Market Trends

This guide shows the typical components of neighborhood data for the U.S. vs. Canada:

Block Type | Screenshot | U.S. | Canada
Map |  | ✅ | ✅
Area Introduction |  | ✅ | ✅
Listings |  | ✅ | ✅
Market Trends |  | ✅ | ✅
Local Info |  | ✅ | ❌
Schools & Businesses |  | ✅ | ❌
Demographic Info. |  | ✅ | ❌

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
*Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/agent user). For any questions related to your Lofty package or feature availability, please contact Lofty Support (
support@lofty.com (mailto:support@chimeinc.com)
).
Release Date
Monday, May 23rd, 2022
Summary
Lofty Calendar (#id-5/19/22:FeatureReleaseTrainingforChime3.48-ChimeCalendar)
Smart Plan Logs (#id-5/19/22:FeatureReleaseTrainingforChime3.48-SmartPlanLogs)
10 DLC Brand & Campaign Self-Service Registration (#id-5/19/22:FeatureReleaseTrainingforChime3.48-10DLCBrand&CampaignSelf-ServiceRegistration)
Transaction Quick Add (#id-5/19/22:FeatureReleaseTrainingforChime3.48-TransactionQuickAdd)
Design Center Optimizations (#id-5/19/22:FeatureReleaseTrainingforChime3.48-DesignCenterOptimizations)
Google Ads Integration (#id-5/19/22:FeatureReleaseTrainingforChime3.48-GoogleAdsIntegration)
Chat Support (#id-5/19/22:FeatureReleaseTrainingforChime3.48-ChatSupport)
CMA Optimizations (#id-5/19/22:FeatureReleaseTrainingforChime3.48-CMAOptimizations)
Google My Business Integration (#id-5/19/22:FeatureReleaseTrainingforChime3.48-GoogleMyBusinessIntegration)
Social Studio Improvements (#id-5/19/22:FeatureReleaseTrainingforChime3.48-SocialStudioImprovements)
Lofty -Purchased Domain Auto-Renewal (#id-5/19/22:FeatureReleaseTrainingforChime3.48-Chime-PurchasedDomainAuto-Renewal)
AI Assistant Improvements (#id-5/19/22:FeatureReleaseTrainingforChime3.48-AIAssistantImprovements)
Neighborhood Page Optimizations (#id-5/19/22:FeatureReleaseTrainingforChime3.48-NeighborhoodPageOptimizations)
Lofty Calendar
Previously, as part of
CRM 3.44 (https://help.chime.me/hc/en-us/articles/4431034115867-Feature-Updates-for-CRM-3-44-Site-5-32)
, we released the "Tasks Calendar View." The goal moving forward will continue to be to make the calendar more useful within the Lofty platform. These updates reflect that.
You can now integrate your Google Calendar, Outlook Calendar, and Calendly with the Lofty calendar. There are three different places you can do that:
(1)
Settings
>
Integrations
:
(2)
Marketplace
>
Productivity
:
(3)
Tasks
>
Calendar View
>
Integrated Calendars
>
+
:
Here are some important notes about how this works:
You can integrate more than one calendar into Lofty. For example, you can have 1 Google Calendar + 1 Outlook Calendar + 1 Calendly connection in place, but you
cannot
have 2 Google/Outlook calendars connected at the same time. This is on a per-user basis.
Google Calendar and Outlook Calendar support a
two-way
sync. This means if events are added to the third-party calendar, they will sync to the Lofty Calendar. There is a toggle for each integrated calendar that, when enabled, allows for events to continue to sync from Lofty to the third-party calendar as well.
Only "appointments" on the Lofty Calendar will be synced to the third-party calendars. If multiple calendars are integrated into Lofty then the appointment will be synced to all of them. Currently, if a Lofty appointment syncs to an integrated calendar,
all
of the integrated calendars will send a calendar invite to the lead via email.
Calendly only supports a
one-way
sync from Calendly to the Lofty Calendar.
All shared calendars on the integrated calendar will be connected and visible on the Lofty calendar. For example, if you have a personal Google Calendar shared with a work Google Calendar, it will be available to display within Lofty.
Only future events will be synced between calendars.
Events that are synced to the Lofty Calendar are only displayed in Lofty and cannot be edited/deleted.
When an event is updated/deleted on a third-party calendar, it will also be updated/deleted on the Lofty Calendar.
The following fields sync from third-party calendars:
Title
Description
Date
Participants
Location
Source
Smart Plan Logs
There are many reasons why a Smart Plan might have its status changed when applied to a lead. Sometimes a Smart Plan is paused or a step skipped, etc. This update provides a detailed log of what a Smart Plan is doing when applied to leads so that you can tell what happened without having to dig for it.
*IMPORTANT: This log will only be accessible when a Smart Plan is either active or paused, but not when it has been completed/terminated.
When you navigate to
Lead Profile
>
Smart Plans
and hover over the Smart Plan, there will be three options to the right. The middle action button is the
Plan Log
:
Once this has been clicked, a detailed window will appear that shows a log of everything that the Smart Plan has done as related to this particular lead. The log will look something like this one, with the name of the Smart Plan at the top and details for each of the events that have occurred with the Smart Plan.
10 DLC Brand & Campaign Self-Service Registration
In an effort to protect consumers, increase deliverability, and create a trusted ecosystem with high customer engagement, major U.S. carriers (AT&T, T-Mobile, etc.) are requiring companies that send SMS messages within the United States to register their messaging campaigns. With this particular release, we have enabled self-service registration to take place on
Enterprise
and
Multi-Team
Lofty packages only. Other packages will be supported in the future. Only the Company Owner/Admin (Enterprise Package) and Multi-Team Owner (Multi-Team Package) can edit this setting.
This option is available under
Settings
>
Manage Dialer
>
Register your Business Profile
:
You will then be required to fill out the information below to proceed with registration:
After submission, the application will be sent for review to the
Campaign Registry (https://www.campaignregistry.com/)
for review. Click on the button to register your information for an updated status on your application. The timeline for this can vary as it still requires manual intervention, but should be approximately 1-2 weeks at most.
Transaction Quick Add
In order to simplify the process to add a new transaction, whenever you click the button to do so it will open up a simplified view with only the required fields. If you are in a hurry and need to get a transaction added quickly then this option will make doing so easier so that you do not see unnecessary fields.
More detailed information can be added later or by clicking on the
Details View
. This view is similar to what was active prior to this update.
Also as part of this update, when saving a new transaction it will open up in a new tab so that you can reference multiple tabs of information if needed.
Design Center Optimizations
Create Designs Using All Listings
When creating designs in the Design Center, you can now select any listing from your connected MLS(s) to add to your designs. This does
not
change the fact that permission must be received before marketing a listing that is not your own–and the system will indicate this warning as well.
Google Ads Integration
You can now add your Google conversion code directly into your Lofty -built website via the
CMS
. Google will typically provide you with two codes but the only one you will need to use is the
event snippet
that looks like this one (use your own not this one!):
<!-- Event snippet for Website Lead conversion page -->
<script>
gtag('event', 'conversion',
{'send_to': 'AW-10853745497/upojCPH8s6EDENmGvLco'}
);
</script>
This can be added via
CMS
>
Settings
>
Integrations
>
Google Ads
. Paste your code into the field and then save it to begin tracking conversions.
Chat Support
Chat support is
available for all users
! You can access chat support by clicking on the
?
icon in the top-right of your CRM and choosing to
Chat with Support
. If a Support Rep is unavailable to chat with you at the time, you will see a form to submit a ticket and will receive a response via email as soon as possible.
CMA Optimizations
New Creation Process
When you click on the
+ Add New
button, you will now be asked to choose the presentation type before actually starting the CMA:
Once you click to
Create Presentation
, you can start the process of choosing a lead, a subject property, etc.
New CMA Type: Present Yourself
In addition to the
Seller
and
Buyer
CMA Presentations
, a new option to
Present Yourself
has been added with this release.
This presentation takes you right to the page selection process because (a) there is no subject property with this presentation type and (b) no lead has to be selected. The pages available to choose from will be those that present the value of an agent only–no comp data necessary.
New User Interface
A variety of UI aspects have changed in Step 2 of the CMA creation process including the following:
Map Search Tools are now more visible and floating on the top-middle instead of the top-left. Switching between "Neighborhood," "Radius," and "Polygon Draw" is now easier.
The applied criteria collapse and expand on hover instead of taking up a large part of the screen at the top.
The "Filters" and "View Selected" buttons have swapped locations.
The display of the "Subject Property" is slightly different now.
The Comps List is no longer separated by drop-downs for listing status and is now in the order of "Sold," "Pending," and "Active" instead of the reverse
Before Update
After Update
Add By MLS Listing ID
You can now add listings to a CMA by using their MLS Listing ID on the "View Selected" menu and at the bottom of the comps list in step 3.
Adjust Specific Comps
Add Remarks
Click on the
Add Remarks
option and type in any notes that you would like to display for your lead:
Adjust DOM (Days On Market)
The DOM should sync from the MLS but if for whatever reason you need to manually override this, you can do so with this option:
Make Pricing Adjustments
If the comps you have selected are perfect matches for the subject property besides for only a small number of things, you can apply adjustments to each individual comp to show why it should be higher/lower than what it currently shows as. You may also consider adding a pricing adjustment for a comp that sold some time ago and you want to account for what it would be worth today vs. what it sold for a long time ago.
New Form
At the end of each CMA, there is now a quick drop-down form that is to be completed by the lead. This action is equivalent to the lead leaving a message on your website and the notifications will behave the same (opportunity notifications) when sent to you as a user.
PDF Improvements
The downloadable PDF has now been improved. A sample of what this PDF looks like can be downloaded
here (https://help.lofty.com/hc/article_attachments/6092534699931)
.
Google My Business Integration
You can now integrate
Google My Business
with Lofty to power your website reviews.
Navigate to
CMS
>
Settings
>
Integrations
>
Google My Business
:
Follow the steps to integrate and it will ask you which business profile you want to connect to Lofty:
Once connected, your
Google My Business
profile information will display in the CMS:
Currently, the only place you can actually use this integration is in the
Reviews Block (https://help.chime.me/hc/en-us/articles/360038293251)
. Instead of choosing the source of the review as Zillow or manual reviews that you have added (Default), you can sync in your Google reviews.
All
reviews will be synced and you are unable to pick and choose the ones you would like to display.
Reference these links for Google My Business access:
https://www.google.com/business/
https://support.google.com/business/answer/6300717
Social Studio Improvements
Link Previewing
The
Lofty
Social Studio (https://help.chime.me/hc/en-us/articles/4416954832795-Social-Studio-Beta-)
has had yet another improvement! Now, when you create a post that has a link associated with it (typically a listing detail page), you can choose between displaying the photos from that listing on a carousel or simply using the link preview image. The platform samples displayed at the right side will update based on this selection as well–but keep in mind that Instagram does
not
support showing a link preview so it will just be displayed as normal text on that platform.
This can be toggled back and forth here in the post-creation process:
More Auto-Posting Variables
In the auto-post settings, previously only listing-type variables (merge fields) were supported. Now, agent-type variables are also supported:
Before Update
After Update
Listing Sharing Method
Once the Social Studio was released, its social posting feature took over all locations in Lofty where you could share to social channels. For example, with
Listing Discovery
, the ability to simply share directly to Facebook, etc. was replaced by the Social Studio. With this update, you can now choose whether you want to use Social Studio or if you want to simply open Facebook and post to share a listing:
Lofty -Purchased Domain Auto-Renewal
If you have purchased a domain for your website using Lofty, this will auto-renew prior to expiration. You will receive a notification email informing you that it has auto-renewed and that you have been billed or if payment failed for whatever reason. These emails will look like the following:
AI Assistant Improvements
Manual Triggers for Seller Leads
As part of
CRM 3.45 (https://help.chime.me/hc/en-us/articles/4643782120603-Feature-Updates-for-CRM-3-45-Site-5-33#id-3/14/22:FeatureReleaseTrainingforCRM3.45,Site5.33-AIAssistant:ManualTriggersandRecommendations)
,
the ability to manually trigger the AI Assistant to pursue a specific objective with a buyer lead was supported. Now that additional seller lead scripts have been added to the AI's toolbox, the same feature will be enabled for seller leads as well.
For seller or buyer leads, the following actions are available to select from:
If the lead is marked as Buyer & Seller, there will be tabs with both sets of options available:
AI Smart Plan Action
The AI Assistant can now be triggered (or muted) using a Smart Plan action. Some key benefits of enabling this include the following:
This will help ensure that every lead (even those that are added manually to the CRM) can have the AI Assistant triggered.
Mass muting of the AI Assistant will be easier to accomplish
Depending on the lead type applicable to the Smart Plan, the options will change. In this example screenshot, this is looking at leads that are Buyer & Seller:
Please note that
currently, you can only use the mute/unmute action once in a Smart Plan. So you cannot constantly unmute/mute at different stages of the same Smart Plan.
Neighborhood Page Optimizations
Multi-Level Neighborhood Selection
The data used to produce data and boundaries for neighborhoods oftentimes has multiple levels. What this means is that there are multiple definitions for a neighborhood using the exact same name. With this update, you can toggle between them using the icon next to their name and this will result in the boundary displaying at the left adjusting accordingly. This icon will only appear when there are multiple options for that same neighborhood name.
Canada Neighborhoods
First of all, be sure that you have "Canada" selected under
CMS
>
Settings
>
Basic Info
>
Country
.
The following are supported when adding neighborhoods for Canada:
Map
Area Introduction Field
Listings
Market Trends
This guide shows the typical components of neighborhood data for the U.S. vs. Canada:
Block Type
Screenshot
U.S.
Canada
Map
✅
✅
Area Introduction
✅
✅
Listings
✅
✅
Market Trends
✅
✅
Local Info
✅
❌
Schools & Businesses
✅
❌
Demographic Info.
✅
❌
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

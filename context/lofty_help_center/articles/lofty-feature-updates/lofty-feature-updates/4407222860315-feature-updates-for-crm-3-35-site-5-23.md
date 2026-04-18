# Feature Updates for CRM 3.35, Site 5.23

- Article ID: `4407222860315`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T03:02:59Z`
- Source: https://help.lofty.com/hc/en-us/articles/4407222860315-Feature-Updates-for-CRM-3-35-Site-5-23

## Body

## Introduction

*Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/agent user). For any questions related to your Lofty package or feature availability, please contact Lofty Support ( support@lofty.com ).

## Release Date

Monday, September 27, 2021.

## Summary

- CRM 3.35 Advanced People Filter Optimization Smart Plan Optimizations Auto Apply Buttons Auto Pause When - The Lead's Pipeline Changes "Within" Time Range Options Auto Email: CC Family Members Transaction Management Improvements Custom Roles Checklist Improvements Assign To Options Additional Checklist Task Reminder Options Task Order Individual Transaction Task Organization & Reminders Show Completed Tasks AI Assistant: New Site Trigger Menu Location Change: Smart Plans, AI Assistant, Auto Alerts
- Site 5.23 Block Emails Landing Page Improvements Quick Search Lists Search Bar Suggestions QR Code Site Report

## CRM 3.35

### Advanced People Filter Optimization

Three new criteria have been added to the filters on the People page. These are found under Advanced Filter > Lead Details:

1. Min Bathrooms
2. Min Bedrooms
3. Property Type

These filters pull their data directly from the Search Criteria on a lead profile and will allow for finding leads looking for properties that fall within these criteria.

Learn More: Lead Organization with Filters

### Smart Plan Optimizations

#### Auto Apply Buttons

The auto-apply buttons have been made more accessible. There is now a Clear button that can be clicked to clear all the criteria instead of having to manually go in and remove it. The Auto Apply switch has also been moved further left to be more visible.

#### Auto Pause When - The Lead's Pipeline Changes

The criteria to auto-pause when a lead's pipeline stage changes can now be used at the same time as the Change Pipeline action.

#### "Within" Time Range Options

Previously only available on the first step of a Smart Plan, each step of a Smart Plan can now have a "within" timeframe defined. This allows for automated steps of a Smart Plan to be triggered during daytime hours, etc. The way this works is if that step of the Smart Plan was scheduled to trigger but it happens outside of the defined "within" range, it will wait until the next day before triggering.

Please note that this still does not apply to system actions like Change Pipeline / Change Group / etc. which can only be triggered immediately.

#### Auto Email: CC Family Members

You can now CC all family members of a lead when using the Auto Email action in a Smart Plan:

Learn More: Smart Plans

### Transaction Management Improvements

#### Custom Roles

You can now add custom roles by navigating to Settings > Transaction Roles :

Additional roles (up to 50, in addition to the built-in defaults) can be added by clicking on the + Add a Role button at the top:

To add someone to a role on a transaction detail page, you can do so by clicking on the Add a Contact button. Only one person can be added to each role on a transaction detail page.

#### Checklist Improvements

##### Assign To Options

Prior to this release, all checklist tasks were only assigned to the "Transaction Owner." With this update, you can assign to the other roles associated with transactions.

##### Additional Checklist Task Reminder Options

Prior to this release, you could only choose one option (by SMS or by call) at a time, but now you could pick all three. The "push" notification option was also added in this release as well. The options after this release are the following:

- Push
- by SMS
- by Call

The "Push" option can only be triggered to user-type accounts (agents, lenders).

##### Task Order

The order of transaction checklist tasks can now be adjusted when building out the checklist templates. This was not previously available. When a transaction moves to the corresponding stage, all tasks will still trigger, but they will be in the order created within the checklist template.

##### Task Presentation

All transaction tasks are now displayed under a transaction stage. This makes keeping old and new tasks in the right order will be much easier to accomplish.

##### Individual Transaction Task Organization & Reminders

When adding an individual task from a transaction detail page (see screenshot below), you can also establish reminders just as outlined in the functionality above for checklist tasks. Individual tasks can now also be assigned to anyone listed on the Contacts page of that specific transaction:

##### Show Completed Tasks

Prior to this release, all completed tasks would display. With this update, there is a toggle to decide whether to display completed tasks or not.

Learn More: Transaction Management Checklists

### AI Assistant: New Site Trigger

Two new conditions have been added to the AI Assistant based on listing activity–specifically for the LIVE CHAT qualification processes. The AI Assistant will start the same type of conversation as it currently does when listings are saved on the website. This logic applies to leads that are already registered and those that are just visiting the website without having registered yet.

#### (1) A listing is shared

When listings are shared using the Share option on listing detail pages, the AI Assistant will proceed with interacting with the lead again.

#### (2) A specific property is viewed more than three times within a seven-day period

If the same property has been viewed more than three times within a seven-day period, the AI Assistant will trigger a conversation to engage with the site visitor/lead to attempt to qualify them and get them to schedule a showing, etc.

Learn More: AI Assistant / Chatbot Qualification Process , AI Assistant / Chatbot Qualification Process

### Menu Location Change: Smart Plans, AI Assistant, Auto Alerts

The following three pages in the Lofty platform are now accessible on the Campaigns page. Until the next release, they will be made accessible in both locations which means that clients can still find them under Settings for now. They will be removed from Settings in the next update (October 2021.)

1. Smart Plans
2. AI Assistant
3. Auto Property Alerts

Also, "Listing Ads" (as it is known before this update) has been renamed to "Listing Promotions" and will be nested under Listing Suite .

## Site 5.23

### Block Emails

A new feature is available on the CMS to block leads from using the website. The setting is accessed by navigating to CMS > Settings > Lead Capture > Block Emails :

Block an email address by typing in the email address and clicking on the Block button:

Learn More: Block Emails

### Landing Page Improvements

#### Registration Optimization

Registration settings for landing pages now have a section to configure where registration is triggered. Essentially, what was added in this release is the ability to define whether registration is triggered based on page views or browsing time on either the Listing Detail Pages or the Current Page .

Learn More: Landing Pages

### Quick Search Lists

Currently, the Quick Search block has defined listings/links that are universal wherever the Quick Search block is placed on the website. After this update, that will no longer be the case. Users can now build quick search lists that they can reuse or keep independent from one another. This has been requested for some time now.

Users can choose from quick search configurations that have already been built:

Or users can click on the option to add another block, give it a name, and then define the links that will be saved and synced anywhere else that this specific configuration is selected:

Learn More: Quick Search Block

### Search Bar Suggestions

If you go to one of our websites and simply click on the Search Bar , you will notice that it will automatically populate suggestions. Prior to this update, these suggestions were generated based on Quick Searches that had been configured elsewhere on the website.

With this update, you can now control which suggestions will populate by navigating to CMS > Settings > Listings > Location Search Bar > Location Suggestion . Any criteria added here will be auto-populated when a site visitor first clicks on the search bar. After they start typing, criteria matching their search will begin to populate of course.

Learn More: Location Search Bar Settings

### QR Code

We now have QR codes automatically generated for every page on a Lofty-built website. This QR code can be downloaded with a right-click and then shared on social media, business cards, etc. To find the QR code for each individual page on a Lofty-built website, first navigate to that page and then click on the Share icon in the menu at the top-right, then select QR Code :

You can then right-click to download the QR code and use it to send people to that specific page on your website when scanned:

Note: QR codes are not currently available for landing pages though this is planned for future implementation.

Learn More: QR Codes

### Site Report

A new site report will be sent out to clients on a monthly basis. This site report provides some basic Call To Action for the clients so that they can actively work to improve traffic and conversion on their Lofty-built websites.

Here is what that report looks like:

Learn More: Site Report

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
*Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/agent user). For any questions related to your Lofty package or feature availability, please contact Lofty Support (
support@lofty.com (mailto:support@chimeinc.com)
).
Release Date
Monday, September 27, 2021.
Summary
CRM 3.35 (#h_01FF5P3FA3TJEQ66HEZ8BA8WSQ)
Advanced People Filter Optimization (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-AdvancedPeopleFilterOptimization)
Smart Plan Optimizations (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-SmartPlanOptimizations)
Auto Apply Buttons (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-AutoApplyButtons)
Auto Pause When - The Lead's Pipeline Changes (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-AutoPauseWhen-TheLead'sPipelineChanges)
"Within" Time Range Options (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-%22Within%22TimeRangeOptions)
Auto Email: CC Family Members (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-AutoEmail:CCFamilyMembers)
Transaction Management Improvements (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-TransactionManagementImprovements)
Custom Roles (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-TransactionManagement:CustomRoles)
Checklist Improvements (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-TransactionManagementChecklistImprovements)
Assign To Options (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-AssignToOptions)
Additional Checklist Task Reminder Options (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-AdditionalChecklistTaskReminderOptions)
Task Order (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-TaskOrder)
Individual Transaction Task Organization & Reminders (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-IndividualTransactionTaskOrganization&Reminders)
Show Completed Tasks (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-ShowCompletedTasks)
AI Assistant: New Site Trigger (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-AIAssistant:NewSiteTrigger)
Menu Location Change: Smart Plans, AI Assistant, Auto Alerts (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-MenuLocationChange:SmartPlans,AIAssistant,AutoAlerts)
Site 5.23 (#h_01FF5P3KW146C912WWNXPVJRWX)
Block Emails (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-BlockEmails)
Landing Page Improvements (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-LandingPageImprovements)
Quick Search Lists (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-QuickSearchLists)
Search Bar Suggestions (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-SearchBarSuggestions)
QR Code (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-QRCode)
Site Report (#id-9/24/21:FeatureReleaseTrainingforCRM3.35,Site5.23-SiteReport)
CRM 3.35
Advanced People Filter Optimization
Three new criteria have been added to the filters on the People page. These are found under Advanced Filter > Lead Details:
Min Bathrooms
Min Bedrooms
Property Type
These filters pull their data directly from the
Search Criteria
on a lead profile and will allow for finding leads looking for properties that fall within these criteria.
Learn More:
Lead Organization with Filters (https://help.lofty.com/hc/en-us/articles/360055290571)
Smart Plan Optimizations
Auto Apply Buttons
The auto-apply buttons have been made more accessible. There is now a
Clear
button that can be clicked to clear all the criteria instead of having to manually go in and remove it. The
Auto Apply
switch has also been moved further left to be more visible.
Auto Pause When - The Lead's Pipeline Changes
The criteria to
auto-pause when a lead's pipeline stage
changes can now be used at the same time as the
Change Pipeline
action.
"Within" Time Range Options
Previously only available on the first step of a Smart Plan, each step of a Smart Plan can now have a "within" timeframe defined. This allows for automated steps of a Smart Plan to be triggered during daytime hours, etc. The way this works is if that step of the Smart Plan was scheduled to trigger but it happens outside of the defined "within" range, it will wait until the next day before triggering.
Please note that this still does
not
apply to system actions like
Change Pipeline
/
Change Group
/ etc. which can only be triggered immediately.
Auto Email: CC Family Members
You can now CC all family members of a lead when using the
Auto Email
action in a Smart Plan:
Learn More:
Smart Plans (https://help.lofty.com/hc/en-us/articles/360054749892)
Transaction Management Improvements
Custom Roles
You can now add custom roles by navigating to
Settings
>
Transaction Roles
:
Additional roles (up to 50, in addition to the built-in defaults) can be added by clicking on the
+ Add a Role
button at the top:
To add someone to a role on a transaction detail page, you can do so by clicking on the
Add a Contact
button. Only
one
person can be added to each role on a transaction detail page.
Checklist Improvements
Assign To Options
Prior to this release, all checklist tasks were only assigned to the "Transaction Owner." With this update, you can assign to the other roles associated with transactions.
Additional Checklist Task Reminder Options
Prior to this release, you could only choose
one
option (by SMS or by call) at a time, but now you could pick all three. The "push" notification option was also added in this release as well. The options after this release are the following:
Push
by SMS
by Call
The "Push" option can only be triggered to user-type accounts (agents, lenders).
Task Order
The order of transaction checklist tasks can now be adjusted when building out the checklist templates. This was not previously available. When a transaction moves to the corresponding stage,
all
tasks will still trigger, but they will be in the order created within the checklist template.
Task Presentation
All transaction tasks are now displayed under a transaction stage. This makes keeping old and new tasks in the right order will be much easier to accomplish.
Individual Transaction Task Organization & Reminders
When adding an individual task from a transaction detail page (see screenshot below), you can also establish reminders just as outlined in the functionality above for checklist tasks.
Individual tasks can now also be assigned to anyone listed on the
Contacts
page of that specific transaction:
Show Completed Tasks
Prior to this release, all completed tasks would display. With this update, there is a toggle to decide whether to display completed tasks or not.
Learn More:
Transaction Management Checklists (https://help.lofty.com/hc/en-us/articles/360057001712)
AI Assistant: New Site Trigger
Two new conditions have been added to the AI Assistant based on listing activity–specifically for the LIVE CHAT qualification processes. The AI Assistant will start the same type of conversation as it currently does when listings are saved on the website. This logic applies to leads that are already registered
and
those that are just visiting the website without having registered yet.
(1) A listing is shared
When listings are shared using the
Share
option on listing detail pages, the AI Assistant will proceed with interacting with the lead again.
(2) A specific property is viewed more than
three
times within a
seven-day
period
If the same property has been viewed more than three times within a seven-day period, the AI Assistant will trigger a conversation to engage with the site visitor/lead to attempt to qualify them and get them to schedule a showing, etc.
Learn More:
AI Assistant / Chatbot Qualification Process (https://help.lofty.com/hc/en-us/articles/360056783971)
,
AI Assistant / Chatbot Qualification Process (https://help.lofty.com/hc/en-us/articles/360056783971)
Menu Location Change: Smart Plans, AI Assistant, Auto Alerts
The following three pages in the Lofty platform are now accessible on the
Campaigns
page. Until the next release, they will be made accessible in
both
locations which means that clients can still find them under Settings for now. They will be removed from Settings in the next update (October 2021.)
Smart Plans
AI Assistant
Auto Property Alerts
Also, "Listing Ads" (as it is known before this update) has been renamed to "Listing Promotions" and will be nested under
Listing Suite
.
Site 5.23
Block Emails
A new feature is available on the
CMS
to block leads from using the website. The setting is accessed by navigating to
CMS
>
Settings
>
Lead Capture
>
Block Emails
:
Block an email address by typing in the email address and clicking on the
Block
button:
Learn More:
Block Emails (https://help.lofty.com/hc/en-us/articles/4407325477531)
Landing Page Improvements
Registration Optimization
Registration settings for landing pages now have a section to configure where registration is triggered. Essentially, what was added in this release is the ability to define whether registration is triggered based on page views or browsing time on either the
Listing Detail Pages
or the
Current Page
.
Learn More:
Landing Pages (https://help.lofty.com/hc/en-us/articles/360038228552)
Quick Search Lists
Currently, the Quick Search block has defined listings/links that are universal wherever the Quick Search block is placed on the website. After this update, that will no longer be the case. Users can now build quick search lists that they can reuse or keep independent from one another. This has been requested for some time now.
Users can choose from quick search configurations that have already been built:
Or users can click on the option to add another block, give it a name, and then define the links that will be saved and synced anywhere else that this specific configuration is selected:
Learn More:
Quick Search Block (https://help.lofty.com/hc/en-us/articles/360038293131)
Search Bar Suggestions
If you go to one of our websites and simply click on the
Search Bar
, you will notice that it will automatically populate suggestions. Prior to this update, these suggestions were generated based on Quick Searches that had been configured elsewhere on the website.
With this update, you can now control which suggestions will populate by navigating to
CMS
>
Settings
>
Listings
>
Location Search Bar
>
Location Suggestion
. Any criteria added here will be auto-populated when a site visitor first clicks on the search bar. After they start typing, criteria matching their search will begin to populate of course.
Learn More:
Location Search Bar Settings (https://help.lofty.com/hc/en-us/articles/360046736851)
QR Code
We now have QR codes automatically generated for every page on a Lofty-built website. This QR code can be downloaded with a right-click and then shared on social media, business cards, etc. To find the QR code for each individual page on a Lofty-built website, first navigate to that page and then click on the
Share
icon in the menu at the top-right, then select
QR Code
:
You can then right-click to download the QR code and use it to send people to that specific page on your website when scanned:
Note: QR codes are
not
currently available for landing pages though this is planned for future implementation.
Learn More:
QR Codes (https://help.lofty.com/hc/en-us/articles/4407326352155)
Site Report
A new site report will be sent out to clients on a monthly basis. This site report provides some basic Call To Action for the clients so that they can actively work to improve traffic and conversion on their Lofty-built websites.
Here is what that report looks like:
Learn More:
Site Report (https://help.lofty.com/hc/en-us/articles/4407410907675)
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

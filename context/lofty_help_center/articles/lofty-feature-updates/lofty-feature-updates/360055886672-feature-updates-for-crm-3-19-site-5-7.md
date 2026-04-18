# Feature Updates for CRM 3.19, Site 5.7 

- Article ID: `360055886672`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T03:11:52Z`
- Source: https://help.lofty.com/hc/en-us/articles/360055886672-Feature-Updates-for-CRM-3-19-Site-5-7

## Body

## Introduction

*Please note that the features available to you on the Lofty platform will vary depending on the package you have purchased as well as the account type that you have (admin/agent user). For any questions related to your package, please contact our Support Team for more information.

## Release Date

Tuesday, February 2, 2021.

## Summary

- CRM 3.19 Sharing Saved Filters Three Line Dialer: Callback Logic Optimization New Smart Plan Actions (1) Change Pipeline (2) Change Group (3) Change Tag (4) Start Smart Plan (5) Buyer Property Alert Listing Ads
- Site 5.7 AI Assistant: Quick Reply for Website Google Chrome One-Click Website Registration: Mobile Support Copy Page Sold Listing Detail Page Improvements

## CRM 3.19

### Sharing Saved Filters

When saving filters on the People page of the Lofty CRM, a new option is available for sharing. Saving a filter is done by applying the criteria > clicking FILTER > Save Filter :

Saved Filters can now be created and shared by the Team Owner/Admin or those with the "Manage Team" permission (see Team Permissions ).

These filters are still found under Saved Filters , but now they can be searched:

And there are three separate categories for how these filters are organized:

- Default Filters . The pre-built saved filters available to all Lofty users.
- Team Filters . Can be used by anyone on the team but can only be added by the Team Owner/Admin or those who have the "Manage Team" permission (see Team Permissions ) .
- Private Filters . Only visible to individual users who have added them.

### Three Line Dialer: Callback Logic Optimization

*Only available to users who have purchased the Three Line Dialer package.

For context, the Three Line Dialer has the ability to dial up to three lines at a time. The Lofty user is able to have a conversation with the first person to "pick up" the call. On some calling sessions, one person could pick up the call followed by a second person shortly after. The existing logic in place will simply play a callback message for that second person and a Lofty user must pause the call list, manually find that person in their CRM, and then dial them back if they want to connect to them.

This update allows for the additional individuals who answered the call after the first one to be called immediately after the first call ends. They will still hear a recorded callback message but then they will be called immediately after the first call ends. If a third call happened to be answered as well, it would also add them to the list to call back before it returned to the three line mode. There is no manual input required to make this happen, the second person will immediately be called back if they had answered more or less at the same time as the first.

*IMPORTANT : With the technology currently available, there is no way to identify whether a call is being answered by a real person or by a voice machine. This means that any time a call is "picked up," it's possible that it is only an automatic voice message machine.

### New Smart Plan Actions

The most exciting part of this release is the addition of new actions in Smart Plans. Prior to this release, you could do the following with Smart Plans:

- Auto Email
- Auto Text
- Tasks Email Call Text Other Checklist
- Slybroadcast Voice Message Drop (see Slybroadcast Integration )

With this update, the following new actions have been added to that list:

1. Change Pipeline
2. Change Group
3. Change Tag
4. Start Smart Plan
5. Buyer Property Alert

#### (1) Change Pipeline

With this action, the Smart Plan will move leads to the pipeline stage selected using the drop-down menu.

Please note the following:

- This action cannot be selected if the Smart Plan is set up to auto pause when "The lead's pipeline changes." If this action is selected in the Smart Plan, that auto-pause checkbox will be greyed-out and unavailable.
- If the selected pipeline stage is renamed, the Smart Plan will auto-adjust to that renamed pipeline stage
- If the selected pipeline stage is deleted, the system will check to see if that same name has been added again when it gets to the "Change Pipeline" step. If the same name does exist, it will change them to that pipeline stage. If it no longer exists, the Smart Plan will be paused automatically due to the fact that the pipeline stage no longer exists. The plan can then be resumed manually by confirming that the step can be skipped.

Please note that existing plans with the checkbox marked and an action defined at the END of a Smart Plan using the setting for "When this plan ends, automatically move leads to Pipeline" will notice that this will no longer be available and that this will be replaced by this new action type instead as an individual step.

#### (2) Change Group

With this action, the Smart Plan can add or remove a lead from the indicated group(s).

Please note the following:

- When adding to a group. . . If the selected group is renamed , the Smart Plan will auto-adjust to that renamed group If the selected group is deleted , the system will check to see if that same group name has been added again when it gets to the "Change Group" step of the Smart Plan. If the same group name does exist, it will add them to that group. If the same name does not exist, but the user is the Team Owner/Admin or a user with the "Manage Team" permission (see Team Permissions ), the system will simply create a new group with that same name and add the lead to the new group. Otherwise, the Smart Plan will be paused automatically due to the fact that the group no longer exists. The plan can then be resumed manually by confirming that the step can be skipped.
- When removing from a group. . . If the selected group is renamed , the Smart Plan will auto-adjust to that renamed group If the selected group is deleted , the Smart Plan will skip this step in the Smart Plan

Please note that existing plans with the checkbox marked and an action defined at the END of a Smart Plan using the setting for "When this plan ends, automatically move leads to Group" will notice that this will no longer be available and that this will be replaced by this new action type instead as an individual step.

#### (3) Change Tag

With this action, the Smart Plan can add or remove the indicated tag(s) to a lead.

Please note the following:

- This action cannot be selected if the Smart Plan is set up to auto pause when "The tags that triggered the Smart Plan are deleted." If this action is selected in the Smart Plan, that auto-pause checkbox will be greyed-out and unavailable.
- When adding a tag to a lead. . . If the selected tag is renamed , the Smart Plan will auto-adjust to that renamed tag If the selected tag is deleted , the system will check to see if that same tag name has been added again when it gets to the "Change Tag" step of the Smart Plan. If the same tag name does exist, it will add that tag to the lead. If the same name does not exist, but the user is the Team Owner/Admin or a user with the "Manage Team" permission (see Team Permissions ), the system will simply create a new Shared Tag with that same name and add it to the lead. Otherwise, the system will create a Private Tag and apply it to the lead.
- When removing a tag from a lead. . . If the selected tag is renamed , the Smart Plan will auto-adjust to that renamed tag If the selected tag is deleted , the Smart Plan will skip this step in the Smart Plan

#### (4) Start Smart Plan

With this action, the Smart Plan can trigger the start of another Smart Plan.

Please note the following:

- If the Lead Type of a lead going through the plan does not match that of the plan being triggered, this action will be skipped.
- If the Smart Plan being edited is a "My Smart Plan," you will be able to select plans in either "My Plans" or "Team Plans" to trigger after this one ends.
- If the Smart Plan being edited is a "Team Smart Plan," you will only be able to select other "Team Plans" to trigger after this one ends.
- A Smart Plan cannot trigger itself.

Please note that existing plans with the checkbox marked and an action defined at the END of a Smart Plan using the setting for "When this plan ends, automatically start another smart plan" will notice that this will no longer be available and that this will be replaced by this new action type instead as an individual step.

#### (5) Buyer Property Alert

With this Smart Plan action, you can set up a specific property alert to apply to the leads that go through the Smart Plan. Once you choose to set the criteria, the interface is just like when you manually create a property alert for leads:

After setting up the alert, a summary will display within the Smart Plan as shown here:

Please note that this will not work if the lead is a SELLER lead type as the system does not allow for buyer alerts to be set up for seller leads. If the lead is a SELLER lead than this step will simply be skipped for them on the Smart Plan.

### Listing Ads

Though this Listing Ads feature has been beta testing for a few months now, it is now available for all users. You now have the ability to run listing ad promotions directly via your Campaigns tab in your Lofty CRM. For more information, please check out the following article: Listing Ads .

## Site 5.7

*IMPORTANT : Features are available for New CMS only. If you have questions about CMS versions, please reference this article .

### AI Assistant: Quick Reply for Website

If you have it enabled, when site visitors arrive at your Lofty-built IDX website, the AI Assistant will prompt the visitor to engage in a conversation so that it can qualify them. Once they click the dialogue option, the following options will now appear and were built based on common responses that are sent back to the initial prompt:

- I want to buy
- I want to rent
- I want to sell
- Just browsing

As a reminder, this conversation will only count against the AI Assistant conversation allotment if the site visitor is captured by the AI Assistant. "Capture" means a lead has been obtained with email, phone, or both. For more information regarding the AI Assistant please see AI Assistant in the Help Center.

### Google Chrome One-Click Website Registration: Mobile Support

Previously, support on the Chrome browser for one-click website registration was added for websites being viewed on desktop Chrome sessions. Now, with this release, Chrome one-click website registration is supported on the mobile version of Chrome.

For more information on how this feature works, please see Google Chrome One-Click Website Registration .

### Copy Page

Certain pages on your Lofty IDX website can now be copied with the click of a button. Please note that there are other pages that cannot be copied due to their global settings as configured with the remaining aspects of the website.

The pages that cannot be copied are the following:

- Standard Website Pages All Listings Listing Detail (Property Detail) Neighborhood Groups Agent Detail Blog Detail
- Landing Pages Single Property Promotion Listing Live Tour

To copy a page, simply find a page (that is supported for copying), hover over it, and click on the "Copy" icon:

### Sold Listing Detail Page Improvements

In order to improve lead capture on the sold listing detail pages, the following information will now be provided directly on this page:

- Estimated current property price
- CTA (Call To Action) for a home evaluation in multiple locations
- Trends within the zip code/area
- Median price
- Average sold price for the neighborhood
- Etc.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com> or by phone at 1 (855) 981-7557.

## Plain Text

Introduction
*Please note that the features available to you on the Lofty platform will vary depending on the package you have purchased as well as the account type that you have (admin/agent user). For any questions related to your package, please contact our Support Team for more information.
Release Date
Tuesday, February 2, 2021.
Summary
CRM 3.19 (#h_01EXDR92WDWAE01TX082G3FE7S)
Sharing Saved Filters (#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-SharingSavedFilters)
Three Line Dialer: Callback Logic Optimization (#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-ThreeLineDialer:CallbackLogicOptimization)
New Smart Plan Actions (#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-NewSmartPlanActions)
(1) Change Pipeline (#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-(1)ChangePipeline)
(2) Change Group (#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-(2)ChangeGroup)
(3) Change Tag (#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-(3)ChangeTag)
(4) Start Smart Plan (#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-(4)StartSmartPlan)
(5) Buyer Property Alert (#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-(5)BuyerPropertyAlert)
Listing Ads (#h_01EXHNZYWVP49TRB3NX25YGRSK)
Site 5.7 (#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-Site5.7)
AI Assistant: Quick Reply for Website (#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-AIAssistant:QuickReplyforWebsite)
Google Chrome One-Click Website Registration: Mobile Support (#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-GoogleChromeOne-ClickWebsiteRegistration:MobileSupport)
Copy Page (#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-CopyPage)
Sold Listing Detail Page Improvements (#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-SoldListingDetailPage)
CRM 3.19
Sharing Saved Filters
When saving filters on the
People
page of the Lofty CRM, a new option is available for sharing. Saving a filter is done by applying the criteria > clicking
FILTER
>
Save Filter
:
Saved Filters can now be created and shared by the Team Owner/Admin or those with the "Manage Team" permission (see
Team Permissions (https://help.chime.me/hc/en-us/articles/360055290451)
).
These filters are still found under
Saved Filters
, but now they can be searched:
And there are three separate categories for how these filters are organized:
Default Filters
. The pre-built saved filters available to all Lofty users.
Team Filters
. Can be used by anyone on the team but can only be added by the Team Owner/Admin or those who have the "Manage Team" permission
(see
Team Permissions (https://help.chime.me/hc/en-us/articles/360055290451)
)
.
Private Filters
. Only visible to individual users who have added them.
Three Line Dialer: Callback Logic Optimization
*Only available to users who have purchased the Three Line Dialer package.
For context, the Three Line Dialer has the ability to dial up to three lines at a time. The Lofty user is able to have a conversation with the first person to "pick up" the call. On some calling sessions, one person could pick up the call followed by a second person shortly after. The existing logic in place will simply play a callback message for that second person and a Lofty user must pause the call list, manually find that person in their CRM, and then dial them back if they want to connect to them.
This update allows for the additional individuals who answered the call after the first one to be called immediately after the first call ends. They will still hear a recorded callback message but then they will be called immediately after the first call ends. If a third call happened to be answered as well, it would also add them to the list to call back before it returned to the three line mode. There is no manual input required to make this happen, the second person will immediately be called back if they had answered more or less at the same time as the first.
*IMPORTANT
: With the technology currently available,
there is no way to identify whether a call is being answered by a real person or by a voice machine. This means that any time a call is "picked up," it's possible that it is only an automatic voice message machine.
New Smart Plan Actions
The most exciting part of this release is the addition of new actions in Smart Plans. Prior to this release, you could do the following with Smart Plans:
Auto Email
Auto Text
Tasks
Email
Call
Text
Other
Checklist
Slybroadcast Voice Message Drop (see
Slybroadcast Integration (https://help.chime.me/hc/en-us/articles/360034983832)
)
With this update, the following
new
actions have been added to that list:
Change Pipeline
Change Group
Change Tag
Start Smart Plan
Buyer Property Alert
(1) Change Pipeline
With this action, the Smart Plan will move leads to the pipeline stage selected using the drop-down menu.
Please note the following:
This action
cannot
be selected if the Smart Plan is set up to auto pause when "The lead's pipeline changes." If this action is selected in the Smart Plan, that auto-pause checkbox will be greyed-out and unavailable.
If the selected pipeline stage is renamed, the Smart Plan will auto-adjust to that renamed pipeline stage
If the selected pipeline stage is deleted, the system will check to see if that same name has been added again when it gets to the "Change Pipeline" step. If the same name
does
exist, it will change them to that pipeline stage. If it no longer exists, the Smart Plan will be paused automatically due to the fact that the pipeline stage no longer exists. The plan can then be resumed manually by confirming that the step can be skipped.
Please note that existing plans with the checkbox marked and an action defined at the END of a Smart Plan using the setting for "When this plan ends, automatically move leads to Pipeline" will notice that this will no longer be available and that this will be replaced by this new action type instead as an individual step.
(2) Change Group
With this action, the Smart Plan can add or remove a lead from the indicated group(s).
Please note the following:
When
adding
to a group. . .
If the selected group is
renamed
, the Smart Plan will auto-adjust to that renamed group
If the selected group is
deleted
, the system will check to see if that same group name has been added again when it gets to the "Change Group" step of the Smart Plan. If the same group name does exist, it will add them to that group. If the same name does not exist, but the user is the Team Owner/Admin or a user with the "Manage Team" permission (see
Team Permissions (https://help.chime.me/hc/en-us/articles/360055290451)
), the system will simply create a new group with that same name and add the lead to the new group. Otherwise, the Smart Plan will be paused automatically due to the fact that the group no longer exists. The plan can then be resumed manually by confirming that the step can be skipped.
When
removing
from a group. . .
If the selected group is
renamed
, the Smart Plan will auto-adjust to that renamed group
If the selected group is
deleted
, the Smart Plan will skip this step in the Smart Plan
Please note that existing plans with the checkbox marked and an action defined at the END of a Smart Plan using the setting for "When this plan ends, automatically move leads to Group" will notice that this will no longer be available and that this will be replaced by this new action type instead as an individual step.
(3) Change Tag
With this action, the Smart Plan can add or remove the indicated tag(s) to a lead.
Please note the following:
This action
cannot
be selected if the Smart Plan is set up to auto pause when "The tags that triggered the Smart Plan are deleted." If this action is selected in the Smart Plan, that auto-pause checkbox will be greyed-out and unavailable.
When
adding
a tag to a lead. . .
If the selected tag is
renamed
, the Smart Plan will auto-adjust to that renamed tag
If the selected tag is
deleted
, the system will check to see if that same tag name has been added again when it gets to the "Change Tag" step of the Smart Plan. If the same tag name does exist, it will add that tag to the lead. If the same name does not exist, but the user is the Team Owner/Admin or a user with the "Manage Team" permission (see
Team Permissions (https://help.chime.me/hc/en-us/articles/360055290451)
), the system will simply create a new Shared Tag with that same name and add it to the lead. Otherwise, the system will create a Private Tag and apply it to the lead.
When
removing
a tag from a lead. . .
If the selected tag is
renamed
, the Smart Plan will auto-adjust to that renamed tag
If the selected tag is
deleted
, the Smart Plan will skip this step in the Smart Plan
(4) Start Smart Plan
With this action, the Smart Plan can trigger the start of another Smart Plan.
Please note the following:
If the Lead Type of a lead going through the plan does not match that of the plan being triggered, this action will be skipped.
If the Smart Plan being edited is a "My Smart Plan," you will be able to select plans in either "My Plans" or "Team Plans" to trigger after this one ends.
If the Smart Plan being edited is a "Team Smart Plan," you will only be able to select other "Team Plans" to trigger after this one ends.
A Smart Plan
cannot
trigger itself.
Please note that existing plans with the checkbox marked and an action defined at the END of a Smart Plan using the setting for "When this plan ends, automatically start another smart plan" will notice that this will no longer be available and that this will be replaced by this new action type instead as an individual step.
(5) Buyer Property Alert
With this Smart Plan action, you can set up a specific property alert to apply to the leads that go through the Smart Plan. Once you choose to set the criteria, the interface is just like when you manually create a property alert for leads:
After setting up the alert, a summary will display within the Smart Plan as shown here:
Please note that this will not work if the lead is a SELLER lead type as the system does not allow for buyer alerts to be set up for seller leads. If the lead is a SELLER lead than this step will simply be skipped for them on the Smart Plan.
Listing Ads
Though this Listing Ads feature has been beta testing for a few months now, it is now available for all users. You now have the ability to run listing ad promotions directly via your
Campaigns
tab in your Lofty CRM. For more information, please check out the following article:
Listing Ads (https://help.chime.me/hc/en-us/articles/360055820611)
.
Site 5.7
*IMPORTANT
: Features are available for New CMS only. If you have questions about CMS versions, please reference
this article (https://help.chime.me/hc/en-us/articles/360038181471)
.
AI Assistant: Quick Reply for Website
If you have it enabled, when site visitors arrive at your Lofty-built IDX website, the AI Assistant will prompt the visitor to engage in a conversation so that it can qualify them. Once they click the dialogue option, the following options will now appear and were built based on common responses that are sent back to the initial prompt:
I want to buy
I want to rent
I want to sell
Just browsing
As a reminder, this conversation will only count against the AI Assistant conversation allotment if the site visitor is captured by the AI Assistant. "Capture" means a lead has been obtained with email, phone, or both. For more information regarding the AI Assistant please see
AI Assistant (https://help.chime.me/hc/en-us/sections/360007651672-AI-Assistant)
in the Help Center.
Google Chrome One-Click Website Registration: Mobile Support
Previously, support on the Chrome browser for one-click website registration was added for websites being viewed on desktop Chrome sessions. Now, with this release, Chrome one-click website registration is supported on the mobile version of Chrome.
For more information on how this feature works, please see
Google Chrome One-Click Website Registration (https://help.chime.me/hc/en-us/articles/360055890631)
.
Copy Page
Certain pages
on your Lofty IDX website can now be copied with the click of a button. Please note that there are other pages that
cannot
be copied due to their global settings as configured with the remaining aspects of the website.
The pages that
cannot
be copied are the following:
Standard Website Pages
All Listings
Listing Detail (Property Detail)
Neighborhood Groups
Agent Detail
Blog Detail
Landing Pages
Single Property Promotion
Listing Live Tour
To copy a page, simply find a page (that
is
supported for copying), hover over it, and click on the "Copy" icon:
Sold Listing Detail Page Improvements
In order to improve lead capture on the sold listing detail pages, the following information will now be provided directly on this page:
Estimated current property price
CTA (Call To Action) for a home evaluation in multiple locations
Trends within the zip code/area
Median price
Average sold price for the neighborhood
Etc.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com> or by phone at 1 (855) 981-7557.

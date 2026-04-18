# Feature Updates for Lofty 3.70

- Article ID: `19441051559067`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T01:51:14Z`
- Source: https://help.lofty.com/hc/en-us/articles/19441051559067-Feature-Updates-for-Lofty-3-70

## Body

## Introduction

I mportant: Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/standard user). These features are subject to change at any time. Please see our Learning Center course on this update HERE .

Having trouble accessing the course? This article will show you how to access the Lofty Learning Center: How to Access the Lofty Learning Center

## Release Date

Monday, October 16, 2023

## Summary

- Last Touch Filter Optimization
- New Lead Source Permission
- Print Center Update
- Listing Discovery Lead Match Update
- MLS Application Dashboard
- New Listing Video Templates and Aspect Ratio
- Export Users
- Self-Service Seat Management
- Website Featured Areas Optimization (Beta)
- AI Call Summary Assistant (Beta)

## Print Center Update

This update is available for all Lofty users and makes it easier to upload your own images to a print center design and add new recipients to an ongoing print campaign.

### Print Center Image Upload

To create a Print Campaign, navigate to Campaigns → Print Center and select Print Mailers

The process for creating a print campaign is largely unchanged. Detailed instructions can be found here: Print Center: Mailers

When you want to upload your own images for your print campaigns, we have simplified the UI so it is easier to design mailers. To upload an image, click Upload in the upper right corner in the Select Design section.

Previously, this would open the design center editor. Now, it opens a simplified design view. After the image is uploaded, a window will pop-up that provides simple instructions for creating the design. Follow the directions on the right to move the image to the appropriate spot.

The design editor can be access by clicking Edit Design on the pop-up window.

### Edit Campaign Recipients

To add or remove recipients from an ongoing print campaign, navigate to the campaign in the Print Center and click Update Plan Settings .

Next, choose Select Recipients , to see the full list of active recipients on the mailing list. Click the Trash Can icon to remove a recipient from the list. When they are removed, they will not receive any future mailers from this plan.

To add recipients to the mailing list, first look at the Purchased Farm Size compared to the Current Selected Homeowners . If the numbers are the same, click Upgrade to add additional seats.

New recipients can be added by clicking + Add New . These recipients can be added via the following methods:

- Add Manually
- Mailing List Upload
- Select from leads in the CRM
- Purchase a new GeoFarm List
- Add from an already purchased GeoFarm List

## New Lead Source Permission

This new permission will be enabled for all Lofty users. This permission will allow an account admin to decide which users on their account can change the Source on the lead's profile. Please see more information on the Lead Source here: Lead Organization with Sources

Please note:

- When this permission is turned ON , the user can change the Source for all leads that they have access to.
- When this permission is turned OFF , the user cannot change the Source for any leads, even private leads.

This new permission is located in the Agent Permission settings, and will be turned on for all users.

Team Account Permission

Enterprise Account Permission

When this permission is disabled, the user can still see the lead's source, but the source field is greyed out and cannot be modified.

## Last Touch Filter Optimization

The Last Touch filter has been optimized to help all Lofty users determine exactly when and how a lead was last contacted. To access this filter, navigate to the People Page , select Advanced Filter , then Last Touch :

Here, you have the option to select how the lead was or was not contacted. The options include all contact methods, including both automatic and manual communication. Check the box next to the type of communication you want to include.

The last touch can also be sorted by time period, either by the pre-selected time intervals in the drop down menu, or by selecting Customized Time to enter a specific number of days.

Drop Down Menu

Customized Time

Once the filters have been applied, the client can save the filter for easy access in the future.

Note: The Last Touch column will by default always be the last communication with the lead.

## Listing Discovery Lead Match Update

This update allows all Lofty users to see what leads' search criteria match a listing, even if that lead is in a lead pond and not assigned to an agent.

To view Matched Leads , navigate to Listing Discovery and scroll over to Matched Buyers

Click Agent & Assistant to filter by leads assigned to a specific user or leads in a Lead Pond. To see only your own leads, switch the toggle on.

## MLS Application Dashboard

This updated MLS Dashboard allows a Lofty account owner to see all of the MLS applications for all users on their account. The MLSs can be sorted by All, Awaiting Signature, MLS Processing, Lofty Processing, Incomplete Application, and Active, as well as by specific Agent, MLS, and application start time.

This dashboard is located by navigating to CMS > Listings > Team MLS

Team and Enterprise Accounts

Multi-Team and Vendor Backend

## New Listing Video Templates and Aspect Ratio

This update launches three (3) new listing video templates, as well as three (3) different aspect ratios, so videos will be formatted correctly for the posting location.

The logic for creating the listing videos is unchanged. Selects six (6) listing photos and the video is generated automatically. Please see this Help Center article for detailed instructions: Social Studio

After selecting the listing and the listing photos, select the video template. The video can be previewed before generating by clicking the play button.

Next, select the appropriate video ratio for where you plan to post the video. Hovering over each option will give a hint as to where the video will be formatted to fit:

- 16:9 = All Channels
- 1:1 = Instagram and Twitter
- 4:5 = Instagram

## Export Users

This feature allows you to export your agent list, similar to a lead export. You must have the Manage User permission enabled on your Lofty account to perform this action.

Note: You will only be able to export a list of agents that you can see. That is, if you have User Management - User's Group enabled, your agent export list will only contain the agents in your group.

Note: You can only export your agent list three (3) times per day.

#### Team and Enterprise

To export the agent list on a Team or Enterprise account, navigate to Settings → Agents . Next, check the boxes next to the agents you want to export. Click the box at the top to select all agents.

After checking the box, the side panel will offer the option to export the agent list.

Before processing, a disclaimer will let you know what information will be exported, and that you should be careful with your users' personal information. After agreeing to the disclaimer, the export file will be sent to the email address you use on your Lofty account.

#### Multi-Team and Vendor backend

To access this feature on a Multi-Team or Vendor account, first log in to the Multi-Team/Vendor backend/Team/Account Management page. Next, click Export Users to export the agent list. The process is the same as the Team and Enterprise experience.

#### User List Details

The following information is exported and sent to the requestor's email address via a csv file:

Single Instance-Team Structure

User Id｜User Name｜User Email｜User Phone｜User Address｜Account Type｜Seat Type｜Agent Tag｜Last Active｜Created Date

Single Instance-Enterprise Structure

User Id | User Name | User Email | User Phone | User Address | Parent Group ID | Group Name | Group ID | Account Type | Permission Profile | Seat Type | Agent Tag | Last Active | Created Date

Multi-team

[Sheet 1] Team List

Team ID ｜ Team Name ｜ User Name ｜ User Email ｜ User Phone ｜ User Address ｜ Agent Tag ｜ Agent Status ｜Last Active ｜ Created Date

[Sheet 2] Member List

Team ID | Team Name | User Id | User Name | User Email | User Phone | User Address | Account Type | Agent Tag | Last Active | Created Date

Vendor

[Sheet 1] Team List

Broker ID ｜ Team ID ｜ User Name ｜ User Email ｜ User Phone ｜ User Address ｜ Seat Type ｜ Agent Tag ｜ Last Active ｜ Account Status ｜Created Date

[Sheet 2] Agent List

Broker ID ｜ Team ID ｜ User Id ｜ User Name ｜ User Email ｜ User Phone ｜ User Address ｜ Account Type ｜ Seat Type ｜ Agent Tag ｜ Last Active ｜ Account Status ｜ Created Date

## Self-Service Seat Management

This update adds a Subscription tab in the Billing Center, which will allow you to manage add-ons yourself. With this release, we are only allowing Lofty account owners to manage the number of seats they are paying for on their Lofty account.

Note: New seats will continue to be added directly via the Agent Page. See the Help Center article here: Add or Remove Team Members

To remove unused seats, navigate to Avatar Menu → Billing Center and select Subscriptions . Click Manage next to the add-on you want to update.

If there are no unused seats available to remove, the pop-up will alert you.

If there are unused seats available to remove, the number of unoccupied seats will be provided and you may select the number of seats you want to remove. You are unable to remove any occupied seats. That is, if only one (1) seat is unoccupied, you can only remove one (1) seat.

After the seat is removed, you will not be billed for that seat on the next billing period.

When a user is deleted from the CRM, their seat is not automatically deleted. The account owner can either fill that seat with a new user, leave it empty, or delete the seat. When a user is deleted, the pop-up will ask if you want to delete the seat and direct you to the billing center to do so.

## Website Featured Areas Optimization (Beta)

This update i mproves Lofty website SEO by generating more automatic pages related to a specific area and fixes the unmatched "neighborhood" data issue caused by the discrepancy of Home Junction's data.

Note: This feature is being beta-tested on new Lofty accounts. If you have this Featured Area UI, you will see Areas in the CMS tool menu. If you do not have Areas, you have the original UI.

The Featured Areas section allows you to add areas by City or by Neighborhood. Click + Add New Area to add a new City or Neighborhood.

After clicking + Add New Area , a drop down will allow you to select if you are adding a City or a Neighborhood. The cities and neighborhoods available are dependent on the connected MLSs. A boundary may not appear for all neighborhoods, as the boundary is generated from Home Junction. Be sure to scroll down to add the agent that will represent the featured area.

After the city/neighborhood has been added, 2-3 pages will be created.

#### Featured Area Pages

Introduction

The Introduction page is the same as the current Neighborhood page.

This page contains a map at the top wit nearby listings, Market Trends, Nearby Locations, Local Information, and Demographics. Clicking More Listings will link to the Search Page.

Search

The Search page lists the homes for sale in the selected area.

Clicking Area Overview will link to the Introduction Page. Clicking Market Insights will link to the Market Page.

Market

The Market page provides statistical home sale and value data for the selected area.

Clicking Area Overview will link to the Introduction Page. Clicking More Listings will link to the Search Page.

It's important to note that while three pages are created, they do not all need to be added to the Lofty website since they all link to each other.

#### SEO Improvements

Click the Settings Cog Wheel next to the page to edit the SEO. Generic content has already been added here.

Each page has its own SEO settings, so you can utilize these to market your specialized areas.

#### Adding a Featured Area to the Lofty website

After the area has been added, it still needs to be added to the Lofty website. Remember, you only need to add one of the three pages created to feature this area on your Lofty website. Navigate to Editor.

Click + Add Page and select Featured Area . Here, you will see the three available pages: Introduction, Search, and Market. Click the type of page you would like to add and click Next .

Next, select the featured area(s) you want to add by checking the box and clicking Save .

## AI Call Summary Assistant (Beta)

The AI Call Summary Assistant is the newest addition to the AI Writer line-up. See all available AI writing tools here: AI Writing Assistant

Note: This feature is being beta-tested and will only be available to a select group of Lofty users.

Note: In order to use this feature, you must have a call package with call recording enabled. This feature has a weekly allotment of 20 uses.

This feature was created to help you follow up on calls with your leads. The AI Call Summary Assistant provides the following assistance:

- Provides a summary of the call recording to help you quickly recall the conversation, without leaving a call note.
- Highlights the key information during the dialogue and provides next step suggestions and a quick Call to Action, to enhance the follow up efficiency.

The AI Call Summary Assistant is available under a recorded call in the lead's timeline:

Click AI Assistant to generate the call summary.

You must agree the Terms of Use before using this feature. This Terms of Use will note the following:

- Call recording data and some basic information will be transmitted to third-party platforms‘ analysis and is not to be used for any commercial purposes.
- If you do not agree, you will not be able to use the AI call summary assistant.

#### Summary

The call summary is one paragraph describing the main content and purpose of the call. You can provide feedback by clicking the thumbs up or down to let us know if the summary is useful/not useful.

#### Conversation Transcription

A full transcription of the conversation is also available. Within the Conversation tab, there are three (3) scenarios that the AI assistant can assist with.

Note: These 3 scenarios are suggestions from the AI. The AI will not automatically update any lead information or schedule an appointment on your behalf.

1. Lead Information Update If the AI detects a name, email, or phone number other than the lead's information, it will provide a prompt to either change the lead's information or add as a family member.
2. Update Buyer Preferences If the AI detects some kind of search criteria (budget, property type, rooms, etc) the AI will prompt to update the lead's search criteria
3. Schedule an Appointment If the AI detects a date, time, or location it will provide a prompt to schedule an appointment with the lead

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by a chat with us through your Lofty CRM

## Plain Text

Introduction
I
mportant:
Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/standard user).
These features are subject to change at any time.
Please see our Learning Center course on this update
HERE (https://learningcenter.chime.me/courses/v370)
. (https://learningcenter.chime.me/courses/v3-69)
Having trouble accessing the course? This article will show you how to access the Lofty Learning Center:
How to Access the Lofty Learning Center (https://help.chime.me/hc/en-us/articles/13857197513115)
Release Date
Monday, October 16, 2023
Summary
Last Touch Filter Optimization (#h_01HCJMF09WK65T0RAD4555ZDWB)
New Lead Source Permission (#h_01HCJM43XF5JYF89FDM0PHNH72)
Print Center Update (#h_01HCJKRW7RBDT8V8883VS43E7G)
Listing Discovery Lead Match Update (#h_01HCJMNB9TWSGQD7J6A61Q6R87)
MLS Application Dashboard (#h_01HCJMSF2J5F7NNRHAS56H5112)
New Listing Video Templates and Aspect Ratio (#h_01HCJN3C33PBKFBWNKH8SA3P3A)
Export Users (#h_01HCJTGG3QCVG7T5ABACFJB8GC)
Self-Service Seat Management (#h_01HCJTWP9VT62N1W72S0JQ6NE7)
Website Featured Areas Optimization (Beta) (#h_01HCJXZN1PD3H2GKZ36370TRW4)
AI Call Summary Assistant (Beta) (#id-10/16/2023:FeatureReleaseTrainingforChime3.70-AICallSummaryAssistant)
Print Center Update
This update is available for all
Lofty
users and makes it easier to upload your own images to a print center design and add new recipients to an ongoing print campaign.
Print Center Image Upload
To create a Print Campaign, navigate to
Campaigns → Print Center
and select
Print Mailers
The process for creating a print campaign is largely unchanged. Detailed instructions can be found here:
Print Center: Mailers (https://help.lofty.com/hc/en-us/articles/360058318632)
When you want to upload your own images for your print campaigns, we have simplified the UI so it is easier to design mailers. To upload an image, click
Upload
in the upper right corner in the
Select Design
section.
Previously, this would open the design center editor. Now, it opens a simplified design view. After the image is uploaded, a window will pop-up that provides simple instructions for creating the design. Follow the directions on the right to move the image to the appropriate spot.
The design editor can be access by clicking
Edit Design
on the pop-up window.
Edit Campaign Recipients
To add or remove recipients from an ongoing print campaign, navigate to the campaign in the Print Center and click
Update Plan Settings
.
Next, choose
Select Recipients
, to see the full list of active recipients on the mailing list. Click the Trash Can icon to remove a recipient from the list. When they are removed, they will not receive any future mailers from this plan.
To add recipients to the mailing list, first look at the
Purchased Farm Size
compared to the
Current Selected Homeowners
. If the numbers are the same, click
Upgrade
to add additional seats.
New recipients can be added by clicking
+ Add New
. These recipients can be added via the following methods:
Add Manually
Mailing List Upload
Select from leads in the CRM
Purchase a new GeoFarm List
Add from an already purchased GeoFarm List
New Lead Source Permission
This new permission will be
enabled
for all
Lofty
users. This permission will allow an account admin to decide which users on their account can change the Source on the lead's profile. Please see more information on the Lead Source here:
Lead Organization with Sources (https://help.lofty.com/hc/en-us/articles/360041252272)
Please note:
When this permission is turned
ON
, the user can change the Source for all leads that they have access to.
When this permission is turned
OFF
, the user cannot change the Source for any leads, even private leads.
This new permission is located in the Agent Permission settings, and will be turned on for all users.
Team Account Permission
Enterprise Account Permission
When this permission is disabled, the user can still see the lead's source, but the source field is greyed out and cannot be modified.
Last Touch Filter Optimization
The Last Touch filter has been optimized to help all Lofty users determine exactly when and how a lead was last contacted. To access this filter, navigate to the
People Page
, select
Advanced Filter
, then
Last Touch
:
Here, you have the option to select how the lead was or was not contacted. The options include all contact methods, including both automatic and manual communication. Check the box next to the type of communication you want to include.
The last touch can also be sorted by time period, either by the pre-selected time intervals in the drop down menu, or by selecting Customized Time to enter a specific number of days.
Drop Down Menu
Customized Time
Once the filters have been applied, the client can save the filter for easy access in the future.
Note:
The Last Touch column will by default always be the last communication with the lead.
Listing Discovery Lead Match Update
This update allows all
Lofty
users to see what leads' search criteria match a listing, even if that lead is in a lead pond and not assigned to an agent.
To view
Matched Leads
, navigate to
Listing Discovery
and scroll over to
Matched Buyers
Click
Agent & Assistant
to filter by leads assigned to a specific user or leads in a Lead Pond. To see only your own leads, switch the toggle on.
MLS Application Dashboard
This updated MLS Dashboard allows a Lofty account owner to see all of the MLS applications for all users on their account. The MLSs can be sorted by All, Awaiting Signature, MLS Processing, Lofty Processing, Incomplete Application, and Active, as well as by specific Agent, MLS, and application start time.
This dashboard is located by navigating to
CMS > Listings > Team MLS
Team and Enterprise Accounts
Multi-Team and Vendor Backend
New Listing Video Templates and Aspect Ratio
This update launches three (3) new listing video templates, as well as three (3) different aspect ratios, so videos will be formatted correctly for the posting location.
The logic for creating the listing videos is unchanged. Selects six (6) listing photos and the video is generated automatically. Please see this Help Center article for detailed instructions:
Social Studio (https://help.lofty.com/hc/en-us/articles/4416954832795)
After selecting the listing and the listing photos, select the video template. The video can be previewed before generating by clicking the play button.
Next, select the appropriate video ratio for where you plan to post the video. Hovering over each option will give a hint as to where the video will be formatted to fit:
16:9 = All Channels
1:1 = Instagram and Twitter
4:5 = Instagram
Export Users
This feature allows you to export your agent list, similar to a lead export. You must have the Manage User permission enabled on your
Lofty
account to perform this action.
Note:
You will only be able to export a list of agents that you can see. That is, if you have User Management - User's Group enabled, your agent export list will only contain the agents in your group.
Note:
You can only export your agent list three (3) times per day.
Team and Enterprise
To export the agent list on a Team or Enterprise account, navigate to
Settings → Agents
. Next, check the boxes next to the agents you want to export. Click the box at the top to select all agents.
After checking the box, the side panel will offer the option to export the agent list.
Before processing, a disclaimer will let you know what information will be exported, and that you should be careful with your users' personal information. After agreeing to the disclaimer, the export file will be sent to the email address you use on your
Lofty
account.
Multi-Team and Vendor backend
To access this feature on a Multi-Team or Vendor account, first log in to the Multi-Team/Vendor backend/Team/Account Management page. Next, click
Export Users
to export the agent list. The process is the same as the Team and Enterprise experience.
User List Details
The following information is exported and sent to the requestor's email address via a csv file:
Single Instance-Team Structure
User Id｜User Name｜User Email｜User Phone｜User Address｜Account Type｜Seat Type｜Agent Tag｜Last Active｜Created Date
Single Instance-Enterprise Structure
User Id | User Name | User Email | User Phone | User Address | Parent Group ID | Group Name | Group ID | Account Type | Permission Profile | Seat Type | Agent Tag | Last Active | Created Date
Multi-team
[Sheet 1] Team List
Team ID ｜ Team Name ｜ User Name ｜ User Email ｜ User Phone ｜ User Address ｜ Agent Tag ｜ Agent Status ｜Last Active ｜ Created Date
[Sheet 2] Member List
Team ID | Team Name | User Id | User Name | User Email | User Phone | User Address | Account Type | Agent Tag | Last Active | Created Date
Vendor
[Sheet 1] Team List
Broker ID ｜ Team ID ｜ User Name ｜ User Email ｜ User Phone ｜ User Address ｜ Seat Type ｜ Agent Tag ｜ Last Active ｜ Account Status ｜Created Date
[Sheet 2] Agent List
Broker ID ｜ Team ID ｜ User Id ｜ User Name ｜ User Email ｜ User Phone ｜ User Address ｜ Account Type ｜ Seat Type ｜ Agent Tag ｜ Last Active ｜ Account Status ｜ Created Date
Self-Service Seat Management
This update adds a Subscription tab in the Billing Center, which will allow you to manage add-ons yourself. With this release, we are only allowing Lofty account owners to manage the number of seats they are paying for on their
Lofty
account.
Note:
New seats will continue to be added directly via the Agent Page. See the Help Center article here:
Add or Remove Team Members (https://help.chime.me/hc/en-us/articles/218038783-Add-or-Remove-Team-Members-on-Chime)
To remove unused seats,
navigate to
Avatar Menu → Billing Center
and select
Subscriptions
. Click
Manage
next to the add-on you want to update.
If there are no unused seats available to remove, the pop-up will alert you.
If there are unused seats available to remove, the number of unoccupied seats will be provided and you may select the number of seats you want to remove. You are unable to remove any occupied seats. That is, if only one (1) seat is unoccupied, you can only remove one (1) seat.
After the seat is removed, you will not be billed for that seat on the next billing period.
When a user is deleted from the CRM, their seat is not automatically deleted. The account owner can either fill that seat with a new user, leave it empty, or delete the seat. When a user is deleted, the pop-up will ask if you want to delete the seat and direct you to the billing center to do so.
Website Featured Areas Optimization (Beta)
This update i
mproves Lofty website SEO by generating more automatic pages related to a specific area and
fixes the unmatched "neighborhood" data issue caused by the discrepancy of Home Junction's data.
Note:
This feature is being beta-tested on new
Lofty
accounts.
If you have this Featured Area UI, you will see
Areas
in the CMS tool menu. If you do not have Areas, you have the original UI.
The Featured Areas section allows you to add areas by City or by Neighborhood. Click
+ Add New Area
to add a new City or Neighborhood.
After clicking
+ Add New Area
, a drop down will allow you to select if you are adding a City or a Neighborhood. The cities and neighborhoods available are dependent on the connected MLSs. A boundary may not appear for all neighborhoods, as the boundary is generated from Home Junction. Be sure to scroll down to add the agent that will represent the featured area.
After the city/neighborhood has been added, 2-3 pages will be created.
Featured Area Pages
Introduction
The Introduction page is the same as the current Neighborhood page.
This page contains a map at the top wit nearby listings, Market Trends, Nearby Locations, Local Information, and Demographics. Clicking
More Listings
will link to the Search Page.
Search
The Search page lists the homes for sale in the selected area.
Clicking
Area Overview
will link to the Introduction Page. Clicking
Market Insights
will link to the Market Page.
Market
The Market page provides statistical home sale and value data for the selected area.
Clicking
Area Overview
will link to the Introduction Page. Clicking
More Listings
will link to the Search Page.
It's important to note that while three pages are created, they do not all need to be added to the
Lofty
website since they all link to each other.
SEO Improvements
Click the Settings Cog Wheel next to the page to edit the SEO. Generic content has already been added here.
Each page has its own SEO settings, so you can utilize these to market your specialized areas.
Adding a Featured Area to the
Lofty
website
After the area has been added, it still needs to be added to the
Lofty
website. Remember, you only need to add one of the three pages created to feature this area on your
Lofty
website. Navigate to
Editor.
Click
+ Add Page
and select
Featured Area
. Here, you will see the three available pages: Introduction, Search, and Market. Click the type of page you would like to add and click
Next
.
Next, select the featured area(s) you want to add by checking the box and clicking
Save
.
AI Call Summary Assistant (Beta)
The AI Call Summary Assistant is the newest addition to the AI Writer line-up. See all available AI writing tools here:
AI Writing Assistant (https://help.lofty.com/hc/en-us/articles/15578133886235)
Note:
This feature is being beta-tested and will only be available to a select group of
Lofty
users.
Note:
In order to use this feature, you must have a call package with call recording enabled. This feature has a weekly allotment of 20 uses.
This feature was created to help you follow up on calls with your leads. The AI Call Summary Assistant provides the following assistance:
Provides a summary of the call recording to help you quickly recall the conversation, without leaving a call note.
Highlights the key information during the dialogue and provides next step suggestions and a quick Call to Action, to enhance the follow up efficiency.
The AI Call Summary Assistant is available under a recorded call in the lead's timeline:
Click
AI Assistant
to generate the call summary.
You must agree the Terms of Use before using this feature. This Terms of Use will note the following:
Call recording data and some basic information will be transmitted to third-party platforms‘ analysis and is not to be used for any commercial purposes.
If you do not agree, you will not be able to use the AI call summary assistant.
Summary
The call summary is one paragraph describing the main content and purpose of the call. You can provide feedback by clicking the thumbs up or down to let us know if the summary is useful/not useful.
Conversation Transcription
A full transcription of the conversation is also available. Within the
Conversation
tab, there are three (3) scenarios that the AI assistant can assist with.
Note:
These 3 scenarios are suggestions from the AI. The AI will not automatically update any lead information or schedule an appointment on your behalf.
Lead Information Update
If the AI detects a name, email, or phone number other than the lead's information, it will provide a prompt to either change the lead's information or add as a family member.
Update Buyer Preferences
If the AI detects some kind of search criteria (budget, property type, rooms, etc) the AI will prompt to update the lead's search criteria
Schedule an Appointment
If the AI detects a date, time, or location it will provide a prompt to schedule an appointment with the lead
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by a chat with us through your Lofty CRM

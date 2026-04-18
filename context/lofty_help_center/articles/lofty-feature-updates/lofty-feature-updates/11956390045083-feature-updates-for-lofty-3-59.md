# Feature Updates for Lofty 3.59

- Article ID: `11956390045083`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T01:59:15Z`
- Source: https://help.lofty.com/hc/en-us/articles/11956390045083-Feature-Updates-for-Lofty-3-59

## Body

## Introduction

Important: Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/standard user). These features are subject to change at any time.

Please view our training content for these updates in our Learning Center

For any questions related to your Lofty package or feature availability, please contact Lofty Support ( support@lofty.com ).

## Release Date

Tuesday, January 17th, 2023.

## Summary

- Enterprise Account Permission Update
- Lead Source Logic Update Sources Auto-Creation Logic Sources Filter Changes
- Lead Segment Logic Update Editing the Lead Segments Reminder Period
- Lead Tag Management Standard User Tag Library Team/Company Filter Enabled Tag Library
- Agent Time Last Active Optimization
- AI Assistant Notification Optimization
- Listing Ads Budget Upgrade Editing the budget after purchase but before setting up the listing ads Editing the budget when an ad is active
- Boost Post Retargeting Audience
- Website Integration Configuration Optimization
- Closely App Download Guides What is the Closely App? How to Enable

## All Features

### Enterprise Account Permission Update

For Enterprise accounts, the "Company Filter" feature is now split to allow access to Sources, Tags, Pipelines, and Lead Segments separately.

### Lead Source Logic Update

We have removed the option to Edit sources. Instead, users should create a new Source and when deleting the old source, assign the leads under that Source to the newly created Source.
#### Sources Auto-Creation Logic

- Affect Scope Enterprise Structure Team Structure
- Auto assigns system sources for leads that are created by Users who do not have the source manage permission Default System Source Open API Email Parsing Lead Import Lead Capture Text Code Other The customized sources attached with the leads will be added as tags.

#### Sources Filter Changes

- Changes the "All Source" option to "Any Source" in the following: AI Assistant Revaluate Auto home report Lead Routing Smart plan source
- Keeps the "All Source" option as a quick selection for all current sources in the following: People page/Source Filter Listing discover/Select leads/Source Filter Transaction/More Filter/Source Lead Export

This may seem like a simple language change, however, this will capture Any Source, regardless of what Enterprise Account Group the user is in.

### Lead Segment Logic Update

For Enterprise accounts, this permission update will allow users to create and manage Lead Segments for their individual Account Groups.

Selecting 'Entire Company' allows the user to create/edit/delete Company level lead segments.

Selecting 'User's Group' allows the user to create/edit/delete lead segments at that user's Group level.

Note: The lead segment cannot be used at the subgroup level.

#### Editing the Lead Segments

The logic for editing the Lead Segments has changed a bit for all Lofty account types.

Any user with the 'Segments & Tags' permission enabled will now have a settings cog wheel icon to edit the Segments. Company level segments have the building icon next to them. Group level segments have no icon.

Note: The Company Admin/Owner can only see the Segments that are in the Company level. They cannot see Group level segments. Any segments the Company admins create will be Company level segments. Group Admin/Owners can see the Company level segments, as well as their own Group level segments. They cannot see other Group's segments.

Example of the Segment editing page, from a Group Owner perspective:

Rather than a pop-up screen, the entire screen is now available for editing Lead Segments for all Lofty account types.

Adding a new Segment looks the same, regardless of the type of Lofty account:

If a user is deleted from the Lofty account, or changes User Groups, any Lead Segments they have previously created will not be affected and can still be used by the User Group the Lead Segment was created for.

#### Reminder Period

We have also optimized the Reminder Period. The Reminder Period is that red dot that will appear next to leads. This is meant to be a reminder that the lead has not been contacted in the specified period of time.

1. When unchecked: Only manual actions will count as lead contacts
2. When checked: Both automatic and manual actions will count as lead contacts

### Lead Tag Management

This feature a llows Enterprise users to create and manage lead tags for their groups. The permissions are the same as the Segment permission, outlined above.

This is also an update to Tag Logic: Private and Shared tags are no more!

1. Selecting 'Entire Company' means the users: Have Company Tag Management library Can create/delete/lock Company level Lead Tag Library.
2. Selecting 'User's Group' means the users: Have Group Tag Management library Can c reate/delete/lock Group level Lead Tag Library.
3. Every agent has their own tag library, and only they can add/edit/delete the tag themselves . The tags in the personal library will sync from the user's group and all higher-level groups' tag library.
4. For Non-Enterprise accounts, the permission to access Tag Management is 'Team Filter'
5. If a Tag already exists in Tag Management, it cannot be duplicated , regardless of who initially created the Tag.

#### Standard User Tag Library

Lofty users who do not have a Team/Company Filter enabled will see the above Tag Library. Here, they can see their own Tags, as well as Tags in the Company/Group Levels above them. They also have the option to edit or delete any unlocked tags. This will only affect the Tag on their own account.

#### Team/Company Filter Enabled Tag Library

Lofty users who do have the Team/Company Filter enabled will see the above Tag Library. Here, they can add their own personal Tags in the Tag library by clicking "+Add New" above. When clicking Tag Management, they can manage Tags that are seen by the Entire Company or their own User Group, depending on their permission level.

The lock icon keeps users from editing or deleting this Tag from their own libraries. By default, when new Lead Tags are added, they will be unlocked, so make sure you lock any Lead Tags that you do not want to be edited in your users' own Tag Libraries.

### Agent Time Last Active Optimization

This feature allows admins to see when users on their account have last logged into Lofty.

The user's last log in time has been recalculated to be more accurate and we have added a filter, so admins can sort by when users last logged in.

Permissions:

In order to see the Last Active filter, a user must have the following permission enabled.

- Enterprise: Manage User, Entire Company
- Enterprise: Manage User, User's Group
- Non-Enterprise: Manage User

### AI Assistant Notification Optimization

This feature allows users to receive a push notification when a lead responds to the AI Assistant.

This notification is only sent once if the same lead replies multiple times within the same day.

Notification Content: Your lead [lead's name] ([lead's number]) has responded to a message from the AI Assistant: [message]"

### Listing Ads Budget Upgrade

This feature a llows users to increase their ad budget within their Lofty CRM.

#### Editing the budget after purchase but before setting up the listing ads

- If the user updates the budget, the amount of the difference between the new and old budgets will be charged. Only allows upgrade (no lower than original budget)
- For the $99 package, we allow edits to both the start and end date
- For $199 package, do not allow choosing end date. The end date should be start date + 14 days

#### Editing the budget when an ad is active

- Click the edit icon, jump out the pop-up window
- If the user upgrades the budget, the amount of the difference between the new and old budgets will be charged. Only allow upgrade (no lower than original budget) The budget should be no lower than $5 per day for both packages

### Boost Post Retargeting Audience

This feature a llows users to select existing leads for Boost Post retargeting.

The user process is：

- Click "Select Existing Leads"
- Jump to lead list
- Filter the target leads
- Navigate back to boost post popup
- Show the chosen lead count

### Website Integration Configuration Optimization

This is an improved user interface on the website integrations page. Now, all website Integrations will be listed on one page, with a bit of information about each one.

### Consumer Account Page Updates

We have updated the Lead interface when they have registered as a Seller Lead on the Lofty website.

1. Add Lead Image A random background color will be added, with the lead's first name initial
2. My Home Here, the lead will provide information about the home they currently own

There are four display cards for the different stages of a home:

1. Home Valuation Card (Stage 1) Display Condition: There is a search record from the lead on the Home Valuation page or My Home page. Display information: The basic info (home image, address, etc.) and the estimated home price. Actions: Click the card: Open the home valuation result page See my home equity: Open the home valuation result page and pop up a questionnaire to let the lead fill in the mortgage details. Request a CMA Sell my home Delete
2. Home Valuation Card (Stage 2) Display Condition: The lead had completed the mortgage questionnaire in stage 1. Display information: The basic info(home image, address, etc.), the estimated home price, home equity, monthly payment. Actions: Click the card: Open the home valuation result page Request Home Report Request a CMA Sell my home Delete
3. Home Report Card Display Condition: The agent added a home report to the lead. Display information: The basic info(home image, address, etc.), the estimated home price, home equity, monthly payment, rises and falls. Actions: Request a CMA Sell my home See Value Trend: Open the Home Report page and anchor to the Value Trend part. Financial Options: Open the Home Report page and anchor to the Mortgage part. Delete
4. Seller Report Display Condition: Can only be synchronized in, leads cannot add it. Display information: The basic info(home image, address, etc.), Listing status, Traffic data(View, favorite, potential buyers, matched buyers), listing price, listed date. Actions: Chat with agent: Open the chatbox (If the site enables the chatbox) Check listing traffic: Open the Seller Report page and anchor to the traffic part. View sales activity: Open the Seller Report page and anchor to the activity part. Public view: Open the listing detail page. Delete

### Closely App Download Guides

Closely App download links added to Lofty websites and welcome emails

#### What is the Closely App?

Closely is a lead-facing mobile app that can be used to search for houses. Anyone can download the Closely app, but the login credentials are the same as what a lead would use to log into a Lofty website. Closely is currently in Beta for the following MLSs:

1. RealTracs IDX
2. Knoxville Area Association of Realtors (KAAR MLS)
3. Rim County MLS (RCMLS)
4. Greater Chattanooga Association of Realtors (GCAR MLS)
5. Georgia MLS (GAMLS)
6. REBNY
7. Real Estate Information Network (REIN)
8. North Texas Real Estate Info Systems (NTREIS)
9. Bright
10. Realtors Association of Edmonton (RAE)
11. Canadian Real Estate Association (CREA)
12. Real Estate Board of Greater Vancouver (REBGV VOW)
13. Real Estate Board of Greater Vancouver (REBGV)

#### How to Enable

To set this up on a Lofty website, navigate to CMS→ Settings → Closely App

This setting controls all Closely App download links/QR codes on the website and in the welcome email.

The Closely App download guides will appear in several places. This is an all or nothing option and the wording is not editable.

Footer

Header

Widget

Welcome Email

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
Important:
Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/standard user). These features are subject to change at any time.
Please view our training content for these updates in our
Learning Center (https://learningcenter.chime.me/courses/chime-v3-59-new-features-and-updates)
For any questions related to your Lofty package or feature availability, please contact Lofty Support (
support@lofty.com (mailto:support@chimeinc.com)
).
Release Date
Tuesday, January 17th, 2023.
Summary
Enterprise Account Permission Update (#h_01GPRVF3PDE5MRPRG5236N8N6S)
Lead Source Logic Update (#h_01GPRVFC9DG81N1SRZ2GRJ6WWK)
Sources Auto-Creation Logic (#h_01GPRVG6PCD2NMP2W2AWHNBYD4)
Sources Filter Changes (#h_01GPRVGDSBT93H3BCHMZJEE5ER)
Lead Segment Logic Update (#h_01GPRVGN9NH1G4XRH1P3QCRYQ7)
Editing the Lead Segments (#id-1/13/2023:FeatureReleaseTrainingforChime3.59-EditingtheLeadGroups)
Reminder Period (#id-1/13/2023:FeatureReleaseTrainingforChime3.59-ReminderPeriod)
Lead Tag Management (#h_01GPRW320B7T0WZF4XSSQVXRPV)
Standard User Tag Library (#h_01GPRW3BNZSC8V8KADSR4G3AK3)
Team/Company Filter Enabled Tag Library (#h_01GPRW3N4DJ8T615N5JR04NZHK)
Agent Time Last Active Optimization (#h_01GPRX333PJ25YQN7BDMXZ3E8P)
AI Assistant Notification Optimization (#id-1/13/2023:FeatureReleaseTrainingforChime3.59-AIAssistantNotificationOptimization)
Listing Ads Budget Upgrade (#id-1/13/2023:FeatureReleaseTrainingforChime3.59-ListingAdsBudgetUpgrade)
Editing the budget after purchase but before setting up the listing ads (#id-1/13/2023:FeatureReleaseTrainingforChime3.59-Editingthebudgetafterpurchasebutbeforesettingupthelistingads)
Editing the budget when an ad is active (#id-1/13/2023:FeatureReleaseTrainingforChime3.59-Editingthebudgetwhenanadisactive)
Boost Post Retargeting Audience (#id-1/13/2023:FeatureReleaseTrainingforChime3.59-BoostPostRetargetingAudience)
Website Integration Configuration Optimization (#id-1/13/2023:FeatureReleaseTrainingforChime3.59-WebsiteIntegrationConfigurationOptimization)
Closely App Download Guides (#id-1/13/2023:FeatureReleaseTrainingforChime3.59-CloselyAppDownloadGuides)
What is the Closely App? (#id-1/13/2023:FeatureReleaseTrainingforChime3.59-WhatistheCloselyApp?)
How to Enable (#id-1/13/2023:FeatureReleaseTrainingforChime3.59-HowtoEnable)
All Features
Enterprise Account Permission Update
For Enterprise accounts, the "Company Filter" feature is now split to allow access to Sources, Tags, Pipelines, and Lead Segments separately.
Lead Source Logic Update
We have removed the option to Edit sources. Instead, users should create a new Source and when deleting the old source, assign the leads under that Source to the newly created Source.
Sources Auto-Creation Logic
Affect Scope
Enterprise Structure
Team Structure
Auto assigns system sources for leads that are created by Users who do not have the source manage permission
Default System Source
Open API
Email Parsing
Lead Import
Lead Capture
Text Code
Other
The customized sources attached with the leads will be added as tags.
Sources Filter Changes
Changes the "All Source" option to "Any Source" in the following:
AI Assistant
Revaluate
Auto home report
Lead Routing
Smart plan source
Keeps the "All Source" option as a quick selection for all current sources in the following:
People page/Source Filter
Listing discover/Select leads/Source Filter
Transaction/More Filter/Source
Lead Export
This may seem like a simple language change, however, this will capture Any Source, regardless of what Enterprise Account Group the user is in.
Lead Segment Logic Update
For Enterprise accounts, this permission update will allow users to create and manage Lead Segments for their individual Account Groups.
Selecting 'Entire Company' allows the user to create/edit/delete Company level lead segments.
Selecting 'User's Group' allows the user to create/edit/delete lead segments at that user's Group level.
Note:
The lead segment cannot be used at the subgroup level.
Editing the Lead Segments
The logic for editing the Lead Segments has changed a bit for all Lofty account types.
Any user with the 'Segments & Tags' permission enabled will now have a settings cog wheel icon to edit the Segments. Company level segments have the building icon next to them. Group level segments have no icon.
Note:
The Company Admin/Owner can only see the Segments that are in the Company level. They cannot see Group level segments. Any segments the Company admins create will be Company level segments. Group Admin/Owners can see the Company level segments, as well as their own Group level segments. They cannot see other Group's segments.
Example of the Segment editing page, from a Group Owner perspective:
Rather than a pop-up screen, the entire screen is now available for editing Lead Segments for all Lofty account types.
Adding a new Segment looks the same, regardless of the type of Lofty account:
If a user is deleted from the Lofty account, or changes User Groups, any Lead Segments they have previously created will not be affected and can still be used by the User Group the Lead Segment was created for.
Reminder Period
We have also optimized the Reminder Period. The Reminder Period is that red dot that will appear next to leads. This is meant to be a reminder that the lead has not been contacted in the specified period of time.
When unchecked: Only manual actions will count as lead contacts
When checked: Both automatic and manual actions will count as lead contacts
Lead Tag Management
This feature a
llows Enterprise users to create and manage lead tags for their groups. The permissions are the same as the Segment permission, outlined above.
This is also an update to Tag Logic:
Private and Shared tags are no more!
Selecting 'Entire Company' means the users:
Have Company Tag Management library
Can
create/delete/lock
Company level Lead Tag Library.
Selecting 'User's Group' means the users:
Have Group Tag Management library
Can
c
reate/delete/lock
Group level Lead Tag Library.
Every agent has their own tag library, and
only they
can add/edit/delete the tag
themselves
.
The tags in the personal library will sync from the user's group and all higher-level groups' tag library.
For Non-Enterprise accounts, the permission to access Tag Management is 'Team Filter'
If a Tag already exists in Tag Management, it
cannot be duplicated
, regardless of who initially created the Tag.
Standard User Tag Library
Lofty users who do not have a Team/Company Filter enabled will see the above Tag Library.
Here, they can see their own Tags, as well as Tags in the Company/Group Levels above them. They also have the option to edit or delete any unlocked tags. This will only affect the Tag on their own account.
Team/Company Filter Enabled Tag Library
Lofty users who do have the Team/Company Filter enabled will see the above Tag Library. Here, they
can add their own personal Tags in the Tag library by clicking "+Add New" above.
When clicking Tag Management, they can manage Tags that are seen by the Entire Company or their own User Group, depending on their permission level.
The lock icon keeps users from editing or deleting this Tag from their own libraries. By default, when new Lead Tags are added, they will be unlocked, so make sure you lock any Lead Tags that you do not want to be edited in your users' own Tag Libraries.
Agent Time Last Active Optimization
This feature allows admins to see when users on their account have last logged into Lofty.
The user's last log in time has been recalculated to be more accurate and we have added a filter, so admins can sort by when users last logged in.
Permissions:
In order to see the Last Active filter, a user must have the following permission enabled.
Enterprise: Manage User, Entire Company
Enterprise: Manage User, User's Group
Non-Enterprise: Manage User
AI Assistant Notification Optimization
This feature allows users to receive a push notification when a lead responds to the AI Assistant.
This notification is only sent once if the same lead replies multiple times within the same day.
Notification Content:
Your lead [lead's name] ([lead's number]) has responded to a message from the AI Assistant: [message]"
Listing Ads Budget Upgrade
This feature a
llows users to increase their ad budget within their Lofty CRM.
Editing the budget after purchase but before setting up the listing ads
If the user updates the budget, the amount of the difference between the new and old budgets will be charged.
Only allows upgrade (no lower than original budget)
For the $99 package, we allow edits to both the start and end date
For $199 package, do not allow choosing end date. The end date should be start date + 14 days
Editing the budget when an ad is active
Click the edit icon, jump out the pop-up window
If the user upgrades the budget, the amount of the difference between the new and old budgets will be charged.
Only allow upgrade (no lower than original budget)
The budget should be no lower than $5 per day for both packages
Boost Post Retargeting Audience
This feature a
llows users to select existing leads for Boost Post retargeting.
The user process is：
Click "Select Existing Leads"
Jump to lead list
Filter the target leads
Navigate back to boost post popup
Show the chosen lead count
Website Integration Configuration Optimization
This is an improved user interface on the website integrations page. Now, all website Integrations will be listed on one page, with a bit of information about each one.
Consumer Account Page Updates
We have updated the Lead interface when they have registered as a Seller Lead on the Lofty website.
Add Lead Image
A random background color will be added, with the lead's first name initial
My Home
Here, the lead will provide information about the home they currently own
There are four display cards for the different stages of a home:
Home Valuation Card (Stage 1)
Display Condition:
There is a search record from the lead on the Home Valuation page or My Home page.
Display information:
The basic info (home image, address, etc.) and the estimated home price.
Actions:
Click the card: Open the home valuation result page
See my home equity: Open the home valuation result page and pop up a
questionnaire to let the lead fill in the mortgage details.
Request a CMA
Sell my home
Delete
Home Valuation Card (Stage 2)
Display Condition:
The lead had completed the mortgage questionnaire in stage 1.
Display information:
The basic info(home image, address, etc.), the estimated home price, home equity, monthly payment.
Actions:
Click the card: Open the home valuation result page
Request Home Report
Request a CMA
Sell my home
Delete
Home Report Card
Display Condition:
The agent added a home report to the lead.
Display information:
The basic info(home image, address, etc.), the estimated home price, home equity, monthly payment, rises and falls.
Actions:
Request a CMA
Sell my home
See Value Trend: Open the Home Report page and anchor to the Value Trend part.
Financial Options: Open the Home Report page and anchor to the Mortgage part.
Delete
Seller Report
Display Condition:
Can only be synchronized in, leads cannot add it.
Display information:
The basic info(home image, address, etc.), Listing status, Traffic data(View, favorite, potential buyers, matched buyers), listing price, listed date.
Actions:
Chat with agent: Open the chatbox (If the site enables the chatbox)
Check listing traffic: Open the Seller Report page and anchor to the traffic part.
View sales activity: Open the Seller Report page and anchor to the activity part.
Public view: Open the listing detail page.
Delete
Closely App Download Guides
Closely App download links added to Lofty websites and welcome emails
What is the Closely App?
Closely is a lead-facing mobile app that can be used to search for houses. Anyone can download the Closely app, but the login credentials are the same as what a lead would use to log into a Lofty website. Closely is currently in Beta for the following MLSs:
RealTracs IDX
Knoxville Area Association of Realtors (KAAR MLS)
Rim County MLS (RCMLS)
Greater Chattanooga Association of Realtors (GCAR MLS)
Georgia MLS (GAMLS)
REBNY
Real Estate Information Network (REIN)
North Texas Real Estate Info Systems (NTREIS)
Bright
Realtors Association of Edmonton (RAE)
Canadian Real Estate Association (CREA)
Real Estate Board of Greater Vancouver (REBGV VOW)
Real Estate Board of Greater Vancouver (REBGV)
How to Enable
To set this up on a Lofty website, navigate to CMS→ Settings → Closely App
This setting controls all Closely App download links/QR codes on the website and in the welcome email.
The Closely App download guides will appear in several places. This is an all or nothing option and the wording is not editable.
Footer
Header
Widget
Welcome Email
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

# Feature Updates for Lofty 3.62

- Article ID: `14318142838811`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T01:55:14Z`
- Source: https://help.lofty.com/hc/en-us/articles/14318142838811-Feature-Updates-for-Lofty-3-62

## Body

## Introduction

Important: Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/standard user). These features are subject to change at any time. Please see our Learning Center course on this update HERE . Having trouble accessing the course? This article will show you how to access the Lofty Learning Center: How to Access the Lofty Learning Center

## Release Date

Wednesday, April 12th, 2023.

## Summary

- Do Not Contact Updates
- Direct access to MLS information in the CRM
- Lead Source Customization
- Personal Lead Routing
- Smart Plan Reassignment Group Action
- Domain Configuration Optimization
- GoDaddy Direct Integration
- Website List Export
- Auto-Post Social Profile Management
- Boost Post Promotion Optimization
- Google Local Service Ads Self-Purchase
- Google Local Service Ads IVR Service
- Geographic Farming UI Update

## Do Not Contact Updates

We have released several updates to Lofty 's Do Not Contact settings, outlined below:

### Terminate Call Recording

Lofty users are able to stop recording a call that is in progress when using a Lofty calling package. If the recording is stopped, it cannot be turned on again during that call. Call recording will be enabled again for the next call.

### Disclaimer Pop-Ups

Voice Message Disclaimer

For new Lofty users, the Default Outbound Voice Message will be removed:

When a Voice Message is added, a pop-up will disclose the mandatory disclaimer language:

Slybroadcast Disclaimer

When you connect to Slybroadcast, a pop-up will disclose the mandatory disclaimer language:

Multi-line Dialer Disclaimer

When you dial a call list with 2 or 3 lines, a pop-up will disclose the mandatory disclaimer language:

### Text Subscription Message

Toggling this setting on will add the following copy to the first text message (manual or automated) sent to any lead:

- "If you’d rather not communicate by text message, reply with “unsubscribe”"

Text Unsubscribe Logic

The lead will be unsubscribed from receiving text messages and they will be opted out of receiving text messages if the lead responds at any time with the following in a message alone (i.e. not if these words are contained in a sentence):

- Unsubscribe
- Stop
- Cancel
- End
- Quit

The lead can be manually opted back into receiving text messages by the Lofty user.

Unsubscribe Confirmation Text

Once the lead has unsubscribed, the following confirmation message will be auto-sent:

- " You have successfully been unsubscribed. You will not receive any more messages from this number. Reply START to resubscribe.”

If the lead responds with "Start", they will be opted back into receiving text messages.

### Call/Text/Email Opt-In Status in Lead Capture and API Integration Settings

Navigate to Settings → Lead Capture → Lead Capture Settings

This setting will allow you to decide if leads coming from certain sources should be opted in or out of calls, texts, and emails:

Note: This setting is not verifying that the leads' information is valid. By default, this setting will be toggled On for all sources. If there is a source that is not providing reliable lead data, we recommend toggling Off for that source.

## Direct access to MLS information in the CRM

Several UI updates have been made to the Listings Discovery Page. You can view the listing details directly in the CRM without jumping to a new webpage.

When clicking on a listing, the listing details will slide out from the right side, rather than redirect to the Lofty website:

You may click through Media, Details, Map, History, and Mortgage to see all of the listing information.

Click the Computer icon to open the listing page on the Lofty website:

Click the arrow icon in the middle to create a social media post:

Click the "..." icon to send the listing to leads, create a CMA, or create a text code:

When clicking the listing agent name, the user may email, call, or text the agent directly through the Lofty CRM, or click the agent's name to see additional information:

When checking the box next to a listing, the options menu will now open on the top, rather than replacing the side menu:

## Lead Source Customization

This feature allows you to customize the Source for lead capture providers. To access, navigate to Settings → Lead Capture → Lead Capture Settings:

Here, the Source that appears on the lead profile can be updated to any source that has been created in the CRM:

When changing the Source, you must confirm on the pop-up:

Zillow and Realtor lead capture is set up in Settings → Lead Capture. Custom sources may also be set for both:

## Personal Lead Routing

Lead Routing has been redesigned to support a personal lead routing option. This means that all Lofty users, regardless of lead routing permission, now have access to some level of lead routing.

### New Lead Options

First, the New Leads button has been relocated, and the settings within the button have been updated:

A ll Lofty users regardless of permission level will have access to lead routing settings. However, anyone without the Manage Lead Distribution (Enterprise)/Team Features (Team) permission enabled can only set up lead routing rules for leads coming from his/her personal lead capture sources. This allows them to assign leads from their own lead capture source to another agent on your account.

The New Lead Options have been redefined by the scope of the lead:

- Company/Team Source: Company/Team website By default, leads will be routed at the Company/Team level
- Group Source (Enterprise): Group Website You have the option to route leads at the Company level, the Group level, or access the advanced settings: Within the Advanced Settings, leads from a Group's website may be routed either at that Group level or at the Company level:
- Personal Source Agent Website Third-Party Providers Open API Zillow Zapier Open House Form（Only Team Owner has this option, all other member's open house leads will be assigned to themselves directly) Facebook Ads-Lead Form Leads from the above sources may be routed via the Personal, Group (Enterprise), or Company/Team Level

### How To Set Up Lead Routing Rules

Every Lofty user, regardless of permission level, now has the ability to set their own personal lead routing rules. Lofty users with Manage Lead Distribution (Enterprise)/Team Features (Team) permission enabled can set up the Company and Group level lead routing rules.

- What users with Lead distribution-Entire Company permission can set: New lead options： Company Source Group Source Personal Source Routing Rules： Company-Level Routing Rules Group Level Routing Rules Personal Routing Rules
- What users with Lead distribution-User's Group permission can set: New lead options： Personal Source Routing Rules： Group Level Routing Rules Personal Routing Rules
- What users with no Lead distribution permission can set: New lead options： Personal Source Routing Rules Personal Routing Rules

### Third-Party Providers and Open API

By default, new lead options for third-party providers and open API will be set to your personal routing. That is, leads from these sources will automatically be assigned to you. If you want these leads to process through lead routing to be assigned to another user, you may click "Click to Set" to send these leads through either the Company/Team or Group level:

Lofty users who do not have any lead routing permissions enabled are still able to set up lead routing rules. In order for these rules to allocate leads to other Lofty users on your account, you must set the scope for that lead source to either Company/Team or Group. The process for setting up lead routing rules is the same as any other Lofty account:

For more information on Lead Routing Rules, please see our Help Center article: Lead Routing Rules

## Smart Plan Reassignment Group Action

You can now add a new Smart Plan step, "Reassignment Group":

This is a great option for any Lofty users who want to mass reassign their leads. As a refresher, the Reassignment Groups Help Center article is here: Reassignment Groups

Note:

- When the Reassignment Group Action is applied to multiple leads, the New Lead notification for each Lead is queued and sent to the Reassignment Group Assignee in turn. That is, if you are re-routing hundreds of leads to an agent, that agent will get hundreds of "New Lead" notifications.
- If multiple Smart Plans have Reassignment Group actions, they will be executed in chronological order.
- The Reassignment Group action is not available for Private Leads. If a Private Lead reaches a Reassignment Group action in a Smart Plan, that step will be skipped and recorded in the Smart Plan Log. There will be Smart Plan Logs for the following: The Reassignment Group action starts The Reassignment Group action ends When the lead gets to the Reassignment Group action, but the Reassignment Group has been deleted When a private lead gets to the Reassignment Group action and that smart plan step is skipped

## Domain Configuration Optimization

This changes the flow of configuring a Lofty website domain.

- Before: Select domain → Configure Domain or save for later → Apply MLS
- After: Select domain → can only save for later → Apply MLS

When you are ready to configure their domain, they will navigate to CMS → Settings → Domain and click Configure:

Please see our Help Center article on Domain Configuration for more details on configuring your website domain to your Lofty website: Domain Configuration Guide

## GoDaddy Direct Integration

If the vanity domain is hosted on GoDaddy, we can directly connect without navigating to GoDaddy and manually configuring the records. The system will detect if the domain is hosted on GoDaddy, and if so, an authorization pop-up with begin the configuration:

## Website List Export

If you have a Lofty website, you will have the ability to download all of the websites that you can see to a CSV file. To access this setting, navigate to the CMS tool:

The CSV file will have the following columns:

- Domain
- Type
- Owner
- Template
- Create Time

If there are subdomains, the spreadsheet will also have a column for the parent website.

## Auto-Post Social Profile Management

If you have a paid version of Social Studio (Pro or Team) you can select which social profiles will be involved in the auto-post. Previously, all connected social profiles would have the post auto-posted.

To access this setting, navigate to Campaigns → Social Studio → Settings → Auto-post Settings → Auto-Post Listing Rules

When a listing status is toggled on for either "Team Listings" or "My Listings", all social profiles that have been connected to the Lofty account will automatically be applied to the auto-post:

Click the edit icon to remove any of the social profiles:

Checking the box next to "Apply to All Auto-Posts" will set these social profiles for all enabled auto-posts:

## Boost Post Promotion Optimization

A few features have been added that are designed to encourage you to utilize our Boost Post feature. As a refresher, the Help Center article on Boost Post is here: Boost Post

### Notification

A new email notification has been added to the notifications section, located in Settings → Notifications. When this is enabled, you will receive an email notification when your social media post has a below-average impression score :

### Promotion

When a landing page is published, a pop-up will encourage you to boost the landing page:

## Google Local Service Ads Self-Purchase

Important: This feature will be available on Friday, April 14

Important: Google Local Service Ads are not available in Canada

Google Local Service Ads are now available for purchase in the Lofty Marketplace:

The button on the pop-up window will vary, based on if the user has purchased LSA before:

- If they have never purchased LSA: Button = Buy Now You will be guided to the purchase page
- If they have purchased LSA: Button = View Data You will be guided to the report page

Purchase Page

A new page will be added to the Campaigns section, which includes an introduction to the feature and the purchase options.

- Purchasing Google Local Service Ads: Lowest Budget = $600 with a 20% service fee Set up fee for first-time purchase = $99 Company Number and AI Assistant included

Once the ads are purchased, you will continue to the settings page

Settings Page

Step 1: Connect your Google Business Page

Step 2: Select a Company Number

Step 3: Submit Your Information

Step 4: You may click Save and come back later or click Buy Now to complete the purchase

- Once submitted, the information cannot be changed, as it is submitted to Google for review

LSA Report

All leads that contact the Google LSA phone number will be available in the LSA campaign page. If the lead name is not available, the Customer Name field will be "LSA Unknown Lead" and the lead's source will be " Lofty Paid Lead".

- To add these leads to the CRM People Page, click "Convert to Lead" If the Customer Name field is blank, it must be filled to convert the lead.

Clicking the down arrow next to a lead will allow you to see that lead's activities:

## Google Local Service Ads IVR Service

Important: This feature will be available on Friday, April 14

When a potential lead calls the Company Number that is associated with Google Local Service Ads, they will encounter an IVR service to welcome to lead and collect information.

Initially, we will offer three (3) options to the lead:

1. The lead is looking for more information about buying or selling a property
2. The lead is an agent with questions about listings
3. The lead has questions about administrative issues.

Once the lead has made their selection, the phone call will be automatically transferred to your phone. If you are unable to answer, the lead may leave a message, which will be recorded in the Lofty CRM.

## Geographic Farming UI Update

Important: Geographic Farming Homeowner Shop is not available in Canada

This moves the Homeowner Shop to step 1 when starting a new Geographic Farming campaign:

If you do not want to purchase homeowner data, and instead create a campaign using homeowner data you already own, you may click "Skip" to move on to building the campaign:

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
Important:
Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/standard user). These features are subject to change at any time. Please see our Learning Center course on this update
HERE (https://learningcenter.chime.me/courses/Chime-v362)
. Having trouble accessing the course? This article will show you how to access the Lofty Learning Center:
How to Access the Lofty Learning Center (https://help.chime.me/hc/en-us/articles/13857197513115)
Release Date
Wednesday, April 12th, 2023.
Summary
Do Not Contact Updates (#h_01GXPQ780SCSDGP7J8A8R13ZZD)
Direct access to MLS information in the CRM (#h_01GXPQ7EKT0DCS6GYDMSCQGGXA)
Lead Source Customization (#h_01GXPQ80ZPHK46G6GNMA91NCS2)
Personal Lead Routing (#h_01GXPQ88S1VXX3QVZQ229KHTVY)
Smart Plan Reassignment Group Action (#h_01GXPQ8HHTFAWC3CPQ16VTXK1A)
Domain Configuration Optimization (#h_01GXPQ8W011QGS0QZ5XWD1GN4J)
GoDaddy Direct Integration (#h_01GXPQ9ANYENYAYE52X00TPZAT)
Website List Export (#h_01GXPQ9PGW1MPA34PGFRTZXP8E)
Auto-Post Social Profile Management (#h_01GXPQA049WWGZ1T8X0TA2Q3G4)
Boost Post Promotion Optimization (#h_01GXPQA8SVFA27W4Z6B0ZPETEJ)
Google Local Service Ads Self-Purchase (#h_01GXPQAJGMNGSA608Q18XQ5NRX)
Google Local Service Ads IVR Service (#h_01GXPQAVX4FPGD2BV9GG4BW883)
Geographic Farming UI Update (#h_01GXPQE39VD9ZXF7RC97814GWQ)
Do Not Contact Updates
We have released several updates to
Lofty
's Do Not Contact settings, outlined below:
Terminate Call Recording
Lofty
users are able to stop recording a call that is in progress when using a
Lofty
calling package. If the recording is stopped, it cannot be turned on again during that call. Call recording will be enabled again for the next call.
Disclaimer Pop-Ups
Voice Message Disclaimer
For new
Lofty
users, the Default Outbound Voice Message will be removed:
When a Voice Message is added, a pop-up will disclose the mandatory disclaimer language:
Slybroadcast Disclaimer
When you connect to Slybroadcast, a pop-up will disclose the mandatory disclaimer language:
Multi-line Dialer Disclaimer
When you dial a call list with 2 or 3 lines, a pop-up will disclose the mandatory disclaimer language:
Text Subscription Message
Toggling this setting on will add the following copy to the
first text message
(manual or automated) sent to any lead:
"If you’d rather not communicate by text message, reply with “unsubscribe”"
Text Unsubscribe Logic
The lead will be unsubscribed from receiving text messages and they will be opted out of receiving text messages if the lead responds at
any time
with the following in a message alone (i.e. not if these words are contained in a sentence):
Unsubscribe
Stop
Cancel
End
Quit
The lead can be manually opted back into receiving text messages by the
Lofty
user.
Unsubscribe Confirmation Text
Once the lead has unsubscribed, the following confirmation message will be auto-sent:
"
You have successfully been unsubscribed. You will not receive any more messages from this number. Reply START to resubscribe.”
If the lead responds with "Start", they will be opted back into receiving text messages.
Call/Text/Email Opt-In Status in Lead Capture and API Integration Settings
Navigate to Settings → Lead Capture → Lead Capture Settings
This setting will allow you to decide if leads coming from certain sources should be opted in or out of calls, texts, and emails:
Note: This setting is not verifying that the leads' information is valid. By default, this setting will be toggled On for all sources. If there is a source that is not providing reliable lead data, we recommend toggling Off for that source.
Direct access to MLS information in the CRM
Several UI updates have been made to the Listings Discovery Page. You can view the listing details directly in the CRM without jumping to a new webpage.
When clicking on a listing, the listing details will slide out from the right side, rather than redirect to the Lofty website:
You may click through Media, Details, Map, History, and Mortgage to see all of the listing information.
Click the Computer icon to open the listing page on the
Lofty
website:
Click the arrow icon in the middle to create a social media post:
Click the "..." icon to send the listing to leads, create a CMA, or create a text code:
When clicking the listing agent name, the user may email, call, or text the agent directly through the Lofty CRM, or click the agent's name to see additional information:
When checking the box next to a listing, the options menu will now open on the top, rather than replacing the side menu:
Lead Source Customization
This feature allows you to customize the Source for lead capture providers. To access, navigate to Settings → Lead Capture → Lead Capture Settings:
Here, the Source that appears on the lead profile can be updated to any source that has been created in the CRM:
When changing the Source, you must confirm on the pop-up:
Zillow and Realtor lead capture is set up in Settings → Lead Capture. Custom sources may also be set for both:
Personal Lead Routing
Lead Routing has been redesigned to support a personal lead routing option. This means that all Lofty users, regardless of lead routing permission, now have access to some level of lead routing.
New Lead Options
First, the New Leads button has been relocated, and the settings within the button have been updated:
A
ll
Lofty
users
regardless of permission level will have access to lead routing settings. However, anyone without the Manage Lead Distribution (Enterprise)/Team Features (Team) permission enabled can only set up lead routing rules for leads coming from his/her personal lead capture sources. This allows them to assign leads from their own lead capture source to another agent on your account.
The New Lead Options have been redefined by the scope of the lead:
Company/Team Source:
Company/Team website
By default, leads will be routed at the Company/Team level
Group Source (Enterprise):
Group Website
You have the option to route leads at the Company level, the Group level, or access the advanced settings:
Within the Advanced Settings, leads from a Group's website may be routed either at that Group level or at the Company level:
Personal Source
Agent Website
Third-Party Providers
Open API
Zillow
Zapier
Open House Form（Only Team Owner has this option, all other member's open house leads will be assigned to themselves directly)
Facebook Ads-Lead Form
Leads from the above sources may be routed via the Personal, Group (Enterprise), or Company/Team Level
How To Set Up Lead Routing Rules
Every
Lofty
user, regardless of permission level, now has the ability to set their own personal lead routing rules.
Lofty
users with Manage Lead Distribution (Enterprise)/Team Features (Team) permission enabled can set up the Company and Group level lead routing rules.
What users with
Lead distribution-Entire Company
permission can set:
New lead options：
Company Source
Group Source
Personal Source
Routing Rules：
Company-Level Routing Rules
Group Level Routing Rules
Personal Routing Rules
What users with
Lead distribution-User's Group
permission can set:
New lead options：
Personal Source
Routing Rules：
Group Level Routing Rules
Personal Routing Rules
What users with
no
Lead distribution permission can set:
New lead options：
Personal Source
Routing Rules
Personal Routing Rules
Third-Party Providers and Open API
By default, new lead options for third-party providers and open API will be set to your personal routing. That is, leads from these sources will automatically be assigned to you. If you want these leads to process through lead routing to be assigned to another user, you may click "Click to Set" to send these leads through either the Company/Team or Group level:
Lofty
users who do not have any lead routing permissions enabled are still able to set up lead routing rules. In order for these rules to allocate leads to other
Lofty
users on your account, you must set the scope for that lead source to either Company/Team or Group. The process for setting up lead routing rules is the same as any other
Lofty
account:
For more information on Lead Routing Rules, please see our Help Center article:
Lead Routing Rules (https://help.lofty.com/hc/en-us/articles/360055177831)
Smart Plan Reassignment Group Action
You can now add a new Smart Plan step, "Reassignment Group":
This is a great option for any Lofty users who want to mass reassign their leads. As a refresher, the Reassignment Groups Help Center article is here:
Reassignment Groups (https://help.lofty.com/hc/en-us/articles/360061564771)
Note:
When the Reassignment Group Action is applied to multiple leads, the New Lead notification for each Lead is queued and sent to the Reassignment Group Assignee in turn. That is, if you are re-routing hundreds of leads to an agent, that agent will get hundreds of "New Lead" notifications.
If multiple Smart Plans have Reassignment Group actions, they will be executed in chronological order.
The Reassignment Group action is
not available
for Private Leads. If a Private Lead reaches a Reassignment Group action in a Smart Plan, that step will be skipped and recorded in the Smart Plan Log.
There will be Smart Plan Logs for the following:
The Reassignment Group action starts
The Reassignment Group action ends
When the lead gets to the Reassignment Group action, but the Reassignment Group has been deleted
When a private lead gets to the Reassignment Group action and that smart plan step is skipped
Domain Configuration Optimization
This changes the flow of configuring a
Lofty
website domain.
Before: Select domain → Configure Domain or save for later → Apply MLS
After: Select domain → can only save for later → Apply MLS
When you are ready to configure their domain, they will navigate to CMS → Settings → Domain and click Configure:
Please see our Help Center article on Domain Configuration for more details on configuring your website domain to your Lofty website:
Domain Configuration Guide (https://help.lofty.com/hc/en-us/articles/360054554712)
GoDaddy Direct Integration
If the vanity domain is hosted on GoDaddy, we can directly connect without navigating to GoDaddy and manually configuring the records. The system will detect if the domain is hosted on GoDaddy, and if so, an authorization pop-up with begin the configuration:
Website List Export
If you have a Lofty website, you will have the ability to download all of the websites that you can see to a CSV file. To access this setting, navigate to the CMS tool:
The CSV file will have the following columns:
Domain
Type
Owner
Template
Create Time
If there are subdomains, the spreadsheet will also have a column for the parent website.
Auto-Post Social Profile Management
If you have a paid version of Social Studio (Pro or Team) you can select which social profiles will be involved in the auto-post. Previously,
all
connected social profiles would have the post auto-posted.
To access this setting, navigate to Campaigns → Social Studio → Settings → Auto-post Settings → Auto-Post Listing Rules
When a listing status is toggled on for either "Team Listings" or "My Listings", all social profiles that have been connected to the Lofty account will automatically be applied to the auto-post:
Click the edit icon to remove any of the social profiles:
Checking the box next to "Apply to All Auto-Posts" will set these social profiles for all enabled auto-posts:
Boost Post Promotion Optimization
A few features have been added that are designed to encourage you to utilize our Boost Post feature. As a refresher, the Help Center article on Boost Post is here:
Boost Post (https://help.lofty.com/hc/en-us/articles/10989407456283)
Notification
A new email notification has been added to the notifications section, located in Settings → Notifications. When
this is enabled, you will receive an email notification when your social media post has a below-average impression score
:
Promotion
When a landing page is published, a pop-up will encourage you to boost the landing page:
Google Local Service Ads Self-Purchase
Important:
This feature will be available on Friday, April 14
Important:
Google Local Service Ads are not available in Canada
Google Local Service Ads are now available for purchase in the
Lofty
Marketplace:
The button on the pop-up window will vary, based on if the user has purchased LSA before:
If they have never purchased LSA:
Button = Buy Now
You will be guided to the purchase page
If they have purchased LSA:
Button = View Data
You will be guided to the report page
Purchase Page
A new page will be added to the Campaigns section, which includes an introduction to the feature and the purchase options.
Purchasing Google Local Service Ads:
Lowest Budget = $600 with a 20% service fee
Set up fee for first-time purchase = $99
Company Number and AI Assistant included
Once the ads are purchased, you will continue to the settings page
Settings Page
Step 1: Connect your Google Business Page
Step 2: Select a Company Number
Step 3: Submit Your Information
Step 4: You may click Save and come back later or click Buy Now to complete the purchase
Once submitted, the information cannot be changed, as it is submitted to Google for review
LSA Report
All leads that contact the Google LSA phone number will be available in the LSA campaign page. If the lead name is not available, the Customer Name field will be "LSA Unknown Lead" and the lead's source will be "
Lofty
Paid Lead".
To add these leads to the CRM People Page, click "Convert to Lead"
If the Customer Name field is blank, it must be filled to convert the lead.
Clicking the down arrow next to a lead will allow you to see that lead's activities:
Google Local Service Ads IVR Service
Important:
This feature will be available on Friday, April 14
When a potential lead calls the Company Number that is associated with Google Local Service Ads, they will encounter an IVR service to welcome to lead and collect information.
Initially, we will offer three (3) options to the lead:
The lead is looking for more information about buying or selling a property
The lead is an agent with questions about listings
The lead has questions about administrative issues.
Once the lead has made their selection, the phone call will be automatically transferred to your phone. If you are unable to answer, the lead may leave a message, which will be recorded in the
Lofty
CRM.
Geographic Farming UI Update
Important:
Geographic Farming Homeowner Shop is not available in Canada
This moves the Homeowner Shop to step 1 when starting a new Geographic Farming campaign:
If you do not want to purchase homeowner data, and instead create a campaign using homeowner data you already own, you may click "Skip" to move on to building the campaign:
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

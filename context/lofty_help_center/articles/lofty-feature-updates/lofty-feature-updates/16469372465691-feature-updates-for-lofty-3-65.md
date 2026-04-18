# Feature Updates for Lofty 3.65

- Article ID: `16469372465691`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T01:52:25Z`
- Source: https://help.lofty.com/hc/en-us/articles/16469372465691-Feature-Updates-for-Lofty-3-65

## Body

## Introduction

Important: Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/standard user). These features are subject to change at any time. Please see our Learning Center course on this update HERE .

Having trouble accessing the course? This article will show you how to access the Lofty Learning Center: How to Access the Lofty Learning Center

## Release Date

Monday, June 26th, 2023.

## Summary

- Agent List Page Optimization
- Agent Tag Management
- Lead Appointment Optimization
- Calendar Optimization
- Enterprise Agent Filter on People Page Optimization
- Lead Pond Mobile App Optimization
- Multilingual URL Structure
- AI Social Post Writing Assistant
- New Onboarding Dashboard
- Enterprise API Optimization

## Agent List Page Optimization

A number has been added next to the Agent List, representing the total number of agents, both users and display only, in the Lofty account's agent list. If a filter is applied, the number will update to reflect the number of agents available in the filtered list.

In order to see the number of Agents in the list, you must have the Manage User permission enabled for Team accounts or the User Management - Entire Company permission enabled for Enterprise accounts.

## Agent Tag Management

This update adds a tab to both Team and Enterprise Lofty accounts to view/add/edit the Agent Tags.

In order to access this tab, the user must have the Manage User permission enabled for a Team account or User Management - Agent Tag enabled or an Enterprise account.

Within this tab, the user can see the list of Agent Tags, the number of agents with that tag applied, the user who created the tag, the last modified date, and the option to edit or delete the Agent Tag.

## Lead Appointment Optimization

With this update, if the Lofty user can see the lead, they can edit or delete an appointment on the lead's profile. If the user has Access All Team/Company Leads permission enabled, they do not have to be assigned to the lead in any role.

Here, the assigned assistant has the option to edit or delete the appointment scheduled by the primary agent assigned to the lead.

## Calendar Optimization

If you have integrated a third-party calendar, such as Google or Outlook Calendar, into your Lofty account, appointments scheduled via the Meeting Link will now sync to your third-party calendar.

## Enterprise Agent Filter on People Page Optimization

For Enterprise Lofty Accounts, when filtering by Agents on the People Page:

- For Company Owner/Admin, Group Owner/Admin, and users with "Access All Company Lead" permission: The users themselves will always be displayed at the top of the list All users within their own group and sub-groups will be shown in the list
- For other members: The users themselves will always be displayed at the top of the list All users within their own group will be shown.
- Note: Any Lofty user can search for another user within the company, and those users' names will appear, but only the users in their own Hierarchy group will appear by default

## Lead Pond Mobile App Optimization

With this update, we are adding Lead Pond functionality to the Lofty mobile app. If you have access to a Lead Pond, you can filter by the lead pond on the app Lead page:

This also supports claiming a lead from the lead pond, via the mobile app:

## Phone Number Country Code

With this update, the country code will automatically display with your phone number on your Lofty website. The country code is provided in the profile settings. There is no option to disable this update.

## Multilingual URL Structure

If you have enabled the Language Translation and Currency Conversion Add-On , the website URL will include the parameter "lang=**" when website visitors switch to a non-English language on the Lofty website. This allows you to set a default language for your website through the URL when promoting the website externally.

## AI Social Post Writing Assistant

This is an expansion on the other AI-generated content features we have released recently. This update adds the AI Writing Assistant to the Social Studio, so Lofty users can utilize AI to write and edit social media post captions.

Screenshot | Description
 | All social studio users will have access to this feature: Freemium: 10 credits per week Credits are applied when selecting "Generate" or "Continue Writing" Pro/Team/Free Trial: Unlimited
 | Actions: Generate Rephrase Summarize Expand Simplify Change Tone Professional Casual Straightforward Confident Friendly Continue Writing

## New Onboarding Dashboard

An Onboarding Dashboard will be available to all new Lofty users for the first 90 days of their account being opened.

Screenshot | Description
 | When a new Lofty user logs in to their CRM, they will be automatically redirected to this page. They can exit the Onboarding Dashboard page at any time by clicking "Explore CRM" They can navigate back to the Onboarding Dashboard for the first 90 days of their account being opened. Onboarding Dashboard Entrance： The Onboarding Progress can be accessed via the account's Avatar menu
 | New Lofty account owners are prompted to complete an Onboarding Questionnaire. This questionnaire allows the Lofty Onboarding Team to get to know you and your business goals.
 | Stage 1: Digital Brand The first section will help you set up the following features: Company Number： This is only available for the Account Owner. The Company Number is the virtual phone number used by all members on the account. Email Integration：Prompts you to connect your email account Social Media：Prompts you to connect your social media accounts, which will sync to your agent detail page
 | Stage 2: Leads Database The second section will help the you set up the following features: Lead Import： You will be directed to the lead import page via this CTA button. If you have already imported your leads or requested assistance to import leads from the onboarding questionnaire, this section will be marked as complete. Zillow Integration：You will be directed to Zillow to connect your Zillow account. Lead Capture Settings: You will be directed to the Lead Capture section to connect your third-party leads.
 | Stage 3: Automations Import Smart Plan Templates：You will be directed to the Smart Plan section to create a Smart Plan Set Transaction Checklist：You will be directed to the Transaction Checklist section to create a Transaction Checklist AI Assistant：If the CRM package comes with an AI Assistant, you will be directed to the settings. If not, you will have the option to start a Free Trial and review the order page.
 | Stage 4: Marketing Profile Strategy to Accomplish Goals: Based on the your choices, we will suggest different marketing plans. Commission-driven lead closure: Lead generation Enhance CRM leads Nurturing: Remarketing ads Dominate the Market: Seller ads and Geofarming Here, you can confirm the suggested plan now, but you will not be charged until your website has been set up and a member of Lofty 's Marketing Team has contacted you.
Team Dashboard | The Team Dashboard allows the account owner to review the onboarding progress of all the users on the account. New users can be added directly on this page. Reminders can be sent to users who have not completed the onboarding process.

## Enterprise API Optimization

The API has been updated to reflect the following optimizations for Enterprise Lofty Accounts:

Module | Optimization
Get member information interface | The following four API endpoints can be used to obtain the Group ID and Group Name of enterprise users. 5.6.1. Get current user’s info GET /v1.0/me 5.6.2. Get team members GET /v1.0/members 5.6.3. Get member by account GET /v1.0/members/{account} 5.6.4. Get user by Id GET /v1.0/users/{userId}
Create lead interface | Add " assignGroupId " field which is used to d esignate the lead to follow the routing rules of the specific scope.

Our API documentation can be found here: https://api.lofty.me/docs/index.html

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
Important:
Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/standard user). These features are subject to change at any time. Please see our Learning Center course on this update
HERE (https://learningcenter.chime.me/courses/chime-v365)
.
Having trouble accessing the course? This article will show you how to access the Lofty Learning Center:
How to Access the Lofty Learning Center (https://help.chime.me/hc/en-us/articles/13857197513115)
Release Date
Monday, June 26th, 2023.
Summary
Agent List Page Optimization (#h_01H3G0JH2K1VNFSFG83ZFATN8Z)
Agent Tag Management (#h_01H3G1A5KSPYXGPG18AND8BJVT)
Lead Appointment Optimization (#h_01H3G4D1WNAG3DC6N9ETRQPP61)
Calendar Optimization (#h_01H3G4D94Y7AJYSEHG0T1DVQG5)
Enterprise Agent Filter on People Page Optimization (#h_01H3G4DGQJW1D7A332GSAK8BZJ)
Lead Pond Mobile App Optimization (#h_01H3G4DQXJE25H55EAJBGDA14W)
Multilingual URL Structure (#h_01H3G4DYQBP4GJK6F0P5VW1D95)
AI Social Post Writing Assistant (#h_01H3G4E68NW14K659X9EKZ0PH5)
New Onboarding Dashboard (#h_01H3G4EFZN9Q7D9YWNWA6GHTS6)
Enterprise API Optimization (#h_01H3G4EQ0WVCG7GWXNVYZQQJK5)
Agent List Page Optimization
A number has been added next to the Agent List, representing the total number of agents, both users and display only, in the
Lofty
account's agent list. If a filter is applied, the number will update to reflect the number of agents available in the filtered list.
In order to see the number of Agents in the list, you must have the Manage User permission enabled for Team accounts or the User Management - Entire Company permission enabled for Enterprise accounts.
Agent Tag Management
This update
adds a tab to both Team and Enterprise Lofty accounts to view/add/edit the Agent Tags.
In order to access this tab, the user must have the Manage User permission enabled for a Team account or User Management - Agent Tag enabled or an Enterprise account.
Within this tab, the user can see the list of Agent Tags, the number of agents with that tag applied, the user who created the tag, the last modified date, and the option to edit or delete the Agent Tag.
Lead Appointment Optimization
With this update, if the
Lofty
user can see the lead, they can edit or delete an appointment on the lead's profile. If the user has Access All Team/Company Leads permission enabled, they do not have to be assigned to the lead in any role.
Here, the assigned assistant has the option to edit or delete the appointment scheduled by the primary agent assigned to the lead.
Calendar Optimization
If you have integrated a third-party calendar, such as Google or Outlook Calendar, into your
Lofty
account, appointments scheduled via the Meeting Link will now sync to your third-party calendar.
Enterprise Agent Filter on People Page Optimization
For Enterprise
Lofty
Accounts, when filtering by Agents on the People Page:
For Company Owner/Admin, Group Owner/Admin, and users with "Access All Company Lead" permission:
The users themselves will always be displayed at the top of the list
All users within their own group and sub-groups will be shown in the list
For other members:
The users themselves will always be displayed at the top of the list
All users within their own group will be shown.
Note:
Any
Lofty
user can search for another
user within the company, and those users' names will appear, but only the users in their own Hierarchy group will appear by default
Lead Pond Mobile App Optimization
With this update, we are adding Lead Pond functionality to the Lofty mobile app. If you have access to a Lead Pond, you can filter by the lead pond on the app Lead page:
This also supports claiming a lead from the lead pond, via the mobile app:
Phone Number Country Code
With this update, the country code will automatically display with your phone number on your Lofty website. The country code is provided in the profile settings. There is no option to disable this update.
Multilingual URL Structure
If you have enabled the
Language Translation and Currency Conversion Add-On (https://help.lofty.com/hc/en-us/articles/13764506865947)
, the website URL will include the parameter "lang=**" when website visitors switch to a non-English language on the Lofty website. This allows you to set a default language for your website through the URL when promoting the website externally.
AI Social Post Writing Assistant
This is an expansion on the other AI-generated content features we have released recently. This update adds the AI Writing Assistant to the Social Studio, so Lofty users can utilize AI to write and edit social media post captions.
Screenshot
Description
All social studio users will have access to this feature:
Freemium: 10 credits per week
Credits are applied when selecting "Generate" or "Continue Writing"
Pro/Team/Free Trial: Unlimited
Actions:
Generate
Rephrase
Summarize
Expand
Simplify
Change Tone
Professional
Casual
Straightforward
Confident
Friendly
Continue Writing
New Onboarding Dashboard
An Onboarding Dashboard will be available to all
new
Lofty
users for the first 90 days of their account being opened.
Screenshot
Description
When a new
Lofty
user logs in to their CRM, they will be automatically redirected to this page.
They can exit the Onboarding Dashboard page at any time by clicking "Explore CRM"
They can navigate back to the Onboarding Dashboard for the first 90 days of their account being opened.
Onboarding Dashboard Entrance：
The Onboarding Progress can be accessed via the account's Avatar menu
New
Lofty
account owners are prompted to complete an Onboarding Questionnaire.
This questionnaire allows the
Lofty
Onboarding Team to get to know you and your business goals.
Stage 1: Digital Brand
The first section will help you set up the following features:
Company Number： This is only available for the Account Owner. The Company Number is the virtual phone number used by all members on the account.
Email Integration：Prompts you to connect your email account
Social Media：Prompts you to connect your social media accounts, which will sync to your agent detail page
Stage 2: Leads Database
The second section will help the you set up the following features:
Lead Import： You will be directed to the lead import page via this CTA button. If you have already imported your leads or requested assistance to import leads from the onboarding questionnaire, this section will be marked as complete.
Zillow Integration：You will be directed to Zillow to connect your Zillow account.
Lead Capture Settings: You will be directed to the Lead Capture section to connect your third-party leads.
Stage 3: Automations
Import Smart Plan Templates：You will be directed to the Smart Plan section to create a Smart Plan
Set Transaction Checklist：You will be directed to the Transaction Checklist section to create a Transaction Checklist
AI Assistant：If the CRM package comes with an AI Assistant, you will be directed to the settings. If not, you will have the option to start a Free Trial and review the order page.
Stage 4: Marketing Profile
Strategy to Accomplish Goals:
Based on the your choices, we will suggest different marketing plans.
Commission-driven lead closure: Lead generation
Enhance CRM leads Nurturing: Remarketing ads
Dominate the Market: Seller ads and Geofarming
Here, you can confirm the suggested plan now, but you will not be charged until your website has been set up and a member of
Lofty
's Marketing Team has contacted you.
Team Dashboard
The Team Dashboard allows the account owner to review the onboarding progress of all the users on the account.
New users can be added directly on this page.
Reminders can be sent to users who have not completed the onboarding process.
Enterprise API Optimization
The API has been updated to reflect the following optimizations for Enterprise
Lofty
Accounts:
Module
Optimization
Get member information interface
The following four API endpoints can be used to obtain the Group ID and Group Name of enterprise users.
5.6.1. Get current user’s info
GET /v1.0/me
5.6.2. Get team members
GET /v1.0/members
5.6.3. Get member by account
GET /v1.0/members/{account}
5.6.4. Get user by Id
GET /v1.0/users/{userId}
Create lead interface
Add "
assignGroupId
" field which is used to d
esignate the lead to follow the routing rules of the specific scope.
Our API documentation can be found here: https://api.lofty.me/docs/index.html
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

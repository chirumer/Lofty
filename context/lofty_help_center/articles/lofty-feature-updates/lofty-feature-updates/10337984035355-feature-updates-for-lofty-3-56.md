# Feature Updates for Lofty 3.56

- Article ID: `10337984035355`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T02:07:32Z`
- Source: https://help.lofty.com/hc/en-us/articles/10337984035355-Feature-Updates-for-Lofty-3-56

## Body

## Introduction

*Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/agent user). For any questions related to your Lofty package or feature availability, please contact Lofty Support ( support@lofty.com ).

Please view our training content for these updates in our Learning Center .

## Release Date

Wednesday, November 16th, 2022

## Summary

- Lofty UI Update
- Revaluate Billing Optimization
- Lead Routing Rules - Country Support
- Lender Lead Routing Options
- Note Formatting on the Lead Profile and Transactions
- Lead Generation Self-Purchase Budget Update
- Social Studio Pro Free Trial
- Social Studio YouTube Settings
- Google My Business Integration
- Team Organization with Agent Tags
- Single Sign On (SSO)
- Website Template Library
- Action Insight

### Lofty UI Update

If you were not included in the UI beta test from Lofty 3.55 or Lofty 3.54 , you will have the updated UI now. This update also introduces a new feature, Notification Categorization.

Your notifications will now be organized by type. Now, you can easily see exactly what kind of alert you are receiving. This is live in both the web and mobile apps.

### Revaluate Billing Optimization

If you use the Revaluate integration , you will notice a change to how this service is billed. Previously, we would bill for Revaluate at the beginning of the month for the last month's usage. However, if the payment failed, Lofty would still need to pay for Revaluate. Effective today, we will be billed at the beginning of the month for that month's estimated usage.

Please see the billing situations outlined below:

1. A Lofty user integrates with Revaluate for the first time: If you are new to Revaluate's score service, you will be instructed to set up your Lead Monitoring Scope. The system will charge for those estimated leads prior to starting the service. Leads to be charged = Leads that meet the criteria
2. An active Revaluate user updates their Revaluate Criteria: When an agent updates the Revaluate Lead Monitor Criteria, it may result in an increase in new leads. If so, the system will prompt the agent to pay for those leads before saving their new criteria. Leads to be charged = New leads that meet the updated criteria and existing leads that have not been charged for yet
3. The Number of Leads that meet the Criteria Exceeds 1000 Even if an agent doesn't change the criteria, the number of leads that meet the criteria may increase. The system will automatically charge the agent whenever the leads that meet the criteria reach 1000. The new leads will be synced with Revaluate score after the agent has been successfully charged. Leads to be charged = 1000 at a time
4. When an Agent was to Cancel Revaluate Integration If an agent wants to cancel their Revaluate Integration, the system will charge for any newly added leads that not have been charged. The agent will not be allowed to cancel until the outstanding bill is paid. Leads to be charged = Any that are outstanding

### Lead Routing Rules - Country Support

This feature allows setting a lead routing rule based on the country. This will also update applicable fields within that country. For example, if Canada is selected, 'State' will automatically change to 'Province'.

### Lender Lead Routing Options

This feature adds the "New Leads" button for lender lead routing separately. This determines which leads will go through the lender lead routing rule, based on the source.

### Note Formatting on the Lead Profile and Transactions

This update supports additional formatting for notes in both the transaction and the lead profile. The following are supported:

- Text style
- Number list
- Bullet list
- Link
- Insert Horizontal Line
- Emoji
- Formatted notes via API

### Lead Generation Self-Purchase Budget Update

This update expands on the Lead Gen update in Lofty 3.55 , which now allows Lofty users to increase their lead gen budget.

#### Buyer Lead Gen

When a user clicks the budget update button, a pop-up window will allow them to adjust their budget for the channel that they have already purchased. The text box will show their current budget for each channel.

#### Seller Lead Gen

The process is the same as the Buyer, but with only one text box as seller is promoted as a package.

### Social Studio Pro Free Trial

This update provides a free 30-day trial to Social Studio Pro to all Lofty users who have not used this feature before. They will need to input payment information and will be automatically charged if they do not cancel after the free trial period. The free trial trigger will appear on all pro features.

The free trial can also be activated in the Marketplace, and can only be used once. When signing up for the free trial, you will see the dates Social Studio Pro is free to use, when the first payment will be (if not canceled), and the full price of Social Studio Pro. This feature can be canceled at any time.

### Social Studio YouTube Settings

This update is currently in beta but will allow Lofty users to upload posts to YouTube, once it is fully released. The following fields can be filled out, and they only need to be filled out once.

- YouTube Video Tags
- Category
- Privacy

### Google My Business Integration

The Google My Business website integration was introduced in Lofty 3.48 , as a way to integrate Google reviews into your Lofty website. Note: This integration is only available to Full Websites, it is not available for Subdomain websites.

This update adds the Google My Business Social Studio integration for all Lofty users.

To connect, click the "Connect" button and follow the prompts to log into your Google account. You are able to link one Google My Business account.

Supported social material:

- Text
- Text and one image, multiple images are not supported

If you have a full Lofty website (not a subdomain), you have the option to sync your Google My Business authorization between the Social Studio and CMS. If you disconnect Google My Business in one location, it will disconnect in the other.

### Team Organization with Agent Tags

This feature allows Enterprise clients to organize the agents on their team. The Agent Tag can be added to an agent from their profile by the admin.

#### Lead Routing and Re-Routing

When creating a lead routing rule, the Assignment Level can be set to an Agent Tag.

- When Agent Tag is selected, the lead will be assigned to agents in the agent tag with the same hunger. That is, the percentage allocated to individual agents cannot be adjusted.
- If "Under my scope" is selected, then only the agents with the Agent Tag in that user's group and subgroup will be assigned to the leads.
- If "All Company" is selected, then all agents with the Agent Tag in the company company will be assigned to the leads.
- It can also be used in Re-Routing.

#### Lead Pond

Access to a Lead Pond can be given to agents in a Tag

### Single Sign On (SSO)

This update will allow Lofty users to log in with Single Sign On. We support the following platforms:

- OneLogin
- Okta
- Google

Users must have the permission "Manage User/Manage Entire Company" enabled to configure the account's SSO settings.

To enable, the user will access this in the Account Settings:

Detailed instructions for each platform will be provided in our Help Center article . When configured, users can log in to Lofty via SSO or using their email/password. This will be enabled for both web and mobile apps.

### Website Template Library

This is a Whitelist opportunity, for all Lofty users. If interested, please contact our support team, at support@lofty.com .

#### Introduction

This tool can control all of an Enterprise account's agent website theme settings, header and footer settings, favicon, forced registration pop-up style, questionnaire style, etc.

#### Accessing the Template Library

The Website Template Library can be accessed by the Lofty Account owner and any user with the Manage Team Website permission enabled.

#### The Template Library

Lofty has created six (6) default website templates

If a Lofty user wants to use one of these templates as they are, they select it here. There is the same option to preview the template as we currently have.

To create a new template, click "Add New Template". From here, they can create a template from a website that already exists on their account:

Or, they can create a template from one of the Lofty default templates:

There is a limit of five (5) custom templates per Lofty account.

#### Template Editor Tool

The Template Editor is similar to the Website Editor but is more simplified.

- Left side navigation has only Settings and Page Editor
- The top left contains the Template Name, rather than the URL
- The top right does not have options to view/preview the website

Template Settings:

- Above are all the settings that can be set for a template
- Within 'Permissions', when the icon is locked, the settings cannot be edited For example, if 'Favicon' is locked, all existing sites created with this template will be synchronized to use the set Favicon.

### Action Insight

This feature is currently being beta tested. Please contact our support team to try it out!

This provides additional automation to lead communication, by detecting important information in the leads' communications, such as addresses, dates, or attachments. Based on this information, the following quick actions will be available:

1. Email Attachments The attachment can be saved to the lead's profile directly or downloaded to the agent's device
2. Dates in text messages (Email not supported) The agent can click the date to schedule an appointment or create a task The appointment/task editor will detect and auto-populate the date and the lead's information
3. Addresses in Texts (Email not supported) Non-Seller Leads There are four(4) quick actions available: Send listing via text Find a similar house for sale to send via email or text Call listing agent Create a CMA report Seller Leads There are four(4) quick actions available: Search for the address on Google Maps Search for similar pending homes to send via email or text Create a CMA report Create a home report

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com> or by phone at 1 (855) 981-7557.

## Plain Text

Introduction
*Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/agent user). For any questions related to your
Lofty
package or feature availability, please contact
Lofty
Support (
support@lofty.com (mailto:support@chimeinc.com)
).
Please view our training content for these updates in our
Learning Center (https://learningcenter.chime.me/courses/chime-v3-56-new-features-and-updates)
.
Release Date
Wednesday, November 16th, 2022
Summary
Lofty UI Update (#h_01GHMHQAKVVP8QNK6HPAPXK0H3)
Revaluate Billing Optimization (#h_01GHMHQKQPYJN259SY5C116MPG)
Lead Routing Rules - Country Support (#h_01GHMHY5P54WH8R8PBD1A4EXKT)
Lender Lead Routing Options (#h_01GHMJQJHZCC4FPXHFD21DF7WR)
Note Formatting on the Lead Profile and Transactions (#h_01GHMJR6W8TRDZQQ0QQA94862J)
Lead Generation Self-Purchase Budget Update (#id-11/16/22:FeatureReleaseTrainingforChime3.56-LeadGenSelfPurchaseBudgetUpdate)
Social Studio Pro Free Trial (#h_01GHMJRW1BJG5N8BX1KDE18P88)
Social Studio YouTube Settings (#h_01GHMKNPN7EXMZRD5BBARZ0JPD)
Google My Business Integration (#h_01GHMKP2VTAMNDFD1HG8B7P3AD)
Team Organization with Agent Tags (#h_01GHMMGVMM3KN8HJMN7QQ7J9ES)
Single Sign On (SSO) (#h_01GHMMH7QSFAG14VN5C65V6BDH)
Website Template Library (#h_01GHMMHH86F99567GNAZ9XB845)
Action Insight (#h_01GJ0AKNX64KZ81Q0AP17MWN9F)
Lofty UI Update
If you were not included in the UI beta test from Lofty
3.55 (https://help.chime.me/hc/en-us/articles/9900298940699-Feature-Updates-for-Chime-3-55)
or Lofty
3.54 (https://help.chime.me/hc/en-us/articles/9075987149595-Feature-Updates-for-Chime-3-54)
, you will have the updated UI now.
This update also introduces a new feature, Notification Categorization.
Your notifications will now be organized by type. Now, you can easily see exactly what kind of alert you are receiving. This is live in both the web and mobile apps.
Revaluate Billing Optimization
If you use the
Revaluate integration (https://help.chime.me/hc/en-us/articles/360060452272-Revaluate-Integration)
, you will notice a change to how this service is billed. Previously, we would bill for Revaluate at the beginning of the month for the last month's usage. However, if the payment failed, Lofty would still need to pay for Revaluate. Effective today, we will be billed at the beginning of the month for that month's estimated usage.
Please see the billing situations outlined below:
A Lofty user integrates with Revaluate for the first time:
If you are new to Revaluate's score service, you will be instructed to set up your Lead Monitoring Scope. The system will charge for those estimated leads prior to starting the service.
Leads to be charged = Leads that meet the criteria
An active Revaluate user updates their Revaluate Criteria:
When an agent updates the Revaluate Lead Monitor Criteria, it may result in an increase in new leads. If so, the system will prompt the agent to pay for those leads before saving their new criteria.
Leads to be charged = New leads that meet the updated criteria and existing leads that have not been charged for yet
The Number of Leads that meet the Criteria Exceeds 1000
Even if an agent doesn't change the criteria, the number of leads that meet the criteria may increase. The system will automatically charge the agent whenever the leads that meet the criteria reach 1000. The new leads will be synced with Revaluate score after the agent has been successfully charged.
Leads to be charged = 1000 at a time
When an Agent was to Cancel Revaluate Integration
If an agent wants to cancel their Revaluate Integration, the system will charge for any newly added leads that not have been charged. The agent will not be allowed to cancel until the outstanding bill is paid.
Leads to be charged = Any that are outstanding
Lead Routing Rules - Country Support
This feature allows setting a lead routing rule based on the country. This will also update applicable fields within that country. For example, if Canada is selected, 'State' will automatically change to 'Province'.
Lender Lead Routing Options
This feature adds the "New Leads" button for lender lead routing separately. This determines which leads will go through the lender lead routing rule, based on the source.
Note Formatting on the Lead Profile and Transactions
This update supports additional formatting for notes in both the transaction and the lead profile. The following are supported:
Text style
Number list
Bullet list
Link
Insert Horizontal Line
Emoji
Formatted notes via API
Lead Generation Self-Purchase Budget Update
This update expands on the Lead Gen update in Lofty
3.55 (https://help.chime.me/hc/en-us/articles/9900298940699-Feature-Updates-for-Chime-3-55#id-10/25/22:FeatureReleaseTrainingforChime3.55-LeadGenAdsSelf-Purchase)
, which now allows Lofty users to increase their lead gen budget.
Buyer Lead Gen
When a user clicks the budget update button, a pop-up window will allow them to adjust their budget for the channel that they have already purchased. The text box will show their current budget for each channel.
Seller Lead Gen
The process is the same as the Buyer, but with only one text box as seller is promoted as a package.
Social Studio Pro Free Trial
This update provides a free 30-day trial to Social Studio Pro to all Lofty users who have not used this feature before. They will need to input payment information and will be automatically charged if they do not cancel after the free trial period. The free trial trigger will appear on all pro features.
The free trial can also be activated in the Marketplace, and can only be used once. When signing up for the free trial, you will see the dates Social Studio Pro is free to use, when the first payment will be (if not canceled), and the full price of Social Studio Pro. This feature can be canceled at any time.
Social Studio YouTube Settings
This update is currently in beta but will allow Lofty users to upload posts to YouTube, once it is fully released.
The following fields can be filled out, and they only need to be filled out once.
YouTube Video Tags
Category
Privacy
Google My Business Integration
The Google My Business website integration was introduced in Lofty
3.48 (https://help.chime.me/hc/en-us/articles/6071299038619-Feature-Updates-for-Chime-3-48#id-5/19/22:FeatureReleaseTrainingforChime3.48-GoogleMyBusinessIntegration)
, as a way to integrate Google reviews into your Lofty website. Note: This integration is only available to Full Websites, it is not available for Subdomain websites.
This update adds the Google My Business Social Studio integration for all Lofty users.
To connect, click the "Connect" button and follow the prompts to log into your Google account. You are able to link one Google My Business account.
Supported social material:
Text
Text and one image, multiple images are not supported
If you have a full Lofty website (not a subdomain), you have the option to sync your Google My Business authorization between the Social Studio and CMS. If you disconnect Google My Business in one
location, it will disconnect in the other.
Team Organization with Agent Tags
This feature allows Enterprise clients to organize the agents on their team. The Agent Tag can be added to an agent from their profile by the admin.
Lead Routing and Re-Routing
When creating a lead routing rule, the Assignment Level can be set to an Agent Tag.
When Agent Tag is selected, the lead will be assigned to agents in the agent tag with the same hunger. That is, the percentage allocated to individual agents cannot be adjusted.
If "Under my scope" is selected, then only the agents with the Agent Tag in that user's group and subgroup will be assigned to the leads.
If "All Company" is selected, then all agents with the Agent Tag in the company company will be assigned to the leads.
It can also be used in Re-Routing.
Lead Pond
Access to a Lead Pond can be given to agents in a Tag
Single Sign On (SSO)
This update will allow
Lofty
users to log in with Single Sign On. We support the following platforms:
OneLogin
Okta
Google
Users must have the permission "Manage User/Manage Entire Company" enabled to configure the account's SSO settings.
To enable, the user will access this in the Account Settings:
Detailed instructions for each platform will be provided in our
Help Center article (https://help.lofty.com/hc/en-us/articles/10385541670427)
. When configured, users can log in to
Lofty
via SSO or using their email/password. This will be enabled for both web and mobile apps.
Website Template Library
This is a Whitelist opportunity, for all
Lofty
users. If interested, please contact our support team, at
support@lofty.com (mailto:support@chimeinc.com)
.
Introduction
This tool can control all of an Enterprise account's agent website theme settings, header and footer settings, favicon, forced registration pop-up style, questionnaire style, etc.
Accessing the Template Library
The Website Template Library can be accessed by the
Lofty
Account owner and any user with the Manage Team Website permission enabled.
The Template Library
Lofty
has created six (6) default website templates
If a
Lofty
user wants to use one of these templates as they are, they select it here. There is the same option to preview the template as we currently have.
To create a new template, click "Add New Template".
From here, they can create a template from a website that already exists on their account:
Or, they can create a template from one of the
Lofty
default templates:
There is a limit of five (5) custom templates per
Lofty
account.
Template Editor Tool
The Template Editor is similar to the Website Editor but is more simplified.
Left side navigation has only Settings and Page Editor
The top left contains the Template Name, rather than the URL
The top right does not have options to view/preview the website
Template Settings:
Above are all the settings that can be set for a template
Within 'Permissions', when the icon is locked, the settings cannot be edited
For example, if 'Favicon' is locked, all existing sites created with this template will be synchronized to use the set Favicon.
Action Insight
This feature is currently being beta tested. Please contact our support team to try it out!
This provides additional automation to lead communication, by detecting important information in the leads' communications, such as addresses, dates, or attachments. Based on this information, the following quick actions will be available:
Email Attachments
The attachment can be saved to the lead's profile directly or downloaded to the agent's device
Dates in text messages (Email not supported)
The agent can click the date to schedule an appointment or create a task
The appointment/task editor will detect and auto-populate the date and the lead's information
Addresses in Texts (Email not supported)
Non-Seller Leads
There are four(4) quick actions available:
Send listing via text
Find a similar house for sale to send via email or text
Call listing agent
Create a CMA report
Seller Leads
There are four(4) quick actions available:
Search for the address on Google Maps
Search for similar pending homes to send via email or text
Create a CMA report
Create a home report
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com> or by phone at 1 (855) 981-7557.

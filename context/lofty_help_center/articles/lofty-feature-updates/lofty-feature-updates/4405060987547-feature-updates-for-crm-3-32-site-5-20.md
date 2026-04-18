# Feature Updates for CRM 3.32, Site 5.20

- Article ID: `4405060987547`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T03:05:16Z`
- Source: https://help.lofty.com/hc/en-us/articles/4405060987547-Feature-Updates-for-CRM-3-32-Site-5-20

## Body

## Introduction

*Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/agent user). For any questions related to your Lofty package or feature availability, please contact Lofty Support ( support@lofty.com ).

## Release Date

Monday, August 16, 2021.

## Summary

- CRM 3.32 Dotloop Integration Improvements Design Center Resource Filters AI Assistant: Auto Property Alert Script Support Notifications Optimization
- Site 5.20 Code Block Blog Editor: WordPress Transfer Option Landing Pages: Available to All Users

## CRM 3.32

### Dotloop Integration Improvements

The existing integration with Dotloop for transaction management has been improved to allow for a transaction to be sent to a specific Dotloop profile--an action that was not supported prior to this update.

To learn more about the Dotloop integration, please see: Dotloop Integration .

### Design Center Resource Filters

In order to make Design Center templates more accessible, we have implemented two separate levels of categorization accessible via tags: (1) Marketing Theme and (2) Material Type. Multiple tags can be selected to find matching templates.

Learn More: Design Center .

### AI Assistant: Auto Property Alert Script Support

Many leads in your database are likely missing the basic "Search Criteria" location field that is required for the system to be able to send out auto property alert emails. With this update, additional triggers and scripts have been added for the AI Assistant to help obtain location information for existing leads.

#### Triggers

- Lead registration time (when they entered the CRM or as recorded manually via CSV import) is between 30-180 days
- The "Location" field in the lead's Search Criteria is empty

#### New Message Cadence

An initial message will be sent by the AI Assistant to try to capture the location information. If the lead does not respond then three additional reminders will be sent. The schedule is as follows:

1. 7 days after the initial message, at 9:35 AM
2. 10 days after the previous message, at 9:35 AM
3. 10 days after the previous message, at 10:35 AM

All additional triggers for existing leads have been added to the AI Assistant settings in the CRM. If you do not want this option to apply to your existing leads that might match the triggering criteria, you can turn off the checkbox for having the AI Assistant work with existing leads.

Learn More: AI Assistant .

### Notifications Optimization

Two main changes have been made to how notification settings are managed in Lofty .

#### (1) Notifications Settings Location and Organization

The first notable change is that the access to edit notifications is no longer found nested under Preferences . Notification settings are now found under Settings > Notifications . This will make them more accessible to you.

Old

New

Also, notifications are now divided into (1) General and (2) Opportunities :

#### (2) Notification Improvements

The following have been added:

- Separate opportunity notification settings for Team/Private Leads & Pond Leads
- More granular opportunity notifications so that you can pick and choose which ones you would like to receive or not

Now would be a great time to review your notifications to make sure that you have all your notifications configured exactly how you want them to be!

Learn More: Lofty Notifications .

## Site 5.20

### Code Block

A new block has been added that you can use to embed HTML code (no other code is supported) directly where you would like in your website. The option to embed HTML code was technically already available via the Content Block > Rich Text Editor, but this new block makes the option to add code more accessible.

### Blog Editor: WordPress Transfer Option

If you are currently using the WordPress blog editor within Lofty to produce blog content, you will see a pop-up appear giving you the ability to trigger the migration of all of your blog posts and categories from the WordPress Editor to the Lofty Blog Editor instead. If you have RSS feeds configured, those will not transfer during this process and will have to be set up manually. The migration should be complete in a matter of seconds, though that will depend on the number and complexity of the blog posts and categories. You will not be able to access the blog editor during the transfer process.

Learn More: Blog Page .

### Landing Pages: Available to All Users

With this update, all users (on an IDX package) will have the ability to add up to 10 landing pages even if they do not have their own Agent Subdomain or Agent Website. Prior to this update, agent users were unable to create landing pages unless they had their own Agent Subdomain or Agent Website. With this update, they can use the parent website (typically the Team Website) to create landing pages via the Campaigns page.

A new permission has also been added in case the Team Owner/Admin would like to keep agent users from building landing pages using the team website.

Learn More: Landing Pages .

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
*Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/agent user). For any questions related to your Lofty package or feature availability, please contact Lofty Support (
support@lofty.com (mailto:support@chimeinc.com)
).
Release Date
Monday, August 16, 2021.
Summary
CRM 3.32 (#h_01FCVXEHP3N018WW9TQ71THV8R)
Dotloop Integration Improvements (#h_01FD0XK9HRNX0315E4SJG1K12A)
Design Center Resource Filters (#h_01FD0Z9FDX9GYPRFZ262D69E5G)
AI Assistant: Auto Property Alert Script Support (#id-8/12/21:FeatureReleaseTrainingforCRM3.32,Site5.20,Finance1.88-AIAssistant:AutoPropertyAlertScriptSupport)
Notifications Optimization (#id-8/12/21:FeatureReleaseTrainingforCRM3.32,Site5.20,Finance1.88-NotificationsOptimization)
Site 5.20 (#h_01FCVXEN5JHD0K9VSS4ZN9CK58)
Code Block (#h_01FD0ZA6G817JQJ34E16EQPC0V)
Blog Editor: WordPress Transfer Option (#id-8/12/21:FeatureReleaseTrainingforCRM3.32,Site5.20,Finance1.88-BlogEditor:WordPressTransferOption)
Landing Pages: Available to All Users (#id-8/12/21:FeatureReleaseTrainingforCRM3.32,Site5.20,Finance1.88-LandingPages:AvailabletoAllUsers)
CRM 3.32
Dotloop Integration Improvements
The existing integration with Dotloop for transaction management has been improved to allow for a transaction to be sent to a specific Dotloop profile--an action that was not supported prior to this update.
To learn more about the Dotloop integration, please see:
Dotloop Integration (https://help.chime.me/hc/en-us/articles/115003826571-How-to-Integrate-Chime-with-Dotloop)
.
Design Center Resource Filters
In order to make Design Center templates more accessible, we have implemented two separate levels of categorization accessible via tags: (1) Marketing Theme and (2) Material Type. Multiple tags can be selected to find matching templates.
Learn More:
Design Center (https://help.chime.me/hc/en-us/articles/360055290711)
.
AI Assistant: Auto Property Alert Script Support
Many leads in your database are likely missing the basic "Search Criteria"
location
field that is required for the system to be able to send out auto property alert emails. With this update, additional triggers and scripts have been added for the AI Assistant to help obtain location information for existing leads.
Triggers
Lead registration time (when they entered the CRM or as recorded manually via CSV import) is between 30-180 days
The "Location" field in the lead's Search Criteria is empty
New Message Cadence
An initial message will be sent by the AI Assistant to try to capture the location information. If the lead does not respond then
three additional reminders
will be sent. The schedule is as follows:
7 days after the initial message, at 9:35 AM
10 days after the previous message, at 9:35 AM
10 days after the previous message, at 10:35 AM
All additional triggers for existing leads have been added to the AI Assistant settings in the CRM. If you do not want this option to apply to your existing leads that might match the triggering criteria, you can turn off the checkbox for having the AI Assistant work with existing leads.
Learn More:
AI Assistant (https://help.chime.me/hc/en-us/sections/360007651672-AI-Assistant)
.
Notifications Optimization
Two main changes have been made to how notification settings are managed in
Lofty
.
(1) Notifications Settings Location and Organization
The first notable change is that the access to edit notifications is no longer found nested under
Preferences
. Notification settings are now found under
Settings
>
Notifications
. This will make them more accessible to you.
Old
New
Also,
notifications are now divided into (1)
General
and (2)
Opportunities
:
(2) Notification Improvements
The following have been added:
Separate opportunity notification settings for Team/Private Leads & Pond Leads
More granular opportunity notifications so that you can pick and choose which ones you would like to receive or not
Now would be a great time to review your notifications to make sure that you have all your notifications configured exactly how you want them to be!
Learn More:
Lofty
Notifications (https://help.chime.me/hc/en-us/articles/360016101752-Chime-Notification)
.
Site 5.20
Code Block
A new block has been added that you can use to embed HTML code (no other code is supported) directly where you would like in your website. The option to embed HTML code was technically already available via the Content Block > Rich Text Editor, but this new block makes the option to add code more accessible.
Blog Editor: WordPress Transfer Option
If you are currently using the WordPress blog editor within
Lofty
to produce blog content, you will see a pop-up appear giving you the ability to trigger the migration of all of your blog posts and categories from the WordPress Editor to the
Lofty
Blog Editor instead.
If you have RSS feeds configured, those will
not
transfer during this process and will have to be set up manually. The migration should be complete in a matter of seconds, though that will depend on the number and complexity of the blog posts and categories. You will
not
be able
to access the blog editor during the transfer process.
Learn More:
Blog Page (https://help.chime.me/hc/en-us/articles/360039336851)
.
Landing Pages: Available to All Users
With this update, all users (on an IDX package) will have the ability to add up to 10 landing pages even if they do not have their own Agent Subdomain or Agent Website. Prior to this update, agent users were unable to create landing pages unless they had their own Agent Subdomain or Agent Website. With this update, they can use the parent website (typically the Team Website) to create landing pages via the
Campaigns
page.
A new permission has also been added in case the Team Owner/Admin would like to keep agent users from building landing pages using the team website.
Learn More:
Landing Pages (https://help.chime.me/hc/en-us/articles/360038228552)
.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

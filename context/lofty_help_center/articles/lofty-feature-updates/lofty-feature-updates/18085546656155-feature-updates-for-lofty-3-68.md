# Feature Updates for Lofty 3.68

- Article ID: `18085546656155`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T01:50:54Z`
- Source: https://help.lofty.com/hc/en-us/articles/18085546656155-Feature-Updates-for-Lofty-3-68

## Body

## Introduction

I mportant: Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/standard user). These features are subject to change at any time. Please see our Learning Center course on this update HERE .

Having trouble accessing the course? This article will show you how to access the Lofty Learning Center: How to Access the Lofty Learning Center

## Release Date

Monday, August 28, 2023

## Summary

- Buyer Tour Edit Optimization
- Showing Request Optimization
- Appointment Time Zone Update
- Option to Require Login by SSO
- Transaction Custom Field: Multi-Select Option
- Commission Disbursement Authorization Generation CDA Form Components
- Transaction Based Smart Plan Steps
- New Smart Plan Notification Action
- New AI Writing Assistant Scenarios
- AI Assistant Open House Conversations
- Closely App Notification Center
- Closely App Download Invitation Closely App Filter
- Website Footer Custom Content

## Buyer Tour Edit Optimization

The Buyer Tour can now be edited. Previously, if a buyer tour required modifications, it had to be deleted and rescheduled.

When a buyer tour has been scheduled with a lead, the tour will be available in the Appointments section of the lead profile.

Click the '...' menu to see the Buyer Tour Options.

Click E dit to change the Buyer Tour. This will open the tour and you have the ability to rearrange the tour order, delete the listing from the tour, and add another listing to the tour.

## Showing Request Optimization

To access the Showings Dashboard navigate to Calendar → Task View → My Showings → Showings . Showings that leads have requested will be located in the Showing Request column.

Clicking on the Showing Request will open a side panel with actions that can be taken:

- Accept the Showing
- Call Lead (if the lead has a valid phone number, opted in to calls)
- Text Lead (if the lead has a valid phone number, opted in to texts)
- Email Lead (if the lead has a valid email address, opted in to emails)

The showing can also be accepted on the lead's profile:

When accepting the showing, the first step is to select the date and time. This is optimized to match the lead's requested showing date:

The next step is to contact the Listing Agent to acquire the access code. Once acquired, enter in the Access Instructions box to confirm the showing:

Once the showing is approved, it will move to the Approved column.

If the requested showing listing has been Sold, it will be marked with a red Sold banner and the option to accept the showing request will be removed. If the showing was approved, it will automatically be cancelled and all participants will be notified via email.

Scheduled showings will appear on the Lofty calendar, as well as synchronize to integrated third-party calendars.

## Appointment Time Zone Update

When adding a new appointment, the Time Zone will automatically sync to the appointment creator's time zone. With this update, the appointment creator has the option to change the Time Zone:

When Appointment participants view the Appointment, the time of the Appointment will be automatically converted according to the viewer's system time zone. This is also available in the mobile app:

When setting the appointment time, we have changed the UI from 3 independent Drop-downs to one input box. This makes it easier for the user to set the appointment time for a round number. The time can also be manually adjusted.

Before | After

## Option to Require Login by SSO

This feature is only available to Lofty Enterprise and Multi-Team accounts.

This update provides a setting that would require all Lofty users to sign into their Lofty account, both website and mobile app, using Single Sign On (SSO). This will protect the account, as the only option to log in will be via SSO, and not via the email address and password.

By default, if you have already set up SSO for your Lofty account, the Login Method will be set to Any Method.

The permission to enable SSO is called SSO Setting . You must have this permission enabled in order to enable or disable the SSO requirement. Again, by default, the SSO requirement will be disabled.

## Transaction Custom Field: Multi-Select Option

This update provides a new Transaction Custom field. Navigate to Settings → Transactions → Transaction Forms → Transaction Custom Field Management → Custom Fields → + Add New.

The new transaction custom field is an option to provide a list, where multiple items can be selected. The single-select option is still available and has been changed from Drop-down to Single-Select.

Select Multi-Select as the data type:

Add as many options as are needed (maximum of 20 options):

Click the edit icon to edit the custom transaction field. New options can be added or the current options can be deleted or re-ordered:

When completing this field on a transaction, tick the boxes next to each option that must be selected:

## Commission Disbursement Authorization Generation

CDA stands for "Commission Disbursement Authorization". It is used to confirm the commission payment arrangements of individuals involved in a transaction, typically signed by the buyer, seller, and agent/brokerage.

You will be able to generate a CDA for any transaction that you have access to. To create a CDA, navigate to the transaction and click the ' ... ' icon in the upper right corner and select Generate CDA.

- Important: The transaction must have a close price and GCI set before the CDA can be generated.

The CDA can also be generated by navigating to the transaction, clicking Accounting , then clicking Generate CDA.

### CDA Form Components

There are 5 sections in the CDA form.

 | 1. Form Name: The default Name is "Commission Disbursement Authorization and Current Date"
2. Transaction Details This section displays the Property Address, Property Type, Closed Date, Sales Price, Close Price, and GCI.
3. Contacts: All transaction roles involved in the transaction are available to be selected. The " Escrow / Title" transaction role will be included by default, whether is has a contact or not, because it is typically a contact in the CDA.
4. Payouts This section displays the commission details.
5. Instruction: This is an optional field that may include additional instructions for the CDA.

Once the CDA is complete, click Next to preview the document.

If anything needs to be changed, click Cancel to go back to the CDA editor. If the CDA is complete, click Next to save the CDA.

The CDA will automatically be saved to the Transaction. Here, you have the option to email the CDA to the contacts on the transaction. The email will attach a pdf copy of the CDA, but will not contain any other content. The Subject Line and Email Body will need to be completed by the user sending the email.

The CDA will be saved to the transaction, in the Document section.

## Transaction-Based Smart Plan Steps

We have a new option for recurring Smart Plans, related to Transaction Dates.

The standard transaction dates and any custom transaction date fields will be available.

To select the date to base the Smart Plan on, click the drop-down and select the date, then click Start :

Here, you can select a one-time reminder on a specific date, like a reminder to the buyer when the home inspection is occurring, or a yearly reminder on the anniversary of the closed date.

## New Smart Plan Notification Action

This update also introduces a new action, which is available for both Recurring and Standard Smart Plans: Notifications

This action will send an email notification to the selected party. This can be the agent, assistant, or other role that is assigned to the lead, or an email address may be provided to receive the notification. This could be helpful if someone who is not a user of the Lofty account needs to be notified when this step in the Smart Plan occurs.

Multiple roles and email addresses can be provided. The email subject line and body will be blank.

For recurring Transaction based date Smart Plans, additional roles will be available to select, like Seller, Buyer, Renter, Listing Agent, Buyer's Agent, Utilities, Home Improvement, Home Warranty, Escrow/Title, Home Insurance, Home Inspection, and Agent:

## New AI Writing Assistant Scenarios

This update adds two more options for the AI Writing Assistant to help create content for emails and texts:

- "Property Needs" The AI Writing Assistant will help write some content to ask what kind of properties the lead is looking for.
- "Pre-Approval" The AI Writing Assistant will help write some content to ask whether the lead has gotten loan pre-approval and if the lead needs a lender.

## AI Assistant Open House Conversations

This update adds a special conversation flow for the AI Assistant for leads who register from the Open House Form.

- The welcome script: Hi #lead_first_name, It was great seeing you at the open house at #openhouse_address. Hope you had a wonderful time! Were you happy with this property? Or, would you like to talk more about your current needs?
- When the lead replies with No: No problem. Can you tell me what you are looking for so that I can send you some homes to look at during your free time? Any other locations you are interested in?
- When the lead replies with Yes: Happy to hear that! Do you want to talk more about your needs? Would a quick 15-minute phone call be helpful for you?

## Closely App Notification Center

We have added a notification center in the Closely app to send leads push notifications. This is convenient for leads to view updated listings, and may also improve lead activity and the Closely app retention rate. Please note the following:

1. This update currently only supports sending property alerts. It does not support sending market snapshot notifications.
2. The listing data for the alert push is exactly the same as the alert email. When sending an email, a push notification will also be sent to leads who use Closely.

The first listing information from the property alert is used for the push notification content. Leads can click on the push notification to open the Closely app to view other listings.

All push notifications can be viewed within Closely, in the Chat list.

T his is the notification detail page. W hen leads click on the push notification and open Closely, this page will open and they can see the entire message history of all alert notifications.

If any saved search has listing updates, there will be a red tag notification in the Closely app profile page.

## Closely App Download Invitation

This update allows you to send a lead a text message, inviting them to download the Closely app. The invitation can be sent from the lead's profile by clicking the ' ... ' menu and selecting Closely App Invitation .

This option is only available if:

1. The lead has a valid phone number
2. The lead has opted in to receiving text messages
3. The lead has not already downloaded the Closely app

A sample text has already been written and includes the app download link. This text can be edited prior to sending.

The Closely invitation can also be sent in a mass text to all leads that meet the criteria.

This update also adds the Closely app download link to all Property Alert and Home Report emails.

### Closely App Filter

This update also adds an Advanced Filter , so Lofty users can filter by leads who have or have not logged in to the Closely app.

## Website Footer Custom Content

This update allows the option to add custom content to a Lofty website footer. This is available on any editable Lofty website.

The content added here will sync to any subdomains that are created off of this Lofty website.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM

## Plain Text

Introduction
I
mportant:
Please note that the availability of certain features outlined in these release notes will vary depending on the package and add-ons that you have purchased as well as the account type that you have (admin/standard user). These features are subject to change at any time.
Please see our Learning Center course on this update
HERE (https://learningcenter.chime.me/courses/chime-v3-68)
. (https://learningcenter.chime.me/courses/chime-v3-68)
Having trouble accessing the course? This article will show you how to access the Lofty Learning Center:
How to Access the Lofty Learning Center (https://help.chime.me/hc/en-us/articles/13857197513115)
Release Date
Monday, August 28, 2023
Summary
Buyer Tour Edit Optimization (#01H8MBW7MR8605HH0DZJ18DB5E)
Showing Request Optimization (#01H8MCATAFC5GG0FCJW3J2KCM3)
Appointment Time Zone Update (#01H8MF26GA6KVKPEFK4N4FHWKC)
Option to Require Login by SSO (#01H8MFBY44FK1AY6YWX6F4SKXN)
Transaction Custom Field: Multi-Select Option (#01H8MFRSMFFA4Q2ZV43VQYERBH)
Commission Disbursement Authorization Generation (#01H8MG9BGQJJ2WFJHXDEVRT9SF)
CDA Form Components (#01H8MGX5FYWQM9J4HZNQ6M4D0Q)
Transaction Based Smart Plan Steps (#01H8MH9JRJ83TH54PN9NZWEEND)
New Smart Plan Notification Action (#id-8/28/2023:FeatureReleaseTrainingforChime3.68-NewSmartPlanNotificationAction)
New AI Writing Assistant Scenarios (#01H8MJERPSM3M6SQ6T883G3D1P)
AI Assistant Open House Conversations (#id-8/28/2023:FeatureReleaseTrainingforChime3.68-AIAssistantOpenHouseConversations)
Closely App Notification Center (#01H8MJM3C4EXWMX3BK281GCCXW)
Closely App Download Invitation (#id-8/28/2023:FeatureReleaseTrainingforChime3.68-CloselyAppDownloadInvitation)
Closely App Filter (#01H8MK3HY3G3KXJGPH5S00CS0E)
Website Footer Custom Content (#id-8/28/2023:FeatureReleaseTrainingforChime3.68-WebsiteFooterCustomContent)
Buyer Tour Edit Optimization
The Buyer Tour can now be edited. Previously, if a buyer tour required modifications, it had to be deleted and rescheduled.
When a buyer tour has been scheduled with a lead, the tour will be available in the Appointments section of the lead profile.
Click the
'...'
menu to see the Buyer Tour Options.
Click
E
dit
to change the Buyer Tour. This will open the tour and you have the ability to rearrange the tour order, delete the listing from the tour, and add another listing to the tour.
Showing Request Optimization
To access the
Showings Dashboard
navigate to
Calendar → Task View → My Showings → Showings
. Showings that leads have requested will be located in the Showing Request column.
Clicking on the Showing Request will open a side panel with actions that can be taken:
Accept the Showing
Call Lead (if the lead has a valid phone number, opted in to calls)
Text Lead (if the lead has a valid phone number, opted in to texts)
Email Lead (if the lead has a valid email address, opted in to emails)
The showing can also be accepted on the lead's profile:
When accepting the showing, the first step is to select the date and time. This is optimized to match the lead's requested showing date:
The next step is to contact the Listing Agent to acquire the access code. Once acquired, enter in the Access Instructions box to confirm the showing:
Once the showing is approved, it will move to the
Approved
column.
If the requested showing listing has been Sold, it will be marked with a red Sold banner and the option to accept the showing request will be removed. If the showing was approved, it will automatically be cancelled and all participants will be notified via email.
Scheduled showings will appear on the
Lofty
calendar, as well as synchronize to integrated third-party calendars.
Appointment Time Zone Update
When adding a new appointment, the Time Zone will automatically sync to the appointment creator's time zone. With this update, the appointment creator has the option to change the Time Zone:
When Appointment participants view the Appointment, the time of the Appointment will be automatically converted according to the viewer's system time zone. This is also available in the mobile app:
When setting the appointment time, we have changed the UI from 3 independent Drop-downs to one input box. This makes it easier for the user to set the appointment time for a round number. The time can also be manually adjusted.
Before
After
Option to Require Login by SSO
This feature is only available to
Lofty
Enterprise and Multi-Team accounts.
This update provides a setting that would require all
Lofty
users to sign into their
Lofty
account, both website and mobile app, using Single Sign On (SSO). This will protect the account, as the only option to log in will be via SSO, and not via the email address and password.
By default, if you have already set up SSO for your
Lofty
account, the Login Method will be set to Any Method.
The permission to enable SSO is called
SSO Setting
. You must have this permission enabled in order to enable or disable the SSO requirement. Again, by default, the SSO requirement will be disabled.
Transaction Custom Field: Multi-Select Option
This update provides a new Transaction Custom field. Navigate to
Settings → Transactions → Transaction Forms → Transaction Custom Field Management → Custom Fields → + Add New.
The new transaction custom field is an option to provide a list, where multiple items can be selected. The single-select option is still available and has been changed from
Drop-down
to
Single-Select.
Select
Multi-Select
as the data type:
Add as many options as are needed (maximum of 20 options):
Click the edit icon to edit the custom transaction field. New options can be added or the current options can be deleted or re-ordered:
When completing this field on a transaction, tick the boxes next to each option that must be selected:
Commission Disbursement Authorization Generation
CDA stands for "Commission Disbursement Authorization". It is used to confirm the commission payment arrangements of individuals involved in a transaction, typically signed by the buyer, seller, and agent/brokerage.
You will be able to generate a CDA for any transaction that you have access to.
To create a CDA, navigate to the transaction and click the '
...
' icon in the upper right corner and select
Generate CDA.
Important:
The transaction must have a close price and GCI set before the CDA can be generated.
The CDA can also be generated by navigating to the transaction, clicking
Accounting
, then clicking
Generate CDA.
CDA Form Components
There are 5 sections in the CDA form.
1. Form Name:
The default Name is "Commission Disbursement Authorization and Current Date"
2. Transaction Details
This section displays the Property Address, Property Type, Closed Date, Sales Price, Close Price, and GCI.
3. Contacts:
All transaction roles involved in the transaction are available to be selected.
The "
Escrow / Title" transaction role will be included by default, whether is has a contact or not, because it is typically a contact in the CDA.
4. Payouts
This section displays the commission details.
5. Instruction:
This is an optional field that may include additional instructions for the CDA.
Once the CDA is complete, click
Next
to preview the document.
If anything needs to be changed, click
Cancel
to go back to the CDA editor. If the CDA is complete, click
Next
to save the CDA.
The CDA will automatically be saved to the Transaction. Here, you have the option to email the CDA to the contacts on the transaction. The email will attach a pdf copy of the CDA, but will not contain any other content. The Subject Line and Email Body will need to be completed by the user sending the email.
The CDA will be saved to the transaction, in the
Document
section.
Transaction-Based Smart Plan Steps
We have a new option for recurring Smart Plans, related to Transaction Dates.
The standard transaction dates and any custom transaction date fields will be available.
To select the date to base the Smart Plan on, click the drop-down and select the date, then click
Start
:
Here, you can select a one-time reminder on a specific date, like a reminder to the buyer when the home inspection is occurring, or a yearly reminder on the anniversary of the closed date.
New Smart Plan Notification Action
This update also introduces a new action, which is available for both Recurring and Standard Smart Plans:
Notifications
This action will send an email notification to the selected party. This can be the agent, assistant, or other role that is assigned to the lead, or an email address may be provided to receive the notification. This could be helpful if someone who is not a user of the
Lofty
account needs to be notified when this step in the Smart Plan occurs.
Multiple roles and email addresses can be provided. The email subject line and body will be blank.
For recurring Transaction based date Smart Plans, additional roles will be available to select, like Seller, Buyer, Renter, Listing Agent, Buyer's Agent, Utilities, Home Improvement, Home Warranty, Escrow/Title, Home Insurance, Home Inspection, and Agent:
New AI Writing Assistant Scenarios
This update adds two more options for the AI Writing Assistant to help create content for emails and texts:
"Property Needs"
The AI Writing Assistant will help write some content to ask what kind of properties the lead is looking for.
"Pre-Approval"
The AI Writing Assistant will help write some content to ask whether the lead has gotten loan pre-approval and if the lead needs a lender.
AI Assistant Open House Conversations
This update adds a special conversation flow for the AI Assistant for leads who register from the Open House Form.
The welcome script:
Hi #lead_first_name, It was great seeing you at the open house at #openhouse_address. Hope you had a wonderful time! Were you happy with this property? Or, would you like to talk more about your current needs?
When the lead replies with No:
No problem. Can you tell me what you are looking for so that I can send you some homes to look at during your free time? Any other locations you are interested in?
When the lead replies with Yes:
Happy to hear that! Do you want to talk more about your needs? Would a quick 15-minute phone call be helpful for you?
Closely App Notification Center
We have added a notification center in the Closely app to send leads push notifications. This is convenient for leads to view updated listings, and may also improve lead activity and the Closely app retention rate. Please note the following:
This update currently only supports sending property alerts. It does not support sending market snapshot notifications.
The listing data for the alert push is exactly the same as the alert email. When sending an email, a push notification will also be sent to leads who use Closely.
The first listing information from the property alert is used for the push notification content.
Leads can click on the push notification to open the Closely app to view other listings.
All push notifications can be viewed within Closely, in the Chat list.
T
his is the notification detail page.
W
hen leads click on the push notification and open Closely, this page will open and they can see the entire message history of all alert notifications.
If any saved search has listing updates, there will be a red tag notification in the Closely app profile page.
Closely App Download Invitation
This update allows you to send a lead a text message, inviting them to download the Closely app. The invitation can be sent from the lead's profile by clicking the '
...
' menu and selecting
Closely App Invitation
.
This option is only available if:
The lead has a valid phone number
The lead has opted in to receiving text messages
The lead has not already downloaded the Closely app
A sample text has already been written and includes the app download link. This text can be edited prior to sending.
The Closely invitation can also be sent in a mass text to all leads that meet the criteria.
This update also adds the Closely app download link to all Property Alert and Home Report emails.
Closely App Filter
This update also adds an
Advanced Filter
, so Lofty users can filter by leads who have or have not logged in to the Closely app.
Website Footer Custom Content
This update allows the option to add custom content to a
Lofty
website footer. This is available on any editable
Lofty
website.
The content added here will sync to any subdomains that are created off of this Lofty website.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM

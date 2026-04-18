# Getting Started with the Lofty Developer Platform

- Article ID: `4405826620571`
- Category: `Developers`
- Section: `Developers`
- Updated: `2026-03-14T00:13:08Z`
- Source: https://help.lofty.com/hc/en-us/articles/4405826620571-Getting-Started-with-the-Lofty-Developer-Platform

## Body

## Introduction

The Lofty Developer Platform allows third-party vendors and partners to build integrations with Lofty using OAuth 2.0. This article walks through the full setup process, from creating an account to getting your application approved.

Once your application is approved, see Lofty OAuth 2.0 API Reference for implementation details.

## Summary

- Step 1: Create a Developer Account
- Step 2: Complete Vendor Qualification
- Step 3: Register an Application Information Tab Permissions Tab
- Step 4: Wait for Application Review Review Process/Results Under Review Rejected Approved

### Step 1: Create a Developer Account

1. Go to the Lofty Developer Platform at https://api.lofty.com/vendor/frontend/static/index.html#/login
2. Click Sign Up Enter your name, email address, phone number, and a password
3. A verification code will be sent to your email (valid for 10 minutes).
4. Enter the code to complete signup. After signing up, you will be taken to the My Qualification page.

### Step 2: Complete Vendor Qualification

Before you can register an application, you must complete your vendor qualification. Navigate to the My Qualification tab in the left sidebar and fill out the Account Info form:

- Name of Company
- Company's Website
- Company's Privacy Policy Link
- Full Name of Person Completing Assessment
- Title of Person Completing Assessment
- Email Address
- Phone Number

Click Save when finished.

The Save button will gray out and a yellow banner will appear confirming your submission is under review.

After submitting, you can email t2support@lofty.com to let the team know your qualification is ready for review. Please include a screenshot of your Account Info so the team can quickly find your submission.

Your qualification will be reviewed by the Lofty team. You will not be able to register an application until your qualification is approved. You will receive an email when a decision has been made.

Once approved, the My Authorization tab will become active.

### Step 3: Register an Application

After your vendor qualification is approved, go to the My Authorization tab and click + Add More Authorizations.

A form will appear with two tabs: Information and Permissions.

#### Information Tab

- App Name
- Website
- Authorized Redirect URL -- once the application is approved, Lofty will call the URL listed here
- Description -- describe what your integration does
- App Logo -- must be less than 3MB
- Primary Contact Name
- Primary Email
- Primary Phone Number
- Display Connection Option in Lofty -- controls whether your app appears as a connection option for Lofty users
- Are you the team creator? -- select Yes or No
- Team Creator Account (Email) -- the email address of a Lofty account owner that will be linked to your application for testing

Note :

- To begin building your integration, you are required to link a valid Lofty account to your application. This is specified through the Team Creator Account field, which must correspond to the Lofty account you will use to test authentication, token handling, and data synchronization. The account must belong to a top-level Team Owner. Submissions using email addresses associated with secondary users (e.g., team members or admins) will fail. We recommend using a live Lofty account from a mutual customer sponsoring the integration. This ensures the integration is tested in a real-world environment with appropriate context. If you are unable to coordinate access through a mutual customer, please reach out to discuss testing options. While not guaranteed, we may be able to support limited alternatives on a case-by-case basis.
- You can repeat this process multiple times if you have multiple applications that you are connecting with Lofty.

#### Permissions Tab

Only request the permissions your application actually needs. Requesting permissions that do not align with your application's stated purpose may result in your application being rejected.

Click Submit when both tabs are complete.

### Step 4: Wait for Application Review

You can monitor your application status in the My Authorization tab.

The table scrolls horizontally. Status and Operation are pinned/static columns on the right, while App, Website, Authorized Redirect URL, Client ID, Client Secret, Description, Primary Contact Info, and API columns scroll

You can update your application while it is under review. However, if you update an application after it has been approved, it will trigger a new review.

You can register multiple applications if you need separate environments (for example, sandbox, staging, and production). Each environment requires its own application with its own callback URL.

If you need to change application details after submission, contact your internal Lofty representative or email t2support@lofty.com .

#### Review Process/Results

After submitting your application, you will be able to monitor the status via the Lofty Developer Platform. Simply log in access your authorization dashboard and review the Status column at the far right.

##### Under Review

##### Rejected

If rejected, the primary contact submitted with the application will receive an email with more details on why it was rejected. You can then click the Resubmit button to edit the information provided before submitting again.

##### Approved

If approved, you will see the client_id and client_secret in your account. You will need this information for the next step .

client_id
client_secret
Once your application is approved and you have your Client ID and Client Secret, you are ready to implement OAuth 2.0. See Lofty OAuth 2.0 API Reference for the full implementation guide.

## Questions?

If you have any questions regarding this topic or any others, please contact our Support Team via email at support@lofty.com, by phone at 1 (855) 981-7557, or by chat through your Lofty CRM.

Related terms: Open API, Developer Platform, OAuth, API, SOC, Third party assessment

## Plain Text

Introduction
The Lofty Developer Platform allows third-party vendors and partners to build integrations with Lofty using OAuth 2.0. This article walks through the full setup process, from creating an account to getting your application approved.
Once your application is approved, see
Lofty OAuth 2.0 API Reference (https://help.lofty.com/hc/en-us/articles/47801571926811)
for implementation details.
Summary
Step 1: Create a Developer Account (#h_01FE288990M81MHFPDBVGE2FSR)
Step 2: Complete Vendor Qualification (#h_01KKMRQSSZX6XYSV6DTDQ1XZW9)
Step 3: Register an Application (#h_01KKMRZD6A0YEZFCNGY7W0V385)
Information Tab (#h_01KKMS5G5C2AAVCY6PVB11G60C)
Permissions Tab (#h_01KKMS5Q3276X24CRNJ42X8QKJ)
Step 4: Wait for Application Review (#h_01KKMS7YFBVZ38JBSARMWD0AEH)
Review Process/Results (#h_01FE29NMBH4YE2X7S0VAAERDP0)
Under Review (#h_01HBH01MASY1N6WKGHTMMZ50CX)
Rejected (#h_01HBH01MAS1GCFNHWW2HTHK2XG)
Approved (#h_01HBH01MAS1AQTD4JQY081FQMB)
Step 1: Create a Developer Account
Go to the Lofty Developer Platform at
https://api.lofty.com/vendor/frontend/static/index.html#/login
Click Sign Up Enter your name, email address, phone number, and a password
A verification code will be sent to your email (valid for 10 minutes).
Enter the code to complete signup. After signing up, you will be taken to the My Qualification page.
Step 2: Complete Vendor Qualification
Before you can register an application, you must complete your vendor qualification. Navigate to the My Qualification tab in the left sidebar and fill out the Account Info form:
Name of Company
Company's Website
Company's Privacy Policy Link
Full Name of Person Completing Assessment
Title of Person Completing Assessment
Email Address
Phone Number
Click Save when finished.
The Save button will gray out and a yellow banner will appear confirming your submission is under review.
After submitting, you can email
t2support@lofty.com (mailto:t2support@lofty.com)
to let the team know your qualification is ready for review.
Please include a screenshot of your Account Info so the team can quickly find your submission.
Your qualification will be reviewed by the Lofty team. You will not be able to register an application until your qualification is approved. You will receive an email when a decision has been made.
Once approved, the My Authorization tab will become active.
Step 3: Register an Application
After your vendor qualification is approved, go to the My Authorization tab and click + Add More Authorizations.
A form will appear with two tabs: Information and Permissions.
Information Tab
App Name
Website
Authorized Redirect URL -- once the application is approved, Lofty will call the URL listed here
Description -- describe what your integration does
App Logo -- must be less than 3MB
Primary Contact Name
Primary Email
Primary Phone Number
Display Connection Option in Lofty -- controls whether your app appears as a connection option for Lofty users
Are you the team creator? -- select Yes or No
Team Creator Account (Email) -- the email address of a Lofty account owner that will be linked to your application for testing
Note
:
To begin building your integration, you are required to link a valid Lofty account to your application. This is specified through the
Team Creator Account
field, which must correspond to the Lofty account you will use to test authentication, token handling, and data synchronization.
The account must belong to a top-level Team Owner.
Submissions using email addresses associated with secondary users (e.g., team members or admins) will fail.
We recommend using a live Lofty account from a mutual customer sponsoring the integration.
This ensures the integration is tested in a real-world environment with appropriate context.
If you are unable to coordinate access through a mutual customer,
please reach out to discuss testing options. While not guaranteed, we may be able to support limited alternatives on a case-by-case basis.
You can repeat this process multiple times if you have multiple applications that you are connecting with Lofty.
Permissions Tab
Only request the permissions your application actually needs. Requesting permissions that do not align with your application's stated purpose may result in your application being rejected.
Click Submit when both tabs are complete.
Step 4: Wait for Application Review
You can monitor your application status in the My Authorization tab.
The table scrolls horizontally. Status and Operation are pinned/static columns on the right, while App, Website, Authorized Redirect URL, Client ID, Client Secret, Description, Primary Contact Info, and API columns scroll
You can update your application while it is under review. However, if you update an application after it has been approved, it will trigger a new review.
You can register multiple applications if you need separate environments (for example, sandbox, staging, and production). Each environment requires its own application with its own callback URL.
If you need to change application details after submission, contact your internal Lofty representative or email
t2support@lofty.com (mailto:support@lofty.com)
.
Review Process/Results
After submitting your application, you will be able to monitor the status via the Lofty Developer Platform. Simply log in access your authorization dashboard and review the
Status
column at the far right.
Under Review
Rejected
If rejected, the primary contact submitted with the application will receive an email with more details on why it was rejected. You can then click the
Resubmit
button to edit the information provided before submitting again.
Approved
If approved, you will see the client_id and client_secret in your account.
You will need this information for the next step
.
client_id
client_secret
Once your application is approved and you have your Client ID and Client Secret, you are ready to implement OAuth 2.0. See
Lofty OAuth 2.0 API Reference (https://help.lofty.com/hc/en-us/articles/47801571926811)
for the full implementation guide.
Questions?
If you have any questions regarding this topic or any others, please contact our Support Team via email at support@lofty.com, by phone at 1 (855) 981-7557, or by chat through your Lofty CRM.
Related terms: Open API, Developer Platform, OAuth, API, SOC, Third party assessment

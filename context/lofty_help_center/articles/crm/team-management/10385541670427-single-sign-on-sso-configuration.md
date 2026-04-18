# Single Sign On (SSO) Configuration

- Article ID: `10385541670427`
- Category: `CRM`
- Section: `Team Management`
- Updated: `2025-11-07T06:14:55Z`
- Source: https://help.lofty.com/hc/en-us/articles/10385541670427-Single-Sign-On-SSO-Configuration

## Body

## Introduction

Lofty provides Single Sign-On (SSO) functionality for users to access the account through a single authentication source. As an administrator, you can enable SSO so that your members can use their company credentials to log in to all applications, including Lofty. This requires you to configure SAML 2.0 between Lofty and the identity provider. We support OneLogin, Okta, and Google.
This feature is only available to Lofty Enterprise and Multi-Team accounts.
## Summary

- What is SAML SSO? Prerequisites for SSO with Lofty Benefits of SSO
- Option to Require Login by SSO
- Configuration in Lofty
- Identity Provider (IdP) Setup Google Workspace Okta OneLogin

## What is SAML SSO?

SSO services allow a user to use one set of credentials (for example, an email address and password) to access multiple applications. The service authenticates the user only once for all the applications to which the user has been given permission when trying to log in to multiple applications.
### Pre-requisites for SSO with Lofty

- Your Identity Provider (IdP) must support the SAML 2.0 standard.

- Only Lofty users with the permission "Manage User/Entire Company" enabled can configure SAML SSO for Lofty. SSO is only valid for Enterprise and Multi-team packages.

### Benefits of SSO

- Streamlines user management across systems for team owners/admins.

- Removes the need for end-users to remember and manage multiple passwords. Simplifies end users' experience by allowing them to sign in at a single access point and enjoy a seamless experience across multiple applications.

## Option to Require Login by SSO

The login method setting provides an option that requires all Lofty users to sign in to their Lofty account, both on the website and mobile app, using Single Sign-On (SSO). By default, if you have already set up SSO for your Lofty account, the Login Method will be set to Any Method.

The permission to enable SSO is referred to as the SSO Setting . You must have this permission enabled to enable or disable the SSO requirement.

## Configuration in Lofty

To configure Single Sign On in your Lofty account, follow these steps:

- Navigate to the CMS tool. Within the Settings, select SSO Configuration.
- Toggle the setting ON to get started.

The SAML SSO Configuration modal is divided into two parts:
1. Set Application in SSO Third Party: SSO URL and SP Entity ID. Copy and paste it to your Identity Provider (IdP)
2. SAML identification: An IDP metadata XML needs to be uploaded. For more information on where to obtain this file, please refer to the IDP Setup below.

After you complete the SAML SSO configuration, the users in your team can log in to Lofty via SAML SSO or through their original Lofty account.

## Identity Provider (IdP) Setup

Here, we've included instructions for setting up Lofty  SAML SSO with Google Workspace, Okta, and OneLogin. If you use a different Identity Provider and need assistance with configuration, please contact Lofty support at
support@lofty.com (mailto:support@chimeinc.com)
.
## Google Workspace

Below, please see the reference documents for Google
- Set up SSO with Google as your Identity Provider

- Set up SAML-based SSO for custom apps

- Set up your own custom SAML application

Step 1: Create a new application integration
1. Sign in to your Admin console at https://admin.google.com/ .
2. From the Admin console Home page, go to Apps > Web and mobile apps.
3. Click Add App > Add custom SAML app.

Step 2: Configure SAML Settings in Google Workspace
1. In Lofty, go to the Settings-->SSO Settings.
2. Copy the SSO URL and SP Entity ID from Set Application in SSO Third Party .
3. Paste into the corresponding fields.

4. Map the primary email to the email in-app attributes

5. Turn on the service.

Step 3: Configure SAML Settings in Lofty

1. Download SAML Metadata.

2. Upload SAML Metadata to Lofty and turn on the switch.

3. Turn on the SSO switch.

## Okta

Step 1: Add Lofty to Okta's application

1. Log in to Okta. Make sure you are in the administrative instance of your Okta developer account.

2. Go to the Application tab, click Create App Integration.

3. Click "Create New App"

4. Select Web as your platform and SAML 2.0 as your Sign-in method then click "Next".

Step 2: Configure SAML settings in Okta
1. In Lofty, go to the Settings-->SSO Settings.
2.
Copy the SSO URL and SP Entity ID from the
Set Application in SSO Third Party.
3. Paste into the corresponding fields.
4. Click "People" and "Create Users"
5. Activate the user and set a password
Step 3: Configure SAML Settings in Lofty
1. Copy IDP Metadata and format it in https://jsonformatter.org/xml-formatter
2.
Upload SAML Metadata to Lofty and turn on the switch
### OneLogin

Step 1: Create a new application integration
1. Log in to OneLogin.
2. Go to Applications.
3. Add a new SAML Custom Connector (Advanced) App.
Step 2:
Configure SAML Settings in Lofty
1.
In Lofty, go to the Settings-->SSO Settings.

2.
Copy the SSO URL and SP Entity ID from the
Set Application in SSO Third Party.
3. Paste to the corresponding fields.
4.
Click the Users tab in the top left and add yourself and any other users that should have access to private content to the OneLogin application you created.
5. T
he email must be the same as that used in the Lofty account.
6. Add the application for these users.
7. Create a password for the users.
Step 3:
Configure Lofty in OneLogin.
1. Download SAML Metadata
2.
Upload SAML Metadata to Lofty and turn on the switch.
3.
Complete the configuration, and your members can log in to Lofty via SSO.
If you encounter errors when setting up SAML SSO, check to make sure your IDP's metadata, SAML requests, and responses are valid XML against the SAML XSD schemas. You can do so using this online tool:
https://www.samltool.com/validate_xml.php
## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by a chat with us through your Lofty CRM.

## Plain Text

Introduction
Lofty provides Single Sign-On (SSO) functionality for users to access the account through a single authentication source. As an administrator, you can enable SSO so that your members can use their company credentials to log in to all applications, including Lofty. This requires you to configure SAML 2.0 between Lofty and the identity provider. We support OneLogin, Okta, and Google.
This feature is only available to Lofty Enterprise and Multi-Team accounts.
Summary
What is SAML SSO? (#h_01GHVZCSE3E055JKFPW1719JHF)
Prerequisites for SSO with Lofty (#h_01GHVZD5H97VPZMSZ0FWYYAC07)
Benefits of SSO (#h_01GHVZDDRWZ0XC99VD9V11MXK5)
Option to Require Login by SSO (#01H8MFBY44FK1AY6YWX6F4SKXN)
Configuration in Lofty (#h_01GHVZDPXFGF26542WZQRNW2Y8)
Identity Provider (IdP) Setup (#h_01GHVZE1HMFA4QRBQRYFVFG9SP)
Google Workspace (#h_01GHVZEBMNRJ9NJHX8RZJ91338)
Okta (#h_01GHVZEKZPFPZ3CQGDNCMMVGXK)
OneLogin (#h_01GHVZEY1ERQ2QENFKK4KPFNFV)
What is SAML SSO?
SSO services allow a user to use one set of credentials (for example, an email address and password) to access multiple applications. The service authenticates the user only once for all the applications to which the user has been given permission when trying to log in to multiple applications.
Pre-requisites for SSO with Lofty
Your Identity Provider (IdP) must support the SAML 2.0 standard.
Only Lofty users with the permission "Manage User/Entire Company" enabled can configure SAML SSO for Lofty. SSO
is only valid for Enterprise and Multi-team packages.
Benefits of SSO
Streamlines user management across systems for team owners/admins.
Removes the need for end-users to remember and manage multiple passwords. Simplifies end users' experience by allowing them to sign in at a single access point and enjoy a seamless experience across multiple applications.
Option to Require Login by SSO
The login method setting provides an option that requires all Lofty users to sign in to their Lofty account, both on the website and mobile app, using Single Sign-On (SSO). By default, if you have already set up SSO for your Lofty account, the Login Method will be set to Any Method.
The permission to enable SSO is referred to as
the
SSO Setting
. You must have this permission enabled to enable or disable the SSO requirement.
Configuration in Lofty
To configure Single Sign On in your Lofty account, follow these steps:
Navigate to the CMS tool. Within the Settings, select SSO Configuration.
Toggle the setting
ON
to get started.
The SAML SSO Configuration modal is divided into two parts:
Set Application in SSO Third Party:
SSO URL and SP Entity ID. Copy and paste it to your Identity Provider (IdP)
SAML identification:
An IDP metadata XML needs to be uploaded. For more information on where to obtain this file, please refer to the IDP Setup below.
After you complete the SAML SSO configuration, the users in your team can log in to Lofty via SAML SSO or through their original Lofty account.
Identity Provider (IdP) Setup
Here, we've included instructions for setting up Lofty  SAML SSO with Google Workspace, Okta, and OneLogin. If you use a different Identity Provider and need assistance with configuration, please contact Lofty support at
support@lofty.com (mailto:support@chimeinc.com)
.
Google Workspace
Below, please see the reference documents for Google
Set up SSO with Google as your Identity Provider (https://support.google.com/a/topic/7556794)
Set up SAML-based SSO for custom apps (https://support.google.com/a/topic/7559288)
Set up your own custom SAML application (https://support.google.com/a/answer/6087519)
Step 1: Create a new application integration
Sign in to your Admin console at
https://admin.google.com/
.
From the Admin console Home page, go to Apps > Web and mobile apps.
Click Add App > Add custom SAML app.
Step 2: Configure SAML Settings in Google Workspace
In Lofty, go to the Settings-->SSO Settings.
Copy the SSO URL and SP Entity ID from
Set Application in SSO Third Party
.
Paste into the corresponding fields.
4.
Map the primary email to the email in-app attributes
5. Turn on the service.
Step 3:
Configure SAML Settings in Lofty
1. Download SAML Metadata.
2.
Upload SAML Metadata to Lofty and turn on the switch.
3. Turn on the SSO switch.
Okta
Step 1: Add Lofty to Okta's application
1. Log in to Okta.
Make sure you are in the administrative instance of your Okta developer account.
2.
Go to the Application tab, click Create App Integration.
3. Click "Create New App"
4.
Select Web as your platform and SAML 2.0 as your Sign-in method then click "Next".
Step 2: Configure SAML settings in Okta
1. In Lofty, go to the Settings-->SSO Settings.
2.
Copy the SSO URL and SP Entity ID from the
Set Application in SSO Third Party.
3. Paste into the corresponding fields.
4. Click "People" and "Create Users"
5. Activate the user and set a password
Step 3: Configure SAML Settings in Lofty
1. Copy IDP Metadata and format it in https://jsonformatter.org/xml-formatter
2.
Upload SAML Metadata to Lofty and turn on the switch
OneLogin
Step 1: Create a new application integration
1. Log in to OneLogin.
2. Go to Applications.
3. Add a new SAML Custom Connector (Advanced) App.
Step 2:
Configure SAML Settings in Lofty
1.
In Lofty, go to the Settings-->SSO Settings.
2.
Copy the SSO URL and SP Entity ID from the
Set Application in SSO Third Party.
3. Paste to the corresponding fields.
4.
Click the Users tab in the top left and add yourself and any other users that should have access to private content to the OneLogin application you created.
5. T
he email must be the same as that used in the Lofty account.
6. Add the application for these users.
7. Create a password for the users.
Step 3:
Configure Lofty in OneLogin.
1. Download SAML Metadata
2.
Upload SAML Metadata to Lofty and turn on the switch.
3.
Complete the configuration, and your members can log in to Lofty via SSO.
If you encounter errors when setting up SAML SSO, check to make sure your IDP's metadata, SAML requests, and responses are valid XML against the SAML XSD schemas. You can do so using this online tool:
https://www.samltool.com/validate_xml.php
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by a chat with us through your Lofty CRM.

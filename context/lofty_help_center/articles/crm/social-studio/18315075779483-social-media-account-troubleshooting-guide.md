# Social Media Account Troubleshooting Guide

- Article ID: `18315075779483`
- Category: `CRM`
- Section: `Social Studio`
- Updated: `2025-11-11T02:17:33Z`
- Source: https://help.lofty.com/hc/en-us/articles/18315075779483-Social-Media-Account-Troubleshooting-Guide

## Body

## Introduction

Lofty employs access tokens, provided by the respective networks, to link with your social accounts. When these tokens expire or become invalid, your social media accounts will disconnect and must be reconnected. This generates a new token.

Each social network has its own security policies. If certain actions are detected on an account, the network may expire its token, disconnecting the account from Lofty.

Like other third-party partners, Lofty adheres to these security measures. Often, these are more strict than what you encounter on the social network itself. Disconnections might be frustrating but they're enacted to ensure your protection.

## Summary

- Token Expiration Account setting changes that result in disconnection Security measures that result in disconnection Token lifespans for each social network
- Top disconnection reasons

## Token Expiration

### Account setting changes that result in disconnection

Lofty relies on settings you maintain in each social network. Making changes in a social network, such as Twitter or Instagram, can result in your account disconnecting from Lofty. Here are some changes that cause disconnections:

- Changing your username or password. For example, if you sign in to Facebook and change your password, your Facebook account will disconnect from Lofty.
- Revoking Lofty’s access to your social account. Social accounts have settings that list which apps have permission to connect to your social account. Lofty must remain on that list if you want to publish to that social account from Lofty. If you manually revoke Lofty access from the social account settings, your account will disconnect from Lofty.
- If the user who added a social account to Lofty loses their Admin status or access to the page, the account will disconnect from Lofty.

### Security measures that result in disconnection

To keep your social account secure, a social network might disconnect the account from Lofty when it identifies certain behaviors. The following behaviors are likely to get flagged and should be avoided as a best practice:

- Using alias usernames that don’t appear to be real names.
- Logging in with the same account credentials from different IP addresses. In other words, sharing logins between users or devices.
- Publishing content that gets flagged for copyright violations or other inappropriate content.

### Token lifespans for each social network

Tokens from each social network may have built-in expiration dates, so that access is not granted forever. Disconnection can be expected based on each social network’s authentication policy:

- Facebook and Instagram Business: Tokens for these social networks have a 60-day lifespan.
- LinkedIn : Tokens for this social network has a 365-day lifespan.
- Twitter : This social network does not issue tokens with expiration dates, so it should not need re-authentication.
- Google My Business: Tokens for this social network has a 365-day lifespan.
- YouTube : YouTube shouldn't need re-authentication, since these tokens refresh each time they are used to collect data from the network.

## Top disconnection reasons

### Facebook and Instagram Business

1. Facebook password or security alert:

- Most common reason for disconnection.
- Caused by updating your Facebook password or suspicious login attempts.
- Recommendations: Use your real name on Facebook. Avoid sharing your account credentials. Enable Facebook alerts for unrecognized logins.

2. Facebook access revoked:

- Disconnection occurs if Lofty is removed from authorized connections.
- Revoking access can be a troubleshooting step.
- Be sure you understand consequences before revoking access.

3. Facebook security checkpoint:

- Triggered if Facebook suspects account security compromise.
- Follow provided instructions to complete the security check.
- Clear browser cookies and history if encountering issues.

4. Facebook token expired:

- Disconnection when token reaches expiration date.
- Tokens expire every 60 days for security.
- Regularly reconnect to get a new token.

5. Insufficient Page role:

- Need Admin or Editor role to connect a Facebook Page.
- Role changes or removal can cause disconnection.
- Ensure Page Admins maintain necessary access.

6. Unconfirmed Facebook account:

- Resolve Facebook issues before reconnecting to Lofty.

7. Lofty lacks Page permissions:

- Lofty missing required permissions for actions.
- Grant all necessary permissions during setup.
- Permissions can be revoked in Facebook settings.

### LinkedIn Token Expiration

- LinkedIn provides tokens for Lofty to access your account securely.
- Tokens have built-in expiration dates to prevent indefinite access.
- When a token expires, your LinkedIn account, including your profile and Pages, disconnects from Lofty.
- LinkedIn tokens expire every 365 days.
- Reconnecting annually is necessary to get a new token and confirm Lofty's access.

1. Inactive Account Token Expiration:

- LinkedIn expires tokens for inactive accounts.
- If you haven't used LinkedIn within Lofty (engaged with LinkedIn stream, published, or loaded Inbox) in the last 60 days, your token will expire.

2. LinkedIn Access Revoked:

- Lofty is authorized as a permitted service when linked to LinkedIn.
- If Lofty is removed from LinkedIn's Permitted services, access is revoked, and the LinkedIn account disconnects from Lofty.
- Revoking access can be a troubleshooting step to start fresh before reconnecting.

3. Insufficient Access:

- To connect a LinkedIn Page, you need to be a LinkedIn Super admin of that Page.
- Removal from the Admin list disconnects the Page from Lofty.
- Ensure all LinkedIn Page admins know the authorizing account.

4. Restricted Profile:

- LinkedIn restricts accounts violating its acceptable use policies.
- Restrictions could be temporary or permanent based on the violation.
- Regain access to resolve the restriction and reconnect with Lofty.

Tips to Avoid LinkedIn Restrictions

- Don't create multiple accounts if one is restricted; LinkedIn permits only one account per user.
- Follow LinkedIn's Professional Community Policies and User Agreement.
- Spread activity over days if performing numerous actions (e.g., searches, views, requests).
- Test different browsers if unusual activity is detected.
- Review LinkedIn's account security best practices.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by a chat with us through your Lofty CRM.

## Plain Text

Introduction
Lofty employs access tokens, provided by the respective networks, to link with your social accounts. When these tokens expire or become invalid, your social media accounts will disconnect and must be reconnected. This generates a new token.
Each social network has its own security policies. If certain actions are detected on an account, the network may expire its token, disconnecting the account from Lofty.
Like other third-party partners, Lofty adheres to these security measures. Often, these are more strict than what you encounter on the social network itself. Disconnections might be frustrating but they're enacted to ensure your protection.
Summary
Token Expiration (#TroubleshootingWhySocialAccountsDisconnect-Tokenexpiration)
Account setting changes that result in disconnection (#h_01H8YJEC44JS4VDRR0RWSFFVBP)
Security measures that result in disconnection (#h_01H8YJEKMCR140QXA2RX13133K)
Token lifespans for each social network (#h_01H8YJEXN8FD1PVNY19CCDHQH8)
Top disconnection reasons (#TroubleshootingWhySocialAccountsDisconnect-Topdisconnectionreasons)
Token Expiration
Account setting changes that result in disconnection
Lofty relies on settings you maintain in each social network. Making changes in a social network, such as Twitter or Instagram, can result in your account disconnecting from Lofty. Here are some changes that cause disconnections:
Changing your username or password.
For example, if you sign in to Facebook and change your password, your Facebook account will disconnect from Lofty.
Revoking Lofty’s access to your social account.
Social accounts have settings that list which apps have permission to connect to your social account. Lofty must remain on that list if you want to publish to that social account from Lofty.
If you manually revoke Lofty access from the social account settings, your account will disconnect from Lofty.
If the user who added a social account to Lofty loses their Admin status or access to the page, the account will disconnect from Lofty.
Security measures that result in disconnection
To keep your social account secure, a social network might disconnect the account from Lofty when it identifies certain behaviors. The following behaviors are likely to get flagged and should be avoided as a best practice:
Using alias usernames that don’t appear to be real names.
Logging in with the same account credentials from different IP addresses. In other words, sharing logins between users or devices.
Publishing content that gets flagged for copyright violations or other inappropriate content.
Token lifespans for each social network
Tokens from each social network may have built-in expiration dates, so that access is not granted forever. Disconnection can be expected based on each social network’s authentication policy:
Facebook and Instagram Business:
Tokens for these social networks have a 60-day lifespan.
LinkedIn
: Tokens for this social network has a 365-day lifespan.
Twitter
: This social network does not issue tokens with expiration dates, so it should not need re-authentication.
Google My Business:
Tokens for this social network has a 365-day lifespan.
YouTube
: YouTube shouldn't need re-authentication, since these tokens refresh each time they are used to collect data from the network.
Top disconnection reasons
Facebook and Instagram Business
1. Facebook password or security alert:
Most common reason for disconnection.
Caused by updating your Facebook password or suspicious login attempts.
Recommendations:
Use your real name on Facebook.
Avoid sharing your account credentials.
Enable Facebook alerts for unrecognized logins.
2. Facebook access revoked:
Disconnection occurs if Lofty is removed from authorized connections.
Revoking access can be a troubleshooting step.
Be sure you understand consequences before revoking access.
3. Facebook security checkpoint:
Triggered if Facebook suspects account security compromise.
Follow provided instructions to complete the security check.
Clear browser cookies and history if encountering issues.
4. Facebook token expired:
Disconnection when token reaches expiration date.
Tokens expire every 60 days for security.
Regularly reconnect to get a new token.
5. Insufficient Page role:
Need Admin or Editor role to connect a Facebook Page.
Role changes or removal can cause disconnection.
Ensure Page Admins maintain necessary access.
6. Unconfirmed Facebook account:
Resolve Facebook issues before reconnecting to Lofty.
7. Lofty lacks Page permissions:
Lofty missing required permissions for actions.
Grant all necessary permissions during setup.
Permissions can be revoked in Facebook settings.
LinkedIn Token Expiration
LinkedIn provides tokens for Lofty to access your account securely.
Tokens have built-in expiration dates to prevent indefinite access.
When a token expires, your LinkedIn account, including your profile and Pages, disconnects from Lofty.
LinkedIn tokens expire every 365 days.
Reconnecting annually is necessary to get a new token and confirm Lofty's access.
1. Inactive Account Token Expiration:
LinkedIn expires tokens for inactive accounts.
If you haven't used LinkedIn within Lofty (engaged with LinkedIn stream, published, or loaded Inbox) in the last 60 days, your token will expire.
2. LinkedIn Access Revoked:
Lofty is authorized as a permitted service when linked to LinkedIn.
If Lofty is removed from LinkedIn's Permitted services, access is revoked, and the LinkedIn account disconnects from Lofty.
Revoking access can be a troubleshooting step to start fresh before reconnecting.
3. Insufficient Access:
To connect a LinkedIn Page, you need to be a LinkedIn Super admin of that Page.
Removal from the Admin list disconnects the Page from Lofty.
Ensure all LinkedIn Page admins know the authorizing account.
4. Restricted Profile:
LinkedIn restricts accounts violating its acceptable use policies.
Restrictions could be temporary or permanent based on the violation.
Regain access to resolve the restriction and reconnect with Lofty.
Tips to Avoid LinkedIn Restrictions
Don't create multiple accounts if one is restricted; LinkedIn permits only one account per user.
Follow LinkedIn's Professional Community Policies and User Agreement.
Spread activity over days if performing numerous actions (e.g., searches, views, requests).
Test different browsers if unusual activity is detected.
Review LinkedIn's account security best practices.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by a chat with us through your Lofty CRM.

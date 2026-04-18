# Lofty OAuth 2.0 API Reference

- Article ID: `47801571926811`
- Category: `Developers`
- Section: `Developers`
- Updated: `2026-03-14T00:11:16Z`
- Source: https://help.lofty.com/hc/en-us/articles/47801571926811-Lofty-OAuth-2-0-API-Reference

## Body

This article covers the technical implementation of OAuth 2.0 for vendors who have been approved on the Lofty Developer Platform. If you have not yet set up your developer account and registered an application, see Getting Started with the Lofty Developer Platform.

You will need your Client ID and Client Secret from the My Authorization tab of the Developer Platform to proceed.

## Summary

- How OAuth 2.0 Works
- Step 1: User Authentication
- Step 2: Exchange Authorization Code for Tokens
- Step 3: Make API Calls
- Refresh an Access Token
- How It Works for Lofty Users

## How OAuth 2.0 Works

OAuth 2.0 allows your application to access Lofty user data without requiring users to share their passwords. The flow works as follows:

1. Your application redirects the Lofty user to an authorization page.
2. The user logs in to Lofty and grants permission.
3. Lofty sends an authorization code to your Redirect URL.
4. Your server exchanges the code for an access token and refresh token.
5. You use the access token to call the Lofty API on behalf of the user.

## Step 1: User Authentication

Redirect the user to the Lofty authorization page using your Client ID:

https://lofty.com/page/vendor-auth.html?clientId={your_client_id}

The user will log in to their Lofty account and choose whether to authorize your application.

If the user grants permission, Lofty redirects to your Authorized Redirect URL with an authorization code:

https://yourapp.com/redirect?code=XXXXXXXXXXXXX

If the user denies permission, Lofty redirects with an error:

https://yourapp.com/redirect?error=access_denied

## Step 2: Exchange Authorization Code for Tokens

Use the authorization code to request an access token and refresh token.

Endpoint:

POST https://crm.lofty.com/api/user-web/oauth/token

Request parameters:

Parameter | Type | Description
code | String | The authorization code from the redirect
client_id | String | Your Client ID from the Developer Platform
redirect_uri | String | Your Authorized Redirect URL
grant_type | String | Must be set to authorization_code

Request header:

Header | Value
Authorization | Basic {Base64 of client_id:client_secret}
Content-Type | application/x-www-form-urlencoded

Sample curl:

curl --location ' https://crm.lofty.com/api/user-web/oauth/token?code=XXXXX&client_id=XXXX&redirect_uri=XXXXXX&grant_type=authorization_code ' --header 'Authorization: Basic {Base64 of client_id:client_secret}' --header 'Content-Type: application/x-www-form-urlencoded'

Response fields:

Field | Type | Description
access_token | String | Token used to authorize Lofty API requests
expires_in | int | Remaining lifetime of the access token in seconds
refresh_token | String | Used to obtain a new access token. Valid until the user revokes access or after 180 days.
token_type | String | Always set to Bearer
scope | String | Fixed value: openApi

## Step 3: Make API Calls

Once you have an access token, include it in the Authorization header when calling Lofty API endpoints:

Header | Value
Content-Type | application/json
Authorization | Bearer {access_token}

Full endpoint documentation is available at https://api.lofty.com/docs/index.html

## Refresh an Access Token

Access tokens expire periodically. Use the refresh token to obtain a new access token without prompting the user again.

curl --location ' https://crm.lofty.com/api/user-web/oauth/token?refresh_token={your_refresh_token}&grant_type=refresh_token ' --header 'Authorization: Basic {Base64 of client_id:client_secret}' --header 'Content-Type: application/x-www-form-urlencoded'

The response fields are the same as the initial token exchange.

## How It Works for Lofty Users

Once your application is approved, Lofty users can connect to your app as follows:

1. The user must be logged in to Lofty in their browser.
2. The user visits your authorization link: https://crm.lofty.com/page/vendor-auth.html?clientId={your_client_id}
3. The user clicks Authorize to connect your app.
4. Lofty validates the user's account and your vendor ID, then sends an authorization code to your callback URL (not to the user).
5. Your server exchanges the code for a bearer token and can then access the user's data via the API.

Vendors cannot pull data from any Lofty user unless the user initiates the integration themselves. The bearer token is issued to the vendor directly. Users can disconnect at any time by clicking Disconnect in their Lofty account.

## Questions?

If you have any questions regarding this topic or any others, please contact our Support Team via email at support@lofty.com, by phone at 1 (855) 981-7557, or by chat through your Lofty CRM.

## Plain Text

This article covers the technical implementation of OAuth 2.0 for vendors who have been approved on the Lofty Developer Platform. If you have not yet set up your developer account and registered an application, see
Getting Started with the Lofty Developer Platform. (https://help.lofty.com/hc/en-us/articles/4405826620571)
You will need your Client ID and Client Secret from the My Authorization tab of the Developer Platform to proceed.
Summary
How OAuth 2.0 Works (#h_01KKMSZ7A6SZ3MTKDB5RF8FED0)
Step 1: User Authentication (#h_01KKMT148NB6K99QKMRGQ4CA1W)
Step 2: Exchange Authorization Code for Tokens (#h_01KKMTBE728MM7P7F0GXXSKQG5)
Step 3: Make API Calls (#h_01KKMTC1DK686MVKDEW4X9GC3W)
Refresh an Access Token (#h_01KKMTCAR6MHVD9G8QQE42TZ8W)
How It Works for Lofty Users (#h_01KKMTCR8VBWDNCR3G9SKY07FJ)
How OAuth 2.0 Works
OAuth 2.0 allows your application to access Lofty user data without requiring users to share their passwords. The flow works as follows:
Your application redirects the Lofty user to an authorization page.
The user logs in to Lofty and grants permission.
Lofty sends an authorization code to your Redirect URL.
Your server exchanges the code for an access token and refresh token.
You use the access token to call the Lofty API on behalf of the user.
Step 1: User Authentication
Redirect the user to the Lofty authorization page using your Client ID:
https://lofty.com/page/vendor-auth.html?clientId={your_client_id} (https://lofty.com/page/vendor-auth.html?clientId=%7Byour_client_id%7D)
The user will log in to their Lofty account and choose whether to authorize your application.
If the user grants permission, Lofty redirects to your Authorized Redirect URL with an authorization code:
https://yourapp.com/redirect?code=XXXXXXXXXXXXX
If the user denies permission, Lofty redirects with an error:
https://yourapp.com/redirect?error=access_denied
Step 2: Exchange Authorization Code for Tokens
Use the authorization code to request an access token and refresh token.
Endpoint:
POST
https://crm.lofty.com/api/user-web/oauth/token
Request parameters:
Parameter
Type
Description
code
String
The authorization code from the redirect
client_id
String
Your Client ID from the Developer Platform
redirect_uri
String
Your Authorized Redirect URL
grant_type
String
Must be set to authorization_code
Request header:
Header
Value
Authorization
Basic {Base64 of client_id:client_secret}
Content-Type
application/x-www-form-urlencoded
Sample curl:
curl --location '
https://crm.lofty.com/api/user-web/oauth/token?code=XXXXX&client_id=XXXX&redirect_uri=XXXXXX&grant_type=authorization_code
'
--header 'Authorization: Basic {Base64 of client_id:client_secret}'
--header 'Content-Type: application/x-www-form-urlencoded'
Response fields:
Field
Type
Description
access_token
String
Token used to authorize Lofty API requests
expires_in
int
Remaining lifetime of the access token in seconds
refresh_token
String
Used to obtain a new access token. Valid until the user revokes access or after 180 days.
token_type
String
Always set to Bearer
scope
String
Fixed value: openApi
Step 3: Make API Calls
Once you have an access token, include it in the Authorization header when calling Lofty API endpoints:
Header
Value
Content-Type
application/json
Authorization
Bearer {access_token}
Full endpoint documentation is available at
https://api.lofty.com/docs/index.html
Refresh an Access Token
Access tokens expire periodically. Use the refresh token to obtain a new access token without prompting the user again.
curl --location '
https://crm.lofty.com/api/user-web/oauth/token?refresh_token={your_refresh_token}&grant_type=refresh_token (https://crm.lofty.com/api/user-web/oauth/token?refresh_token=%7Byour_refresh_token%7D&grant_type=refresh_token)
'
--header 'Authorization: Basic {Base64 of client_id:client_secret}'
--header 'Content-Type: application/x-www-form-urlencoded'
The response fields are the same as the initial token exchange.
How It Works for Lofty Users
Once your application is approved, Lofty users can connect to your app as follows:
The user must be logged in to Lofty in their browser.
The user visits your authorization link:
https://crm.lofty.com/page/vendor-auth.html?clientId={your_client_id} (https://crm.lofty.com/page/vendor-auth.html?clientId=%7Byour_client_id%7D)
The user clicks Authorize to connect your app.
Lofty validates the user's account and your vendor ID, then sends an authorization code to your callback URL (not to the user).
Your server exchanges the code for a bearer token and can then access the user's data via the API.
Vendors cannot pull data from any Lofty user unless the user initiates the integration themselves. The bearer token is issued to the vendor directly. Users can disconnect at any time by clicking Disconnect in their Lofty account.
Questions?
If you have any questions regarding this topic or any others, please contact our Support Team via email at support@lofty.com, by phone at 1 (855) 981-7557, or by chat through your Lofty CRM.

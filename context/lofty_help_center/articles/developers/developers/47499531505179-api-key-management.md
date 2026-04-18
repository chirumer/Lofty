# API Key Management

- Article ID: `47499531505179`
- Category: `Developers`
- Section: `Developers`
- Updated: `2026-03-06T20:59:50Z`
- Source: https://help.lofty.com/hc/en-us/articles/47499531505179-API-Key-Management

## Body

### Introduction

Lofty has transitioned from auto-generated API keys to a fully user-managed API key system. This update improves security, auditability, and user control over API access. Existing API keys have been migrated and labeled as legacy. Users must now explicitly create and manage all API keys going forward. While API keys can still be shared, OAuth is the recommended and documented method for all new vendor integrations (see HERE ).

### API Key Settings

API Keys are managed from Personal Settings > Integrations > API Keys :

### How It Works

#### Legacy API Key Migration

All existing auto-generated API keys have been migrated into the new API Key list with an "Active" status. Each migrated key is labeled as a “Legacy Token” with no expiration date. Legacy keys remain available until manually revoked by the user.

#### API Key Auto-Generation Disabled

API keys are no longer auto-generated. After this update, users must explicitly create each API key through the UI by clicking + Create API Key :

#### API Key Statuses

Each API key now carries one of three statuses:

Status | Behavior
Active | Valid and usable
Expired | Permanently invalid, preserved for history. Cannot be reactivated.
Revoked | Permanently invalid, preserved for history. Cannot be reactivated.

#### Maximum Active Keys

Users can have a maximum of 10 API keys in "Active" status at any time. Keys in Expired or Revoked status do not count toward this limit.

#### Creating an API Key

Users must provide the following when creating a new API key:

- Name (Required)
- Description (Optional)
- Expiration Date (Optional) — API key status changes to "Expired" on the indicated date at 12:01 AM and access is disabled at that time.
- API Usage Acknowledgment (Required) — Users must read and accept the terms via checkbox before the key can be created. The checkbox event is recorded in the database with IP address, device information, date/time, and linked to the API key.

#### 2FA-Protected API Key Reveal & Revocation

Users are presented with the API key once at the time of creation. Any subsequent attempt to view the key requires two-factor authentication. Revoking an API key also requires the user to complete two-factor authentication before the action is processed.

#### Available Edit Actions for Active API Keys

Users can perform the following actions on any API key with "Active" status:

- Change name
- Add or edit description
- Add or edit expiration date — Status changes to "Expired" at 12:01 AM on the expiration date. The expiration date and time are recorded in the database. Recovery is not permitted.
- Revoke Access — Status changes from "Active" to "Revoked" immediately and API access is disabled. The revocation date and time are recorded in the database. Recovery is not permitted.

#### Expiration Reminder Emails

A reminder email is sent to the user at 30, 15, 7, and 1 day(s) before the API key expiration date at 8:00 AM. If the expiration date is updated, the reminder schedule adjusts automatically.

### Why This Matters

- Users now have full control over API key creation, visibility, and lifecycle instead of relying on auto-generated keys
- 2FA requirements for key reveal and revocation add a critical layer of security against unauthorized access
- Legacy keys are preserved and functional, so existing integrations are not disrupted
- Expiration reminders help prevent unexpected API access disruptions by giving users advance notice

### Potential Issues

- Users who previously relied on auto-generated API keys will now need to manually create new keys through the UI
- Legacy API keys have no expiration date by default; users should review and set expiration dates on legacy keys if appropriate for their security requirements
- If a user reaches the 10 active key limit, they must revoke or allow an existing key to expire before creating a new one
- Expired and revoked keys cannot be reactivated; users will need to create a new key if access is needed again

### FAQs

Q: What happened to my existing API key?

A: Your existing API key has been migrated into the new system as a "Legacy API Key" with Active status. It will continue to work as before until you choose to revoke it.

Q: Can I reactivate an expired or revoked API key?

A: No. Expired and revoked keys are permanently deactivated and preserved for audit purposes only. You will need to create a new API key.

Q: Why do I need 2FA to view or revoke my API key?

A: Two-factor authentication adds an extra layer of security to protect sensitive actions. This prevents unauthorized users from accessing or disabling your API keys.

Q: What happens when my API key expires?

A: At 12:01 AM on the expiration date, the key status changes to "Expired" and API access is immediately disabled. You will receive reminder emails at 30, 15, 7, and 1 day(s) before expiration.

Q: How many API keys can I have?

A: You can have up to 10 active API keys at a time. Expired and revoked keys do not count toward this limit.

Q: Should I use API keys or OAuth for vendor integrations?

A: OAuth is the recommended and supported method for all vendor integrations (see HERE ). API keys are still available but OAuth provides better security and access control.

## Plain Text

Introduction
Lofty has transitioned from auto-generated API keys to a fully user-managed API key system. This update improves security, auditability, and user control over API access. Existing API keys have been migrated and labeled as legacy. Users must now explicitly create and manage all API keys going forward. While API keys can still be shared, OAuth is the recommended and documented method for all new vendor integrations (see
HERE (https://help.lofty.com/hc/en-us/articles/4405826620571-Lofty-Open-API-and-Developer-Platform)
).
API Key Settings
API Keys are managed from
Personal Settings
>
Integrations
>
API Keys
:
How It Works
Legacy API Key Migration
All existing auto-generated API keys have been migrated into the new API Key list with an "Active" status. Each migrated key is labeled as a “Legacy Token” with no expiration date. Legacy keys remain available until manually revoked by the user.
API Key Auto-Generation Disabled
API keys are no longer auto-generated. After this update, users must explicitly create each API key through the UI by clicking
+ Create API Key
:
API Key Statuses
Each API key now carries one of three statuses:
Status
Behavior
Active
Valid and usable
Expired
Permanently invalid, preserved for history. Cannot be reactivated.
Revoked
Permanently invalid, preserved for history. Cannot be reactivated.
Maximum Active Keys
Users can have a maximum of 10 API keys in "Active" status at any time. Keys in Expired or Revoked status do not count toward this limit.
Creating an API Key
Users must provide the following when creating a new API key:
Name (Required)
Description (Optional)
Expiration Date (Optional) — API key status changes to "Expired" on the indicated date at 12:01 AM and access is disabled at that time.
API Usage Acknowledgment (Required) — Users must read and accept the terms via checkbox before the key can be created. The checkbox event is recorded in the database with IP address, device information, date/time, and linked to the API key.
2FA-Protected API Key Reveal & Revocation
Users are presented with the API key once at the time of creation. Any subsequent attempt to view the key requires two-factor authentication. Revoking an API key also requires the user to complete two-factor authentication before the action is processed.
Available Edit Actions for Active API Keys
Users can perform the following actions on any API key with "Active" status:
Change name
Add or edit description
Add or edit expiration date — Status changes to "Expired" at 12:01 AM on the expiration date. The expiration date and time are recorded in the database. Recovery is not permitted.
Revoke Access — Status changes from "Active" to "Revoked" immediately and API access is disabled. The revocation date and time are recorded in the database. Recovery is not permitted.
Expiration Reminder Emails
A reminder email is sent to the user at 30, 15, 7, and 1 day(s) before the API key expiration date at 8:00 AM. If the expiration date is updated, the reminder schedule adjusts automatically.
Why This Matters
Users now have full control over API key creation, visibility, and lifecycle instead of relying on auto-generated keys
2FA requirements for key reveal and revocation add a critical layer of security against unauthorized access
Legacy keys are preserved and functional, so existing integrations are not disrupted
Expiration reminders help prevent unexpected API access disruptions by giving users advance notice
Potential Issues
Users who previously relied on auto-generated API keys will now need to manually create new keys through the UI
Legacy API keys have no expiration date by default; users should review and set expiration dates on legacy keys if appropriate for their security requirements
If a user reaches the 10 active key limit, they must revoke or allow an existing key to expire before creating a new one
Expired and revoked keys cannot be reactivated; users will need to create a new key if access is needed again
FAQs
Q: What happened to my existing API key?
A: Your existing API key has been migrated into the new system as a "Legacy API Key" with Active status. It will continue to work as before until you choose to revoke it.
Q: Can I reactivate an expired or revoked API key?
A: No. Expired and revoked keys are permanently deactivated and preserved for audit purposes only. You will need to create a new API key.
Q: Why do I need 2FA to view or revoke my API key?
A: Two-factor authentication adds an extra layer of security to protect sensitive actions. This prevents unauthorized users from accessing or disabling your API keys.
Q: What happens when my API key expires?
A: At 12:01 AM on the expiration date, the key status changes to "Expired" and API access is immediately disabled. You will receive reminder emails at 30, 15, 7, and 1 day(s) before expiration.
Q: How many API keys can I have?
A: You can have up to 10 active API keys at a time. Expired and revoked keys do not count toward this limit.
Q: Should I use API keys or OAuth for vendor integrations?
A: OAuth is the recommended and supported method for all vendor integrations (see
HERE (https://help.lofty.com/hc/en-us/articles/4405826620571-Lofty-Open-API-and-Developer-Platform)
). API keys are still available but OAuth provides better security and access control.

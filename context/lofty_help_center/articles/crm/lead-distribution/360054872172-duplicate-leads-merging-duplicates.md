# Duplicate Leads + Merging Duplicates

- Article ID: `360054872172`
- Category: `CRM`
- Section: `Lead Distribution`
- Updated: `2025-11-07T06:42:56Z`
- Source: https://help.lofty.com/hc/en-us/articles/360054872172-Duplicate-Leads-Merging-Duplicates

## Body

## Introduction

Lofty has certain restrictions in place to avoid duplicates being added to the database, as well as to make users aware of leads that are potentially the same person to avoid wasted efforts by any party involved. This feature cannot be deactivated and is built in by default. There are four different situations where duplicate lead logic will apply:

- (a) When doing a CSV lead import into Lofty
- (b) When trying to manually add leads that are already in the system
- (c) When leads are added via email parsing

Lofty account owners have a way to override this logic. This setting can be enabled in Company Settings > Lead Capture > Duplicate Lead Settings.

Toggling on this setting will allow duplicate leads to exist, as long as they have different owners . This means they can be owned by two different agents or be a combination of Personal and Company leads.

## Summary

- (a) When leads are added via lead import Option 1: Merge Leads Option 2: Skip Leads
- (b) When leads are added manually
- (c) When leads are added via email parsing
- Merging Leads
- Merging Leads on the Mobile App
- Merging Permissions
- Adding Agents as Leads
- Duplicate Leads for Multi-Team and Enterprise Packages

## (a) When leads are added via lead import

More information regarding the basics of lead importing can be found here: Lead Import (via CSV/Spreadsheet) or Lead Import (via Google Contacts) .

Here are the situations when a lead would be considered a "duplicate" per Lofty's logic:

1. If the CSV lead and the CRM lead both have the same email address
2. The CSV lead and the CRM do not have the same email address, but... The lead's name and phone number are the same in the CRM and CSV The lead's name is the same in the CRM and CSV, but neither has a phone number The lead's name is the same in the CRM and CSV, but neither has a phone number or email address

When importing, there are two options available to select from after marching up the columns but before finalizing the import. Here is where both options will appear during the import process:

### Option 1: Merge Leads

Selecting this option will merge the duplicates from the CSV with those that match already in the database per the four points listed above.

Merging will not update the following if it is different in the CSV. The primary lead will be the existing lead and will not have these fields overwritten.

- Pipeline stage
- Assignee
- Search Criteria (you are not able to import a CSV to add search criteria later, even if the existing lead has none already)

Merging will update the following if it is different in the CSV

- Lead Type. But only in certain instances: only 2 principles will change the lead type: If one of the two leads being merged is the lead type of "Buyer & Seller," then the lead type will be "Buyer & Seller" after merging. If one of the two leads being merged is the lead type of "Seller," and the other is not the seller (meaning it could be Buyer, Renter, Other), then the lead type will be "Buyer & Seller" after merging.

### Option 2: Skip Leads

This option will simply make it so that leads that match the four points above will not even be imported into Lofty and will instead be skipped.

## (b) When leads are added manually

Lofty uses a lead's email address to flag as potential duplicates. Users can choose to act on that notification or dismiss it.

If the email address does not match, Lofty will use the following to confirm duplicates:

- if a lead’s phone (including a family member's phone) is the same as the other lead’s phone
- if a lead’s name is the same as the other lead’s name

The best way to find a potential duplicate in your system is to search using their email address.

If a duplicate is suspected, Lofty will notify you in two different spots:

(1) When adding a lead manually via the People page. This is only triggered based on the phone number or email address.

(2) When looking at a lead profile that has triggered a duplicate. Here, the user can see the duplicate lead’s name and who owns the lead. If the user has access to both leads, they can merge the leads with the "Merge" button.

Another option is to choose two leads manually on the people page and then select the "Merge" option.

New UI:

## (c) When leads are added via email parsing

Many leads enter Lofty via email parsing when a new lead email alert from a third-party service is parsed into the Lofty platform automatically. If a lead is a duplicate, it will not be parsed into Lofty. The following are the most typical scenarios:

- Lead A and Lead B both have email addresses, and they are both the same email address. This lead will not be imported into Lofty.
- Lead A and Lead B do not have email addresses, so the system will check the phone and name (first and last). If the phone and name are the same, the lead will not be imported into Lofty.
- If a lead does not have an email/phone, it will not be imported to Lofty.

Keep in mind that even if the lead is not brought into Lofty via email parsing in the above scenarios, it will still trigger a "Back On Market" opportunity notification (see Opportunities > Back On Market ).

## Merging Leads

When merging leads, the first question is to select the "Merging Mode," which offers the following options:

- "One of the leads is a duplicate." If this option is selected, the Lofty user will need to make a choice between which record is the primary record of the two. The other lead’s information will be merged with the primary lead. Lofty recommends selecting the "Primary Lead" as the one with the most communication logs (calls, emails, texts, etc.), as this is likely the main person with whom you have already been interacting.
- "These 2 leads are family to each other." With this option, the Lofty user will have to make a choice between which record is the primary record of the two. The secondary record's information will be attached as a family member to the primary lead.

**IMPORTANT : If the Lofty user does not want to ever merge the duplicate leads, they can click the ‘X' on the right side. After the user confirms that they want to dismiss the duplicate reminder, the yellow prompt will never appear again on this lead. I f lead A is a duplicate of lead B and lead C, the prompt will show up on one lead at random. After closing one prompt, another will appear for the other duplicate lead and will have to be dismissed if needed.

## Merging Leads on the Mobile App

Lofty also supports the ability to easily merge leads from the mobile app.

When a lead is a duplicate, a message will appear at the top of the lead detail page:

By clicking the “Merge” button, the following options will appear at the bottom of the screen:

- Merge as Duplicates
- Merge as Family Members
- View Lead Detail
- Ignore

## Merging Permissions

Users who do not have the "Access All Company Leads" permission (see Permissions ) will not be able to merge duplicate leads or click on the duplicate lead to see their information. They will only be able to see the name of the lead and whose account it already exists in.

- For example, if a user does have the "Access All Company Leads" permission, they will see a message showing the lead's name as a hyperlink that can be clicked, the account the lead is in, and the option to merge the lead.
- But if they do not have this permission, the message will simply show the lead's name, but it is not a hyperlink. The message will, however, display whose account the lead is in.

## Adding Agents as Leads

A user's email address can be used as both an agent/user login as well as an email address assigned to a "lead" in Lofty. Admins may be interested in adding their new members as a way to provide them with training via an automated Smart Plan that they have built out. The email address can only be used once per account as a lead as well.

## Duplicate Leads for Multi-Team and Enterprise

We have a duplicate lead logic built in for our Multi-Team and Enterprise Accounts. This allows for duplicate lead emails to exist on our larger platforms. You can also check Lead Ownership for more information.

### How to implement

- Multi-Team Company Owners and those with the "Lead Management" permission can enable/disable
- Enterprise The Company Owner, Company Admins, and those with the "Manage Lead Distribution > Entire Company" can enable/disable

There are two options for allowing duplicate leads:

- Allow duplicate leads, as long as they have different owners.
- Allow duplicate leads with the same owner, as long as they have different assigned agents.

### Once this feature is enabled...

- If "Allow Duplicate Leads" is NOT enabled

The same lead email address can only be added once per account, regardless of whether it is a Company Lead or a Personal Lead. In other words, within a Lofty Office, you are unable to add the same email address more than once– no exceptions .

- Allow duplicate company/office and personal leads

The same lead email address can be added multiple times as Company/Office Leads and Personal Leads assigned to different agents.

The same lead email address can be added for every individual agent on one instance when added as a Personal Lead or a Company/Office lead for each of them.

One agent can have a pair of the same email company lead and personal lead at most.

- Note: When Company leads go through routing, the Next Up method is selected. If the agent does not contact the lead on time, there may be a situation where the Lead is assigned to multiple agents according to priority. So when a Lead is assigned to an Agent, if there is a Company Lead with the same email assigned to the Agent, the Lead will not be automatically merged, but will create a new Lead and give a Merge prompt.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your CRM.

## Plain Text

Introduction
Lofty has certain restrictions in place to avoid duplicates being added to the database, as well as to make users aware of leads that are potentially the same person to avoid wasted efforts by any party involved. This feature
cannot
be deactivated and is built in by default. There are four different situations where duplicate lead logic will apply:
(a) When doing a CSV lead import into Lofty
(b) When trying to manually add leads that are already in the system
(c) When leads are added via email parsing
Lofty account owners have a way to override this logic. This setting can be enabled in
Company Settings > Lead Capture > Duplicate Lead Settings.
Toggling on this setting will allow duplicate leads to exist,
as long as they have different owners
. This means they can be owned by two different agents or be a combination of Personal and Company leads.
Summary
(a) When leads are added via lead import (#h_01EHT6WDJKSWWNY8DXS7YN7GAT)
Option 1: Merge Leads (#h_01EZ5TA712CV3T5TZSKKG6D76K)
Option 2: Skip Leads (#h_01EZ5TAC0ZJ0YG04M3FCM7Y5J5)
(b) When leads are added manually (#h_01EHT70F5WCB8E3J8HDANB2RPK)
(c) When leads are added via email parsing (#h_01EZ5TAMQG4PNHFF73E2J1251J)
Merging Leads (#h_01EHT725B5M4CMF84H4ARC4XA4)
Merging Leads on the Mobile App (#h_01EHT72ADTRY0Y2ZN67NZ604G5)
Merging Permissions (#h_01EHT72F62VE66WAT2RV3SAKJJ)
Adding Agents as Leads (#h_01EHT72WM0A9YH86HDE2QXFWSY)
Duplicate Leads for Multi-Team and Enterprise Packages (#h_01FR1604VJ0CSWBP13WPKBHRKZ)
(a) When leads are added via lead import
More information regarding the basics of lead importing can be found here:
Lead Import (via CSV/Spreadsheet) (https://help.lofty.com/hc/en-us/articles/360001710831)
or
Lead Import (via Google Contacts) (https://help.lofty.com/hc/en-us/articles/360049874951)
.
Here are the situations when a lead would be considered a "duplicate" per Lofty's logic:
If the CSV lead and the CRM lead both have the same email address
The CSV lead and the CRM do not have the same email address, but...
The lead's name
and
phone number are the same in the CRM and CSV
The lead's name is the same in the CRM and CSV, but neither has a phone number
The lead's name is the same in the CRM and CSV, but neither has a phone number
or
email address
When importing, there are two options available to select from after marching up the columns but before finalizing the import.
Here is where both options will appear during the import process:
Option 1: Merge Leads
Selecting this option will merge the duplicates from the CSV with those that match already in the database per the four points listed above.
Merging will
not
update the following if it is different in the CSV. The primary lead will be the existing lead and will not have these fields overwritten.
Pipeline stage
Assignee
Search Criteria (you are
not
able to import a CSV to add search criteria later, even if the existing lead has none already)
Merging
will
update the following if it is different in the CSV
Lead Type. But only in certain instances: only 2 principles will change the lead type:
If one of the two leads being merged is the lead type of "Buyer & Seller," then the lead type will be "Buyer & Seller" after merging.
If one of the two leads being merged is the lead type of "Seller," and the other is
not
the seller (meaning it could be Buyer, Renter, Other), then the lead type will be "Buyer & Seller" after merging.
Option 2: Skip Leads
This option will simply make it so that leads that match the four points above will not even be imported into Lofty and will instead be skipped.
(b) When leads are added manually
Lofty uses a lead's email address to flag as potential duplicates.
Users can choose to act on that notification or dismiss it.
If the email address does not match, Lofty will use the following to confirm duplicates:
if a lead’s phone (including a family member's phone) is the same as the other lead’s phone
if a lead’s name is the same as the other lead’s name
The best way to find a potential duplicate in your system is to search using their email address.
If a duplicate is suspected, Lofty will notify you in two different spots:
(1) When adding a lead manually via the People page. This is only triggered based on the phone number or email address.
(2) When looking at a lead profile that has triggered a duplicate. Here, the user can
see the duplicate lead’s name and who owns the lead. If the user has access to both leads, they can merge the leads with the "Merge" button.
Another option is to choose two leads manually on the people page and then select the "Merge" option.
New UI:
(c) When leads are added via email parsing
Many leads enter Lofty via email parsing when a new lead email alert from a third-party service is parsed into the Lofty platform automatically. If a lead is a duplicate, it will
not
be parsed into Lofty. The following are the most typical scenarios:
Lead A and Lead B both have email addresses, and they are both the same email address. This lead will
not
be imported into Lofty.
Lead A and Lead B do
not
have email addresses, so the system will check the phone and name (first and last). If the phone
and
name are the same, the lead will
not
be imported into Lofty.
If a lead does not have an email/phone, it will
not
be imported to Lofty.
Keep in mind that even if the lead is not brought into Lofty via email parsing in the above scenarios, it will still trigger a "Back On Market" opportunity notification (see
Opportunities > Back On Market (https://help.lofty.com/hc/en-us/articles/115003018292-Opportunities#h_01EVYNH9TAQKN0X8YHDXGSWDGB)
).
Merging Leads
When merging leads, the first question is to select the "Merging Mode," which offers the following options:
"One of the leads is a duplicate."
If this option is selected, the Lofty user will need to make a choice between which record is the primary record of the two. The other lead’s information will be merged with the primary lead. Lofty recommends selecting the "Primary Lead" as the one with the most communication logs (calls, emails, texts, etc.), as this is likely the main person with whom you have already been interacting.
"These 2 leads are family to each other."
With this option, the Lofty user will have to make a choice between which record is the primary record of the two. The secondary record's information will be attached as a family member to the primary lead.
**IMPORTANT
: If the Lofty user does not want to ever merge the duplicate leads, they can click the ‘X' on the right side.
After the user confirms that they want to dismiss the duplicate reminder, the yellow prompt will never appear again on this lead.
I
f lead A is a duplicate of lead B
and
lead C, the prompt will show up on one lead at random. After closing one prompt, another will appear for the other duplicate lead and will have to be dismissed if needed.
Merging Leads on the Mobile App
Lofty also supports the ability to easily merge leads from the mobile app.
When a lead is a duplicate, a message will appear at the top of the lead detail page:
By clicking the “Merge” button, the following options will appear at the bottom of the screen:
Merge as Duplicates
Merge as Family Members
View Lead Detail
Ignore
Merging Permissions
Users who do not have the "Access All Company Leads" permission (see
Permissions (https://help.lofty.com/hc/en-us/articles/4407530443291)
) will not be able to merge duplicate leads or click on the duplicate lead to see their information. They will only be able to see the name of the lead and whose account it already exists in.
For example, if a user
does
have
the "Access All Company Leads" permission, they will see a message showing the lead's name as a hyperlink that can be clicked, the account the lead is in, and the option to merge the lead.
But if they do
not
have this permission, the message will simply show the lead's name, but it is
not
a hyperlink. The message will, however, display whose account the lead is in.
Adding Agents as Leads
A user's email address can be used as both an agent/user login as well as an email address assigned to a "lead" in Lofty. Admins may be interested in adding their new members as a way to provide them with training via an automated Smart Plan that they have built out. The email address can only be used
once per account
as a lead as well.
Duplicate Leads for Multi-Team and Enterprise
We have a duplicate lead logic built in for our Multi-Team and Enterprise Accounts. This allows for duplicate lead emails to exist on our larger platforms. You can also check
Lead Ownership (https://help.lofty.com/hc/en-us/articles/115003544406)
for more information.
How to implement
Multi-Team
Company Owners and those with the "Lead Management" permission can enable/disable
Enterprise
The Company Owner, Company Admins, and those with the "Manage Lead Distribution > Entire Company" can enable/disable
There are two options for allowing duplicate leads:
Allow duplicate leads, as long as they have different owners.
Allow duplicate leads with the same owner, as long as they have different assigned agents.
Once this feature is enabled...
If "Allow Duplicate Leads" is
NOT
enabled
The same lead email address can only be added
once
per account, regardless of whether it is a Company Lead or a Personal Lead. In other words, within a Lofty Office, you are unable to add the same email address more than once–
no exceptions
.
Allow
duplicate company/office and personal leads
The same lead email address can be added multiple times as Company/Office Leads and Personal Leads assigned to different agents.
The same lead email address can be added
for every individual agent
on one instance when added as a Personal Lead or a Company/Office lead for each of them.
One agent can have a pair of the same email company lead and personal lead at most.
Note:
When Company leads go through routing, the Next Up method is selected. If the agent does not contact the lead on time, there may be a situation where the Lead is assigned to multiple agents according to priority. So when a Lead is assigned to an Agent, if there is a Company Lead with the same email assigned to the Agent,
the Lead will not be automatically merged, but will create a new Lead and give a Merge prompt.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your CRM.

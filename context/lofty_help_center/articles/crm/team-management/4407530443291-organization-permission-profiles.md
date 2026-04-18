# Organization - Permission Profiles

- Article ID: `4407530443291`
- Category: `CRM`
- Section: `Team Management`
- Updated: `2025-11-17T07:00:01Z`
- Source: https://help.lofty.com/hc/en-us/articles/4407530443291-Organization-Permission-Profiles

## Body

## Introduction

Permission profiles are a scalable and precise way to set permissions for specific roles and situations. Build your permission profiles and assign your agents to set their access level.

## Summary

- Manage User
- System Configuration
- Lead Management
- Transaction Management
- Website Settings
- Advanced Permission Settings

## Configuring Permissions

To access permission settings, navigate to Settings > Permission Profiles :

You will notice there are four built-in permission profiles. Some of the individual permissions for these built-in profiles are locked and greyed out (meaning they cannot be changed). Others, however, can be toggled on/off depending on business needs .

1. Company Owner (Hidden). This role will not display because only the account owner can have this permission.
2. Company Admin . Users with this profile will have the same permissions as the Company Owner. They will have all the company-level permissions.
3. Office Owner . This permissions profile is assigned to users who are designated as Office Owners. They will have the ability to manage any group (and subgroups) they are assigned to.
4. Office Admin . Users with this profile will have the same permissions as the Office Owner, but they cannot be the owner of a group. They can also manage their group (and any subgroups of that group).
5. Standard User . This is the basic permission profile for agents and standard users on the team.

To add a new permission profile (you can add up to 20 more), click on the blue Add Profile button in the top-right:

The first thing you will do is give that profile a name that you will use to reference in the future:

Next, scroll down the list and toggle on/off the permissions that you would like to adjust using the switches on the right side:

### Manage User

The permissions in this section allow the user to c ontrol the permissions of other users, add/remove users, and change individual user information within Company Settings.

- Organization Hierarchy. This permission allows users to edit the organization hierarchy for the entire company or their group and subgroup.
- Permission Profile. This permission allows users to edit/add/delete permission profiles for the entire company.
- User Management. This permission allows users to add/edit/delete users, either in the entire company or just their group and sub-groups.
- Agent Tags. This permission allows users to add and edit Agent Tags

### System Configuration

The permissions in this section allow you to add, edit, or delete Company Sources, Shared Tags, Pipeline Stages, and Lead Segments, as well as create and manage Lead Ponds, Custom Fields, AI Assistant settings, and set Reporting Goals (Both Team and individual users’ Goals).

- Pipeline. This permits you to add/edit/delete pipeline stages for the entire company.
- Sources. This permits you to add/edit/delete lead sources for the entire company.
- Segments. This permits you to add/edit/delete lead segments for the entire company or just your office and sub-offices.
- Tags. This permits you to add/edit/delete lead tags for the entire company or just your office and sub-offices.
- Lead Custom Fields. This permits you to add/edit/delete lead profile custom fields for the entire company.
- Transaction Custom Fields. This permits you to add/edit/delete Transaction Field Groups and Transaction Custom Fields for the entire company.
- Lead Ponds. This permits you the ability to manage Lead Ponds. By selecting "Entire Company", the user with this permission profile can create lead ponds for every office. By selecting "User's Office", the user with this permission profile can create lead ponds only for their own office and suboffices.
- AI Sales Assistant. This permits you to access the Company's AI Assistant settings.
- Manage Goals. This permits you to add/edit/delete business and activity goals for yourself, the entire company, or your office and sub-offices.
- Company or Office Templates . This permits you to edit or delete shared email templates, Smart Plans, and open-house questionnaires. If you choose the option for "Entire Company," you can manage every group's templates. If you choose "User's Office," you can only manage your own group's templates.

### Lead Management

The permissions in this section dictate how much access a user has to lead distribution and organization.

- Lead Routing Rule Management . This permits you the ability to manage lead routing rules and re-routing rules. If you choose the option for "Entire Company," the user with this profile can manage every group's lead routing rules. If you choose "User's Office," the user with this profile can only manage their own group's lead routing rules.
- Access All Company Leads . This permission gives the user access to all company leads, that is, all leads other than Private Leads.
- Access All Office Leads . This permission gives the user access to all leads owned by the user's office.
- Access Member's Personal Lead. This permits you to access members' Personal leads.
- Add Hidden Leads. This permits you to add hidden leads. When turned OFF, you cannot add hidden leads, and all future leads will be brought in as company leads. Any existing hidden leads will remain as hidden leads and will not be affected if this permission is changed.
- Lead Capture Management. This permits you to manage company lead capture channels.
- Export Leads. This permits you to export all leads that are visible to you, all leads you are assigned to in the primary agent role, or all your personal leads.
- Delete Leads. This permits you to delete leads. You will be able to delete any leads that you have access to.
- Change Lead Source: This will allow an account admin to restrict users from changing a lead's source. By default, this permission will be ON for all Lofty users. When the permission is OFF, the Source field is greyed out for all leads this user can see, including Private Leads.
- Partial Lead Conversion . This permits you to convert partial leads by searching for contact information. This costs $0.30 per conversion, which will be billed to the account owner's card on file.
- Share Leads . This permits you to share leads outside your account.

### Transaction Management

The permissions in this section dictate what access the user has to Transaction Management settings.

- Export Transactions. This permits you to export all transactions that are visible to that user, all transactions you are assigned to in the primary agent role, or all the personally owned transactions.
- Delete Transactions. This permits you to delete any transaction that you own or are a contact on, transactions that you own, any transactions in your office/sub-office, any transaction.
- Access the Transaction Accounting Page. This permission allows the user to access and edit the accounting page on transactions, including fields other than Sales Price and GCI, when closing a transaction.
- Generate Commission Disbursement Authorizations (CDAs). This permits you to create CDAs.

### Website Settings

The permissions in this section dictate what access the user has to the websites on the account.

- Manage Company Websites. This permission gives the user access to edit all websites within the Company.
- Manage Own Website. This permits you the ability to edit your own Agent Subdomain website or upgrade to your own Agent Website. If disabled, you cannot access your Agent Subdomain (which will stay live), and you cannot access the option to upgrade to an Agent Website.
- Add Landing Pages. This permits you the ability to set up and manage landing pages. If you have your own Agent Subdomain or Agent Website, that webpage will be used to build the landing pages. Otherwise, the parent website above that level will be used.
- Edit Profile. When enabled, you can change your profile photo and Lofty login email address.

## Editing/Deleting  Permission Profiles

To edit or delete a permission profile, use the edit or delete icons in the rightmost column:

## Advanced Permission Settings

This setting is available under Company Settings > Permission Profiles > Advanced Settings . These settings are intended to define limitations for how organizational groups are to interact with each other within the account. Some organizations prefer for users within these groups to only see others who belong to the same group and not users from the entire account. These permissions address that.

Example-

User A belongs to Office 1

User B also belongs to Office 1

User C belongs to Office 2

Depending on how these new advanced permissions are configured, you can set it up so that User A and User B can only see users within their group (Office 1). This means they will not be able to see User C .

You could even set it up so that User C has access to see all other groups (including Office 1) and is, therefore, able to see User A and User B, but they cannot see User C in the different scenarios.

There are three scenarios in which these Office Interaction Limitations can be applied.

##### 1. Lead Assignment

This setting limits what other users are visible when assigning leads.

Main Rule

Choose one of the following:

- Only allow users to assign leads within their organizational group
- Allow users to assign leads to any other user within the account

Individual Exceptions

Select individual users or offices and whether they can/cannot assign leads to specific users or offices.

##### 2. Lead Ownership

This setting limits the ability to create Personal leads for the entire company.

Main Rule

Choose one of the following:

- Only allow users to view company-owned leads
- Allow all users to have Personal leads

Individual Exceptions

If Only Allow Company Leads is selected, you can set individual exceptions. This will allow specific users, offices, teams, or permission profiles that can have personal, office, or team leads. You can manage your Global Lead Ownership policy in Company Settings > Permission Profiles > Advanced Settings.

When the Default Rule is set to Only allow Company-Owned leads , clicking on Individual Exceptions will now support additional permission profile options.

Available To | Lofty Account Owners and Admins
Default Setting | Allow Personal and Company-Owned Leads
Permissions Required | Company Owner, Company Admin

3. Transaction Roles

This setting limits what users can be found when assigning transaction access to other contacts.

Main Rule

Choose one of the following:

- Only allow users to assign transaction access within their own organizational office
- Allow users to assign transactions to any other user within the account

Individual Exceptions

Select individual users or offices and whether they can/cannot assign transaction access to specific users or offices.

##### 4. Live Transferring

This setting limits what users can be found when transferring calls to other users.

Main Rule

Choose one of the following:

- Only allow users to transfer calls to others within their own organizational office
- Allow users to transfer calls to any other user within the account

Individual Exceptions

Select individual users or offices and whether they can/cannot assign transaction access to specific users or offices.

## Questions?

If you have any questions regarding this topic or any others, please contact our Support Team via email at support@lofty.com, by phone at 1 (855) 981-7557, or by chat through your Lofty CRM.

## Plain Text

Introduction
Permission profiles are a scalable and precise way to set permissions for specific roles and situations. Build your permission profiles and assign your agents to set their access level.
Summary
Manage User (#h_01HB6NZHXAKRXS2Q3ZS4E0SN33)
System Configuration (#h_01HB6NZHXA3QMZYFHSVCSCHA6N)
Lead Management (#h_01JT1PQZKQ3ZTQFJDVGMG1WHR8)
Transaction Management (#h_01JT1PYR4MBKATT0M90FDBYRPY)
Website Settings (#h_01JT1X6Q1DJ0JPESWD9BSPX0V9)
Advanced Permission Settings (#h_01JFFXATRF8ZP6WG3N1GMTDHPM)
Configuring Permissions
To access permission settings, navigate to
Settings
>
Permission Profiles
:
You will notice there are
four
built-in permission profiles. Some of the individual permissions for these built-in profiles are locked and greyed out
(meaning they cannot be changed). Others, however, can be toggled on/off depending on business needs
.
Company Owner
(Hidden). This role will
not
display because only the account owner can have this permission.
Company Admin
. Users with this profile will have the same permissions as the Company Owner. They will have all the company-level permissions.
Office Owner
. This permissions profile is assigned to users who are designated as Office Owners. They will have the ability to manage any group (and subgroups) they are assigned to.
Office Admin
. Users with this profile will have the same permissions as the Office Owner, but they cannot be the owner of a group. They can also manage their group (and any subgroups of that group).
Standard User
. This is the basic permission profile for agents and standard users on the team.
To add a new permission profile (you can add
up to 20
more), click on the blue
Add Profile
button in the top-right:
The first thing you will do is give that profile a name that you will use to reference in the future:
Next, scroll down the list and toggle on/off the permissions that you would like to adjust using the switches on the right side:
Manage User
The permissions in this section allow the user to c
ontrol the permissions of other users, add/remove users, and change individual user information within Company Settings.
Organization Hierarchy.
This permission allows users to edit the organization hierarchy for the entire company or their group and subgroup.
Permission
Profile.
This permission allows users to
edit/add/delete permission profiles for the entire company.
User Management.
This permission allows users to
add/edit/delete users, either in the entire company or just their group and sub-groups.
Agent Tags.
This permission allows users to add and edit
Agent Tags (https://help.lofty.com/hc/en-us/articles/10336991021979)
System Configuration
The permissions in this section allow you to add, edit, or delete Company Sources, Shared Tags, Pipeline Stages, and Lead Segments, as well as create and manage Lead Ponds, Custom Fields, AI Assistant settings, and set Reporting Goals (Both Team and individual users’ Goals).
Pipeline.
This permits you to
add/edit/delete pipeline stages for the entire company.
Sources.
This permits you to
add/edit/delete lead sources for the entire company.
Segments.
This permits you to
add/edit/delete lead segments for the entire company or just your office and sub-offices.
Tags.
This permits you to
add/edit/delete lead tags for the entire company or just your office and sub-offices.
Lead Custom Fields.
This permits you to
add/edit/delete lead profile custom fields for the entire company.
Transaction Custom Fields.
This permits you to
add/edit/delete Transaction Field Groups and Transaction Custom Fields for the entire company.
Lead Ponds.
This permits you the ability to manage Lead Ponds. By selecting "Entire Company", the user with this permission profile can create lead ponds for every office. By selecting "User's Office", the user with this permission profile can create lead ponds only for their own office and suboffices.
AI Sales Assistant.
This permits you to
access the Company's AI Assistant settings.
Manage Goals.
This permits you to
add/edit/delete business and activity goals for yourself, the entire company, or your office and sub-offices.
Company or Office Templates
. This permits you to edit or delete shared email templates, Smart Plans, and open-house questionnaires. If you choose the option for "Entire Company," you can manage every group's templates. If you choose "User's Office," you can only manage your own group's templates.
Lead Management
The permissions in this section dictate how much access a user has to lead distribution and organization.
Lead Routing Rule Management
.
This permits you the ability to manage lead routing rules and re-routing rules. If you choose the option for "Entire Company," the user with this profile can manage every group's lead routing rules. If you choose "User's Office," the user with this profile can only manage their own group's lead routing rules.
Access All Company Leads
. This permission gives the user access to all company leads, that is, all leads other than Private Leads.
Access All Office Leads
. This permission gives the user access to all leads owned by the user's office.
Access Member's Personal Lead.
This permits you to access members' Personal leads.
Add Hidden Leads.
This permits you to add hidden leads. When turned OFF, you cannot add hidden leads, and all future leads will be brought in as company leads. Any existing hidden leads will remain as hidden leads and will not be affected if this permission is changed.
Lead Capture Management.
This permits you to manage company lead capture channels.
Export Leads.
This permits you to export all leads that are visible to you, all leads you are assigned to in the primary agent role, or all your personal leads.
Delete Leads.
This permits you to delete leads. You will be able to delete any leads that you have access to.
Change Lead Source:
This will allow an account admin to restrict users from changing a lead's source.
By default, this permission will be
ON
for all Lofty users. When the permission is OFF, the Source field is greyed out for all leads this user can see, including Private Leads.
Partial Lead Conversion
. This permits you to convert partial leads by searching for contact information. This costs $0.30 per conversion, which will be billed to the account owner's card on file.
Share Leads
. This permits you to share leads outside your account.
Transaction Management
The permissions in this section dictate what access the user has to Transaction Management settings.
Export Transactions.
This permits you to export all transactions that are visible to that user, all transactions you are assigned to in the primary agent role, or all the personally owned transactions.
Delete Transactions.
This permits you to delete any transaction that you own or are a contact on, transactions that you own, any transactions in your office/sub-office, any transaction.
Access the Transaction Accounting Page.
This permission allows the user to access and edit the accounting page on transactions, including fields other than Sales Price and GCI, when closing a transaction.
Generate Commission Disbursement Authorizations (CDAs).
This permits you to create CDAs.
Website Settings
The permissions in this section dictate what access the user has to the websites on the account.
Manage Company Websites.
This permission gives the user access to edit all websites within the Company.
Manage Own Website.
This permits you the ability to edit your own Agent Subdomain website or upgrade to your own Agent Website. If disabled, you cannot access your Agent Subdomain (which will stay live), and you cannot access the option to upgrade to an Agent Website.
Add Landing Pages.
This permits you the ability to set up and manage landing pages. If you have your own Agent Subdomain or Agent Website, that webpage will be used to build the landing pages. Otherwise, the parent website above that level will be used.
Edit Profile.
When enabled, you can change your profile photo and Lofty login email address.
Editing/Deleting  Permission Profiles
To edit or delete a permission profile, use the
edit
or
delete
icons in the rightmost column:
Advanced Permission Settings
This setting is available under
Company
Settings
>
Permission Profiles
>
Advanced Settings
. These settings are intended to define limitations for how organizational groups are to interact with each other within the account. Some organizations prefer for users within these groups to only see others who belong to the same group and not users from the entire account. These permissions address that.
Example-
User A
belongs to
Office 1
User B
also belongs to
Office 1
User C
belongs to
Office 2
Depending on how these new advanced permissions are configured, you can set it up so that
User A
and
User B
can only see users within their group (Office 1). This means they will
not
be able to see
User C
.
You could even set it up so that
User C
has access to see all other groups (including Office 1) and is, therefore, able to see
User A
and
User B,
but they cannot see
User C
in the different scenarios.
There are three scenarios in which these
Office Interaction Limitations
can be applied.
1. Lead Assignment
This setting limits what other users are visible when assigning leads.
Main Rule
Choose
one
of the following:
Only allow users to
assign leads
within their organizational group
Allow users to
assign leads
to any other user within the account
Individual Exceptions
Select individual users or offices and whether they can/cannot assign leads to specific users or offices.
2. Lead Ownership
This setting limits the ability to create Personal leads for the entire company.
Main Rule
Choose
one
of the following:
Only allow users to view
company-owned
leads
Allow all users to have Personal leads
Individual Exceptions
If Only Allow Company Leads is selected, you can set individual exceptions. This will allow specific users, offices, teams, or permission profiles that can have personal, office, or team leads.
You can manage your
Global Lead Ownership
policy in Company Settings > Permission Profiles > Advanced Settings.
When the Default Rule is set to
Only allow Company-Owned leads
, clicking on Individual Exceptions will now support additional permission profile options.
Available To
Lofty Account Owners and Admins
Default Setting
Allow Personal and Company-Owned Leads
Permissions Required
Company Owner, Company Admin
3. Transaction Roles
This setting limits what users can be found when assigning transaction access to other contacts.
Main Rule
Choose
one
of the following:
Only allow users to
assign transaction access
within their own organizational office
Allow users to
assign transactions
to any other user within the account
Individual Exceptions
Select individual users or offices and whether they can/cannot assign transaction access to specific users or offices.
4. Live Transferring
This setting limits what users can be found when transferring calls to other users.
Main Rule
Choose
one
of the following:
Only allow users to
transfer calls to others
within their own organizational office
Allow users to
transfer calls
to any other user within the account
Individual Exceptions
Select individual users or offices and whether they can/cannot assign transaction access to specific users or offices.
Questions?
If you have any questions regarding this topic or any others, please contact our Support Team via email at support@lofty.com, by phone at 1 (855) 981-7557, or by chat through your Lofty CRM.

# Lead Ownership

- Article ID: `115003544406`
- Category: `CRM`
- Section: `Lead Category & Privacy`
- Updated: `2025-11-14T17:48:53Z`
- Source: https://help.lofty.com/hc/en-us/articles/115003544406-Lead-Ownership

## Body

## Introduction

The Owner of a lead informs how the lead entered the system. Only Owners can delete, merge, or export their leads. This differs from the Assignee , who is responsible for following up on the lead, and is displayed on outgoing communication.

## Summary

- Company vs. Office/Team vs. Personal Leads
- Adding Leads Adding Leads Manually Importing Leads Leads Captured by Lofty Websites Lead Capture Settings
- Visibility vs. Ownership vs. Assignee Lead Permission based on Lead Ownership Hidden Leads Lead Assignees
- Exporting Leads

## Company vs. Office/Team vs. Personal Leads

Company Leads: Leads are generated from a Company/Team lead capture channel. If you are a brokerage that provides leads to your agents, the leads that you capture will be Company.

Office/Team Leads: Leads are generated at the Office or Team level. If you are a Team Leader who provides leads to the agents on your Team, the leads that you capture will be owned at the Team level.

- The benefit to the Company, Office, or Team leads is that by default, users will not be able to export these leads if they are to leave your Lofty account. You can override this default setting in Permission Profiles if you want to allow your users to export or delete Company, Office, or Team-owned leads.

Personal Leads: Leads are generated from an individual user's lead capture channel. These can be leads they meet at an open house, leads they capture through their own paid lead generation, or their own referrals.

- The benefit to Personal leads is that the Agents on your team can feel confident and secure that the leads they capture through their own marketing or business efforts belong to them completely.

## Adding Leads

Leads are added to the Lofty platform via many channels. Each channel has default ownership, but lead ownership can also be set to another ownership level.

### Adding Leads Manually

When a lead is added manually, the lead will be the user's lead by default. To manually add a lead, navigate to People > +Add Lead .

If this user has permission to hide their leads, they will have the option to hide the lead details.

### Importing Leads

Navigate to Personal Settings > Lead Settings > Lead Import to import your leads. After uploading your file and matching the columns, the Options section allows you to set the ownership level. This will be the owner of all of the leads being imported.

### Leads Captured by Lofty Websites

Each website built with Lofty (including both the main company/team websites and agent subdomains) has the option to determine whether leads are imported to Lofty as a "Company/Team/Office Lead" or a "Personal Lead." By default, leads entering in via a subdomain are "Private Leads." To edit this setting, do the following:

1. Navigate to Website and select the website you want to edit
2. Select Settings
3. Choose Lead Capture > Lead Ownership
4. Adjust the setting to Company/Team Lead or Personal Lead. If you select Personal Lead and you have permission to Hide the lead details, you can select that option here.

### Lead Capture Settings

#### Company/Team Lead Capture

1. Navigate to Company/Team Settings > Lead Settings > Lead Capture
2. Connect Zillow, Realtor.com, or Facebook Ads. These leads will be imported as Company/Team leads, owned by the Company/Team. Note: Only the Company/Team owner/admin can manage these settings.

#### Office Lead Capture

1. Navigate to Office Settings > Lead Settings > Lead Capture
2. Connect Zillow, Realtor.com, or Facebook Ads. These leads will be imported as Office leads, owned by this office. Note: Only the Company/Office owner/admin can manage these settings.

#### Personal Lead Capture

1. Navigate to Personal Settings > Lead Settings > Lead Capture
2. Connect Zillow, Realtor.com, or Facebook Ads. These leads will be imported as Personal leads, owned by this user. Note: Everyone can manage their lead capture settings.

#### All Other Third-Party Sources

Navigate to Personal Settings > Lead Settings > Lead Capture > Lead Capture Settings

Set the lead ownership in the Ownership Level column. The default is Personal, but can be changed to Company/Team or Office. Everyone has access to manage their lead capture settings and can set leads to be owned by any office that they are a part of.

## Visibility vs. Ownership vs. Assignee

It is important to note that just because an individual can view a lead does not mean they should feel like they can work and own that lead.

- Lead ownership determines who owns the lead.
- The Assigned To section determines who is responsible for working the lead.

Each account should establish clear rules for all users so that only those listed in the "Assigned To" section are the ones responsible for the lead. The agent in the "Agent" slot of the same "Assigned To" section should be the primary owner. Even for someone with access to view all leads, filters can be used to only display leads they are assigned to or own.

### Lead Permission based on Lead Ownership

### Hidden Leads

If a user has permission to add Hidden Leads, they have the option to hide the lead details of their leads. The Company/Team Owner/Admin can still see that these leads exist in the CRM, but the vital information is redacted. This allows an admin to use that data for reporting, without actually seeing the lead's personal information.

To automatically hide all of your leads, navigate to Personal Settings > My User Settings > Account & Security and check the box next to Hide Leads.

- Note: This setting is unavailable if you do not have permission to hide your leads.

To manually hide a lead, navigate to the lead's details page and edit the lead. The pop-up window will provide a toggle to hide this lead's information. You can only hide your leads. Company, Team, or Office leads cannot be hidden.

To hide leads in mass, navigate to People and check the box next to the leads you want to hide. Click More and select Hide My Leads . You can hide up to 5,000 leads at one time.

As a Company/Team Owner/Admin, a hidden lead will look like this in the platform.

The lead's first name, pipeline stage, owner, lead score, last activity, and communications are visible, but the lead cannot be clicked into and you cannot see any further details. You have enough information to gain some reporting on the lead, but that's about it.

### Lead Assignees

The Lead Assignees are the users or lead ponds in the Lead's Assigned To section.

When you are assigned to a lead in any role, you can see the lead's information and work with the lead, regardless of the lead's ownership level or if the lead is hidden. If you are not the lead's owner and your assignment is removed, you will lose access to the lead.

## Exporting Leads

As a User, you may or may not be able to export your Personal Leads or Company/Office/Team leads, depending on the permissions they have enabled.

The toggle button is turned off by default.

- If enabled, team members will no longer have the ownership notification switch, and users will not receive notifications when the ownership of their "Personal Leads" is changed, deleted, or exported.
- If disabled, team members will have the Ownership Notification switch added. Users will receive notifications when the ownership of their "Personal Leads" is changed, deleted, or exported.
- A pop-up window will appear when you change the button settings.

## Global Company Lead Ownership Toggle

- If you are an account Owner or Admin, you can set your Company's policy on lead ownership in Company Settings > Permission Profiles > Advanced Settings . If you have enabled Global Company Lead, the system will hide the complex ownership concepts.
- If you are a user who needs ownership management, the system will allow the Lead Ownership settings to be enabled, supporting the existing lead ownership management capabilities. Details: Global Company Lead Concept: Only company-owned leads are allowed. Lead Ownership Settings The default Lead Ownership setting is Global Company Lead, which can be configured in the system by navigating to Settings → Permission Profiles → Advanced Settings. Default Rule: Only allow company-owned leads. Individual Exceptions: None.
- If you have enabled Global Company Lead and want to change the lead ownership setting, you can do so here.

2. For the Global Company Lead users, ownership-related fields and features are hidden.

- People list page: The Owner field is hidden in column settings, filtering, and modification are not supported.
- lead detail page: The Owner field is hidden.
- lead capture entries: The Ownership and related fields are hidden across all lead capture sources. For example: manual lead creation, lead import, website, landing page, etc.

The default setting allows all users, offices, or teams to have Personal leads.

#### Here’s what you need to know about only allowing Company-Owned leads:

- Changing their global policy will not change the ownership of any leads that already exist in their Lofty account; it will only apply to new leads that are added after the change is made.
- Use the Individual Exceptions dropdown to select users, offices, or teams that can have Personal Leads, if exceptions can be made. (Specific users can have Personal Leads, Offices can have Office-owned leads, and Teams can have Team-Owned leads.)
- After setting Company-Owned leads as the global policy, if a lead is transferred to another agent, the lead owner will be changed to Company.
- After setting Company-Owned leads as the global policy, if leads are merged, the owner will be changed to Company.
- After setting Company-Owned leads as the global policy, the “Personal Leads” settings in Permission Profiles will be toggled off.
- After setting Company-Owned leads as the global policy, no one will be able to add Hidden leads, unless they are added to the Individual Exceptions list.
- After setting Company-Owned leads as the global policy, "Company" ownership cannot be changed to anything else. The entry points include the following: Lead Import Manually “Add Lead” or “Edit Lead“ Use Open API to create Lead Collect Lead from the website and the landing page Capture Lead from Zillow, Realtor.com, Zapier Capture Lead from Email Parsing and Text Code Capture Lead from Open House form and Calendar- Schedule Meeting Link Capture Lead from Facebook and any other Ads.

##### Change Ownership Whitelist

When a team is added to this whitelist, we will support the Company owner/Office Owner/Office Admin/Team owner/Team with the mass change of ownership function in the People List. From this option, you can select the visible agent or office as the target owner.

Learn more about Lead Export here: Lead Export

## Questions?

If you have any questions regarding this topic or any others, please contact our Support Team at support@lofty.com or by phone at 1 (855) 981-7557.

## Plain Text

Introduction
The
Owner
of a lead informs how the lead entered the system. Only Owners can delete, merge, or export their leads. This differs from the
Assignee
, who is responsible for following up on the lead, and is displayed on outgoing communication.
Summary
Company vs. Office/Team vs. Personal Leads (#h_01ECR8TE90FYREZS7T1SHH010N)
Adding Leads (#h_01J9VPJZRVH5X53BNPAXN0DA1Z)
Adding Leads Manually (#h_01J9VPYYPWCDKW3NV2KKRYG69D)
Importing Leads (#h_01J9VQCNVFW3YSM7J4P554PKEX)
Leads Captured by Lofty Websites (#h_01J9VR0XDJ3NW583ETB1BZ4P7C)
Lead Capture Settings (#h_01J9VRZPBN7R4H4HQRF20DW1DM)
Visibility vs. Ownership vs. Assignee (#01J9VSV6TRBSA96WRNX3756FZA)
Lead Permission based on Lead Ownership (#h_01J9VT20WQTJYZZE5PARMNGT25)
Hidden Leads (#h_01J9VTHZ05GD6DEH6318SFVG2B)
Lead Assignees (#h_01J9VW5RPSK54Y0QRXDYCVWSP9)
Exporting Leads (#h_01J9VWAPPVB76H0NC0YBSKMJXM)
Company vs.
Office/Team
vs. Personal Leads
Company Leads:
Leads are generated from a Company/Team lead capture channel. If you are a brokerage that provides leads to your agents, the leads that you capture will be Company.
Office/Team Leads:
Leads are generated at the Office or Team level. If you are a Team Leader who provides leads to the agents on your Team, the leads that you capture will be owned at the Team level.
The benefit to the Company, Office, or Team leads is that by default, users will not be able to export these leads if they are to leave your Lofty account. You can override this default setting in Permission Profiles if you want to allow your users to export or delete Company, Office, or Team-owned leads.
Personal Leads:
Leads are generated from an individual user's lead capture channel. These can be leads they meet at an open house, leads they capture through their own paid lead generation, or their own referrals.
The benefit to Personal leads is that the Agents on your team can feel confident and secure that the leads they capture through their own marketing or business efforts belong to them completely.
Adding Leads
Leads are added to the Lofty platform via many channels. Each channel has default ownership, but lead ownership can also be set to another ownership level.
Adding Leads Manually
When a lead is added manually, the lead will be the user's lead by default. To manually add a lead, navigate to
People > +Add Lead
.
If this user has permission to hide their leads, they will have the option to hide the lead details.
Importing Leads
Navigate to
Personal Settings > Lead Settings > Lead Import
to import your leads. After uploading your file and matching the columns, the
Options
section allows you to set the ownership level. This will be the owner of all of the leads being imported.
Leads Captured by Lofty Websites
Each website built with Lofty (including both the main company/team websites and agent subdomains) has the option to determine whether leads are imported to Lofty as a "Company/Team/Office Lead" or a "Personal Lead." By default, leads entering in via a subdomain are "Private Leads." To edit this setting, do the following:
Navigate to
Website
and select the website you want to edit
Select
Settings
Choose
Lead Capture > Lead Ownership
Adjust the setting to Company/Team Lead or Personal Lead. If you select Personal Lead and you have permission to Hide the lead details, you can select that option here.
Lead Capture Settings
Company/Team Lead Capture
Navigate to
Company/Team
Settings > Lead Settings > Lead Capture
Connect Zillow, Realtor.com, or Facebook Ads. These leads will be imported as Company/Team leads, owned by the Company/Team.
Note: Only the Company/Team owner/admin can manage these settings.
Office Lead Capture
Navigate to
Office
Settings > Lead Settings > Lead Capture
Connect Zillow, Realtor.com, or Facebook Ads. These leads will be imported as Office leads, owned by this office.
Note: Only the Company/Office owner/admin can manage these settings.
Personal Lead Capture
Navigate to
Personal Settings > Lead Settings > Lead Capture
Connect Zillow, Realtor.com, or Facebook Ads. These leads will be imported as Personal leads, owned by this user.
Note: Everyone can manage their lead capture settings.
All Other Third-Party Sources
Navigate to
Personal Settings > Lead Settings > Lead Capture > Lead Capture Settings
Set the lead ownership in the
Ownership Level
column. The default is Personal, but can be changed to Company/Team or Office. Everyone has access to manage their lead capture settings and can set leads to be owned by any office that they are a part of.
Visibility vs. Ownership vs. Assignee
It is important to note that just because an individual can
view
a lead does not mean they should feel like they can
work
and
own
that lead.
Lead ownership determines who owns the lead.
The Assigned To section determines who is responsible for working the lead.
Each account should establish clear rules for all users so that only those listed in the "Assigned To" section are the ones responsible for the lead. The agent in the "Agent" slot of the same "Assigned To" section should be the primary owner. Even for someone with access to view all leads, filters can be used to only display leads they are assigned to or own.
Lead Permission based on Lead Ownership
Hidden Leads
If a user has permission to add Hidden Leads, they have the option to hide the lead details of their leads. The Company/Team Owner/Admin can still see that these leads exist in the CRM, but the vital information is redacted. This allows an admin to use that data for reporting, without actually seeing the lead's personal information.
To automatically hide all of your leads, navigate to
Personal Settings > My User Settings > Account & Security
and check the box next to
Hide Leads.
Note: This setting is unavailable if you do not have permission to hide your leads.
To manually hide a lead, navigate to the lead's details page and edit the lead. The pop-up window will provide a toggle to hide this lead's information. You can only hide your leads. Company, Team, or Office leads cannot be hidden.
To hide leads in mass, navigate to
People
and check the box next to the leads you want to hide. Click
More
and select
Hide My Leads
. You can hide up to 5,000 leads at one time.
As a Company/Team Owner/Admin, a hidden lead will look like this in the platform.
The lead's first name, pipeline stage, owner, lead score, last activity, and communications are visible, but the lead cannot be clicked into and you cannot see any further details. You have enough information to gain some reporting on the lead, but that's about it.
Lead Assignees
The Lead Assignees are the users or lead ponds in the Lead's Assigned To section.
When you are assigned to a lead in any role, you can see the lead's information and work with the lead, regardless of the lead's ownership level or if the lead is hidden. If you are not the lead's owner and your assignment is removed, you will lose access to the lead.
Exporting Leads
As a User, you may or may not be able to export your Personal Leads or Company/Office/Team leads, depending on the permissions they have enabled.
The toggle button is turned off by default.
If enabled, team members will no longer have the ownership notification switch, and users will not receive notifications when the ownership of their "Personal Leads" is changed, deleted, or exported.
If disabled, team members will have the Ownership Notification switch added. Users will receive notifications when the ownership of their "Personal Leads" is changed, deleted, or exported.
A pop-up window will appear when you change the button settings.
Global Company Lead Ownership Toggle
If you are an account Owner or Admin, you can set your Company's policy on lead ownership in
Company Settings > Permission Profiles > Advanced Settings
.
If you have enabled Global Company Lead, the system will hide the complex ownership concepts.
If you are a user who needs ownership management, the system will allow the Lead Ownership settings to be enabled, supporting the existing lead ownership management capabilities.
Details:
Global Company Lead Concept: Only company-owned leads are allowed.
Lead Ownership Settings
The default Lead Ownership setting is Global Company Lead, which can be configured in the system by navigating to Settings → Permission Profiles → Advanced Settings.
Default Rule: Only allow company-owned leads.
Individual Exceptions: None.
If you have enabled Global Company Lead and want to change the lead ownership setting, you can do so here.
2. For the Global Company Lead users, ownership-related fields and features are hidden.
People list page: The Owner field is hidden in column settings, filtering, and modification are not supported.
lead detail page: The Owner field is hidden.
lead capture entries: The Ownership and related fields are hidden across all lead capture sources. For example: manual lead creation, lead import, website, landing page, etc.
The default setting allows all users, offices, or teams to have Personal leads.
Here’s what you need to know about only allowing Company-Owned leads:
Changing their global policy will not change the ownership of any leads that already exist in their Lofty account; it will only apply to new leads that are added after the change is made.
Use the Individual Exceptions dropdown to select users, offices, or teams that can have Personal Leads, if exceptions can be made. (Specific users can have Personal Leads, Offices can have Office-owned leads, and Teams can have Team-Owned leads.)
After setting Company-Owned leads as the global policy, if a lead is transferred to another agent, the lead owner will be changed to Company.
After setting Company-Owned leads as the global policy, if leads are merged, the owner will be changed to Company.
After setting Company-Owned leads as the global policy, the “Personal Leads” settings in Permission Profiles will be toggled off.
After setting Company-Owned leads as the global policy, no one will be able to add Hidden leads, unless they are added to the Individual Exceptions list.
After setting Company-Owned leads as the global policy, "Company" ownership cannot be changed to anything else. The entry points include the following:
Lead Import
Manually “Add Lead” or “Edit Lead“
Use Open API to create Lead
Collect Lead from the website and the landing page
Capture Lead from Zillow, Realtor.com, Zapier
Capture Lead from Email Parsing and Text Code
Capture Lead from Open House form and Calendar- Schedule Meeting Link
Capture Lead from Facebook and any other Ads.
Change Ownership Whitelist
When a team is added to this whitelist, we will support the Company owner/Office Owner/Office Admin/Team owner/Team with the mass change of ownership function in the People List. From this option, you can select the visible agent or office as the target owner.
Learn more about Lead Export here:
Lead Export (https://help.lofty.com/hc/en-us/articles/360011616892)
Questions?
If you have any questions regarding this topic or any others, please contact our Support Team at support@lofty.com or by phone at 1 (855) 981-7557.

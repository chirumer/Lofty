# Reassignment Groups

- Article ID: `360061564771`
- Category: `CRM`
- Section: `Lead Distribution`
- Updated: `2025-11-07T06:27:37Z`
- Source: https://help.lofty.com/hc/en-us/articles/360061564771-Reassignment-Groups

## Body

## Introduction

Standard lead routing in Lofty works when a brand new lead reaches the CRM and then the lead routing rule kicks in and sends it to a specific assignee. This "Reassignment Groups" feature, however, is different because it is intended to route leads that have already been in the system , not new ones. An example of when to use this could be that an ISA was the original "Agent" assigned to the lead via standard lead routing and then, after qualifying the lead, they want to trigger distribution to a group of agents for someone to take over.

To learn more about lead routing for new leads as they enter the CRM, please see Lead Routing Rules .

## Summary

- Setting Up Reassignment Groups
- Using Reassignment Groups
- Reassignment: Enterprise

## Setting Up Reassignment Groups

First, navigate to Company Settings > Lead Settings > Reassignment Groups . Users with the "Manage Lead Distribution" permission (see Organization - Permission Profiles ) can edit these reassignment rules. Click on + Add New to add a new reassignment group. There is currently no limit to the number of reassignment groups that can be created.

Give the reassignment group a name. This will be the name that is used to choose this specific group when doing the assignment.

Enterprise accounts have an additional option called Available To , which allows you to segment which specific groups inside of the Enterprise hierarchy will have access to each reassignment group that is created.

With this setting, users in the selected groups will be able to see this specific Reassignment Group as an option when reassigning via a lead's profile. If a user is not part of a selected group, they will not see this as an option to reassign in a lead's profile.

Choose the assignees for this re-routing group. These are the agents that will be included in the Reassignment rule. These can be set per individual or agent tag.

Next, choose the default assignee. This will be the individual who gets the lead if no one in the distribution list claims it.

Finally, select the lead distribution method. These are the same as regular lead routing rule logic.

## Using Reassignment Groups

Now that the reassignment groups have been created, you can use them.

*IMPORTANT :

- The action of actually triggering distribution to a reassignment group can only be done manually at present.
- Only available as an action when replacing the primary Agent role on a lead, not for the Assistant role, lender role, or any other custom roles.

Navigate to a lead profile page and select the primary agent role (remember that this action is only supported for the primary agent role).

Next, choose which reassignment group you would like to send the lead to:

You will see a confirmation message and will want to click YES if you would like to trigger the reassignment group distribution:

The primary agent role will show Re-Assign in progress until the lead is assigned to the agent via Reassignment Group rules. You will be unable to edit the assignee for this primary agent role while reassignment is in progress.

Once the lead has been reassigned, per the Reassignment Group rule, OR the lead has been assigned to the default assignee, a timeline record will be documented on the lead profile that looks like this one:

## Editing a Reassignment Group

If a new user is added to or removed from the Reassignment Group, the assignments will continue without resetting. The current assignment round will complete, to ensure that everyone is getting the appropriate amount of leads.

## Permissions

The display of reassignment groups looks like this:

Only users with the right admin permissions can edit reassignment groups.

- "Manage Lead Distribution" permission is required. Those with access to edit lead distribution for "Entire Company" can edit all reassignment groups. Those limited to editing only for "User's Office" will only be able to edit reassignment groups for their office/sub-offices.

Learn More: Organization - Permission Profiles

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
Standard lead routing in Lofty works when a brand new lead reaches the CRM and then the lead routing rule kicks in and sends it to a specific assignee. This "Reassignment Groups" feature, however, is different because it is intended to
route leads that have already been in the system
, not new ones. An example of when to use this could be that an ISA was the original "Agent" assigned to the lead via standard lead routing and then, after qualifying the lead, they want to trigger distribution to a group of agents for someone to take over.
To learn more about lead routing for
new
leads as they enter the CRM, please see
Lead Routing Rules (https://help.lofty.com/hc/en-us/articles/360055177831)
.
Summary
Setting Up Reassignment Groups (#h_01F65X2KE894QP7ZFDH5GFSA25)
Using Reassignment Groups (#h_01F65X2PS1GVY9AKD2E47G9TSQ)
Reassignment: Enterprise (#id-8/15/22:FeatureReleaseTrainingforChime3.52-Re-RoutingRuleOptimizations)
Setting Up Reassignment Groups
First, navigate to
Company
Settings
>
Lead Settings
>
Reassignment Groups
. Users with the "Manage Lead Distribution" permission (see
Organization - Permission Profiles (https://help.lofty.com/hc/en-us/articles/4407530443291)
) can edit these reassignment rules.
Click on
+ Add New
to add a new reassignment group. There is currently no limit to the number of reassignment groups that can be created.
Give the reassignment group a name. This will be the name that is used to choose this specific group when doing the assignment.
Enterprise accounts have an additional option called
Available To
, which
allows you to segment which specific groups inside of the Enterprise hierarchy will have access to each reassignment group that is created.
With this setting, users in the selected groups will be able to see this specific Reassignment Group as an option when reassigning via a lead's profile. If a user is not part of a selected group, they will not see this as an option to reassign in a lead's profile.
Choose the assignees for this re-routing group. These are the agents that will be included in the Reassignment rule. These can be set per individual or agent tag.
Next, choose the default assignee. This will be the individual who gets the lead if no one in the distribution list claims it.
Finally, select the lead distribution method. These are the same as regular
lead routing rule (https://help.lofty.com/hc/en-us/articles/360055177831)
logic.
Using Reassignment Groups
Now that the reassignment groups have been created, you can use them.
*IMPORTANT
:
The action of actually triggering distribution to a reassignment group can only be done manually at present.
Only available as an action when replacing the primary
Agent
role on a lead,
not
for the
Assistant
role, lender role, or any other custom roles.
Navigate to a
lead profile page
and select the
primary agent role
(remember that this action is only supported for the primary agent role).
Next, choose which reassignment group you would like to send the lead to:
You will see a confirmation message and will want to click
YES
if you would like to trigger the reassignment group distribution:
The primary agent role will show
Re-Assign in progress
until the lead is assigned to the agent via Reassignment Group rules. You will be unable to edit the assignee for this primary agent role while reassignment is in progress.
Once the lead has been reassigned, per the Reassignment Group rule, OR the lead has been assigned to the default assignee, a timeline record will be documented on the lead profile that looks like this one:
Editing a Reassignment Group
If a new user is added to or removed from the Reassignment Group, the assignments will continue without resetting. The current assignment round will complete, to ensure that everyone is getting the appropriate amount of leads.
Permissions
The display of reassignment groups looks like this:
Only users with the right admin permissions can edit reassignment groups.
"Manage Lead Distribution" permission is required.
Those with access to edit lead distribution for "Entire Company" can edit all reassignment groups.
Those limited to editing only for "User's Office" will only be able to edit reassignment groups for their office/sub-offices.
Learn More:
Organization - Permission Profiles (https://help.lofty.com/hc/en-us/articles/4407530443291)
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

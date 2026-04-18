# Enterprise Lead Routing

- Article ID: `4407645128347`
- Category: `CRM`
- Section: `Lead Distribution`
- Updated: `2025-11-07T06:27:12Z`
- Source: https://help.lofty.com/hc/en-us/articles/4407645128347-Enterprise-Lead-Routing

## Body

## Introduction

Lead routing is an important topic to be aware of when distributing incoming leads to companies, offices, and individual agents depending on their source. Most of the lead routing logic associated with the Enterprise product is the same as it is for current broker editions of Lofty. Please take some time to review the following article for more context: Lead Routing Rules . This article will only address the differences between what is outlined in that article and what is available in the Enterprise product.

## Summary

- Edit Permissions
- Basic Settings
- Scope
- Adding a Rule

## Edit Permissions

- Users with the "Manage Lead Distribution —— Entire Company" permission can manage the lead routing rules for the entire account and every group.
- Users with the "Manage Lead Distribution —— User's Office" permission can only manage the lead routing rules for their own office and any sub-offices.

See Enterprise Edition - Permissions for more information.

## Personal Lead Routing

Personal Lead Routing rules allow you to set up routing for your own, personal leads. Access the Personal Lead Routing rules by selecting your Personal settings and select Lead routing:

These rules are set up the same as Company/Office lead routing rules, but will only apply to leads that enter the Lofty platform as your personal leads, such as leads from your agent website or subdomain.

Click Lead Options to set up default routing for leads from common sources:

## Company/Office Lead Routing

Navigate to your Company/Office settings to access the Company/Office level lead routing rules:

Lead Options will allow you to set up some default routing on the Company/Office level lead sources:

## Basic Settings

As you are getting started with lead routing, be sure to take a look at the New Leads options (which can sometimes be missed). This will help you configure whether new leads for certain user types will go through lead routing or not.

You will want to reference Lead Routing Rules > Basic Settings for more information on how this works.

We have optimized Enterprise lead routing to make sure that leads can be distributed within the customizable hierarchy that can exist within Enterprise accounts.

The main setting that has been optimized is found under Settings > Lead Routing > Lead Options :

Here, you may decide if leads are routing via Company/Group/Personal lead routing rules or your lead routing rules:

Company Source

Use these options to customize how leads are routed if they enter via the Company Website. Here, you have the option to send leads through the Company scope lead routing or assign leads directly to the Company owner, listing agent, or agent whose profile the lead is registered through.

If the Company Website is toggled ON, leads will be routed via lead routing rules. If it is toggled OFF, leads will be assigned to the Company Owner.

Office Source

Use these options to customize how leads are routed if they enter via the Office Website.

Utilize the Advanced Settings if you would like to choose company vs. group differently for each of your groups:

Personal Source

Use this setting to customize whether leads from lead sources integrated by individual users should be routed via company lead routing or personal lead routing:

Click to set the lead routing scope for Third Party Providers and Lead Imported from Open API:

Here, specific lead sources that are connected via email parsing or integration can be routed either by Company or Personal Lead Routing scope:

## Scope

Lead routing rules are located in Settings > Lead Routing

Once on this page, you will notice there is a drop-down at the left panel. This drop-down allows you to narrow down the scope of what tier the lead routing rules are set up for. By selecting the group you would like to look at, the lead routing rules established for that office will be displayed on this page. Lead routing rules can be set up for every individual group.

## Adding a Rule

You need to select the correct profile scope on the left panel before creating a new lead routing rule. To add a rule, click on the + Add New button at the top:

Reference Lead Routing Rules for more instructions on how to set up the lead routing rules.

If, as outlined above, you selected a scope for a group that has subgroups, you will be presented with another drop-down menu where you will be asked to choose the Assignment Level :

- Office . Choose any groups that are nested under the group selected in the Scope at the top of the rule.
- Agent . Select any individual agent that forms part of the group selected in the Scope at the top of the rule.
- Lead Pond . Select any of the available lead ponds set up under Settings > Lead Pond .

If you choose "Group" as the Assignment Level , you will only be able to use the "Round Robin" distribution method (reference Lead Routing Rules for more information) because the other options do not work logically with assigning to a group level. The other options will all be greyed out.

Choosing the "Agent" option for Assignment Level will allow you to use all distribution methods (reference Lead Routing Rules for more information). You will be able to choose all the individual agents that you want to have on the distribution list.

As mentioned above, if "Lead Pond" is selected for Assignment Level , you will simply choose ONE option from a list of all available lead ponds:

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
Lead routing is an important topic to be aware of when distributing incoming leads to companies, offices, and individual agents depending on their source. Most of the lead routing logic associated with the Enterprise product is the same as it is for current broker editions of Lofty. Please take some time to review the following article for more context:
Lead Routing Rules (https://help.lofty.com/hc/en-us/articles/360055177831)
. This article will only address the differences between what is outlined in that article and what is available in the Enterprise product.
Summary
Edit Permissions (#h_01FGW0ZBPJXRMMQ9T6X1ZZ02DS)
Basic Settings (#h_01FHQYSNASJFQG6MVQ81FMTWAS)
Scope (#h_01FGVY3F86W5AM1QHPH0K89PTF)
Adding a Rule (#h_01FGVY3JVFSGNJ7X8BEGT52ERD)
Edit Permissions
Users with the "Manage Lead Distribution —— Entire Company" permission can manage the lead routing rules for the entire account and every group.
Users with the "Manage Lead Distribution —— User's Office" permission can only manage the lead routing rules for their own office and any sub-offices.
See
Enterprise Edition - Permissions (https://help.lofty.com/hc/en-us/articles/4407530443291)
for more information.
Personal Lead Routing
Personal Lead Routing rules allow you to set up routing for your own, personal leads. Access the Personal Lead Routing rules by selecting your Personal settings and select Lead routing:
These rules are set up the same as Company/Office lead routing rules, but will only apply to leads that enter the Lofty platform as your personal leads, such as leads from your agent website or subdomain.
Click Lead Options to set up default routing for leads from common sources:
Company/Office Lead Routing
Navigate to your Company/Office settings to access the Company/Office level lead routing rules:
Lead Options will allow you to set up some default routing on the Company/Office level lead sources:
Basic Settings
As you are getting started with lead routing, be sure to take a look at the
New Leads
options (which can sometimes be missed). This will help you configure whether new leads for certain user types will go through lead routing or not.
You will want to reference
Lead Routing Rules > Basic Settings (https://help.lofty.com/hc/en-us/articles/360055177831-Lead-Routing-Rules#h_cc8dd69e-44e7-4bb5-88cd-eaea4c62b318)
for more information on how this works.
We have optimized Enterprise lead routing to make sure that leads can be distributed within the customizable hierarchy that can exist within Enterprise accounts.
The main setting that has been optimized is found under
Settings
>
Lead Routing
>
Lead Options
:
Here, you may decide if leads are routing via Company/Group/Personal lead routing rules or your lead routing rules:
Company Source
Use these options to customize how leads are routed if they enter via the Company Website. Here, you have the option to send leads through the Company scope lead routing or assign leads directly to the Company owner, listing agent, or agent whose profile the lead is registered through.
If the Company Website is toggled ON, leads will be routed via lead routing rules. If it is toggled OFF, leads will be assigned to the Company Owner.
Office Source
Use these options to customize how leads are routed if they enter via the Office Website.
Utilize the
Advanced Settings
if you would like to choose company vs. group differently for each of your groups:
Personal Source
Use this setting to customize whether leads from lead sources integrated by individual users should be routed via company lead routing or personal lead routing:
Click to set the lead routing scope for Third Party Providers and Lead Imported from Open API:
Here, specific lead sources that are connected via email parsing or integration can be routed either by Company or Personal Lead Routing scope:
Scope
Lead routing rules are located in
Settings
>
Lead Routing
Once on this page, you will notice there is a drop-down at the left panel. This drop-down allows you to narrow down the scope of what tier the lead routing rules are set up for. By selecting the group you would like to look at, the lead routing rules established for that office will be displayed on this page. Lead routing rules can be set up for every individual group.
Adding a Rule
You need to select the correct profile scope on the left panel before creating a new lead routing rule. To add a rule, click on the
+ Add New
button at the top:
Reference
Lead Routing Rules (https://help.lofty.com/hc/en-us/articles/360055177831)
for more instructions on how to set up the lead routing rules.
If, as outlined above, you selected a scope for a group that has subgroups, you will be presented with another drop-down menu where you will be asked to choose the
Assignment Level
:
Office
. Choose any groups that are nested under the group selected in the
Scope
at the top of the rule.
Agent
. Select any individual agent that forms part of the group selected in the
Scope
at the top of the rule.
Lead Pond
. Select any of the available lead ponds set up under
Settings
>
Lead Pond
.
If you choose "Group" as the
Assignment Level
, you will only be able to use the "Round Robin" distribution method (reference
Lead Routing Rules (https://help.lofty.com/hc/en-us/articles/360055177831)
for more information) because the other options do not work logically with assigning to a group level. The other options will all be greyed out.
Choosing the "Agent" option for
Assignment Level
will allow you to use all distribution methods (reference
Lead Routing Rules (https://help.lofty.com/hc/en-us/articles/360055177831)
for more information). You will be able to choose all the individual agents that you want to have on the distribution list.
As mentioned above, if "Lead Pond" is selected for
Assignment Level
, you will simply choose ONE option from a list of all available lead ponds:
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

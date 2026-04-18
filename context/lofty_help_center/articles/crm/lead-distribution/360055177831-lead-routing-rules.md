# Lead Routing Rules

- Article ID: `360055177831`
- Category: `CRM`
- Section: `Lead Distribution`
- Updated: `2025-11-07T06:30:49Z`
- Source: https://help.lofty.com/hc/en-us/articles/360055177831-Lead-Routing-Rules

## Body

## Introduction

With agent lead routing rules, you can automatically route incoming leads to specific agents based on location, source, tag, segment, the existence of a phone number, lead type, or price range.

- Some common lead routing questions have been addressed in a separate article that can be accessed here: Agent Lead Routing FAQ .
- If you already have rules set up but want to find out why a lead did or did not follow a specific lead routing rule, please refer to the following article: Lead Routing Logs .
- If you have an Enterprise account, please see our article on Enterprise Lead Routing .

*IMPORTANT : Only those who are Team Owners/Admins or those with the "Team Features" permission (see Team Permissions ) will have access to add/edit Team/Company/Group lead routing rules.

## Summary

- Flowchart
- Basic Settings
- Personal Lead Routing Rules New Lead Options How To Set Up Lead Routing Rules Third-party providers and Open API
- How to Add New Agent Lead Routing Rules
- How to Edit / Pause / Reorder / Delete Agent Lead Routing Rules
- Agent Lead Routing Rule Specifics Rule Name Location Source Tags & Segments Phone Pricing Lead Type Active Hours Assign Rule (1) Round Robin & (2) Next-Up Assignment Methods (3) Blast Alert Assignment Method (4) Lead Pond Assignment Method
- Lead Routing Notifications
- Working Hours & Vacation Mode
- Default Rule
- Lead Routing Rule Order
- Lead Routing to Different Roles
- Lead Routing and Auto Emails
- Personal Lead Routing Rules

## Flowchart

Use the below flowchart to get a general idea of what happens to leads as they enter the Lofty platform and are passed through rules. This process will make more sense as you review the rest of the content in the article.

## Basic Settings

Only leads that come in as "Team Leads" will be routed through agent lead routing rules. Personal Leads will not (see Lead Privacy: Team Leads vs. Personal Leads ).

There is also a setting to control whether the Team Owner/Admin's leads or all team members' leads (brought in from their corresponding lead capture settings) will be sent through agent lead routing or not.

Here is where that is edited:

1. Navigate to Settings
2. Click on Lead Routing under Lead Distribution
3. Click the blue Lead Options button

Here, you may decide if leads are routing via Team/Company/Office lead routing rules or the Personal lead routing rules:

## Personal Lead Routing Rules

Lofty CRM gives you the ability to set up your lead routing rules. These are rules that will only apply to your leads. By default, these leads will be assigned to the agent who owns the lead source, but rules could be set up to assign these leads to other members of the Lofty account.

To set up a personal lead routing rule, select " Personal " in the left panel then start adding your new lead routing rule.

Note: If you do not have permission to set up Team/Company/Group lead routing rules, the only scope available will be Personal Routing.

### New Lead Options

A ll Lofty users regardless of permission level will have access to lead routing settings. However, anyone without the Manage Lead Distribution (Enterprise)/Team Features (Team) permission enabled can only set up lead routing rules for leads coming from his/her "Personal" lead capture sources. This allows them to assign leads from their lead capture source to another agent on your account.

The New Lead Options have been redefined by the scope of the lead:

- Company/Team Source: Company/Team website By default, leads will be routed at the Company/Team level
- Office Source (Enterprise): Office Website You have the option to route leads at the Company level, the Office level, or access the advanced settings:

Within the Advanced Settings, leads from an Office's website may be routed either at that Office level or at the Company level:

Personal Source

- Zillow . Refers to leads that come in via the Zillow integration. See Zillow Integration . If you want to route by rules set up at Zillow, be sure to toggle this OFF Third-party Providers . Refers to all lead capture sources that are done via email parsing. See Lead Capture/Email Parsing Leads imported from Open API. Refer to leads that come in via Open API calling by third parties. Open House . Leads that sign up on an Open House form. See Open House Forms for more information. Zapier . Leads that enter the system for the Team Owner/Admin via Zapier. See Zapier Integration for more information. Facebook Ads-Lead Form . Leads that enter the system via the Facebook Lead Form integration. Learn more in this article: Facebook Lead Form Ads + Lofty Integration Social Studio. When enabled, leads that enter the system via a Social Studio post will be routed according to the lead routing rules set here, not via the rule set on the Landing Page that the social post directed the lead to. Note: Support to set the Routing option separately for each Third-party lead channel.

A key setting to be aware of is found under "Team Owner's Leads" and allows for leads that enter Lofty on the Team Website to be automatically assigned to the listing agent for that specific listing. This will only work if that agent is a user of this specific team and has their MLS Agent ID set up (see the "MLS Agent ID" section under Complete your Lofty Profile ).

### How To Set Up Lead Routing Rules

Every Lofty user, regardless of permission level, now can set their lead routing rules. Lofty users with Manage Lead Distribution (Enterprise)/Team Features (Team) permission enabled can set up the Company and Office level lead routing rules.

- What users with Lead distribution-Entire Company permission can set: New lead options： Company Source Office Source Personal Source Routing Rules： Company-Level Routing Rules Office Level Routing Rules Personal Routing Rules
- What users with Lead distribution-User's Group permission can set: New lead options： Personal Source Routing Rules： Office Level Routing Rules Personal Routing Rules
- What users with no Lead distribution permission can set: New lead options： Personal Source Routing Rules Personal Routing Rules

### Third-party providers and Open API

By default, new lead options for third-party providers and open API will be set to your Routing . That is, leads from these sources will automatically be assigned to you. If you want these leads to process through lead routing to be assigned to another user, you may click " Click to Set " to send these leads through either the Company/Team or Group level:

If you do not have any lead routing permissions enabled you can still set up lead routing rules. For these rules to allocate leads to other Lofty users on your account, you must set the scope for that lead source to either Company/Team or Office. The process for setting up lead routing rules is the same as any other Lofty account:

### How to Add New Lead Routing Rules

1. Navigate to Settings
2. Click on Lead Routing under Lead Distribution
3. Choose the tab for the role you want to set up rules for (Agent, Lender, Assistant, Custom Roles, etc. You can add/edit/delete these roles under Settings > Agent > Agent Roles )
4. Click on the + Add New button to create a new rule

## How to Edit / Pause / Reorder / Delete Agent Lead Routing Rules

1. Navigate to Settings

2. Click on Lead Routing under Lead Distribution

3. Choose the tab for the role you want to set up rules for (Agent, Lender, Assistant, Custom Roles, etc. You can add/edit/delete these roles under Settings > Agent > Agent Roles ).

4. Adjust the rule by doing any of the following:

(a) Pause / Resume an agent lead routing rule

(b) Edit an agent lead routing rule

(c) Copy an agent lead routing rule

(d) Delete an agent lead routing rule

(e) Drag and drop to reorder agent lead routing rules (order is important with agent lead routing rules)

## Lead Routing Rule Specifics

These are the instructions on how to build out a lead routing rule. This can get complex because there is a lot of built-in logic that you may need to consider, but if you take it one piece at a time it should make sense.

### Rule Name

Give your agent lead routing rule a name that you will recognize so that you can easily access the right rule for future adjustments as necessary.

### Scope

Users with "Team Feature" permission - Will have a scope and support to choose team routing and personal routing options.

Every member without  "Team Feature" permission- Won't have a scope and create personal routing rules by default.

### Location

If you want to route leads by specific locations, use these fields:

The following location fields will update, based on if Canada or the United States is selected as the Country:

After filling in a specific location you must choose from one of two available options:

- Match Exactly . A lead will only be routed by this rule if the lead’s location criteria are an exact match for the location data above. For example, if I add a city, county, address, and zip code, ALL of them will have to match for this rule to apply. If one is empty, this rule would not apply to the lead.
- Empty or Match Exactly . This option is fairly complex in how it works. Every incoming lead will be compared against the location fields in this order: (a) street address, (b) zip code, (c) city, (d) county, and (e) state. Depending on the result, the lead will either Pass one field and move to the next or will Fail and skip the entire lead routing rule. Here are the different scenarios that can occur: (a) Street Address Does the rule have an address? No Yes Yes No Does Lead have an address? No Yes No Yes -- Result Field (a) Passed . Compare to the field (b). 1. If the addresses match, field (a) is Passed . Compare to the field (b). 2. If addresses do not match, field (a) Failed . The lead will not be routed by this rule. Field (a) Failed . Lead will not be routed by this rule. Field (a) Passed . Compare to the field (b). (b) Zip Code Does the rule have a zip code? No Yes Yes No Does Lead have a zip code? No Yes No Yes -- Result Field (b) Passed . Compare to the field (c). 1. If the zip codes match, field (b) is Passed . Compare to the field (c). 2. If zip codes do not match, field (b) Failed . The lead will not be routed by this rule. 1. If the previous comparison (a) Passed , field (b) was also Passed . Compare to the field (c). 2. If the previous comparison (a) Failed , field (b) also Failed . The lead will not be routed by this rule. Field (b) Passed . Compare to the field (c). (c) City Does the rule have a city? No Yes Yes No Does Lead have a city? No Yes No Yes -- Result Field (c) Passed . Compare to field (d). 1. If the cities match, field (c) is Passed . Compare to field (d). 2. If cities do not match, field (c) Failed . The lead will not be routed by this rule. 1. If the previous comparisons (a) and (b) both Passed , field (c) also Passed . Compare to field (d). 2. If the previous comparison (b) Failed , field (c) also Failed . The lead will not be routed by this rule. Field (c) Passed . Compare to field (d). (d) County Does the rule have a county? No Yes Yes No Does Lead have a county? No Yes No Yes -- Result Field (d) Passed . Compare to the field (e). 1. If the counties matched, field (d) is Passed . Compare to the field (e). 2. If counties do not match, field (d) Failed . The lead will not be routed by this rule. 1. If the previous comparisons (a), (b), and (c) are all Passed , field (d) is also Passed . Compare to the field (e). 2. If the previous comparisons (a), (b), or (c) Failed , field (d) also Failed . The lead will not be routed by this rule. Field (d) Passed . Compare to the field (e). (e) State Does the rule have a state? No Yes Yes No Does Lead have a state? No Yes No Yes -- Result Field (e) Passed . The lead will be routed according to this rule. 1. If the states matched, field (e) is Passed . The lead will be routed according to this rule. 2. If states do not match, field (e) Failed . The lead will not be routed by this rule. 1. If the previous comparisons (a), (b), (c) and (d) all Passed , comparison (e) also Passed . The lead will be routed according to this rule. 2. If the previous comparisons (a), (b), (c) or (d) Failed , field (e) also Failed . The lead will not be routed by this rule. 1. If the previous comparisons (a), (b), (c) and (d) all Passed , comparison (e) also Passed . The lead will be routed according to this rule. 2. If the previous comparisons (a), (b), (c) or (d) Failed , field (e) also Failed . The lead will not be routed by this rule.

### Source

After selecting the source(s) from the list, you must choose from one of the two available options:

1. Match Exactly . A lead will have to be a match for the “source” field. This means that if a lead comes in that matches the “location” criteria but has a source that does not match the source setting, it will not be routed in this rule.
2. Empty or Match Exactly . A lead will be routed by this rule if the lead has no source specified or it matches the source. It does not have to have a defined source to match the rule with this option selected.

### Tags & Segments

For lead routing by tags or segments. . .

- if a lead comes in with even one of the tags/segments that is on the list, it will be captured by the rule. It's not a requirement for the lead to have all of them.
- you can only choose a maximum of 500 tags After selecting the tags/segments from the list, you must choose from one of the two available options: Match Exactly . A lead will have to be a match for the “tag/ segment” field. This means that if a lead comes in that matches the “tag/segment” criteria but has another tag/segment that does not match the tag/segment set, it will not be routed in this rule. Empty or Match Exactly . A lead will be routed by this rule if the lead has no tag/segment specified or matches the tag/segment. It does not have to have a defined tag/segment to match the rule with the option selected.

### Phone

For lead routing by phone, there are only two options:

1. with phone number and
2. without phone number

Use this option if you want to filter out leads that have (or do not have) phone numbers.

### Pricing

If you want to route a lead based on the price associated with any inquiries that they have associated with their lead record when they enter the CRM, you can use the min/max fields to define a price range. If the inquiry price falls within that range, the lead will match this rule assuming all other criteria have been met as well.

### Lead Type

If you would like to route your leads based on the type of lead they are, you can use this drop-down menu. If the lead type does not matter, be sure to select Include one of and check the box next to each lead type.

The Lead Type filter allows you to be very specific with the types of leads a lead routing rule will apply to.

- Include all The Lead Routing rule will apply to leads who have all of the selected lead types and will apply if the lead has other lead types as well.
- Include one of The Lead Routing rule will apply to leads who have one of the selected lead types and will apply if the lead has other lead types.
- Equals to The Lead Routing rule will only apply to leads who have all of the selected lead types. If they do not have all of the selected lead types, the lead routing rule will not apply. If they have one of the selected lead types, but also have an unselected lead type, the lead routing rule will not apply.

### Active Hours

Applies to . . .

- Agent Lead Routing (this article)
- Lender Lead Routing
- Custom Role Lead Routing

Does not apply to . . .

- Enterprise Lead Routing
- Re-Routing Groups

Use this setting to set a specific schedule for a lead routing rule. With a schedule set, if a lead enters the CRM at a time/day that is outside of a rule's "Active Hours," that rule will not apply to the new lead. In other words, if a lead matches all the above criteria (location, price, source, etc.) but comes in at a time that is outside of the "Active Hours," it will skip that rule.

Here is what that setting looks like inside of an individual lead routing rule:

- Active Hours
- Active Days
- If outside of active hours and days, then. . . Go to the next rule ( currently the only option)

Once established, the active hours are listed at the top-right of each rule when looking at the lead routing rules summary page:

### Assign Rule

At this point in building an agent lead routing rule, you will select a method to be used to assign leads to agents on the team. Lofty provides four methods for actually distributing the leads to your team.

1. Round Robin . Leads are assigned directly to the agents according to the rule.
2. Next Up . Similar to Round Robin, leads are assigned directly to the agents according to the rule. However, the agent has to claim the lead within a certain period or it moves to the next person in the rule. See below for specifics.
3. Blast Alert . The lead is "blasted" out to everyone and the first one to claim it gets it. See below for specifics.
4. Lead Pond . The lead is added directly to the indicated lead pond. See below for specifics.

You will first choose the assignment method you want to use and then you will select the assignees:

*IMPORTANT :

- Not every Lofty package has all four assigned rule options. If you do not see one of the four options available in your lead routing settings it is because you do not have access to that option without upgrading to a higher package.
- Adding users to a rule that already exists will reset the order of lead distribution.
- Removing users from a rule that already exists will reset the order of lead distribution.

#### (1) Round Robin & (2) Next-Up Assignment Methods

As mentioned above, these two methods are very similar to each other. Here are the differences:

- Round Robin Directly assign incoming leads to assignees one by one as listed in the assignee's section of the rule. With this option, the receiving agent does not have to “claim” the lead within a specific period. Instead, the lead is directly assigned to them.
- Next Up Just like Round Robin except the receiving agent does have to "claim" the lead by making contact with them (start making a call through Lofty, sending a text/email, adding a note, or changing a pipeline status, segment, or tag) within the defined amount of time in the setting. If the receiving agent does not "claim" the lead within the given time, the lead will be sent to the next person who should receive it.

If you want to get in the weeds and understand the exact logic in place behind the scenes, we will do our best to give you that context in the following article: In-Depth: Round Robin & Next Up . Keep in mind that it can be a bit confusing so you might need to re-read that content multiple times to get there.

#### (3) Blast Alert Assignment Method

With Blast Alert, an email, web, and app push notification will go out to all those mentioned in the “Assign To” section of the rule. The notification will say there is a new lead to a claim. The first recipient to claim the lead by clicking the “Claim” button from a notification will be the one to receive it. The period will require that lead to being claimed by someone in this rule within the designated time before it will move to the next rule (or the default rule as the catch-all). As this is sent to everyone at once, there is no percentage (%) to determine who would get more.

#### (4) Lead Pond Assignment Method

With this option, you can assign leads that apply to this lead routing rule directly to a lead pond. You can give certain users on your team access to specific lead ponds, those with access to a pond will all receive notifications of a new lead being added, and anyone with access to that pond can claim the lead at any time. For more information regarding lead ponds, please see Lead Pond .

## Lead Routing Notifications

If you would like to see what lead notifications look like when received by the agents on your team, please see the following article: Lead Routing Notifications .

## Working Hours & Vacation Mode

A Team Owner/Admin can set “Working Hours” or toggle “Vacation Mode” for every user under Settings > users > Agent List > Working Hours . Agent lead routing rules will not distribute leads to agents who are not in their working hours or have “Vacation Mode” toggled on. If all agents in a rule are not in their working hours, the next applicable rule would grab the lead, or it would end up at the Default Rule.

Individual agents can also control their “Working Hours” or “Vacation Mode” in Settings > Profile > Working Hours .

Along with working hours, be sure to make sure everyone has the same time zone for lead distribution to be accurate:

## Default Rule

The Default Rule is the “catch-all” rule that will take effect if the lead matches no other criteria from the previous rules on the list. If no rules are created, the default rule will route the incoming leads. Click the edit button to update the default rule. The default rule is found at the very bottom of the “Agent Routing” page and includes the following rules to distribute:

- Assign Directly You can choose to assign directly to a specific user or a specific lead pond (see Lead Pond )
- Next Up or Blast Alert If either of these two options is selected, leads can be distributed by these two methods but only to those who are not added in any of the previous lead routing rules that come before the Default Rule.

## Lead Routing Rule Order

All lead routing rules are listed under Settings > Lead Routing . The order of these rules does matter. This means that a lead will be compared against rule #1 first. If it matches, it will follow that criterion. If not, it will move to rules #2, #3, etc. With that in mind, you can prioritize the rule by putting it at the top (see How to Edit / Pause / Reorder / Delete Agent Lead Routing Rules ).

## Lead Routing to Different Roles

Lofty also has the feature to lead routes to any of the different roles available on a lead. The default roles are the following:

- Agent
- Assistant
- Lender

Up to ten additional roles can be created by the Team Owner/Admin under Settings > Agent > Agent Roles (see Custom Roles ). Any additional role that is listed here will appear in the lead profile page under the “Assigned To” section and a lead routing rule can be set up to assign a use to that slot. The same options are available under each role (lender must be sent to a lender-type account) and can be adjusted by selecting the name of the role and setting up the rule. These are optional and do not have to be set up.

*Please note that currently there is no way for a husband/wife or another duo (or more) relationship to be automatically assigned to every lead together. The lead routing rules for the assistant or other custom roles can be used to automatically add users to those slots, but it will not take into consideration what is happening in the other rules.

## Lead Routing and Auto Emails

The following are only sent after lead routing is complete and a person is in the primary "Agent" role of a lead profile. The emails will be sent by the individual in the "Agent" role of a lead profile. You will want to keep this in mind when setting up lead routing rules because any delays in the lead routing to distribute leads will keep these from being sent.

- Welcome Email
- Welcome Text
- Smart Plan Emails / Texts
- Property Alerts
- AI Assistant Engagement

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
With agent lead routing rules, you can automatically route incoming leads to specific agents based on location, source, tag, segment, the existence of a phone number, lead type, or price range.
Some common lead routing questions have been addressed in a separate article that can be accessed here:
Agent Lead Routing FAQ (https://help.lofty.com/hc/en-us/articles/360042342411)
.
If you already have rules set up but want to find out why a lead did or did not follow a specific lead routing rule, please refer to the following article:
Lead Routing Logs (https://help.lofty.com/hc/en-us/articles/360033311952)
.
If you have an Enterprise account, please see our article on
Enterprise Lead Routing (https://help.lofty.com/hc/en-us/articles/4407645128347)
.
*IMPORTANT
: Only those who are Team Owners/Admins or those with the "Team Features" permission (see
Team Permissions (https://help.lofty.com/hc/en-us/articles/360055290451)
) will have access to add/edit Team/Company/Group lead routing rules.
Summary
Flowchart (#h_01EFQ1FMPE1VVWP3BD66BCF36Q)
Basic Settings (#h_cc8dd69e-44e7-4bb5-88cd-eaea4c62b318)
Personal Lead Routing Rules (#h_01GXV6NE5J2ZA2D0C39VMV1Y68)
New Lead Options (#h_01GYB4YP45XDNQ7HHGH9VT9SW7)
How To Set Up Lead Routing Rules (#id-4/10/2023:FeatureReleaseTrainingforChime3.62-HowToSetUpLeadRoutingRules)
Third-party providers and Open API (#h_01GYB4ZPXPBEFWQAPX92QFM6JX)
How to Add New Agent Lead Routing Rules (#h_603c347d-73fe-4820-82ed-8b60c6128153)
How to Edit / Pause / Reorder / Delete Agent Lead Routing Rules (#h_779bfd4f-279b-4d8b-8ffb-b81587d288d1)
Agent Lead Routing Rule Specifics (#h_8577f46e-1f5a-4e84-8130-9a436685c8ca)
Rule Name (#h_01EVWEVSZCC7XBK1XKBEDMPCM1)
Location (#h_01EVWEW3ZVT69A21RFAT5730ZA)
Source (#h_01EVWEWA1K3H6ZN7426AWQM001)
Tags & Segments (#h_01EVWF12K41ZTS76RTA7G3EYFW)
Phone (#h_01EVWF16M8B9RGHMXT6PCAYGQR)
Pricing (#h_01F9CMGA94ZKRV8BBSNWQV7VBN)
Lead Type (#h_01F9CMGF6ZN26ZMSJVCK4BKR1Z)
Active Hours (#h_01F9M5BVDG27YXMSVG03Q8NYSE)
Assign Rule (#h_d9f2f930-e850-4f86-b085-7ec348462b3e)
(1) Round Robin & (2) Next-Up Assignment Methods (#h_01EFQNJPH8JAGHRTK0MDKRXAV8)
(3) Blast Alert Assignment Method (#h_01ED4K5N3HCTRYT8TGXBA7RQ0P)
(4) Lead Pond Assignment Method (#id-3/4/2021:LeadRoutingRules-(4)LeadPondAssignmentMethod)
Lead Routing Notifications (#h_01EFQ5AWQHTR0GZRBPQCWK5218)
Working Hours & Vacation Mode (#h_c490d153-897e-4a37-b807-c5b93b27bbe4)
Default Rule (#h_6d8413cc-bbda-4fee-9eb9-3475654d8b95)
Lead Routing Rule Order (#h_f7269de0-6fa1-4c9f-9803-7d19400b644e)
Lead Routing to Different Roles (#h_51bdb737-791a-49df-aad8-89442b53c66d)
Lead Routing and Auto Emails (#h_5dffbbfe-738b-46c9-a5aa-48bac4962f7d)
Personal Lead Routing Rules (#h_01GXV6NE5J2ZA2D0C39VMV1Y68)
Flowchart
Use the below flowchart to get a general idea of what happens to leads as they enter the Lofty platform and are passed through rules. This process will make more sense as you review the rest of the content in the article.
Basic Settings
Only leads that come in as "Team Leads" will be routed through agent lead routing rules. Personal Leads will not (see
Lead Privacy: Team Leads vs. Personal Leads (https://help.lofty.com/hc/en-us/articles/115003544406)
).
There is also a setting to control whether the Team Owner/Admin's leads or all team members' leads (brought in from their corresponding lead capture settings) will be sent through agent lead routing or not.
Here is where that is edited:
Navigate to
Settings
Click on
Lead Routing
under
Lead Distribution
Click the blue
Lead Options
button
Here, you may decide if leads are routing via Team/Company/Office lead routing rules or the Personal lead routing rules:
Personal Lead Routing Rules
Lofty CRM gives you the ability to set up your lead routing rules. These are rules that will only apply to your leads. By default, these leads will be assigned to the agent who owns the lead source, but rules could be set up to assign these leads to other members of the Lofty account.
To set up a personal lead routing rule, select "
Personal
" in the left panel then start adding your new lead routing rule.
Note:
If you do not have permission to set up Team/Company/Group lead routing rules, the only scope available will be Personal Routing.
New Lead Options
A
ll Lofty users
regardless of permission level will have access to lead routing settings. However, anyone without the Manage Lead Distribution (Enterprise)/Team Features (Team) permission enabled can only set up lead routing rules for leads coming from his/her "Personal" lead capture sources. This allows them to assign leads from their lead capture source to another agent on your account.
The New Lead Options have been redefined by the scope of the lead:
Company/Team Source:
Company/Team website
By default, leads will be routed at the Company/Team level
Office Source (Enterprise):
Office Website
You have the option to route leads at the Company level, the Office level, or access the advanced settings:
Within the Advanced Settings, leads from an Office's website may be routed either at that Office level or at the Company level:
Personal Source
Zillow
. Refers to leads that come in via the Zillow integration. See
Zillow Integration (https://help.lofty.com/hc/en-us/articles/115000320103)
. If you want to route by rules set up at Zillow, be sure to toggle this OFF
Third-party Providers
. Refers to all lead capture sources that are done via email parsing. See
Lead Capture/Email Parsing (https://help.lofty.com/hc/en-us/articles/115003438011)
Leads imported from Open API.
Refer to leads that come in via Open API calling by third parties.
Open House
. Leads that sign up on an Open House form. See
Open House Forms (https://help.lofty.com/hc/en-us/articles/360023770952)
for more information.
Zapier
. Leads that enter the system for the Team Owner/Admin via Zapier. See
Zapier Integration (https://help.lofty.com/hc/en-us/articles/360054865532)
for more information.
Facebook Ads-Lead Form
. Leads that enter the system via the Facebook Lead Form integration. Learn more in this article:
Facebook Lead Form Ads + Lofty Integration (https://help.lofty.com/hc/en-us/articles/360054921612)
Social Studio.
When enabled, leads that enter the system via a Social Studio post will be routed according to the lead routing rules set here, not via the rule set on the Landing Page that the social post directed the lead to.
Note: Support to set the Routing option separately for each Third-party lead channel.
A key setting to be aware of is found under "Team Owner's Leads" and allows for leads that enter Lofty on the Team Website to be automatically assigned to the listing agent for that specific listing. This will only work if that agent is a user of this specific team and has their MLS Agent ID set up (see the "MLS Agent ID" section under
Complete your Lofty Profile (https://help.lofty.com/hc/en-us/articles/218007123)
).
How To Set Up Lead Routing Rules
Every Lofty user, regardless of permission level, now can set their lead routing rules. Lofty users with Manage Lead Distribution (Enterprise)/Team Features (Team) permission enabled can set up the Company and Office level lead routing rules.
What users with
Lead distribution-Entire Company
permission can set:
New lead options：
Company Source
Office Source
Personal Source
Routing Rules：
Company-Level Routing Rules
Office Level Routing Rules
Personal Routing Rules
What users with
Lead distribution-User's Group
permission can set:
New lead options：
Personal Source
Routing Rules：
Office Level Routing Rules
Personal Routing Rules
What users with
no
Lead distribution permission can set:
New lead options：
Personal Source
Routing Rules
Personal Routing Rules
Third-party providers and Open API
By default, new lead options for third-party providers and open API will be set to your
Routing
. That is, leads from these sources will automatically be assigned to you. If you want these leads to process through lead routing to be assigned to another user, you may click "
Click to Set
" to send these leads through either the
Company/Team or Group
level:
If you do not have any lead routing permissions enabled you can still set up lead routing rules. For these rules to allocate leads to other Lofty users on your account, you must set the scope for that lead source to either Company/Team or Office. The process for setting up lead routing rules is the same as any other Lofty account:
How to Add New Lead Routing Rules
Navigate to
Settings
Click on
Lead Routing
under
Lead Distribution
Choose the tab for the role you want to set up rules for (Agent, Lender, Assistant, Custom Roles, etc. You can add/edit/delete these roles under
Settings
>
Agent
>
Agent Roles
)
Click on the
+ Add New
button to create a new rule
How to Edit / Pause / Reorder / Delete Agent Lead Routing Rules
1. Navigate to
Settings
2. Click on
Lead Routing
under
Lead Distribution
3. Choose the tab for the role you want to set up rules for (Agent, Lender, Assistant, Custom Roles, etc. You can add/edit/delete these roles under
Settings
>
Agent
>
Agent Roles
).
4. Adjust the rule by doing any of the following:
(a) Pause / Resume an agent lead routing rule
(b) Edit an agent lead routing rule
(c) Copy an agent lead routing rule
(d) Delete an agent lead routing rule
(e) Drag and drop to reorder agent lead routing rules (order is important with agent lead routing rules)
Lead Routing Rule Specifics
These are the instructions on how to build out a lead routing rule. This can get complex because there is a lot of built-in logic that you may need to consider, but if you take it one piece at a time it should make sense.
Rule Name
Give your agent lead routing rule a name that you will recognize so that you can easily access the right rule for future adjustments as necessary.
Scope
Users with "Team Feature" permission - Will have a scope and support to choose team routing and personal routing options.
Every member without  "Team Feature" permission- Won't have a scope and create personal routing rules by default.
Location
If you want to route leads by specific locations, use these fields:
The following location fields will update, based on if Canada or the United States is selected as the Country:
After filling in a specific location you must choose from one of two available options:
Match Exactly
. A lead will only be routed by this rule if the lead’s location criteria are an exact match for the location data above. For example, if I add a city, county, address,
and
zip code, ALL of them will have to match for this rule to apply. If one is empty, this rule would not apply to the lead.
Empty or Match Exactly
. This option is fairly complex in how it works. Every incoming lead will be compared against the location fields in this order: (a) street address, (b) zip code, (c) city, (d) county, and (e) state. Depending on the result, the lead will either
Pass
one field and move to the next or will
Fail
and skip the entire lead routing rule. Here are the different scenarios that can occur:
(a) Street Address
Does the rule have an address?
No
Yes
Yes
No
Does Lead have an address?
No
Yes
No
Yes
-- Result
Field (a)
Passed
. Compare to the field (b).
1. If the addresses match, field (a) is
Passed
. Compare to the field (b).
2. If addresses do
not
match, field (a)
Failed
. The lead will
not
be routed by this rule.
Field (a)
Failed
. Lead will
not
be routed by this rule.
Field (a)
Passed
. Compare to the field (b).
(b) Zip Code
Does the rule have a zip code?
No
Yes
Yes
No
Does Lead have a zip code?
No
Yes
No
Yes
-- Result
Field (b)
Passed
. Compare to the field (c).
1. If the zip codes match, field (b) is
Passed
. Compare to the field (c).
2. If zip codes do
not
match, field (b)
Failed
. The lead will
not
be routed by this rule.
1. If the previous comparison (a)
Passed
, field (b) was also
Passed
. Compare to the field (c).
2. If the previous comparison (a)
Failed
, field (b) also
Failed
. The lead will
not
be routed by this rule.
Field (b)
Passed
. Compare to the field (c).
(c) City
Does the rule have a city?
No
Yes
Yes
No
Does Lead have a city?
No
Yes
No
Yes
-- Result
Field (c)
Passed
. Compare to field (d).
1. If the cities match, field (c) is
Passed
. Compare to field (d).
2. If cities do
not
match, field (c)
Failed
. The lead will
not
be routed by this rule.
1. If the previous comparisons (a) and (b) both
Passed
, field (c) also
Passed
. Compare to field (d).
2. If the previous comparison (b)
Failed
, field (c) also
Failed
. The lead will
not
be routed by this rule.
Field (c)
Passed
. Compare to field (d).
(d) County
Does the rule have a county?
No
Yes
Yes
No
Does Lead have a county?
No
Yes
No
Yes
-- Result
Field (d)
Passed
. Compare to the field (e).
1. If the counties matched, field (d) is
Passed
. Compare to the field (e).
2. If counties do
not
match, field (d)
Failed
. The lead will
not
be routed by this rule.
1. If the previous comparisons (a), (b), and (c) are all
Passed
, field (d) is also
Passed
. Compare to the field (e).
2. If the previous comparisons (a), (b), or (c)
Failed
, field (d) also
Failed
. The lead will
not
be routed by this rule.
Field (d)
Passed
. Compare to the field (e).
(e) State
Does the rule have a state?
No
Yes
Yes
No
Does Lead have a state?
No
Yes
No
Yes
-- Result
Field (e)
Passed
. The lead will be routed according to this rule.
1. If the states matched, field (e) is
Passed
. The lead will be routed according to this rule.
2. If states do
not
match, field (e)
Failed
. The lead will
not
be routed by this rule.
1. If the previous comparisons (a), (b), (c) and (d) all
Passed
, comparison (e) also
Passed
. The lead will be routed according to this rule.
2. If the previous comparisons (a), (b), (c) or (d)
Failed
, field (e) also
Failed
. The lead will
not
be routed by this rule.
1. If the previous comparisons (a), (b), (c) and (d) all
Passed
, comparison (e) also
Passed
. The lead will be routed according to this rule.
2. If the previous comparisons (a), (b), (c) or (d)
Failed
, field (e) also
Failed
. The lead will
not
be routed by this rule.
Source
After selecting the source(s) from the list, you must choose from one of the two available options:
Match Exactly
. A lead will have to be a match for the “source” field. This means that if a lead comes in that matches the “location” criteria but has a source that does
not
match the source setting, it will not be routed in this rule.
Empty or Match Exactly
. A lead will be routed by this rule if the lead has no source specified
or
it matches the source. It does not have to have a defined source to match the rule with this option selected.
Tags & Segments
For lead routing by tags or segments. . .
if a lead comes in with even one of the tags/segments that is on the list, it will be captured by the rule. It's not a requirement for the lead to have all of them.
you can only choose a maximum of 500 tags
After selecting the tags/segments from the list, you must choose from one of the two available options:
Match Exactly
. A lead will have to be a match for the “tag/ segment” field. This means that if a lead comes in that matches the “tag/segment” criteria but has another tag/segment that does
not
match the tag/segment set, it will not be routed in this rule.
Empty or Match Exactly
. A lead will be routed by this rule if the lead has no tag/segment specified
or
matches the tag/segment. It does not have to have a defined tag/segment to match the rule with the option selected.
Phone
For lead routing by phone, there are only two options:
with phone number and
without phone number
Use this option if you want to filter out leads that have (or do not have) phone numbers.
Pricing
If you want to route a lead based on the price associated with any inquiries that they have associated with their lead record when they enter the CRM, you can use the min/max fields to define a price range. If the inquiry price falls within that range, the lead will match this rule assuming all other criteria have been met as well.
Lead Type
If you would like to route your leads based on the type of lead they are, you can use this drop-down menu. If the lead type does not matter, be sure to select
Include one of
and check the box next to each lead type.
The Lead Type filter allows you to be very specific with the types of leads a lead routing rule will apply to.
Include all
The Lead Routing rule will apply to leads who have all of the selected lead types and will apply if the lead has other lead types as well.
Include one of
The Lead Routing rule will apply to leads who have one of the selected lead types and will apply if the lead has other lead types.
Equals to
The Lead Routing rule will only apply to leads who have
all
of the selected lead types.
If they do not have all of the selected lead types, the lead routing rule will not apply.
If they have one of the selected lead types, but also have an unselected lead type, the lead routing rule will not apply.
Active Hours
Applies to
. . .
Agent Lead Routing (this article)
Lender Lead Routing (https://help.lofty.com/hc/en-us/articles/360043413891)
Custom Role Lead Routing (#h_51bdb737-791a-49df-aad8-89442b53c66d)
Does
not
apply to
. . .
Enterprise Lead Routing (https://help.lofty.com/hc/en-us/articles/115000018223)
Re-Routing Groups (https://help.lofty.com/hc/en-us/articles/360061564771)
Use this setting to set a specific schedule for a lead routing rule. With a schedule set, if a lead enters the CRM at a time/day that is outside of a rule's "Active Hours," that rule will not apply to the new lead. In other words, if a lead matches all the above criteria (location, price, source, etc.) but comes in at a time that is outside of the "Active Hours," it will skip that rule.
Here is what that setting looks like inside of an individual lead routing rule:
Active Hours
Active Days
If outside of active hours and days, then. . .
Go to the next rule (
currently
the only option)
Once established, the active hours are listed at the top-right of each rule when looking at the lead routing rules summary page:
Assign Rule
At this point in building an agent lead routing rule, you will select a method to be used to assign leads to agents on the team.
Lofty provides four methods for actually distributing the leads to your team.
Round Robin
. Leads are assigned directly to the agents according to the rule.
Next Up
. Similar to Round Robin, leads are assigned directly to the agents according to the rule. However, the agent has to claim the lead within a certain period or it moves to the next person in the rule. See
below (#h_8577f46e-1f5a-4e84-8130-9a436685c8ca)
for specifics.
Blast Alert
. The lead is "blasted" out to everyone and the first one to claim it gets it. See
below (#h_01ED4K5N3HCTRYT8TGXBA7RQ0P)
for specifics.
Lead
Pond
. The lead is added directly to the indicated lead pond. See
below (#id-3/4/2021:LeadRoutingRules-(4)LeadPondAssignmentMethod)
for specifics.
You will first choose the assignment method you want to use and then you will select the assignees:
*IMPORTANT
:
Not every Lofty package has all four assigned rule options. If you do not see one of the four options available in your lead routing settings it is because you do not have access to that option without upgrading to a higher package.
Adding users to a rule that already exists will reset the order of lead distribution.
Removing users from a rule that already exists will reset the order of lead distribution.
(1) Round Robin & (2) Next-Up Assignment Methods
As mentioned above, these two methods are very similar to each other. Here are the differences:
Round Robin
Directly assign incoming leads to assignees one by one as listed in the assignee's section of the rule. With this option, the receiving agent does
not
have to “claim” the lead within a specific period. Instead, the lead is directly assigned to them.
Next Up
Just like Round Robin except the receiving agent
does
have to "claim" the lead by making contact with them (start making a call through Lofty, sending a text/email, adding a note, or changing a pipeline status, segment, or tag) within the defined amount of time in the setting. If the receiving agent does not "claim" the lead within the given time, the lead will be sent to the next person who should receive it.
If you want to get in the weeds and understand the exact logic in place behind the scenes, we will do our best to give you that context in the following article:
In-Depth: Round Robin & Next Up (https://help.lofty.com/hc/en-us/articles/360047876811)
. Keep in mind that it can be a bit confusing so you might need to re-read that content multiple times to get there.
(3) Blast Alert Assignment Method
With Blast Alert, an email, web, and app push notification will go out to all those mentioned in the “Assign To” section of the rule. The notification will say there is a new lead to a claim. The first recipient to claim the lead by clicking the “Claim” button from a notification will be the one to receive it. The period will require that lead to being claimed by someone in this rule within the designated time before it will move to the next rule (or the default rule as the catch-all). As this is sent to everyone at once, there is no percentage (%) to determine who would get more.
(4) Lead Pond Assignment Method
With this option, you can assign leads that apply to this lead routing rule directly to a lead pond. You can give certain users on your team access to specific lead ponds, those with access to a pond will all receive notifications of a new lead being added, and anyone with access to that pond can claim the lead at any time. For more information regarding lead ponds, please see
Lead Pond (https://help.lofty.com/hc/en-us/articles/360038382872)
.
Lead Routing Notifications
If you would like to see what lead notifications look like when received by the agents on your team, please see the following article:
Lead Routing Notifications (https://help.lofty.com/hc/en-us/articles/360047834731)
.
Working Hours & Vacation Mode
A Team Owner/Admin can set “Working Hours” or toggle “Vacation Mode” for every user under
Settings
>
users
>
Agent List
>
Working Hours
. Agent lead routing rules will not distribute leads to agents who are not in their working hours or have “Vacation Mode” toggled on. If all agents in a rule are not in their working hours, the next applicable rule would grab the lead, or it would end up at the Default Rule.
Individual agents can also control their “Working Hours” or “Vacation Mode” in
Settings
>
Profile
>
Working Hours
.
Along with working hours, be sure to make sure everyone has the same time zone for lead distribution to be accurate:
Default Rule
The Default Rule is the “catch-all” rule that will take effect if the lead matches no other criteria from the previous rules on the list. If no rules are created, the default rule will route the incoming leads. Click the edit button to update the default rule. The default rule is found at the very bottom of the “Agent Routing” page and includes the following rules to distribute:
Assign Directly
You can choose to assign directly to a specific user or a specific lead pond (see
Lead Pond (https://help.lofty.com/hc/en-us/articles/360038382872)
)
Next Up or Blast Alert
If either of these two options is selected, leads can be distributed by these two methods but
only
to those who are not added in
any
of the previous lead routing rules that come before the Default Rule.
Lead Routing Rule Order
All lead routing rules are listed under
Settings
>
Lead Routing
. The order of these rules
does
matter. This means that a lead will be compared against rule #1 first. If it matches, it will follow that criterion. If not, it will move to rules #2, #3, etc. With that in mind, you can prioritize the rule by putting it at the top (see
How to Edit / Pause / Reorder / Delete Agent Lead Routing Rules (#h_779bfd4f-279b-4d8b-8ffb-b81587d288d1)
).
Lead Routing to Different Roles
Lofty also has the feature to lead routes to any of the different roles available on a lead. The default roles are the following:
Agent
Assistant
Lender
Up to ten
additional
roles can be created by the Team Owner/Admin under
Settings
>
Agent
>
Agent Roles
(see
Custom Roles (https://help.lofty.com/hc/en-us/articles/360028073892)
).
Any additional role that is listed here will appear in the lead profile page under the “Assigned To” section and a lead routing rule can be set up to assign a use to that slot. The same options are available under each role (lender must be sent to a lender-type account) and can be adjusted by selecting the name of the role and setting up the rule. These are optional and do
not
have to be set up.
*Please note that
currently
there is no way for a husband/wife or another duo (or more) relationship to be automatically assigned to every lead together. The lead routing rules for the assistant or other custom roles can be used to automatically add users to those slots, but it will not take into consideration what is happening in the other rules.
Lead Routing and Auto Emails
The following are only sent
after
lead routing is complete and a person is in the primary "Agent" role of a lead profile. The emails will be sent by the individual in the "Agent" role of a lead profile. You will want to keep this in mind when setting up lead routing rules because any delays in the lead routing to distribute leads will keep these from being sent.
Welcome Email
Welcome Text
Smart Plan Emails / Texts
Property Alerts
AI Assistant Engagement
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

# Smart Plan Builder

- Article ID: `45537578767643`
- Category: `CRM`
- Section: `Smart Plan`
- Updated: `2026-03-31T18:55:23Z`
- Source: https://help.lofty.com/hc/en-us/articles/45537578767643-Smart-Plan-Builder

## Body

## Introduction

A Lofty Smart Plan is a robust lead-nurturing feature that combines email drip campaigns with tasks to help you communicate with your leads continuously. This article will review how to create, edit, and manage your Smart Plans.

## Summary

- Where are the Smart Plans?
- Smart Plan Organization
- How to Create a New Smart Plan
- Smart Plan Steps
- Editing Smart Plans
- Applying and Removing Smart Plans

## Where are the Smart Plans?

Navigate to Automation > Smart Plans.

## Smart Plan Organization

### Smart Plans

Depending on the type of Lofty account you are on, you may see options for My Smart Plans, Office Smart Plans, or Company Smart Plans. These are Smart Plans that have been created on your Lofty account, for use with your leads.

If Auto-Apply is turned ON, then the Smart Plan will automatically run for any applicable leads in your Lofty CRM. Auto-Apply can be enabled on your own Smart Plans, as well as on Office/Company Smart Plans.

### Smart Plan Library

The Smart Plan Library is full of templates that can be imported into "My Smart Plans" or "Office/Company Smart Plans".

To find the Library, navigate to Automation > Smart Plans > Library.

## How to Create a New Smart Plan

When creating a new Smart Plan, you have two options:

- Start From Scratch: Build your plan step‑by‑step on the flow canvas.
- Start From a Template: Choose from pre‑built templates and customize as needed.

After choosing your starting point, you simply select a plan scope , then you are taken directly into the visual canvas to begin building. This eliminates the old multi‑step setup process and gets you into the builder immediately.

### Smart Plan Settings Panel

The first step when creating a new Smart Plan is the settings.

Here, you will give the Smart Plan a name, determine which leads the plan should apply to, set the Smart Plan scope, and set the conditions that will pause the Smart Plan.

#### Plan Scope

All Lofty users will have the option to create My Smart Plans. My Smart Plans can only be viewed, edited, and applied by the Agent who created them.

Company Smart Plans can be applied to the entire account. They are visible to all users. Users with the "Manage Template —— Entire Company" permission (see Organization - Permission Profiles ) can manage any Company Smart Plans.

Office Smart plans are visible to all users under the office and any sub-offices (if applicable). Users with the "Manage Template —— User's Office" permission can manage the Smart Plans for their office and any sub-offices.

#### Target Lead Type

This setting will determine what type of leads the Smart Plan will apply to. You can find the Lead Type in the leads profile details:

Multiple lead types can be selected. Be sure to set the application rules to capture the leads you are targeting with this Smart Plan. Here's how those settings work:

- Equals To : The Smart Plan will only apply to leads who have exactly the lead types selected. Example: Smart Plans with Lead Type set to " Equals to Buyer and Seller leads " will ONLY apply to leads that are both buyer and seller lead type.
- Include All : The Smart Plan will only apply to leads that have all of the selected lead types, even if they also have some other lead types. Example: Smart Plans with Lead Type set to " Include All Buyer leads " will apply to all leads with a buyer lead type and also include leads with a seller or other lead type.
- Include One Of : The Smart Plan will apply to leads who have one of the selected lead types. Example: Smart Plans with Lead Type set to " Include One Of Buyer, Seller, Investor Leads " will apply to any leads who have just one of those lead types.

#### Auto-Apply and Auto-Reapply

Enable auto-apply to have the Smart Plan automatically apply to any leads that meet the criteria. If auto-apply is not enabled, the Smart Plan will have to be manually applied every time you want to use it.

If Auto-Apply is enabled, you also have the option to enable "Auto Re-apply". The auto-reapply setting will allow this Smart Plan to automatically be re-applied to a lead that the Smart Plan has already run for if that lead meets the trigger conditions again.

#### Auto Pause

This setting automatically pauses the Smart Plan when the lead meets certain conditions.

- The lead responds/reaches out: This includes the lead sending an email to a Lofty user, calling a Lofty number, sending a text message to a Lofty number, and replying to the AI.
- The lead is added to a Segment: Add the Segment in this setting, and any leads who are added to this Segment will have the Smart Plan paused automatically.
- An outbound call is logged as "talked.": A call was made to the lead, and the call was marked as "talked" after the call in the dialer window.
- The lead's pipeline changes: The lead's pipeline was changed. Please note that the Smart Plan step action to "change pipeline" will also result in the pausing of this Smart Plan, in addition to manually changing a lead's pipeline stage.
- The tags that triggered the Smart Plan are deleted: When the tags are added to trigger the Smart Plan in the application conditions are removed/deleted
- The "source" of the lead changes: When the source of the lead is changed after the Smart Plan is applied

## Smart Plan Steps

### Triggers

The Triggers indicate how/when the Smart Plan will be applied and to what leads.

Triggers fall into two main categories:

#### Lead‑Based Triggers

Examples include:

- Lead Created: The Smart Plan will run automatically when the lead is newly created in the CRM
- Lead Assignment Changed: The Smart Plan will run automatically when any lead role is manually assigned or reassigned
- Pipeline Changed: The Smart Plan will run automatically when the lead's pipeline is changed
- Tag Changed: The Smart Plan will run automatically when tags are added or removed from the lead
- Segment Changed: The Smart Plan will run automatically when the lead is added or removed from a Segment
- Contact Permission Changed: The Smart Plan will run automatically when the lead contact permission is changed
- Website Activity: The Smart Plan will run automatically, dependent on the lead's website behavior
- Lead Meets Specified Criteria: This is a flexible trigger that allows you to set specific criteria

#### Event or Date‑Based Triggers

- Communication Event (formerly “Instant Interaction”)
- Holidays (e.g., New Year, Christmas, Valentine’s Day)
- Lead Date
- Transaction Date
- Other Dates , including fixed calendar dates

These triggers give you options to automate communication at exactly the right time.

Triggers can be set anytime in the Smart Plan to give you control over when each action takes place.

#### Conditions

Conditions set the timing logic in your Smart Plan. Actions run immediately, so all delays and branching behavior are added through conditions.

##### Available Conditions

Wait a Period of Time: Determine how long to wait before the action takes place

Wait Until a Specific Date: Provides precise timing control for important messages. Choose from:

- A specific calendar date
- Lead Date
- Transaction Date
- Holiday
- Day of week or month
- Specific time

Branch (Multi‑Path Logic): Allows your plan to follow different paths based on lead criteria.

Key features of Branch Conditions:

- Supports AND/OR logic
- Conditions checked in order
- Default “Not Met” branch included
- Enables advanced filtering and personalization

Wait Until an Event (Advanced): This condition pauses the plan until a specific event occurs, such as:

- Email Events : opened, replied, bounced
- Text Events : replied
- Call Events : inbound/outbound behaviors
- Lead Meets a Condition : custom criteria with optional fallback timeout

The system can automatically create “Event Met” and “Event Not Met” branches based on what happens.

### Actions

Smart Plan Actions are the texts, emails, and tasks that are generated by your Smart Plan. All available Smart Plan actions are defined below:

##### Communication Actions

- Auto Email: Automatically sends an email to the lead.
- Auto Text: Automatically sends a text to the lead.
- Postcard: Design and automatically send a postcard to leads. You can design and pay for the postcard here as well. Learn More: Self-Service Mail / Mailers
- Letter: Design and automatically send a letter to leads. You can design and pay for the letter here as well. Learn More: Self-Service Mail / Mailers
- Notification: Sends an email to a specified email address or Lofty user
- Buyer Property Alert: To set up a property alert, you will need to set the search criteria while creating the Smart Plan.

##### Manage Tasks and Plans

- Email: Create a task to email the lead.
- Text: Creates a task to text the lead.
- Call: Create a task to call the lead.
- Custom Task (Other): Creates a general task. You can choose what the task is for.
- Checklist: Creates a list of tasks to be completed. You can assign tasks to any role that is under the lead.

##### Update Lead

- Change Pipeline: Automatically moves the lead to the pipeline selected.
- Change Segment: Automatically add/remove the lead from a segment.
- Change Tag: Automatically add/remove a tag from a lead.
- Reassignment Group: This is a great option for any Lofty users who want to mass reassign their leads. As a refresher, the Reassignment Groups Help Center article is here: Reassignment Groups
- Add Note: Add a note to the lead's profile, with the option to pin the note to the top of the page.

##### AI Actions

- Sales Agent Action: Choose an action you want the AI Sales Agent to take (monitor the lead's behavior or mute the Sales Agent).

##### Automate and Integrate

- Start Smart Plan: Automatically start a new Smart Plan. You can have multiple Smart Plans running so if there are additional steps after the "start Smart Plan" step, the current Smart Plan will continue.
- Zapier Zap: Triggers a Zapier Zap.  Learn More: Zapier Zaps + Smart Plans
- Slybroadcast: Slybroadcast is a service that can be used to send pre-recorded “ringless voicemails”. You will only see this option if you are subscribed to Slybroadcast. Learn More: Slybroadcast Integration

## Editing Smart Plans

To edit any Smart Plan, click on the settings gear to the right.

Keep in mind that you can only edit Company or Office Smart Plans if you have the correct permissions enabled. This is because changing the Company or Office Smart Plans will affect the whole account.

##### Editing a Smart Plan that is currently applied to a lead

When editing Smart Plans, keep in mind how this will affect the leads that are actively enrolled in the Smart Plan. Please see these scenarios below:

The edited section has not been completed by the lead

- The Smart Plan will resume as normal and the lead will encounter the newly edited portion of the Smart Plan

The edited section has been completed/The section added has been passed by the lead

- The lead will not encounter to the newly edited section of the Smart Plan. The Smart Plan will not start over and the edited section will only apply to new leads or leads who have not reached this section yet.

If the Smart Plan you edited was removed from any lead

- The Smart Plan will not auto-apply to that lead again. It will need to be manually added.

## Applying and Removing Smart Plans

Smart Plans can be automatically or manually applied to leads.

Auto-Apply

Any Smart Plan that has "auto-apply" enabled will automatically apply to leads who meet the criteria. If auto-apply is disabled, you will need to manually apply the Smart Plan to leads.

Manually Applying

To manually apply a smart plan for multiple leads (not using auto-apply), navigate to the People Page and check the box next to the leads you want to apply a Smart Plan to. Select the More menu > Smart Plan > Add Smart Plan

Next, select the Smart Plan and click Apply

Smart Plans can also be manually applied from the lead's profile:

Removing

To remove a Smart Plan from all leads, click the Settings Cog Wheel > Remove from leads

Smart Plans can also be removed from multiple leads on the people page, using the same process as mass adding a Smart Plan.

Remove/delete the Smart Plan for an individual lead by hovering over the Smart Plan and clicking the trash can icon.

#### Pausing and Resuming Smart Plans

Pause any Smart Plans that you want to stop for a period of time so that you do not want the automations to continue. This could be if you are out of the office or taking time away from work. When you resume the Smart Plan, it will pick up right where it left off.

There are two ways to pause and resume your Smart Plans.

##### 1) Pause/Resume from the Smart Plan page

Navigate to Marketing → Automation → Smart Plans . Check the box next to the Smart Plan(s) you want to pause or resume. An option will be available at the top of the Smart Plan list to either pause or resume the selected Smart Plan(s).

The Smart Plans will pause/resume for all of the leads that are enrolled in that plan.

##### 2) Pause/Resume from the People page

Navigate to People Page → select the leads you want to pause/resume a Smart Plan → Click More → Select Smart Plan → Select the option you want .

The Smart Plans that are applied to the selected leads will be available in the pop-up. Select the plans that you want to pause/resume. This will pause/resume the selected Smart Plans only for the selected leads.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
A Lofty Smart Plan is a robust lead-nurturing feature that combines email drip campaigns with tasks to help you communicate with your leads continuously. This article will review how to create, edit, and manage your Smart Plans.
Summary
Where are the Smart Plans? (#h_01JPBBRYVHJWQ9TWQ1602BNC3H)
Smart Plan Organization (#h_01G8XJA10GTQ78EMXGDPJVNFAQ)
How to Create a New Smart Plan (#h_01KF3WFKQ86RV3THP6K5RJ3QA6)
Smart Plan Steps (#h_01KN2H4HM5VKDJKBA4R360CKMB)
Editing Smart Plans (#h_01G9JWHG19ZWVX8J5K65RW6YH1)
Applying and Removing Smart Plans (#h_01GBNEM94771JREMY2TBS0TS2S)
Where are the Smart Plans?
Navigate to
Automation > Smart Plans.
Smart Plan Organization
Smart Plans
Depending on the type of Lofty account you are on, you may see options for My Smart Plans, Office Smart Plans, or Company Smart Plans. These are Smart Plans that have been created on your Lofty account, for use with your leads.
If Auto-Apply is turned ON, then the Smart Plan will automatically run for any applicable leads in your Lofty CRM. Auto-Apply can be enabled on your own Smart Plans, as well as on Office/Company Smart Plans.
Smart Plan Library
The Smart Plan Library is full of templates that can be imported into "My Smart Plans" or "Office/Company Smart Plans".
To find the Library, navigate to
Automation > Smart Plans > Library.
How to Create a New Smart Plan
When creating a new Smart Plan, you have two options:
Start From Scratch:
Build your plan step‑by‑step on the flow canvas.
Start From a Template:
Choose from pre‑built templates and customize as needed.
After choosing your starting point, you simply select a
plan scope
, then you are taken directly into the visual canvas to begin building. This eliminates the old multi‑step setup process and gets you into the builder immediately.
Smart Plan Settings Panel
The first step when creating a new Smart Plan is the settings.
Here, you will give the Smart Plan a name, determine which leads the plan should apply to, set the Smart Plan scope, and set the conditions that will pause the Smart Plan.
Plan Scope
All Lofty users will have the option to create My Smart Plans.
My Smart Plans
can only be viewed, edited, and applied by the Agent who created them.
Company Smart Plans
can be applied to the entire account. They are visible to all users. Users with the "Manage Template —— Entire Company" permission (see
Organization - Permission Profiles (https://help.lofty.com/hc/en-us/articles/4407530443291)
) can manage any Company Smart Plans.
Office Smart plans
are visible to all users under the office
and
any sub-offices (if applicable). Users with the "Manage Template —— User's Office" permission can manage the Smart Plans for their office and any sub-offices.
Target Lead Type
This setting will determine what type of leads the Smart Plan will apply to. You can find the Lead Type in the leads profile details:
Multiple lead types can be selected. Be sure to set the application rules to capture the leads you are targeting with this Smart Plan. Here's how those settings work:
Equals To
: The Smart Plan will only apply to leads who have exactly the lead types selected.
Example: Smart Plans with Lead Type set to "
Equals to Buyer and Seller leads
" will ONLY apply to leads that are
both
buyer and seller lead type.
Include All
: The Smart Plan will only apply to leads that have all of the selected lead types, even if they also have some other lead types.
Example: Smart Plans with Lead Type set to "
Include All Buyer leads
" will apply to all leads with a buyer lead type and also include leads with a seller or other lead type.
Include One Of
: The Smart Plan will apply to leads who have one of the selected lead types.
Example: Smart Plans with Lead Type set to "
Include One Of Buyer, Seller, Investor Leads
" will apply to any leads who have just one of those lead types.
Auto-Apply and Auto-Reapply
Enable auto-apply to have the Smart Plan automatically apply to any leads that meet the criteria. If auto-apply is not enabled, the Smart Plan will have to be manually applied every time you want to use it.
If Auto-Apply is enabled, you also have the option to enable "Auto Re-apply". The auto-reapply setting will allow this Smart Plan to automatically be re-applied to a lead that the Smart Plan has already run for if that lead meets the trigger conditions again.
Auto Pause
This setting automatically pauses the Smart Plan when the lead meets certain conditions.
The lead responds/reaches out:
This includes the lead sending an email to a Lofty user, calling a Lofty number, sending a text message to a Lofty number, and replying to the AI.
The lead is added to a Segment:
Add the Segment in this setting, and any leads who are added to this Segment will have the Smart Plan paused automatically.
An outbound call is logged as "talked.":
A call was made to the lead, and the call was marked as "talked" after the call in the dialer window.
The lead's pipeline changes:
The lead's pipeline was changed. Please note that the Smart Plan step action to "change pipeline" will also result in the pausing of this Smart Plan, in addition to manually changing a lead's pipeline stage.
The tags that triggered the Smart Plan are deleted:
When the tags are added to trigger the Smart Plan in the application conditions are removed/deleted
The "source" of the lead changes:
When the source of the lead is changed after the Smart Plan is applied
Smart Plan Steps
Triggers
The Triggers indicate how/when the Smart Plan will be applied and to what leads.
Triggers fall into two main categories:
Lead‑Based Triggers
Examples include:
Lead Created:
The Smart Plan will run automatically when the lead is newly created in the CRM
Lead Assignment Changed:
The Smart Plan will run automatically when any lead role is
manually
assigned or reassigned
Pipeline Changed:
The Smart Plan will run automatically when the lead's pipeline is changed
Tag Changed:
The Smart Plan will run automatically when tags are added or removed from the lead
Segment Changed:
The Smart Plan will run automatically when the lead is added or removed from a Segment
Contact Permission Changed:
The Smart Plan will run automatically when the lead contact permission is changed
Website Activity:
The Smart Plan will run automatically, dependent on the lead's website behavior
Lead Meets Specified Criteria:
This is a flexible trigger that allows you to set specific criteria
Event or Date‑Based Triggers
Communication Event
(formerly “Instant Interaction”)
Holidays
(e.g., New Year, Christmas, Valentine’s Day)
Lead Date
Transaction Date
Other Dates
, including fixed calendar dates
These triggers give you options to automate communication at exactly the right time.
Triggers can be set anytime in the Smart Plan to give you control over when each action takes place.
Conditions
Conditions set the timing logic in your Smart Plan. Actions run immediately, so all delays and branching behavior are added through conditions.
Available Conditions
Wait a Period of Time:
Determine how long to wait before the action takes place
Wait Until a Specific Date:
Provides precise timing control for important messages.
Choose from:
A specific calendar date
Lead Date
Transaction Date
Holiday
Day of week or month
Specific time
Branch (Multi‑Path Logic):
Allows your plan to follow different paths based on lead criteria.
Key features of Branch Conditions:
Supports AND/OR logic
Conditions checked in order
Default “Not Met” branch included
Enables advanced filtering and personalization
Wait Until an Event (Advanced):
This condition pauses the plan until a specific event occurs, such as:
Email Events
: opened, replied, bounced
Text Events
: replied
Call Events
: inbound/outbound behaviors
Lead Meets a Condition
: custom criteria with optional fallback timeout
The system can automatically create “Event Met” and “Event Not Met” branches based on what happens.
Actions
Smart Plan Actions are the texts, emails, and tasks that are generated by your Smart Plan. All available Smart Plan actions are defined below:
Communication Actions
Auto Email:
Automatically sends an email to the lead.
Auto Text:
Automatically sends a text to the lead.
Postcard:
Design and automatically send a postcard to leads. You can design and pay for the postcard here as well. Learn More:
Self-Service Mail / Mailers (https://help.lofty.com/hc/en-us/articles/360058318632)
Letter:
Design and automatically send a letter to leads. You can design and pay for the letter here as well. Learn More:
Self-Service Mail / Mailers (https://help.lofty.com/hc/en-us/articles/360058318632)
Notification:
Sends an email to a specified email address or Lofty user
Buyer Property Alert:
To set up a property alert, you will need to set the search criteria while creating the Smart Plan.
Manage Tasks and Plans
Email:
Create a task to email the lead.
Text:
Creates a task to text the lead.
Call:
Create a task to call the lead.
Custom Task (Other):
Creates a general task. You can choose what the task is for.
Checklist:
Creates a list of tasks to be completed. You can assign tasks to any role that is under the lead.
Update Lead
Change Pipeline:
Automatically moves the lead to the pipeline selected.
Change Segment:
Automatically add/remove the lead from a segment.
Change Tag:
Automatically add/remove a tag from a lead.
Reassignment Group:
This is a great option for any Lofty users who want to mass reassign their leads. As a refresher, the Reassignment Groups Help Center article is here:
Reassignment Groups (https://help.lofty.com/hc/en-us/articles/360061564771)
Add Note:
Add a note to the lead's profile, with the option to pin the note to the top of the page.
AI Actions
Sales Agent Action:
Choose an action you want the AI Sales Agent to take (monitor the lead's behavior or mute the Sales Agent).
Automate and Integrate
Start Smart Plan:
Automatically start a new Smart Plan. You can have multiple Smart Plans running so if there are additional steps after the "start Smart Plan" step, the current Smart Plan will continue.
Zapier Zap:
Triggers a Zapier Zap.  Learn More:
Zapier Zaps + Smart Plans (https://help.lofty.com/hc/en-us/articles/4414537621275)
Slybroadcast:
Slybroadcast is a service that can be used to send pre-recorded “ringless voicemails”. You will only see this option if you are subscribed to Slybroadcast. Learn More:
Slybroadcast Integration (https://help.lofty.com/hc/en-us/articles/40530886539803)
Editing Smart Plans
To edit any Smart Plan, click on the settings gear to the right.
Keep in mind that you can only edit Company or Office Smart Plans if you have the correct
permissions (https://help.lofty.com/hc/en-us/articles/4407530443291)
enabled. This is because changing the Company or Office Smart Plans will affect the whole account.
Editing a Smart Plan that is currently applied to a lead
When editing Smart Plans, keep in mind how this will affect the leads that are actively enrolled in the Smart Plan. Please see these scenarios below:
The edited section has not been completed by the lead
The Smart Plan will resume as normal and the lead will encounter the newly edited portion of the Smart Plan
The edited section has been completed/The section added has been passed by the lead
The lead will not encounter to the newly edited section of the Smart Plan. The Smart Plan will not start over and the edited section will only apply to new leads or leads who have not reached this section yet.
If the Smart Plan you edited was removed from any lead
The Smart Plan will not auto-apply to that lead again. It will need to be manually added.
Applying and Removing Smart Plans
Smart Plans can be automatically or manually applied to leads.
Auto-Apply
Any Smart Plan that has "auto-apply" enabled will automatically apply to leads who meet the criteria. If auto-apply is disabled, you will need to manually apply the Smart Plan to leads.
Manually Applying
To manually apply a smart plan for multiple leads (not using auto-apply), navigate to the
People Page
and check the box next to the leads you want to apply a Smart Plan to. Select the
More menu > Smart Plan > Add Smart Plan
Next, select the Smart Plan and click
Apply
Smart Plans can also be manually applied from the lead's profile:
Removing
To remove a Smart Plan from all leads, click the
Settings Cog Wheel > Remove
from leads
Smart Plans can also be removed from multiple leads on the people page, using the same process as mass adding a Smart Plan.
Remove/delete the Smart Plan for an individual lead by hovering over the Smart Plan and clicking the trash can icon.
Pausing and Resuming Smart Plans
Pause any Smart Plans that you want to stop for a period of time so that you do not want the automations to continue. This could be if you are out of the office or taking time away from work. When you resume the Smart Plan, it will pick up right where it left off.
There are two ways to pause and resume your Smart Plans.
1) Pause/Resume from the Smart Plan page
Navigate to
Marketing → Automation → Smart Plans
. Check the box next to the Smart Plan(s) you want to pause or resume. An option will be available at the top of the Smart Plan list to either pause or resume the selected Smart Plan(s).
The Smart Plans will pause/resume for all of the leads that are enrolled in that plan.
2) Pause/Resume from the People page
Navigate to
People Page → select the leads you want to pause/resume a Smart Plan → Click More → Select Smart Plan → Select the option you want
.
The Smart Plans that are applied to the selected leads will be available in the pop-up. Select the plans that you want to pause/resume. This will pause/resume the selected Smart Plans only for the selected leads.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

# Smart Plans FAQs

- Article ID: `4419016941083`
- Category: `CRM`
- Section: `Smart Plan`
- Updated: `2026-03-31T21:19:52Z`
- Source: https://help.lofty.com/hc/en-us/articles/4419016941083-Smart-Plans-FAQs

## Body

## Introduction

We get a lot of questions about our powerful tool, Smart Plans. Below is a great list of frequently asked questions about its usage. Looking for the main Smart Plans article? Go here !

## List of FAQs

1. If text messages are included in a Smart Plan and I reach my daily text limit for the day, does the Smart Plan pause, or does the text simply fail to send?
2. Is there a way to send the first auto email/text during a specific time range?
3. Is there a way to resubscribe leads to Smart Plans if the lead has accidentally unsubscribed?
4. Is there a limit to the number of Smart Plan steps that can be created?
5. When building a behavior-based Smart Plan using certain triggering behaviors, will the Smart Plan be triggered every time a lead leaves a message, saves a listing, etc.?
6. When editing a Smart Plan, what happens to Smart Plan-generated tasks that have not yet been marked as complete?
7. If my Smart Plan is set up to auto-apply to leads, but this isn't happening, what are some of the reasons this could be the case?
8. Why were texts/emails not sent out in the Smart Plan as they should have been?
9. Why is the Smart Plan paused with the error "Too many emails rejected"?
10. Can I copy/paste variables, or do they have to be added via the drop-down menu?
11. If the system has auto-paused Smart Plans, is there a way to restart them?
12. Can I have one Smart Plan trigger multiple times for closing dates?
13. Can I include a Lead's Family Member's email as well?
14. Can I re-add the Smart Plan to a lead?
15. Will automated texts from Smart Plans ALWAYS have the opt-out information at the end, or is it only with the first text sent?&nbsp;

#### If text messages are included in a Smart Plan and I reach my daily text limit for the day, does the Smart Plan pause, or does the text simply fail to send?

The Smart Plan will auto-pause and the plan will then auto-restart the following day at the same time that there are additional texts that have become available. For more information regarding text packages, see Add Call or Text Packages .

#### Is there a way to send the first auto email/text during a specific time range?

Yes, set the Condition before the Action.

#### Is there a way to resubscribe leads to Smart Plans if the lead has accidentally unsubscribed?

To resubscribe for the lead, go to Lead Profile > Smart Plans > Click on the gear icon at the top right. You can turn on the switch to resubscribe the lead to Smart Plans.

#### Is there a limit to the number of Smart Plan steps that can be created?

The Smart Plan will start with one step, and you can add up to 80 steps.

#### When building a behavior-based Smart Plan using certain triggering behaviors, will the Smart Plan be triggered every time a lead leaves a message, saves a listing, etc.?

No. The Smart Plan will only trigger one time based on the selected triggering behavior. It would only trigger again if it was deleted from a lead (must be done manually), and then the matching behavior occurred again. Also, keep in mind that the triggering behaviors have an OR relationship, which means that if a lead leaves a message requesting a showing or saves a listing, the criteria will be met. They do not have to do ALL of those (AND relationship) for the Smart Plan to trigger.

#### When editing a Smart Plan, what happens to Smart Plan-generated tasks that have not yet been marked as complete?

If a Smart Plan is edited (changing the Smart Plan name, editing a step, etc.) while there are still tasks on leads (created by that Smart Plan) that have not yet been marked as complete, the pending task will be deleted, and a new task (triggered by the same Smart Plan step) will be created. For example, a lead, Beth, has a Smart Plan applied to her. Step 6 of the Smart Plan has created a task, "Call lead to follow up," but this task has not yet been marked as complete. A Lofty user/agent edits the Smart Plan, resulting in the task "Call lead to follow up" being deleted and replaced with Task XYZ (Step 6 of the Smart Plan).

#### If my Smart Plan is set up to auto-apply to leads, but this isn't happening, what are some of the reasons this could be the case?

There could be multiple reasons that could cause this. Consider the following:

(a) Lead Type. Make sure to review the auto-apply criteria and that the lead type matches the lead that you expected the plan to apply to. If it does not matter, choose "All."

(b) Auto Apply Button. Make sure that the auto-apply button is turned on. This will indicate that the Smart Plan is set up to automatically apply to a lead. If it's not turned on, the plan will not automatically apply.

(c) Application Conditions. Review the application conditions

- Lead Created = When the lead is brand new and created within Lofty, this will trigger. You can use this to set up in combination with source/tag, etc., as well.
- Website Behavior = The plan will trigger when the lead has matched certain behaviors on your Lofty IDX website.
- Lead Assignment Changed = When the lead is reassigned to another individual on the team. Manually assigning/reassigning to any role of the lead will trigger the application of this condition.
- Lead Meets Specified Conditions = The plan will trigger when the lead matches the conditions that are selected. This trigger can apply to existing leads.
- Lead Contact Permission = The plan will trigger when the lead contact permission changes to match the setting.

(d) Time. Be sure to wait some time to see if the Smart Plan applies to a lead--especially if it is triggering based on site behaviors. The system might need a few minutes to catch up and match the website activity with a Smart Plan trigger.

#### Why were texts/emails not sent out in the Smart Plan as they should have been?

Consider the following potential reasons:

(a) Check the text package. In most cases, you have reached the daily text limit, so the auto texts failed to send. Normally, if this happens, the auto-texts will be sent the following day to continue the Smart Plan.

(b) Check subscription status (see Email Subscription Status ). If the lead is unsubscribed from Smart Plans, the emails will not be sent out.

(c) Email status. If the lead does not have an email address or the email address is marked as "bounced" or "invalid," the auto email will be skipped in the Smart Plan, and it will continue to the next step automatically.

(d) Phone status. If the lead does not have a phone number or the phone number is marked as "invalid," the auto text will be skipped in the Smart Plan, and the next step will continue automatically.

#### Why is the Smart Plan paused with the error "Too many emails rejected"?

This error would appear on a lead profile, under Smart Plans, and directly below the Smart Plan name.

This pause reason is that the agent/user has too many bounced emails (see Bounced Emails ). This agent/user will have their status marked as "bounced," and then the Smart Plans will pause automatically.

- This Smart Plan will need to be enabled manually when paused
- Wait two hours before reactivating
- We also recommend checking the lead's email address because if it's not valid, it will likely cause the same issue to happen again.

#### Can I copy/paste variables, or do they have to be added via the drop-down menu?

Yes, you can copy the variables as long as they are in the same format as those from the drop-down menu. For example, "#lead_name#" is the right format while "Lead_Name#" and "#lead-name#" and "{lead_name}" are all wrong. Use the drop-down and copy/paste directly from that example to be sure they will still work.

#### If the system has auto-paused Smart Plans, is there a way to restart them?

Yes, the Smart Plans can be resumed (a) using a built-in mass-resume feature or (b) manually resuming from a lead profile. Both cases are outlined in detail below.

(a) Situations where Smart Plans can be Mass-Resumed

- The assignee is inactive: "Auto paused due to the assignee's account being inactive."
- Auto-paused due to a lack of variable data, especially when using auto email or auto-text tasks
- Auto-paused due to an inactive website or lack of a website if website-specific variables are being used
- Auto-paused due to system reasons: "Auto paused due to system exceptions. Please contact customer support and provide the lead's name for diagnosis," or "Auto paused due to delivery service exceptions. Please complete the task manually to continue the smart plan."
- Auto-paused due to an invalid email address or phone number
- Too many emails have bounced, the service will stop working for two hours, and the Smart Plans will pause with the reason: "Too many emails rejected"

(b) Situations, where Smart Plans can be Manually Resumed

- Manually-paused: "This plan was paused manually."
- Paused due to Smart Plan setting:
- "Auto paused since the lead replied to emails"
- "Auto paused since the lead texts a Lofty number"
- "Auto paused because an outbound call was logged as 'Talked'"
- "Auto paused since the lead calls."
- "Auto paused due to pipeline change."
- The daily text limit has been reached: "You have exceeded the daily limit. This auto text is scheduled to be sent out at the same time tomorrow."
- Too many emails have bounced, the service will stop working for two hours, and the Smart Plans will pause with the reason: "Too many emails rejected" (see above)
- The assignee is inactive: "Auto paused due to the assignee's account being inactive."
- Auto-paused due to a lack of variable data, especially when using auto email or auto-text tasks
- Auto-paused due to an inactive website or lack of a website if website-specific variables are being used
- Auto-paused due to system reasons: "Auto paused due to system exceptions. Please contact customer support and provide the lead's name for diagnosis," or "Auto paused due to delivery service exceptions. Please complete the task manually to continue the smart plan."

#### Can I have one Smart Plan trigger multiple times for closing dates?

Yes, this is possible, but only when using "Recurring Plans," selecting "Closed Date," and then adding a transaction for each time you want it to repeat.

If set up correctly, every time a transaction has a "Closed Date" that is added and the other criteria is met, the Smart Plan will trigger (potentially multiple times if there are multiple transactions).

If you want to have this plan applied to leads that currently have transactions that match the criteria, you will want to turn this option on. However, in most scenarios, you will want the opposite so be sure to exclude currently applicable leads.

#### Can I include a Lead's Family Member's email as well?

Yes, you can CC all family members of a lead when using the Auto Email action in a Smart Plan:

#### Can I re-add the Smart Plan to a lead?

Yes , if "Auto Re-apply" is enabled on the Smart Plan, it will automatically apply to any leads that meet the conditions, regardless of whether the Smart Plan has been applied to them already or not. You can also manually reapply a Smart Plan to a lead.

#### Will automated texts from Smart Plans ALWAYS have the opt-out information at the end, or is it only with the first text sent?

Automated texts from Smart Plans will include opt-out information to ensure compliance and give recipients the option to unsubscribe. If a lead opts out, they will not receive any further automated texts or emails from the Smart Plans. This opt-out option is typically included with each automated communication to maintain transparency and compliance with communication regulations.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

Related terms: smart plan, smart plans, drip campaign

## Plain Text

Introduction
We get a lot of questions about our powerful tool, Smart Plans. Below is a great list of frequently asked questions about its usage. Looking for the main Smart Plans article? Go
here (https://help.lofty.com/hc/en-us/articles/7626737520923)
!
List of FAQs
If text messages are included in a Smart Plan and I reach my daily text limit for the day, does the Smart Plan pause, or does the text simply fail to send? (#h_01EVSPYTR1DTJF84VAV5YAKGTB)
Is there a way to send the first auto email/text during a specific time range? (#h_01EVSPZ2F05S2BZSPE2VQQ4G5T)
Is there a way to resubscribe leads to Smart Plans if the lead has accidentally unsubscribed? (#h_01EVSPZ5ZJPQ2KNBASRBQ4PD9D)
Is there a limit to the number of Smart Plan steps that can be created? (#h_01EVSPZ9TK2VRYN78NSTKJ0XB7)
When building a behavior-based Smart Plan using certain triggering behaviors, will the Smart Plan be triggered every time a lead leaves a message, saves a listing, etc.? (#h_01EVSPZDE56NVJ6JWA5YB20HZE)
When editing a Smart Plan, what happens to Smart Plan-generated tasks that have not yet been marked as complete? (#h_01EVSPZH4D3E9R0FCYZ7ZHDWAE)
If my Smart Plan is set up to auto-apply to leads, but this isn't happening, what are some of the reasons this could be the case? (#h_01EVSPZNP1TVGE02BCD30A0E7M)
Why were texts/emails not sent out in the Smart Plan as they should have been? (#h_01EVSPZT8H119F0BTK082DVYRQ)
Why is the Smart Plan paused with the error "Too many emails rejected"? (#h_01EVSEFE6Q1KWE8MG27CQFG558)
Can I copy/paste variables, or do they have to be added via the drop-down menu? (#h_01EVSQ038535KNVWT2SE8BVJYQ)
If the system has auto-paused Smart Plans, is there a way to restart them? (#h_01EVSQ0839BFKVAHXAXNF1WNB3)
Can I have one Smart Plan trigger multiple times for closing dates? (#h_01EVSQ0BFQ7MSGHTAFBP7Z9R9C)
Can I include a Lead's Family Member's email as well? (#h_01FGMJR2421DJ984S74FY6BAB4)
Can I re-add the Smart Plan to a lead? (#h_01HB6G7PK5XBZBPH85T5743J2P)
Will automated texts from Smart Plans ALWAYS have the opt-out information at the end, or is it only with the first text sent?&nbsp; (#h_01JQPWPM5B71BM0RMFXNQNKYMX)
If text messages are included in a Smart Plan and I reach my daily text limit for the day, does the Smart Plan pause, or does the text simply fail to send?
The Smart Plan will auto-pause and the plan will then auto-restart the following day at the same time that there are additional texts that have become available. For more information regarding text packages, see
Add Call or Text Packages (https://help.lofty.com/hc/en-us/articles/360054858692)
.
Is there a way to send the first auto email/text during a specific time range?
Yes, set the Condition before the Action.
Is there a way to resubscribe leads to Smart Plans if the lead has accidentally unsubscribed?
To resubscribe for the lead, go to
Lead Profile
>
Smart Plans
> Click on the gear icon at the top right. You can turn on the switch to resubscribe the lead to Smart Plans.
Is there a limit to the number of Smart Plan steps that can be created?
The Smart Plan will start with one step, and you can add up to
80
steps.
When building a behavior-based Smart Plan using certain triggering behaviors, will the Smart Plan be triggered every time a lead leaves a message, saves a listing, etc.?
No. The Smart Plan will only trigger one time based on the selected triggering behavior. It would only trigger again if it was deleted from a lead (must be done manually), and then the matching behavior occurred again. Also, keep in mind that the triggering behaviors have an OR relationship, which means that if a lead leaves a message requesting a showing or saves a listing, the criteria will be met. They do not have to do ALL of those (AND relationship) for the Smart Plan to trigger.
When editing a Smart Plan, what happens to Smart Plan-generated tasks that have not yet been marked as complete?
If a Smart Plan is edited (changing the Smart Plan name, editing a step, etc.) while there are still tasks on leads (created by that Smart Plan) that have not yet been marked as complete, the pending task will be deleted, and a new task (triggered by the same Smart Plan step) will be created. For example, a lead, Beth, has a Smart Plan applied to her. Step 6 of the Smart Plan has created a task, "Call lead to follow up," but this task has not yet been marked as complete. A Lofty user/agent edits the Smart Plan, resulting in the task "Call lead to follow up" being deleted and replaced with Task XYZ (Step 6 of the Smart Plan).
If my Smart Plan is set up to auto-apply to leads, but this isn't happening, what are some of the reasons this could be the case?
There could be multiple reasons that could cause this. Consider the following:
(a) Lead Type. Make sure to review the auto-apply criteria and that the lead type matches the lead that you expected the plan to apply to. If it does not matter, choose "All."
(b) Auto Apply Button. Make sure that the auto-apply button is turned on. This will indicate that the Smart Plan is set up to automatically apply to a lead. If it's not turned on, the plan will not automatically apply.
(c) Application Conditions. Review the application conditions
Lead Created
= When the lead is brand new and created within Lofty, this will trigger. You can use this to set up in combination with source/tag, etc., as well.
Website Behavior
= The plan will trigger when the lead has matched certain behaviors on your Lofty IDX website.
Lead Assignment Changed
= When the lead is reassigned to another individual on the team. Manually assigning/reassigning to any role of the lead will trigger the application of this condition.
Lead Meets Specified Conditions
= The plan will trigger when the lead matches the conditions that are selected. This trigger can apply to existing leads.
Lead Contact Permission
= The plan will trigger when the lead contact permission changes to match the setting.
(d) Time. Be sure to wait some time to see if the Smart Plan applies to a lead--especially if it is triggering based on site behaviors. The system might need a few minutes to catch up and match the website activity with a Smart Plan trigger.
Why were texts/emails not sent out in the Smart Plan as they should have been?
Consider the following potential reasons:
(a) Check the text package. In most cases, you have reached the daily text limit, so the auto texts failed to send. Normally, if this happens, the auto-texts will be sent the following day to continue the Smart Plan.
(b) Check subscription status (see
Email Subscription Status (https://help.lofty.com/hc/en-us/articles/360042326212)
). If the lead is unsubscribed from Smart Plans, the emails will not be sent out.
(c) Email status. If the lead does not have an email address or the email address is marked as "bounced" or "invalid," the auto email will be skipped in the Smart Plan, and it will continue to the next step automatically.
(d) Phone status. If the lead does not have a phone number or the phone number is marked as "invalid," the auto text will be skipped in the Smart Plan, and the next step will continue automatically.
Why is the Smart Plan paused with the error "Too many emails rejected"?
This error would appear on a lead profile, under Smart Plans, and directly below the Smart Plan name.
This pause reason is that the agent/user has too many bounced emails (see
Bounced Emails (https://help.lofty.com/hc/en-us/articles/360004120452)
). This agent/user will have their status marked as "bounced," and then the Smart Plans will pause automatically.
This Smart Plan will need to be enabled manually when paused
Wait two hours before reactivating
We also recommend checking the lead's email address because if it's not valid, it will likely cause the same issue to happen again.
Can I copy/paste variables, or do they have to be added via the drop-down menu?
Yes, you can copy the variables as long as they are in the same format as those from the drop-down menu. For example, "#lead_name#" is the right format while "Lead_Name#" and "#lead-name#" and "{lead_name}" are all wrong. Use the drop-down and copy/paste directly from that example to be sure they will still work.
If the system has auto-paused Smart Plans, is there a way to restart them?
Yes, the Smart Plans can be resumed (a) using a built-in mass-resume feature or (b) manually resuming from a lead profile. Both cases are outlined in detail below.
(a) Situations where Smart Plans can be
Mass-Resumed
The assignee is inactive: "Auto paused due to the assignee's account being inactive."
Auto-paused due to a lack of variable data, especially when using auto email or auto-text tasks
Auto-paused due to an inactive website or lack of a website if website-specific variables are being used
Auto-paused due to system reasons: "Auto paused due to system exceptions. Please contact customer support and provide the lead's name for diagnosis," or "Auto paused due to delivery service exceptions. Please complete the task manually to continue the smart plan."
Auto-paused due to an invalid email address or phone number
Too many emails have bounced, the service will stop working for two hours, and the Smart Plans will pause with the reason: "Too many emails rejected"
(b) Situations, where Smart Plans can be Manually Resumed
Manually-paused: "This plan was paused manually."
Paused due to Smart Plan setting:
"Auto paused since the lead replied to emails"
"Auto paused since the lead texts a Lofty number"
"Auto paused because an outbound call was logged as 'Talked'"
"Auto paused since the lead calls."
"Auto paused due to pipeline change."
The daily text limit has been reached: "You have exceeded the daily limit. This auto text is scheduled to be sent out at the same time tomorrow."
Too many emails have bounced, the service will stop working for two hours, and the Smart Plans will pause with the reason: "Too many emails rejected" (see above)
The assignee is inactive: "Auto paused due to the assignee's account being inactive."
Auto-paused due to a lack of variable data, especially when using auto email or auto-text tasks
Auto-paused due to an inactive website or lack of a website if website-specific variables are being used
Auto-paused due to system reasons: "Auto paused due to system exceptions. Please contact customer support and provide the lead's name for diagnosis," or "Auto paused due to delivery service exceptions. Please complete the task manually to continue the smart plan."
Can I have one Smart Plan trigger multiple times for closing dates?
Yes, this is possible, but only when using "Recurring Plans," selecting "Closed Date," and then adding a transaction for each time you want it to repeat.
If set up correctly, every time a transaction has a "Closed Date" that is added and the other criteria is met, the Smart Plan will trigger (potentially multiple times if there are multiple transactions).
If you want to have this plan applied to leads that
currently
have transactions that match the criteria, you will want to turn this option on. However, in most scenarios, you will want the opposite so be sure to
exclude
currently applicable leads.
Can I include a Lead's Family Member's email as well?
Yes, you can CC all family members of a lead when using the
Auto Email
action in a Smart Plan:
Can I re-add the Smart Plan to a lead?
Yes
, if "Auto Re-apply" is enabled on the Smart Plan, it will automatically apply to any leads that meet the conditions, regardless of whether the Smart Plan has been applied to them already or not. You can also manually reapply a Smart Plan to a lead.
Will automated texts from Smart Plans ALWAYS have the opt-out information at the end, or is it only with the first text sent?
Automated texts from Smart Plans will include opt-out information to ensure compliance and give recipients the option to unsubscribe. If a lead opts out, they will not receive any further automated texts or emails from the Smart Plans. This opt-out option is typically included with
each
automated communication to maintain transparency and compliance with communication regulations.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.
Related terms: smart plan, smart plans, drip campaign

# Lead Routing FAQs

- Article ID: `360042342411`
- Category: `CRM`
- Section: `Lead Distribution`
- Updated: `2025-11-07T06:33:27Z`
- Source: https://help.lofty.com/hc/en-us/articles/360042342411-Lead-Routing-FAQs

## Body

## Introduction

This article is to review some of the common questions/concerns related to lead routing within Lofty. For a detailed explanation of how the lead routing works, please review the following: Lead Routing Rules

## Summary

- #1: Why would a lead not go through lead routing?
- #2: When using Round Robin as the assignment method with the percentage divided equally for all agents, why is the distribution uneven?
- #3: Why was a lead distributed to certain people instead of others?
- #4: As an individual agent/user on the team (not an admin), why was the lead not assigned to me?
- #5: Is there a way to PAUSE lead routing at night and then have it RESUME again in the morning?
- #6: Is there a way to trigger lead routing again after a lead has already entered the CRM?
- #7: Is it possible to have an agent assigned to a lead as one of the "Custom Roles" based on who the assigned agent is?

## Questions and Answers

### #1: Why would a lead not go through lead routing?

There are four different reasons why a lead will not go through lead routing:

(a) Personal leads will not go through lead routing. Reference Lead Privacy: Team Leads vs. Private Leads for more information on the difference. Only Team Leads are sent through lead routing.

(b) Leads that are added manually will not go through lead routing. If you are adding a lead via this option in Lofty, it will not be sent through lead routing:

(c) If one of the toggle buttons in the lead routing settings is not turned on, new leads that fall into that category will not be sent through lead routing. Note: The routing log (see Lead Routing Logs ) will show "N: option unmatched" in this scenario.

(d) The "Assigned to the listing agent" switch is turned on. When the button is ON, if a new lead enters Lofty from a listing on the team IDX website, the lead will automatically be assigned to the listing agent for that specific listing.

### #2: When using Round Robin as the assignment method with the percentage divided equally for all agents, why is the distribution uneven?

Please check the working hours of the agent on your team. If the lead was supposed to be assigned to an agent who was not within their working hours, they would be skipped on the distribution list. You can also reference Working Hours & Vacation Mode for more information.

Please also be sure to have the individual agents check their time zone. The time is calculated by the working hours that are tied to the agent's time zone preferences. Differences between agents in their time zone settings could result in an uneven distribution of leads. The time zone is edited here:

### #3 : Why was a lead distributed to certain people instead of others?

There are three possible reasons for this:

- (a) If the lead routing rule is "Round Robin," check working hours as mentioned in question #2. When the lead is assigned to the agent, if the agent is not in their working hours, it will skip them and assign the lead to the next person in line.
- (b) If the lead routing method selected is "Next Up" or "Blast Alert," the agent who claims the lead is the one who gets the lead.
- (c) If both of the previous items are checked, take a look at the timeline for the lead. It might be that during the routing process a user with access to the lead manually assigned the lead, interrupting the lead routing.

You can also refer to this feature for additional information: Lead Routing Logs .

### #4: As an individual agent/user on the team (not an admin), why was the lead not assigned to me?

In addition to the above possibilities outlined in #1-#3, it might be that the Team Admin/Owner did not add you to the lead routing rules as this is not an automatic process and must be done manually. Check with your Team Admin/Owner to have them make sure you are included in any distribution rules that should apply to you.

### #5: Is there a way to PAUSE lead routing at night and then have it RESUME again in the morning?

No, currently there is no feature to pause lead routing during a specific schedule. As workarounds, we would recommend setting up your lead routing rules so that Next Up/Blast Alert rules (which require a lead to be claimed) are in place but then a catch-all Round Robin rule with the same assignees that does not require a lead to be claimed. Using this method, if a lead comes in during the middle of the night, it will trigger the Next Up/Blast Alert, but if an agent is not available to claim it, you can still distribute the lead without requiring it to be claimed by using Round Robin.

Keep in mind that you want to assign the lead to an agent as soon as possible because the Welcome Email (see Set Up the Welcome Email ) will not be sent until the assignment is final so it could deter the lead from accessing your site depending on the lead source.

### #6: Is there a way to trigger lead routing again after a lead has already entered the CRM?

Yes. See Re-Routing Groups .

### #7: Is it possible to have an agent assigned to a lead as one of the "Custom Roles" based on who the assigned agent is?

There is no way to just group two users together (for example a lead is assigned to User1 and you always want it to be assigned to User2 in the Assistant slot). This question is typically asked in the context of a husband/wife team, etc. This is not currently possible with lead routing.

What you can do, however, is create rules that are the exact same as those that assign a lead to the agent (For Agent) under each of the custom roles (For #custom_role#). For example, you can grab a source "Zillow," for example, and make sure it always goes to the same agent in the primary "Agent" slot. You could then copy then go to the lead routing rules for the "Assistant" or "Custom Role _____" and assign source "Zillow" to a specific person. That is not going to work for more complicated lead routing where you have multiple assignees for the primary Agent Slot, etc.

## More Information

As a reminder, a full outline of how lead routing works in Lofty can be found in the following article should you need to understand more about how lead routing works: Lead Routing Rules .

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
This article is to review some of the common questions/concerns related to lead routing within Lofty.
For a detailed explanation of how the lead routing works, please review the following:
Lead Routing Rules (https://help.lofty.com/hc/en-us/articles/360055177831)
Summary
#1: Why would a lead not go through lead routing? (#h_01EHDQHF90X2K9RNT7VJ7YZBT7)
#2: When using Round Robin as the assignment method with the percentage divided equally for all agents, why is the distribution uneven? (#h_01EHDQHM8HK4ZZFZ350D2BWGWQ)
#3: Why was a lead distributed to certain people instead of others? (#h_01EHDQHRG6FCQW25XQPX6111MH)
#4: As an individual agent/user on the team (not an admin), why was the lead not assigned to me? (#h_01EHDQHW8JGTPV7JSWW1ZD6Y4P)
#5: Is there a way to PAUSE lead routing at night and then have it RESUME again in the morning? (#h_01EHR0VH6N3KZSYYWVV4C0K9ZG)
#6: Is there a way to trigger lead routing again after a lead has already entered the CRM? (#h_01F65X02JSW3WKX2CXGHVR7TG4)
#7: Is it possible to have an agent assigned to a lead as one of the "Custom Roles" based on who the assigned agent is? (#h_01F8XE3KJ49ACH2NQBKGWEY9W0)
Questions and Answers
#1: Why would a lead
not
go through lead routing?
There are
four
different reasons why a lead will not go through lead routing:
(a) Personal leads will
not
go through lead routing. Reference
Lead Privacy: Team Leads vs. Private Leads (https://help.lofty.com/hc/en-us/articles/115003544406)
for more information on the difference. Only Team Leads are sent through lead routing.
(b) Leads that are added manually will
not
go through lead routing. If you are adding a lead via this option in Lofty, it will
not
be sent through lead routing:
(c) If one of the toggle buttons in the lead routing settings is not turned on, new leads that fall into that category will
not
be sent through lead routing. Note: The routing log (see
Lead Routing Logs (https://help.lofty.com/hc/en-us/articles/360033311952)
) will show "N: option unmatched" in this scenario.
(d) The "Assigned to the listing agent" switch is turned on. When the button is ON, if a new lead enters Lofty from a listing on the team IDX website, the lead will automatically be assigned to the listing agent for that specific listing.
#2: When using Round Robin as the assignment method with the percentage divided equally for all agents, why is the distribution uneven?
Please check the working hours of the agent on your team. If the lead was supposed to be assigned to an agent who was not within their working hours, they would be skipped on the distribution list. You can also reference
Working Hours & Vacation Mode (https://help.lofty.com/hc/en-us/articles/360028368751)
for more information.
Please also be sure to have the individual agents check their time zone. The time is calculated by the working hours that are tied to the agent's time zone preferences. Differences between agents in their time zone settings could result in an uneven distribution of leads. The time zone is edited here:
#3
:
Why was a lead distributed to certain people instead of others?
There are three possible reasons for this:
(a) If the lead routing rule is "Round Robin," check working hours as mentioned in question #2. When the lead is assigned to the agent, if the agent is not in their working hours, it will skip them and assign the lead to the next person in line.
(b) If the lead routing method selected is "Next Up" or "Blast Alert," the agent who claims the lead is the one who gets the lead.
(c) If both of the previous items are checked, take a look at the timeline for the lead. It might be that during the routing process a user with access to the lead manually assigned the lead, interrupting the lead routing.
You can also refer to this feature for additional information:
Lead Routing Logs (https://help.lofty.com/hc/en-us/articles/360033311952)
.
#4: As an individual agent/user on the team (not an admin), why was the lead not assigned to me?
In addition to the above possibilities outlined in #1-#3, it might be that the Team Admin/Owner did not add you to the lead routing rules as this is
not
an automatic process and must be done manually. Check with your Team Admin/Owner to have them make sure you are included in any distribution rules that should apply to you.
#5: Is there a way to PAUSE lead routing at night and then have it RESUME again in the morning?
No, currently there is no feature to pause lead routing during a specific schedule. As workarounds, we would recommend setting up your lead routing rules so that Next Up/Blast Alert rules (which require a lead to be claimed) are in place but then a catch-all Round Robin rule with the same assignees that does not require a lead to be claimed. Using this method, if a lead comes in during the middle of the night, it will trigger the Next Up/Blast Alert, but if an agent is not available to claim it, you can still distribute the lead without requiring it to be claimed by using Round Robin.
Keep in mind that you want to assign the lead to an agent as soon as possible because the Welcome Email (see
Set Up the Welcome Email (https://help.lofty.com/hc/en-us/articles/360022134491)
) will not be sent until the assignment is final so it could deter the lead from accessing your site depending on the lead source.
#6: Is there a way to trigger lead routing again after a lead has already entered the CRM?
Yes. See
Re-Routing Groups (https://help.lofty.com/hc/en-us/articles/11056630380955)
.
#7: Is it possible to have an agent assigned to a lead as one of the "Custom Roles" based on who the assigned agent is?
There is no way to just group two users together (for example a lead is assigned to User1 and you always want it to be assigned to User2 in the Assistant slot). This question is typically asked in the context of a husband/wife team, etc. This is not currently possible with lead routing.
What you
can
do, however, is create rules that are the exact same as those that assign a lead to the agent (For Agent) under each of the custom roles (For #custom_role#). For example, you can grab a source "Zillow," for example, and make sure it always goes to the same agent in the primary "Agent" slot. You could then copy then go to the lead routing rules for the "Assistant" or "Custom Role _____" and assign source "Zillow" to a specific person. That is not going to work for more complicated lead routing where you have multiple assignees for the primary Agent Slot, etc.
More Information
As a reminder, a full outline of how lead routing works in Lofty can be found in the following article should you need to understand more about how lead routing works:
Lead Routing Rules (https://help.lofty.com/hc/en-us/articles/360055177831)
.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

# Company Number

- Article ID: `360059630312`
- Category: `CRM`
- Section: `Virtual Number`
- Updated: `2025-11-14T19:33:55Z`
- Source: https://help.lofty.com/hc/en-us/articles/360059630312-Company-Number

## Body

## Introduction

A " Company Number " is a virtual number that is shared by all users on a Lofty account. This is different from what is referred to as a " Personal Number " which is the virtual number that belongs to and is utilized by an individual user. A "Company Number" is simply a virtual number and does not have its own allocated usage. Usage (call minutes or text messages) is still pulled from an individual user's associated call/text package (included or added-on). E ach accounts can have only one personal number , but it can purchase multiple company numbers and be associated with the numbers it bought.

Please also note that in order to have a Personal Number, you will need to upgrade your text/call package which includes the use of a Personal Number.

## Summary

- Company Number Settings Purchasing additional Company Numbers Source and Tag for Company Number
- Outbound Logic Outbound Manual Texts Outbound Auto Texts Outbound Calls
- Inbound Logic Existing Leads Unknown Leads Duplicate Phone Number

## Company Number Settings

The Company Number settings are managed by the Team Owner/Admin by navigating to Settings > Company > Communication > Call & Text and selecting the Company Number tab.

Click Select a Number to pick a virtual number to be used as the Company Number. Click Configure Rule to determine how calls and text messages from phone numbers that do not belong to a lead are routed to users on your account. More information on the configuration logic is here: Unknown Leads

#### Purchasing additional Company Numbers

The Account Owner can buy and assign Company Numbers to offices or users within their organization. The cost is $27/month/company number.

To purchase, navigate to Settings > Company > Communication > Call & Text > Company Number> Buy New Company Number :

Only one Company Number can be assigned to each group or agent.

## Outbound Logic

### Outbound Manual Texts

If you have both a Personal Number and a Company Number, you will be able to choose between both options when sending a manual text message by selecting the From or the Sender Number drop-downs:

### Outbound Auto Texts

Auto texts are those sent by Smart Plans and Welcome Texts. The setting for Sender ID to Display as connected to your dialer license settings is what determines whether the Company Number or the Personal Number (if you have one) is set to send auto text messages. If you edit this option and choose a "Sender ID to Display," then that is the number that will be used for auto-texts. If you do not choose a "Sender ID to Display," then it will default to use the Personal Number if available and if not, it will use the Company Number as the secondary option.

### Outbound Calls

You can choose to use any of the following when making an outbound call:

- (a) Company Number
- (b) Personal Number (requires upgrade)
- (c) Bridge Number

## Inbound Logic

### Existing Leads

Inbound calls/texts from EXISTING leads will be sent directly to the user listed in the primary "Agent" role of a lead record:

### Unknown Leads

When a phone number that is not associated with a lead in the CRM calls your Company Number, you can set up rules to determine which agent receives the call.

Click Configure Rule to setup the routing.

Three options are available when configuring routing rules:

1. Blast Alert: Unknown inbound calls and texts will be routed to up to 5 selected agents.

Inbound Calls: The call will ring all available users simultaneously until one answers. Unavailable users (inactive, without an active call package, on a busy line, or outside business hours) will not be notified. Once the call is answered, it will stop ringing for the others. Inbound Texts: The text will be sent to all selected users. 2. [Default Option] Specific User: Routes calls and texts to one selected agent, as in the current online version.

3. Another Number : Routes the call or text to a specific bridge number.

#### Source & Tag

For numbers without a configured 'source' field, a default value of 'Company Number Unknown IB' will be added.

When a phone number that is not associated with a lead calls the Company Number and is not answered by the Agent, the notification will have the following information:

- Source: (Source added to Company Number)
- Phone Number:(Phone number that called)
- An option to click to add as a new lead or associate with an existing lead If this is being added as a New Lead, the lead's Source will be the Source applied to the Company Number and the Tag will be added to the lead's profile If this is being associated with an existing lead, which already has a Source, the Source applied to the Company Number will be added to the lead's profile as a Tag and the Tag will also be added to the lead's profile as a Tag Reminder: A Lead may have many Tags, but only one (1) Source.

Chat->Unknown inbound channel

Call Notification

Scenario 1 : If a call is answered, only the agent who picks up the call can see the record. This agent will be the only one able to perform further actions or communications with the unknown number, such as creating a new lead , calling back , or texting back . Scenario 2 : If a call is not answered by any of the selected agents, all users can see the record of the missed call. At this point, the unknown number is considered "unclaimed."

- Any selected agents can make further operations or communications with the unknown number.
- Once any agent takes action , it will be considered a "claim", and the notification will be removed for all other users. This ensures that only one agent follows up with the lead, avoiding multiple users contacting the same lead.

Text Notification

The unknown IB text will be sent to all selected routing agents. The record will be visible for all of them until anyone takes a 'claim' action.

#### Call and Text Routing Rule

Company Virtual Number and Office Number support customized routing rules for unknown inbound calls and texts. You can add up to 10 custom rules. Working priority: custom→default.

For Active Hours, select a day and time. It is not allowed to choose duplicate time with other rules.

### Duplicate Phone Number

There are two different scenarios here:

#### Scenario 1

- Multiple leads have the same phone number
- The primary agent on the leads is the same user

If there are multiple leads with the same phone number and their primary agent is the same, the call/text will be sent to that agent and a timeline record will be made on all the lead records for the leads with that phone number.

#### Scenario 2

- Multiple leads have the same phone number
- The primary agent on the leads is not the same user

If there are different primary agents on leads with the same phone number, the call/text will be sent to the agent who owns the lead that was created most recently and a timeline record will be made only on that lead's timeline within their lead profile.

## FAQs

- Because everyone will be using the same Company Number (technically one virtual number), are there any limitations on how many people can use it simultaneously?
- Is there a permission that can be set so that only certain team members can use the Company Number?
- How will a Company Number work with listing on a business card or other marketing purposes?
- Can the Company Number be used for Text Codes via the Campaigns page? Or with Postcards?
- Is there a permission that allows other users to edit Company Number settings?

#### Because everyone will be using the same Company Number (technically, one virtual number), are there any limitations on how many people can use it simultaneously?

- Texting . There is no limit to the number of text messages that can be sent/received simultaneously as the Company Number.
- Calling . There is a limit (due to provider limitation) that no more than 50 inbound calls can be supported at the same time. If this limit is reached, the Company Number will no longer be able to answer calls.

#### Is there a permission that can be set so that only certain team members can use the Company Number?

No, currently, there is no permission of this type meaning all users on a team can use it as long as it is configured.

#### How will a Company Number work with listing on a business card or other marketing purposes?

A Company Number would likely not be effective in these scenarios because, according to the logic outlined above for "unknown leads," calls/texts from individuals not in your database will have to be sent to one specific person meaning they would likely not make it to you if you are not that person. A "Personal Number" would be more appropriate for marketing uses.

#### Can the Company Number be used for Text Codes via the Campaigns page? Or with postcard engagement?

No. Currently, the Company Number can only be used for inbound/outbound texts and calls. This means that the ability to send out postcards with a text code engagement mechanism or simply use the text codes on their own will not be accessible without upgrading to a new text package which of course includes access to your Lofty Personal Number.

#### Is there a permission that allows other users to edit Company Number settings?

No. Only the Team Owner/Admin can edit Company Number settings.

#### What number is used by default to send auto-texts?

See Outbound Auto Texts .

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@loftycom>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
A "
Company Number
" is a virtual number that is shared by all users on a Lofty account. This is different from what is referred to as a "
Personal Number
" which is the virtual number that belongs to and is utilized by an individual user. A "Company Number" is simply a virtual number and does
not
have its own allocated usage. Usage (call minutes or text messages) is still pulled from an individual user's associated call/text package (included or added-on).
E
ach accounts can have only
one personal number
, but it can purchase
multiple company numbers
and be associated with the numbers it bought.
Please also note that in order to have a Personal Number, you will need to upgrade your text/call package which includes the use of a Personal Number.
Summary
Company Number Settings (#h_01F3NXGVNHPCJY6YVB02JPVDA4)
Purchasing additional Company Numbers (#h_01FSD9EZ70DA57DXS0MSQ6ZB88)
Source and Tag for Company Number (#id-3/16/2023:FeatureReleaseTrainingforChime3.61-SourceandTagforCompanyNumber)
Outbound Logic (#h_01F3NYBXFQ2V3CFY47J3DAJ08F)
Outbound Manual Texts (#h_01F3NYC31XJ6GZJANB3HK9K0QC)
Outbound Auto Texts (#h_01F3NYC6VAD65BD6RE6EN109JK)
Outbound Calls (#h_01F3NYCH2BRMHE8A7H3E70PTH4)
Inbound Logic (#h_01F3NYCP23B0932DH0JYVJANK7)
Existing Leads (#h_01F3NYCXNEQ7F5C04PP4152HS9)
Unknown Leads (#h_01F3NYD3069DY1E3E9PWSZC7SV)
Duplicate Phone Number (#h_01F3NYD74H6XCMZ697SWDJBSYK)
Company Number Settings
The Company Number settings are managed by the Team Owner/Admin by navigating to
Settings > Company > Communication > Call & Text
and selecting the
Company Number
tab.
Click
Select a Number
to pick a virtual number to be used as the Company Number. Click
Configure Rule
to determine how calls and text messages from phone numbers that do not belong to a lead are routed to users on your account. More information on the configuration logic is here:
Unknown Leads (#h_01F3NYD3069DY1E3E9PWSZC7SV)
Purchasing additional Company Numbers
The Account Owner can buy and assign Company Numbers to offices or users within their organization. The cost is $27/month/company number.
To purchase, navigate to
Settings > Company > Communication > Call & Text > Company Number>
Buy New Company Number
:
Only
one
Company Number can be assigned to each group or agent.
Outbound Logic
Outbound Manual Texts
If you have both a Personal Number and a Company Number, you will be able to choose between both options when sending a manual text message by selecting the
From
or the
Sender Number
drop-downs:
Outbound Auto Texts
Auto texts are those sent by Smart Plans and Welcome Texts. The setting for
Sender ID to Display
as connected to your dialer license settings is what determines whether the Company Number or the Personal Number (if you have one) is set to send auto text messages. If you edit this option and choose a "Sender ID to Display," then that is the number that will be used for auto-texts. If you do not choose a "Sender ID to Display," then it will default to use the Personal Number if available and if not, it will use the Company Number as the secondary option.
Outbound Calls
You can choose to use any of the following when making an outbound call:
(a) Company Number
(b) Personal Number (requires upgrade)
(c) Bridge Number
Inbound Logic
Existing Leads
Inbound calls/texts from EXISTING leads will be sent directly to the user listed in the primary "Agent" role of a lead record:
Unknown Leads
When a phone number that is not associated with a lead in the CRM calls your Company Number, you can set up rules to determine which agent receives the call.
Click
Configure Rule
to setup the routing.
Three options are available when configuring routing rules:
1.
Blast Alert:
Unknown inbound calls and texts will be routed to up to 5 selected agents.
Inbound Calls:
The call will ring all available users simultaneously until one answers.
Unavailable users (inactive, without an active call package, on a busy line, or outside business hours) will not be notified. Once the call is answered, it will stop ringing for the others.
Inbound Texts:
The text will be sent to all selected users.
2.
[Default Option] Specific User:
Routes calls and texts to one selected agent, as in the current online version.
3.
Another Number
: Routes the call or text to a specific bridge number.
Source & Tag
For numbers without a configured 'source' field, a default value of 'Company Number Unknown IB' will be added.
When a phone number that is not associated with a lead calls the Company Number and is not answered by the Agent, the notification will have the following information:
Source: (Source added to Company Number)
Phone Number:(Phone number that called)
An option to click to add as a new lead or associate with an existing lead
If this is being added as a New Lead, the lead's Source will be the Source applied to the Company Number and the Tag will be added to the lead's profile
If this is being associated with an existing lead, which already has a Source, the Source applied to the Company Number will be added to the lead's profile as a Tag and the Tag will also be added to the lead's profile as a Tag
Reminder:
A Lead may have many Tags, but only one (1) Source.
Chat->Unknown inbound channel
Call Notification
Scenario 1
: If a call is answered, only the agent who picks up the call can see the record.
This agent will be the only one able to perform further actions or communications with the unknown number, such as
creating a new lead
,
calling back
, or
texting back
.
Scenario 2
: If a call is not answered by any of the selected agents, all users can see the record of the missed call. At this point, the unknown number is considered "unclaimed."
Any selected agents can make further operations or communications with the unknown number.
Once any
agent takes action
, it will be considered a
"claim",
and the notification will be removed for all other users. This ensures that only one agent follows up with the lead, avoiding multiple users contacting the same lead.
Text Notification
The unknown IB text will be sent to all selected routing agents.
The record will be visible for all of them until anyone takes a 'claim' action.
Call and Text Routing Rule
Company Virtual Number and Office Number support customized routing rules for unknown inbound calls and texts. You can add up to 10 custom rules. Working priority: custom→default.
For Active Hours, select a day and time. It is not allowed to choose duplicate time with other rules.
Duplicate Phone Number
There are two different scenarios here:
Scenario 1
Multiple leads have the same phone number
The primary agent on the leads is the same user
If there are multiple leads with the same phone number and their primary agent is the same, the call/text will be sent to that agent and a timeline record will be made on all the lead records for the leads with that phone number.
Scenario 2
Multiple leads have the same phone number
The primary agent on the leads is
not
the same user
If there are different primary agents on leads with the same phone number, the call/text will be sent to the agent who owns the lead that was created most recently and a timeline record will be made only on that lead's timeline within their lead profile.
FAQs
Because everyone will be using the same Company Number (technically one virtual number), are there any limitations on how many people can use it simultaneously? (#h_01F3NYRT916B6Q68G9ZS29FQE2)
Is there a permission that can be set so that only certain team members can use the Company Number? (#h_01F3NYRZ0GS9F7BQJ5WADZRDXB)
How will a Company Number work with listing on a business card or other marketing purposes? (#h_01F3NYS2R0WZ8NSK9KQ4J7P199)
Can the Company Number be used for Text Codes via the Campaigns page? Or with Postcards? (#h_01F3NYS6YBMJGR5V599M9JRZQ2)
Is there a permission that allows other users to edit Company Number settings? (#h_01F3PVV6F8EYKQCRC7G11C1GJC)
Because everyone will be using the same Company Number (technically, one virtual number), are there any limitations on how many people can use it simultaneously?
Texting
. There is no limit to the number of text messages that can be sent/received simultaneously as the Company Number.
Calling
. There is a limit (due to provider limitation) that no more than 50 inbound calls can be supported at the same time. If this limit is reached, the Company Number will no longer be able to answer calls.
Is there a permission that can be set so that only certain team members can use the Company Number?
No, currently, there is no permission of this type meaning all users on a team can use it as long as it is configured.
How will a Company Number work with listing on a business card or other marketing purposes?
A Company Number would likely not be effective in these scenarios because, according to the logic outlined above for "unknown leads," calls/texts from individuals not in your database will have to be sent to one specific person meaning they would likely not make it to you if you are not that person. A "Personal Number" would be more appropriate for marketing uses.
Can the Company Number be used for Text Codes via the Campaigns page? Or with postcard engagement?
No. Currently, the Company Number can only be used for inbound/outbound texts and calls. This means that the ability to send out postcards with a text code engagement mechanism or simply use the text codes on their own will
not
be accessible without upgrading to a new text package which of course includes access to your Lofty Personal Number.
Is there a permission that allows other users to edit Company Number settings?
No. Only the Team Owner/Admin can edit Company Number settings.
What number is used by default to send auto-texts?
See
Outbound Auto Texts (#h_01F3NYC6VAD65BD6RE6EN109JK)
.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@loftycom>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

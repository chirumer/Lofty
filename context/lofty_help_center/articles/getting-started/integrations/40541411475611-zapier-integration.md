# Zapier Integration

- Article ID: `40541411475611`
- Category: `Getting Started`
- Section: `Integrations`
- Updated: `2026-02-05T03:15:37Z`
- Source: https://help.lofty.com/hc/en-us/articles/40541411475611-Zapier-Integration

## Body

## Introduction

Zapier is a powerful "middle-ware" tool that can be used to connect two services that are otherwise not connected. Zapier works as an app that can connect to a wide selection of products on the market. If you need Product A to connect to Product B, and Product A and B do not have a direct integration with each other, Zapier is a tool that can fit in the middle to facilitate the connection as long as both products can connect to Zapier.

*IMPORTANT:

- You will need a Zapier account to use this tool with Lofty
- Please note that many features on Zapier are free but there are paid plans that are available to increase the overall functionality and sync rate/frequency. Refer to Zapier's pricing pages for more information in this regard.

## Summary

- Connect Lofty to Zapier
- FAQs

## Connect Lofty to Zapier

First, navigate to the following link to find Lofty's integration on Zapier: Click Here .

Once there, make sure you are logged in and then search for the app that you would like to connect with Lofty:

Zapier will then walk you through the steps to connect the two services.

You will need to grab your Lofty API key to connect Lofty to Zapier. This is the unique identifier for your Lofty account and is a requirement when connecting Lofty to Zapier. To find your API key, navigate to Settings > Integrations > API > Copy :

Note:  Enterprise Company Owners or Admins can choose to synchronize all visible Leads and Transactions to Zapier.

## FAQs

- How does Zapier work?
- How do I learn more about definitions used within Zapier?
- Does Zapier support two-way syncing?
- Can I use Zapier to perform any action I want within Lofty?
- What are the "actions" that are supported for Lofty within Zapier?
- What are the "triggers" that are supported for Lofty within Zapier?
- Is Zapier connected to individual user accounts or to the entire team?
- Can I update a pipeline stage in Lofty using Zapier?
- What are some of the common reasons why my zaps are not working correctly with Lofty?
- The Zapier connection to Lofty has failed to confirm the connection, what can I do to fix it?
- How can I best troubleshoot Zapier zaps?
- Can Zapier Sync Transaction Data?
- When the Trigger is Lead Pipeline Change, can it support pushing the Lead ID and Agent ID fields?
- Is the "Find Record in Lofty" an action that can be added?

### How does Zapier work?

Zapier can be as simple or as complicated as you would like it to be. You are best guided through how to use it by referencing Zapier's documentation. Please see Zapier: How It Works .

### How do I learn more about definitions used within Zapier?

See Learn key concepts in Zapier for more information.

### Does Zapier support two-way syncing?

No, two-way syncing is not supported via Zapier. For an explanation as to why, please see the following resource at Zapier: Click Here . If you aren't careful, you could accidentally create a "Zap loop" which could cause data issues, constant duplicate information being added to your system, etc. For more information on how to avoid that, Click Here .

### Can I use Zapier to perform any action I want within Lofty?

No, Lofty's Zapier integration is only as powerful as we have built it to be. In other words, we support certain actions and triggers . These are outlined below.

### What are the "actions" that are supported for Lofty within Zapier?

When Lofty is used as the Action in a Zap, the following are the available options:

- First Name
- Last Name
- Email
- Phone
- Lead Type
- Source
- Segment
- Tag
- Note
- Subscription - Smart Plan (true/false)
- Subscription - Property Alert (true/false)
- Subscription - Market Report (true/false)
- Min Price (Buyer)
- Max Price (Buyer)
- City (Buyer)
- State (Buyer)
- Zipcode (Buyer)
- Street or Complete Address (Mailing Address)
- City (Mailing Address)
- State (Mailing Address)
- Zip Code (Mailing Address)
- Address (Buyer)
- Min Beds (Buyer)
- Min Baths (Buyer)
- Beds (Seller)
- Baths (Seller)
- Price (Seller)
- Address (Seller)
- SqFt (Seller)
- City (Seller)
- State (Seller)
- Zipcode (Seller)
- Send Welcome Email (true/false)

*IMPORTANT :

- In order for a "Segment", "Tag", or "Source" to be pushed into Lofty via a zap, they must already exist in Lofty and as a Segment , a Shared Tag , or a Source . The "Segment", "Shared Tag", or "Source" must be set up in Lofty, or the Agent must have the Team Filter permission enabled, for any of these items to populate when the lead is created in Lofty.
- Currently, you can only send ONE "Segment" or "Tag" per Zap that is built. Adding in multiple is not supported at present.

### What are the "triggers" that are supported for Lofty within Zapier?

When Lofty is used as a Trigger , the following are the fields that can be pulled in and used in the corresponding Action :

- Email
- First Name
- Last Name
- Phone
- Lead Type
- Source
- Tag
- Segment
- Note
- Agent Name
- Agent Email
- Agent Phone
- Location (buyer)
- Address (buyer)
- City (buyer)
- Zipcode (buyer)
- State (buyer)
- Street or Complete Address (Mailing Address)
- City (Mailing Address)
- State (Mailing Address)
- Zip Code (Mailing Address)
- Max Price (buyer)
- Min Baths (buyer)
- Min Beds (buyer)
- Min Price (buyer)
- City (seller)
- Address (seller)
- Zipcode (seller)
- State (seller)
- Baths (seller)
- Beds (seller)
- Price (seller)
- Sq Ft (seller)
- Subscription: Market Report (true/false)
- Subscription: Property Alert (true/false)
- Subscription: Smart Plans (true/false)
- TimeFrame (Buyer)
- TimeFrame (Seller)

### Is Zapier connected to individual user accounts or the entire team?

Zapier is integrated into each account separately and only initiates a Zap (see above for "triggers") if a lead comes in through that account. For example, if a lead comes in via a team member/agent's integration, it would not trigger the Zapier integration at the Team Admin/Owner's level. Also, in that same context, if that lead was then assigned to the Team Admin/Owner via lead routing, etc., it would still not trigger their Zapier integration. The only way to trigger Zapier for a team member/agent is if they have their own Zapier account integrated and zaps set up.

### Can I update a pipeline stage in Lofty using Zapier?

That specific action is not supported. However, as a workaround, you could have Zapier add a tag which could in turn trigger a Smart Plan that could have an action to change a lead's pipeline stage.

### What are some of the common reasons why my zaps are not working correctly with Lofty?

First of all, it's important to understand the basic flow of how Zapier works:

Trigger (App A, for example) --> Optional "Helpers" --> Action (App B, for example).

If a problem occurs, it could happen at either of those three spots. Consider the following:

- If you are using Lofty as the trigger , check Zapier trigger settings to make sure that the lead in question actually fits into the trigger criteria (for example it's a new lead, the segment has changed, the pipeline has changed).
- One of the most common reasons why an action is not working correctly is because the "Helpers" could be getting in the way. These can consist of filters, etc. It would be good to check any "Helpers" that you have enabled in between the trigger and the action to see if the hold-up could be right there.
- Make sure the Zap is enabled. There should be a little switch next to it on your Zapier dashboard/zaps list that you can see is enabled. If not, make sure to have it on.
- The email address for the lead might already exist in Lofty which means it can't duplicate.

### The Zapier connection to Lofty has failed to confirm the connection, what can I do to fix it?

The most common reason for the connection failing to work is due to the test lead sent to Zapier not having the right information. Zapier will capture the first lead in your Lofty CRM after the initial setup, when using Lofty as a trigger, to make sure it's working. However, it could be possible that the first lead in your CRM does not match the conditions in action fields. For example, some apps need to use the "email" field, but, as you should know, in Lofty you can leave the email field blank on a lead record. So, it is possible that the test lead might not have an email address thus resulting in a failed connection test. In other words, the connection is likely working but has failed due to the lack of an email address (in this example).

Two solutions to consider:

1. "Skip and Continue" if the Zap is already working correctly. Future leads that you add might have the right information that you need thus avoiding this issue.
2. Change the test lead until it shows "Test Successful." If other leads in your database match the necessary fields, they might work correctly. You can continue sending test leads to get it to work to confirm the connection. You can find more information on how to work with test leads in the following Zapier article: Change the test data in your Zap trigger .

### How can I best troubleshoot Zapier zaps?

Log into Zapier and click on Task History on the left menu. This will allow you to choose the zap that you want to check and review the history to determine where things might have gone wrong.

### Can Zapier Sync Transaction Data?

Yes, the following transaction data may be synced:

#### Lofty → Zapier Use Lofty as a Trigger

Lofty can synchronize the following fields to other third-party providers:

- Basic Information Transaction Name Transaction Type Transaction Stage Associated Lead's Name Associated Lead's Email Associated Lead's Phone Transaction Owner's ID Transaction Owner's Name Transaction Owner's Email Close Price Commission Rate GCI Team Revenue Agent Revenue
- Property Details Property Address Property Unit Property Listing Status Property MLS Listing ID Property Label Property List Price Property Property Type Property Bedrooms Property Bathrooms Property Square Feet Property Lot Size (Sqft) Property Note
- Dates (Format: mm/dd/yyyy) Close Date Expected Close Appointment Date Agreement Signed Date Offer Date Contract Date Appraisal Date Home Inspection Date Escrow Date Expiration Date
- Custom Fields

#### Zapier → Lofty Use Lofty as an Action

Lofty will add a “Create Transaction” Action to allow third-party providers to create and update the following Transaction fields on Lofty:

- Transaction Name(Required)
- Lead First Name(Required)
- Lead Last Name
- Associated Lead Email
- Transaction Owner Email(Required)
- Transaction Type(Required)
- Transaction Stage
- Close Price
- GCI
- Team Revenue
- Agent Revenue
- Timezone(Date will be converted to the set of time zone)
- System Dates： Closed Date Expected Close Appointment Date Agreement Signed Date Offer Date Contract Date Appraisal Date Home Inspection Date Escrow Date Expiration Date

- Custom Fields
- Property Property Address Property Unit Property Listing Status Property MLS Listing ID Property Label Property List Price Property Type Property Bedrooms Property Bathrooms Property Square Feet Property Lot Size (Sqft) Property Note

Logic

- Parsing is supported for the following date format： yyyy-mm-dd：2001-08-24 mm/dd/yy：08/24/01 mm-dd-yy：08-24-01 dd/mm/yyyy：24/08/2001 Apr 11, 2022 dd.mm .yyyy：24.08.2001
- Sync Logic: First, find whether the transaction owner's email is an existing team member If not, the transaction sync will fail If yes, then check to see if the same lead (by email) is assigned to the transaction owner. If yes, then the transaction will be created for this lead, or if this transaction already exists on this lead, update the transaction. If not, Lofty will create the lead as a team lead, assign it to the transaction owner first, then create the transaction for the lead.

### When the Trigger is Lead Pipeline Change, can it support pushing the Lead ID and Agent ID fields?

Yes.

- When Trigger is "New/update Lead", add the "Agent ID" field,

- When Trigger is "New/update Transaction", add "Transaction ID" , "Associated Lead ID" , and "TransactionOwnerPhone" fields.
- When the Action is "Create/Update Transaction, add "Lead ID", "Transaction ID", and "Transaction Owner ID" fields, optional fields.
- When the Action is "Update Lead", add the "LeadID" field, an optional field.

- Supports finding transactions with agent ID, lead ID, and transaction ID when using create/update transaction action: First, find out whether the incoming transaction owner ID or email value is a team member(Prioritize using transaction ID to find) If not found, import failed. If found, within the scope of the Leads of the user as the primary agent, use the incoming Lead ID or Lead Email value to find if the Lead(Prioritize using lead ID to find) If the lead doesn't exist, create the lead and transaction for the user. If the lead exists, then use the incoming transaction ID or transaction name value to find the transaction in the lead. (Prioritize using transaction ID to find) If found, then update. (If find multiple transactions, all are updated) If not found, then create the transaction for the lead.
- Support find a lead with lead ID when using create lead/update lead action: When the lead ID and lead email have values at the same time, first use the lead ID to find the lead accurately.

### Is the "Find Record in Lofty" an action that can be added?

Yes.

- Add a new action, called "Find Record in Lofty: Object(Required): Lofty's Object Lead Transaction Search Value (Required): Trigger's fields Should this step be considered a “success” when nothing is found? Yes No
- Instructions： When Object selects Lead, search the Lead ID equal to the value of the "Search Value field" in Lofty, and the search scope is the ID of the lead visible to the user account bound to Zap. If it is found, all the information of the Lead will be returned, and the fields are the same as the "New Lead" Trigger. If a note is found, returns nothing. When the Object selects Transaction, search the Transaction ID equal to the value of the "Search Value field" in Lofty, and the search scope is the ID of the visible Transaction ID to the user account bound to Zap. If found, return all the information of the Transaction, and the fields are the same as the "New Transaction" Trigger If not found, return nothing. For the last fields: When True is selected, if the ID is found or not found in Lofty, continue to the next step When False is selected, if the ID is not found in Lofty, the next steps will be skipped.

## Questions?

If you have any questions regarding this topic or any others, please contact our Support Team via email at support@lofty.com, by phone at 1 (855) 981-7557, or by chat through your Lofty CRM.

Related terms: Zapier, Integrate zap, zap trigger

## Plain Text

Introduction
Zapier is a powerful "middle-ware" tool that can be used to connect two services that are otherwise not connected. Zapier works as an app that can connect to a wide selection of products on the market. If you need Product A to connect to Product B, and Product A and B do not have a direct integration with each other, Zapier is a tool that can fit in the middle to facilitate the connection as long as both products can connect to Zapier.
*IMPORTANT:
You will need a Zapier account to use this tool with Lofty
Please note that many features on Zapier are free but there are paid plans that are available to increase the overall functionality and sync rate/frequency. Refer to Zapier's pricing pages for more information in this regard.
Summary
Connect Lofty to Zapier (#h_01EXX3WKJVA6035CM861XKAN58)
FAQs (#h_01EXX3WQQP0XXPZZQ9JAR39CP6)
Connect Lofty to Zapier
First, navigate to the following link to find Lofty's integration on Zapier:
Click Here (https://zapier.com/apps/chime/integrations)
.
Once there, make sure you are logged in and then search for the app that you would like to connect with Lofty:
Zapier will then walk you through the steps to connect the two services.
You will need to grab your Lofty API key to connect Lofty to Zapier. This is the unique identifier for your Lofty account and is a requirement when connecting Lofty to Zapier. To find your API key, navigate to
Settings
>
Integrations
>
API
>
Copy
:
Note:  Enterprise Company Owners or Admins can choose to synchronize all visible Leads and Transactions to Zapier.
FAQs
How does Zapier work? (#h_01EXX3X08HWGKMA5D518TFSPA0)
How do I learn more about definitions used within Zapier? (#h_01EXX4557BF16CX3TTT2ZCPP3W)
Does Zapier support two-way syncing? (#h_01EXX459JY1AHBCW691AYJR04B)
Can I use Zapier to perform any action I want within Lofty? (#h_01EXX45DCAPSDHKD18E1QXAAH8)
What are the "actions" that are supported for Lofty within Zapier? (#h_01EXX45MWCX0ZB8KD7NCC5TPJC)
What are the "triggers" that are supported for Lofty within Zapier? (#h_01EXX45RJ5S89SPSN6C26FXXBV)
Is Zapier connected to individual user accounts or to the entire team? (#h_01EXX45WWYRBBF7DZX5RAFHR6D)
Can I update a pipeline stage in Lofty using Zapier? (#h_01EXX461QE647ZYQT3T0ZA5CH9)
What are some of the common reasons why my zaps are not working correctly with Lofty? (#h_01EXX6WMS5F5Q7SNM1FZ9WDC00)
The Zapier connection to Lofty has failed to confirm the connection, what can I do to fix it? (#h_01EXX6WSE039JKW2PFN5WYZCT9)
How can I best troubleshoot Zapier zaps? (#h_01EXX6WX5R41RKEZ28QA8NRD43)
Can Zapier Sync Transaction Data? (#h_01GW293C4B78R6AKZJTH8QF1S3)
When the Trigger is Lead Pipeline Change, can it support pushing the Lead ID and Agent ID fields? (#h_01H1MXCQGV70MB1NR7K7HZ9VZG)
Is the "Find Record in Lofty" an action that can be added? (#h_01H1MXD21HZ7D49AMEF5BKGC1H)
How does Zapier work?
Zapier can be as simple or as complicated as you would like it to be. You are best guided through how to use it by referencing Zapier's documentation. Please see
Zapier: How It Works (https://zapier.com/how-it-works)
.
How do I learn more about definitions used within Zapier?
See
Learn key concepts in Zapier (https://zapier.com/help/create/basics/learn-key-concepts-in-zapier)
for more information.
Does Zapier support two-way syncing?
No, two-way syncing is
not
supported via Zapier. For an explanation as to why, please see the following resource at Zapier:
Click Here (https://zapier.com/help/create/basics/does-zapier-support-two-way-syncing)
. If you aren't careful, you could accidentally create a "Zap loop" which could cause data issues, constant duplicate information being added to your system, etc. For more information on how to avoid that,
Click Here (https://zapier.com/help/troubleshoot/behavior/zap-is-stuck-in-a-loop)
.
Can I use Zapier to perform
any
action I want within Lofty?
No, Lofty's Zapier integration is only as powerful as we have built it to be. In other words, we support certain
actions
and
triggers
. These are outlined below.
What are the "actions" that are supported for Lofty within Zapier?
When Lofty is used as the
Action
in a Zap, the following are the available options:
First Name
Last Name
Email
Phone
Lead Type
Source
Segment
Tag
Note
Subscription - Smart Plan (true/false)
Subscription - Property Alert (true/false)
Subscription - Market Report (true/false)
Min Price (Buyer)
Max Price (Buyer)
City (Buyer)
State (Buyer)
Zipcode (Buyer)
Street or Complete Address (Mailing Address)
City (Mailing Address)
State (Mailing Address)
Zip Code (Mailing Address)
Address (Buyer)
Min Beds (Buyer)
Min Baths (Buyer)
Beds (Seller)
Baths (Seller)
Price (Seller)
Address (Seller)
SqFt (Seller)
City (Seller)
State (Seller)
Zipcode (Seller)
Send Welcome Email (true/false)
*IMPORTANT
:
In order for a "Segment", "Tag", or "Source" to be pushed into Lofty via a zap,
they must already exist in Lofty
and as a
Segment
, a
Shared Tag
, or a
Source
. The "Segment", "Shared Tag", or "Source" must be set up in Lofty, or the Agent must have the Team Filter permission enabled, for any of these items to populate when the lead is created in Lofty.
Currently, you can only send ONE "Segment" or "Tag" per Zap that is built. Adding in multiple is not supported at present.
What are the "triggers" that are supported for Lofty within Zapier?
When Lofty is used as a
Trigger
, the following are the fields that can be pulled in and used in the corresponding
Action
:
Email
First Name
Last Name
Phone
Lead Type
Source
Tag
Segment
Note
Agent Name
Agent Email
Agent Phone
Location (buyer)
Address (buyer)
City (buyer)
Zipcode (buyer)
State (buyer)
Street or Complete Address (Mailing Address)
City (Mailing Address)
State (Mailing Address)
Zip Code (Mailing Address)
Max Price (buyer)
Min Baths (buyer)
Min Beds (buyer)
Min Price (buyer)
City (seller)
Address (seller)
Zipcode (seller)
State (seller)
Baths (seller)
Beds (seller)
Price (seller)
Sq Ft (seller)
Subscription: Market Report (true/false)
Subscription: Property Alert (true/false)
Subscription: Smart Plans (true/false)
TimeFrame (Buyer)
TimeFrame (Seller)
Is Zapier connected to individual user accounts or the entire team?
Zapier is integrated into each account separately and only initiates a Zap (see above for "triggers") if a lead comes in through that account. For example, if a lead comes in via a team member/agent's integration, it would
not
trigger the Zapier integration at the Team Admin/Owner's level. Also, in that same context, if that lead was then assigned to the Team Admin/Owner via lead routing, etc., it would still
not
trigger their Zapier integration. The only way to trigger Zapier for a team member/agent is if they have their own Zapier account integrated and zaps set up.
Can I update a pipeline stage in Lofty using Zapier?
That specific action is
not
supported. However, as a workaround, you could have Zapier add a tag which could in turn trigger a Smart Plan that could have an action to change a lead's pipeline stage.
What are some of the common reasons why my zaps are not working correctly with Lofty?
First of all, it's important to understand the basic flow of how Zapier works:
Trigger
(App A, for example) -->
Optional "Helpers"
-->
Action
(App B, for example).
If a problem occurs, it could happen at either of those three spots. Consider the following:
If you are using Lofty as the
trigger
, check Zapier trigger settings to make sure that the lead in question actually fits into the trigger criteria (for example it's a new lead, the segment has changed, the pipeline has changed).
One of the most common reasons why an action is not working correctly is because the "Helpers" could be getting in the way. These can consist of filters, etc. It would be good to check any "Helpers" that you have enabled in between the
trigger
and the
action
to see if the hold-up could be right there.
Make sure the Zap is enabled. There should be a little switch next to it on your Zapier dashboard/zaps list that you can see is enabled. If not, make sure to have it on.
The email address for the lead might already exist in Lofty which means it can't duplicate.
The Zapier connection to Lofty has failed to confirm the connection, what can I do to fix it?
The most common reason for the connection failing to work is due to the test lead sent to Zapier not having the right information. Zapier will capture the first lead in your Lofty CRM after the initial setup, when using Lofty as a trigger, to make sure it's working. However, it could be possible that the first lead in your CRM does not match the conditions in action fields. For example, some apps need to use the "email" field, but, as you should know, in Lofty you can leave the email field blank on a lead record. So, it is possible that the test lead might not have an email address thus resulting in a failed connection test. In other words, the connection is likely working but has failed due to the lack of an email address (in this example).
Two solutions to consider:
"Skip and Continue" if the Zap is already working correctly. Future leads that you add might have the right information that you need thus avoiding this issue.
Change the test lead until it shows "Test Successful." If other leads in your database match the necessary fields, they might work correctly. You can continue sending test leads to get it to work to confirm the connection. You can find more information on how to work with test leads in the following Zapier article:
Change the test data in your Zap trigger (https://zapier.com/help/create/basics/change-the-test-data-in-your-zap-trigger?from_url=https%3A%2F%2Fzapier.com%2Fapp%2Feditor%2F100113033%2Fnodes%2F100113033%2Fsample#test-your-trigger)
.
How can I best troubleshoot Zapier zaps?
Log into Zapier and click on
Task History
on the left menu. This will allow you to choose the zap that you want to check and review the history to determine where things might have gone wrong.
Can Zapier Sync Transaction Data?
Yes, the following transaction data may be synced:
Lofty → Zapier
Use Lofty as a Trigger
Lofty can synchronize the following fields to other third-party providers:
Basic Information
Transaction Name
Transaction Type
Transaction Stage
Associated Lead's Name
Associated Lead's Email
Associated Lead's Phone
Transaction Owner's ID
Transaction Owner's Name
Transaction Owner's Email
Close Price
Commission Rate
GCI
Team Revenue
Agent Revenue
Property Details
Property Address
Property Unit
Property Listing Status
Property MLS Listing ID
Property Label
Property List Price
Property Property Type
Property Bedrooms
Property Bathrooms
Property Square Feet
Property Lot Size (Sqft)
Property Note
Dates (Format: mm/dd/yyyy)
Close Date
Expected Close
Appointment Date
Agreement Signed Date
Offer Date
Contract Date
Appraisal Date
Home Inspection Date
Escrow Date
Expiration Date
Custom Fields
Zapier → Lofty
Use Lofty as an Action
Lofty will add a “Create Transaction” Action to allow third-party providers to create and update the following Transaction fields on Lofty:
Transaction Name(Required)
Lead First Name(Required)
Lead Last Name
Associated Lead Email
Transaction Owner Email(Required)
Transaction Type(Required)
Transaction Stage
Close Price
GCI
Team Revenue
Agent Revenue
Timezone(Date will be converted to the set of time zone)
System Dates：
Closed Date
Expected Close
Appointment Date
Agreement Signed Date
Offer Date
Contract Date
Appraisal Date
Home Inspection Date
Escrow Date
Expiration Date
Custom Fields
Property
Property Address
Property Unit
Property Listing Status
Property MLS Listing ID
Property Label
Property List Price
Property Type
Property Bedrooms
Property Bathrooms
Property Square Feet
Property Lot Size (Sqft)
Property Note
Logic
Parsing is supported for the following date format：
yyyy-mm-dd：2001-08-24
mm/dd/yy：08/24/01
mm-dd-yy：08-24-01
dd/mm/yyyy：24/08/2001
Apr 11, 2022
dd.mm (http://dd.mm/)
.yyyy：24.08.2001
Sync Logic:
First, find whether the transaction owner's email is an existing team member
If not, the transaction sync will fail
If yes, then check to see if the same lead (by email) is assigned to the transaction owner.
If yes, then the transaction will be created for this lead, or if this transaction already exists on this lead, update the transaction.
If not, Lofty will create the lead as a team lead, assign it to the transaction owner first, then create the transaction for the lead.
When the Trigger is Lead Pipeline Change, can it support pushing the Lead ID and Agent ID fields?
Yes.
When Trigger is "New/update Lead", add the
"Agent ID"
field,
When Trigger is "New/update Transaction", add
"Transaction ID"
,
"Associated Lead ID"
, and
"TransactionOwnerPhone"
fields.
When the Action is "Create/Update Transaction, add
"Lead ID", "Transaction ID", and "Transaction Owner ID"
fields, optional fields.
When the Action is "Update Lead", add the
"LeadID"
field, an optional field.
Supports finding transactions with agent ID, lead ID, and transaction ID when using create/update transaction action:
First, find out whether the incoming transaction owner ID or email value is a team member(Prioritize using transaction ID to find)
If not found, import failed.
If found, within the scope of the Leads of the user as the primary agent, use the incoming Lead ID or Lead Email value to find if the Lead(Prioritize using lead ID to find)
If the lead doesn't exist, create the lead and transaction for the user.
If the lead exists, then use the incoming transaction ID or transaction name value to find the transaction in the lead. (Prioritize using transaction ID to find)
If found, then update. (If find multiple transactions, all are updated)
If not found, then create the transaction for the lead.
Support find a lead with lead ID when using create lead/update lead action:
When the lead ID and lead email have values at the same time, first use the lead ID to find the lead accurately.
Is the "Find Record in Lofty" an action that can be added?
Yes.
Add a new action, called "Find Record in Lofty:
Object(Required): Lofty's Object
Lead
Transaction
Search Value (Required): Trigger's fields
Should this step be considered a “success” when nothing is found?
Yes
No
Instructions：
When Object selects Lead, search the Lead ID equal to the value of the "Search Value field" in Lofty, and the search scope is the ID of the lead visible to the user account bound to Zap.
If it is found, all the information of the Lead will be returned, and the fields are the same as the "New Lead" Trigger.
If a note is found, returns nothing.
When the Object selects Transaction, search the Transaction ID equal to the value of the "Search Value field" in Lofty, and the search scope is the ID of the visible Transaction ID to the user account bound to Zap.
If found, return all the information of the Transaction, and the fields are the same as the "New Transaction" Trigger
If not found, return nothing.
For the last fields:
When True is selected, if the ID is found or not found in Lofty, continue to the next step
When False is selected, if the ID is not found in Lofty, the next steps will be skipped.
Questions?
If you have any questions regarding this topic or any others, please contact our Support Team via email at support@lofty.com, by phone at 1 (855) 981-7557, or by chat through your Lofty CRM.
Related terms: Zapier, Integrate zap, zap trigger

# Brokermint Integration

- Article ID: `40543925341723`
- Category: `Getting Started`
- Section: `Integrations`
- Updated: `2025-11-07T03:13:56Z`
- Source: https://help.lofty.com/hc/en-us/articles/40543925341723-Brokermint-Integration

## Body

## Introduction

If you use Brokermint and want to combine its powerful features with those of the Lofty platform, this article will explain how this can be done. With this integration, you can sync lead and transaction data between Lofty and Brokermint.

## Summary

- Setup
- Using the Brokermint Integration

## Setup

From the Lofty CRM navigate to Settings > Integrations > Brokermint > Connect :

Input your Brokermint API key and account_id and then click "Save." If you need assistance in finding these two things, please get in touch with Brokermint Support.

You should see a confirmation message flash on the screen letting you know that Brokermint has been integrated:

You will also see Brokermint now listed under the Existing Integrations :

## Using the Brokermint Integration

### Send Data to Brokermint

There are three ways to send data from Lofty to Brokermint using the integration: (1) when creating a new transaction, (2) by manually sending an update via the lead profile page, or (3) by manually sending an update via the transaction detail page. All of these are explained individually below. . .

#### (1) Send transaction data to Brokermint when creating a transaction

*Please note that the following requirements must be met for this scenario (1) to work:

- Brokermint must first be integrated with Lofty
- You, as the user, are assigned to any role of the lead in the Assigned To section
- An address must exist under Property > Address within the transaction detail

When you create a new transaction or update a transaction, you can choose to sync this transaction to Brokermint as either an "Actual Transaction" or an "Incoming Transaction" (see FAQ for definitions).

A transaction can be added directly via the Lead Profile > Transactions & Docs :

Or via Transaction Management > New :

In the window to add the new transaction, you will want to complete as much information as possible, give it a name, etc. Then, once all the information has been added, you will see a checkbox appear at the bottom that, when checked, will send the transaction to Brokermint:

The transaction will then be sent to Brokermint depending on the option selected.

#### (2) Manually sending an update via the lead profile page

*Please note that the following requirements must be met for this scenario (2) to work:

- Brokermint must first be integrated with Lofty
- You, as the user, are assigned to any role of the lead in the Assigned To section

Navigate to the lead profile for the lead you want to send to Brokermint. Hover over the three dots and click on the option to Send to Brokermint :

After clicking this button, there are two possible situations: (a) if the lead doesn't have any transactions and (b) if the lead has at least one transaction.

No Transactions

If the lead doesn’t have any transactions that are assigned to you as the user, the system will only send the lead to Brokermint and create a new contact at Brokermint.

At Least One Transaction

If the lead has at least one transaction assigned to you as the user, the system will allow you to choose which transactions you want to sync to Brokermint in addition to the lead contact details. When this is happening, the following will take place:

- The lead is sent to Brokermint to create a contact record there
- The transactions are sent to Brokermint to create "Actual Transactions"
- The Brokermint contact record and actual transactions are then linked

A message will display showing that the sync is happening. This should disappear automatically within a short period (depending on the number of transactions being synced) or you can dismiss it and come back later.

After syncing, a record is left on the lead's activities timeline:

#### (3) Manually sending an update via the transaction detail page

*Please note that the following requirements must be met for this scenario (2) to work:

- Brokermint must first be integrated with Lofty
- You, as the user, must be the transaction owner of the transaction that you want to send to Brokermint

Navigate to the transaction detail page. You can do so by going to the Lead Profile > Transactions & Docs and clicking on the transaction name:

Or, you can navigate to Transaction Management and then click on the transaction name:

Once you are on the transaction detail page, hover over the three dots and then click on the option to "Send to Brokermint":

You will then need to confirm the action:

When this is happening, the following will take place:

- The lead associated with this transaction is sent to Brokermint to create a contact record there
- This specific transaction is sent to Brokermint to create an "Actual Transaction"
- The Brokermint contact record and actual transaction are then linked together

A timeline record will be generated on the transaction detail history page telling you whether it was successful or not and why.

### Update Data from Brokermint

There are two ways to update data from Brokermint to Lofty: (1) manually pulling updated lead data from Brokermint and (2) manually pulling updated transaction data from Brokermint. These are both explained individually below. . .

#### (1) Manually pulling updated lead/contact data from Brokermint

Navigate to a Lead Profile , hover over the three dots, and then click on the option to "Update from Brokermint":

You will need to confirm that you would like to proceed with this action:

A status update will appear:

If synced successfully, a message will appear like this:

Once updated, a timeline record will be made:

#### (2) Manually pulling updated transaction data from Brokermint

Once a transaction on Lofty is connected with an "Actual Transaction" at Brokermint, you will see the Brokermint logo located on the transaction detail page:

If you want to update the transaction record in Lofty with any new updates at Brokermint, you can navigate to the transaction detail page and update the transaction data from Brokermint by hovering over the three dots at the top-right and then clicking the option to "Update from Brokermint":

You will then need to confirm the requested action:

It will then synchronize:

If successful, a message will appear confirming:

A record will be documented on the transaction detail history page:

## FAQs

- What is the difference between an "Incoming Transaction" and an "Actual Transaction"?
- What lead data will synchronize between Lofty and Brokermint?
- What transaction data will synchronize between Lofty and Brokermint?
- How do I find my "account_id"?

### What is the difference between an "Incoming Transaction" and an "Actual Transaction"?

If you choose "Actual Transaction", the system will send your transaction to Brokermint and create an actual transaction, send the associated lead to Brokermint as a contact, and then connect the contact and transaction in Brokermint. If synced as an "Actual Transaction," it will also display with the Brokermint logo on the Lofty transaction detail page:

If you choose "Incoming Transaction," your transaction will be displayed in the Incoming Transaction section and you can accept and create an actual transaction in Brokermint by clicking on the "Accept" button. Otherwise, you can discard the incoming transaction. Please note that according to Brokermint's system logic, if you discard the transaction synced from Lofty to Brokermint, even if you make changes to the transaction in Lofty, later on, it will not be able to sync back to Brokermint. Technically speaking, you would have to create a brand new transaction in order for that sync to work if you had already discarded it.

### What lead data will synchronize between Lofty and Brokermint?

The following is a list of the data that will be synced between a Lofty lead and a Brokermint contact:
- First Name
- Last Name
- Email
- Phone
- Address
- City
- State
- Zip Code
- Contact Type
- Source

### What transaction data will synchronize between Lofty and Brokermint?

The following table outlines how Lofty transaction data is aligned with the data at Brokermint. This data will update at the other location depending on which action is taken from the above options of updating to/from Brokermint.

Brokermint Field Name | Lofty Field Name | Notes
address (Required) | property_address | 
city (Required)
state (Required)
zip (Required)
status | transaction stage | - If the transaction stage is "Closed" at Lofty, it will be "Closed at Brokermint. - If the transaction stage is "Cancelled" at Lofty, it will be "Cancelled" at Brokermint. - All other transaction stages at Lofty will sync as whatever the first stage is at Brokermint.
transaction_type | transaction type | - If the transaction type is "Purchase" at Lofty, it will be "Purchase" at Brokermint. - If the transaction type is "Listing" at Lofty, it will be "Listing" at Brokermint. - If the transaction type is "Lease" at Lofty, it will be "Lease" at Brokermint. - If the transaction type is "Other" at Lofty, it will be "Other" at Brokermint.
price (Required) | list price/close price | See "Price Explanation" just below the table.
expiration_date | expiration date | 
closing_date | expected close | 
Property type | Property type | 
MLS # | MLS # | 
listing_side_representer | id | account_id | - If the transaction type at Lofty is a "Listing," "Lease," or "Other," type then the Lofty user's info will be sent to Brokermint as the "listing_side_representer." - If the transaction type at Lofty is a "Purchase" type, then the Lofty user's info will be sent to Brokermint as the "buyer_side_representer."
type | /
buying_side_representer | id | account_id
type | /

Price Explanation

The "price" will sync between Lofty and Brokermint differently depending on two different scenarios: (a) the transaction is "active" and (b) the transaction is "closed."

If the transaction is an "Active" transaction at Lofty (meaning not closed) then the price synced from Lofty to Brokermint is the List Price which is found here in the transaction fields under Property :

But, if the transaction is "closed," then the price synced from Loftyto Brokermint is going to be the "Close Price" under the Basic Info section:

### How do I find my "account_id"?

The "account_id" is the same for all agents within the same office and can be found here:

However, if there are multiple offices, each different office has its own "account_id":

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

Related terms: Brokermint

## Plain Text

Introduction
If you use Brokermint and want to combine its powerful features with those of the Lofty platform, this article will explain how this can be done. With this integration, you can sync lead and transaction data between Lofty and Brokermint.
Summary
Setup (#h_01EXTEGP2RRG1BXAKK46W7D1Z4)
Using the Brokermint Integration (#h_01EXTHM0VCV34VA7R7PHG1RF3W)
Setup
From the Lofty CRM navigate to
Settings
>
Integrations
>
Brokermint
>
Connect
:
Input your Brokermint API key and account_id and then click "Save." If you need assistance in finding these two things, please get in touch with Brokermint Support.
You should see a confirmation message flash on the screen letting you know that Brokermint has been integrated:
You will also see Brokermint now listed under the
Existing Integrations
:
Using the Brokermint Integration
Send Data
to
Brokermint
There are three ways to send data from Lofty to Brokermint using the integration: (1) when creating a new transaction, (2) by manually sending an update via the lead profile page, or (3) by manually sending an update via the transaction detail page. All of these are explained individually below. . .
(1) Send transaction data to Brokermint when creating a transaction
*Please note that the following requirements must be met for this scenario (1) to work:
Brokermint must first be integrated with Lofty
You, as the user, are assigned to any role of the lead in the
Assigned To
section
An address must exist under
Property
>
Address
within the transaction detail
When you create a new transaction or update a transaction, you can choose to sync this transaction to Brokermint as either an "Actual Transaction" or an "Incoming Transaction" (see FAQ for definitions).
A transaction can be added directly via the
Lead Profile
>
Transactions & Docs
:
Or via
Transaction Management
>
New
:
In the window to add the new transaction, you will want to complete as much information as possible, give it a name, etc. Then, once all the information has been added, you will see a checkbox appear at the bottom that, when checked, will send the transaction to Brokermint:
The transaction will then be sent to Brokermint depending on the option selected.
(2) Manually sending an update via the lead profile page
*Please note that the following requirements must be met for this scenario (2) to work:
Brokermint must first be integrated with Lofty
You, as the user, are assigned to any role of the lead in the
Assigned To
section
Navigate to the
lead profile
for the lead you want to send to Brokermint. Hover over the three dots and click on the option to
Send to Brokermint
:
After clicking this button, there are two possible situations: (a) if the lead doesn't have any transactions and (b) if the lead has at least one transaction.
No Transactions
If the lead doesn’t have any transactions that are assigned to you as the user, the system will only send the lead to Brokermint and create a new contact at Brokermint.
At Least One Transaction
If the lead has at least one transaction assigned to you as the user, the system will allow you to choose which transactions you want to sync to Brokermint in addition to the lead contact details. When this is happening, the following will take place:
The lead is sent to Brokermint to create a contact record there
The transactions are sent to Brokermint to create "Actual Transactions"
The Brokermint contact record and actual transactions are then linked
A message will display showing that the sync is happening. This should disappear automatically within a short period (depending on the number of transactions being synced) or you can dismiss it and come back later.
After syncing, a record is left on the lead's activities timeline:
(3) Manually sending an update via the transaction detail page
*Please note that the following requirements must be met for this scenario (2) to work:
Brokermint must first be integrated with Lofty
You, as the user, must be the transaction
owner
of the transaction that you want to send to Brokermint
Navigate to the transaction detail page. You can do so by going to the
Lead Profile
>
Transactions & Docs
and clicking on the transaction name:
Or, you can navigate to
Transaction Management
and then click on the transaction name:
Once you are on the transaction detail page, hover over the three dots and then click on the option to "Send to Brokermint":
You will then need to confirm the action:
When this is happening, the following will take place:
The lead associated with this transaction is sent to Brokermint to create a contact record there
This specific transaction is sent to Brokermint to create an "Actual Transaction"
The Brokermint contact record and actual transaction are then linked together
A timeline record will be generated on the transaction detail history page telling you whether it was successful or not and why.
Update Data
from
Brokermint
There are two ways to update data
from
Brokermint to Lofty: (1) manually pulling updated lead data from Brokermint and (2) manually pulling updated transaction data from Brokermint. These are both explained individually below. . .
(1) Manually pulling updated
lead/contact
data from Brokermint
Navigate to a
Lead Profile
, hover over the three dots, and then click on the option to "Update from Brokermint":
You will need to confirm that you would like to proceed with this action:
A status update will appear:
If synced successfully, a message will appear like this:
Once updated, a timeline record will be made:
(2) Manually pulling updated
transaction
data from Brokermint
Once a transaction on Lofty is connected with an "Actual Transaction" at Brokermint, you will see the Brokermint logo located on the transaction detail page:
If you want to update the transaction record in Lofty with any new updates at Brokermint, you can navigate to the transaction detail page and update the transaction data from Brokermint by hovering over the three dots at the top-right and then clicking the option to "Update from Brokermint":
You will then need to confirm the requested action:
It will then synchronize:
If successful, a message will appear confirming:
A record will be documented on the transaction detail history page:
FAQs
What is the difference between an "Incoming Transaction" and an "Actual Transaction"? (#h_01EXTFM61RK2VH8NW1ZWJ68YT8)
What lead data will synchronize between Lofty and Brokermint? (#h_01EXTRMGFE3CKX7CTB74JX2PMB)
What transaction data will synchronize between Lofty and Brokermint? (#h_01EXTRMMH0NZK55ZKRY4264BEK)
How do I find my "account_id"? (#h_01EXTS2RCNW9WKDWC8X6ZK0J0R)
What is the difference between an "Incoming Transaction" and an "Actual Transaction"?
If you choose "Actual Transaction", the system will send your transaction to Brokermint and create an actual transaction, send the associated lead to Brokermint as a contact, and then connect the contact and transaction in Brokermint. If synced as an "Actual Transaction," it will also display with the Brokermint logo on the Lofty transaction detail page:
If you choose "Incoming Transaction," your transaction will be displayed in the Incoming Transaction section and you can accept and create an actual transaction in Brokermint by clicking on the "Accept" button. Otherwise, you can discard the incoming transaction. Please note that according to Brokermint's system logic, if you
discard
the transaction synced from Lofty to Brokermint, even if you make changes to the transaction in Lofty, later on, it will not be able to sync back to Brokermint. Technically speaking, you would have to create a brand new transaction in order for that sync to work if you had already discarded it.
What
lead
data will synchronize between Lofty and Brokermint?
The following is a list of the data that will be synced between a Lofty lead and a Brokermint contact:
First Name
Last Name
Email
Phone
Address
City
State
Zip Code
Contact Type
Source
What
transaction
data will synchronize between Lofty and Brokermint?
The following table outlines how Lofty transaction data is aligned with the data at Brokermint. This data will update at the other location depending on which action is taken from the above options of updating to/from Brokermint.
Brokermint Field Name
Lofty Field Name
Notes
address (Required)
property_address
city (Required)
state (Required)
zip (Required)
status
transaction stage
- If the transaction stage is "Closed" at Lofty, it will be "Closed at Brokermint.
- If the transaction stage is "Cancelled" at Lofty, it will be "Cancelled" at Brokermint.
- All other transaction stages at Lofty will sync as whatever the
first
stage is at Brokermint.
transaction_type
transaction type
- If the transaction type is "Purchase" at Lofty, it will be "Purchase" at Brokermint.
- If the transaction type is "Listing" at Lofty, it will be "Listing" at Brokermint.
- If the transaction type is "Lease" at Lofty, it will be "Lease" at Brokermint.
- If the transaction type is "Other" at Lofty, it will be "Other" at Brokermint.
price (Required)
list price/close price
See "Price Explanation" just below the table.
expiration_date
expiration date
closing_date
expected close
Property type
Property type
MLS #
MLS #
listing_side_representer
id
account_id
- If the transaction type at Lofty is a "Listing," "Lease," or "Other," type then the Lofty user's info will be sent to Brokermint as the "listing_side_representer."
- If the transaction type at Lofty is a "Purchase" type, then the Lofty user's info will be sent to Brokermint as the "buyer_side_representer."
type
/
buying_side_representer
id
account_id
type
/
Price Explanation
The "price" will sync between Lofty and Brokermint differently depending on two different scenarios: (a) the transaction is "active" and (b) the transaction is "closed."
If the transaction is an "Active" transaction at Lofty (meaning not closed) then the price synced from Lofty to Brokermint is the List Price which is found here in the transaction fields under
Property
:
But, if the transaction is "closed," then the price synced from Loftyto Brokermint is going to be the "Close Price" under the Basic Info section:
How do I find my "account_id"?
The "account_id" is the same for all agents within the same office and can be found here:
However, if there are multiple offices, each different office has its own "account_id":
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.
Related terms: Brokermint

# Dotloop Integration

- Article ID: `40544264184731`
- Category: `Getting Started`
- Section: `Integrations`
- Updated: `2025-11-17T07:00:01Z`
- Source: https://help.lofty.com/hc/en-us/articles/40544264184731-Dotloop-Integration

## Body

## Introduction

The Dotloop integration with Lofty allows you to not only import your leads into your Dotloop account but also create new loops that sync with Dotloop.

## Summary

- How to Connect Dotloop to Lofty
- How the Integration Works
- FAQs

## How to Connect Dotloop to Lofty

When logged into the Lofty CRM, click Settings > Integrations > Dotloop > Connect :

A new window will pop up and ask you to log into Dotloop. Click the "Sign In" button when you are ready to continue:

You will be asked to approve giving Lofty access to Dotloop. Click Approve if you would like to get this integration working.

Once connected correctly, this integration will appear in the "Existing Integrations" section at the top of the Integrations page. There is a button to disconnect should you need to do so.

## How the Integration Works

Navigate to the lead profile page and export the lead to Dotloop by clicking the three dots and then selecting the option to "Send to Dotloop":

You can also send the lead/transaction directly to Dotloop from the transaction detail page if you happen to be working there:

If the lead has more than one transaction, you will have to select only one to send to Dotloop:

If the lead does not have a transaction, you will be prompted to create one before syncing with Dotloop.

Once you have chosen the transaction, another window will appear that outlines everything that is being sent to Dotloop. You can also choose a specific Dotloop profile that you would like to send the transaction to as well as a Dotloop template that you might want to associate with the transaction:

Once transferred to Dotloop, you can easily access this loop in that system by clicking the link to “View in Dotloop”:

The option to view in Dotloop will also be visible on the transaction detail page:

A log will be added to the timeline of the lead profile documenting the transfer of data from Lofty to Dotloop.

##### Data Synchronization Rules

Category | Lofty Field | Dotloop Field | Sync Direction
Transaction Info | Transaction Name | Loop Name | Lofty → Dotloop
 | Sales Price | Purchase/Sale Price | Two-way
 | GCI | GCI | Two-way
 | Close Date | Closing Date | Two-way
 | Property (Address, Beds, Sqft, Baths, Lot Size) | Property (Address, Bedrooms, Square Footage, Bathrooms, Lot Size) | Lofty → Dotloop
 | Contract Date | Contract Agreement Date | Two-way
 | Transaction Stage (Closed) | Transaction Status (SOLD/LEASED/DONE) | Two-way
Contacts | Contacts | Participants | Lofty → Dotloop
Documents | Documents | Documents | Dotloop → Lofty

### Claiming a Dotloop Transaction

Import unclaimed Dotloop loops and map them to a Lofty transaction by selecting Import Transaction from Dotloop on the Transactions page.

The unclaimed Dotloop transaction panel displays all unmapped loops from Dotloop. These loops are searchable by Transaction Name. Each record includes:

- Dotloop logo
- Loop name (linked to Dotloop)
- Purchase/Sale price

Claim Options:

1. Map to Lofty Transaction Shows suggested Lofty matches by Property Address. Allows manual search and selection if needed. Choose Primary System (Lofty or Dotloop) for data precedence. After confirmation, the Loop ID is mapped and data synced.
2. Create New Transaction Opens Add Transaction popup pre-filled with Dotloop data.
3. Discard Removes the record from the Unclaimed list (confirmation required).

## FAQs

Q: What do I do if the export from Lofty to Dotloop fails?

A: One of the common reasons for this failure is due to access permission settings in Dotloop. To fix this, go to Dotloop > My Account > click Default Profile > choose Make Default and save. Make sure this is the default account that is integrated with Lofty.

If you still have problems exporting leads to Dotloop from Lofty, please contact our Support Team so that this can be looked at more closely.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
The Dotloop integration with Lofty allows you to not only import your leads into your Dotloop account but also create new loops that sync with Dotloop.
Summary
How to Connect Dotloop to Lofty (#h_bdbe2ad4-3299-4d5d-9f72-bf628d94fdbd)
How the Integration Works (#h_228d187d-671d-4985-acb9-92e8675ee829)
FAQs (#h_932d8290-de47-4896-a29a-8f9cc7f540f6)
How to Connect Dotloop to Lofty
When logged into the Lofty CRM, click
Settings
>
Integrations
>
Dotloop
>
Connect
:
A new window will pop up and ask you to log into Dotloop. Click the "Sign In" button when you are ready to continue:
You will be asked to approve giving Lofty access to Dotloop. Click
Approve
if you would like to get this integration working.
Once connected correctly, this integration will appear in the "Existing Integrations" section at the top of the
Integrations
page. There is a button to disconnect should you need to do so.
How the Integration Works
Navigate to the lead profile page and export the lead to Dotloop by clicking the three dots and then selecting the option to "Send to Dotloop":
You can also send the lead/transaction directly to Dotloop from the
transaction detail page
if you happen to be working there:
If the lead has more than one transaction, you will have to select only one to send to Dotloop:
If the lead does not have a transaction, you will be prompted to create one before syncing with Dotloop.
Once you have chosen the transaction, another window will appear that outlines everything that is being sent to Dotloop. You can also choose a specific Dotloop profile that you would like to send the transaction to as well as a Dotloop template that you might want to associate with the transaction:
Once transferred to Dotloop, you can easily access this loop in that system by clicking the link to “View in Dotloop”:
The option to view in Dotloop will also be visible on the transaction detail page:
A log will be added to the timeline of the lead profile documenting the transfer of data from Lofty to Dotloop.
Data Synchronization Rules
Category
Lofty Field
Dotloop Field
Sync Direction
Transaction Info
Transaction Name
Loop Name
Lofty → Dotloop
Sales Price
Purchase/Sale Price
Two-way
GCI
GCI
Two-way
Close Date
Closing Date
Two-way
Property (Address, Beds, Sqft, Baths, Lot Size)
Property (Address, Bedrooms, Square Footage, Bathrooms, Lot Size)
Lofty → Dotloop
Contract Date
Contract Agreement Date
Two-way
Transaction Stage (Closed)
Transaction Status (SOLD/LEASED/DONE)
Two-way
Contacts
Contacts
Participants
Lofty → Dotloop
Documents
Documents
Documents
Dotloop → Lofty
Claiming a Dotloop Transaction
Import unclaimed Dotloop loops and map them to a Lofty transaction by selecting Import Transaction from Dotloop on the Transactions page.
The unclaimed Dotloop transaction panel displays all unmapped loops from Dotloop. These loops are searchable by Transaction Name. Each record includes:
Dotloop logo
Loop name (linked to Dotloop)
Purchase/Sale price
Claim Options:
Map to Lofty Transaction
Shows suggested Lofty matches by Property Address.
Allows manual search and selection if needed.
Choose
Primary System
(Lofty or Dotloop) for data precedence.
After confirmation, the Loop ID is mapped and data synced.
Create New Transaction
Opens
Add Transaction
popup pre-filled with Dotloop data.
Discard
Removes the record from the Unclaimed list (confirmation required).
FAQs
Q:
What do I do if the export from Lofty to Dotloop fails?
A:
One of the common reasons for this failure is due to access permission settings in Dotloop. To fix this, go to
Dotloop
>
My Account
> click
Default Profile
> choose
Make Default
and save. Make sure this is the default account that is integrated with Lofty.
If you still have problems exporting leads to Dotloop from Lofty, please contact our Support Team so that this can be looked at more closely.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

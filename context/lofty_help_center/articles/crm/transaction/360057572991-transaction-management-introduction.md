# Transaction Management Introduction

- Article ID: `360057572991`
- Category: `CRM`
- Section: `Transaction `
- Updated: `2026-04-10T15:33:34Z`
- Source: https://help.lofty.com/hc/en-us/articles/360057572991-Transaction-Management-Introduction

## Body

## Introduction

Managing your transaction data is an extremely important part of doing your job in real estate. Transaction management features have been built into Lofty to provide you with a location to save important numbers, dates, checklists, etc. to assist during the transaction process.

The features for transaction management available in Lofty are intended primarily for reporting purposes as well as to provide tasks that can be used to remind you of what needs to happen at each stage of a transaction process.

## Summary

- Transaction Management Setup
- Adding a New Transaction
- Closing a Transaction
- Commission Disbursement Authorization Generation
- Managing a Transaction
- Exporting and Integrations

## Transaction Management Setup

Before using Lofty Transaction Management to record transactions, you will want to make sure you have it set up to reflect how you manage your transaction process in the real world. The following information will guide you through what can be configured.

### Transaction Views

When you access Lofty Transaction Management you will want to choose the view that best fits your needs. There are two different views:

#### List View

This view supports columns for all of the different fields that are supported when recording a transaction in Lofty. You can use this view to easily view a transaction as a row with dates that can be sorted.

#### Kanban View

With the Kanban view, you have columns/lists that contain a card representing each transaction. Drag/drop a transaction from one column/list to the next to move a transaction down the pipeline. The top of each column/list also contains a total count of the transactions in that stage of the transaction.

### Transaction Search Functionality

Transactions can be searched by Transaction Name, Property Address, and Lead Name in our Transaction Management section. Add filters to refine the search criteria.

To search for transactions associated with leads that you are not assigned to in the primary "Agent" role, check the Include Unowned Transactions box.

### Transaction Pipelines

Each transaction type outlined above (Purchase, Listing, Lease, or Other) will have its pipeline with individual stages representing where the transaction is at in the process.

The default stages available for each transaction type are as follows:

PURCHASE | LISTING | LEASE | OTHER
Pre-Contract Under Contract Pending Closed Canceled | Pre-Listing Active Listing Under Contract Pending Closed | Active Under Contract Pending Closed | Active In Progress Pending Closed

A few important notes regarding transaction stages:

- You can add a “ Stage “ filter with a multiple-select function, allowing you to choose multiple stages for the selected transaction type. The displayed numbers will update dynamically based on the selected filters.
- In addition to "Closed" and "Cancelled," you can create up to 15 stages in total for each transaction type

To edit the transaction stages, click on the gear icon on the far-right side > select "Customize Transaction Stages"

Add new stages, delete/rename the ones you do not want, and drag/drop to reorder.

You can also hide/display "Cancelled Transactions" by checking or unchecking the box found here.

### Transaction Custom Fields

If you want to add transaction fields for milestones that might not be supported by default, navigate to Company/Team Settings → Field Groups → Transaction Custom Field Management

Note: You can add up to 100 custom transaction fields.

The following types of Transaction Custom Fields are available:

1. Date
2. Text
3. Number Includes the option to add a thousand separator comma to the number
4. Percentage
5. Currency
6. Single-Select A list where only one option may be selected
7. Multi-Select A list where multiple options (up to 20 options) may be selected.

To create a new transaction custom field, navigate to Company/Team Settings > Transactions > Field Groups > Transaction Custom Field Management > Custom Fields > + Add New

Click Confirm to save the custom field. If a transaction custom field needs to be changed, click the edit icon. New options can be added or the current options can be deleted or re-ordered.

### Custom Roles

You can add custom roles by navigating to Company Settings > Transaction Roles,

Up to 100 custom roles can be added by clicking on the + Add a Role button. When adding a new role you will assign a name and a type which has four options:

1. Lead/Client - Only leads can be assigned to this role
2. Agent - Only another user on the Lofty account can be assigned to this role
3. Lender - Only a lender-type account can be assigned to this role
4. Vendor/Partner - Only a vendor/partner can be assigned to this role

If you want this role to be filled by the same contact on every transaction, toggle on the Auto-add to new transactions option and select your contact. They will be added to the Default Person column on the Transaction Role page and will be added as on contact on all transactions that you create.

## Adding a New Transaction

A transaction saved in Lofty lives within a lead profile. It can be found on the Transaction Management page, but it always has to be associated with a specific lead. Transactions can be added in a variety of ways as outlined below.

### (1) Adding a transaction via the Lead Profile page

Navigate to a Lead Profile > Transactions > Add New Transaction

### (2) Adding a transaction via the Transaction Management page

There are two different ways to add a transaction via the Transaction Management page and both are outlined below.

#### (a) Adding manually

While on the Transaction Management page, you can click on the + Add button to add a transaction directly from here. You will have to associate it with a specific lead, which can be added directly to the transaction.

#### (b) Adding from an MLS transaction

This option is also accessed directly from the Transaction Management page by clicking on the __ unclaimed MLS transactions button. Please note that "unclaimed" just means these transactions have been pulled from the MLS and are now available to associate with a lead in your Lofty database.

*IMPORTANT : These "Unclaimed Transactions" will only appear if you have added your MLS Agent ID.

Once you click on this button, you will see a list of transactions (assuming there are recent transactions that have closed or are getting close to closing) that you can either claim or delete.

Claiming a transaction simply populates as much information as is available in the fields for a new transaction, or you can match the property to an existing transaction. You will also have to choose the lead who is associated with this transaction.

An introduction email can be sent to the transaction’s contacts when the transaction is first created.

Navigate to the Details View when creating a transaction and check the box next to Send Introduction Email on Assignment to send an email to the provided contacts when the transaction is created. This email can be edited before it is sent.

## Closing a Transaction

To close a transaction, click the Closed/Cancelled stage and select "Closed".

Next, input the sold price, GCI, Commission Splits, and adjustments. The total payment will be calculated. If the GCI will be higher than the close price, such as a Rental transaction, enter the GCI as the total commission to be split or received.

There are three (3) stages of commission splits:

- Add/Deduct Before Splits: These are additions to or deductions from the total amount , before the commission split. These adjustments affect the amount everyone is able to be paid.
- Splits: This is where the commission splits are entered. If additional agents are receiving a split, they may be added here.
- Add/Deduct After Splits: These are any adjustments that individually apply to the team/brokerage OR a particular agent, from their own share of the commission. Use the "Paid From" and "Paid To" columns to indicate which side the payment is coming from.

Lofty CRM allows Vendors, or anyone who is not a member of the Lofty account, to be included in the commission split on a transaction.

When clicking the "Paid To/From" box, the dropdown menu will display some suggestion, which includes the following:

- The transaction owner's Team
- The party that was Recently searched (displaying a maximum of 6)
- A “Temporary Entity” that can be added to this transaction

If the party who should be included in the Commission split is not a Team member or a Vendor on the account, they may be added:

A summary has been added after each Split, so you can see the commission split results in real-time, as you are closing the transaction.

## Commission Disbursement Authorization Generation

To learn more about this feature you can check: Commission Disbursement Authorization (CDA) Generation

## Managing a Transaction

### Transaction Detail Page

The name of the transaction along with the transaction type is displayed in the top-left:

You can adjust the transaction owner or click to be taken to the associated lead with the options here:

Click on the three dots . . . to access additional options associated with integrations, edit, or delete the transaction:

To move a transaction to the appropriate stage of the pipeline, click on the stage where you would like to move it using this section:

Under the Checklists tab, you can add individual tasks or apply a checklist template. A transaction checklist can be used to create tasks automatically as a transaction is moved to different stages in the transaction pipeline. To learn more about this feature, please refer to the following: Transaction Management Checklists .

The Accounting tab will show you the transaction numbers. This is also where you can add or edit the splits related to the transaction.

The Contacts tab allows you to send the basic lead contact information and simple details from the transaction itself to a vendor/partner saved in your settings. For more information on how to use this feature, see How to Assign a Vendor/Partner to a Transaction .

You can upload documents that are intended to be saved with this transaction to the Documents tab. To use a document, you can access it here but will have to download to your computer and then upload it elsewhere as needed.

The History tab simply serves as a log for all activity related to the transaction.

Once a transaction is tied to a listing, the lead's information will also be listed on the Smart Listing page:

## Exporting and Integrations

If you have the "Export Transactions" permission enabled, you are able to export transaction data to a csv file.

Transactions recorded in Lofty can connect to a few other services that are worth noting. Please be aware that just because a connection is available to these services does not mean that a two-way sync is 100% supported for all data. Be sure to review each Help Center article if you are interested in learning more about the integration to better understand what can and cannot be done with each integration.

- Brokermint Integration
- SkySlope Integration
- Dotloop Integration

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your CRM.

Related terms: transaction management, checklist, transaction tasks, commission

## Plain Text

Introduction
Managing your transaction data is an extremely important part of doing your job in real estate. Transaction management features have been built into Lofty to provide you with a location to save important numbers, dates, checklists, etc. to assist during the transaction process.
The features for transaction management available in Lofty are intended primarily for reporting purposes as well as to provide tasks that can be used to remind you of what needs to happen at each stage of a transaction process.
Summary
Transaction Management Setup (#h_01EZDW5A624RNZFWC0J6FEB79N)
Adding a New Transaction (#h_01EZDW6454VPMH4HN41R5CPR25)
Closing a Transaction (#h_01H52X0TDF3C00YFW5WAZH2ZY9)
Commission Disbursement Authorization Generation (#h_01HN3GWC18HH1Q3KRW8V46VRWW)
Managing a Transaction (#01H8QDNSJJGWV97G809HZNHPF9)
Exporting and Integrations (#h_01EZFTQ5DM17QP319Y0PT3N9AG)
Transaction Management Setup
Before using Lofty Transaction Management to record transactions, you will want to make sure you have it set up to reflect how you manage your transaction process in the real world. The following information will guide you through what can be configured.
Transaction Views
When you access Lofty
Transaction Management
you will want to choose the view that best fits your needs. There are two different views:
List View
This view supports columns for all of the different fields that are supported when recording a transaction in Lofty. You can use this view to easily view a transaction as a row with dates that can be sorted.
Kanban View
With the Kanban view, you have columns/lists that contain a card representing each transaction. Drag/drop a transaction from one column/list to the next to move a transaction down the pipeline. The top of each column/list also contains a total count of the transactions in that stage of the transaction.
Transaction Search Functionality
Transactions can be searched by Transaction Name, Property Address, and Lead Name in our Transaction Management section. Add filters to refine the search criteria.
To search for transactions associated with leads that you are not assigned to in the primary "Agent" role, check the
Include Unowned Transactions
box.
Transaction Pipelines
Each transaction type outlined above (Purchase, Listing, Lease, or Other) will have its pipeline with individual stages representing where the transaction is at in the process.
The default stages available for each transaction type are as follows:
PURCHASE
LISTING
LEASE
OTHER
Pre-Contract
Under Contract
Pending
Closed
Canceled
Pre-Listing
Active Listing
Under Contract
Pending
Closed
Active
Under Contract
Pending
Closed
Active
In Progress
Pending
Closed
A few important notes regarding transaction stages:
You can add a “
Stage
“ filter with a multiple-select function, allowing you to choose multiple stages for the selected transaction type. The displayed numbers will update dynamically based on the selected filters.
In addition to "Closed" and "Cancelled," you can create up to 15 stages in total for each transaction type
To edit the transaction stages,
click on the gear icon on the far-right side
>
select "Customize Transaction Stages"
Add new stages, delete/rename the ones you do not want, and drag/drop to reorder.
You can also hide/display "Cancelled Transactions" by checking or unchecking the box found here.
Transaction Custom Fields
If you want to add transaction fields for milestones that might not be supported by default, navigate to
Company/Team Settings → Field Groups → Transaction Custom Field Management
Note:
You can add up to 100 custom transaction fields.
The following types of Transaction Custom Fields are available:
Date
Text
Number
Includes the option to add a thousand separator comma to the number
Percentage
Currency
Single-Select
A list where only one option may be selected
Multi-Select
A list where multiple options (up to 20 options) may be selected.
To create a new transaction custom field, navigate to
Company/Team Settings > Transactions > Field Groups > Transaction Custom Field Management > Custom Fields > + Add New
Click
Confirm
to save the custom field. If a transaction custom field needs to be changed, click the edit icon. New options can be added or the current options can be deleted or re-ordered.
Custom Roles
You can add custom roles by navigating to
Company Settings
>
Transaction Roles,
Up to 100 custom roles can be added by clicking on the
+ Add a Role
button. When adding a new role you will assign a
name
and a
type
which has four options:
Lead/Client - Only leads can be assigned to this role
Agent - Only another user on the Lofty account can be assigned to this role
Lender - Only a lender-type account can be assigned to this role
Vendor/Partner - Only a vendor/partner can be assigned to this role
If you want this role to be filled by the same contact on every transaction, toggle on the
Auto-add to new transactions
option and select your contact. They will be added to the
Default Person
column on the Transaction Role page and will be added as on contact on all transactions that you create.
Adding a New Transaction
A transaction saved in Lofty lives within a lead profile. It can be found on the Transaction Management page, but it always has to be associated with a specific lead. Transactions can be added in a variety of ways as outlined below.
(1) Adding a transaction via the Lead Profile page
Navigate to a
Lead Profile
>
Transactions
>
Add New Transaction
(2) Adding a transaction via the Transaction Management page
There are two different ways to add a transaction via the
Transaction Management
page and both are outlined below.
(a) Adding manually
While on the
Transaction Management
page, you can click on the
+ Add
button to add a transaction directly from here. You will have to associate it with a specific lead, which can be added directly to the transaction.
(b) Adding from an MLS transaction
This option is also accessed directly from the
Transaction Management
page by clicking on the
__ unclaimed MLS transactions
button. Please note that "unclaimed" just means these transactions have been pulled from the MLS and are now available to associate with a lead in your Lofty database.
*IMPORTANT
: These "Unclaimed Transactions" will only appear if you have added your MLS Agent ID.
Once you click on this button, you will see a list of transactions (assuming there are recent transactions that have closed or are getting close to closing) that you can either claim or delete.
Claiming a transaction simply populates as much information as is available in the fields for a new transaction, or you can match the property to an existing transaction. You will also have to choose the lead who is associated with this transaction.
An introduction email can be sent to the transaction’s contacts when the transaction is first created.
Navigate to the Details View when creating a transaction and check the box next to Send Introduction Email on Assignment to send an email to the provided contacts when the transaction is created. This email can be edited before it is sent.
Closing a Transaction
To close a transaction, click the
Closed/Cancelled
stage and select "Closed".
Next, input the sold price, GCI, Commission Splits, and adjustments. The total payment will be calculated. If the GCI will be higher than the close price, such as a Rental transaction, enter the GCI as the total commission to be split or received.
There are three (3) stages of commission splits:
Add/Deduct Before Splits:
These are additions to or deductions from the
total amount
, before the commission split.
These adjustments affect the amount everyone is able to be paid.
Splits:
This is where the commission splits are entered.
If additional agents are receiving a split, they may be added here.
Add/Deduct After Splits:
These are any adjustments that individually apply to the team/brokerage OR a particular agent, from their own share of the commission.
Use the "Paid From" and "Paid To" columns to indicate which side the payment is coming from.
Lofty CRM allows Vendors, or anyone who is not a member of the Lofty account, to be included in the commission split on a transaction.
When clicking the "Paid To/From" box, the dropdown menu will display some suggestion, which includes the following:
The transaction owner's Team
The party that was Recently searched (displaying a maximum of 6)
A “Temporary Entity” that can be added to this transaction
If the party who should be included in the Commission split is not a Team member or a Vendor on the account, they may be added:
A summary has been added after each Split, so you can see the commission split results in real-time, as you are closing the transaction.
Commission Disbursement Authorization Generation
To learn more about this feature you can check:
Commission Disbursement Authorization (CDA) Generation (https://help.lofty.com/hc/en-us/articles/18252204443547)
Managing a Transaction
Transaction Detail Page
The name of the transaction along with the transaction type is displayed in the top-left:
You can adjust the transaction owner or click to be taken to the associated lead with the options here:
Click on the three dots
. . .
to access additional options associated with integrations, edit, or delete the transaction:
To move a transaction to the appropriate stage of the pipeline, click on the stage where you would like to move it using this section:
Under the
Checklists
tab, you can add individual tasks or apply a checklist template. A
transaction checklist can be used to create tasks automatically as a transaction is moved to different stages in the transaction pipeline. To learn more about this feature, please refer to the following:
Transaction Management Checklists (https://help.lofty.com/hc/en-us/articles/360057001712)
.
The
Accounting
tab will show you the transaction numbers. This is also where you can add or edit the splits related to the transaction.
The
Contacts
tab allows you to send the basic lead contact information and simple details from the transaction itself to a vendor/partner saved in your settings. For more information on how to use this feature, see
How to Assign a Vendor/Partner to a Transaction (https://help.lofty.com/hc/en-us/articles/360004792091)
.
You can upload documents that are intended to be saved with this transaction to the
Documents
tab. To use a document, you can access it here but will have to download to your computer and then upload it elsewhere as needed.
The
History
tab simply serves as a log for all activity related to the transaction.
Once a transaction is tied to a listing, the lead's information will also be listed on the Smart Listing page:
Exporting and Integrations
If you have the "Export Transactions" permission enabled, you are able to export transaction data to a csv file.
Transactions recorded in Lofty can connect to a few other services that are worth noting. Please be aware that just because a connection is available to these services does
not
mean that a two-way sync is 100% supported for all data. Be sure to review each Help Center article if you are interested in learning more about the integration to better understand what
can
and
cannot
be done with each integration.
Brokermint Integration (https://help.lofty.com/hc/en-us/articles/360054860192)
SkySlope Integration (https://help.lofty.com/hc/en-us/articles/360036580712)
Dotloop Integration (https://help.lofty.com/hc/en-us/articles/115003826571)
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your CRM.
Related terms: transaction management, checklist, transaction tasks, commission

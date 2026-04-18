# Lead Import (via CSV/Spreadsheet)

- Article ID: `360001710831`
- Category: `CRM`
- Section: `Lead Import & Export`
- Updated: `2025-11-07T06:23:44Z`
- Source: https://help.lofty.com/hc/en-us/articles/360001710831-Lead-Import-via-CSV-Spreadsheet

## Body

## Introduction

Unless you are brand new to the world of real estate, you will likely have people you are already working with before joining Lofty. With that in mind, here is a brief description of how to import leads into the Lofty CRM.

We recommend using the sample file linked at the bottom of the article to configure your leads before uploading.

## Summary

- Important Notes & Suggestions
- CSV/Spreadsheet Import Steps
- Supported Fields
- Reverse Option
- Import History
- Importing to Lead Pond
- Email Verification
- Opt-In Probationary Period
- Google Contacts Import
- Import from Contacts (Lofty App)

## Important Notes & Best Practices

1. It is usually best practice to wait to upload your leads until after your Lofty website is live and working, in case you want to send a welcome email (see Set Up the Welcome Email ) or set these leads up on auto property alerts (see Setting Up and Using Auto-Property Alerts ). Without the website having the MLS data fully integrated, neither of those two options is possible.
2. Supported Sources: Google Contacts Spreadsheets in CSV, XLS, and XLSX (MS Excel) format
3. It is recommended to do a test import of 2-5 leads as you begin to use this tool so that you can make sure they import correctly before importing a large number of leads
4. If your spreadsheet has more than 10,000 rows, you will need to split the file and import it separately. Keep in mind that the bigger the file, the longer it will take to import. There is no limit to how many leads you can have in Lofty, but you can only import 10,000 rows at a time. If you have more than 50,000 leads to import, we recommend reaching out to support@lofty.com to request advanced import assistance.
5. If you try to upload the leads once but the import did not work correctly, you must go through and delete them all before trying again. To do so, go to the People Page select the leads to be deleted, choose "Delete" from the menu on the left, and then confirm. Then, you will need to go into the "Deleted Leads" section at the top of the People Page (this is like a "recycle bin"), to make sure they are completely removed from the system. If you do not erase them completely from the "Deleted Leads" section, new imports will merge or skip based on leads that exist there.
6. Admin/ Owner must create the pipelines prior to import for easier mapping later in the process. If a Pipeline is not similar to the one found in the import file it will be imported as a tag.
7. If you want to move more than 5000 leads at a time from one agent to another, kindly reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your CRM.

## CSV/Spreadsheet Import Steps

First, follow these steps to get to the right section in the CRM:

1. Navigate to your Personal Settings
2. Select Lead Import under the Lead Settings section
3. Drag and drop your file or click Upload File to begin the import process

We simplify the import process and support the selection of different competing products. After selection, the competing product and Lofty fields will be matched automatically.

By default, the system will attempt to match the column names from the spreadsheet with the fields where the data belongs in Lofty. Typically, however, you will need to tell the data where to go in Lofty. You will do this by (a) referencing the column name and samples of the file which are available on the right side, and then (b) clicking on the "edit" option in the "Lofty Field Name" column to designate the destination of that data in Lofty. For example, you would want to make sure "Lead Type" matches with "Lead Type" in Lofty.

Repeat the above process until all the columns from the document are matched to fields in Lofty. Even if all the fields show as "matched," you will want to review them to make sure they import correctly. When you come across a situation where no field in Lofty matches the data you are attempting to import, you have two options:

1. Import directly to a custom field. You can only create 50 custom fields that are either "Date" or "Text." See Custom Fields .

2. Import the data as a note. This will bring the column name into the note along with the data itself. This will then be saved to a lead profile for future reference. This information is not searchable.

## Supported Fields

The following are all of the supported fields that you can import into:

General Options

- Do Not Import. Use this option to skip a column.
- Import as Note

Basic Info

- First Name
- Middle Name
- Last Name
- Full Name
- Email
- Email Description
- Unsubscribe Can be marked as any of the following three to mark as "Unsubscribed": yes/out/unsubscribe If unsubscribed, the corresponding lead will keep automated emails (Smart Plan emails, property alerts, market snapshots, and market reports) from being sent to the lead. However, this does not affect text messages sent (see "Phone DNC Status" below for options there).
- Phone Can also be formatted with dashes ###-####-####
- Phone Description
- Phone DNC Status DNC stands for Do Not Contact. Use this to mark a number as one to not contact. To mark as DNC, any of the following three options will work: yes/DNC/out
- Pipeline If the information within this field is not the same or similar to already-created Pipeline Stages, it will be imported as a tag. If you have the appropriate permissions, you should create any custom Pipeline Stages before performing a Lead Import. See more on managing and creating Pipeline Stages here: Lead Organization With Pipeline Stages
- Segment If you do not have permission to create a segment, the information within this field will be imported as a tag
- Agent Who the lead should be assigned to and who is a user of Lofty? Must be their name exactly as it appears in Lofty.
- Lender The lender-type account to whom the lead should be assigned. Must be their name exactly as it appears in Lofty.
- Mailing Full Address
- Mailing Street Address.
- Mailing City
- Mailing State
- Mailing Zip Code
- Reg Date Formatted as the following: 01/03/2019
- Lead Type Buyer Seller Renter Investor Agent Homeowner Landlord Other To import a lead with a combination of Lead Types (i.e. both an Investor AND a Buyer), the lead type should be formatted as: "Investor|Buyer", separating the desired lead types with a vertical bar "|".
- Source If you do not have permission to create a source, the information within this field will be imported as a tag. Also, if no source is defined in the import, the default source will be "CSV Import"
- Tag
- Birthday Formatted as the following: 01/03/2019
- Seller Timeframe Seller leads only. Based on the number of months. Options: N/A 0-1 1-3 3-6 6-12 12+ Just Looking Refinancing
- Buyer Timeframe Buyer leads only. Based on the number of months, it can be any one of the following: Options: N/A 0-1 1-3 3-6 6-12 12+ Just Looking Refinancing
- Pre-Qualified N/A Yes No
- Family Member Up to four family members can be added Fields: Family Member First Name Family Member Last Name Family Member Full Name Family Member Email Family Member Phone Can also be formatted with dashes ###-####-#### Family Member Birthday Formatted as the following: 01/03/2019
- Inquiries (for a buyer) Also known as "Search Criteria" Fields: Inquired City If you would like to add more than one zip code, please separate each of them with a vertical bar: " | ". For example: City1|City2|City3|City4. The city will line up with the states if you add multiple so in this example, City3 would line up with State3. Inquired State If you would like to add more than one zip code, please separate each of them with the vertical bar: " | ". For example: State1|Stat2|State3|State4. The state will line up with the cities if you add multiple so in this example, State1 would line up with City1. Inquired Zip Code If you would like to add more than one zip code, please separate each of them with a vertical bar: " | ". For example 11111|22222|33333|44444. The zip code will be added separately from the city/state. Inquired County Max Price Min Price Avg./Median Price Min Bedroom Min Bathroom Property Type Single Family Home Townhouse Manufactured Home Vacant Land
- Property Info (Selling) Up to two properties can be added Fields: Property Full Addr. Property Street Address Property City Property State Property Zip Code Price Bedroom Bathroom Property Type Single Family Home Townhouse Manufactured Home Vacant Land
- Property Info (Buying) Up to three properties can be added. Fields: Property Full Addr. Property Street Address Property City Property State Property Zip Code Price Bedroom Bathroom Property Type Single Family Home Townhouse Manufactured Home Vacant Land
- Custom Fields. Reference Custom Fields .

Click on the blue "+" to add additional slots for Family Members, Property Info (Selling), and Property Info (Buying). Limits to how many of each can be added are noted above.

Once you have matched up all of the columns and have everything mapped to the desired location in Lofty, click on the "Next" button in the bottom right.

You will be presented with the following options to choose from.

- Select the ownership level. Leads can be imported as your Personal leads or to a Company or Office that you are a part of.
- Add the imported leads to a Segment .
- Assign unmatched leads to a specific A gent or Lead Pond .
- Assign unmatched leads to a L ender .
- Choose to M erge or Skip duplicate leads. If merged, the incoming data will merge and be saved as a note on that lead profile. For the logic on merging, please reference Duplicate Leads + Merging Duplicates . If skipped, the duplicate lead data will not be imported.

- Decide whether to send Welcome Emails to these imported leads or not. If you choose yes, you will want to make sure your IDX Website is up and ready with MLS data, etc. This will send out an email with that lead's login information so that they can connect to your Lofty IDX website and begin browsing listings.
- Choose to apply Auto Property Alerts if so desired. These will be based on any property information that comes in during the import.

When you are ready, you can select "Confirm." The file will then begin importing. If it is a large document, it might take some time to complete. You will receive a notification via email and a web push notification letting you know the file import has been completed.

## Reverse Option

When importing leads, there is often a need to reverse the import and remove the leads that were created because the import was done incorrectly, etc. Lofty allows users to reverse their import after one has already been processed as long as it is within 30 days of actually importing the leads . This option is available under Personal Settings > Lead Settings > Lead Import > Import History > Reverse .

This will work regardless of whether the leads have been contacted, etc. The option will no longer be available after 24 hours of processing the import. The leads will be deleted completely from the system with this option--meaning they will not be sent to the "Deleted Leads" section of the People page.

*For merged leads, they will stay in the system just as imported--the data imported/merged cannot be reversed if it was merged to an existing lead.

## Import History

You can review all leads that failed to import by navigating to Settings > Lead Import and then selecting the "Details" hyperlink next to the file that you want to download a report on. This is a great way to make sure that everything makes its way into Lofty correctly.

## Email Verification

If the lead was imported in a CSV file, the Lofty system will call a third-party API to determine the validity of the lead's email address. We will mark the lead's email status as "Bounced" if the results provided by the third party indicate that it is an "invalid email." The accuracy level of this third-party API is typically between 90% - 97%.

## Opt-In Probationary Period

If, when importing leads, you see an option to "Send opt-in emails to the leads" under the Lead Import Settings options before finalizing the import, this is due to a high email bounce rate and an opt-in probationary period being triggered. You can learn more about this process here.

## Google Contacts Import

Please reference the following article: Lead Import (via Google Contacts) .

## Import from Contacts (Lofty App)

Another import option is made available through the CRM app. Below are the steps you can follow.

1. Click the People icon in the mobile app> hit the plus sign in the upper right-hand corner.

2. Click the import from contacts button.

3. Select using the search button on top of the radio button on the right side of the contact then click. Refresh your people page to see the newly added contacts.

Note: Currently, there is no select all option for this feature.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your CRM.

Related terms: email verification, lead import, import reversal, opt-out

## Plain Text

Introduction
Unless you are brand new to the world of real estate, you will likely have people you are already working with before joining Lofty. With that in mind, here is a brief description of how to import leads into the Lofty CRM.
We recommend using the sample file
linked at the bottom of the article
to configure your leads before uploading.
Summary
Important Notes & Suggestions (#h_01EC8FNANKEABTFMF6G7HHVMN6)
CSV/Spreadsheet Import Steps (#h_01EC8FNGTTC524NT0P8SZZQ3NZ)
Supported Fields (#h_01HN3JP7BSQZX4C1T8FQZYCVRS)
Reverse Option (#h_159499aa-3246-45ba-824a-a41322b85446)
Import History (#h_01EC8FP20P7H26PXVD6KJH384S)
Importing to Lead Pond (#h_01EC8FPA8NKQCTFEH57PD3K6Q9)
Email Verification (#h_01F9M798DX0363P0A59VG1KYY6)
Opt-In Probationary Period (#h_01F9M75WEJ6SHEP4NWBBQAKQE6)
Google Contacts Import (#h_01EC8FNNBNSG4RNJ3WAFC2Y6S4)
Import from Contacts (Lofty App) (https://help.lofty.com/hc/en-us/articles/360001710831)
Important Notes & Best Practices
It is usually best practice to wait to upload your leads until after your Lofty website is live and working, in case you want to send a welcome email (see
Set Up the Welcome Email (https://help.lofty.com/hc/en-us/articles/360022134491)
) or set these leads up on auto property alerts (see
Setting Up and Using Auto-Property Alerts (https://help.lofty.com/hc/en-us/articles/115002891271)
). Without the website having the MLS data fully integrated, neither of those two options is possible.
Supported Sources:
Google Contacts
Spreadsheets in CSV, XLS, and XLSX (MS Excel) format
It is recommended to do a test import of 2-5 leads as you begin to use this tool so that you can make sure they import correctly before importing a large number of leads
If your spreadsheet has more than 10,000 rows, you will need to split the file and import it separately. Keep in mind that the bigger the file, the longer it will take to import.
There is no limit to how many leads you can have in Lofty, but you can only import 10,000 rows at a time. If you have more than 50,000 leads to import, we recommend reaching out to
support@lofty.com (mailto:support@lofty.com)
to request advanced import assistance.
If you try to upload the leads once but the import did not work correctly, you must go through and delete them all before trying again. To do so, go to the
People Page
select the leads to be deleted, choose "Delete" from the menu on the left, and then confirm. Then, you will need to go into the "Deleted Leads" section at the top of the
People Page
(this is like a "recycle bin"), to make sure they are completely removed from the system. If you do not erase them completely from the "Deleted Leads" section, new imports will merge or skip based on leads that exist there.
Admin/ Owner
must
create the pipelines prior to import for easier mapping later in the process. If a Pipeline is not similar to the one found in the import file it will be imported as a tag.
If you want to move more than 5000 leads at a time from one agent to another, kindly reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your CRM.
CSV/Spreadsheet Import Steps
First, follow these steps to get to the right section in the CRM:
Navigate to your
Personal
Settings
Select
Lead Import
under the
Lead Settings
section
Drag and drop your file or click
Upload File
to begin the import process
We simplify the import process and support the selection of different competing products. After selection, the competing product and Lofty fields will be matched automatically.
By default, the system will attempt to match the column names from the spreadsheet with the fields where the data belongs in Lofty. Typically, however, you will need to tell the data where to go in Lofty. You will do this by (a) referencing the column name and samples of the file which are available on the right side, and then (b) clicking on the "edit" option in the "Lofty Field Name" column to designate the destination of that data in Lofty. For example, you would want to make sure "Lead Type" matches with "Lead Type" in Lofty.
Repeat the above process until all the columns from the document are matched to fields in Lofty. Even if all the fields show as "matched," you will want to review them to make sure they import correctly. When you come across a situation where no field in Lofty matches the data you are attempting to import, you have two options:
1. Import directly to a custom field. You can only create 50 custom fields that are either "Date" or "Text." See
Custom Fields (https://help.chime.me/hc/en-us/articles/360054872212)
.
2. Import the data as a note. This will bring the column name into the note along with the data itself. This will then be saved to a lead profile for future reference. This information is
not
searchable.
Supported Fields
The following are all of the supported fields that you can import into:
General Options
Do Not Import. Use this option to skip a column.
Import as Note
Basic Info
First Name
Middle Name
Last Name
Full Name
Email
Email Description
Unsubscribe
Can be marked as any of the following three to mark as "Unsubscribed": yes/out/unsubscribe
If unsubscribed, the corresponding lead will keep automated emails (Smart Plan emails, property alerts, market snapshots, and market reports) from being sent to the lead. However, this does
not
affect text messages sent (see "Phone DNC Status" below for options there).
Phone
Can also be formatted with dashes ###-####-####
Phone Description
Phone DNC Status
DNC stands for Do Not Contact. Use this to mark a number as one to
not
contact. To mark as DNC, any of the following three options will work: yes/DNC/out
Pipeline
If the information within this field is not the same or similar to already-created Pipeline Stages, it will be imported as a tag. If you have the appropriate permissions, you should create any custom Pipeline Stages before performing a Lead Import. See more on managing and creating Pipeline Stages here:
Lead Organization With Pipeline Stages (https://help.lofty.com/hc/en-us/articles/115002890651-Lead-Organization-with-Pipeline-Stages)
Segment
If you do not have permission to create a segment, the information within this field will be imported as a tag
Agent
Who the lead should be assigned to and who is a user of Lofty? Must be their name exactly as it appears in Lofty.
Lender
The
lender-type account
to whom the lead should be assigned. Must be their name exactly as it appears in Lofty.
Mailing Full Address
Mailing Street Address.
Mailing City
Mailing State
Mailing Zip Code
Reg Date
Formatted as the following: 01/03/2019
Lead Type
Buyer
Seller
Renter
Investor
Agent
Homeowner
Landlord
Other
To import a lead with a combination of Lead Types (i.e. both an Investor AND a Buyer), the lead type should be formatted as:
"Investor|Buyer", separating the desired lead types with a vertical bar "|".
Source
If you do not have permission to create a source, the information within this field will be imported as a tag. Also, if no source is defined in the import, the default source will be "CSV Import"
Tag
Birthday
Formatted as the following: 01/03/2019
Seller Timeframe
Seller leads only. Based on the number of months.
Options:
N/A
0-1
1-3
3-6
6-12
12+
Just Looking
Refinancing
Buyer Timeframe
Buyer leads only. Based on the number of months, it can be any one of the following:
Options:
N/A
0-1
1-3
3-6
6-12
12+
Just Looking
Refinancing
Pre-Qualified
N/A
Yes
No
Family Member
Up to four family members can be added
Fields:
Family Member First Name
Family Member Last Name
Family Member Full Name
Family Member Email
Family Member Phone
Can also be formatted with dashes ###-####-####
Family Member Birthday
Formatted as the following: 01/03/2019
Inquiries (for a buyer)
Also known as "Search Criteria"
Fields:
Inquired City
If you would like to add more than one zip code, please separate each of them with a vertical bar: " | ". For example: City1|City2|City3|City4. The city will line up with the states if you add multiple so in this example, City3 would line up with State3.
Inquired State
If you would like to add more than one zip code, please separate each of them with the vertical bar: " | ". For example: State1|Stat2|State3|State4. The state will line up with the cities if you add multiple so in this example, State1 would line up with City1.
Inquired Zip Code
If you would like to add more than one zip code, please separate each of them with a vertical bar: " | ". For example 11111|22222|33333|44444. The zip code will be added separately from the city/state.
Inquired County
Max Price
Min Price
Avg./Median Price
Min Bedroom
Min Bathroom
Property Type
Single Family Home
Townhouse
Manufactured Home
Vacant Land
Property Info (Selling)
Up to two properties can be added
Fields:
Property Full Addr.
Property Street Address
Property City
Property State
Property Zip Code
Price
Bedroom
Bathroom
Property Type
Single Family Home
Townhouse
Manufactured Home
Vacant Land
Property Info (Buying)
Up to three properties can be added.
Fields:
Property Full Addr.
Property Street Address
Property City
Property State
Property Zip Code
Price
Bedroom
Bathroom
Property Type
Single Family Home
Townhouse
Manufactured Home
Vacant Land
Custom Fields. Reference
Custom Fields (https://help.lofty.com/hc/en-us/articles/360054872212)
.
Click on the blue "+" to add additional slots for Family Members, Property Info (Selling), and Property Info (Buying). Limits to how many of each can be added are noted above.
Once you have matched up all of the columns and have everything mapped to the desired location in Lofty, click on the "Next" button in the bottom right.
You will be presented with the following options to choose from.
Select the ownership level. Leads can be imported as your
Personal
leads or to a
Company
or
Office
that you are a part of.
Add the imported leads to a
Segment
.
Assign unmatched leads to a specific
A
gent
or
Lead Pond
.
Assign unmatched leads to a
L
ender
.
Choose to
M
erge or Skip
duplicate leads.
If merged, the incoming data will merge and be saved as a note on that lead profile.
For the logic on merging, please reference
Duplicate Leads + Merging Duplicates (https://help.lofty.com/hc/en-us/articles/360054872172)
.
If skipped, the duplicate lead data will not be imported.
Decide whether to send
Welcome Emails
to these imported leads or not. If you choose yes, you will want to make sure your IDX Website is up and ready with MLS data, etc. This will send out an email with that lead's login information so that they can connect to your Lofty IDX website and begin browsing listings.
Choose to apply
Auto Property Alerts
if so desired. These will be based on any property information that comes in during the import.
When you are ready, you can select "Confirm." The file will then begin importing. If it is a large document, it might take some time to complete. You will receive a notification via email and a web push notification letting you know the file import has been completed.
Reverse Option
When importing leads, there is often a need to reverse the import and remove the leads that were created because the import was done incorrectly, etc. Lofty allows users to reverse their import after one has already been processed
as long as it is within 30 days of actually importing the leads
. This option is available under
Personal
Settings
>
Lead Settings
>
Lead Import
>
Import History
>
Reverse
.
This will work regardless of whether the leads have been contacted, etc. The option will no longer be available after 24 hours of processing the import. The leads will be deleted completely from the system with this option--meaning they will
not
be sent to the "Deleted Leads" section of the
People
page.
*For merged leads, they will stay in the system just as imported--the data imported/merged cannot be reversed if it was merged to an existing lead.
Import History
You can review all leads that failed to import by navigating to
Settings
>
Lead Import
and then selecting the "Details" hyperlink next to the file that you want to download a report on. This is a great way to make sure that everything makes its way into Lofty correctly.
Email Verification
If the lead was imported in a CSV file, the Lofty system will call a third-party API to determine the validity of the lead's email address. We will mark the lead's email status as "Bounced" if the results provided by the third party indicate that it is an "invalid email." The accuracy level of this third-party API is typically between 90% - 97%.
Opt-In Probationary Period
If, when importing leads, you see an option to "Send opt-in emails to the leads" under the
Lead Import Settings
options before finalizing the import, this is due to a high email bounce rate and an opt-in probationary period being triggered. You can learn more about this process
here. (https://help.lofty.com/hc/en-us/articles/4403048145307#h_01FMSYMKREB8WBVMKRAZ1SEHM3)
Google Contacts Import
Please reference the following article:
Lead Import (via Google Contacts) (https://help.lofty.com/hc/en-us/articles/360049874951)
.
Import from Contacts (Lofty App)
Another import option is made available through the CRM app. Below are the steps you can follow.
1. Click the People icon in the mobile app> hit the plus sign in the upper right-hand corner.
2. Click the import from contacts button.
3. Select using the search button on top of the radio button on the right side of the contact then click. Refresh your people page to see the newly added contacts.
Note:
Currently, there is no select all option for this feature.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your CRM.
Related terms: email verification, lead import, import reversal, opt-out

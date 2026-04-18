# Email and Text Variables

- Article ID: `360055270071`
- Category: `CRM`
- Section: `Lead & Agent Variables`
- Updated: `2025-11-14T22:57:35Z`
- Source: https://help.lofty.com/hc/en-us/articles/360055270071-Email-and-Text-Variables

## Body

## Introduction

Variables, in Lofty, known elsewhere as "merge fields," can be used to bring specific information into your email/text templates so that you can send them out in mass or via automation but still include specific information related to a lead or the assigned agent of that lead.

## Summary

- Lead Variables
- Listing Variables
- Agent Variables
- Transaction Variables
- General Variables
- Automated Email Template Variables
- Unavailable Variable Data

## Lead Variables

- Lead Name - #lead_name#
- Lead Link - #Lead_Link#
- Lead First Name - #lead_first_name#
- Lead Last Name - #lead_last_name#
- Lead Email - #lead_email#
- Lead Phone - #lead_phone#
- Lead Source - #lead_source#
- Lead Mailing Address - #lead_mailing_address# Lead Mailing Address Street - #lead_mailing_address_street# Lead Mailing Address City - #lead_mailing_address_city# Lead Mailing Address State - #lead_mailing_address_state# Lead Mailing Address Zip - #lead_mailing_address_zip#
- Seller Lead Address - #seller_lead_address# Seller Lead Address Street - #seller_lead_address_street# Seller Lead Address City - #seller_lead_address_city# Seller Lead Address State - #seller_lead_address_state# Seller Lead Address Zip - #seller_lead_address_zip#
- Seller Property Price - #seller_property_price#
- Buyer Lead City - #buyer_lead_city#
- Lead Inquiry County - #Lead_Inquiry_County#
- Lead Inquiry Zip - #Lead_Inquiry_Zip#
- Buyer Property Address - #buyer_property_address# Buyer Property Address Street - #buyer_property_address_street# Buyer Property Address City - #buyer_property_address_city# Buyer Property Address State - #buyer_property_address_state# Buyer Property Address Zip - #buyer_property_address_zip#
- Buyer Inquiry Price - #buyer_inquiry_price#
- Custom Field - #custom_field_[custom field here]#

### Lead Name - #lead_name#

*Available for all lead types.

The full name (first + last) of a lead.

### Lead Link - #Lead_Link#

Refers to the lead detail page URL.

### Lead First Name - #lead_first_name#

*Available for all lead types.

The first name of a lead.

### Lead Last Name - #lead_last_name#

*Available for all lead types.

The last name of a lead.

### Lead Email - #lead_email#

*Available for all lead types.

A lead's primary email address.

### Lead Phone - #lead_phone#

*Available for all lead types.

A lead's primary phone number.

### Lead Source - #lead_source#

*Available for all lead types.

The source of a lead. For more information, see Lead Source Logic .

### Lead Mailing Address - #lead_mailing_address#

*Available for all lead types.

The full mailing address of a lead (not the property address). If you need individual parts of an address, use the segmented variables below instead.

#### Lead Mailing Address Street - #lead_mailing_address_street#

*Available for all lead types.

The mailing street address only--of a lead.

#### Lead Mailing Address City - #lead_mailing_address_city#

*Available for all lead types.

The mailing city only--of a lead.

#### Lead Mailing Address State - #lead_mailing_address_state#

*Available for all lead types.

The mailing state only--of a lead.

#### Lead Mailing Address Zip - #lead_mailing_address_zip#

*Available for all lead types.

The mailing zip only--of a lead.

### Family Member First Name - #Family_member_first_name#

*Available for all leads

If multiple family members are connected to a lead, all their first names will be displayed, separated by a comma.

### Seller Property Address - #seller_property_address#

*Only available for seller-type leads.

Renamed: From Seller Lead Address to Seller_Property_Address Refers to the address of a property listed on a seller lead under the Selling category. Properties are found under the Engagement tab of a lead profile. If you would like to break down the address further (e.g., street, city), please refer to the segmented variables that follow this one. Uses the "Selling" property if available; if not, falls back to "Buying" property, then to mailing address.

If the lead has multiple properties under this label type, this variable will produce the complete address that was added to the lead profile most recently. The newest property.

#### Seller Lead Address Street - #seller_lead_address_street#

*Only available for seller-type leads.

Refers to the street address only of a property listed on a seller lead under the Selling category. Properties are found under the Engagement tab of a lead profile.

If the lead has multiple properties under this label type, this variable will produce the street address that was added to the lead profile most recently. The newest property.

#### Seller Lead Address City - #seller_lead_address_city#

*Only available for seller-type leads.

Refers to the city only of a property listed on a seller lead under the Selling category. Properties are found under the Engagement tab of a lead profile.

If the lead has multiple properties under this label type, this variable will produce the city for the address that was added to the lead profile most recently. The newest property.

#### Seller Lead Address State - #seller_lead_address_state#

*Only available for seller-type leads.

Refers to the state only of a property listed on a seller lead under the Selling category. Properties are found under the Engagement tab of a lead profile.

If the lead has multiple properties under this label type, this variable will produce the state for the address that was added to the lead profile most recently. The newest property.

#### Seller Lead Address Zip - #seller_lead_address_zip#

*Only available for seller-type leads.

Refers to the zip code only of a property listed on a seller lead under the Selling category. Properties are found under the Engagement tab of a lead profile.

If the lead has multiple properties under this label type, this variable will produce the zip code for the address that was added to the lead profile most recently. The newest property.

### Seller Property Price - #seller_property_price#

*Only available for seller-type leads.

Refers to the price of a property listed on a seller lead under the Selling category. Properties are found under the Engagement tab of a lead profile. Uses the price of selling the property; if unavailable, uses the buying property price.

If the lead has multiple properties under this label type, this variable will produce the price for the address that was added to the lead profile most recently. The newest property.

### Lead Inquiry City - #Lead_Inquiry_City#

*Only available for buyer-type leads.

Refers to the city name the lead has searched for on your Lofty website. This can be added automatically as a result of the lead's activities on your Lofty website, or you can add it manually by editing the Search Criteria on a lead profile.

If the lead has searched multiple cities, this variable will produce all of the results that were searched on your Lofty website.

### Lead Inquiry County - #Lead_Inquiry_County#

*Only available for buyer-type leads.

Refers to the county name the lead has searched for on your Lofty website. This can be added automatically as a result of the lead's activities on your Lofty website, or you can add it manually by editing the Search Criteria on a lead profile.

If the lead has searched multiple counties, this variable will produce all of the results that were searched on your Lofty website.

### Lead Inquiry Zip - #Lead_Inquiry_Zip#

*Only available for buyer-type leads.

Refers to the zip code the lead has searched for on your Lofty website. This can be added automatically as a result of the lead's activities on your Lofty website, or you can add it manually by editing the Search Criteria on a lead profile.

If the lead has searched multiple zip codes, this variable will produce all of the results that were searched on your Lofty website.

### Buyer Property Address - #buyer_property_address#

*Only available for buyer-type leads.

The full address for the most recently added property is added to a buyer lead under the Buying label. Uses the "Buying" property if available; if not, falls back to "Selling" property, then to mailing address:

The full mailing address of a lead (not the property address). If you need individual parts of an address, use the segmented variables below instead.

#### Buyer Property Address Street - #buyer_property_address_street#

*Only available for buyer-type leads.

The street address is only for the most recently added property added to a buyer lead under the Buying label:

If there are no properties on the lead under the Buying label, it will default to the following instead. . .

The mailing street address only of a lead.

#### Buyer Property Address City - #buyer_property_address_city#

*Only available for buyer-type leads.

The city only for the most recently added property added to a buyer lead under the Buying label:

If there are no properties on the lead under the Buying label, it will default to the following instead. . .

The mailing city only--of a lead.

#### Buyer Property Address State - #buyer_property_address_state#

*Only available for buyer-type leads.

The state only for the most recently added property added to a buyer lead under the Buying label:

If there are no properties on the lead under the Buying label, it will default to the following instead. . .

The mailing state only--of a lead.

#### Buyer Property Address Zip - #buyer_property_address_zip#

*Only available for buyer-type leads.

The zip only for the most recently added property added to a buyer lead under the Buying label:

If there are no properties on the lead under the Buying label, it will default to the following instead. . .

The mailing zip only--of a lead.

### Lead Inquiry Price - # Lead_Inquiry_Price #

*Only available for buyer-type leads. Renamed from Buyer_inquired_Price to Lead_Inquiry_Price

Refers to the price of the listing the lead has searched for according to the "Buyer_Lead_City" variable.
### Custom Field - #custom_field_[custom field here]#

*Available for all lead types.

If you have configured custom fields (see Custom Fields ), you will be able to pull in the data from those custom fields. There will be a new variable with this same format for every custom field that has been created.

For more information on custom fields, see Custom Fields .

## Listing Variables

Listing variables allow a listing link or address to be added to a text or email via the variable tool. There are two options for adding listing variables. Note: For all text messages, the variable will only provide the address, not a clickable link. This is available to all users with no permission required.

### Listing Variables in Smart Plans

Listing variables insert a link to a listing or an address, depending on the lead's behavior. In the Smart Plan action, click the house icon to decide what listings should be inserted into the Smart Plan email or text step. Next, see the four (4) options to select the listing(s) that appear in the text or email. Up to 50 listings can be added.

##### Specific Listings

This is the same as inserting any listing into a text or email. The lead's behavior does not have any effect on what listings can be inserted.

##### Insert Listings Saved by Lead

Only listings that the lead has saved in the last 2 years will be inserted.

##### Insert Listings Viewed by Lead

Only listings that the lead has viewed 3 or more times in the last 2 years will be inserted.

##### Insert Listings with Showing Requests

Only listings that which the lead has requested a showing in the last 2 years will be inserted.

When you select Specific Listings, a pop-up allows you to search for and select the specific listings that you want to insert into the text or email.

For the other 3 options, these settings allow you to further filter for the right listings.

Time Frame

This setting allows you to set the time frame for the lead's behavior. For example, you could set this to “Last 30 days” to only include listings that the lead took action on in the last 30 days.

Number of Listings

1 to 50 listings can be included

Hide Listings

This setting allows you to not include listings with a certain status. The status options are Active, Back on Market, Coming Soon, Contingent, and Pending.

If you select a specific listing, it will be visible in the content. If you use the listing settings to select listings that match the lead's behavior, sample data will be input into the content.

If the Smart Plan does not have any listings that meet the criteria, the Smart Plan will be stopped automatically. If a new listing is available that meets the criteria, the Smart Plan will not be restarted from this point. If the lead triggers this Smart Plan again, it will restart from Step 1.

### Listing Variables in Texts and Emails

The text and email variable tool has also been updated to include variables related to listing data. Click the # icon to see the variables.

Latest_Saved_Listing_Address : The most recent listing saved by the lead. Latest_Viewed_Three_Times_Listing_Address : The most recent listing viewed three times or more by the lead. Latest_Requested_Showing_Listing_Address : The most recent listing where a showing was requested by the lead. Latest_Left_Message_Listing_Address : The most recent properties where the lead has left a message. Latest_Requested_Home_Evaluation_Address : Address where a home evaluation report was requested by the lead. Note - this is an address that the lead provided, this is not a listing Listing_Triggered_This_Smart_Plan : The listing that triggered this smart plan (only available in the smart plan template).

## Agent Variables

- Agent Agent Email - #agent_email# Agent Name - #agent_name# Agent First Name - #agent_first_name# Agent Last Name - #agent_last_name# Agent Phone - #agent_phone# Signature - #signature#
- My Website - #my_website#
- Home Evaluation - #home_evaluation#
- Lender Lender Email - #lender_email# Lender Name - #lender_name# Lender First Name - #lender_first_name# Lender Last Name - #lender_last_name# Lender Phone - #lender_phone#
- Custom Roles Assigned [Role] Name - #Assigned_[role name here]_Name# Assigned [Role] First Name - #Assigned_[role name here]_First_Name# Assigned [Role] Last Name - #Assigned_[role name here]_Last_Name# Assigned [Role] Phone - #Assigned_[role name here]_Phone# Assigned [Role] Email - #Assigned_[role name here]_Email# Assigned [Role] Company Name - #Assigned_[role name here]_Company_Name# Assigned [Role] Website - #Assigned_[role name here]_Website# Assigned [Role] License ID - #Assigned_[role name here]_License_ID# Assigned [Role] Position - #Assigned_[role name here]_Position# Assigned [Role] Attachment - #Assigned_[role name here]_Attachment#

### Agent Email - #agent_email#

The email address for the user is listed in the primary "Agent" slot of a lead profile's Assigned to section.

### Agent Sending Email - #Agent_Sending_Email#

Agent Sending Email information found in the Communication Email Settings page.

### Agent Name - #agent_name#

The full name (first + last) for the user listed in the primary "Agent" slot of a lead profile's Assigned to section.

### Agent First Name - #agent_first_name#

The first name for the user listed in the primary "Agent" slot of a lead profile's Assigned to section.

### Agent Last Name - #agent_last_name#

The last name for the user listed in the primary "Agent" slot of a lead profile's Assigned to section.

### Agent Photo -#Agent_Photo#

This is the agent headshot displayed in the Profile section of My User Settings.

### Agent Phone - #agent_phone#

The phone number for the user is listed in the primary "Agent" slot of a lead profile's Assigned to section.

### Signature - #signature#

The email signature for the sender of the email. If sent as an Auto Email from a Smart Plan, the sender is the one listed in the "Assign to" drop-down of the Smart Plan step.

### My Website - #my_website#

The URL to the home page of the sender's Lofty website.

### Home Evaluation - #home_evaluation#

The URL to the main Home Evaluation page of the sender's Lofty IDX website.

### Lender Email - #lender_email#

The email address for the lender-type account user is listed in the primary "Lender" slot of a lead profile's Assigned to section.

### Lender Sending Email -#Lender_Sending_Email#

It follows the same logic as the agent sending email variable.

### Lender Name - #lender_name#

The full name (first + last) for the lender-type account user listed in the primary "Lender" slot of a lead profile's Assigned to section.

### Lender First Name - #lender_first_name#

The first name for the lender-type account user is listed in the primary "Lender" slot of a lead profile's Assigned to section.

### Lender Last Name - #lender_last_name#

The last name for the lender-type account user is listed in the primary "Lender" slot of a lead profile's Assigned to section.

### Lender Phone - #lender_phone#

The phone number for the lender-type account user is listed in the primary "Lender" slot of a lead profile's Assigned to section.

### Assigned [Role] Name - #Assigned_[role name here]_Name#

Additional roles can be created and added to a lead profile Assigned To section (see Creating Custom Roles ). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.

This will produce the full name (first + last) of the user listed in the associated role of the Assigned To section in a lead profile.

### Assigned [Role] First Name - #Assigned_[role name here]_First_Name#

Additional roles can be created and added to a lead profile Assigned To section (see Creating Custom Roles ). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.

This will produce the first name of the user listed in the associated role of the Assigned To section in a lead profile.

### Assigned [Role] Last Name - #Assigned_[role name here]_Last_Name#

Additional roles can be created and added to a lead profile Assigned To section (see Creating Custom Roles ). Whenever that happens, a new variable is created like this one but [role name here] will be replaced by the actual role name that was added.

This will produce the last name of the user listed in the associated role of the Assigned To section in a lead profile.

### Assigned [Role] Phone - #Assigned_[role name here]_Phone#

Additional roles can be created and added to a lead profile Assigned To section (see Creating Custom Roles ). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.

This will produce the phone number of the user listed in the associated role of the Assigned To section in a lead profile.

### Assigned [Role] Email - #Assigned_[role name here]_Email#

Additional roles can be created and added to a lead profile Assigned To section (see Creating Custom Roles ). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.

This will produce the email address of the user listed in the associated role of the Assigned To section in a lead profile.

### Assigned [Role] Company Name - #Assigned_[role name here]_Company_Name#

Additional roles can be created and added to a lead profile Assigned To section (see Creating Custom Roles ). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.

This will produce the company name of the user listed in the associated role of the Assigned To section in a lead profile.

### Assigned [Role] Website - #Assigned_[role name here]_Website#

Additional roles can be created and added to a lead profile Assigned To section (see Creating Custom Roles ). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.

This will produce the URL listed under Settings > Profile > Personal Website for the user listed in the associated role of the Assigned To section in a lead profile.

### Assigned [Role] License ID - #Assigned_[role name here]_License_ID#

Additional roles can be created and added to a lead profile Assigned To section (see Creating Custom Roles ). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.

This will produce the license ID of the user listed in the associated role of the Assigned To section in a lead profile.

### Assigned [Role] Position - #Assigned_[role name here]_Position#

Additional roles can be created and added to a lead profile Assigned To section (see Creating Custom Roles ). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.

This will produce the position of the user listed in the associated role of the Assigned To section in a lead profile.

### Assigned [Role] Attachment - #Assigned_[role name here]_Attachment#

### Transaction Variables

Transaction variables pull data from a lead's transaction. These variables can be added to email or text templates and smart plans to enable mass sending, with transaction variables are available on both web and app.

Types of Transaction Variables:

- All standard fields for transactions
- All custom fields for transactions created by users
- Six fields for all Vendor/Partner roles:
- First Name
- Last Name
- Company Name
- Company Address
- Email Address
- Phone Number
- Transaction Role Buyer's Agent First Name
- Transaction Role Buyer's Agent Last Name
- Transaction Role Buyer's Agent Company Name
- Transaction Role Buyer's Agent Company Address
- Transaction Role Buyer's Agent Phone Number

Transaction variables are available when sending emails or texts (including mass emails) for all. List some major entry points below:

- Transaction detail page
- Lead detail page, Lead profile page
- Smart plans
- Email templates, text templates
- Calendar-tasks
- Any other entry points for sending emails or texts, landing pages, chats, listings, etc.

When sending an email or text to multiple leads via smart plans, mass emails, and mass texts. When sending a text to a single lead from any entry point. Transaction variable values : The values will default to the most recently created transaction related to the leads.

When sending an email to a single lead from any entry point, and lead has multiple transactions. You can select the relevant transaction first, and the variables from the selected transaction will then be displayed.

When sending an email to a single lead from any entry point, and lead has no transaction. You can create a new transaction for the lead, and the variables from the newly created transaction will be displayed.

## General Variables

### Time of Day - #time_of_day#

This variable will display Morning, Afternoon, or Evening based on the time zone settings on the Agent Profile page.

### Day of Week - #day_of_week#

This variable will display Monday, Tuesday, Thursday, etc., based on the time zone settings on the Agent Profile page.

### Month

This variable will display January, February, March, etc., based on the time zone settings on the Agent Profile page.

### Season

This variable will display Summer, Spring, Winter, or Fall, based on the time zone settings on the Agent Profile page.

## Automated Email Template Variables

When editing automated email templates (see Email Templates ), certain variables can be used and are built in by default. These include the following.

- Property Alerts #PA_property_address# #PA_price/status_changed# #PA_number_of_properties#
- Market Snapshot #PA_listed_or_sold# #PA_recent_local_statistics# #PA_price/status_changed# #PA_number_of_properties#
- Meeting Link

### Meeting Link - #meeting_link#

This is found in the Calendar Settings (cogwheel) icon. You can also click the copy option in the Calendar side panel.

## Unavailable Variable Data

### General Logic

1. When sending manual emails/texts, if the value of a variable is missing in the lead's details, the variable will not be displayed in the list of variables--meaning you cannot find it to select it in the first place.
2. When auto emails/texts are sent and the value of a variable is missing in the lead's details, the email/text will not be sent and, if sent via a Smart Plan, the plan will pause.

### "No Name" Leads

Sometimes, leads are brought into the system as "No Name" meaning there is usually only an email and/or phone number, but no name. If the system is set to send an automated email (property alert, welcome email, Smart Plan auto email, etc.) to a lead that is "No Name," then it will simply skip inserting that information where the variable requests it. In other words, it will just insert a " " blank space instead of putting in "No Name" which would be an awkward interaction with a lead. The same is the case when "Unknown" is used as the lead's first name.

## FAQ

- What is the "Lead_Link" variable for? This variable will auto-populate the link to the lead's detail page, for the lead a Smart Plan is assigned. The best practice for this variable is when used with the Notification Smart Plan action , to direct another agent to the lead's detail page. When creating a Smartplan task, the lead_link is not available for auto text.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com> or by phone at 1 (855) 981-7557. Related terms: lead_link, lead variables, variables, agent variables

## Plain Text

Introduction
Variables, in Lofty, known elsewhere as "merge fields," can be used to bring specific information into your email/text templates so that you can send them out in mass or via automation but still include specific information related to a lead or the assigned agent of that lead.
Summary
Lead Variables (#h_01F0F66GPVB40K9CTM2D450P7X)
Listing Variables (#h_01J40A9TTE2J9CBPN12X4Z78GH)
Agent Variables (#h_01F0F66S6NF7SQWX989KVE49V4)
Transaction Variables (#h_01JAZXPSNT3SPVAKBSQEB3T5MS)
General Variables (#h_01K0YVGKSCSBQCA2W2E5W2B1GV)
Automated Email Template Variables (#h_01F0HFXZ05P16H2CD02H3VQVGH)
Unavailable Variable Data (#h_01F0HFY6CKWWNJ30F3Q8V5TJR8)
Lead Variables
Lead Name - #lead_name# (#h_01F0F6BJ97X4W4D4G0NCT6F8HY)
Lead Link - #Lead_Link# (#h_01F0F6BQTTXX702BX9C0QWYHVJ)
Lead First Name - #lead_first_name# (#h_01F0F6BQTTXX702BX9C0QWYHVJ)
Lead Last Name - #lead_last_name# (#h_01F0HFYM49TF7V6VEG6WS24D5D)
Lead Email - #lead_email# (#h_01F0HFYVXQSJG7PAH96SQ91A0X)
Lead Phone - #lead_phone# (#h_01F0HFZ27PE6T2T0ESBNQTXQYG)
Lead Source - #lead_source# (#h_01F0HFZ9AT2741E5P42SF6EP0C)
Lead Mailing Address - #lead_mailing_address# (#h_01F0HFZJQP3EZTQMK7B7YGSF4K)
Lead Mailing Address Street - #lead_mailing_address_street# (#h_01F0HFZY9DKEMEGDZ7QAV8W2DE)
Lead Mailing Address City - #lead_mailing_address_city# (#h_01F0HG0EWF8GFGH94Y2BE6CYVQ)
Lead Mailing Address State - #lead_mailing_address_state# (#h_01F0HG0RCRHHPX85SDDP2EW5K5)
Lead Mailing Address Zip - #lead_mailing_address_zip# (#h_01F0HG1H4C5GF2KJNHKST90CNG)
Seller Lead Address - #seller_lead_address# (#h_01F0HG248JBS28QRA61RWVVHGT)
Seller Lead Address Street - #seller_lead_address_street# (#h_01F0HG2EAHD1B7G8CQKEY9PEWY)
Seller Lead Address City - #seller_lead_address_city# (#h_01F0HG2XENXTEKYPFH9VWM50SN)
Seller Lead Address State - #seller_lead_address_state# (#h_01F0HG3KGG1R1SAR62NYYTFWMQ)
Seller Lead Address Zip - #seller_lead_address_zip# (#h_01F0HG11FVPJ3KGMZBVW8X4DRX)
Seller Property Price - #seller_property_price# (#h_01F0HG49C3M1N7PJ6ZHDQJ40P9)
Buyer Lead City - #buyer_lead_city# (#h_01F0HG535A9Z60E4XAFBM5XW55)
Lead Inquiry County - #Lead_Inquiry_County# (#01KA2965Y9CS8WYTV6YR6HNH3M)
Lead Inquiry Zip - #Lead_Inquiry_Zip# (#01KA298BR81Q1R63VRHY7ZT4M5)
Buyer Property Address - #buyer_property_address# (#h_01F0HG613PGH2TVHM7S7KSTDMV)
Buyer Property Address Street - #buyer_property_address_street# (#h_01F0HG6AN6979705DKHY9AHYSW)
Buyer Property Address City - #buyer_property_address_city# (#h_01F0HG6MX91ESQ14PXFN7KBJVF)
Buyer Property Address State - #buyer_property_address_state# (#h_01F0HG719H227K9KFR9T25D3QT)
Buyer Property Address Zip - #buyer_property_address_zip# (#h_01F0HG792XFAWBZ0RA0M2RMEW8)
Buyer Inquiry Price - #buyer_inquiry_price# (#h_01F0HG7H64XCAJGP6AZB7J52KX)
Custom Field - #custom_field_[custom field here]# (#h_01F0HG7RRFD0TSATAGA6K5WA9S)
Lead Name - #lead_name#
*Available for all lead types.
The full name (first + last) of a lead.
Lead Link - #Lead_Link#
Refers to the lead detail page URL.
Lead First Name - #lead_first_name#
*Available for all lead types.
The first name of a lead.
Lead Last Name - #lead_last_name#
*Available for all lead types.
The last name of a lead.
Lead Email - #lead_email#
*Available for all lead types.
A lead's
primary
email address.
Lead Phone - #lead_phone#
*Available for all lead types.
A lead's
primary
phone number.
Lead Source -
#lead_source#
*Available for all lead types.
The source of a lead. For more information, see
Lead Source Logic (https://help.lofty.com/hc/en-us/articles/360041252272)
.
Lead Mailing Address -
#lead_mailing_address#
*Available for all lead types.
The
full
mailing address of a lead (not the property address). If you need individual parts of an address, use the segmented variables below instead.
Lead Mailing Address Street -
#lead_mailing_address_street#
*Available for all lead types.
The mailing street address only--of a lead.
Lead Mailing Address City - #lead_mailing_address_city#
*Available for all lead types.
The mailing city only--of a lead.
Lead Mailing Address State - #lead_mailing_address_state#
*Available for all lead types.
The mailing state only--of a lead.
Lead Mailing Address Zip - #lead_mailing_address_zip#
*Available for all lead types.
The mailing zip only--of a lead.
Family Member First Name - #Family_member_first_name#
*Available for all leads
If multiple family members are connected to a lead, all their first names will be displayed, separated by a comma.
Seller Property Address - #seller_property_address#
*Only available for seller-type leads.
Renamed: From Seller Lead Address to Seller_Property_Address
Refers to the address of a property listed on a seller lead under the
Selling
category. Properties are found under the
Engagement
tab of a lead profile. If you would like to break down the address further (e.g., street, city), please refer to the segmented variables that follow this one. Uses the "Selling" property if available; if not, falls back to "Buying" property, then to mailing address.
If the lead has multiple properties under this label type, this variable will produce the complete address that was added to the lead profile most recently. The newest property.
Seller Lead Address Street - #seller_lead_address_street#
*Only available for seller-type leads.
Refers to the street address only of a property listed on a seller lead under the
Selling
category. Properties are found under the
Engagement
tab of a lead profile.
If the lead has multiple properties under this label type, this variable will produce the street address that was added to the lead profile most recently. The newest property.
Seller Lead Address City - #seller_lead_address_city#
*Only available for seller-type leads.
Refers to the city only of a property listed on a seller lead under the
Selling
category. Properties are found under the
Engagement
tab of a lead profile.
If the lead has multiple properties under this label type, this variable will produce the city for the address that was added to the lead profile most recently. The newest property.
Seller Lead Address State - #seller_lead_address_state#
*Only available for seller-type leads.
Refers to the state only of a property listed on a seller lead under the
Selling
category. Properties are found under the
Engagement
tab of a lead profile.
If the lead has multiple properties under this label type, this variable will produce the state for the address that was added to the lead profile most recently. The newest property.
Seller Lead Address Zip - #seller_lead_address_zip#
*Only available for seller-type leads.
Refers to the zip code only of a property listed on a seller lead under the
Selling
category. Properties are found under the
Engagement
tab of a lead profile.
If the lead has multiple properties under this label type, this variable will produce the zip code for the address that was added to the lead profile most recently. The newest property.
Seller Property Price - #seller_property_price#
*Only available for seller-type leads.
Refers to the price of a property listed on a seller lead under the
Selling
category. Properties are found under the
Engagement
tab of a lead profile. Uses the price of selling the property; if unavailable, uses the buying property price.
If the lead has multiple properties under this label type, this variable will produce the price for the address that was added to the lead profile most recently. The newest property.
Lead Inquiry City - #Lead_Inquiry_City#
*Only available for buyer-type leads.
Refers to the city name the lead has searched for on your Lofty website. This can be added automatically as a result of the lead's activities on your Lofty website, or you can add it manually by editing the
Search Criteria
on a lead profile.
If the lead has searched multiple cities, this variable will produce all of the results that were searched on your Lofty website.
Lead Inquiry County - #Lead_Inquiry_County#
*Only available for buyer-type leads.
Refers to the county name the lead has searched for on your Lofty website. This can be added automatically as a result of the lead's activities on your Lofty website, or you can add it manually by editing the
Search Criteria
on a lead profile.
If the lead has searched multiple counties, this variable will produce all of the results that were searched on your Lofty website.
Lead Inquiry Zip - #Lead_Inquiry_Zip#
*Only available for buyer-type leads.
Refers to the zip code the lead has searched for on your Lofty website. This can be added automatically as a result of the lead's activities on your Lofty website, or you can add it manually by editing the
Search Criteria
on a lead profile.
If the lead has searched multiple zip codes, this variable will produce all of the results that were searched on your Lofty website.
Buyer Property Address - #buyer_property_address#
*Only available for buyer-type leads.
The
full
address for the most recently added property is added to a buyer lead under the
Buying
label. Uses the "Buying" property if available; if not, falls back to "Selling" property, then to mailing address:
The
full
mailing address of a lead (not the property address). If you need individual parts of an address, use the segmented variables below instead.
Buyer Property Address Street - #buyer_property_address_street#
*Only available for buyer-type leads.
The
street address
is only for the most recently added property added to a buyer lead under the
Buying
label:
If there are no properties on the lead under the
Buying
label, it will default to the following instead. . .
The mailing
street address only
of a lead.
Buyer Property Address City - #buyer_property_address_city#
*Only available for buyer-type leads.
The
city only
for the most recently added property added to a buyer lead under the
Buying
label:
If there are no properties on the lead under the
Buying
label, it will default to the following instead. . .
The mailing city only--of a lead.
Buyer Property Address State - #buyer_property_address_state#
*Only available for buyer-type leads.
The
state only
for the most recently added property added to a buyer lead under the
Buying
label:
If there are no properties on the lead under the
Buying
label, it will default to the following instead. . .
The mailing state only--of a lead.
Buyer Property Address Zip - #buyer_property_address_zip#
*Only available for buyer-type leads.
The
zip only
for the most recently added property added to a buyer lead under the
Buying
label:
If there are no properties on the lead under the
Buying
label, it will default to the following instead. . .
The mailing zip only--of a lead.
Lead Inquiry Price - #
Lead_Inquiry_Price
#
*Only available for buyer-type leads.
Renamed from Buyer_inquired_Price to Lead_Inquiry_Price
Refers to the price of the listing the lead has searched for according to the "Buyer_Lead_City" variable.
Custom Field - #custom_field_[custom field here]#
*Available for all lead types.
If you have configured custom fields (see
Custom Fields (https://help.lofty.com/hc/en-us/articles/360054872212)
), you will be able to pull in the data from those custom fields. There will be a new variable with this same format for every custom field that has been created.
For more information on custom fields, see
Custom Fields (https://help.lofty.com/hc/en-us/articles/360054872212)
.
Listing Variables
Listing variables allow a listing link or address to be added to a text or email via the variable tool. There are two options for adding listing variables. Note: For all text messages, the variable will only provide the address, not a clickable link. This is available to all users with no permission required.
Listing Variables in Smart Plans
Listing variables insert a link to a listing or an address, depending on the lead's behavior. In the Smart Plan action, click the house icon to decide what listings should be inserted into the Smart Plan email or text step. Next, see the four (4) options to select the listing(s) that appear in the text or email. Up to 50 listings can be added.
Specific Listings
This is the same as inserting any listing into a text or email. The lead's behavior does not have any effect on what listings can be inserted.
Insert Listings Saved by Lead
Only listings that the lead has saved in the last 2 years will be inserted.
Insert Listings Viewed by Lead
Only listings that the lead has viewed 3 or more times in the last 2 years will be inserted.
Insert Listings with Showing Requests
Only listings that which the lead has requested a showing in the last 2 years will be inserted.
When you select Specific Listings, a pop-up allows you to search for and select the specific listings that you want to insert into the text or email.
For the other 3 options, these settings allow you to further filter for the right listings.
Time Frame
This setting allows you to set the time frame for the lead's behavior. For example, you could set this to “Last 30 days” to only include listings that the lead took action on in the last 30 days.
Number of Listings
1 to 50 listings can be included
Hide Listings
This setting allows you to not include listings with a certain status. The status options are Active, Back on Market, Coming Soon, Contingent, and Pending.
If you select a specific listing, it will be visible in the content. If you use the listing settings to select listings that match the lead's behavior, sample data will be input into the content.
If the Smart Plan does not have any listings that meet the criteria, the Smart Plan will be stopped automatically. If a new listing is available that meets the criteria, the Smart Plan will not be restarted from this point.
If the lead triggers this Smart Plan again, it will restart from Step 1.
Listing Variables in Texts and Emails
The text and email variable tool has also been updated to include variables related to listing data. Click the # icon to see the variables.
Latest_Saved_Listing_Address
: The most recent listing saved by the lead.
Latest_Viewed_Three_Times_Listing_Address
: The most recent listing viewed three times or more by the lead.
Latest_Requested_Showing_Listing_Address
: The most recent listing where a showing was requested by the lead.
Latest_Left_Message_Listing_Address
: The most recent properties where the lead has left a message.
Latest_Requested_Home_Evaluation_Address
: Address where a home evaluation report was requested by the lead. Note - this is an address that the lead provided, this is not a listing
Listing_Triggered_This_Smart_Plan
: The listing that triggered this smart plan (only available in the smart plan template).
Agent Variables
Agent
Agent Email - #agent_email# (#h_01F0F6B6WECK64AV32RE2JKMZZ)
Agent Name - #agent_name# (#h_01F0HG8PYFDTPSWMDHAXVBRZJS)
Agent First Name - #agent_first_name# (#h_01F0HG91YR5QE9WSC515EJC6KT)
Agent Last Name - #agent_last_name# (#h_01F0HG98AZH4STQQX1W240G1RV)
Agent Phone - #agent_phone# (#h_01F0HG9H1GWHF40134T23VAXA6)
Signature - #signature# (#h_01F0HG9X68013D973QTCGZXK1D)
My Website - #my_website# (#h_01F0HGA38DPX8JC0JC4Q9VA0GC)
Home Evaluation - #home_evaluation# (#h_01F0HGA8VNCMMHFK0QCRQC1K27)
Lender
Lender Email - #lender_email# (#h_01F0HGANX90240JMNW8W1AXV43)
Lender Name - #lender_name# (#h_01F0HGAYTR7P2J64849G4VDD2F)
Lender First Name - #lender_first_name# (#h_01F0HGB6G28A5E45N2A42Y9G9X)
Lender Last Name - #lender_last_name# (#h_01F0HGBEHGJRMFVV2T8XNN8ATS)
Lender Phone - #lender_phone# (#h_01F0HGBP0579AX51DFPYJC25WJ)
Custom Roles
Assigned [Role] Name - #Assigned_[role name here]_Name# (#h_01F0HGC10HYVXN1PPVR6FX1PAA)
Assigned [Role] First Name - #Assigned_[role name here]_First_Name# (#h_01F0HGDC58BXDJA0HCFG9V9B9D)
Assigned [Role] Last Name - #Assigned_[role name here]_Last_Name# (#h_01F0HGDKNSVQR2ZSDDSEV29P12)
Assigned [Role] Phone - #Assigned_[role name here]_Phone# (#h_01F0HGDSSJHAH6K3B4ENPT4PHR)
Assigned [Role] Email - #Assigned_[role name here]_Email# (#h_01F0HGE46VY6E4SX8Q9FZFBVN9)
Assigned [Role] Company Name - #Assigned_[role name here]_Company_Name# (#h_01F0HGEFWY85SCWRMSGSXJ3QP5)
Assigned [Role] Website - #Assigned_[role name here]_Website# (#h_01F0HGEPB8KP2ZRT0QX6VFN76K)
Assigned [Role] License ID - #Assigned_[role name here]_License_ID# (#h_01F0HGF6Z3WSFD312SNT1DYZTG)
Assigned [Role] Position - #Assigned_[role name here]_Position# (#h_01F0HGFKAA29V1W9WS4JGBN2R1)
Assigned [Role] Attachment - #Assigned_[role name here]_Attachment# (#h_01F0HGFXPM8262EV6QD8762YGK)
Agent Email - #agent_email#
The email address for the user is listed in the primary "Agent" slot of a lead profile's
Assigned to
section.
Agent Sending Email - #Agent_Sending_Email#
Agent Sending Email information found in the Communication Email Settings page.
Agent Name - #agent_name#
The full name (first + last) for the user listed in the primary "Agent" slot of a lead profile's
Assigned to
section.
Agent First Name - #agent_first_name#
The first name for the user listed in the primary "Agent" slot of a lead profile's
Assigned to
section.
Agent Last Name - #agent_last_name#
The last name for the user listed in the primary "Agent" slot of a lead profile's
Assigned to
section.
Agent Photo -#Agent_Photo#
This is the agent headshot displayed in the Profile section of My User Settings.
Agent Phone - #agent_phone#
The phone number for the user is listed in the primary "Agent" slot of a lead profile's
Assigned to
section.
Signature - #signature#
The email signature for the sender of the email. If sent as an Auto Email from a Smart Plan, the sender is the one listed in the "Assign to" drop-down of the Smart Plan step.
My Website - #my_website#
The URL to the home page of the sender's Lofty website.
Home Evaluation - #home_evaluation#
The URL to the main Home Evaluation page of the sender's Lofty IDX website.
Lender Email - #lender_email#
The email address for the lender-type account user is listed in the primary "Lender" slot of a lead profile's
Assigned to
section.
Lender Sending Email -#Lender_Sending_Email#
It follows the same logic as the agent sending email variable.
Lender Name - #lender_name#
The full name (first + last) for the lender-type account user listed in the primary "Lender" slot of a lead profile's
Assigned to
section.
Lender First Name - #lender_first_name#
The first name for the lender-type account user is listed in the primary "Lender" slot of a lead profile's
Assigned to
section.
Lender Last Name - #lender_last_name#
The last name for the lender-type account user is listed in the primary "Lender" slot of a lead profile's
Assigned to
section.
Lender Phone - #lender_phone#
The phone number for the lender-type account user is listed in the primary "Lender" slot of a lead profile's
Assigned to
section.
Assigned [Role] Name - #Assigned_[role name here]_Name#
Additional roles can be created and added to a lead profile
Assigned To
section (see
Creating Custom Roles (https://help.chime.me/hc/en-us/articles/360028073892)
). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.
This will produce the full name (first + last) of the user listed in the associated role of the
Assigned To
section in a lead profile.
Assigned [Role] First Name - #Assigned_[role name here]_First_Name#
Additional roles can be created and added to a lead profile
Assigned To
section (see
Creating Custom Roles (https://help.chime.me/hc/en-us/articles/360028073892)
). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.
This will produce the first name of the user listed in the associated role of the
Assigned To
section in a lead profile.
Assigned [Role] Last Name - #Assigned_[role name here]_Last_Name#
Additional roles can be created and added to a lead profile
Assigned To
section (see
Creating Custom Roles (https://help.lofty.com/hc/en-us/articles/360028073892)
). Whenever that happens, a new variable is created like this one but [role name here] will be replaced by the actual role name that was added.
This will produce the last name of the user listed in the associated role of the
Assigned To
section in a lead profile.
Assigned [Role] Phone - #Assigned_[role name here]_Phone#
Additional roles can be created and added to a lead profile
Assigned To
section (see
Creating Custom Roles (https://help.lofty.com/hc/en-us/articles/360028073892)
). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.
This will produce the phone number of the user listed in the associated role of the
Assigned To
section in a lead profile.
Assigned [Role] Email - #Assigned_[role name here]_Email#
Additional roles can be created and added to a lead profile
Assigned To
section (see
Creating Custom Roles (https://help.lofty.com/hc/en-us/articles/360028073892)
). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.
This will produce the email address of the user listed in the associated role of the
Assigned To
section in a lead profile.
Assigned [Role] Company Name - #Assigned_[role name here]_Company_Name#
Additional roles can be created and added to a lead profile
Assigned To
section (see
Creating Custom Roles (https://help.lofty.com/hc/en-us/articles/360028073892)
). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.
This will produce the company name of the user listed in the associated role of the
Assigned To
section in a lead profile.
Assigned [Role] Website - #Assigned_[role name here]_Website#
Additional roles can be created and added to a lead profile
Assigned To
section (see
Creating Custom Roles (https://help.lofty.com/hc/en-us/articles/360028073892)
). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.
This will produce the URL listed under
Settings
>
Profile
>
Personal Website
for the user listed in the associated role of the
Assigned To
section in a lead profile.
Assigned [Role] License ID - #Assigned_[role name here]_License_ID#
Additional roles can be created and added to a lead profile
Assigned To
section (see
Creating Custom Roles (https://help.lofty.com/hc/en-us/articles/360028073892)
). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.
This will produce the license ID of the user listed in the associated role of the
Assigned To
section in a lead profile.
Assigned [Role] Position - #Assigned_[role name here]_Position#
Additional roles can be created and added to a lead profile
Assigned To
section (see
Creating Custom Roles (https://help.lofty.com/hc/en-us/articles/360028073892)
). Whenever that happens, a new variable is created like this one, but [role name here] will be replaced by the actual role name that was added.
This will produce the position of the user listed in the associated role of the
Assigned To
section in a lead profile.
Assigned [Role] Attachment - #Assigned_[role name here]_Attachment#
Transaction Variables
Transaction variables pull data from a lead's transaction. These variables can be added to email or text templates and smart plans to enable mass sending, with transaction variables are available on both web and app.
Types of Transaction Variables:
All standard fields for transactions
All custom fields for transactions created by users
Six fields for all Vendor/Partner roles:
First Name
Last Name
Company Name
Company Address
Email Address
Phone Number
Transaction Role Buyer's Agent First Name
Transaction Role Buyer's Agent Last Name
Transaction Role Buyer's Agent Company Name
Transaction Role Buyer's Agent Company Address
Transaction Role Buyer's Agent Phone Number
Transaction variables are available when sending emails or texts (including mass emails) for all. List some major entry points below:
Transaction detail page
Lead detail page, Lead profile page
Smart plans
Email templates, text templates
Calendar-tasks
Any other entry points for sending emails or texts, landing pages, chats, listings, etc.
When sending an email or text to multiple leads via smart plans, mass emails, and mass texts. When sending a text to a single lead from any entry point.
Transaction variable values
: The values will default to the most recently created transaction related to the leads.
When sending an email to a single lead from any entry point, and lead has multiple transactions. You can select the relevant transaction first, and the variables from the selected transaction will then be displayed.
When sending an email to a single lead from any entry point, and lead has no transaction. You can create a new transaction for the lead, and the variables from the newly created transaction will be displayed.
General Variables
Time of Day - #time_of_day#
This variable will display Morning, Afternoon, or Evening based on the time zone settings on the Agent Profile page.
Day of Week - #day_of_week#
This variable will display Monday, Tuesday, Thursday, etc., based on the time zone settings on the Agent Profile page.
Month
This variable will display January, February, March, etc., based on the time zone settings on the Agent Profile page.
Season
This variable will display Summer, Spring, Winter, or Fall, based on the time zone settings on the Agent Profile page.
Automated Email Template Variables
When editing automated email templates (see
Email Templates (https://help.lofty.com/hc/en-us/articles/360055290611)
), certain variables can be used and are built in by default. These include the following.
Property Alerts
#PA_property_address#
#PA_price/status_changed#
#PA_number_of_properties#
Market Snapshot
#PA_listed_or_sold#
#PA_recent_local_statistics#
#PA_price/status_changed#
#PA_number_of_properties#
Meeting Link
Meeting Link - #meeting_link#
This is found in the Calendar Settings (cogwheel) icon. You can also click the copy option in the Calendar side panel.
Unavailable Variable Data
General Logic
When sending
manual
emails/texts, if the value of a variable is missing in the lead's details, the variable will not be displayed in the list of variables--meaning you cannot find it to select it in the first place.
When
auto
emails/texts are sent and the value of a variable is missing in the lead's details, the email/text will
not
be sent and, if sent via a Smart Plan, the plan will pause.
"No Name" Leads
Sometimes, leads are brought into the system as "No Name" meaning there is usually only an email and/or phone number, but no name. If the system is set to send an automated email (property alert, welcome email, Smart Plan auto email, etc.) to a lead that is "No Name," then it will simply skip inserting that information where the variable requests it. In other words, it will just insert a " " blank space instead of putting in "No Name" which would be an awkward interaction with a lead. The same is the case when "Unknown" is used as the lead's first name.
FAQ
What is the "Lead_Link" variable for?
This variable will auto-populate the link to the lead's detail page, for the lead a Smart Plan is assigned. The best practice for this variable is when used with the
Notification Smart Plan action
, to direct another agent to the lead's detail page. When creating a Smartplan task, the lead_link is
not
available for auto text.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com> or by phone at 1 (855) 981-7557.
Related terms: lead_link, lead variables, variables, agent variables

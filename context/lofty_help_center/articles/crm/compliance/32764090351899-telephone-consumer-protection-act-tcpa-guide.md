# Telephone Consumer Protection Act (TCPA) Guide

- Article ID: `32764090351899`
- Category: `CRM`
- Section: `Compliance`
- Updated: `2025-11-10T01:06:25Z`
- Source: https://help.lofty.com/hc/en-us/articles/32764090351899-Telephone-Consumer-Protection-Act-TCPA-Guide

## Body

## Introduction

The Telephone Consumer Protection Act (TCPA) provides requirements on who you can and cannot call or text. There are many different resources available on the topic and changes are introduced by regulators every year. TCPA may not be the only regulation you need to follow, but it is likely the most talked about. Remember, it is your responsibility to use Lofty in a way that is compliant with your local and federal regulations and the details presented here may or may not be a complete guide on complying to all of these regulations.

*IMPORTANT : All the information shared in this article represents best practices determined by Lofty's own research. This is not legal advice. You must obtain your own legal advice regarding all federal and local laws/regulations for call and text compliance.

## Summary

- Background Information (1) What is "Regulated Technology"? (2) What is "DNC"?
- How is Lofty Changing? Phone Number Consent Statuses Regulated Technology Configuration Updated Lofty Website Registration Language Lead Consent Records Third Party Lead Consent Configuration Consent Request Email
- Final Notes & Your Checklist

## Background Information

In general, the following should be your responsibilities related to TCPA:

1. Make sure you have "express written consent" for any consumers (leads) you will be calling or texting with "regulated technology" (defined in the context of Lofty below).
2. Ensure that you are not calling or texting consumers (leads) who have not given consent and do not have a business relationship with you, without checking the National and State DNC registries. If a phone number is on the National and/or State DNC and you do not have consent, you should not be calling or texting that number.

### (1) What is "Regulated Technology"?

In Lofty, we understand regulated technology to be the following two features:

1. Pre-recorded Outbound Voice Messages
2. Slybroadcast Ringless Voicemails

This regulated technology should only be used after obtaining express written consent from your consumers. This means you should not use these features without express written consent being obtained first. Lofty will help obtain express written consent for newly registering leads with updated form language, but you will be responsible for obtaining that express written consent for any existing leads if you would like to communicate with them using express written consent.

### (2) What is "DNC"?

Technically, there are multiple DNC (Do Not Call) lists that are worth noting:

- National DNC . This is maintained at the national level and it is a requirement to scrub numbers against it if you lack consent to call those numbers.
- Internal DNC . This refers to Lofty's DNC that will prohibit outgoing calls and texts from the Lofty platform to any number that is placed on it. This is maintained at the account level.
- State DNCs . Many states have their own DNC lists that should be used to scrub numbers similar to the Federal DNC.

IMPORTANT: Lofty does not currently scrub your numbers against any external DNC registry (national or state) and only prohibits calls/texts for numbers on your Internal DNC (tied to your Lofty account). It is your responsibility to scrub phone numbers against external DNCs--though this scrub should be unnecessary if you have received consent from either the Lofty lead registration form or an external source that is syncing to Lofty.

For the sake of example, the flowchart below explains more about what your obligations are regarding the National DNC .

## How is Lofty Changing?

### Phone Number Consent Statuses

Lofty has added phone number consent statuses so that you can easily categorize phone numbers by the different levels of consent that you have obtained. Here is where that is displayed and edited on an individual lead record:

The following phone number consent statuses are available:

1. System Recorded Consent Phone numbers will have this consent status when the lead provided their phone number and registered via a Lofty-built webform (one with Lofty's default consent language). We have implemented what we believe to be industry best practices and disclaimer language that should allow you to obtain express written consent.
2. User Recorded Consent Phone numbers will only have this consent status if you choose to categorize them in this way. This is different from 'System Recorded Consent' because Lofty is not generating the initial consent record demonstrating express written consent. If you have express written consent from wherever this lead and phone number were sourced, you can use this category to label those phone numbers. *IMPORTANT: You are response for maintaining a record of their written consent if you plan to use regulated technologies to communicate with these leads.
3. Business Relationship This consent status is for phone numbers of leads who have not given express written consent to be contacted, but you have determined that you can contact them due to your existing business relationship. You can still communicate with them, just not using regulated technology. The exact definition of "established business relationship" will vary from state to state so please research your requirements. Use this label for phone numbers that fit within this definition.
4. Unknown This is the default consent status for phone numbers that are not designated into the above categories. When we introduce phone number consent statuses, all your existing leads' phone numbers (except those on the Internal DNC list ) will be labeled as 'Unknown' consent. This will also be the default consent status for manually added leads and leads obtained from third party sources. You can change this setting later if you would like to do so.
5. Internal DNC Phone numbers with this status are on your Lofty account's "Internal DNC" list. Any leads who opt out of receiving text message communication from you will also be added to your internal DNC list and their phone number status will be marked as Internal DNC. You cannot call or text these phone numbers.

### Regulated Technology Configuration

If you use the Slybroadcast integration or Lofty's pre-recorded voice message feature , by default these features can only be used on phone numbers that have "System Recorded Consent." These features can also be used on phone numbers with "User Recorded Consent" status, but you will need to configure some settings first.

Navigate to Settings > Integrations (for Slybroadcast) or Settings > Call & Text > Voice Messages (for Outbound Call Voice Messages) to access these settings.

Both features will have a Configure Consent Settings button, which will give you the option to allow pre-recorded outbound voice messages and Slybroadcast ringless voicemails to be sent to phone numbers that have the User Recorded Consent status. If you do not touch these settings, these features can only be used on phone numbers with System Recorded Consent status.

Note: These features are considered Regulated Technology, and they cannot be used to send a pre-recorded message to any phone numbers that do not have System Recorded or User Recorded Consent. You can change a lead's phone number consent status to User Recorded Consent, but please do so only if you have express written consent for that phone number recorded elsewhere in your own records.

### Updated Lofty Website Registration Language

The default website registration language has been updated to better capture express written consent from leads who register via a Lofty webform. The disclaimer language has been optimized to be able to obtain consent from multiple parties, if necessary.

Navigate to Website > Settings > Lead Capture > Disclaimer to see the updated registration box language and add any parties that need to collect consent from leads who register via your website.

If you use the default language we provide on your Lofty website registration form, the phone numbers provided by those leads will have the System Recorded Consent status.

If you have previously customized the webform registration language, we will not alter your customization, but the phone numbers provided by leads that register via your custom webform will have the User Recorded Consent status . If you aren't sure if you have previously edited this language, please check your website settings. More information on this topic can be found here: Registration Pop-up Style & Settings.

### Lead Consent Records

A consent record will be generated for each new lead who registers after this update is published. The consent record provides a history of how the lead came into your system and shows what consent language they agreed to. The consent record will update automatically if the lead's consent status changes. The consent record can be downloaded as a PDF file.

### Third Party Lead Consent Configuration

As mentioned above, leads from third party sources will have their consent status marked as Unknown Consent by default. However, if you do receive proof of written consent from that lead provider, you can set the consent status to User Recorded Consent. This means you should have a consent record for on hand for every phone number that you label as "User Recorded Consent."

To update the consent status for individual lead providers, navigate to Settings > Lead Capture . The consent status options can be set on this page for Zillow, Realtor.com, and Facebook Ads, if you are connected with those providers. Select Lead Capture Settings to set a consent status for all email parsing lead providers.

Select 'User Recorded Consent' or 'Business Relationship' from the drop down menu, if this lead provider also provides that kind of information to you. Otherwise, the default consent status for phone numbers provided by leads from these sources will be Unknown Consent .

### Consent Request Email

TCPA is a regulation that impacts phone calls and text messages. It does not impact the emails that you send. You can send an email to obtain System Recorded Consent. From a lead's profile or as a mass action on the People Page, an email can be triggered to your leads that will direct them to a webform where they will provide their phone number and agree to the updated consent language. This means that you can request written consent from your existing database. Phone numbers provided by leads that follow this process will be marked as System Recorded Consent .

Here's an example of what the email template and lead experience will look like:

## Final Notes & Your Checklist

Please review the following tasks:

1. Consult your legal resources regarding call and text compliance at the local and federal levels. It is your responsibility to ensure that you have permission to call and text anyone via the Lofty platform.
2. Ensure that you have a process in place to scrub phone numbers against federal and local DNC lists if you do not have consent to call or text those phone numbers. This is described more in detail earlier in this article.
3. If you plan to use regulated technologies within Lofty (defined above) to contact your existing database , you will need to: (a) categorize these existing leads as "User Recorded Consent" individually or on the People page. (b) edit your settings to ensure that you have enabled these features to work with "User Recorded Consent."

Lofty has implemented best practices that should give you flexibility to categorize and manage your consent of differing levels. A few final notes:

- 'System Recorded Consent' and 'User Recorded Consent', if configured, will allow you to use regulated technology (defined above) in the Lofty platform.
- You can still use click-to-call, call lists, etc. for leads with phone numbers labeled with the 'Business Relationship' or 'Unknown' statuses.
- Leads with phone numbers marked as "Internal DNC" cannot be called or texted at those phone numbers unless they are removed from the Internal DNC.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by a chat with us through your Lofty CRM.

## Plain Text

Introduction
The Telephone Consumer Protection Act (TCPA) provides requirements on who you can and cannot call or text. There are many different resources available on the topic and changes are introduced by regulators every year. TCPA may not be the only regulation you need to follow, but it is likely the most talked about. Remember, it is your responsibility to use Lofty in a way that is compliant with your local and federal regulations and the details presented here may or may not be a complete guide on complying to all of these regulations.
*IMPORTANT
:
All the information shared in this article represents best practices determined by Lofty's own research. This is not legal advice. You must obtain your own legal advice regarding all federal and local laws/regulations for call and text compliance.
Summary
Background Information (#h_01JHTRFZ4VHT2VNF2D57629Y78)
(1) What is "Regulated Technology"? (#h_01JJ11KKK4BKQVGW82D80NSP9G)
(2) What is "DNC"? (#h_01JHTRFZ4VB0K02PV0SQ0HAN6F)
How is Lofty Changing? (#h_01JHK7MQJNP7C3Y69HRRE1PWA8)
Phone Number Consent Statuses (#h_01JHK7T1G9T03TBFH1S5Y8FMMD)
Regulated Technology Configuration (#h_01JHK8RB5MSDX31PCQNE4XKRJ7)
Updated Lofty Website Registration Language (#h_01JHKJK7QPFZ3X12JFYGQ6C1QV)
Lead Consent Records (#h_01JHKK7SFPCXT1C6GK6KB7QDGP)
Third Party Lead Consent Configuration (#h_01JHKKFFQP11X11QSWRG40AB16)
Consent Request Email (#h_01JHKMAQ1EGK15BRCY4RW0FFXQ)
Final Notes & Your Checklist (#h_01JHKM3YYVT6KBSXM8RRTY7C88)
Background Information
In general, the following should be your responsibilities related to TCPA:
Make sure you have "express written consent" for any consumers (leads) you will be calling or texting with "regulated technology" (defined in the context of Lofty below).
Ensure that you are not calling or texting consumers (leads) who have not given consent and do not have a business relationship with you, without checking the National and State DNC registries. If a phone number is on the National and/or State DNC and you do not have consent, you should not be calling or texting that number.
(1) What is "Regulated Technology"?
In Lofty, we understand regulated technology to be the following two features:
Pre-recorded Outbound Voice Messages (https://help.lofty.com/hc/en-us/articles/360000315191-Voice-Messages-for-Inbound-Outbound-Calls)
Slybroadcast Ringless Voicemails (https://help.lofty.com/hc/en-us/articles/360034983832-Slybroadcast-Integration)
This regulated technology should only be used after obtaining express written consent from your consumers. This means you should not use these features without express written consent being obtained first. Lofty will help obtain express written consent for newly registering leads with updated form language, but you will be responsible for obtaining that express written consent for any existing leads if you would like to communicate with them using express written consent.
(2) What is "DNC"?
Technically, there are multiple DNC (Do Not Call) lists that are worth noting:
National DNC
. This is maintained at the national level and it is a requirement to scrub numbers against it if you lack consent to call those numbers.
Internal DNC
. This refers to Lofty's DNC that will prohibit outgoing calls and texts from the Lofty platform to any number that is placed on it. This is maintained at the account level.
State DNCs
. Many states have their own DNC lists that should be used to scrub numbers similar to the Federal DNC.
IMPORTANT: Lofty
does not
currently scrub your numbers against any external DNC registry (national or state) and only prohibits calls/texts for numbers on your Internal DNC (tied to your Lofty account). It is your responsibility to scrub phone numbers against external DNCs--though this scrub should be unnecessary if you have received consent from either the Lofty lead registration form or an external source that is syncing to Lofty.
For the sake of example, the flowchart below explains more about what your obligations are regarding the
National DNC
.
How is Lofty Changing?
Phone Number Consent Statuses
Lofty has added phone number consent statuses so that you can easily categorize phone numbers by the different levels of consent that you have obtained. Here is where that is displayed and edited on an individual lead record:
The following phone number consent statuses are available:
System Recorded Consent
Phone numbers will have this consent status when the lead provided their phone number and registered via a Lofty-built webform (one with Lofty's default consent language). We have implemented what we believe to be industry best practices and disclaimer language that should allow you to obtain express written consent.
User Recorded Consent
Phone numbers will only have this consent status if you choose to categorize them in this way. This is different from 'System Recorded Consent' because Lofty is not generating the initial consent record demonstrating express written consent. If you have express written consent from wherever this lead and phone number were sourced, you can use this category to label those phone numbers. *IMPORTANT: You are response for maintaining a record of their written consent if you plan to use regulated technologies to communicate with these leads.
Business Relationship
This consent status is for phone numbers of leads who have not given express written consent to be contacted, but you have determined that you can contact them due to your existing business relationship. You can still communicate with them, just not using regulated technology.
The exact definition of "established business relationship" will vary from state to state so please research your requirements. Use this label for phone numbers that fit within this definition.
Unknown
This is the default consent status for phone numbers that are not designated into the above categories. When we introduce phone number consent statuses, all your existing leads' phone numbers (except those on the
Internal DNC list (https://help.lofty.com/hc/en-us/articles/12929428006811)
) will be labeled as 'Unknown' consent.
This will also be the default consent status for manually added leads and leads obtained from third party sources. You can change this setting later if you would like to do so.
Internal DNC
Phone numbers with this status are on your Lofty account's "Internal DNC" list. Any leads who
opt out (https://help.lofty.com/hc/en-us/articles/360057630352)
of receiving text message communication from you will also be added to your internal DNC list and their phone number status will be marked as Internal DNC. You cannot call or text these phone numbers.
Regulated Technology Configuration
If you use the
Slybroadcast integration (https://help.lofty.com/hc/en-us/articles/360034983832)
or
Lofty's pre-recorded voice message feature (https://help.lofty.com/hc/en-us/articles/360000315191)
, by default these features can only be used on phone numbers that have "System Recorded Consent." These features can also be used on phone numbers with "User Recorded Consent" status, but you will need to configure some settings first.
Navigate to
Settings > Integrations
(for Slybroadcast) or
Settings > Call & Text > Voice Messages
(for Outbound Call Voice Messages) to access these settings.
Both features will have a
Configure Consent Settings
button, which will give you the option to allow pre-recorded outbound voice messages and Slybroadcast ringless voicemails to be sent to phone numbers that have the User Recorded Consent status. If you do not touch these settings, these features can only be used on phone numbers with System Recorded Consent status.
Note: These features are considered Regulated Technology, and they cannot be used to send a pre-recorded message to any phone numbers that do not have System Recorded or User Recorded Consent. You can change a lead's phone number consent status to User Recorded Consent, but please do so only if you have express written consent for that phone number recorded elsewhere in your own records.
Updated Lofty Website Registration Language
The default website registration language has been updated to better capture express written consent from leads who register via a Lofty webform. The disclaimer language has been optimized to be able to obtain consent from multiple parties, if necessary.
Navigate to
Website > Settings > Lead Capture > Disclaimer
to see the updated registration box language and add any parties that need to collect consent from leads who register via your website.
If you use the default language we provide on your Lofty website registration form, the phone numbers provided by those leads will have the
System Recorded Consent
status.
If you have previously customized the webform registration language, we will not alter your customization, but the phone numbers provided by leads that register via your custom webform will have the
User Recorded Consent status
. If you aren't sure if you have previously edited this language, please check your website settings. More information on this topic can be found here:
Registration Pop-up Style & Settings. (https://help.lofty.com/hc/en-us/articles/360056629652)
Lead Consent Records
A consent record will be generated for each new lead who registers after this update is published. The consent record provides a history of how the lead came into your system and shows what consent language they agreed to. The consent record will update automatically if the lead's consent status changes. The consent record can be downloaded as a PDF file.
Third Party Lead Consent Configuration
As mentioned above, leads from third party sources will have their consent status marked as
Unknown Consent
by default. However, if you do receive proof of written consent from that lead provider, you can set the consent status to User Recorded Consent. This means you should have a consent record for on hand for every phone number that you label as "User Recorded Consent."
To update the consent status for individual lead providers, navigate to
Settings > Lead Capture
. The consent status options can be set on this page for Zillow, Realtor.com, and Facebook Ads, if you are connected with those providers. Select
Lead Capture Settings
to set a consent status for all email parsing lead providers.
Select 'User Recorded Consent' or 'Business Relationship' from the drop down menu, if this lead provider also provides that kind of information to you. Otherwise, the default consent status for phone numbers provided by leads from these sources will be
Unknown Consent
.
Consent Request Email
TCPA is a regulation that impacts phone calls and text messages. It does not impact the emails that you send. You can send an email to obtain System Recorded Consent. From a lead's profile or as a mass action on the People Page, an email can be triggered to your leads that will direct them to a webform where they will provide their phone number and agree to the updated consent language. This means that you can request written consent from your existing database. Phone numbers provided by leads that follow this process will be marked as
System Recorded Consent
.
Here's an example of what the email template and lead experience will look like:
Final Notes & Your Checklist
Please review the following tasks:
Consult your legal resources regarding call and text compliance at the local and federal levels. It is your responsibility to ensure that you have permission to call and text anyone via the Lofty platform.
Ensure that you have a process in place to scrub phone numbers against federal and local DNC lists if you do not have consent to call or text those phone numbers. This is described more in detail earlier in this article.
If you plan to use regulated technologies within Lofty (defined above) to contact your
existing database
, you will need to:
(a) categorize these existing leads as "User Recorded Consent" individually or on the
People
page.
(b)
edit your settings (#h_01JHK8RB5MSDX31PCQNE4XKRJ7)
to ensure that you have enabled these features to work with "User Recorded Consent."
Lofty has implemented best practices that should give you flexibility to categorize and manage your consent of differing levels. A few final notes:
'System Recorded Consent' and 'User Recorded Consent', if configured, will allow you to use regulated technology (defined above) in the Lofty platform.
You can still use click-to-call, call lists, etc. for leads with phone numbers labeled with the 'Business Relationship' or 'Unknown' statuses.
Leads with phone numbers marked as "Internal DNC" cannot be called or texted at those phone numbers unless they are removed from the Internal DNC.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by a chat with us through your Lofty CRM.

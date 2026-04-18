# Feature Updates for CRM 3.11 and Site 4.16

- Article ID: `360049682332`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T03:20:15Z`
- Source: https://help.lofty.com/hc/en-us/articles/360049682332-Feature-Updates-for-CRM-3-11-and-Site-4-16

## Body

## Introduction

*Please note that the features available to you on the Lofty platform will vary depending on the package you have purchased. For any questions related to your package, please contact our Support Team or your assigned Customer Success Manager for more information.

## Release Date

All features in this update are scheduled for release on Monday, September 28, 2020.

## Summary

- Lofty Marketplace
- Improved Zillow Lead Tagging
- Email Parsing Duplicate Improvement
- Individual Billing for Enterprise Teams and Individual Agents
- Pocket Listing Location Coordinates

## Lofty Marketplace

Lofty now has a new section called "Marketplace." In this location, you will be able to access Lofty add-on services. Upcoming releases will also include third-party apps and services that you can get more information on via the Marketplace.

In the first version of the Marketplace, you will be able to access the following Lofty services. Some of these can be added automatically and others will issue a request for a Lofty rep to coordinate a call to implement as needed.

- Buyer Lead Gen
- Seller Lead Gen
- Direct Mail
- AI Assistant
- Power Dialer / Three Line Dialer
- Text Package
- Adding Seats
- Lofty Package Upgrade

## Improved Zillow Lead Tagging

If integrated correctly (see Zillow Integration ), Zillow leads will now have additional information added to their lead profile. Basically, what this means is that Zillow sends additional information to Lofty via API and Lofty will add this information as tags. The following table outlines what is sent from Zillow and what the corresponding tag will be in Lofty:

Additional Info from Zillow | Value | Tag Name in Lofty
IsConnected | False | NotConnected
IsConnected | True | Connected
Is Tour | False | NotTour
Is Tour | True | Zillow Property Tour
Contact Message | The words "Property Tour" are contained in the initial contact message | Zillow Property Tour
Contact Message | The word "Connected" is contained in the initial contact message | Zillow Concierge

The following scenarios apply when the additional info from Zillow is combined:

- If IsConnected=true and the Contact Message does or does not have the word "Connected," then the system will only add a "Connected" tag
- If IsConnected=false but the Contact Message has the word "Connected," then the "Zillow Concierge" tag will be added
- If IsTour=true and the Contact Message does or does not have the word "Property Tour," then the system will only add a "Zillow Property Tour" tag
- If IsTour=false but the Contact Message has the word "Property Tour," then the system will add a "Zillow Property Tour" tag

"Connected" in Zillow's terms, refers to leads that have left a message and have been connected to you via the Zillow Concierge service. For example, here is a note that is added to Lofty that would contain this information:

"Tour" refers to a lead that has requested a tour via Zillow.

So, what you will want to take a look at the different tags and scenarios and potentially build out a Smart Plan to auto-respond or trigger tasks depending on your workflow. Or, at least, you can use the tags to easily filter your leads in the future or have the necessary background when referencing a lead profile page.

## Email Parsing Duplicate Improvement

Many leads enter Lofty via email parsing (the new lead email alert is parsed into the Lofty platform automatically). There is currently existing logic in place to handle duplicate leads. The following shows the current logic as well as the improvement that has been made here:

Existing Logic : Lead A and Lead B both have email addresses and they are the same. This would be flagged as a duplicate lead.

Improved Logic : Lead A and Lead B do not have email addresses so the system will check the phone and name (first, last). If the phone and name are the same, the lead will be flagged as a duplicate lead.

*Note: If a lead does not have email/phone, it will not be imported to Lofty during the email parsing process

More information on duplicate leads can be referenced in the following article: Duplicate Leads + Merging Duplicates . Email parsing details can be found here: Lead Capture/Email Parsing .

## Individual Billing for Enterprise Teams and Individual Agents

With the improvements made in this release, individual teams under an Enterprise as well as individual agents can pay for their own lead generation campaigns. Individual agents will need to have their own Subdomain/Agent Website in order for this to be possible.

- Enterprise Team Owners/Admins and individual agents can purchase lead generation directly in the CRM and use their own card to pay for it. If no card is on file, the system can collect that information directly.
- This can be accessed via Campaigns > Buyer/Seller Lead Gen
- Clicking on the button to "See how many leads I can get" will provide an estimated CPL for lead generation campaigns.
- Immediately following the purchase of Buyer/Seller Lead Gen campaigns, Lofty will prompt you to provide access to your Facebook Business Page which will be used to run the ads. After Lofty receives authorization for Facebook and has coordinated the target audience, etc., the ads can begin without delay.

## Pocket Listing Location Coordinates

Users with access to the Pocket Listing feature can now add a customized "Location Point" with longitude and latitude coordinates. This will increase the accuracy of the map center point when displayed on the Lofty website.

You can also select a specific point on a map to find the exact coordinates and add to the pocket listing location information. Selecting the point and clicking "OK" results in the specific coordinates being added.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com> or by phone at 1 (855) 981-7557.

## Plain Text

Introduction
*Please note that the features available to you on the
Lofty
platform will vary depending on the package you have purchased. For any questions related to your package, please contact our Support Team or your assigned Customer Success Manager for more information.
Release Date
All features in this update are scheduled for release on Monday, September 28, 2020.
Summary
Lofty Marketplace (#id-%5BINTERNAL%5DFeatureUpdatesforCRM3.11,Site4.15(NewSubdomains),Site4.16-ChimeMarketplace)
Improved Zillow Lead Tagging (#id-%5BINTERNAL%5DFeatureUpdatesforCRM3.11,Site4.15(NewSubdomains),Site4.16-ImprovedZillowLeadTagging)
Email Parsing Duplicate Improvement (#id-%5BINTERNAL%5DFeatureUpdatesforCRM3.11,Site4.15(NewSubdomains),Site4.16-EmailParsingDuplicateImprovement)
Individual Billing for Enterprise Teams and Individual Agents (#id-%5BINTERNAL%5DFeatureUpdatesforCRM3.11,Site4.15(NewSubdomains),Site4.16-IndividualBillingforEnterpriseTeamsandIndividualAgents)
Pocket Listing Location Coordinates (#id-%5BINTERNAL%5DFeatureUpdatesforCRM3.11,Site4.15(NewSubdomains),Site4.16-PocketListingLocationCoordinates)
Lofty
Marketplace
Lofty
now has a new section called "Marketplace." In this location, you will be able to access
Lofty
add-on services. Upcoming releases will also include third-party apps and services that you can get more information on via the Marketplace.
In the first version of the Marketplace, you will be able to access the following
Lofty
services. Some of these can be added automatically and others will issue a request for a
Lofty
rep to coordinate a call to implement as needed.
Buyer Lead Gen
Seller Lead Gen
Direct Mail
AI Assistant
Power Dialer / Three Line Dialer
Text Package
Adding Seats
Lofty Package Upgrade
Improved Zillow Lead Tagging
If integrated correctly (see
Zillow Integration (https://help.chime.me/hc/en-us/articles/115000320103-How-to-Integrate-Zillow-with-Your-Chime-CRM)
), Zillow leads will now have additional information added to their lead profile. Basically, what this means is that Zillow sends additional information to Lofty via API and Lofty will add this information as tags. The following table outlines what is sent from Zillow and what the corresponding tag will be in Lofty:
Additional Info from Zillow
Value
Tag Name in
Lofty
IsConnected
False
NotConnected
IsConnected
True
Connected
Is Tour
False
NotTour
Is Tour
True
Zillow Property Tour
Contact Message
The words "Property Tour" are contained in the initial contact message
Zillow Property Tour
Contact Message
The word "Connected" is contained in the initial contact message
Zillow Concierge
The following scenarios apply when the additional info from Zillow is combined:
If IsConnected=true
and
the Contact Message does or does not have the word "Connected," then the system will only add a "Connected" tag
If IsConnected=false but the Contact Message has the word "Connected," then the "Zillow Concierge" tag will be added
If IsTour=true and the Contact Message does or does not have the word "Property Tour," then the system will only add a "Zillow Property Tour" tag
If IsTour=false but the Contact Message has the word "Property Tour," then the system will add a "Zillow Property Tour" tag
"Connected" in Zillow's terms, refers to leads that have left a message and have been connected to you via the Zillow Concierge service. For example, here is a note that is added to
Lofty
that would contain this information:
"Tour" refers to a lead that has requested a tour via Zillow.
So, what you will want to take a look at the different tags and scenarios and potentially build out a Smart Plan to auto-respond or trigger tasks depending on your workflow. Or, at least, you can use the tags to easily filter your leads in the future or have the necessary background when referencing a lead profile page.
Email Parsing Duplicate Improvement
Many leads enter
Lofty
via email parsing (the new lead email alert is parsed into the
Lofty
platform automatically). There is currently existing logic in place to handle duplicate leads. The following shows the current logic as well as the improvement that has been made here:
Existing Logic
: Lead A and Lead B both have email addresses and they are the same. This would be flagged as a duplicate lead.
Improved Logic
: Lead A and Lead B do not have email addresses so the system will check the phone and name (first, last). If the phone
and
name are the same, the lead will be flagged as a duplicate lead.
*Note: If a lead does not have email/phone, it will
not
be imported to
Lofty
during the email parsing process
More information on duplicate leads can be referenced in the following article:
Duplicate Leads + Merging Duplicates (https://help.chime.me/hc/en-us/articles/360033002991)
. Email parsing details can be found here:
Lead Capture/Email Parsing (https://help.lofty.com/hc/en-us/articles/115003438011)
.
Individual Billing for Enterprise Teams and Individual Agents
With the improvements made in this release, individual teams under an Enterprise as well as individual agents can pay for their own lead generation campaigns. Individual agents will need to have their own Subdomain/Agent Website in order for this to be possible.
Enterprise Team Owners/Admins and individual agents can purchase lead generation directly in the CRM and use their own card to pay for it. If no card is on file, the system can collect that information directly.
This can be accessed via
Campaigns
>
Buyer/Seller
Lead Gen
Clicking on the button to "See how many leads I can get" will provide an estimated CPL for lead generation campaigns.
Immediately following the purchase of Buyer/Seller Lead Gen campaigns, Lofty will prompt you to provide access to your Facebook Business Page which will be used to run the ads. After Lofty receives authorization for Facebook and has coordinated the target audience, etc., the ads can begin without delay.
Pocket Listing Location Coordinates
Users with access to the Pocket Listing feature can now add a customized "Location Point" with longitude and latitude coordinates. This will increase the accuracy of the map center point when displayed on the
Lofty
website.
You can also select a specific point on a map to find the exact coordinates and add to the pocket listing location information. Selecting the point and clicking "OK" results in the specific coordinates being added.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com> or by phone at 1 (855) 981-7557.

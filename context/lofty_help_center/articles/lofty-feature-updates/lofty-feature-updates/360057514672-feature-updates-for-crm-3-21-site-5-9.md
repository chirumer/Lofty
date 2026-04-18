# Feature Updates for CRM 3.21, Site 5.9

- Article ID: `360057514672`
- Category: `Lofty Feature Updates`
- Section: `Lofty Feature Updates`
- Updated: `2025-11-12T03:10:54Z`
- Source: https://help.lofty.com/hc/en-us/articles/360057514672-Feature-Updates-for-CRM-3-21-Site-5-9

## Body

## Introduction

*Please note that the features available to you on the Lofty platform will vary depending on the package you have purchased as well as the account type that you have (admin/agent user). For any questions related to your package, please contact our Support Team for more information.

## Release Date

Monday, March 8, 2021.

## Summary

- CRM 3.21 Multiple Lead Ponds Lofty Paid Leads Phone Number Insights
- Site 5.9 AI Assistant: Listing Recommendations Market Trends Block: Registration Control Site Email Lead Registration CTA Block Improvements Agent Subdomains: Manual Creation

## CRM 3.21

### Multiple Lead Ponds

We have now released the ability for teams under the Enterprise Lofty package to add and configure multiple lead ponds. For now, all other teams will only have access to some of the new features outlined below (new notifications, auto-email settings, lead routing), but not to create multiple teams.

All information regarding lead ponds, including these new updates, can be found in the following Help Center article: Lead Pond . Below are a few of the highlights:

- Add multiple lead ponds
- Assign access to users for specific lead ponds
- Define individual settings for auto-emails for leads in lead ponds
- New notification for reassigned leads
- Set up lead routing directly to a lead pond

### Lofty Paid Leads Phone Number Insights

For new leads that enter the Lofty CRM via a Lofty-paid channel (i.e. " Lofty Paid Lead" or " Lofty Listing Ads"), an additional section will provide details regarding the phone number. This information will be added to the lead profile under the Social and Phone Info section and will list (if available) the number, the number holder, and the phone carrier name. This information can provide you with additional insight into reaching the customer for the first time. Please note that if you delete or modify a lead's number, this module will disappear as it will only work with the number that was submitted when the lead was captured via the Lofty -paid channel. This information is made available from the provider used for virtual numbers, call packages, etc.

## Site 5.9

*IMPORTANT : Features are available for New CMS only. If you have questions about CMS versions, please reference this article .

### AI Assistant: Listing Recommendations

A new "quick reply" option is available to website visitors who engage with the AI Assistant via website chat. The new option is "Search for properties." Previous options were outlined and made available in Feature Updates for CRM 3.19, Site 5.7 . If this option is selected by a site visitor, the AI Assistant will ask them a few questions regarding location, price, etc., as well as try to capture their information if they are not yet registered in the database. If results are available for the criteria they have outlined, a link will be provided to them to see the listings as well as a few listing preview cards to get them interested in the results. This is only available on website chat, not via text message.

More information regarding the AI Assistant can be found HERE .

### Market Trends Block: Registration Control

The Market Trends block has had an additional setting added that allows for you to display market trend data without requiring registration first. Prior to this release, a site visitor had to register no matter what in order to see the market trend data. Now, the following switch can be turned on or off. By default (and as recommended) this is turned on to require registration first.

For more information on this block, please see Market Trends Block .

### Site Email Lead Registration

More information regarding forced registration can be found here: Registration Pop-up Style & Settings .

#### Registration Logic

A new logic has been built into the registration pop-up on certain registration styles for your website. This logic is designed to capture additional email addresses during the registration process, even if the site visitor did not provide all of their information. In other words, if a lead provides at least their email address, but backs out of the process before providing their name and phone number, you will be able to capture an email-only lead after a five minute delay.

*IMPORTANT :

- Leads captured via this method will have the lead source of "Site Email Lead"
- If no name is captured the lead will be saved as "No Name"
- A welcome email will be sent to this lead if their email is captured (it will skip the "lead_first_name" variable if no name is available)
- This logic is not compatible with the "One Step Column" style meaning you will not be able to capture this type of leads if you are using that registration style.
- This feature is enabled by default for the other two registration styles ("Single Column" and "Two Columns") and there is currently no option to disable it
- If you plan to market to these leads, please make sure you are aware of how they entered your system. They did not finish the registration process but they did type in their email address and continued to the next step before backing out (and not providing name/phone).

#### Return to Site Logic

If a site visitor had previously provided their email address but did not finalize registration, the next time they are on your Lofty -built site they will be prompted to provide their phone number to finalize registration. This same pop-up will appear one time per day until they provide a phone number.

### CTA Block Improvements

#### New Styles

Four new styles have been added to the CTA Block, three of which are three-column styles.

#### New Button Action

A new button action has been added that will allow for you to "Trigger Registration" when a site visitor clicks on the CTA button. So, when clicked, the registration pop-up (see Registration Pop-up Style & Settings ) will appear.

For more information about this block, please reference the following: CTA Block .

### Agent Subdomains: Manual Creation

In addition to allowing for Agent Subdomains to be created automatically (see Automatic Agent Subdomain Creation ), this release will also allow for Team Owners and, in some situations, individual team member/agent users, to create Agent Subdomains manually. This is useful in scenarios where an Agent Subdomain has not been created automatically due to the timing of a domain configuration, etc.

Please note that the conditions for an Agent Subdomain to be created still remain the same. Those can be found under Automatic Agent Subdomain Creation . In other words, even though an Agent Subdomain can be created manually as needed, the criteria remains the same for the system to allow it to happen.

#### Team Owner/Admin

A Team Owner/Admin will now have the option to create an Agent Subdomain directly from the site list:

The system will then check the criteria to make sure the Agent Subdomain can be created. If it cannot be created, specific feedback will be given as to why. Some scenarios include the Team Website not being on a vanity domain, CNAME settings not being configured correctly, etc.

#### Team Member/Agent

If a team member/agent goes to access the landing page tool or clicks on the CMS but they do not have an Agent Subdomain, they will be presented with a screen showing them the benefits of adding a site along with links to add their own Agent Subdomain or upgrade to an Agent Website.

Just like when the Team Owner tries to create an Agent Subdomain, logic will be in place to explain why it is not possible in some scenarios (i.e. third-level domain, CNAME, .lofty.me, etc.).

Another very important piece to this is regarding how a Team Owner/Admin can lock this down if they do not want multiple sites (Agent Subdomain or Agent Website) on their account other than their Team Website . This can be locked down by navigating to Settings > Agent > Agent Permissions and then turning OFF the switch under Edit Own Website :

This will make it unavailable for the agent user to create an Agent Subdomain or Agent Website via the CMS, landing page, or Marketplace entrances.

If, in this scenario, an Agent Subdomain is still needed, the Team Owner/Admin can create one manually via their interface (explained above ) and then they need to make sure to re-enable the Edit Own Website permission so that the individual team member/agent can access their Agent Subdomain and the available features that come with it. If the permission is not enabled, that agent user will have an Agent Subdomain but will be unable to edit the available fields (outlined HERE ).

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com> or by phone at 1 (855) 981-7557.

## Plain Text

Introduction
*Please note that the features available to you on the Lofty platform will vary depending on the package you have purchased as well as the account type that you have (admin/agent user). For any questions related to your package, please contact our Support Team for more information.
Release Date
Monday, March 8, 2021.
Summary
CRM 3.21 (#h_01F0206MVGMH122V8DXW2S4MW3)
Multiple Lead Ponds (#id-3/4/2021:FeatureReleaseTrainingforCRM3.21,Site5.9-MultipleLeadPonds)
Lofty Paid Leads Phone Number Insights (#id-3/4/2021:FeatureReleaseTrainingforCRM3.21,Site5.9-ChimePaidLeadsPhoneNumberInsights)
Site 5.9 (#h_01F0206RJ7BX8REFF0ZVQXSBD4)
AI Assistant: Listing Recommendations (#id-3/4/2021:FeatureReleaseTrainingforCRM3.21,Site5.9-AIAssistant:ListingRecommendations)
Market Trends Block: Registration Control (#id-3/4/2021:FeatureReleaseTrainingforCRM3.21,Site5.9-MarketTrendsBlock:RegistrationControl)
Site Email Lead Registration (#id-3/4/2021:FeatureReleaseTrainingforCRM3.21,Site5.9-SiteEmailLeadRegistration)
CTA Block Improvements (#id-3/4/2021:FeatureReleaseTrainingforCRM3.21,Site5.9-CTABlockImprovements)
Agent Subdomains: Manual Creation (#id-3/4/2021:FeatureReleaseTrainingforCRM3.21,Site5.9-AgentSubdomains:ManualCreation(INTERNAL))
CRM 3.21
Multiple Lead Ponds
We have now released the ability for teams under the Enterprise
Lofty
package to add and configure multiple lead ponds. For now, all other teams will only have access to some of the new features outlined below (new notifications, auto-email settings, lead routing), but not to create multiple teams.
All information regarding lead ponds, including these new updates, can be found in the following Help Center article:
Lead Pond (https://help.chime.me/hc/en-us/articles/360038382872)
. Below are a few of the highlights:
Add multiple lead ponds
Assign access to users for specific lead ponds
Define individual settings for auto-emails for leads in lead ponds
New notification for reassigned leads
Set up lead routing directly to a lead pond
Lofty
Paid Leads Phone Number Insights
For new leads that enter the
Lofty
CRM via a
Lofty-paid
channel (i.e. "
Lofty
Paid Lead" or "
Lofty
Listing Ads"), an additional section will provide details regarding the phone number. This information will be added to the lead profile under the
Social and Phone Info
section and will list (if available) the number, the number holder, and the phone carrier name. This information can provide you with additional insight into reaching the customer for the first time. Please note that if you delete or modify a lead's number, this module will disappear as it will only work with the number that was submitted when the lead was captured via the
Lofty
-paid channel. This information is made available from the provider used for virtual numbers, call packages, etc.
Site 5.9
*IMPORTANT
: Features are available for New CMS only. If you have questions about CMS versions, please reference
this article (https://help.chime.me/hc/en-us/articles/360038181471)
.
AI Assistant: Listing Recommendations
A new "quick reply" option is available to website visitors who engage with the AI Assistant via website chat. The new option is "Search for properties." Previous options were outlined and made available in
Feature Updates for CRM 3.19, Site 5.7 (https://help.chime.me/hc/en-us/articles/360055886672-Feature-Updates-for-CRM-3-19-Site-5-7-#id-1/28/2021:FeatureReleaseTrainingforCRM3.19,Site5.7-AIAssistant:QuickReplyforWebsite)
. If this option is selected by a site visitor, the AI Assistant will ask them a few questions regarding location, price, etc., as well as try to capture their information if they are not yet registered in the database. If results are available for the criteria they have outlined, a link will be provided to them to see the listings as well as a few listing preview cards to get them interested in the results. This is only available on website chat, not via text message.
More information regarding the AI Assistant can be found
HERE (https://help.chime.me/hc/en-us/sections/360007651672-AI-Assistant)
.
Market Trends Block: Registration Control
The Market Trends block has had an additional setting added that allows for you to display market trend data without requiring registration first. Prior to this release, a site visitor had to register no matter what in order to see the market trend data. Now, the following switch can be turned on or off. By default (and as recommended) this is turned
on
to require registration first.
For more information on this block, please see
Market Trends Block (https://help.chime.me/hc/en-us/articles/360057982211)
.
Site Email Lead Registration
More information regarding forced registration can be found here:
Registration Pop-up Style & Settings (https://help.chime.me/hc/en-us/articles/360056629652)
.
Registration Logic
A new logic has been built into the registration pop-up on certain registration styles for your website. This logic is designed to capture additional email addresses during the registration process, even if the site visitor did not provide all of their information. In other words, if a lead provides at least their email address, but backs out of the process before providing their name and phone number, you will be able to capture an email-only lead after a five minute delay.
*IMPORTANT
:
Leads captured via this method will have the lead source of "Site Email Lead"
If no name is captured the lead will be saved as "No Name"
A welcome email will be sent to this lead if their email is captured (it will skip the "lead_first_name" variable if no name is available)
This logic is
not
compatible with the "One Step Column" style meaning you will not be able to capture this type of leads if you are using that registration style.
This feature is enabled by default for the other two registration styles ("Single Column" and "Two Columns") and there is currently no option to disable it
If you plan to market to these leads, please make sure you are aware of how they entered your system. They did not finish the registration process but they did type in their email address and continued to the next step before backing out (and not providing name/phone).
Return to Site Logic
If a site visitor had previously provided their email address but did not finalize registration, the next time they are on your
Lofty
-built site they will be prompted to provide their phone number to finalize registration. This same pop-up will appear one time per day until they provide a phone number.
CTA Block Improvements
New Styles
Four new styles have been added to the CTA Block, three of which are three-column styles.
New Button Action
A new button action has been added that will allow for you to "Trigger Registration" when a site visitor clicks on the CTA button. So, when clicked, the registration pop-up (see
Registration Pop-up Style & Settings (https://help.chime.me/hc/en-us/articles/360056629652)
) will appear.
For more information about this block, please reference the following:
CTA Block (https://help.chime.me/hc/en-us/articles/360037923092)
.
Agent Subdomains: Manual Creation
In addition to allowing for Agent Subdomains to be created automatically (see
Automatic Agent Subdomain Creation (https://help.chime.me/hc/en-us/articles/360054744232#h_01EW453CQHNR5D3AHB2C0HT5ER)
), this release will also allow for Team Owners and, in some situations, individual team member/agent users, to create Agent Subdomains manually. This is useful in scenarios where an Agent Subdomain has not been created automatically due to the timing of a domain configuration, etc.
Please note that the conditions for an Agent Subdomain to be created still remain the same. Those can be found under
Automatic Agent Subdomain Creation (https://help.chime.me/hc/en-us/articles/360054744232#h_01EW453CQHNR5D3AHB2C0HT5ER)
. In other words, even though an Agent Subdomain can be created manually as needed, the criteria remains the same for the system to allow it to happen.
Team Owner/Admin
A Team Owner/Admin will now have the option to create an Agent Subdomain directly from the site list:
The system will then check the criteria to make sure the Agent Subdomain can be created. If it
cannot
be created, specific feedback will be given as to why. Some scenarios include the Team Website not being on a vanity domain, CNAME settings not being configured correctly, etc.
Team Member/Agent
If a team member/agent goes to access the landing page tool or clicks on the CMS but they do not have an Agent Subdomain, they will be presented with a screen showing them the benefits of adding a site along with links to add their own Agent Subdomain or upgrade to an Agent Website.
Just like when the Team Owner tries to create an Agent Subdomain, logic will be in place to explain why it is
not
possible in some scenarios (i.e. third-level domain, CNAME, .lofty.me, etc.).
Another very important piece to this is regarding how a Team Owner/Admin can lock this down if they do not want multiple sites (Agent Subdomain or Agent Website) on their account other than their
Team Website
. This can be locked down by navigating to
Settings
>
Agent
>
Agent Permissions
and then turning
OFF
the switch under
Edit Own Website
:
This will make it unavailable for the agent user to create an Agent Subdomain or Agent Website via the CMS, landing page, or Marketplace entrances.
If, in this scenario, an Agent Subdomain is still needed, the Team Owner/Admin can create one manually via their interface (explained
above (#id-3/4/2021:FeatureReleaseTrainingforCRM3.21,Site5.9-TeamOwner)
) and then they need to make sure to re-enable the
Edit Own Website
permission so that the individual team member/agent can access their Agent Subdomain and the available features that come with it. If the permission is not enabled, that agent user will have an Agent Subdomain but will be unable to edit the available fields (outlined
HERE (https://help.chime.me/hc/en-us/articles/360054744232)
).
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com> or by phone at 1 (855) 981-7557.

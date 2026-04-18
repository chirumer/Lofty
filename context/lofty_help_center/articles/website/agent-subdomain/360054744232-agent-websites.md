# Agent Websites

- Article ID: `360054744232`
- Category: `Website`
- Section: `Agent Subdomain`
- Updated: `2025-11-11T02:55:20Z`
- Source: https://help.lofty.com/hc/en-us/articles/360054744232-Agent-Websites

## Body

## Introduction

Agent Websites are designed to be quick and easy to build, but still provide a location for agents to use for marketing their business as part of an office or company (parent site) using Lofty. An Agent Website has limitations on what can be edited, but does not have to go through a complex or extended MLS application process (as long as the MLS does not require individual applications for subdomain websites). There is no additional cost associated for these sites.

## Summary

- What can be edited on an Agent Website?
- Domain Configuration for Website Creation
- Manage Agent Website Creation Settings Auto-Creation vs. Manual Creation Website Sync Mode
- Common Troubleshooting
- FAQs

## What can be edited on an Agent Website?

When an Agent Website is auto-created, it will copy the appearance of the Company, Office, or Team website above it.

If unlocked at the parent website level (see Website Sync Mode ) the following blocks and sections can be edited by the agent:

Feature | Permission/Behavior
Header | Optional (Can choose to edit or keep synced)
Footer | Always synced from the parent website
Menu | ✅ Rename ✅ Move ✅ Hide ❌ Delete ❌ Add New Pages ❌ Add New Folders
Block Library | ✅Can add the below blocks with limited styles: Hero Agent Review Featured Area Home Valuation Featured Listings Blog Form
Style | ❌
SEO Settings & Advanced SEO Tool | ❌
Blog | ✅
Featured Area | ✅ (Maximum of 6 allowed)
Registration Popup | ❌ Style synced from parent site on creation
Lead Registration Rules | ❌

### Subdomain Prefix

If you would like to change the prefix of your website, which is typically in the format of firstlast.url.com , you can do so by navigating to Settings > Basic Info > Subdomain

### Personal Information

This information is what displays on any blocks that show agent information, including the chat box, listing detail page, About page, etc. Edit this under Settings > Company Info > Agents > Edit

### Lead Source

The default setting for the lead source will always be the same as the parent website. If you would like to change this, you can customize it under Settings > Lead Capture > Lead Source :

### Integrations

The following integrations can be set up individually for your website:

- Google Analytics Integration
- Google Tag Manager
- Google Ads
- Facebook Pixel Integration
- Adwerx Integration
- Follow-Up Boss Integration

### Listings Block & Listing Filters

To have your listings prioritized when displayed in the listings blocks, make sure your license ID and MLS ID are present under CMS > Listing > MLS Integration , as outlined HERE .

You do have access to edit the All Listings and Sold Listings filters. You can edit these filters by going to Listings > Filters :

## Domain Configuration for Website Creation

The following requirements have to be met for an Agent Website to be created automatically:

1. The Lofty Parent Website (associated with the Parent Site Owner/Admin seat) must have its vanity domain. For example, www.abcrealestate.com. Note that third-level domains (search.abcrealestate.com) are not allowed to have websites underneath them.
2. The domain configuration on the Parent Website vanity domain must allow Lofty to build subdomains. Refer to the Domain Configuration Guide for more information.
3. Your MLS must allow Lofty to build subdomains without requiring any additional applications.
4. Please note that using "firstlast.domain.com" will only be an option once the parent site domain is configured as a vanity domain (e.g. lofty. realestate.com) AND a wildcard CNAME has been added to the domain settings as seen below: Name = * Value = yourdomain.com

As long as the above conditions are met, users who are added by the Account Owner will also have an agent website created for them. This user will also receive an email letting them know their subdomain has been created.

## Manage Agent Website Creation Settings

### Auto-Creation vs. Manual Creation

Agent Websites will auto-create when the agent activates their Lofty account for the first time.

If you would like to manually control when the Agent Websites are created, you can modify the auto-creation policy in the CMS Site List.

Click on Website > Create Agent Website(s) , then the settings wheel next to Create Agent Websites .

The system will then check the criteria to make sure the agent website can be created. If it cannot be created, specific feedback will be given as to why. Some scenarios include the Parent Website not being on a vanity domain, CNAME settings not being configured correctly, etc.

### Website Sync Mode

Agent Websites inherit their appearance from the Team, Office, or Company website above them by default. But you can adjust this setting to give your agents greater control over the appearance of their website.

### Common Troubleshooting

#### MLS Configuration

To ensure compliance with your MLS, you will need to add your Agent ID to display MLS data. The MLSs available to you will be the same ones that the owner of the parent website applied for, but your website will only display the data for the MLSs that you are a member of. Navigate to Listings > MLS > MLS Integration and add your Agent ID to the MLS that can be displayed on your website.

A pop-up will allow you to search for yourself and confirm your Agent ID. Once you have verified your MLS membership, the MLS data will display on your website!

If you would like to manually add a deleted MLS back, click on the blue Add a New MLS button. Please note that you can only do so if that MLS is already connected to the parent website.

If your MLS requires an application to be submitted to build an Agent Website, Lofty can help with that process manually. Lofty is aware of the MLSs that have this requirement and will not allow for an Agent Website that needs individual MLS review to be created automatically or manually . Because of the application process, it may take longer to go through the setup process.

#### Landing Page Creation

If a Lofty user/agent goes to access the landing page tool or clicks on the CMS, but they do not have an Agent Website, they will be presented with a screen showing the option to create a landing page using the Account Owner's site.

Just like when the Account Owner tries to create a website, logic will be in place to explain why it is not possible in some scenarios (i.e., third-level domain, CNAME, lofty.com, etc.).

A Company Owner/Admin can remove this access by changing the Edit Own Website permission for individual users (see Organization - Permission Profiles ).

#### Agent Website Deactivation

Please note that an Agent Website will be deleted automatically in the following scenarios:

1. The agent who owns the Agent Website is removed from the account.
2. The parent website (Company, Office, or Team) is deleted, or access to Lofty is revoked.

## FAQs

- As an agent, what if I would like more control over my website than what is currently available for an Agent Website?
- As a Company Owner/Admin, what if I already have agents on my account but no agent websites set up?
- Can individual agents run Lofty lead generation campaigns using an Agent Website? Or does it have to be an Agent Website with a Vanity domain?
- What if my agent does not need an Agent Website?
- What is the difference between a subdomain and a third-level domain?
- How can I customize the navigation and add pages, blocks, etc., to my agent website?
- How do I get an Agent Website if my Team Website is not on a "vanity domain"?
- Where does the Agent Website's contact info in the footer sync from?

### As an agent, what if I would like more control over my website?

Consider unlocking Full SEO. Please check with your Account Owner/Admin if you are unable to find the option to upgrade.

### As a Company Owner/Admin, what if I already have agents on my account but no Agent Websites set up?

As soon as the requirements are met (outlined at the beginning of the article), websites will be created for existing agents as well as new agents. The main requirement that has to be met is that of the domain configuration. See Domain Configuration Guide: Agent Website(s) .

### Can individual agents run Lofty lead generation campaigns using a subdomain?

Yes. Lofty lead generation can be run using a subdomain website (described in this article). Agent Websites with Full SEO unlocked will allow for additional customization to the website and landing pages for campaigns that agents might be running individually and not via Lofty. If you are interested in Lofty lead generation, navigate to the Lofty Marketplace to request more information:

### What is the difference between a subdomain and a third-level domain?

*IMPORTANT : Lofty subdomains can only be third-level domains.

A subdomain is a domain that is part of a larger domain. For example, west.example.com, go.link.example.com, and east.example.com are subdomains of the example.com domain.

A third-level domain is a specific subdomain that has only 3 parts. For example, west.example.com, go.example.com, and east.example.com are third-level domains (and even subdomains) of the example.com domain, but go.link.example.com is a subdomain, but it is not a third-level domain as it has four parts (meaning it is a fourth-level domain).

### How do I get a website if the parent website is not on a "vanity domain"?

Unfortunately, Lofty will not be able to build an Agent website if this is the case. You may want to consider an Agent Website with Vanity Domain (see Websites on Lofty ), and you can use either the provided "lofty.com" domain or you can use your own if you have one.

### Where does the Agent Website's contact info in the footer sync from?

The Agent Website's contact information will sync directly from the parent website. In other words, the parent website has a configuration for selecting the profile that will be displayed in the footer, and any changes made here will also reflect automatically on the Agent website footer.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

Related terms: basic agent website,  subdomain, subdomain original

## Plain Text

Introduction
Agent Websites are designed to be quick and easy to build, but still provide a location for agents to use for marketing their business as part of an office or company (parent site) using Lofty. An Agent Website has limitations on what can be edited, but does not have to go through a complex or extended MLS application process (as long as the MLS does not require individual applications for subdomain websites). There is no additional cost associated for these sites.
Summary
What can be edited on an Agent Website? (#h_01JZTYJJ2GJC7HW5ZRVHZH6DNY)
Domain Configuration for Website Creation (#h_01EW453CQHNR5D3AHB2C0HT5ER)
Manage Agent Website Creation Settings (#id-3/4/2021:FeatureReleaseTrainingforCRM3.21,Site5.9-TeamOwner)
Auto-Creation vs. Manual Creation (#h_01JZTXG409VTHEKEPQDPMVYSAX)
Website Sync Mode (#h_01JZTXH8D47TT0WTJGFB1N7JMN)
Common Troubleshooting (#id-3/4/2021:FeatureReleaseTrainingforCRM3.21,Site5.9-TeamMember/Agent)
FAQs (#h_01EWBA6AGD7B48R7H0AYDYAXCZ)
What can be edited on an Agent Website?
When an Agent Website is auto-created, it will copy the appearance of the Company, Office, or Team website above it.
If unlocked at the parent website level (see
Website Sync Mode (#h_01JZTXH8D47TT0WTJGFB1N7JMN)
) the following blocks and sections can be edited by the agent:
Feature
Permission/Behavior
Header
Optional (Can choose to edit or keep synced)
Footer
Always synced from the parent website
Menu
✅
Rename
✅
Move
✅
Hide
❌
Delete
❌
Add New Pages
❌
Add New Folders
Block Library
✅Can add the below blocks with limited styles:
Hero
Agent
Review
Featured Area
Home Valuation
Featured Listings
Blog
Form
Style
❌
SEO Settings & Advanced SEO Tool
❌
Blog
✅
Featured Area
✅ (Maximum of 6 allowed)
Registration Popup
❌ Style synced from parent site on creation
Lead Registration Rules
❌
Subdomain Prefix
If you would like to change the prefix of your website, which is typically in the format of
firstlast.url.com
, you can do so by navigating to
Settings > Basic Info > Subdomain
Personal Information
This information is what displays on any blocks that show agent information, including the chat box, listing detail page, About page, etc. Edit this under
Settings > Company Info > Agents > Edit
Lead Source
The default setting for the lead source will always be the same as the parent website. If you would like to change this, you can customize it under
Settings
>
Lead Capture
>
Lead Source
:
Integrations
The following integrations can be set up individually for your website:
Google Analytics Integration (https://help.lofty.com/hc/en-us/articles/360038373351)
Google Tag Manager (https://help.lofty.com/hc/en-us/articles/360042831291)
Google Ads (https://help.lofty.com/hc/en-us/articles/26883984829083)
Facebook Pixel Integration (https://help.lofty.com/hc/en-us/articles/360038005452)
Adwerx Integration (https://help.lofty.com/hc/en-us/articles/20611002129819)
Follow-Up Boss Integration (https://help.lofty.com/hc/en-us/articles/24974165532443)
Listings Block & Listing Filters
To have your listings prioritized when displayed in the listings blocks, make sure your license ID and MLS ID are present under
CMS > Listing > MLS Integration
, as outlined
HERE (#h_01F1DY5RW6QTB46082DMVQBSH1)
.
You do have access to edit the
All Listings
and
Sold Listings
filters. You can edit these filters by going to
Listings
>
Filters
:
Domain Configuration for Website Creation
The following requirements have to be met for an Agent Website to be created automatically:
The Lofty Parent Website (associated with the Parent Site Owner/Admin seat)
must
have its vanity domain. For example, www.abcrealestate.com. Note that third-level domains (search.abcrealestate.com) are not allowed to have websites underneath them.
The domain configuration on the Parent Website vanity domain must allow Lofty to build subdomains. Refer to the
Domain Configuration Guide (https://help.lofty.com/hc/en-us/articles/360054554712)
for more information.
Your MLS must allow Lofty to build subdomains without requiring any additional applications.
Please note that using "firstlast.domain.com" will only be an option once the parent site domain is configured as a vanity domain (e.g. lofty.
realestate.com)
AND
a wildcard CNAME has been added to the domain settings as seen below:
Name = *
Value = yourdomain.com
As long as the above conditions are met, users who are added by the Account Owner will also have an agent website created for them. This user will also receive an email letting them know their subdomain has been created.
Manage Agent Website Creation Settings
Auto-Creation vs. Manual Creation
Agent Websites will auto-create when the agent activates their Lofty account for the first time.
If you would like to manually control when the Agent Websites are created, you can modify the auto-creation policy in the CMS Site List.
Click on
Website
>
Create Agent Website(s)
, then the settings wheel next to
Create Agent Websites
.
The system will then check the criteria to make sure the agent website can be created. If it
cannot
be created, specific feedback will be given as to why. Some scenarios include the Parent Website not being on a vanity domain, CNAME settings not being configured correctly, etc.
Website Sync Mode
Agent Websites inherit their appearance from the Team, Office, or Company website above them by default. But you can adjust this setting to give your agents greater control over the appearance of their website.
Common Troubleshooting
MLS Configuration
To ensure compliance with your MLS, you will need to add your Agent ID to display MLS data. The MLSs available to you will be the same ones that the owner of the parent website applied for, but your website will only display the data for the MLSs that you are a member of. Navigate to
Listings > MLS > MLS Integration
and add your Agent ID to the MLS that can be displayed on your website.
A pop-up will allow you to search for yourself and confirm your Agent ID. Once you have verified your MLS membership, the MLS data will display on your website!
If you would like to manually add a deleted MLS back, click on the blue
Add a New MLS
button. Please note that you can only do so if that
MLS is already connected to the parent website.
If your MLS requires an application to be submitted to build an Agent Website, Lofty can help with that process manually. Lofty is aware of the MLSs that have this requirement and will not allow for an Agent Website that needs individual MLS review to be
created automatically (#h_01EW453CQHNR5D3AHB2C0HT5ER)
or
manually (#h_01EW453GK2Z1PBHSWAHY0NE1DT)
. Because of the application process, it may take longer to go through the setup process.
Landing Page Creation
If a Lofty user/agent goes to access the landing page tool or clicks on the CMS, but they do not have an Agent Website, they will be presented with a screen showing the option to create a landing page using the Account Owner's site.
Just like when the Account Owner tries to create a website, logic will be in place to explain why it is
not
possible in some scenarios (i.e., third-level domain, CNAME, lofty.com, etc.).
A Company Owner/Admin can remove this access by changing the
Edit Own Website
permission for individual users (see
Organization - Permission Profiles (https://help.lofty.com/hc/en-us/articles/4407530443291)
).
Agent Website Deactivation
Please note that an Agent Website will be deleted automatically in the following scenarios:
The agent who owns the Agent Website is removed from the account.
The parent website (Company, Office, or Team) is deleted, or access to Lofty is revoked.
FAQs
As an agent, what if I would like more control over my website than what is currently available for an Agent Website? (#h_01EWBATWQH7NCSZFZJ9EFJEVR6)
As a Company Owner/Admin, what if I already have agents on my account but no agent websites set up? (#h_01EWBA5T5X8HDBZXHACHGZ7FJ0)
Can individual agents run Lofty lead generation campaigns using an Agent Website? Or does it have to be an Agent Website with a Vanity domain? (#h_01EWBAV8B2KDZ8V8JY3HH9C3PP)
What if my agent does not need an Agent Website? (#h_01EWBAVEEY6BSG6YH5J73G3F16)
What is the difference between a subdomain and a third-level domain? (#h_01EWBAVN2EAX8PX47X6AETCBK9)
How can I customize the navigation and add pages, blocks, etc., to my agent website? (#h_01EWBAVVMMYGT1M2DMJNRPWYNM)
How do I get an Agent Website if my Team Website is not on a "vanity domain"? (#h_01EWBAW0K7DAB4ABFGZ8NQCJ77)
Where does the Agent Website's contact info in the footer sync from? (#h_01FARQWPR0K83FP53K7VXYS5KT)
As an agent, what if I would like more control over my website?
Consider unlocking Full SEO. Please check with your Account Owner/Admin if you are unable to find the option to upgrade.
As a Company Owner/Admin, what if I already have agents on my account but no Agent Websites set up?
As soon as the requirements are met (outlined at the beginning of the article), websites will be created for existing agents as well as new agents. The main requirement that has to be met is that of the domain configuration. See
Domain Configuration Guide: Agent Website(s) (https://help.chime.me/hc/en-us/articles/360054554712#h_01EVHM2584HMXKD4J9GPJQ2RRN)
.
Can individual agents run Lofty lead generation campaigns using a subdomain?
Yes. Lofty lead generation
can
be run using a subdomain website (described in this article). Agent Websites with Full SEO unlocked will allow for additional customization to the website and landing pages for campaigns that agents might be running individually and not via Lofty. If you are interested in Lofty lead generation, navigate to the Lofty Marketplace to request more information:
What is the difference between a subdomain and a third-level domain?
*IMPORTANT
: Lofty subdomains can only be third-level domains.
A
subdomain
is a domain that is part of a larger domain. For example, west.example.com, go.link.example.com, and east.example.com are subdomains of the example.com domain.
A
third-level domain
is a specific subdomain that has only 3 parts. For example, west.example.com, go.example.com, and east.example.com are third-level domains (and even subdomains) of the example.com domain, but go.link.example.com is a subdomain, but it is
not
a third-level domain as it has four parts (meaning it is a fourth-level domain).
How do I get a website if the parent website is not on a "vanity domain"?
Unfortunately, Lofty will
not
be able to build an Agent website if this is the case. You may want to consider an Agent Website with Vanity Domain (see
Websites on Lofty (https://help.lofty.com/hc/en-us/articles/37950239399451)
), and you can use either the provided "lofty.com" domain or you can use your own if you have one.
Where does the Agent Website's contact info in the footer sync from?
The Agent Website's contact information will sync directly from the parent website. In other words, the parent website has a configuration for selecting the profile that will be displayed in the footer, and any changes made here will also reflect automatically on the Agent website footer.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.
Related terms: basic agent website,  subdomain, subdomain original

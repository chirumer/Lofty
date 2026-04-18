# Lead Organization with Sources

- Article ID: `360041252272`
- Category: `CRM`
- Section: `Organize Leads`
- Updated: `2025-11-07T06:41:26Z`
- Source: https://help.lofty.com/hc/en-us/articles/360041252272-Lead-Organization-with-Sources

## Body

## Introduction

In Lofty, the "source" is a very important piece of data associated with each and every lead that exists in the system. "Source" refers to where the lead originated (e.g. Realtor.com, Zillow, etc.). This source can be used to filter leads, track ROI for specific sources, and even establish lead routing within Lofty to distribute based on specific sources. Some sources can be customized and others sources are built into Lofty by default. Source names can have up to 100 characters. This article will explain how Lofty selects the sources for leads.

## Summary

- Adding Leads Manually
- CSV Import
- Email Parsing
- API
- Open House
- Text Codes
- Lofty Websites
- UTM Settings
- Editing Sources
- Source Customization
- Facebook/Google Registration

## Adding Leads Manually

If a lead is added manually via the People page in Lofty, the source will default to "Other." However, this can be changed when adding the lead or later as necessary. See Add a Lead .

*** There is a permission that will allow an account admin to restrict users from changing a lead's source. By default, this permission is ON for all Lofty users. When the permission is OFF, the Source field is greyed out for all leads this user can see, including Private Leads.

For more information, see Team Permissions for team-type accounts or Enterprise Permissions for Enterprise accounts.

## CSV Import

When a user imports a CSV document into Lofty (see Import your Leads to Lofty ), the lead source is typically available as a column/field in the actual CSV that is then matched as the source (see screenshot below). However, if this field is not present, the source defaults to "CSV Import."

## Email Parsing

If a lead comes in through the mail parser, which is the majority of all lead sources (see Lead Capture Sources ), the source will be the name of the service where the lead originated. For a list of these names, as they will appear in Lofty, you can reference the following section under Personal Settings > Lead Settings > Lead Capture> Lead Capture Settings :

## API

The lead source should always be pre-defined in the code that connects any direct API integration to Lofty. If not, the source will be "Other."

## Open House

If the lead enters Lofty via an Open House Form(see Open House Forms ), the source will be "Open House."

## Text Codes

If the lead enters Lofty via a text code (see Text Codes for Lead Capture ), the source will be "Text Code."

## Lofty Websites

The website editor defines the default source: CMS Tool > Settings > Lead Source . If nothing else has been added here, the source is "Website." This source can differ for the main team and agent subdomain websites.

Therefore, by default, any lead who registers on the Lofty IDX website will be assigned to the CRM with the source "Website." Unless, however, any of the following are true:

- The "Lead Source" in the CMS has been changed to something else
- A lead registers on a landing page or custom page that has a separate lead source defined
- A UTM code is built into the URL of a campaign that brought the lead to the website. The UTM source will be the source in Lofty.
- If a lead enters the CRM via a link found on Facebook or Google, the source will be "Facebook" or "Google", as long as no other UTM code has been set up.
- When using Lofty Lead Gen, the leads will always have the source of "Lofty Paid Lead" and the tags will distinguish if the lead came in from Facebook or Google

## UTM Settings

UTM is used to tag leads and better monitor campaign ROI. Users can add UTM codes to URLs and have that data added to leads automatically as they are brought into Lofty. Google's Campaign URL Builder is a useful way to set these up.

There are three different parts to how this works:

1. Import utm_source as lead sources . This is ON by default and cannot be turned off. If a lead registers via a campaign or URL with an associated "utm_source," that source will be assigned to the lead automatically. A new source will be created if it does not already exist.
2. Import utm_campaign as lead tags . If a lead registers via a campaign or URL with an associated "utm_campaign," that campaign will be recorded for that lead automatically as a tag. A new tag will be created if it does not already exist.
3. Import utm_content as lead tags . If a lead registers via a campaign or URL with an associated "utm_content," that content will be recorded for that lead automatically as a tag. A new tag will be created if it does not already exist.

To edit or set this up, navigate to Personal Settings > Lead Settings > Tags > UTM Settings :

## Editing Sources

All sources are located under Team/Company Settings > Lead Settings > Sources . Some sources cannot be edited, but they can be hidden or deleted and replaced. This is the page that would be used to mass update a source.

When a Source is deleted, it must be replaced on any leads that the Source was connected to.

## Source Customization

This feature allows users to customize the Source for lead capture providers. To access, navigate to Personal Settings → Lead Settings → Lead Capture → Lead CaptureSettings:

Here, the Source that appears on the lead profile can be updated to any source that has been created in the CRM:

When changing the Source, the user must confirm on the pop-up:

Zillow and Realtor lead capture is set up in Lead Settings → Lead Capture. Custom sources may also be set for both:

## Facebook/Google Registration

Review the table below regarding how leads will be sourced into Lofty from Facebook posts or by clicking to register in Lofty via Facebook or Google. Also, keep in mind that any UTM parameters that are set up on any URLs will override the following:

# | Scenario | Source in Lofty
1 | A lead clicks on a link on a Facebook post, goes to the Lofty site, and registers, what will the source be? | Facebook
2 | A lead clicks on a link on a Google search, goes to the Lofty site, and registers, what will the source be? | Google
3 | A lead registers with Facebook on a Lofty website, what will the source be? | Website
4 | A lead registers with Google on a Lofty website, what will the source be? | Website
5 | Lofty is running Facebook/Google ads a link is clicked and the lead registers | Lofty Paid Lead

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
In Lofty, the "source" is a very important piece of data associated with each and every lead that exists in the system. "Source" refers to where the lead originated (e.g. Realtor.com, Zillow, etc.). This source can be used to filter leads, track ROI for specific sources, and even establish lead routing within Lofty to distribute based on specific sources. Some sources can be customized and others sources are built into Lofty by default. Source names can have up to 100 characters. This article will explain how Lofty selects the sources for leads.
Summary
Adding Leads Manually (#h_32dab105-efd8-457c-8eef-822eebde6f1c)
CSV Import (#h_389b6885-a5e5-4980-b6cb-6a5fe66da53f)
Email Parsing (#h_acccdb34-22fb-456b-a149-bbce2c5a2d72)
API (#h_2ff6148e-99f5-46f8-a4cf-4070a1419e0d)
Open House (#h_4d3ae592-6b5d-4cda-a447-60f9293432a1)
Text Codes (#h_d32cfb9a-1952-45b4-8e30-0096cbbe8d6d)
Lofty Websites (#h_1c9641b1-4cbf-4178-ab75-4587594236e5)
UTM Settings (#h_44350fd8-c39d-45c4-a79e-b2a73e62e8af)
Editing Sources (#h_2c85f4ae-4d0a-4b97-800b-40f2eb9143c3)
Source Customization (#id-4/10/2023:FeatureReleaseTrainingforChime3.62-SourceCustomization)
Facebook/Google Registration (#h_0e054fda-0359-4f87-9a7d-62d87ef51037)
Adding Leads Manually
If a lead is added manually via the
People
page in Lofty, the source will default to "Other." However, this can be changed when adding the lead or later as necessary. See
Add a Lead (https://help.lofty.com/hc/en-us/articles/360038382932)
.
*** There is a permission that will allow an account admin to restrict users from changing a lead's source. By default, this permission is ON for all Lofty users. When the permission is OFF, the Source field is greyed out for all leads this user can see, including Private Leads.
For more information, see
Team Permissions (https://help.lofty.com/hc/en-us/articles/360055290451)
for team-type accounts or
Enterprise Permissions (https://help.lofty.com/hc/en-us/articles/4407530443291)
for Enterprise accounts.
CSV Import
When a user imports a CSV document into Lofty (see
Import your Leads to Lofty (https://help.lofty.com/hc/en-us/articles/360001710831)
), the lead source is typically available as a column/field in the actual CSV that is then matched as the source (see screenshot below). However, if this field is not present, the source defaults to "CSV Import."
Email Parsing
If a lead comes in through the mail parser, which is the majority of all lead sources (see
Lead Capture Sources (https://help.lofty.com/hc/en-us/sections/115000907871-Lead-Capture)
), the source will be the name of the service where the lead originated. For a list of these names, as they will appear in Lofty, you can reference the following section under
Personal
Settings
>
Lead Settings
>
Lead Capture> Lead Capture Settings
:
API
The lead source should always be pre-defined in the code that connects any direct API integration to Lofty. If not, the source will be "Other."
Open House
If the lead enters Lofty via an Open House Form(see
Open House Forms (https://help.lofty.com/hc/en-us/articles/360023770952)
), the source will be "Open House."
Text Codes
If the lead enters Lofty via a text code (see
Text Codes for Lead Capture (https://help.lofty.com/hc/en-us/articles/360018862672)
), the source will be "Text Code."
Lofty Websites
The website editor defines the default source:
CMS Tool
>
Settings
>
Lead Source
. If nothing else has been added here, the source is "Website." This source can differ for the main team and agent subdomain websites.
Therefore, by default, any lead who registers on the Lofty IDX website will be assigned to the CRM with the source "Website." Unless, however, any of the following are true:
The "Lead Source" in the CMS has been changed to something else
A lead registers on a landing page or custom page that has a separate lead source defined
A UTM code is built into the URL of a campaign that brought the lead to the website. The UTM source will be the source in Lofty.
If a lead enters the CRM via a link found on Facebook or Google, the source will be "Facebook" or "Google", as long as no other UTM code has been set up.
When using Lofty Lead Gen, the leads will always have the source of "Lofty Paid Lead" and the tags will distinguish if the lead came in from Facebook or Google
UTM Settings
UTM is used to tag leads and better monitor campaign ROI. Users can add UTM codes to URLs and have that data added to leads automatically as they are brought into Lofty.
Google's Campaign URL Builder (https://ga-dev-tools.appspot.com/campaign-url-builder/)
is a useful way to set these up.
There are three different parts to how this works:
Import utm_source as lead sources
. This is ON by default and cannot be turned off. If a lead registers via a campaign or URL with an associated "utm_source," that source will be assigned to the lead automatically. A new source will be created if it does not already exist.
Import utm_campaign as lead tags
. If a lead registers via a campaign or URL with an associated "utm_campaign," that campaign will be recorded for that lead automatically as a tag. A new tag will be created if it does not already exist.
Import utm_content as lead tags
. If a lead registers via a campaign or URL with an associated "utm_content," that content will be recorded for that lead automatically as a tag. A new tag will be created if it does not already exist.
To edit or set this up, navigate to
Personal
Settings
>
Lead Settings
>
Tags
>
UTM Settings
:
Editing Sources
All sources are located under
Team/Company Settings
>
Lead Settings
>
Sources
. Some sources cannot be edited, but they can be hidden or deleted and replaced. This is the page that would be used to mass update a source.
When a Source is deleted, it must be replaced on any leads that the Source was connected to.
Source Customization
This feature allows users to customize the Source for lead capture providers. To access, navigate to Personal Settings → Lead Settings → Lead Capture → Lead CaptureSettings:
Here, the Source that appears on the lead profile can be updated to any source that has been created in the CRM:
When changing the Source, the user must confirm on the pop-up:
Zillow and Realtor lead capture is set up in Lead Settings → Lead Capture. Custom sources may also be set for both:
Facebook/Google Registration
Review the table below regarding how leads will be sourced into Lofty from Facebook posts or by clicking to register in Lofty via Facebook or Google. Also, keep in mind that any UTM parameters that are set up on any URLs will override the following:
#
Scenario
Source in Lofty
1
A lead clicks on a link on a Facebook post, goes to the Lofty site, and registers, what will the source be?
Facebook
2
A lead clicks on a link on a Google search, goes to the Lofty site, and registers, what will the source be?
Google
3
A lead registers with Facebook on a Lofty website, what will the source be?
Website
4
A lead registers with Google on a Lofty website, what will the source be?
Website
5
Lofty is running Facebook/Google ads a link is clicked and the lead registers
Lofty Paid Lead
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

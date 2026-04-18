# WordPress + Lofty IDX Plugin

- Article ID: `26466256969371`
- Category: `Website`
- Section: `Listing Plugin`
- Updated: `2025-11-11T09:32:23Z`
- Source: https://help.lofty.com/hc/en-us/articles/26466256969371-WordPress-Lofty-IDX-Plugin

## Body

## Introduction

43% of websites on the internet are built with WordPress.

The Lofty IDX Plugin integrates the power of Lofty with your existing (or new!) WordPress site. This Help Center article will walk you through the different pages and features that are available in a Lofty<>WordPress integrated website.

If you're looking for steps to set up your WordPress IDX Plugin, head over to Getting Started with the WordPress + Lofty IDX Plugin .

## Summary

- Summary
- Which Lofty pages will be available in WordPress? Search Pages Featured Listings Listing Detail Pages Sold Listings Sold Listing Detail Market Report Home Valuation
- What non-page tools are available? Dynamic Variables Lead Activity Tracking Lead Portal Property Alerts Custom Lead Capture and Registration Form
- What is NOT available on the WordPress Plugin? AI Chat Bot WordPress Website as a Company Website Automatic Subdomain Creation Market Report Emails Account Owner - WordPress Site for Property Alerts

## Which Lofty pages will be available in WordPress?

### Search Pages

The WordPress Plugin supports two Search Page views - Grid View, or Map View. You can select which view you would like in the Layout section.

Search functionality is also available as a Shortcode. If you want to embed the Search functionality on a different page, like a Featured Neighborhood page, you will use the Shortcode functionality.

WordPress Backend:

Map + Grid on a live website:

Grid on a live website:

### Featured Listings

You can set a filter, such as price or office, to display a curated selection of featured properties on your website. There are three (3) different Featured Listing views: Grid, Slider, and Gallery.

WordPress Backend:

Grid on a live website:

Slider on a live website:

Gallery on a live website:

### Listing Detail Pages

These are the pages that open when someone clicks on a listing. Since this is a template page that changes depending on which listing is selected, the edits are limited. You can use the WordPress backend to update your SEO meta tags for these pages. We recommend using the dynamic Variable tags.

WordPress Backend:

Listing Detail Page on a live website:

### Sold Listings

The WordPress Plugin supports two Sold Listings Page views - Grid View, or Map View. You can select which view you would like in the Layout section.

WordPress Backend:

Sold Grid:

Sold Map + Grid:

### Sold Listing Detail

These are the pages that open when someone clicks on a Sold listing. Since this is a template page that changes depending on which listing is selected, the edits are limited. You can use the WordPress backend to update your SEO meta tags. We recommend using the dynamic variable tags.

WordPress Backend:

Sold detail page on a live website:

### Market Report

Market Reports are valuable pages that showcase data about a specific area. The Market Report shortcode allows you to embed this data on your desired pages and capture leads. You will need to set the criteria for the area you would like to cover with the Market Report.

WordPress backend:

Market Report on a live website:

### Home Valuation

The Home Valuation tool is a great way to capture seller leads by giving them a free home valuation estimate for their property.

You can configure each of these pages in the WordPress Backend.

Step 1: The site visitor will input their home address into the address box

Step 2: After submitting the address, the visitor is required to provide their contact info to view the home valuation estimate for their property.

Step 3: When the lead completes the previous step (#2), a home valuation report will be sent to their email and an estimated price of the address will be shown on the screen.

## What non-page tools are available?

### Dynamic Variables

A dynamic variable is a tag that can be modified based on the content or data of the article, website, or in real time. This is crucial when setting up pages for SEO. Instead of hardcoding information, these adaptable variables enable the creation of reusable page templates with minimal adjustments.

### Lead Activity & Tracking

When a lead has registered on the WordPress site, their activities will be tracked in the Lofty CRM similarly to the activities that are tracked on the Lofty website. This means that you can see what listings the lead is looking at, saving, and searching on the WordPress site in the lead's timeline in Lofty. The WordPress plugin does not currently track any activity beyond the WordPress listing pages. Only listing page activity is tracked.

The source of any lead registering on the WordPress website should be "WordPress Website" and cannot be customized.

## Lead Portal

Leads will be able to sign in to WordPress<>Lofty websites to view their saved listings and saved searches.

The portal experience on a WordPress<>Lofty website is different from a Lofty website.

Lofty Website:

- My Homes
- Property Tours
- Favorites
- Saved Searches
- Account

WordPress Website:

- Saved Listings
- Saved Searches
- Account

Leads on a WordPress<>Lofty website are able to give properties a star rating and add notes that get sent to their Agent.

## Property Alerts

### Lead-Created Alert

Leads who register on a WordPress<>Lofty website can save their preferred search criteria and set up a property alert.

They can view and edit their saved searches in their lead portal.

All lead activity that happens on a Lofty-synced WordPress page will be passed back to Lofty CRM, so you can be informed of the lead’s activities.

### Agent-Created Alert

You can create property alerts for your leads in the Engagement tab of the lead’s profile.

The following outlines the property alert sending logic for different website scenarios:

- WordPress site only : Property alerts will send from the WordPress website
- Lofty site + WordPress site : The Lofty website will be the default sending site for property alerts.
- Multiple Lofty sites : The user can select their preferred Primary website

If you have purchased the WordPress<>Lofty Plugin, but has not completed the setup steps, the functions in the Engagement tab will be locked.

### Custom Lead Capture and Registration Form

WordPress+Lofty users can customize the lead capture and registration form that triggers on Lofty-synced pages.

Go to WordPress > Lofty IDX Plugin > Lead Capture Settings

You can also customize your Disclaimer Language

Lastly, you can customize the trigger rules for the Lead Capture form.

Important to note: the Lead Capture form will only trigger on Lofty-synced pages. This includes all Listing and Sold detail pages, Search pages, Featured Listing pages, and Sold Listings pages.

## What is NOT available on a Lofty<>WordPress website?

### AI Chat Bot

Lofty's AI Sales Assistant can only work on websites that are hosted on Lofty. There will be no AI Chat Bot on a WordPress<>Lofty website. Sales Assistant will still be able to text leads who register on a WordPress<>Lofty website, since they will sync to lofty immediately.

### WordPress Website as a Company Website

The WordPress Plugin connects the Lofty search experience to 1 WordPress website. At this time, it is not possible to set a WordPress<>Lofty website as a Lofty Company website.

### Automatic Subdomain Creation

Lofty websites are closely connected to the Lofty platform and can create subdomains for agents to use with tools like Property Alerts, CMAs, Market Reports, and Market Snapshots. However, a WordPress website connected to Lofty cannot automatically create these subdomains.

### Market Report Emails

We do not currently support the ability to set a recurring Market Report email using a WordPress<>Lofty site. You can create a Market Report webpage and drive traffic to that page.

### Account Owner - WordPress Site for Property Alerts

For users with a Lofty site + WordPress site, the Lofty website will be used as the default for Property Alerts. If you are a Lofty account owner, your Company site will be used as the default for Property Alerts.

- In the meantime, we recommend configuring a second seat as your "agent" seat and purchasing the WordPress plugin under that account. This will allow you to use the WordPress website as your primary website.

## FAQs

Q: How are the listings displayed? Are they iFramed?

A: The Plugin connects to the MLS database(s) using IDX protocols to pull real-time property listing data. The properties are not iFramed.

It fetches property details, including descriptions, images, prices, and locations, via API or direct data feeds in real-time.

The Lofty IDX plugin also supports WordPress shortcodes and widgets to display IDX data in various formats, such as search forms, property grids, and market reports.

Shortcodes like [idx-listings], [idx-search], and others allow you to embed dynamic real estate content on a page without manually coding the listings.

Q: How do you create the Listing and Sold Detail pages? Is it going to take up a lot of bandwidth?

The listing and sold detail pages are dynamically generated by pulling property data from your MLS (Multiple Listing Service). We use the Lofty IDX(Internet Data Exchange) plugin to create these IDX pages automatically.

Each property typically has its own dedicated page, which means every listing will have a unique URL. However, the impact on bandwidth and server resources depends on the size and number of media files (such as images and videos) on each page. If you have many listings, we can ensure that resources are optimized to avoid slow loading times and excessive bandwidth usage.

Q: Do I have to have a Lofty website and a WordPress website to use this plugin?

A: No. Purchasing the WordPress Plugin in the Lofty Marketplace and completing the setup steps connects the Lofty platform to your WordPress website.

Q: Will the WordPress plugin push data on what the site visitor is looking at on the WordPress site back to the CRM?

A: Yes, but only for Lofty-synced pages (not for any of the other pages on the WordPress website.) The data provided is similar to the data provided when a lead is browsing a Lofty-built website. After the lead registers on the WordPress site, you will have the lead name, listing, time, etc. synced to the activities timeline.

Q: Are both active and sold listing pages supported?

A: Yes, the Lofty IDX Plugin automatically supports both active and sold listing pages being displayed on your WordPress website.

Q: Is the API key used for the plugin the same one on my integrations page?

A: No, it is a unique API key generated only for the WordPress plugin.

Q: Can I edit the listing layout?

A: No.

## Questions?

If you have any questions regarding this topic or any others, please contact our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
43% of websites on the internet are built with WordPress.
The Lofty IDX Plugin integrates the power of Lofty with your existing (or new!) WordPress site. This Help Center article will walk you through the different pages and features that are available in a Lofty<>WordPress integrated website.
If you're looking for steps to set up your WordPress IDX Plugin, head over to
Getting Started with the WordPress + Lofty IDX Plugin (https://help.lofty.com/hc/en-us/articles/35429819768091)
.
Summary
Summary (#h_01J3DJ3XRA8GJDMA8J6YTNHQBZ)
Which Lofty pages will be available in WordPress? (#h_01JM38YKFVCP2597VV5CB7WRSJ)
Search Pages (#h_01JM38ZQ9VWGT04J7ZWT20FJT1)
Featured Listings (#h_01JM399E2S6KQZQXQ1S9QT3WP6)
Listing Detail Pages (#h_01JM39GC46JSSXF5KGZ7EB0HP0)
Sold Listings (#h_01JM39KF8N1V68K6PCFKNQTCCY)
Sold Listing Detail (#h_01JM39ST59K5VBX3B8QBDCE8EC)
Market Report (#h_01JM39WQME4GS1NP18ZEQP48DA)
Home Valuation (#h_01JM39ZTGF0NME5VNFCR8VSXVV)
What non-page tools are available? (#h_01JM3A6S0TD7PFWD5Z0EA8QY40)
Dynamic Variables (#h_01JM3A6YE4MCW5C6D4AEG6SPMX)
Lead Activity Tracking (#h_01JM3A7ZE8YGQAWQZXT6N5R1BF)
Lead Portal (#h_01JMDH7NV2Q32XCE5ZR0K19Y2F)
Property Alerts (#h_01JPPA4D0RHCPKH0VSE2S12DZX)
Custom Lead Capture and Registration Form (#h_01JPPA5GNMZMDCCW82AMJJS6J8)
What is NOT available on the WordPress Plugin? (#h_01JSQ7NAX6RGQJGRZ8QS5FM4Q3)
AI Chat Bot (#h_01JSQ7NAX6CRFCJR9WQNCRZRH8)
WordPress Website as a Company Website (#h_01JSQAG5RZWVQP8J4QDY970NTQ)
Automatic Subdomain Creation (#h_01JSQ84SJNXP9XNZAPB6S2X431)
Market Report Emails (#h_01JSQ8S1V2CHJ4A2J58P4WGG6K)
Account Owner - WordPress Site for Property Alerts (#h_01JSQAG5S0Z9W6TQTWD4Y006ZQ)
Which Lofty pages will be available in WordPress?
Search Pages
The WordPress Plugin supports two Search Page views - Grid View, or Map View. You can select which view you would like in the
Layout
section.
Search functionality is also available as a Shortcode. If you want to embed the Search functionality on a different page, like a Featured Neighborhood page, you will use the Shortcode functionality.
WordPress Backend:
Map + Grid on a live website:
Grid on a live website:
Featured Listings
You can set a filter, such as price or office, to display a curated selection of featured properties on your website. There are three (3) different Featured Listing views: Grid, Slider, and Gallery.
WordPress Backend:
Grid on a live website:
Slider on a live website:
Gallery on a live website:
Listing Detail Pages
These are the pages that open when someone clicks on a listing. Since this is a template page that changes depending on which listing is selected, the edits are limited. You can use the WordPress backend to update your SEO meta tags for these pages. We recommend using the dynamic Variable tags.
WordPress Backend:
Listing Detail Page on a live website:
Sold Listings
The WordPress Plugin supports two Sold Listings Page views - Grid View, or Map View. You can select which view you would like in the
Layout
section.
WordPress Backend:
Sold Grid:
Sold Map + Grid:
Sold Listing Detail
These are the pages that open when someone clicks on a Sold listing. Since this is a template page that changes depending on which listing is selected, the edits are limited. You can use the WordPress backend to update your SEO meta tags. We recommend using the dynamic variable tags.
WordPress Backend:
Sold detail page on a live website:
Market Report
Market Reports are valuable pages that showcase data about a specific area. The Market Report shortcode allows you to embed this data on your desired pages and capture leads. You will need to set the criteria for the area you would like to cover with the Market Report.
WordPress backend:
Market Report on a live website:
Home Valuation
The Home Valuation tool is a great way to capture seller leads by giving them a free home valuation estimate for their property.
You can configure each of these pages in the WordPress Backend.
Step 1: The site visitor will input their home address into the address box
Step 2: After submitting the address, the visitor is required to provide their contact info to view the home valuation estimate for their property.
Step 3: When the lead completes the previous step (#2), a home valuation report will be sent to their email and an estimated price of the address will be shown on the screen.
What non-page tools are available?
Dynamic Variables
A dynamic variable is a tag that can be modified based on the content or data of the article, website, or in real time. This is crucial when setting up pages for SEO. Instead of hardcoding information, these adaptable variables enable the creation of reusable page templates with minimal adjustments.
Lead Activity & Tracking
When a lead has registered on the WordPress site, their activities will be tracked in the Lofty CRM similarly to the activities that are tracked on the Lofty website. This means that you can see what listings the lead is looking at, saving, and searching on the WordPress site in the lead's timeline in Lofty. The WordPress plugin does
not
currently track any activity beyond the WordPress listing pages. Only listing page activity is tracked.
The source of any lead registering on the WordPress website should be "WordPress Website" and cannot be customized.
Lead Portal
Leads will be able to sign in to WordPress<>Lofty websites to view their saved listings and saved searches.
The portal experience on a WordPress<>Lofty website is different from a Lofty website.
Lofty Website:
My Homes
Property Tours
Favorites
Saved Searches
Account
WordPress Website:
Saved Listings
Saved Searches
Account
Leads on a WordPress<>Lofty website are able to give properties a star rating and add notes that get sent to their Agent.
Property Alerts
Lead-Created Alert
Leads who register on a WordPress<>Lofty website can save their preferred search criteria and set up a property alert.
They can view and edit their saved searches in their lead portal.
All lead activity that happens on a Lofty-synced WordPress page will be passed back to Lofty CRM, so you can be informed of the lead’s activities.
Agent-Created Alert
You can create property alerts for your leads in the Engagement tab of the lead’s profile.
The following outlines the property alert sending logic for different website scenarios:
WordPress site only
: Property alerts will send from the WordPress website
Lofty site + WordPress site
: The Lofty website will be the default sending site for property alerts.
Multiple Lofty sites
: The user can select their preferred Primary website
If you have purchased the WordPress<>Lofty Plugin, but has not completed the setup steps, the functions in the Engagement tab will be locked.
Custom Lead Capture and Registration Form
WordPress+Lofty users can customize the lead capture and registration form that triggers on Lofty-synced pages.
Go to WordPress > Lofty IDX Plugin > Lead Capture Settings
You can also customize your Disclaimer Language
Lastly, you can customize the trigger rules for the Lead Capture form.
Important to note: the Lead Capture form will only trigger on Lofty-synced pages. This includes all Listing and Sold detail pages, Search pages, Featured Listing pages, and Sold Listings pages.
What is NOT available on a Lofty<>WordPress website?
AI Chat Bot
Lofty's AI Sales Assistant can only work on websites that are hosted on Lofty. There will be no AI Chat Bot on a WordPress<>Lofty website. Sales Assistant will still be able to
text
leads who register on a WordPress<>Lofty website, since they will sync to lofty immediately.
WordPress Website as a Company Website
The WordPress Plugin connects the Lofty search experience to 1 WordPress website. At this time, it is not possible to set a WordPress<>Lofty website as a Lofty Company website.
Automatic Subdomain Creation
Lofty websites are closely connected to the Lofty platform and can create subdomains for agents to use with tools like Property Alerts, CMAs, Market Reports, and Market Snapshots. However, a WordPress website connected to Lofty cannot automatically create these subdomains.
Market Report Emails
We do not currently support the ability to set a recurring Market Report email using a WordPress<>Lofty site. You can create a Market Report
webpage
and drive traffic to that page.
Account Owner - WordPress Site for Property Alerts
For users with a Lofty site + WordPress site, the Lofty website will be used as the default for Property Alerts. If you are a Lofty account owner, your Company site will be used as the default for Property Alerts.
In the meantime, we recommend configuring a second seat as your "agent" seat and purchasing the WordPress plugin under that account. This will allow you to use the WordPress website as your primary website.
FAQs
Q: How are the listings displayed? Are they iFramed?
A:
The Plugin connects to the MLS database(s) using IDX protocols to pull real-time property listing data.
The properties are not iFramed.
It fetches property details, including descriptions, images, prices, and locations, via API or direct data feeds in real-time.
The Lofty IDX plugin also supports WordPress shortcodes and widgets to display IDX data in various formats, such as search forms, property grids, and market reports.
Shortcodes like [idx-listings], [idx-search], and others allow you to embed dynamic real estate content on a page without manually coding the listings.
Q: How do you create the Listing and Sold Detail pages? Is it going to take up a lot of bandwidth?
The listing and sold detail pages are dynamically generated by pulling property data from your MLS (Multiple Listing Service). We use the Lofty IDX(Internet Data Exchange) plugin to create these IDX pages automatically.
Each property typically has its own dedicated page, which means every listing will have a unique URL. However, the impact on bandwidth and server resources depends on the size and number of media files (such as images and videos) on each page. If you have many listings, we can ensure that resources are optimized to avoid slow loading times and excessive bandwidth usage.
Q: Do I have to have a Lofty website
and
a WordPress website to use this plugin?
A:
No. Purchasing the WordPress Plugin in the Lofty Marketplace and completing the setup steps connects the Lofty platform to your WordPress website.
Q: Will the WordPress plugin push data on what the site visitor is looking at on the WordPress site back to the CRM?
A:
Yes, but only for Lofty-synced pages (not for any of the other pages on the WordPress website.) The data provided is similar to the data provided when a lead is browsing a Lofty-built website. After the lead registers on the WordPress site, you will have the lead name, listing, time, etc. synced to the activities timeline.
Q: Are both active and sold listing pages supported?
A:
Yes, the Lofty IDX Plugin automatically supports both active and sold listing pages being displayed on your WordPress website.
Q: Is the API key used for the plugin the same one on my integrations page?
A:
No, it is a unique API key generated only for the WordPress plugin.
Q: Can I edit the listing layout?
A:
No.
Questions?
If you have any questions regarding this topic or any others, please contact our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

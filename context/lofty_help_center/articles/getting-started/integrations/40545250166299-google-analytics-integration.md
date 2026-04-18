# Google Analytics Integration

- Article ID: `40545250166299`
- Category: `Getting Started`
- Section: `Integrations`
- Updated: `2025-11-07T03:11:55Z`
- Source: https://help.lofty.com/hc/en-us/articles/40545250166299-Google-Analytics-Integration

## Body

## Introduction

Google Analytics is a powerful tool that can be used to track website visitors. Lofty has already built in the Google Analytics code to the site and makes it easy for you to begin tracking site activity by simply inserting the Global Site Tag or Tracking ID.

## Summary

- Google Analytics Setup
- Link Google Analytics to Lofty Site
- Testing the Connection
- Connection with Google Tag Manager
- Understanding Google Analytics Data

## Google Analytics Setup

The first step is to make sure you have a property created on your Google Analytics account. More information on this topic can be found in this related article written by Google: Set up a property .

## Link Google Analytics to Lofty Site

First, log in to the CMS Tool > Settings > Tools > Integrations > Google Analytics> Edit:

There are two different methods of connecting to Lofty--you only need to use one method. We recommend using the Global Site Tag.

You can use either (1) the Global Site Tag or (2) the Tracking ID. Copy either one from the Google Analytics settings (see this help documentation from Google to learn more: Set up the Analytics tag ).

And then paste in the corresponding data from Google Analytics.

The Global Site Tag is a piece of code that needs to be added to <HEAD> of every web page that you want to track. The tracking code configured in the CMS Tool will be placed in the <HEAD> of every page automatically.

Be sure to click on the blue "Save" button to finalize the installation. After the Global Site Tag or Tracking ID has been added, Google Analytics will begin to track things.

## Testing the Connection

If you want to check whether the installation was successful, you can use this Chrome plugin: Tag Assistant (by Google) .

## Connection with Google Tag Manager

Google Tag Manager (GTM) is a tool for adding code and Google Analytics (GA) is a tool for viewing statistical website data. Google Tag Manager serves as an intermediary between a website and the tools we want to add code for (typically Google Ads, Facebook Ads, Google Analytics, etc.). With GTM, tracking codes can be added to a website so that the website data can be sent back to these tools.

With Google Tag Manager, the code for Google Analytics can be added to Lofty-built websites. This is typically done in the format of a global code, a specific event code, etc. After adding the code, GA can now count the data for the corresponding website.

For more information on this topic, please see Google's Tag Manager Overview .

## Understanding Google Analytics Data

### Reporting Basics

To track Lofty website data on Google Analytics after integrating, the first step is to make sure you select the account you want to look at more closely:

Here is where you can see the basic site visitor information over a defined period of time which you can select in the top-right:

### Common Reports

Based on our experience, the most common data that Lofty users want to look at includes the following. Take a look at the screenshots to learn more about how to configure these reports in your own Google Analytics account.

To create your own reports, first click + New Custom Report and then for each report add Dimensions and Metrics and then click Save to finish. You can find a description of the dimensions and metrics at this link .

#### Common Report #1: PV/UV of the Website Over a Period of Time

#### Common Report #2: Total Number of Registrations Over a Period of Time

#### Common Report #3: Transformation of Website Within a Certain Period of Time

- The number of "conversions" is the number of "registrations."
- The "conversion rate" is the number of registrations/UV

### Landing Pages

If you want to look at data for a particular landing page, you can filter like so:

### Interpretation of Common Problems

Problem

You may see that the conversions pulled from Google Analytics are inconsistent with what you are seeing on Lofty.

Solution

First, confirm the data being pulled is from the same time period

Next, check to make sure G oogle Analytics not displaying sample data and is instead looking at real data. Here is where you can check that:

Here is an additional description of Google Analytics sampling.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by a chat with us through your Lofty CRM.

## Plain Text

Introduction
Google Analytics is a powerful tool that can be used to track website visitors. Lofty has already built in the Google Analytics code to the site and makes it easy for you to begin tracking site activity by simply inserting the Global Site Tag or Tracking ID.
Summary
Google Analytics Setup (#h_01F8E2EQ802285MKH7ZDNT8TES)
Link Google Analytics to Lofty Site (#h_01F8E2EWS62600QMETGEJJC8DQ)
Testing the Connection (#h_01F8E2F32M7WZ2CJ8NG50FTDFQ)
Connection with Google Tag Manager (#h_01F8E3995AZJ0DCG1638B0HM8G)
Understanding Google Analytics Data (#h_01F8E2F6DYQDE9XV22H282YWGP)
Google Analytics Setup
The first step is to make sure you have a property created on your Google Analytics account. More information on this topic can be found in this related article written by Google:
Set up a property (https://support.google.com/analytics/answer/1042508)
.
Link Google Analytics to Lofty Site
First, log in to the
CMS Tool
>
Settings
>
Tools > Integrations
>
Google Analytics> Edit:
There are two different methods of connecting to Lofty--you only need to use
one
method. We recommend using the Global Site Tag.
You can use either (1) the Global Site Tag or (2) the Tracking ID. Copy either one from the Google Analytics settings (see this help documentation from Google to learn more:
Set up the Analytics tag (https://support.google.com/analytics/answer/1008080?hl=en)
).
And then paste in the corresponding data from Google Analytics.
The Global Site Tag is a piece of code that needs to be added to <HEAD> of every web page that you want to track. The tracking code configured in the CMS Tool will be placed in the <HEAD> of every page automatically.
Be sure to click on the blue "Save" button to finalize the installation. After the Global Site Tag or Tracking ID has been added, Google Analytics will begin to track things.
Testing the Connection
If you want to check whether the installation was successful, you can use this Chrome plugin:
Tag Assistant (by Google) (https://tagassistant.google.com/)
.
Connection with Google Tag Manager
Google Tag Manager (GTM) is a tool for adding code and Google Analytics (GA) is a tool for viewing statistical website data. Google Tag Manager serves as an intermediary between a website and the tools we want to add code for (typically Google Ads, Facebook Ads, Google Analytics, etc.). With GTM, tracking codes can be added to a website so that the website data can be sent back to these tools.
With Google Tag Manager, the code for Google Analytics can be added to Lofty-built websites. This is typically done in the format of a global code, a specific event code, etc. After adding the code, GA can now count the data for the corresponding website.
For more information on this topic, please see Google's
Tag Manager Overview (https://support.google.com/tagmanager/answer/6102821/tag-manager-overview?hl=en&ref_topic=3441530)
.
Understanding Google Analytics Data
Reporting Basics
To track Lofty website data on Google Analytics after integrating, the first step is to make sure you select the account you want to look at more closely:
Here is where you can see the basic site visitor information over a defined period of time which you can select in the top-right:
Common Reports
Based on our experience, the most common data that Lofty users want to look at includes the following. Take a look at the screenshots to learn more about how to configure these reports in your own Google Analytics account.
To create your own reports, first click
+
New Custom Report
and then for each report add
Dimensions
and
Metrics
and then click
Save
to finish. You can find a description of the dimensions and metrics at
this link (https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/)
.
Common Report #1: PV/UV of the Website Over a Period of Time
Common Report #2: Total Number of Registrations Over a Period of Time
Common Report #3: Transformation of Website Within a Certain Period of Time
The number of "conversions" is the number of "registrations."
The "conversion rate" is the number of registrations/UV
Landing Pages
If you want to look at data for a particular landing page, you can filter like so:
Interpretation of Common Problems
Problem
You may see that the conversions pulled from Google Analytics are inconsistent with what you are seeing on Lofty.
Solution
First, confirm the data being pulled is from the same time period
Next, check to make sure
G
oogle Analytics not displaying sample data and is instead looking at real data. Here is where you can check that:
Here (https://support.google.com/analytics/answer/2637192/about-data-sampling?hl=en-GB&utm_id=ad#zippy=,in-this-article)
is an additional description of Google Analytics sampling.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by a chat with us through your Lofty CRM.

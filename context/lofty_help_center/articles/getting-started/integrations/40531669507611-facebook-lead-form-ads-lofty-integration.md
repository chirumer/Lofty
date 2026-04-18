# Facebook Lead Form Ads + Lofty Integration

- Article ID: `40531669507611`
- Category: `Getting Started`
- Section: `Integrations`
- Updated: `2025-11-07T05:26:15Z`
- Source: https://help.lofty.com/hc/en-us/articles/40531669507611-Facebook-Lead-Form-Ads-Lofty-Integration

## Body

## Introduction

If you are running your own Facebook Ad campaigns, there are three ways to get your leads into Lofty from Facebook and this article only explains how to use a Facebook Lead Form Ad combined with a direct integration to Facebook.

Two additional methods are found in these separate articles: Facebook Landing Page Ads and Send Facebook Leads to Lofty via Zapier .

With the method outlined in this article, you can run an ad on Facebook that includes a customizable lead form used to collect lead information before they are sent away from Facebook to the landing page of your choice. Once integrated, leads captured on a Facebook lead form will be automatically imported into Lofty.

Here are a few important notes:

- This Integration only functions on Facebook Lead Form Ads--meaning the leads must register on a Facebook form, not a Lofty landing page. Instructions for that specific method are found here: Facebook Landing Page Ads .
- Only one Facebook Business Page can be connected per Lofty user account.
- Every individual user on a team is able to integrate their individual Facebook Ads with Lofty

## Summary

- How do I integrate Facebook Ads to Lofty?
- How do I add tags and set a source using the Facebook lead form?
- How do I add search criteria using the Facebook lead form?
- How do I use lead form questions to add additional details into Lofty?
- How do I sync custom questions to Lofty from the Facebook lead form?
- Can I select a Lofty landing page where leads will be sent after they register on Facebook?
- How do I set it up so that leads that register on Facebook lead forms do not have to sign up on my site after being sent there?
- How do I manage lead routing for leads that come from Facebook?
- What account permissions do I need to connect Facebook Lead Ads with Lofty?
- I am getting new leads on Facebook, but they are not showing up in Lofty
- When connecting to Lofty, the system says I don't have management permissions for this page
- When connecting to Facebook Lead Ads, the page I want to use is greyed out, but I have already requested permission.
- How do I disconnect the Facebook Ads Integration from Lofty?

## How do I integrate Facebook Ads into Lofty?

Navigate to Personal Settings > Lead Capture > Facebook Ads > Connect :

The following window will appear. Click on "Log In to Facebook"

You should be connected to your Facebook automatically if you are logged in, otherwise, you will have to log in first.

Next, click on the link to “Choose what you allow”:

Make sure you give Lofty all the available permissions shown in the following two screenshots or else the integration will not work :

Once connected, you should see a window with the next step. Choose the Facebook Page you want to connect to and then click on "Next." Note the following:

- You can only choose one Facebook Page to integrate per Lofty account
- All leads from any form on this Facebook Page will be synced to your Lofty CRM
- If your Facebook page is not displaying on the drop-down list above, please refer to THIS SECTION of the article.

You should then see the following confirmation message along with a list of links that you can click to access key information (also found in this article):

When connected, the Facebook Ads Integration should appear like this on the Lead Capture page:

## How do I add tags and set a source using the Facebook lead form?

Log in to your Facebook page as an admin > select Meta Business Suite :

On the menu at the left, click Instant Forms :

Click to either edit an existing form or create a new one:

Edit the form Settings > Tracking Parameters :

Add the following on the left side under Parameter Name (you will add the values in the next step). Make sure they are added exactly as listed here (spelling, capitalization, etc.):

- utm_source
- utm_campaign
- utm_content
- utm_medium

For the Parameter Value column, you will add the values that you want to be pushed into Lofty. Read the descriptions below so you know where they will be recorded in Lofty:

- utm_source . This will be the source of the lead recorded in Lofty. For context, the "source" is usually something like Zillow, Realtor.com, Homes.com, or other source names. The source is commonly used for lead routing/distribution within teams (see Lead Routing Rules ). If this is not defined differently here, the source entered in Lofty will be "Facebook."
- utm_campaign . This will be recorded in Lofty as a tag. Use this to differentiate campaigns, etc. This cannot be used for lead routing.
- utm_content . This will also be recorded in Lofty as a tag. Use this as desired for additional filtering in Lofty. This cannot be used for lead routing.
- utm_medium . This is the lead type in Lofty. The only acceptable values in this parameter are the following--typed exactly as listed here. If one of these is not used, the default lead type in Lofty will be "Other." Buyer Seller Buyer&Seller Renter

If, for whatever reason, you do not want utm_campaign and utm_content to feed into Lofty as tags, you can turn this off. See Lead Source Logic > UTM Settings for more information.

## How do I add search criteria using the Facebook lead form?

You can use the Facebook Lead Form Integration to send additional information from the Facebook Form to Lofty. When you create a lead form on Facebook, it might be built around a specific listing or market area and it would be a good idea to bring that information into Lofty to apply towards lead routing, auto property alerts, property tracking, etc.

When added, this will display directly in the lead profile here under Search Criteria :

If specific listings (by listing ID) are referenced they will display under the Properties sections:

*IMPORTANT :

- You can bring thing information into Lofty from the lead form: Specific Listings Cities Zip Codes
- You can only bring in a total of FIVE for each of the above categories. For example, if you want to bring in 5 (specific listings) + 5 (cities) + 5 (zip codes) = 15 total, that is okay. But you cannot bring in 15 specific listings, 10 cities, 7 zip codes, etc., as five is the maximum number that will be pulled for each category.
- The formatting of this step is extremely important. Please follow the instructions exactly as outlined in this section in order to avoid issues.
- It is very important to make sure that the cities and zip codes that you use are within your connected MLS; otherwise, the data will not be valid when imported into Lofty.

### Criteria Preparation

#### Specific Listing

If you would like to associate a specific listing from your website with leads that are captured via a specific form, you will need to navigate to your Lofty website and find and copy or make a note of the Lofty listing ID located in the URL for that specific listing. It will be in a format like "1038012575" and you can find it right in the middle of the URL, like what is displayed in the screenshot below. Please note that this is the Lofty listing ID that is unique to your website, not a listing ID from the MLS.

#### City or Zip Code

If you would like to associate a specific city or zip code from your MLS data with leads that are captured via a specific form, make a list of those cities and/or zip codes to use later.

The city should be in the format of " City, ST " with the city written out, a comma, and the two-letter abbreviation for the state.

### Facebook Setup

You will add the information gathered in the Criteria Preparation step as UTM Tracking Parameters on the Facebook lead form. To find those settings, do the following:

Log into your Facebook page as an admin > select Publishing Tools :

On the menu at the left click on Lead Ads Forms > Form Library :

Click to either edit an existing form or create a new one:

Edit the form Settings > Tracking Parameters :

Click the button to Add Parameter and type in "utm_term" in the list on the left side under Parameter Name. You will then add to the new field under the "Parameter Value" column, and you will input the listings, cities, and zip codes that you would like associated with this form and any lead that registers on it. The "Parameter Value" needs to be in the following format and EXACTLY as written here--other than replacing all of the red with your choices--nothing else can be replaced other than what is red in the below example.

-----------

"id":[ listingID1 , listingID2 , listingID2 , listingID3 , listingID4 , listingID5 ],"area":[" City1, ST ", " City2, ST ", " City3, ST ", " City4, ST ", " City5, ST "],"zipCode":[ zipcode1 , zipcode2 , zipcode3 , zipcode4 , zipcode5 ]

-----------

If you do not want to use one of the categories (listing ID, city, or zip code), you can delete that portion of the value. If you do not need all five spots for each of the categories, you can simply delete what you do not want to use. Here are a few examples to illustrate the concept:

- If you only want to use two specific listings, use this format: "id":[ listingID1 , listingID2 ]
- If you only want to use three cities, use this format: "area":[" City1, ST ", " City2, ST ", " City3, ST "]
- If you only want to use one zip code, use this format: "zipCode":[ zipcode1 ]
- If you want to combine two and leave one out, you can do this, but make sure it is formatted the right way. For example, here is how you would do two cities and two zip codes: "area":[" City1, ST ", " City2, ST "], "zipCode":[ zipcode1 , zipcode2 ]

Here is where this value should be added:

Once set up, be sure to save. When leads register through this specific Facebook lead form, it will now associate the listings, cities, and/or zip codes that you have added to the criteria.

## How do I use lead form questions to add additional details to Lofty?

Lofty supports capturing responses from the following fields via the Facebook lead form.

When you add custom questions to your lead form, it will automatically create "Field Names" and produce an auto-populated "Value" (field at right) for each question. If you would like the data from these questions to feed into the lead's profile in Lofty, you will need to edit the fields in the "Value" column to match the fields that are supported in Lofty.

To edit the values, edit the form > Settings > Field Names . Edit the "Names" to be any of the options below, but make sure they are added just as listed here (spelling, capitalization, etc.), or else they will not work:

Value | Description
time_frame | The timeframe of the lead to buy or sell. For a lead, if the number is greater than 12, it will be imported to Lofty as "Just Looking."Example Question: Within how many months do you plan to buy/sell?
fthb | Whether the lead is a first-home Buyer or not. For a BUYER lead.Example Question: Are you a first-time home buyer?
preQual | Whether the lead is prequalified for a mortgage or not. For a BUYER lead.Example Question: Are you pre-qualified for a mortgage?
mortgage | Whether the lead has a mortgage on their existing home or not. For a SELLER lead.Example Question: Is there a mortgage on your house now?
sellHouse | Whether the lead needs to sell their house or not. For a BUYER lead.Example Question: Do you have a house to sell first?
hasBuyAgent | Whether the lead has a buyer agent already. For a BUYER lead.Example Question: Do you have an agent already?
buyHouse | Whether the lead wants to buy a house after they sell their house. For a SELLER lead.Example Question: Do you want to buy a house after you sell your current property?
hasSaleAgent | Whether the lead is already working with an agent. For a SELLER lead.Example Question: Do you have an agent already?
email | REQUIRED. This is the lead's email address.
phone_number | This is the lead's phone number.
first_name or full_name | REQUIRED. Can be either "first_name" or "full_name". The full name will be split at the [space] into first and last.

This is what it might look like on the Facebook settings once you have it set up:

This information will be added to a lead profile. See these screenshots as examples:

Note: You have to duplicate the lead form, and then add the UTM under content or campaign, and those import into tags under that lead.

## How do I sync custom questions to Lofty from the Facebook lead form?

If you have added custom questions that are not supported by the fields built into Lofty, you can add them as a note on the lead profile. You will add the custom questions and then go in, like is explained above , edit the form > Settings > Field Names .

You will need to adjust the values using the format provided in the table below. You can add as many custom questions as you would like (this table only shows three to demonstrate the concept), but note that if you do, you are less likely to capture the lead with such a high barrier required to access what the lead is looking for.

Value | Description
Custom Question_ question.name1 | Replace the blue part of the value with the question name, but do not add spaces.
Custom Question_ question.name2 | Replace the blue part of the value with the question name, but do not add spaces.
Custom Question_ question.name2 | Replace the blue part of the value with the question name, but do not add spaces.

This is what it might look like on the Facebook settings once you have it set up:

After the lead provides the answer(s) to the question(s), the information will be added as a note on the lead profile, like so:

## Can I select a Lofty landing page where leads will be sent after they register on Facebook?

When setting up this integration, leads that register are not automatically logged into your Lofty website. This means if you plan on sending leads that register via Facebook forms to a specific page on your site, you make sure to have content on that page that explains what is next. The screenshot below shows the website link field where you would choose where the lead goes when clicking on the "View Website" button:

## How do I set it up so that leads that register on Facebook lead forms do not have to sign up on my site after being sent there?

Unfortunately, the Facebook platform does not provide a way for leads that register on Facebook to be auto-logged into your website. Other systems will work around this by forcing the lead to register again on your website and then merging the duplicates, but this is likely to deter the lead from taking further action on your site. Here we present two solutions that could be of use to you in dealing with this Facebook limitation:

### Potential Solution 1

One potential solution to this is to send the leads to a landing page with an explanation of your services and let them know they will be receiving a Welcome Email that they can use to browse your site. You would want to consider locking down the landing page so that no navigation menu appeared, etc. so that they were forced to find the email. This method allows for the lead's continued activity on your website to be tracked and recorded on their lead profile page in Lofty. Here is where you would turn on the option to "Send Welcome Email" under Settings > Integrations > Facebook Ads . More information regarding the Welcome Email can be found here: Set Up the Welcome Email . Keep in mind that Welcome Emails, if turned on, are for all leads from any source, not just one in particular.

### Potential Solution 2

Alternatively, you can make an adjustment to the Facebook form settings so that leads who register via the form and are then sent to your site will not have to sign in at all. You can accomplish this by adding a string to the end of the URL that you will send the leads to after they complete the form on Facebook. When setting up the lead form, you will choose a destination URL (see above ) that a lead will be sent to after submitting their information on the form. By adding "&isPopup=0" to the end of that URL, the leads will be able to browse your site without having to register again. If the listing search URL is the following, for example, you would add the portion in RED directly at the end of the URL to keep the forced registration pop-up from appearing to this lead so they could browse the site freely:

https://demo.lofty.com/listing?mode=map%2Blist&page=1&sort=RELEVANCE&listingSource=all%20listings&key=city%3ASouth%20San%20Francisco%2C%20CA&rect=37.690664826245516%2C-122.4922322712473%2C37.603268523364214%2C-122.36520285252482&zoom=13&threshold=10&nopreset=1 ? &isPopup=0

- There are a few important notes to keep in mind with this setup:
- Be sure to test the URL before adding it to Facebook to make sure it works
- The destination URL where you send the leads must be a listing page or a listing search page. It cannot be a custom page or even a landing page. Be sure to test the page to make sure it works before setting it up with a specific web page.
- Because the leads are not signed in at all with this option, their activity will not be tracked and synced to their CRM profile until they log in. If tracking is a priority, see Potential Solution 1 (above).
- Keep in mind that oftentimes sold listings are only displayed after sign-in, so these would still be inaccessible to leads until they sign in/register.

## How do I manage lead routing for leads that come from Facebook?

Be sure to set up lead routing for the incoming leads from Facebook. If you want to import them as "Team Leads" (see Lead Privacy: Team Leads vs. Private Leads ), you can adjust whether leads from your Facebook Lead Form Ads integration will come in as Team Leads by toggling on/off the option as seen in the screenshot below. However, you can still bring the leads in as Team Leads and have them assigned to you (as the person setting up your integration) as long as the other settings are adjusted as explained below.

If they are team leads, they will be pushed through actual lead routing rules unless the setting under Settings > Lead Distribution > Lead Routing > Lead options is adjusted:

Adjust for "Team Owner's Leads." If the checkbox next to the above list of sources is NOT checked, leads from that source will skip lead routing and be assigned directly to the Team Owner.

Adjust for "Member's Leads." Please note that leads from unchecked sources will be assigned to the agent who imported them:

Most lead routing happens based on the "Source." If the Facebook forms are set up correctly with the UTM parameters (see above ), the source can be customized for each form. That source can then be used to distribute leads using the lead routing options available in Lofty (see Lead Routing Rules ).

## What account permissions do I need to connect Facebook Lead Ads with Lofty?

You will need to have admin access to any Facebook business pages you want to connect to Lofty. Access is required for pages , the ad account , and lead access . This process will look slightly different depending on whether you are a partner or if you have been added to the business as an individual. Both processes are described below:

### Account Permissions - Partner Account

If you are a business partner, you will want to head to the Partners Tab of that business. This will be where you can verify your permissions for your business page, and if they do not look like what is outlined below, you will need to have a Facebook Business Admin give you these permissions:

Manage Pages

Manage Ad Account

Leads Access

### Account Permissions - People Account

If you have been added as an individual/employee, you will want to head to the People Tab of that business. Here is where you can verify your permissions for Pages and Ad Accounts , and if they do not look like what is listed below for the page, you will need to have a user with an Admin role give you these permissions:

Manage Pages

Manage Ad Account

You will also need Leads Access permissions, which are in a different tab . If you do not see that tab, you will need an Admin user to do this for you. You need to be added to the People list for the page you are trying to connect. A screenshot of this is below:

Facebook Lead Ad permissions can be quite complex, especially with multiple partners and individuals having access. If you continue to have issues, we recommend you dig into Facebook's guide, which can be found HERE . If you find that you are still running into issues, please contact Lofty Support for further analysis at <support@lofty.com>

## I am getting new leads on Facebook, but they are not showing up in Lofty

If your Lofty Facebook Lead Ads connection is turned on and you are receiving leads in Facebook, but you are not seeing these leads in the Lofty CRM, there are a few things that you can do to troubleshoot:

### (1) Check Access for the Manage Page, Ad Account, and Lead Access

Check to make sure that your Facebook account has admin permissions for these three areas. More info can be found HERE on how to do this.

### (2) Check the Facebook Lead Ads testing tool for any errors

1. Visit the Lead Ads testing tool page HERE
2. Select the Page and Form
3. Click "Create Lead"
4. Click the "Track Status" button
5. Review the section below, "Track Statu,s" for any errors or messages
6. If you see a 103 error, "CRM access has been revoked from Lead Access Manager," you can reset the Facebook Leads Access permissions.
7. If you see other errors, please reach out to our Support Team ( support@lofty.com ) for further assistance

### (3) Reset Access Permissions for Lofty

1. Go HERE and click on Lofty Ads Platform.
2. Verify that the following settings are turned on for the Lofty Ads Platform (see screenshot below)
3. If you have a list of pages, confirm that "Lofty Ads Platform" has access to the specific page that you want to use with Lofty.
4. If Lofty does not have all of these permissions, you will need to remove the Lofty Ads Platform.
5. Then reconnect Facebook Lead Ads with Lofty again (see How do I integrate Facebook Ads to Lofty? )
6. Test again.
7. If it is still not working, do a lead access reset (below)

#### Reset Facebook Lead Access permissions

These instructions are written assuming you are using Facebook Business Manager.

1. Navigate to the page you connected to Lofty under the Leads Access Tab - https://business.facebook.com/settings/leads-accesses
2. If you do not see the Leads Access tab or your page, then you do not have the right access to set Leads Access permissions. You will need to contact the page owner to set these permissions for your account.

Option 1

Click the button in the top-right that says "Restore Default Access." This button should then assign Lofty the needed access by default because you have connected your account with Lofty.

Option 2

If, for some reaso, you do not want to select the option to "Restore Default Access," please at least add "Lofty Leadgen" to the "People" list and add "Lofty Ads Platform" in your Connected CRMs list:

## When connecting to Lofty, the system says I don't have management permissions for this page

If you cannot select the specific page you need, it means you need to be permitted to manage that page. If you are an admin of the Business Manager account, you can
permit yourself
to manage the page. Otherwise, you can
request permissions for the page (https://www.facebook.com/business/help/183277585892925)
through your Business Manager account.
## When connecting to Facebook Lead Ads, the page I want to use is greyed out, but I have already requested permission.

If you have recently requested access to a page, the admin may not have approved your request yet. You will need to ask the page’s current admin to give you the necessary permissions.
## How do I disconnect the Facebook Ads Integration from Lofty?

If you ever need to disconnect the integration, simply go to Settings > Lead Capture > Facebook Ads Integration and click on the button to "Disconnect":

Confirm that you want to disconnect and it will finalize by clicking on the "Yes" button:

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

Related terms: lead form ads

## Plain Text

Introduction
If you are running your own Facebook Ad campaigns, there are three ways to get your leads into Lofty from Facebook and this article only explains how to use a Facebook Lead Form Ad combined with a direct integration to Facebook.
Two additional methods are found in these separate articles:
Facebook Landing Page Ads (https://help.lofty.com/hc/en-us/articles/360041757672)
and
Send Facebook Leads to Lofty via Zapier (https://help.lofty.com/hc/en-us/articles/40541495394459)
.
With the method outlined in this article, you can run an ad on Facebook that includes a customizable lead form used to collect lead information before they are sent away from Facebook to the landing page of your choice. Once integrated, leads captured on a Facebook lead form will be automatically imported into Lofty.
Here are a few important notes:
This Integration only functions on Facebook Lead Form Ads--meaning the leads must register on a Facebook form,
not
a Lofty landing page. Instructions for that specific method are found here:
Facebook Landing Page Ads (https://help.lofty.com/hc/en-us/articles/360041757672)
.
Only one Facebook Business Page can be connected per Lofty user account.
Every individual user on a team is able to integrate their individual Facebook Ads with Lofty
Summary
How do I integrate Facebook Ads to Lofty? (#h_01EY96WP5J10S3FYKRT5KEVWBQ)
How do I add tags and set a source using the Facebook lead form? (#h_01EY96WTBNWFD9CS8E1R2D613G)
How do I add search criteria using the Facebook lead form? (#h_01EY97GJSN1TT7BNVBQKPQS3ZS)
How do I use lead form questions to add additional details into Lofty? (#h_01EY9BABNQ2P3A2B5CVTK7QW75)
How do I sync custom questions to Lofty from the Facebook lead form? (#h_01EY9CR2FF38MQC8QBS1D6D4XJ)
Can I select a Lofty landing page where leads will be sent after they register on Facebook? (#h_01EY9CSRVCP7J10MXABAN4QNEA)
How do I set it up so that leads that register on Facebook lead forms do not have to sign up on my site after being sent there? (#h_01EY9D5YJ27TYAVCF2D7SK2GSB)
How do I manage lead routing for leads that come from Facebook? (#h_01EY9DC52AFWYZ74PAAMKKZVFP)
What account permissions do I need to connect Facebook Lead Ads with Lofty? (#h_01EY9DK5DVVTQ2PP0P9N046DMA)
I am getting new leads on Facebook, but they are not showing up in Lofty (#h_01EY9ET4YX4124X8PYBXKC079C)
When connecting to Lofty, the system says I don't have management permissions for this page (#h_01G171AYDBZPCZTGEQHQ96682D)
When connecting to Facebook Lead Ads, the page I want to use is greyed out, but I have already requested permission. (#h_01G171B96GZ0RKCDMF650YCKZJ)
How do I disconnect the Facebook Ads Integration from Lofty? (#h_01EY9FVE97XDRPS5ZH93Q8NASD)
How do I integrate Facebook Ads into Lofty?
Navigate to
Personal
Settings
>
Lead Capture
>
Facebook Ads
>
Connect
:
The following window will appear. Click on "Log In to Facebook"
You should be connected to your Facebook automatically if you are logged in, otherwise, you will have to log in first.
Next, click on the link to “Choose what you allow”:
Make sure you give Lofty all the available permissions shown in the following two screenshots
or else the integration will not work
:
Once connected, you should see a window with the next step. Choose the Facebook Page you want to connect to and then click on "Next." Note the following:
You can only choose one Facebook Page to integrate per Lofty account
All leads from any form on this Facebook Page will be synced to your Lofty CRM
If your Facebook page is not displaying on the drop-down list above, please refer to
THIS SECTION
of the article.
You should then see the following confirmation message along with a list of links that you can click to access key information (also found in this article):
When connected, the Facebook Ads Integration should appear like this on the Lead Capture page:
How do I add tags and set a source using the Facebook lead form?
Log in to your Facebook page as an admin > select
Meta Business Suite
:
On the menu at the left, click
Instant
Forms
:
Click to either edit an existing form or create a new one:
Edit the form
Settings
>
Tracking Parameters
:
Add the following on the left side under
Parameter Name
(you will add the values in the next step). Make sure they are added
exactly
as listed here (spelling, capitalization, etc.):
utm_source
utm_campaign
utm_content
utm_medium
For the
Parameter Value
column, you will add the values that you want to be pushed into Lofty. Read the descriptions below so you know where they will be recorded in Lofty:
utm_source
. This will be the source of the lead recorded in Lofty. For context, the "source" is usually something like Zillow, Realtor.com, Homes.com, or other source names. The source is commonly used for lead routing/distribution within teams (see
Lead Routing Rules (https://help.lofty.com/hc/en-us/articles/360055177831)
). If this is not defined differently here, the source entered in Lofty will be "Facebook."
utm_campaign
. This will be recorded in Lofty as a tag. Use this to differentiate campaigns, etc. This cannot be used for lead routing.
utm_content
. This will also be recorded in Lofty as a tag. Use this as desired for additional filtering in Lofty. This cannot be used for lead routing.
utm_medium
. This is the lead type in Lofty. The only acceptable values in this parameter are the following--typed exactly as listed here. If one of these is not used, the default lead type in Lofty will be "Other."
Buyer
Seller
Buyer&Seller
Renter
If, for whatever reason, you do not want utm_campaign and utm_content to feed into Lofty as tags, you can turn this off. See
Lead Source Logic > UTM Settings (https://help.lofty.com/hc/en-us/articles/360041252272)
for more information.
How do I add search criteria using the Facebook lead form?
You can use the Facebook Lead Form Integration to send additional information from the Facebook Form to Lofty. When you create a lead form on Facebook, it might be built around a specific listing or market area and it would be a good idea to bring that information into Lofty to apply towards lead routing, auto property alerts, property tracking, etc.
When added, this will display directly in the lead profile here under
Search Criteria
:
If specific listings (by listing ID) are referenced they will display under the
Properties
sections:
*IMPORTANT
:
You can bring thing information into Lofty from the lead form:
Specific Listings
Cities
Zip Codes
You can only bring in a total of FIVE for each of the above categories. For example, if you want to bring in 5 (specific listings) + 5 (cities) + 5 (zip codes) = 15 total, that is okay. But you cannot bring in 15 specific listings, 10 cities, 7 zip codes, etc., as five is the maximum number that will be pulled for each category.
The formatting of this step is
extremely
important. Please follow the instructions exactly as outlined in this section in order to avoid issues.
It is very important to make sure that the cities and zip codes that you use are within your connected MLS; otherwise, the data will not be valid when imported into Lofty.
Criteria Preparation
Specific Listing
If you would like to associate a specific listing from your website with leads that are captured via a specific form, you will need to navigate to your Lofty website and find and copy or make a note of the Lofty listing ID located in the URL for that specific listing. It will be in a format like "1038012575" and you can find it right in the middle of the URL, like what is displayed in the screenshot below. Please note that this is the
Lofty
listing ID that is unique to your website,
not
a listing ID from the MLS.
City or Zip Code
If you would like to associate a specific city or zip code from your MLS data with leads that are captured via a specific form, make a list of those cities and/or zip codes to use later.
The city should be in the format of "
City,
ST
" with the city written out, a comma, and the two-letter abbreviation for the state.
Facebook Setup
You will add the information gathered in the
Criteria Preparation (#h_01EY98Y3S4J6ZKN8R119ZQ46G6)
step as UTM Tracking Parameters on the Facebook lead form. To find those settings, do the following:
Log into your Facebook page as an admin > select
Publishing Tools
:
On the menu at the left click on
Lead Ads Forms
>
Form Library
:
Click to either edit an existing form or create a new one:
Edit the form
Settings
>
Tracking Parameters
:
Click the button to
Add Parameter
and type in "utm_term" in the list on the left side under Parameter Name. You will then add to the new field under the "Parameter Value" column, and you will input the listings, cities, and zip codes that you would like associated with this form and any lead that registers on it. The "Parameter Value" needs to be in the following format and EXACTLY as written here--other than replacing all of the
red
with your choices--nothing else can be replaced other than what is
red
in the below example.
-----------
"id":[
listingID1
,
listingID2
,
listingID2
,
listingID3
,
listingID4
,
listingID5
],"area":["
City1, ST
", "
City2, ST
", "
City3, ST
", "
City4, ST
", "
City5, ST
"],"zipCode":[
zipcode1
,
zipcode2
,
zipcode3
,
zipcode4
,
zipcode5
]
-----------
If you do
not
want to use one of the categories (listing ID, city, or zip code), you can delete that portion of the value. If you do not need all five spots for each of the categories, you can simply delete what you do not want to use. Here are a few examples to illustrate the concept:
If you only want to use two specific listings, use this format: "id":[
listingID1
,
listingID2
]
If you only want to use three cities, use this format: "area":["
City1, ST
", "
City2, ST
", "
City3, ST
"]
If you only want to use one zip code, use this format: "zipCode":[
zipcode1
]
If you want to combine two and leave one out, you can do this, but make sure it is formatted the right way. For example, here is how you would do two cities and two zip codes: "area":["
City1, ST
", "
City2, ST
"], "zipCode":[
zipcode1
,
zipcode2
]
Here is where this value should be added:
Once set up, be sure to save. When leads register through this specific Facebook lead form, it will now associate the listings, cities, and/or zip codes that you have added to the criteria.
How do I use lead form questions to add additional details to Lofty?
Lofty supports capturing responses from the following fields via the Facebook lead form.
When you add custom questions to your lead form, it will automatically create "Field Names" and produce an auto-populated "Value" (field at right) for each question. If you would like the data from these questions to feed into the lead's profile in Lofty, you will need to edit the fields in the "Value" column to match the fields that are supported in Lofty.
To edit the values,
edit the form
>
Settings
>
Field Names
. Edit the "Names" to be any of the options below, but make sure they are added just as listed here (spelling, capitalization, etc.), or else they will not work:
Value
Description
time_frame
The timeframe of the lead to buy or sell. For a lead, if the number is greater than 12, it will be imported to Lofty as "Just Looking."Example Question:
Within how many months do you plan to buy/sell?
fthb
Whether the lead is a first-home Buyer or not. For a BUYER lead.Example Question:
Are you a first-time home buyer?
preQual
Whether the lead is prequalified for a mortgage or not. For a BUYER lead.Example Question:
Are you pre-qualified for a mortgage?
mortgage
Whether the lead has a mortgage on their existing home or not. For a SELLER lead.Example Question:
Is there a mortgage on your house now?
sellHouse
Whether the lead needs to sell their house or not. For a BUYER lead.Example Question:
Do you have a house to sell first?
hasBuyAgent
Whether the lead has a buyer agent already. For a BUYER lead.Example Question:
Do you have an agent already?
buyHouse
Whether the lead wants to buy a house after they sell their house. For a SELLER lead.Example Question:
Do you want to buy a house after you sell your current property?
hasSaleAgent
Whether the lead is already working with an agent. For a SELLER lead.Example Question:
Do you have an agent already?
email
REQUIRED. This is the lead's email address.
phone_number
This is the lead's phone number.
first_name
or
full_name
REQUIRED. Can be either "first_name" or "full_name". The full name will be split at the [space] into first and last.
This is what it might look like on the Facebook settings once you have it set up:
This information will be added to a lead profile. See these screenshots as examples:
Note:
You have to duplicate the lead form, and then add the UTM under content or campaign, and those import into tags under that lead.
How do I sync
custom
questions to Lofty from the Facebook lead form?
If you have added custom questions that are not supported by the fields built into Lofty, you can add them as a note on the lead profile. You will add the custom questions and then go in, like is explained
above (#h_01EY9BABNQ2P3A2B5CVTK7QW75)
,
edit the form
>
Settings
>
Field Names
.
You will need to adjust the values using the format provided in the table below. You can add as many custom questions as you would like (this table only shows three to demonstrate the concept), but note that if you do, you are less likely to capture the lead with such a high barrier required to access what the lead is looking for.
Value
Description
Custom Question_
question.name1
Replace the
blue
part of the value with the question name, but do not add spaces.
Custom Question_
question.name2
Replace the
blue
part of the value with the question name, but do not add spaces.
Custom Question_
question.name2
Replace the
blue
part of the value with the question name, but do not add spaces.
This is what it might look like on the Facebook settings once you have it set up:
After the lead provides the answer(s) to the question(s), the information will be added as a note on the lead profile, like so:
Can I select a Lofty landing page where leads will be sent after they register on Facebook?
When setting up this integration, leads that register are not automatically logged into your Lofty website. This means if you plan on sending leads that register via Facebook forms to a specific page on your site, you make sure to have content on that page that explains what is next. The screenshot below shows the website link field where you would choose where the lead goes when clicking on the "View Website" button:
How do I set it up so that leads that register on Facebook lead forms do not have to sign up on my site after being sent there?
Unfortunately, the Facebook platform does not provide a way for leads that register on Facebook to be auto-logged into your website. Other systems will work around this by forcing the lead to register again on your website and then merging the duplicates, but this is likely to deter the lead from taking further action on your site. Here we present two solutions that could be of use to you in dealing with this Facebook limitation:
Potential Solution 1
One potential solution to this is to send the leads to
a landing page (#h_01EY9CSRVCP7J10MXABAN4QNEA)
with an explanation of your services and let them know they will be receiving a Welcome Email that they can use to browse your site. You would want to consider locking down the landing page so that no navigation menu appeared, etc. so that they were forced to find the email. This method allows for the lead's continued activity on your website to be tracked and recorded on their lead profile page in Lofty. Here is where you would turn on the option to "Send Welcome Email" under
Settings
>
Integrations
>
Facebook Ads
. More information regarding the Welcome Email can be found here:
Set Up the Welcome Email (https://help.lofty.com/hc/en-us/articles/360022134491)
. Keep in mind that Welcome Emails, if turned on, are for all leads from any source, not just one in particular.
Potential Solution 2
Alternatively, you can make an adjustment to the Facebook form settings so that leads who register via the form and are then sent to your site will not have to sign in at all.
You can accomplish this by adding a string to the end of the URL that you will send the leads to after they complete the form on Facebook. When setting up the lead form, you will choose a destination URL (see
above (#h_01EY9CSRVCP7J10MXABAN4QNEA)
) that a lead will be sent to after submitting their information on the form. By adding "&isPopup=0" to the end of that URL, the leads will be able to browse your site without having to register again. If the listing search URL is the following, for example, you would add the portion in
RED
directly at the end of the URL to keep the forced registration pop-up from appearing to this lead so they could browse the site freely:
https://demo.lofty.com/listing?mode=map%2Blist&page=1&sort=RELEVANCE&listingSource=all%20listings&key=city%3ASouth%20San%20Francisco%2C%20CA&rect=37.690664826245516%2C-122.4922322712473%2C37.603268523364214%2C-122.36520285252482&zoom=13&threshold=10&nopreset=1
?
&isPopup=0
There are a few important notes to keep in mind with this setup:
Be sure to test the URL before adding it to Facebook to make sure it works
The destination URL where you send the leads must be a listing page or a listing search page. It cannot be a custom page or even a landing page. Be sure to test the page to make sure it works before setting it up with a specific web page.
Because the leads are not signed in at all with this option, their activity will not be tracked and synced to their CRM profile until they log in. If tracking is a priority, see Potential Solution 1 (above).
Keep in mind that oftentimes sold listings are only displayed after sign-in, so these would still be inaccessible to leads until they sign in/register.
How do I manage lead routing for leads that come from Facebook?
Be sure to set up lead routing for the incoming leads from Facebook. If you want to import them as "Team Leads" (see
Lead Privacy: Team Leads vs. Private Leads (https://help.lofty.com/hc/en-us/articles/115003544406)
), you can adjust whether leads from your Facebook Lead Form Ads integration will come in as Team Leads by toggling on/off the option as seen in the screenshot below. However, you can still bring the leads in as Team Leads and have them assigned to you (as the person setting up your integration) as long as the other settings are adjusted as explained below.
If they are team leads, they will be pushed through actual lead routing rules unless the setting under
Settings
>
Lead Distribution
>
Lead Routing
>
Lead options
is adjusted:
Adjust for "Team Owner's Leads." If the checkbox next to the above list of sources is NOT checked, leads from that source will skip lead routing and be assigned directly to the Team Owner.
Adjust for "Member's Leads." Please note that leads from unchecked sources will be assigned to the agent who imported them:
Most lead routing happens based on the "Source." If the Facebook forms are set up correctly with the UTM parameters (see
above (#h_01EY96WTBNWFD9CS8E1R2D613G)
), the source can be customized for each form. That source can then be used to distribute leads using the lead routing options available in Lofty (see
Lead Routing Rules (https://help.lofty.com/hc/en-us/articles/360055177831)
).
What account permissions do I need to connect Facebook Lead Ads with Lofty?
You will need to have admin access to any Facebook business pages you want to connect to Lofty. Access is required for
pages
, the
ad account
, and
lead access
. This process will look slightly different depending on whether you are a partner or if you have been added to the business as an individual. Both processes are described below:
Account Permissions - Partner Account
If you are a business partner, you will want to head to the
Partners Tab (https://business.facebook.com/settings/partners/?utm_source=zapier.com&utm_medium=referral&utm_campaign=zapier)
of that business. This will be where you can verify your permissions for your business page, and if they do not look like what is outlined below, you will need to have a Facebook Business Admin give you these permissions:
Manage Pages
Manage Ad Account
Leads Access
Account Permissions - People Account
If you have been added as an individual/employee, you will want to head to the
People Tab (https://business.facebook.com/settings/people/?utm_source=zapier.com&utm_medium=referral&utm_campaign=zapier)
of that business. Here is where you can verify your permissions for
Pages
and
Ad Accounts
, and if they do not look like what is listed below for the page, you will need to have a user with an Admin role give you these permissions:
Manage Pages
Manage Ad Account
You will also need
Leads Access
permissions, which are in
a different tab (https://business.facebook.com/settings/leads-accesses?utm_source=zapier.com&utm_medium=referral&utm_campaign=zapier)
. If you do not see that tab, you will need an Admin user to do this for you. You need to be added to the
People
list for the page you are trying to connect. A screenshot of this is below:
Facebook Lead Ad permissions can be quite complex, especially with multiple partners and individuals having access. If you continue to have issues, we recommend you dig into Facebook's guide, which can be found
HERE (https://www.facebook.com/business/help/1440176552713521?utm_source=zapier.com&utm_medium=referral&utm_campaign=zapier)
. If you find that you are still running into issues, please contact Lofty Support for further analysis at <support@lofty.com>
I am getting new leads on Facebook, but they are not showing up in Lofty
If your Lofty Facebook Lead Ads connection is turned on and you are receiving leads in Facebook, but you are not seeing these leads in the Lofty CRM, there are a few things that you can do to troubleshoot:
(1) Check Access for the Manage Page, Ad Account, and Lead Access
Check to make sure that your Facebook account has admin permissions for these three areas. More info can be found
HERE (#h_01EY9DK5DVVTQ2PP0P9N046DMA)
on how to do this.
(2) Check the Facebook Lead Ads testing tool for any errors
Visit the Lead Ads testing tool page
HERE (https://developers.facebook.com/tools/lead-ads-testing/?utm_source=zapier.com&utm_medium=referral&utm_campaign=zapier)
Select the Page and Form
Click "Create Lead"
Click the "Track Status" button
Review the section below, "Track Statu,s" for any errors or messages
If you see a 103 error, "CRM access has been revoked from Lead Access Manager," you can reset the Facebook Leads Access permissions.
If you see other errors, please reach out to our Support Team (
support@lofty.com (mailto:support@chimeinc.com)
) for further assistance
(3) Reset Access Permissions for Lofty
Go
HERE (https://www.facebook.com/settings?tab=business_tools&utm_source=zapier.com&utm_medium=referral&utm_campaign=zapier)
and click on Lofty Ads Platform.
Verify that the following settings are turned on for the Lofty Ads Platform (see screenshot below)
If you have a list of pages, confirm that "Lofty Ads Platform" has access to the specific page that you want to use with Lofty.
If Lofty does not have all of these permissions, you will need to
remove
the Lofty Ads Platform.
Then reconnect Facebook Lead Ads with Lofty again (see
How do I integrate Facebook Ads to Lofty? (#h_01EY96WP5J10S3FYKRT5KEVWBQ)
)
Test again.
If it is still not working, do a
lead access reset (below) (#h_01EY9FHY322W0PMCD9KFXKP93V)
Reset Facebook Lead Access permissions
These instructions are written assuming you are using Facebook Business Manager.
Navigate to the page you connected to Lofty under the Leads Access Tab -
https://business.facebook.com/settings/leads-accesses
If you do not see the Leads Access tab or your page, then you do not have the right access to set Leads Access permissions. You will need to contact the page owner to set these permissions for your account.
Option 1
Click the button in the top-right that says "Restore Default Access." This button should then assign Lofty the needed access by default because you have connected your account with Lofty.
Option 2
If, for some reaso, you do not want to select the option to "Restore Default Access," please at least add "Lofty Leadgen" to the "People" list and add "Lofty Ads Platform" in your Connected CRMs list:
When connecting to Lofty, the system says I don't have management permissions for this page
If you cannot select the specific page you need, it means you need to be permitted to manage that page. If you are an admin of the Business Manager account, you can
permit yourself
to manage the page. Otherwise, you can
request permissions for the page (https://www.facebook.com/business/help/183277585892925)
through your Business Manager account.
When connecting to Facebook Lead Ads, the page I want to use is greyed out, but I have already requested permission.
If you have recently requested access to a page, the admin may not have approved your request yet. You will need to ask the page’s current admin to give you the necessary permissions.
How do I disconnect the Facebook Ads Integration from Lofty?
If you ever need to disconnect the integration, simply go to
Settings
>
Lead Capture
>
Facebook Ads Integration
and click on the button to "Disconnect":
Confirm that you want to disconnect and it will finalize by clicking on the "Yes" button:
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.
Related terms: lead form ads

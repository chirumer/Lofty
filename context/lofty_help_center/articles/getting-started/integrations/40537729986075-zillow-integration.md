# Zillow Integration

- Article ID: `40537729986075`
- Category: `Getting Started`
- Section: `Integrations`
- Updated: `2025-11-07T03:22:12Z`
- Source: https://help.lofty.com/hc/en-us/articles/40537729986075-Zillow-Integration

## Body

## Introduction

If you have a Zillow account, you can connect Zillow to your Lofty CRM. This feature allows you to integrate all of your new leads who sign up on Zillow directly into Lofty. The instructions provided here will show screenshots for "Premier Agent," but you can connect your standard Zillow account with the same steps.

Note: Please visit this article to learn more about the Zillow two-way integration: Zillow Two-Way Integration

## Summary

- Zillow Integration Steps
- Zillow Settings in Lofty
- Zillow Lead Routing Option 1: Lofty Lead Routing Option 2: Zillow Lead Routing
- Zillow Lead Tagging
- Zillow Property Information
- Testing the Integration

## Zillow Integration Steps

Navigate to https://premieragent.zillow.com/ and sign in at the top-right:

Click on Inbox :

Click your photo to open the menu, select “Settings”

Click on “ App Integrations ” under “General” in the menu on the left side of the page.

Click the “Link app” button under the One-Way Integrations section and select your CRM in the “Partners” drop-down menu, click “Next”:

Select Lofty from the Partners drop-down list and then click on "Next":

It will ask for an email address. Add the email address you use to log into Lofty This is how Zillow finds your Lofty account which is why it needs that specific email address. Click "Save" once you have added the email address.

Once you have done the above steps, you should see Lofty listed on the partner list:

## Zillow Settings in Lofty

Company Lead vs. Personal Lead

A Team Lead can be accessed (only by those with admin access or assigned to the lead) for better collaboration. A Personal Lead can only be seen by the person who has added that lead and no one else. To learn more about this concept, review the following: Lead Privacy: Team Leads vs. Personal Leads . To edit the setting for Zillow Leads, navigate to Settings > Lead Capture > Toggle On/Off "Imported as Company Leads " :

Auto Welcome Email

The Welcome Email will welcome a new lead to your website and provide them with login credentials to browse listings on your site. There is no separate template for different sources so it is the same Welcome Email sent to leads regardless of the source. To learn more about the Welcome Email, see Set Up the Welcome Email . If you want to edit this for Zillow specifically, navigate to Settings > Lead Capture > Toggle On/Off "Send Welcome Email" .

## Zillow Lead Routing

*** This section is very important to review to have a distribution process in place for new incoming Zillow leads.

### Option 1: Lofty Lead Routing

If the lead comes in as a Company Lead (as defined above ), it will be distributed via Lofty lead routing. Reference this article to learn more about Lofty lead routing: Lead Routing Rules . Some teams will elect to bring in their leads from one Zillow account and distribute them within Lofty to many agents. In this scenario, you would only integrate Zillow at the Team Admin/Owner level, bring leads in as Company Leads, and then make sure lead routing rules in Lofty are set up for distribution.

### Option 2: Zillow Lead Routing

If you want a lead to follow lead routing that takes place at Zillow and have that matched on the Lofty side, follow these steps:

1. Every individual Lofty user needs to set up the integration separately. This means that all team agents should follow the steps above to connect each of their Lofty accounts with Zillow.

2. Then, the Company Admin/Owner needs to do the following:

(a) Navigate to Settings

(b) Click on Lead Routing on the left menu

(c) Click on the blue Lead Options box

(d) In the Manage New Lead Options menu, scroll to Zillow under Personal Source

(e) Toggle Off the switch for Zillow

(f) Click on the blue "Save" button

As long as it is set up this way, new Zillow leads that are routed at Zillow will also be assigned to the same person in Lofty if they have their account set up.

## Zillow Lead Tagging

If integrated correctly (see Zillow Integration ), Zillow leads will have additional information added to their lead profile. What this means is that Zillow sends additional information toLofty via API and Lofty will add this information as tags. The following table outlines what is sent from Zillow and what the corresponding tag will be in Lofty:

Additional Info from Zillow | Value | Tag Name in Lofty
IsConnected | False | NotConnected
IsConnected | True | Connected
Is Tour | False | NotTour
Is Tour | True | Zillow Property Tour
Contact Message | The words "Property Tour" are contained in the initial contact message | Zillow Property Tour
Contact Message | The word "Connected" is contained in the initial contact message | Zillow Concierge
IsFlex | True | Zillow Flex Lead

The following scenarios apply when the additional info from Zillow is combined:

- If IsConnected=true and the Contact Message does or does not have the word "Connected," then the system will only add a "Connected" tag
- If IsConnected=false but the Contact Message has the word "Connected," then the "Zillow Concierge" tag will be added
- If IsTour=true and the Contact Message does or does not have the word "Property Tour," then the system will only add a "Zillow Property Tour" tag
- If IsTour=false but the Contact Message has the word "Property Tour," then the system will add a "Zillow Property Tour" tag

"Connected" in Zillow's terms, refers to leads that have left a message and have been connected to you via the Zillow Concierge service. For example, here is a note that is added to Lofty that would contain this information:

"Tour" refers to a lead who has requested a tour via Zillow.

So, you will want to take a look at the different tags and scenarios and potentially build out a Smart Plan to auto-respond or trigger tasks depending on your workflow. Or, at least, you can use the tags to easily filter your leads in the future or have the necessary background when referencing a lead profile page.

## Zillow Property Information

When leads are brought into Lofty from Zillow using this direct integration method, Lofty will parse the property information sent by Zillow and add a property to the lead record in Lofty under Engagement > Properties :

The additional information that will be added includes the following:

- Address (street, city, state, zip)
- Price
- MLS Number
- Listing Status
- Zillow Property URL
- Bedrooms/Bathrooms

When the address to the property is clicked on the lead record, the user will be redirected to the Zillow listing page.

Here is a sample of what that property would be recorded as:

## Testing the Integration

It is always a good idea to test a lead to make sure the integration is working correctly. One way to do this is to submit a message via the contact form on your agent page.

1. Access your profile on Zillow

2. Add a message

3. Click Contact .

3. Go to the People page in your Lofty CRM to make sure the lead has entered the system:

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

Related terms: Zillow, One-way integration, Two-way integration, Zillow Premier Agent

## Plain Text

Introduction
If you have a Zillow account, you can connect Zillow to your Lofty CRM. This feature allows you to integrate all of your new leads who sign up on Zillow directly into Lofty. The instructions provided here will show screenshots for "Premier Agent," but you can connect your standard Zillow account with the same steps.
Note:
Please visit this article to learn more about the Zillow two-way integration:
Zillow Two-Way Integration (https://help.lofty.com/hc/en-us/articles/19646061895835)
Summary
Zillow Integration Steps (#h_fff4abf4-1649-463c-9fe0-586bcf655b8a)
Zillow Settings in Lofty (#h_a2829a4f-f047-43eb-aca2-7b9092e638a4)
Zillow Lead Routing (#h_01EC5TKS9HTG24HDBEQWEV1RQM)
Option 1: Lofty Lead Routing (#h_01EKG9A27H2M4PQN6P3F2N7AXZ)
Option 2: Zillow Lead Routing (#h_01EKG9A6CS8P81VZACSSBHWSC1)
Zillow Lead Tagging (#h_01EKG9ABTCFBF59ACNGGKSYHYE)
Zillow Property Information (#h_01F2HN5YYHTGJDNSZ0W6XQ6ME6)
Testing the Integration (#h_01EKG9AH7FWPJQFRTHT3BNM76X)
Zillow Integration Steps
Navigate to
https://premieragent.zillow.com/
and sign in at the top-right:
Click on
Inbox
:
Click your photo to open the menu, select “Settings”
Click on “
App Integrations (https://premieragent.zillow.com/settings/app-integrations)
” under “General” in the menu on the left side of the page.
Click the “Link app” button under the One-Way Integrations section and select your CRM in the “Partners” drop-down menu, click “Next”:
Select
Lofty
from the
Partners
drop-down list and then click on "Next":
It will ask for an email address.
Add the email address you use to log into Lofty
This is how Zillow finds your Lofty account which is why it needs that specific email address. Click "Save" once you have added the email address.
Once you have done the above steps, you should see
Lofty
listed on the partner list:
Zillow Settings in Lofty
Company Lead vs. Personal Lead
A Team Lead can be accessed (only by those with admin access or assigned to the lead) for better collaboration. A Personal Lead can only be seen by the person who has added that lead and no one else. To learn more about this concept, review the following:
Lead Privacy: Team Leads vs. Personal Leads (https://help.lofty.com/hc/en-us/articles/115003544406)
. To edit the setting for Zillow Leads, navigate to
Settings
>
Lead Capture
>
Toggle On/Off "Imported as Company Leads
"
:
Auto Welcome Email
The Welcome Email will welcome a new lead to your website and provide them with login credentials to browse listings on your site. There is
no
separate template for different sources so it is the same Welcome Email sent to leads regardless of the source. To learn more about the Welcome Email, see
Set Up the Welcome Email (https://help.lofty.com/hc/en-us/articles/360022134491)
. If you want to edit this for Zillow specifically, navigate to
Settings
>
Lead Capture
>
Toggle On/Off "Send Welcome Email"
.
Zillow Lead Routing
***
This section is very important to review to have a distribution process in place for new incoming Zillow leads.
Option 1: Lofty Lead Routing
If the lead comes in as a Company Lead (as defined
above (https://help.lofty.com/hc/en-us/articles/115000320103#h_a2829a4f-f047-43eb-aca2-7b9092e638a4)
), it will be distributed via
Lofty
lead routing. Reference this article to learn more about
Lofty
lead routing:
Lead Routing Rules (https://help.lofty.com/hc/en-us/articles/360055177831)
. Some teams will elect to bring in their leads from
one
Zillow account and distribute them within Lofty to
many
agents. In this scenario, you would only integrate Zillow at the Team Admin/Owner level, bring leads in as Company Leads, and then make sure lead routing rules in Lofty are set up for distribution.
Option 2: Zillow Lead Routing
If you want a lead to follow lead routing that takes place at Zillow and have that matched on the Lofty side, follow these steps:
1. Every individual Lofty user needs to set up the integration separately. This means that
all team agents
should follow the steps
above (#h_fff4abf4-1649-463c-9fe0-586bcf655b8a)
to connect each of their Lofty accounts with Zillow.
2. Then, the Company Admin/Owner needs to do the following:
(a) Navigate to
Settings
(b) Click on
Lead Routing
on the left menu
(c) Click on the blue
Lead Options
box
(d) In the
Manage New Lead Options
menu, scroll to
Zillow
under
Personal Source
(e)
Toggle Off
the switch for Zillow
(f) Click on the blue "Save" button
As long as it is set up this way, new Zillow leads that are routed at Zillow will also be assigned to the same person in Lofty if they have their account set up.
Zillow Lead Tagging
If integrated correctly (see
Zillow Integration (https://help.lofty.com/hc/en-us/articles/115000320103)
), Zillow leads will have additional information added to their lead profile. What this means is that Zillow sends additional information toLofty via API and Lofty will add this information as tags. The following table outlines what is sent from Zillow and what the corresponding tag will be in Lofty:
Additional Info from Zillow
Value
Tag Name in Lofty
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
IsFlex
True
Zillow Flex Lead
The following scenarios apply when the additional info from Zillow is combined:
If IsConnected=true
and
the Contact Message does or does not have the word "Connected," then the system will only add a "Connected" tag
If IsConnected=false but the Contact Message has the word "Connected," then the "Zillow Concierge" tag will be added
If IsTour=true and the Contact Message does or does not have the word "Property Tour," then the system will only add a "Zillow Property Tour" tag
If IsTour=false but the Contact Message has the word "Property Tour," then the system will add a "Zillow Property Tour" tag
"Connected" in Zillow's terms, refers to leads that have left a message and have been connected to you via the Zillow Concierge service. For example, here is a note that is added to Lofty that would contain this information:
"Tour" refers to a lead who has requested a tour via Zillow.
So, you will want to take a look at the different tags and scenarios and potentially build out a Smart Plan to auto-respond or trigger tasks depending on your workflow. Or, at least, you can use the tags to easily filter your leads in the future or have the necessary background when referencing a lead profile page.
Zillow Property Information
When leads are brought into Lofty from Zillow using this direct integration method, Lofty will parse the property information sent by Zillow and add a property to the lead record in Lofty under
Engagement
>
Properties
:
The additional information that will be added includes the following:
Address (street, city, state, zip)
Price
MLS Number
Listing Status
Zillow Property URL
Bedrooms/Bathrooms
When the address to the property is clicked on the lead record, the user will be redirected to the Zillow listing page.
Here is a sample of what that property would be recorded as:
Testing the Integration
It is always a good idea to test a lead to make sure the integration is working correctly. One way to do this is to submit a message via the contact form on your agent page.
1. Access your profile on Zillow
2. Add a message
3. Click
Contact
.
3. Go to the
People
page in your Lofty CRM to make sure the lead has entered the system:
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.
Related terms: Zillow, One-way integration, Two-way integration, Zillow Premier Agent

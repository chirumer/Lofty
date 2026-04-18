# Postcard Engagement: Text Codes and QR Codes

- Article ID: `360058352672`
- Category: `CRM`
- Section: `Postcards & Letters`
- Updated: `2025-11-11T00:58:38Z`
- Source: https://help.lofty.com/hc/en-us/articles/360058352672-Postcard-Engagement-Text-Codes-and-QR-Codes

## Body

## Introduction

When designing postcards in the Lofty Design Center (see Design Center ), you will have the ability to add an engagement mechanism. The process to put together a postcard campaign is outlined HERE . Two types of engagement mechanisms can be used: (1) Text Codes or (2) QR Codes.

*IMPORTANT :

- Only one engagement mechanism can be added to a postcard design at a time. You cannot add both a QR Code and a Text Code.
- The source for leads captured will be "Lofty Postcard" and cannot be customized

## Summary

- (1) Text Codes Text Code Setup Text Code Lead Capture Logic
- (2) QR Codes QR Code Setup QR Code Lead Capture Logic
- FAQs

## (1) Text Codes

A unique tracking number will be set up to receive individual text codes generated for each mailing address. Once a recipient receives a postcard, they can send their unique text code to your tracking number, and they will receive an auto-reply message. Here is a sample of what that might look like:

### Text Code Setup

To add a text code to a design as the engagement mechanism, open your postcard design, select " Check out " from the top right of the screen, select Engage from the menu on the left, and then click on Text Code :

Customize the copy that will be displayed on the postcard. You will be able to move it around and resize it on your design later. You must always have the #text_code# and #tracking_number# variables in the copy in order for this all to work correctly, but you can change up how it is presented if you would like.

Choose a tracking number. This will be the number that replaces the #tracking_number# variable configured in the copy above. This number is currently different from your virtual number, so keep that in mind. This number is intended to be used for postcard engagement specifically and for automated texting, not calls.

You will then build out the auto-reply message that you want the lead to receive. When postcard recipients send their text code to your tracking number, the message you set here will be sent back to them automatically. You do not have to embed a landing page link, but doing so would be highly recommended for lead capture. You can also include agent variables like name, phone, and email (your information as the sender of the postcards).

Define where the landing page link will go to when clicked. You can choose to send them to the main Home Valuation Page or you can choose a completely separate resource URL or landing page that you have put together. If the home valuation option is used, the lead will be presented with a valuation for their specific address when going to the link. Any link added here will be shortened before being sent out in the text response.

Finally, you will choose the following:

- Lead Privacy . Choose either Team Lead or Private Lead (assuming you have access to add Private Leads). For more information, see Lead Privacy: Team Leads vs. Private Leads .
- Assignment Method . Choose either "Direct Assignment," which means you choose a specific assignee, or "Assign via Lead Routing Rules," which means you will send it to lead routing. Please note that the source for these lead captures will be "Lofty Postcard," and this cannot be customized. Currently, you cannot automatically add any tags for lead routing at a more granular level, though this will likely be available in the future.

When you are ready to continue, click on the blue Confirm button. If you choose Set Up Later, then you can finish your design, pay for your campaign, and then finalize engagement settings. If you do click Confirm , you will then see the text code copy embedded in your design. You can resize, change colors, and move to where you would like it to fit in your design. You can then add other elements to your design following the options available in the Design Center .

### Text Code Lead Capture Logic

When the Lofty tracking number receives the incoming text from the lead with the provided unique text code, our system will search to see if an existing lead's phone number matches the one on file.

If there is no matching phone number already in your database, the following will happen:

(1) A new lead will be created:

- Name: The number that sent the text code
- Phone: The number that sent the text code
- Source: Lofty Postcard
- Lead Type: Landing Page URL: Seller Custom Page URL: Buyer
- Assigned To: Will follow the engagement mechanism settings (direct assign or sent via lead routing)

(2) Notes will be added to the lead's timeline:

- Lead was created
- Lead was assigned
- Lead sent a text to the agent
- The agent sent a reply to the lead

(3) A new lead alert is triggered

If there is a lead with the same phone number as the one captured, the following will happen:

(1) Notes will be added to the lead's timeline:

- Lead sent a text to the agent
- An agent sent a reply to the lead

(2) A "New Message" notification is triggered

## (2) QR Codes

We will generate a QR code for your selected landing page. The postcard recipient can scan the QR code to access the associated landing page.

### QR Code Setup

To add a QR code to a design as the engagement mechanism, open your postcard design, select Engage from the menu on the left, and then click on QR Code :

Choose the landing page that you want someone to go to when they scan the QR code. You can send them to the Home Valuation page or another URL. The QR code is unique to each address.

Any link added here will be shortened before being sent out in the text response.

If it's a Lofty website page, you can choose to trigger forced registration using the checkbox:

Finally, you will choose the following:

- Lead Privacy . Choose either Team Lead or Private Lead (assuming you have access to add Private Leads). For more information, see Lead Privacy: Team Leads vs. Private Leads .
- Assignment Method . Choose either "Direct Assignment," which means you choose a specific assignee, or "Assign via Lead Routing Rules," which means you will send it to lead routing. Please note that the source for these lead captures will be "Lofty Postcard", and this cannot be customized. Currently, you cannot automatically add any tags for lead routing at a more granular level, though this will likely be available in the future.

When you are ready to continue, click on the blue Confirm button. If you choose Set Up Later then you can finish your design, pay for your campaign, and then finalize engagement settings. If you do click Confirm , you will then see a sample QR code embedded in your design. You can resize it and move it to where you would like it to fit in your design. You can then add other elements to your design following the options available in the Design Center .

### QR Code Lead Capture Logic

#### The Lead's Perspective

The logic here will vary depending on whether the "Turn on the forced-registration pop-up" was checked.

If unchecked , the recipient can view the landing page first, and they can choose whether they would like to register or not.

If checked , the recipient must register first, and then they will be able to see the landing page.

#### The Lofty User's Perspective

The system will first check to see if it is a new lead or an existing lead already in the database.

If a new lead : A lead will be created, and the lead will be assigned according to the engagement settings for the QR code.

If an existing lead , the lead will be found in the database, and a notification will be triggered

## FAQs

- Each postcard has a unique text code and QR code on it. Is the address for that specific postcard captured when a lead engages via one of the engagement mechanisms?
- When a lead goes to my Home Valuation page, will they have to enter their address or will they see their address populated automatically?
- Can the color of the QR code be changed?
- When a lead is captured that is already in my database, what happens in Lofty?

### Each postcard has a unique text code and QR code on it. Is the address for that specific postcard captured when a lead engages via one of the engagement mechanisms?

Not at present, though this is already lined up for development in upcoming releases. When a lead engages with your postcard via either a text code or a QR code (which is unique to them), we will be able to track the specific address it was sent to and save it to the lead profile. That is not currently supported, however.

### When a lead goes to my Home Valuation page, will they have to enter their address, or will they see their address populated automatically?

They will not have to enter their address--it will display the Home Valuation response for the address to which the postcard was sent. For example, if someone engages with a postcard and goes to the Home Valuation link as a result, this is a sample of what they would see:

### Can the color of the QR code be changed?

No, not at present.

### When a lead is captured that is already in my database, what happens in Lofty?

An opportunity notification is triggered. See Opportunities .

### Can I still set up a Text Code without using the Post Card Option?

Yes, you can go to the Marketing Tab> Tools> Text Codes> + Add New.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
When designing postcards in the Lofty Design Center (see
Design Center (https://help.lofty.com/hc/en-us/articles/360055290711)
), you will have the ability to add an engagement mechanism. The process to put together a postcard campaign is outlined
HERE (https://help.lofty.com/hc/en-us/articles/360058318632)
. Two types of engagement mechanisms can be used: (1) Text Codes or (2) QR Codes.
*IMPORTANT
:
Only
one
engagement mechanism can be added to a postcard design at a time. You
cannot
add both a QR Code
and
a Text Code.
The source for leads captured will be "Lofty Postcard" and cannot be customized
Summary
(1) Text Codes (#PostcardEngagement:TextCodesandQRCodes-(1)TextCodes)
Text Code Setup (#PostcardEngagement:TextCodesandQRCodes-TextCodeSetup)
Text Code Lead Capture Logic (#PostcardEngagement:TextCodesandQRCodes-TextCodeLeadCaptureLogic)
(2) QR Codes (#PostcardEngagement:TextCodesandQRCodes-(2)QRCodes)
QR Code Setup (#PostcardEngagement:TextCodesandQRCodes-QRCodeSetup)
QR Code Lead Capture Logic (#PostcardEngagement:TextCodesandQRCodes-QRCodeLeadCaptureLogic)
FAQs (#h_01F1BBGHFJTG7W2H7VB4RZ24YE)
(1) Text Codes
A unique tracking number will be set up to receive individual text codes generated for each mailing address. Once a recipient receives a postcard, they can send their unique text code to your tracking number, and they will receive an auto-reply message. Here is a sample of what that might look like:
Text Code Setup
To add a text code to a design as the engagement mechanism, open your postcard design, select "
Check out
" from the top right of the screen, select
Engage
from the menu on the left, and then click on
Text Code
:
Customize the copy that will be displayed on the postcard. You will be able to move it around and resize it on your design later. You must always have the
#text_code#
and
#tracking_number#
variables in the copy in order for this all to work correctly, but you can change up how it is presented if you would like.
Choose a tracking number. This will be the number that replaces the #tracking_number# variable configured in the copy above. This number is currently
different
from your virtual number, so keep that in mind. This number is intended to be used for postcard engagement specifically and for automated texting, not calls.
You will then build out the auto-reply message that you want the lead to receive. When postcard recipients send their text code to your tracking number, the message you set here will be sent back to them automatically. You do not have to embed a landing page link, but doing so would be highly recommended for lead capture. You can also include agent variables like name, phone, and email (your information as the sender of the postcards).
Define where the landing page link will go to when clicked. You can choose to send them to the main Home Valuation Page or you can choose a completely separate resource URL or landing page that you have put together. If the home valuation option is used, the lead will be presented with a valuation for their specific address when going to the link. Any link added here will be shortened before being sent out in the text response.
Finally, you will choose the following:
Lead Privacy
. Choose either Team Lead or Private Lead (assuming you have access to add Private Leads). For more information, see
Lead Privacy: Team Leads vs. Private Leads (https://help.lofty.com/hc/en-us/articles/115003544406)
.
Assignment Method
. Choose either "Direct Assignment," which means you choose a specific assignee, or "Assign via Lead Routing Rules," which means you will send it to lead routing. Please note that the source for these lead captures will be "Lofty Postcard," and this cannot be customized. Currently, you cannot automatically add any tags for lead routing at a more granular level, though this will likely be available in the future.
When you are ready to continue, click on the blue
Confirm
button. If you choose
Set Up Later,
then you can finish your design, pay for your campaign, and then finalize engagement settings. If you do click
Confirm
, you will then see the text code copy embedded in your design. You can resize, change colors, and move to where you would like it to fit in your design. You can then add other elements to your design following the options available in the
Design Center (https://help.lofty.com/hc/en-us/articles/360055290711)
.
Text Code Lead Capture Logic
When the Lofty tracking number receives the incoming text from the lead with the provided unique text code, our system will search to see if an existing lead's phone number matches the one on file.
If there is no matching phone number already in your database, the following will happen:
(1) A new lead will be created:
Name: The number that sent the text code
Phone: The number that sent the text code
Source: Lofty Postcard
Lead Type:
Landing Page URL: Seller
Custom Page URL: Buyer
Assigned To: Will follow the engagement mechanism settings (direct assign or sent via lead routing)
(2) Notes will be added to the lead's timeline:
Lead was created
Lead was assigned
Lead sent a text to the agent
The agent sent a reply to the lead
(3) A new lead alert is triggered
If there
is
a lead with the same phone number as the one captured, the following will happen:
(1) Notes will be added to the lead's timeline:
Lead sent a text to the agent
An agent sent a reply to the lead
(2) A "New Message" notification is triggered
(2) QR Codes
We will generate a QR code for your selected landing page. The postcard recipient can scan the QR code to access the associated landing page.
QR Code Setup
To add a QR code to a design as the engagement mechanism, open your postcard design, select
Engage
from the menu on the left, and then click on
QR Code
:
Choose the landing page that you want someone to go to when they scan the QR code. You can send them to the Home Valuation page or another URL. The QR code is unique to each address.
Any link added here will be shortened before being sent out in the text response.
If it's a Lofty website page, you can choose to trigger forced registration using the checkbox:
Finally, you will choose the following:
Lead Privacy
. Choose either Team Lead or Private Lead (assuming you have access to add Private Leads). For more information, see
Lead Privacy: Team Leads vs. Private Leads (https://help.lofty.com/hc/en-us/articles/115003544406)
.
Assignment Method
. Choose either "Direct Assignment," which means you choose a specific assignee, or "Assign via Lead Routing Rules," which means you will send it to lead routing. Please note that the source for these lead captures will be "Lofty Postcard", and this cannot be customized. Currently, you cannot automatically add any tags for lead routing at a more granular level, though this will likely be available in the future.
When you are ready to continue, click on the blue
Confirm
button. If you choose
Set Up Later
then you can finish your design, pay for your campaign, and then finalize engagement settings. If you do click
Confirm
, you will then see a sample QR code embedded in your design. You can resize it and move it to where you would like it to fit in your design. You can then add other elements to your design following the options available in the
Design Center (https://help.lofty.com/hc/en-us/articles/360055290711)
.
QR Code Lead Capture Logic
The Lead's Perspective
The logic here will vary depending on whether the "Turn on the forced-registration pop-up" was checked.
If
unchecked
, the recipient can view the landing page first, and they can choose whether they would like to register or not.
If
checked
, the recipient must register first, and then they will be able to see the landing page.
The Lofty User's Perspective
The system will first check to see if it is a new lead or an existing lead already in the database.
If a
new lead
: A lead will be created, and the lead will be assigned according to the engagement settings for the QR code.
If an
existing lead
, the lead will be found in the database, and a notification will be triggered
FAQs
Each postcard has a unique text code and QR code on it. Is the address for that specific postcard captured when a lead engages via one of the engagement mechanisms? (#h_01F1BBG5T8Y0XTX1QW9MV8D1MS)
When a lead goes to my Home Valuation page, will they have to enter their address or will they see their address populated automatically? (#h_01F1BBG8YR0ATMRBKBZA2VF1A3)
Can the color of the QR code be changed? (#h_01F1BBHKVNQKS8N6M59678KQJW)
When a lead is captured that is already in my database, what happens in Lofty? (#h_01F1BBWBHGTJA3KQAGZSKP1WCC)
Each postcard has a unique text code and QR code on it. Is the address for that specific postcard captured when a lead engages via one of the engagement mechanisms?
Not at present, though this is already lined up for development in upcoming releases. When a lead engages with your postcard via either a text code or a QR code (which is unique to them), we will be able to track the specific address it was sent to and save it to the lead profile. That is not
currently
supported, however.
When a lead goes to my Home Valuation page, will they have to enter their address, or will they see their address populated automatically?
They will not have to enter their address--it will display the Home Valuation response for the address to which the postcard was sent. For example, if someone engages with a postcard and goes to the Home Valuation link as a result, this is a sample of what they would see:
Can the color of the QR code be changed?
No, not at present.
When a lead is captured that is already in my database, what happens in Lofty?
An opportunity notification is triggered. See
Opportunities (https://help.lofty.com/hc/en-us/articles/115003018292)
.
Can I still set up a Text Code without using the Post Card Option?
Yes, you can go to the Marketing Tab> Tools> Text Codes> + Add New.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

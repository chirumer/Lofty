# How to Register for A2P 10DLC

- Article ID: `34198619150363`
- Category: `CRM`
- Section: `Compliance`
- Updated: `2026-03-24T21:48:09Z`
- Source: https://help.lofty.com/hc/en-us/articles/34198619150363-How-to-Register-for-A2P-10DLC

## Body

## Introduction

If you or your AI Assistant sends text messages to United States phone numbers, your virtual phone numbers must be linked to a verified A2P 10DLC (Application to Person, 10 digit long code) campaign. This article will walk you through preparing your website, registering in Lofty, campaign setup, and common error codes.

Not sure what A2P 10DLC is? Learn more here: A2P 10DLC - What It Is & Which Plan to Choose

## Summary

- Phase 1: Prepare Your Website (Do This Before Registering)
- Phase 2: Register Your Brand in Lofty
- Phase 3: Configure Your Campaign
- Pricing & Payment
- Common Error Codes & How to Fix Them

## Phase 1: Prepare Your Website (Do This Before Registering)

Reviewers at The Campaign Registry will check your website against your registration. Get this right first — fixing it after a rejection means paying to resubmit.

### 1A. Website Basics

Requirement | Details
URL | Confirm the site loads at the exact URL you'll register. www.yoursite.com and yoursite.com are treated as different URLs. No redirects. SSL must be valid.
Phone field | The phone number field on your registration form must be optional, not required.
Business name visible (Standard Brand) | Your legal business name must appear in the page title, header, footer, or logo — and match the name you register.
Agent name visible (Sole Proprietor) | The agent's legal first + last name must appear visibly on the website (page title, bio, or footer). Do not use a team name or brokerage name.

### 1B. Consent Checkboxes

All SMS consent checkboxes must be:

- Unchecked by default
- Optional (not required to submit the form)
- Allow users to submit without checking them

Use the exact wording below — your campaign's opt-in description will quote it verbatim:

Sole Proprietor

- Checkbox 1 (optional) : "By checking this box, I agree to receive text messages from [agentName] regarding real estate services, property inquiries, scheduling, and related communications. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out."
- Checkbox 2 : "By checking this box, I agree to the Terms of Service and Privacy Policy of this website."

Standard Brand (Marketing)

- Checkbox 1 (optional) : "By checking this box, I agree to receive recurring marketing communication from [CompanyName], including auto-dialed calls, texts, and artificial/prerecorded voice messages (message frequency varies; data rates may apply; reply 'STOP' to opt-out of texts or 'HELP' for assistance); Consent not required to make a purchase. I understand that I can call XXX-XXX-XXXX to obtain direct assistance."
- Checkbox 2 : "By checking this box, I agree to the Terms of Service and Privacy Policy of this website."

Note: Finalize this wording before moving on — you'll paste it directly into the registration form.

#### 1C. Privacy Policy & Terms of Service

Your site needs both, with working links. Each must include specific SMS language:

- Privacy Policy — Add a dedicated "SMS / Text Messaging" section with: A statement that users can opt out by replying STOP to any text (must be SMS-specific, not a general opt-out clause) "Text messaging originator opt-in data and consent will not be shared with any third parties."
- Terms of Service — Add the following: "Carriers are not liable for delayed or undelivered messages." Instructions for STOP (opt out) and HELP (assistance) "Message and data rates may apply."

## Phase 2: Register Your Brand in Lofty

Navigate to Personal Settings → Communication → Call & Text → 10DLC Compliance and click Register Now.

Step 1: Select whether you have a Tax ID (EIN/CBN).

- Yes → Standard Brand
- No → Sole Proprietor Brand

Note: Selecting the wrong type will almost certainly fail — you'll pay again to resubmit.

Step 2: Fill in your business information. All information must be real, verifiable, and match public records.

Field | Standard Brand | Sole Proprietor
Legal name | Exact legal business name tied to your EIN. Not a DBA or team name unless that's the registered entity. | Agent's legal first + last name only. No team name, brokerage, or business suffixes. Must be visible on the website.
Address | Real physical address (office preferred, home OK). No PO Boxes. | Same
Phone number | Agent's real personal mobile number. No Twilio, Google Voice, or any VoIP/virtual number. | Same. Multiple Sole Proprietor brands each require a different personal number.
Email | Real, monitored email — domain-matched is ideal. Gmail/Outlook/Yahoo accepted, but must be publicly visible on the website. | Same

## Phase 3: Configure Your Campaign

### 3A. Opt-In Description

This must accurately reflect your actual website flow. Reviewers will verify it. Paste your checkbox wording verbatim — do not paraphrase.

One-step form (all fields on one page):

"Consumers opt in by completing the contact form at {WEBSITE_URL}. The form displays a checkbox stating: '[EXACT CHECKBOX TEXT]'. Checking this box is optional. Phone number is optional. All checkboxes are unchecked by default and are not required. Message frequency varies. Message & data rates may apply. Reply STOP to opt out and HELP for help."

Two-step form (email first, then full form):

"Consumers opt in by completing the two-step contact form at {WEBSITE_URL}. On the first step, they enter their email address and click Continue. The second step displays their full contact details along with a checkbox stating: '[EXACT CHECKBOX TEXT]'. Checking this box is optional. Phone number is optional. All checkboxes are unchecked by default. Message frequency varies. Message & data rates may apply. Reply STOP to opt out and HELP for help."

### 3B. Campaign Description

Standard Brand (Marketing) | Sole Proprietor
"[COMPANY_NAME] uses this campaign to send real estate marketing messages to leads who have opted in via the contact form on our website. Messages include new property listings, price drop alerts, market updates, and open house invitations for buyers and sellers in [AREA]." | "[AGENT NAME] uses this campaign for personalized 1-on-1 SMS with individual clients who have opted in via the contact form on their website. Messages are direct outreach regarding specific properties and real estate needs — not bulk or automated broadcasts."

### 3C. Sample Messages

Provide 2–5 samples. Each should:

- Identify the sender by brand/agent name
- Use [square brackets] for variable content like [First Name] or [City]
- Include an opt-out instruction in at least one message

Note: The platform automatically appends a system opt-out message to every text. Do not include that in your samples.

Standard Brand examples:

- "Hi [First Name], new listing alert in [City]! A [X]-bed home just hit the market at $[Price]. Want to schedule a showing? — [Agent] with [COMPANY_NAME]. Reply with 'unsubscribe' to opt-out of future text communication. This message is sent from [COMPANY_NAME]."
- "Hi [First Name], a home matching your search just dropped $[X]K in price this week. Interested in taking a look? — [Agent] with [COMPANY_NAME]. Reply with 'unsubscribe' to opt-out of future text communication. This message is sent from [COMPANY_NAME]."

Sole Proprietor examples:

- "Hi [First Name], this is [Agent Name]. I saw you were looking at properties in the area — do you have a few minutes to chat? Reply with 'unsubscribe' to opt-out of future text communication. This message is sent from [Agent Name]."
- "Hi [First Name], just following up on the property you inquired about. Are you still interested? Happy to answer any questions. — [Agent Name]. Reply with 'unsubscribe' to opt-out of future text communication. This message is sent from [Agent Name]."

### 3D. Pre-Submission Consistency Check

Rejections most often happen because of mismatches. Before submitting, verify:

What to check | Must match
Registered brand name | Website page title / header / footer
Website URL in registration | Actual serving URL — exact www/non-www match
Checkbox text on website | Opt-in description in campaign form
Campaign description | Sample messages — same use case and brand name
Privacy Policy & Terms of Service | SMS language requirements (Section 1C above)

## Pricing & Payment

Payment goes directly to The Campaign Registry — not to Lofty. All fees are non-refundable, including if the registration fails.

 | Sole Proprietor | Standard Plan A | Standard Plan B | Standard Plan C
One-time cost | $19 | $19 | $59 | $59
Monthly fee | $2 | $1.50 | $10 | $30

Monthly fees are charged on the 1st. The first charge is the month after your campaign is verified.

## Common Error Codes & How to Fix Them

Code | Reason | Fix
30882 | Terms & Conditions rejected | Add required SMS language to your Privacy Policy and Terms of Service (see Section 1C).
30886 | Invalid campaign description | Make description match how you actually use Lofty. If business name mentions lending, include it.
30891 | Invalid website URL | Confirm URL is live and exact. If you reference a website anywhere in the application, include the URL.
30893 | Sample message / use-case inconsistency | Samples must reflect what you actually send. Include your business name and opt-out instruction. Brand name in samples must match the registered brand name.
30895 | Direct lending content | If your campaign references lending or financial assistance, say so explicitly in the description.
30896 | Opt-in error | Your opt-in description must clearly explain how leads consent. Be specific and accurate.
30897 | Disallowed content | Campaign type is set to Real Estate Marketing. Keep your description and samples aligned with that.
30903 | Wrong brand type for Sole Proprietor | If you have an EIN (including Sole Proprietorship LLC), register a Standard Brand. Words like LLC, Company, or Team will fail SP vetting.
30907 | Website validation issue | All URLs referenced anywhere in the application must match the URL used for brand registration.
30908 | Non-compliant Privacy Policy | Add the required SMS section to your Privacy Policy (see Section 1C). Consider linking directly to your Privacy Policy in sample messages.
30909 | Call-to-action verification issue | Provide a direct link to your website's registration page. Append ?isPopup=1&optInAudit=1 to the URL to make the opt-in checkbox visible to reviewers.
Twilio Reference Error | Brand information issue | Review and correct your brand details. If info was correct, contact Lofty Support.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM. Related term: A2P, phone regulation, 10DLC

## Plain Text

Introduction
If you or your AI Assistant sends text messages to United States phone numbers, your virtual phone numbers must be linked to a verified A2P 10DLC (Application to Person, 10 digit long code) campaign. This article will walk you through preparing your website, registering in Lofty, campaign setup, and common error codes.
Not sure what A2P 10DLC is? Learn more here:
A2P 10DLC - What It Is & Which Plan to Choose (https://help.lofty.com/hc/en-us/articles/17141883940379)
Summary
Phase 1: Prepare Your Website (Do This Before Registering) (#h_01KMGWPW31JZGHQERXYW4E4PJ1)
Phase 2: Register Your Brand in Lofty (#h_01KMGWV9V9TGH29M2HDV3GFTY3)
Phase 3: Configure Your Campaign (#h_01KMGWV9VFVT02N63AZQBA73S5)
Pricing & Payment (#h_01KMGWWV687E52SMZZBQPGRFF7)
Common Error Codes & How to Fix Them (#h_01KMGWZTSCE2NV680XS560SRER)
Phase 1: Prepare Your Website (Do This Before Registering)
Reviewers at The Campaign Registry will check your website against your registration. Get this right first — fixing it after a rejection means paying to resubmit.
1A. Website Basics
Requirement
Details
URL
Confirm the site loads at the exact URL you'll register. www.yoursite.com and yoursite.com are treated as different URLs. No redirects. SSL must be valid.
Phone field
The phone number field on your registration form must be optional, not required.
Business name visible
(Standard Brand)
Your legal business name must appear in the page title, header, footer, or logo — and match the name you register.
Agent name visible
(Sole Proprietor)
The agent's legal first + last name must appear visibly on the website (page title, bio, or footer). Do not use a team name or brokerage name.
1B. Consent Checkboxes
All SMS consent checkboxes must be:
Unchecked by default
Optional (not required to submit the form)
Allow users to submit without checking them
Use the exact wording below — your campaign's opt-in description will quote it verbatim:
Sole Proprietor
Checkbox 1 (optional)
: "By checking this box, I agree to receive text messages from [agentName] regarding real estate services, property inquiries, scheduling, and related communications. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out."
Checkbox 2
: "By checking this box, I agree to the Terms of Service and Privacy Policy of this website."
Standard Brand (Marketing)
Checkbox 1 (optional)
: "By checking this box, I agree to receive recurring marketing communication from [CompanyName], including auto-dialed calls, texts, and artificial/prerecorded voice messages (message frequency varies; data rates may apply; reply 'STOP' to opt-out of texts or 'HELP' for assistance); Consent not required to make a purchase. I understand that I can call XXX-XXX-XXXX to obtain direct assistance."
Checkbox 2
: "By checking this box, I agree to the Terms of Service and Privacy Policy of this website."
Note:
Finalize this wording before moving on — you'll paste it directly into the registration form.
1C. Privacy Policy & Terms of Service
Your site needs both, with working links. Each must include specific SMS language:
Privacy Policy
— Add a dedicated "SMS / Text Messaging" section with:
A statement that users can opt out by replying STOP to any text (must be SMS-specific, not a general opt-out clause)
"Text messaging originator opt-in data and consent will not be shared with any third parties."
Terms of Service
— Add the following:
"Carriers are not liable for delayed or undelivered messages."
Instructions for STOP (opt out) and HELP (assistance)
"Message and data rates may apply."
Phase 2: Register Your Brand in Lofty
Navigate to Personal Settings → Communication → Call & Text → 10DLC Compliance and click Register Now.
Step 1: Select whether you have a Tax ID (EIN/CBN).
Yes →
Standard Brand
No →
Sole Proprietor Brand
Note:
Selecting the wrong type will almost certainly fail — you'll pay again to resubmit.
Step 2: Fill in your business information. All information must be real, verifiable, and match public records.
Field
Standard Brand
Sole Proprietor
Legal name
Exact legal business name tied to your EIN. Not a DBA or team name unless that's the registered entity.
Agent's legal first + last name only. No team name, brokerage, or business suffixes. Must be visible on the website.
Address
Real physical address (office preferred, home OK). No PO Boxes.
Same
Phone number
Agent's real personal mobile number. No Twilio, Google Voice, or any VoIP/virtual number.
Same. Multiple Sole Proprietor brands each require a different personal number.
Email
Real, monitored email — domain-matched is ideal. Gmail/Outlook/Yahoo accepted, but must be publicly visible on the website.
Same
Phase 3: Configure Your Campaign
3A. Opt-In Description
This must accurately reflect your actual website flow. Reviewers will verify it. Paste your checkbox wording verbatim — do not paraphrase.
One-step form
(all fields on one page):
"Consumers opt in by completing the contact form at {WEBSITE_URL}. The form displays a checkbox stating: '[EXACT CHECKBOX TEXT]'. Checking this box is optional. Phone number is optional. All checkboxes are unchecked by default and are not required. Message frequency varies. Message & data rates may apply. Reply STOP to opt out and HELP for help."
Two-step form
(email first, then full form):
"Consumers opt in by completing the two-step contact form at {WEBSITE_URL}. On the first step, they enter their email address and click Continue. The second step displays their full contact details along with a checkbox stating: '[EXACT CHECKBOX TEXT]'. Checking this box is optional. Phone number is optional. All checkboxes are unchecked by default. Message frequency varies. Message & data rates may apply. Reply STOP to opt out and HELP for help."
3B. Campaign Description
Standard Brand (Marketing)
Sole Proprietor
"[COMPANY_NAME] uses this campaign to send real estate marketing messages to leads who have opted in via the contact form on our website. Messages include new property listings, price drop alerts, market updates, and open house invitations for buyers and sellers in [AREA]."
"[AGENT NAME] uses this campaign for personalized 1-on-1 SMS with individual clients who have opted in via the contact form on their website. Messages are direct outreach regarding specific properties and real estate needs — not bulk or automated broadcasts."
3C. Sample Messages
Provide 2–5 samples. Each should:
Identify the sender by brand/agent name
Use [square brackets] for variable content like [First Name] or [City]
Include an opt-out instruction in at least one message
Note:
The platform automatically appends a system opt-out message to every text. Do not include that in your samples.
Standard Brand examples:
"Hi [First Name], new listing alert in [City]! A [X]-bed home just hit the market at $[Price]. Want to schedule a showing? — [Agent] with [COMPANY_NAME]. Reply with 'unsubscribe' to opt-out of future text communication. This message is sent from [COMPANY_NAME]."
"Hi [First Name], a home matching your search just dropped $[X]K in price this week. Interested in taking a look? — [Agent] with [COMPANY_NAME]. Reply with 'unsubscribe' to opt-out of future text communication. This message is sent from [COMPANY_NAME]."
Sole Proprietor examples:
"Hi [First Name], this is [Agent Name]. I saw you were looking at properties in the area — do you have a few minutes to chat? Reply with 'unsubscribe' to opt-out of future text communication. This message is sent from [Agent Name]."
"Hi [First Name], just following up on the property you inquired about. Are you still interested? Happy to answer any questions. — [Agent Name]. Reply with 'unsubscribe' to opt-out of future text communication. This message is sent from [Agent Name]."
3D. Pre-Submission Consistency Check
Rejections most often happen because of mismatches. Before submitting, verify:
What to check
Must match
Registered brand name
Website page title / header / footer
Website URL in registration
Actual serving URL — exact www/non-www match
Checkbox text on website
Opt-in description in campaign form
Campaign description
Sample messages — same use case and brand name
Privacy Policy & Terms of Service
SMS language requirements (Section 1C above)
Pricing & Payment
Payment goes directly to The Campaign Registry — not to Lofty. All fees are non-refundable, including if the registration fails.
Sole Proprietor
Standard Plan A
Standard Plan B
Standard Plan C
One-time cost
$19
$19
$59
$59
Monthly fee
$2
$1.50
$10
$30
Monthly fees are charged on the 1st. The first charge is the month after your campaign is verified.
Common Error Codes & How to Fix Them
Code
Reason
Fix
30882
Terms & Conditions rejected
Add required SMS language to your Privacy Policy and Terms of Service (see Section 1C).
30886
Invalid campaign description
Make description match how you actually use Lofty. If business name mentions lending, include it.
30891
Invalid website URL
Confirm URL is live and exact. If you reference a website anywhere in the application, include the URL.
30893
Sample message / use-case inconsistency
Samples must reflect what you actually send. Include your business name and opt-out instruction. Brand name in samples must match the registered brand name.
30895
Direct lending content
If your campaign references lending or financial assistance, say so explicitly in the description.
30896
Opt-in error
Your opt-in description must clearly explain how leads consent. Be specific and accurate.
30897
Disallowed content
Campaign type is set to Real Estate Marketing. Keep your description and samples aligned with that.
30903
Wrong brand type for Sole Proprietor
If you have an EIN (including Sole Proprietorship LLC), register a Standard Brand. Words like LLC, Company, or Team will fail SP vetting.
30907
Website validation issue
All URLs referenced anywhere in the application must match the URL used for brand registration.
30908
Non-compliant Privacy Policy
Add the required SMS section to your Privacy Policy (see Section 1C). Consider linking directly to your Privacy Policy in sample messages.
30909
Call-to-action verification issue
Provide a direct link to your website's registration page. Append ?isPopup=1&optInAudit=1 to the URL to make the opt-in checkbox visible to reviewers.
Twilio Reference Error
Brand information issue
Review and correct your brand details. If info was correct, contact Lofty Support.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.
Related term: A2P, phone regulation, 10DLC

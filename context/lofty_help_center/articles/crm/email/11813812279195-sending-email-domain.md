# Sending Email Domain

- Article ID: `11813812279195`
- Category: `CRM`
- Section: `Email`
- Updated: `2025-11-07T07:05:07Z`
- Source: https://help.lofty.com/hc/en-us/articles/11813812279195-Sending-Email-Domain

## Body

## Introduction

Team/Group/Company Owners with the "Manage User" permission can now choose to manage the sending email domain to ensure it has higher chances of deliverability and/or better reflects their brand. The default option that is assigned as the sending domain is __________@lofty.house but because so many people are using this domain, its deliverability can be hit or miss. Most users who have configured a domain on their website will be using that domain as their sending domain as well. After changing from the _________@lofty.house domain, that domain cannot be used again in the future.

## Summary

- [Onboarding] Email Domain Step
- Email Domain Management and Self- Purchase
- Sending Email Domain Configuration
- FAQs

## [Onboarding] Email Domain Step

Add the “Email Domain” Step on Goal 3 Communication Setup, only if you are the owner .

If your Email domain vendor is Godaddy, when you click “Configure now”, will display this popup. You can choose whether to use this email domain to receive Emails.

If you want to use this email domain to receive Emails, there will pop up a one-click integration window.

If not, will pop up an instruction window.

If your Email domain vendor is another third party, when you click “Configure now”, we will display this instruction pop-up, which will remind you whether to use this email domain to receive Emails.

## Email Domain Management and Self-Purchase

This feature is accessed by navigating to Settings > Communication > Email > Email Settings> Manage .

You will then have access to choose from the following:

1. Domains available for no additional cost
2. Domains already configured for your Lofty website
3. Domains purchased from Lofty

When accessing this setting from a Team-type account, you will see the following two options:

1. Apply to the entire team
2. Apply to just yourself

When accessing this setting from an Enterprise-type account, you will see the following two options:

1. Apply to specific group hierarchy at the current level or below
2. Apply to just yourself

SET UP PROCESS:

- YOUR DOMAIN

1. Click the NEW DOMAIN button on the upper right corner, then select the option "Already own your domain?" and click next.

2. Enter your preferred domain without "www", click the "Next" button, then "Continue".

3. Follow the steps as shown below simultaneously with the configuration steps provided in the Domain Configuration Guide .

- NEW DOMAIN

1. Click the NEW DOMAIN button in the upper right corner, then select the option "Want to purchase a new domain?" and click next.

2. Enter your preferred domain without "www" and click the search button.

3. Available domain/s will be shown if there are any. Click the confirm button to proceed after choosing your preferred result.

4. You will be directed to the Review and Pay page where you need to agree to the Terms and Conditions and Privacy Policy to place the order.

If you want to configure a new domain, you can choose to use one you already have or purchase a new one via Lofty. You will then be guided through the next steps provided in the Sending Email Domain Configuration section below. If a member wants to set up a new email domain similar to his/her domain. You can also check this article for more information: Sending Email Address

After adding a new domain, it may require some time before it will be listed as "Active" and therefore usable. Until it is usable, it will be listed as "Pending." Come back to this setting later to finish selecting your new domain.

## Sending Email Domain Configuration

If you want to configure a new sending email domain, you can choose to use one you already have or purchase a new one via Lofty. You will then be guided through the next steps.

1. Log in to your domain provider's portal. (Not sure who your provider is? Click here .)
2. Go to the domains page on your domain host's site.
3. Find where you manage the domain's settings. (Look for a button or link with the words manage, manage settings, domain settings, or something similar.)
4. In your domain settings, find the area where you manage or edit DNS server records.

5. Add our records to your DNS

- A Records

Enter the information as shown below:

Then choose Yes, then click Save.

The name will be parsed into the correct format by the system.
Then add another A Record.
This completes the A records part.

Tips: If your DNS contains the A records below, you don't need to add the A records above, just keep it as is.

##### MX Records NOTE: SKIP THIS STEP IF YOU HAVE ALREADY PAID FOR THE EMAIL FOR THIS DOMAIN Tips: If your DNS contains other platforms' MX records something like the below image, then we strongly DO NOT recommend configuring this domain as your sending email domain anymore. Doing so may break your original email service.

- Add the MX Records as shown below:
- Enter the values as shown below:

- Then choose Yes, then click Save.

- The name will be parsed into the correct format by the system.

- Then add another MX Record.
- Your MX records are now all set.

##### CNAME Records

- Add the CNAME as shown below:

- Add all CNAMES

Then choose Yes, then click Save. Your CNAME is now all set.

##### TXT Records

- Add the TXT Record as shown below:

- Add all records.
- Then choose Yes, and click Save. Add All TXT Records.

1. Congratulations, you have completed all the configuration processes！ Propagation time may vary depending on the provider, then you may use this domain.

## FAQs

Q: Why am I not seeing the values of each record required when I click the steps for configuration?

A: Each record sample should auto-populate once you click the step in the configuration guide if this is not happening, contact Support to fix the bug.

Q: How long does it take for the email configuration to take effect?

A: The sending email domain configuration typically takes effect within 24 to 48 hours after adding the necessary DNS records. The exact time can vary depending on the DNS propagation.

Q: My domain doesn't have the necessary SPF record, or I need to combine records. What do I do? A: Great question!

SPF & Email Deliverability Overview

If you're using Lofty to send property alerts, drip campaigns, or other automated emails to leads, your domain must be properly authorized. Without the correct SPF setup, your emails may be blocked, bounced, or sent to spam folders — hurting deliverability and engagement.

Why SPF Matters

SPF (Sender Policy Framework) is a DNS record that tells receiving mail servers which systems are allowed to send email on behalf of your domain.

When Lofty sends emails using Amazon SES, you need to explicitly authorize it via your domain’s SPF record.

If You Use Lofty + Business Email (e.g., Gmail or Microsoft)

Most teams use their domain for both:

- Business email (Google Workspace or Microsoft 365)
- Marketing email via Lofty (Amazon SES)

Because only one SPF TXT record is allowed per domain, you’ll need to combine both systems into a single record.

Examples:

Using Google Workspace + Lofty:

v=spf1 include:_spf.google.com include:amazonses.com ~all

Using Microsoft 365 + Lofty:

v=spf1 include:spf.protection.outlook.com include:amazonses.com ~all

Start with your existing SPF record and merge in include:amazonses.com before the ending tag ( ~all or -all ).

How to Update Your DNS TXT Record

Here are guides from popular domain registrars:

Domain Registrar | Guide Link
GoDaddy | Add a TXT Record
Cloudflare | Create DNS Records
Namecheap | Add TXT/SPF Records
Google Domains | SPF Setup Guide
AWS Route 53 | Resource Record Types

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

Related terms: Sending email, email domain, sending email address

## Plain Text

Introduction
Team/Group/Company Owners with the "Manage User" permission can now choose to manage the sending email domain to ensure it has higher chances of deliverability and/or better reflects their brand. The default option that is assigned as the sending domain is __________@lofty.house but because so many people are using this domain, its deliverability can be hit or miss. Most users who have configured a domain on their website will be using that domain as their sending domain as well. After changing from the _________@lofty.house domain, that domain cannot be used again in the future.
Summary
[Onboarding] Email Domain Step (#h_01J7PRN01KA535B9N119Q0ZJJ7)
Email Domain Management and Self- Purchase (#h_01GXPQFV4WRF6XQ7F0G7V6ECB5)
Sending Email Domain Configuration (#h_01GPCC98T2VJJS2NEKT9G742BV)
FAQs (#h_01HBGZTRG5NN0N7N5JBXR1T2VK)
[Onboarding] Email Domain Step
Add the “Email Domain” Step on Goal 3 Communication Setup,
only if you are the owner
.
If your Email domain vendor is Godaddy, when you click “Configure now”, will display this popup. You can choose whether to use this email domain to receive Emails.
If you want to use this email domain to receive Emails, there will pop up a one-click integration window.
If not, will pop up an instruction window.
If your Email domain vendor is another third party, when you click “Configure now”, we will display this instruction pop-up, which will remind you whether to use this email domain to receive Emails.
Email Domain Management and Self-Purchase
This feature is accessed by navigating to
Settings
>
Communication
>
Email
>
Email Settings>
Manage
.
You will then have access to choose from the following:
Domains available for no additional cost
Domains already configured for your Lofty website
Domains purchased from Lofty
When accessing this setting from a Team-type account, you will see the following two options:
Apply to the entire team
Apply to just yourself
When accessing this setting from an Enterprise-type account, you will see the following two options:
Apply to specific group hierarchy at the current level or below
Apply to just yourself
SET UP PROCESS:
YOUR DOMAIN
1. Click the NEW DOMAIN button on the upper right corner, then select the option "Already own your domain?" and click next.
2. Enter your preferred domain without "www", click the "Next" button, then "Continue".
3. Follow the steps as shown below simultaneously with the configuration steps provided in the
Domain Configuration Guide (https://help.chime.me/hc/en-us/articles/360054554712-Domain-Configuration-Guide)
.
NEW DOMAIN
1. Click the NEW DOMAIN button in the upper right corner, then select the option "Want to purchase a new domain?" and click next.
2. Enter your preferred domain without "www" and click the search button.
3. Available domain/s will be shown if there are any. Click the confirm button to proceed after choosing your preferred result.
4. You will be directed to the Review and Pay page where you need to agree to the Terms and Conditions and Privacy Policy to place the order.
If you want to configure a new domain, you can choose to use one you already have or purchase a new one via Lofty. You will then be guided through the next steps provided in the
Sending Email Domain Configuration (#h_01GPCC98T2VJJS2NEKT9G742BV)
section below. If a member wants to set up a new email domain similar to his/her domain. You can also check this article for more information:
Sending Email Address (https://help.lofty.com/hc/en-us/articles/4402367904397)
After adding a new domain, it may require some time before it will be listed as "Active" and therefore usable. Until it is usable, it will be listed as "Pending." Come back to this setting later to finish selecting your new domain.
Sending Email Domain Configuration
If you want to configure a new sending email domain, you can choose to use one you already have or purchase a new one via Lofty. You will then be guided through the next steps.
Log in to your domain provider's portal. (Not sure who your provider is?
Click here (https://www.whois.com/whois/)
.)
Go to the domains page on your domain host's site.
Find where you manage the domain's settings. (Look for a button or link with the words manage, manage settings, domain settings, or something similar.)
In your domain settings, find the area where you manage or edit DNS server records.
5. Add our records to your DNS
A Records
Enter the information as shown below:
Then choose Yes, then click Save.
The name will be parsed into the correct format by the system.
Then add another A Record.
This completes the A records part.
Tips: If your DNS contains the A records below, you don't need to add the A records above, just keep it as is.
MX Records
NOTE: SKIP THIS STEP IF YOU HAVE ALREADY PAID FOR THE EMAIL FOR THIS DOMAIN
Tips: If your DNS contains other platforms' MX records something like the below image, then we strongly
DO NOT
recommend configuring this domain as your sending email domain anymore. Doing so may break your original email service.
Add the MX Records as shown below:
Enter the values as shown below:
Then choose Yes, then click Save.
The name will be parsed into the correct format by the system.
Then add another MX Record.
Your MX records are now all set.
CNAME Records
Add the CNAME as shown below:
Add all CNAMES
Then choose Yes, then click Save.
Your CNAME is now all set.
TXT Records
Add the TXT Record as shown below:
Add all records.
Then choose Yes, and click Save.
Add All TXT Records.
Congratulations, you have completed all the configuration processes！
Propagation time may vary depending on the provider, then you may use this domain.
FAQs
Q: Why am I not seeing the values of each record required when I click the steps for configuration?
A:
Each record sample should auto-populate once you click the step in the configuration guide if this is not happening, contact Support to fix the bug.
Q: How long does it take for the email configuration to take effect?
A:
The sending email domain configuration typically takes effect within 24 to 48 hours after adding the necessary DNS records. The exact time can vary depending on the DNS propagation.
Q: My domain doesn't have the necessary SPF record, or I need to combine records. What do I do?
A:
Great question!
SPF & Email Deliverability Overview
If you're using Lofty to send property alerts, drip campaigns, or other automated emails to leads, your domain must be properly authorized. Without the correct SPF setup, your emails may be blocked, bounced, or sent to spam folders — hurting deliverability and engagement.
Why SPF Matters
SPF (Sender Policy Framework) is a DNS record that tells receiving mail servers which systems are allowed to send email on behalf of your domain.
When Lofty sends emails using Amazon SES, you need to explicitly authorize it via your domain’s SPF record.
If You Use Lofty + Business Email (e.g., Gmail or Microsoft)
Most teams use their domain for both:
Business email (Google Workspace or Microsoft 365)
Marketing email via Lofty (Amazon SES)
Because only one SPF TXT record is allowed per domain, you’ll need to combine both systems into a single record.
Examples:
Using Google Workspace + Lofty:
v=spf1 include:_spf.google.com include:amazonses.com ~all
Using Microsoft 365 + Lofty:
v=spf1 include:spf.protection.outlook.com include:amazonses.com ~all
Start with your existing SPF record and merge in
include:amazonses.com
before the ending tag (
~all
or
-all
).
How to Update Your DNS TXT Record
Here are guides from popular domain registrars:
Domain Registrar
Guide Link
GoDaddy
Add a TXT Record (https://www.godaddy.com/help/add-a-txt-record-19232)
Cloudflare
Create DNS Records (https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)
Namecheap
Add TXT/SPF Records (https://www.namecheap.com/support/knowledgebase/article.aspx/317/2237/how-do-i-add-txtspfdkimdmarc-records-for-my-domain/)
Google Domains
SPF Setup Guide (https://support.google.com/a/answer/16018515?hl=en)
AWS Route 53
Resource Record Types (https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html)
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.
Related terms: Sending email, email domain, sending email address

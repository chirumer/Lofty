# Sending Email Address

- Article ID: `4402367904397`
- Category: `CRM`
- Section: `Email`
- Updated: `2025-11-07T07:12:40Z`
- Source: https://help.lofty.com/hc/en-us/articles/4402367904397-Sending-Email-Address

## Body

## Introduction

A unique email address is created for you and is used to send the majority of emails via the Lofty platform. There are a few different scenarios that apply to this situation–each is outlined below in detail.

The basic idea is that you will have two different email addresses associated with your Lofty account: one for email parsing (see Lead Capture/Email Parsing for more information on that topic) and one for sending emails (the focus of this article).

## Summary

- Lofty Emails
- Sending Email Address (1) @lofty.me Sending Email Address (2) Personal Domain: Sending Email Address
- Example Scenarios
- FAQs
- Associated Articles

## Lofty Emails

All of the following emails are sent via the Lofty platform and will be sent from a unique sending address created for you, as explained in this article:

- Welcome Emails
- Property Alerts
- Market Snapshots
- Market Reports
- Smart Plan Emails
- Mass Emails (when sending to more than one person via Lofty)
- One-Off Emails (the default will be via an integrated email if set up, but one-off emails can also be sent from a Lofty-built email address)
- AI emails sent by Sales Assistant

## Sending Email Address

There are two different options for sending email addresses, and both are outlined below. You can choose #1 or #2; #1 is the default.

### (1) @lofty.me Sending Email Address

Example : frank_johnson@lofty.me

This is intended as a temporary email address that is created for you when you first join Lofty. The format will be " first_last@lofty.me " and is the email address that will be used to send all of the Lofty Emails listed in the section above.

Each agent on a team will have their first_last@lofty.me email address to send their Lofty Emails .

### (2) Personal Domain: Sending Email Address

There are two choices here. If you do not want to use the default option #1 (outlined above), you can choose between a person domain that you already own or you can purchase a vanity domain from Lofty.

#### (2a) Your PERSONAL Domain

Example : frank_johnson@abcrealestate.com

If you own a domain, for example, "abcrealestate.com," Lofty can help to manually configure settings so that the emails listed above in Lofty Emails will be sent from an email address that exists on your domain.

Please note the following:

- This is not a requirement and is oftentimes discouraged as you may want to keep your domain reputation separate from the domain being used to send out thousands of property alerts, Smart Plan emails, etc.
- Due to the varying nature of how domains are configured, the ability to use a personal domain may not be available for all accounts. It is possible that certain domain access points will not allow for this option to be available.
- Because this is a manual configuration process, the turnaround time required to configure a sending domain using this option will vary. Our team will work as quickly as possible to configure these settings, but it may require some back-and-forth communication to accomplish.
- Having your domain configured is a requirement.

If you are still interested in this option, please open a support ticket by sending an email to <support@lofty.com> and they will start the process with our Tech Team.

#### (2b) A vanity domain purchased via Lofty

You can purchase a vanity domain via the Lofty platform. This process is outlined in more in-depth here: Vanity Domain Purchase .

Office Owner-Admin Purchase (Office Website)

When you (as Team Owner/Admin) purchase a vanity domain via Lofty, y our sending email will be changed to match the newly purchased domain, and they will no longer use the first_last@lofty.me domain (which is the default option).

All agent team members who are part of that team will have their sending emails changed as well, unless they have an Agent Website that is already using their vanity domain. When agents log into their CRM after this change happens, they will see a notification making them aware of the change.

Individual Agent Purchase (Agent Website with Vanity Domain)

If an individual agent has an Agent Website and purchases their vanity domain via the self-purchase options in Lofty, their domain will be used as the sending email. This will not be overwritten even if the Team Website purchases a vanity domain later on.

Other Important Notes

Also, it's important to note that if the sending email is changed because of a vanity domain self-purchase but then a lead sends an email directly to the old "sending email" (this does not typically happen--see here ) then Lofty will still recognize those incoming emails being sent to the old sending email address and will sync them to the corresponding lead profile. However, please note the following scenarios:

- If you have had their sending email customized to be "first_last@domain.net" (see 2b above for more information), but only as long as that domain has not expired (typically within 1 year of creation) . In other words, Lofty has purchased a similar domain for email purposes, but if it is no longer used, then it will not be renewed moving forward, and therefore, new communication cannot be tracked.
- If you were using a "first_last@lofty.me" as the sending email, we will always be able to have any email sent to that sending email address synced to the corresponding lead profile as that domain will be maintained.

## Example Scenarios

The examples here will give you an idea of how sending emails will be used based on how the website is configured.

 | Scenario | Sending Email | Explanation
1 | The Office Website is not yet configured to a personalized domain (e.g., " abcrealestate.lofty.me ") | eric_johnson@ lofty.me | Because the domain has not yet been configured to a personalized domain, the default sending email address will be " first_last@lofty me."
2 | Agent Website is configured to a personalized domain (e.g., " ericjohnson.com ") | eric_johnson@ericjohnson.net eric_johnson@ericjohnson.me eric_johnson@ericjohnson28.net | When an Agent Website has its personalized domain, the same logic outlined above under (2) Personal Domain Sending Email Address can apply, and their personalized domain will be used as the starting point to generate a unique sending domain (.net, .me, etc.).
3 | The Office Owner/Admin or an individual Agent purchases a vanity domain via Lofty. | eric_johnson@domain.com | If you purchase a domain via Lofty, your sending domain will be auto-configured to match the domain that you have purchased. When an Agent Website has its personalized domain, the same logic outlined above under (2) Personal Domain Sending Email Address can apply, and their personalized domain will be used as the starting point to generate a unique sending domain (.net, .me, etc.).

## Enable or Disable Sales Assistant Emails

AI Sales Assistant can send new emails or reply to emails your leads have sent. Emails sent from Sales Assistant will use your sending email address. To enable or disable the email channel for Sales Assistant, go to Settings > AI Sales Assistant.

## FAQs

- Where can I see my new sending domain listed?
- What happens if someone replies to an email sent from my @lofty.me email address?
- What if I change my website domain again in the future?
- What happens if a lead goes to the domain portion of the sending email domain?
- How does the Personal sending domain logic apply to third-level domains like "search.abcrealestate.com"?
- Will my sending email address also be used for email parsing?
- Is there a way to change the beginning part of my sending email address?

### Where can I see my new sending domain listed?

Unlike the parsing email address assigned to each user, the sending email address created for you is not currently visible in the CRM settings. This will be remedied in the very near future to make this sending address more accessible. For now, the only way to see what address is being used is to reference a sent email, like a property alert, etc., and then review the email history and the FROM address.

The easiest way to do this at present is to go to the Activities under the Reporting tab, filter by Opened Email , and then select an email that has been sent.

### What happens if someone replies to an email sent from my sending email address?

If you have integrated your email account to Lofty (see Gmail Email Integration , Microsoft Exchange Email Integration , or IMAP/SMTP Email Integration ), the "Reply-To" address will be your integrated email. This means that when a lead clicks the "Reply" button directly on the email (sent from a @lofty.me email address), the "Reply-To" address will be inserted directly into the "To" field automatically. Then, the email will be sent to the user's integrated email account.

If a lead manually types in your sending email address in the "To" field, the email will be sent to the sending email account, and you will receive a new email notification in your CRM and via the Lofty Mobile App (if installed). You can then view and reply to that email directly through Lofty by clicking on that notification or navigating to that lead's profile.

If you do not have an integrated email account set up with Lofty, Lofty will make the "Reply-To" address your log-in email address and your unique sending email address.

*IMPORTANT :

- Please note that emails sent to your email account directly will not be forwarded to your email account.
- Lofty will only trigger new email notifications for emails sent by leads that exist in your Lofty CRM. If they are not in Lofty, the notification will not be triggered, and the email will not be accessible via Lofty.

### What if I change my website domain again in the future?

This would not affect the sending email address if that is what you are using. If you set up a personal domain option to send emails, then you will need to manually request for our team to help adjust this as it will not be changed automatically if you change your website domain. Please contact the Lofty Support Team (support@lofty.com) to coordinate having this processed manually.

### What happens if a lead goes to the domain portion of the sending email domain?

If, for example, a lead were to manually type in a URL (which is not very likely) using the domain portion of your sending email address, they would not be taken to a live site. Future improvements are being explored to allow for a Personal sending domain, when typed into a browser, to redirect the site visitor to your live Lofty-built website (if using one that was created by Lofty). If the sending email address is first.last@lofty.me, the lead would simply be redirected to the Lofty home webpage.

### How does the personal sending domain logic apply to third-level domains like " search.abcrealestate.com "?

The email-sending domain in a scenario like this would be "_______@ abcrealestate.com ". In other words, you are unable to configure it so that emails are sent from a third-level domain.

### Will my sending email address also be used for email parsing?

No. Only the @lofty.me email address will be used for email parsing. Please see Lead Capture/Email Parsing for more information.

### Is there a way to change the beginning part of my sending email address?

If you would like to change the "first_last" part of the address ( first_last@lofty.me ), please submit a ticket to our Support Team by sending an email to <support@lofty.com>. This is a manual change that must be made but it can be done if you need to adjust the "first.last" portion of your email address.

## Associated Articles

We highly recommend reviewing the following articles to better understand the context of the information presented in this one:

1. Spam, Bounced, Phishing, and Unsafe Emails .
2. Domain Configuration Guide
3. Agent Websites
4. Vanity Domain Purchase

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

Related terms: sending email address

## Plain Text

Introduction
A unique email address is created for you and is used to send the majority of emails via the Lofty platform. There are a few different scenarios that apply to this situation–each is outlined below in detail.
The basic idea is that you will have two different email addresses associated with your Lofty account: one for email parsing (see
Lead Capture/Email Parsing (https://help.lofty.com/hc/en-us/articles/115003438011)
for more information on that topic) and one for sending emails (the focus of this article).
Summary
Lofty Emails (#EmailSendingAddress-ChimeEmails)
Sending Email Address (#EmailSendingAddress-SendingEmailAddress)
(1) @lofty.me Sending Email Address (#EmailSendingAddress-(1)@chime.houseSendingEmailAddress)
(2) Personal Domain: Sending Email Address (#EmailSendingAddress-(2)PersonalDomainSendingEmailAddress)
Example Scenarios (#EmailSendingAddress-ExampleScenarios)
FAQs (#EmailSendingAddress-FAQs)
Associated Articles (#EmailSendingAddress-AssociatedArticles)
Lofty Emails
All of the following emails are sent via the Lofty platform and will be sent from a unique sending address created for you, as explained in this article:
Welcome Emails
Property Alerts
Market Snapshots
Market Reports
Smart Plan Emails
Mass Emails (when sending to more than one person via Lofty)
One-Off Emails (the default will be via an integrated email if set up, but one-off emails can also be sent from a Lofty-built email address)
AI emails sent by Sales Assistant
Sending Email Address
There are two different options for sending email addresses, and both are outlined below. You can choose #1
or
#2; #1 is the default.
(1) @lofty.me Sending Email Address
Example
:
frank_johnson@lofty.me (mailto:frank.johnson@chime.house)
This is intended as a
temporary
email address that is created for you when you first join Lofty. The format will be "
first_last@lofty.me (mailto:first.last@chime.house)
" and is the email address that will be used to send all of the
Lofty Emails
listed in the section above.
Each agent on a team will have their first_last@lofty.me email address to send their
Lofty Emails
.
(2) Personal Domain: Sending Email Address
There are two choices here. If you do not want to use the default option #1 (outlined above), you can choose between a person domain that you already own or you can purchase a vanity domain from Lofty.
(2a) Your PERSONAL Domain
Example
:
frank_johnson@abcrealestate.com (mailto:frank.johnson@abcrealestate.com)
If you own a domain, for example, "abcrealestate.com," Lofty can help to
manually
configure settings so that the emails listed above in
Lofty Emails
will be sent from an email address that exists on your domain.
Please note the following:
This is
not
a requirement and is oftentimes discouraged as you may want to keep your domain reputation separate from the domain being used to send out thousands of property alerts, Smart Plan emails, etc.
Due to the varying nature of how domains are configured, the ability to use a personal domain may not be available for all accounts. It is possible that certain domain access points will not allow for this option to be available.
Because this is a
manual
configuration process, the turnaround time required to configure a sending domain using this option will vary. Our team will work as quickly as possible to configure these settings, but it may require some back-and-forth communication to accomplish.
Having your domain configured is a requirement.
If you are still interested in this option, please open a support ticket by sending an email to <support@lofty.com> and they will start the process with our Tech Team.
(2b) A vanity domain purchased via Lofty
You can purchase a vanity domain via the Lofty platform. This process is outlined in more in-depth here:
Vanity Domain Purchase (https://help.lofty.com/hc/en-us/articles/4403710715547)
.
Office Owner-Admin Purchase (Office Website)
When you (as Team Owner/Admin) purchase a vanity domain via Lofty, y
our sending email will be changed to match the newly purchased domain, and they will no longer use the first_last@lofty.me domain (which is the default option).
All agent team members who are part of that team will have their sending emails changed as well, unless they have an Agent Website that is already using their vanity domain. When agents log into their CRM after this change happens, they will see a notification making them aware of the change.
Individual Agent Purchase (Agent Website with Vanity Domain)
If an individual agent has an Agent Website and purchases their vanity domain via the self-purchase options in Lofty, their domain will be used as the sending email. This will
not
be overwritten even if the Team Website purchases a vanity domain later on.
Other Important Notes
Also, it's important to note that if the sending email is changed because of a vanity domain self-purchase but then a lead sends an email directly to the
old
"sending email" (this does not typically happen--see
here (https://help.chime.me/hc/en-us/articles/4402367904397#EmailSendingAddress-Whathappensifsomeonerepliestoanemailsentfrommy@chime.houseemailaddress?)
) then Lofty will still recognize those incoming emails being sent to the old sending email address and will sync them to the corresponding lead profile. However, please note the following scenarios:
If you have had their sending email customized to be "first_last@domain.net" (see
2b above (https://help.chime.me/hc/en-us/articles/4402367904397#EmailSendingAddress-(b)ANewDomainSimilartoyourPersonalDomain)
for more information),
but only as long as that domain has not expired (typically within 1 year of creation)
. In other words, Lofty has purchased a similar domain for email purposes, but if it is no longer used, then it will
not
be renewed moving forward, and therefore, new communication cannot be tracked.
If you were using a "first_last@lofty.me" as the sending email, we will always be able to have any email sent to that sending email address synced to the corresponding lead profile as that domain will be maintained.
Example Scenarios
The examples here will give you an idea of how sending emails will be used based on how the website is configured.
Scenario
Sending Email
Explanation
1
The Office Website is
not
yet configured to a personalized domain (e.g., "
abcrealestate.lofty.me (http://abcrealestate.chime.me/)
")
eric_johnson@ (mailto:eric.johnson@chime.house)
lofty.me
Because the domain has not yet been configured to a personalized domain, the default sending email address will be
"
first_last@lofty (mailto:first.last@chime.house)
me."
2
Agent Website (https://help.chime.me/hc/en-us/articles/360055173711)
is configured to a personalized domain (e.g., "
ericjohnson.com (http://ericjohnson.com/)
")
eric_johnson@ericjohnson.net (mailto:eric.johnson@ericjohnson.net)
eric_johnson@ericjohnson.me (mailto:eric.johnson@ericjohnson.me)
eric_johnson@ericjohnson28.net (mailto:eric.johnson@ericjohnson28.net)
When an Agent Website has its personalized domain, the same logic outlined above under
(2) Personal Domain Sending Email Address
can
apply, and their personalized domain will be used as the starting point to generate a unique sending domain (.net, .me, etc.).
3
The Office Owner/Admin or an individual Agent
purchases a vanity domain (https://help.chime.me/hc/en-us/articles/4403710715547)
via Lofty.
eric_johnson@domain.com (mailto:eric_johnson@domain.com)
If you purchase a domain via Lofty, your sending domain will be auto-configured to match the domain that you have purchased.
When an Agent Website has its personalized domain, the same logic outlined above under
(2) Personal Domain Sending Email Address
can
apply, and their personalized domain will be used as the starting point to generate a unique sending domain (.net, .me, etc.).
Enable or Disable Sales Assistant Emails
AI Sales Assistant can send new emails or reply to emails your leads have sent. Emails sent from Sales Assistant will use your sending email address. To enable or disable the email channel for Sales Assistant, go to
Settings
>
AI Sales Assistant.
FAQs
Where can I see my new sending domain listed? (#EmailSendingAddress-WherecanIseemynewsendingdomainlisted?)
What happens if someone replies to an email sent from my @lofty.me email address? (#EmailSendingAddress-Whathappensifsomeonerepliestoanemailsentfrommy@chime.houseemailaddress?)
What if I change my website domain again in the future? (#EmailSendingAddress-WhatifIchangemywebsitedomainagaininthefuture?)
What happens if a lead goes to the domain portion of the sending email domain? (#EmailSendingAddress-Whathappensifaleadgoestothedomainportionofthesendingemaildomain?)
How does the Personal sending domain logic apply to third-level domains like "search.abcrealestate.com"? (#EmailSendingAddress-Howdoesthepersonalsendingdomainlogicapplytothird-leveldomainslike"search.abcrealestate.com"?)
Will my sending email address also be used for email parsing? (#EmailSendingAddress-Willmysendingemailaddressalsobeusedforemailparsing?)
Is there a way to change the beginning part of my sending email address? (#EmailSendingAddress-Isthereawaytochangethebeginningpartofmysendingemailaddress?)
Where can I see my new sending domain listed?
Unlike the
parsing email address (https://help.chime.me/hc/en-us/articles/115003438011)
assigned to each user, the sending email address created for you is not
currently
visible in the CRM settings. This will be remedied in the very near future to make this sending address more accessible. For now, the only way to see what address is being used is to reference a sent email, like a property alert, etc., and then review the email history and the FROM address.
The easiest way to do this at present is to go to the
Activities
under the
Reporting
tab, filter by
Opened Email
, and then select an email that has been sent.
What happens if someone replies to an email sent from my sending email address?
If you have integrated your email account to Lofty (see
Gmail Email Integration (https://help.lofty.com/hc/en-us/articles/360054865692)
,
Microsoft Exchange Email Integration (https://help.lofty.com/hc/en-us/articles/360054865652)
, or
IMAP/SMTP Email Integration (https://help.lofty.com/hc/en-us/articles/360001516291)
), the "Reply-To" address will be your integrated email. This means that when a lead clicks the "Reply" button directly on the email (sent from a @lofty.me email address), the "Reply-To" address will be inserted directly into the "To" field automatically. Then, the email will be sent to the user's integrated email account.
If a lead manually types in your sending email address in the "To" field, the email will be sent to the sending email account, and you will receive a new email notification in your CRM and via the Lofty Mobile App (if installed). You can then view and reply to that email directly through Lofty by clicking on that notification or navigating to that lead's profile.
If you do
not
have an integrated email account set up with Lofty, Lofty will make the "Reply-To" address your log-in email address
and
your unique sending email address.
*IMPORTANT
:
Please note that emails sent to your email account directly will
not
be forwarded to your email account.
Lofty will only trigger new email notifications for emails sent by leads that exist in your Lofty CRM. If they are not in Lofty, the notification will not be triggered, and the email will not be accessible via Lofty.
What if I change my website domain again in the future?
This would not affect the sending email address if that is what you are using. If you set up a personal domain option to send emails, then you will need to manually request for our team to help adjust this as it will
not
be changed automatically if you change your website domain. Please contact the Lofty Support Team (support@lofty.com) to coordinate having this processed manually.
What happens if a lead goes to the domain portion of the sending email domain?
If, for example, a lead were to manually type in a URL (which is not very likely) using the domain portion of your sending email address, they would not be taken to a live site. Future improvements are being explored to allow for a
Personal
sending domain, when typed into a browser, to redirect the site visitor to your live Lofty-built website (if using one that was created by Lofty). If the sending email address is first.last@lofty.me, the lead would simply be redirected to the Lofty home webpage.
How does the personal sending domain logic apply to third-level domains like "
search.abcrealestate.com (http://search.abcrealestate.com/)
"?
The email-sending domain in a scenario like this would be "_______@
abcrealestate.com (http://abcrealestate.com/)
". In other words, you are unable to configure it so that emails are sent from a third-level domain.
Will my sending email address also be used for email parsing?
No. Only the @lofty.me email address will be used for email parsing. Please see
Lead Capture/Email Parsing (https://help.lofty.com/hc/en-us/articles/115003438011)
for more information.
Is there a way to change the beginning part of my sending email address?
If you would like to change the "first_last" part of the address (
first_last@lofty.me (mailto:first_last@lofty.me)
), please submit a ticket to our Support Team by sending an email to <support@lofty.com>. This is a manual change that must be made but it can be done if you need to adjust the "first.last" portion of your email address.
Associated Articles
We highly recommend reviewing the following articles to better understand the context of the information presented in this one:
Spam, Bounced, Phishing, and Unsafe Emails (https://help.chime.me/hc/en-us/articles/360004120452)
.
Domain Configuration Guide (https://help.chime.me/hc/en-us/articles/360054554712)
Agent Websites (https://help.chime.me/hc/en-us/articles/360055173711)
Vanity Domain Purchase (https://help.chime.me/hc/en-us/articles/4403710715547)
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.
Related terms: sending email address

# Domain Configuration Guide

- Article ID: `360054554712`
- Category: `Website`
- Section: `Website Domain`
- Updated: `2026-03-06T21:47:14Z`
- Source: https://help.lofty.com/hc/en-us/articles/360054554712-Domain-Configuration-Guide

## Body

## Introduction

This article will cover the topic of domain configuration when you want to use your domain for your Lofty IDX website. Multiple points are part of this topic:

- Lofty Support Domain Setup Assistance
- Company Sites/Group Sites/Team Sites
- Domain Configuration Process
- Agent Websites, formerly known as Subdomains
- Agent Websites + Vanity Domain
- SSL Certificates

*IMPORTANT : Your Lofty site will appear at _________.lofty.com until it is configured to another URL via the steps indicated in this article.

## Lofty Support Domain Setup Assistance

If you would like the Lofty Support Team to configure your domain for you, please send the domain name provider and login credentials to support@lofty.com with instructions to do so.

For GoDaddy , Namecheap , and Google/Squarespace domains , we ask that you grant delegate access to loftydomains01@gmail.com .

For all other providers, Lofty support will need the following information. Please be prepared to provide an authentication code.

o Domain Name

o Domain Login URL:

o Username:

o Password:

*IMPORTANT : When delegating access to Lofty via GoDaddy, please email our Support Team with the name that the domain is under (even if it is your own name, but especially if it's not). Lofty support has a very long list of names that have delegated access, so our team needs to know which specific one to look under.

### What Will We Change?

If your Lofty IDX site is going to be configured with the domain abc.com , the A records will appear like this:

or

*IMPORTANT :

- Please note that other A records or AAAA records other than (52.52.24.52 and 52.9.101.47) one of the sets shown above need to be removed.
- Always take a screenshot or make a note of any existing A records, should you need to undo any changes.

Next, Support will add a CNAME with the "Name" = www and "Value" = yourdomain.com, using your domain, of course. This is to make sure www.abc.com (for example) works properly in that format. The value should be your domain.

Also, if you have agents on the team who also need Agent Websites (e.g. ericjohnson.loftyrealestate.com), support will add a wildcard CNAME. See the configuration instructions below under Agent Websites .

*IMPORTANT : To avoid URL downtime as much as possible, please coordinate the best timing to do this change with the Lofty Support Team if possible.

## Company Sites/Group Sites/Team Sites

As Company Sites/Group Sites/Team Sites will be parent sites to agent websites, they need to own a top-level vanity domain(like loftydemo.com).

There are two ways to configure your domain

### 1. Use Your Own Domain

You will need to have a domain name purchased from a domain provider. Once you have a domain name to configure, you can follow the instructions below on connecting your domain to Lofty:

*IMPORTANT: If you purchase a domain via Lofty (see Vanity Domain Purchase ), you do not need to follow any of the following steps, as they will be done for you automatically.

- Connect your domain to Lofty
- There are 2 locations where to do this step. Location 1: CMS dashboard> VANITY DOMAIN SETUP> Use Your Own Domain> Enter the domain name and click Next.

- Location 2: CMS dashboard> Settings> Basic Info> Domain> Enter the domain name and click Save.

Note: To finish the connection, you should update your domain's DNS records in your domain host account (usually the company you bought your domain from). You will see a step-by-step outline in your Lofty dashboard, which will help you go through the steps to change the DNS records in your domain's current host account.

## Domain Configuration Process

When initially setting up your Lofty website, you will be prompted to provide the final domain before submitting your MLS application(s). After providing the domain, click "Save for Later". This will save the domain, but will not start the configuration process.

When you are ready to configure the domain, navigate to CMS → Settings → Domain and click Configure:

Once you have provided your website domain, if it is a GoDaddy domain, a pop-up will offer two options:

1. Click Do it for me , and follow the steps here: GoDaddy Domain Configuration Guide
2. Click Do it Myself , and follow the steps below: Manual Domain Configuration Steps

#### Manual Domain Configuration Steps

Below are the 5 steps to manually configure your website domain to your Lofty IDX site.

- Step 1 - Log in to the domain provider Open a new tab in your browser Go to your domain host's site and log in Click, I have logged in
- Step 2 - Find the domain settings page Go to the domains page on your domain host's site Find where you manage the domain‘s settings Click, I found my domain settings
- Step 3 - Find your DNS Records In your domain settings, find the area where you manage or edit DNS server records Return to the Lofty Domains page Click, I found the DNS records
- Step 4 - Change the A Records For example, if your Lofty website was going to be configured with the domain "abc.com," the A records would need to be configured as follows. Do the same but with your domain:

Value: 52.52.24.52 / 52.9.101.47

- Note: other A records or AAAA records other than one of the sets shown above need to be removed Click, I have updated my A records
- Step 5 - Add a new CNAME record "Name" = www and "Value" = yourdomain.com (replace with your domain)

- Save your changes Return to your Lofty domain page Click, I have updated my CNAME records

#### Domain Verification

If your domain setup fails, please recheck your domain settings and contact Lofty Support (support@lofty.com) if you need additional assistance. If your domain has been set up successfully, we will automatically install the SSL certificate on your website. Additionally, Facebook and Google logins will be configured automatically.

#### Continue to Set up the Domain

Navigate to: CMS dashboard> VANITY DOMAIN SETUP> Configure Domain

When your domain configuration process has not yet been completed, you can click the button Configure Domain to continue.

#### SSL Certificate Setup

After the domain has been set up successfully, we will automatically install the SSL certificate on your website. If the SSL certificate installation fails, we will send a notification email after the SSL has been installed successfully.

For more information regarding SSL Certificates, please reference the following article:
Website SSL Certificates (https://help.lofty.com/hc/en-us/articles/360004842792)
.
### 2. Get a New Domain

If you do not have a domain yet, you can purchase one via Lofty. For more details, please visit Vanity Domain Purchase.

## Agent Websites, formerly known as Subdomains

More information regarding agent websites can be found HERE . Agent Websites refer to third-level domains only. Examples of a third-level domain could be the following (firstlast.domain.com):

- maryrodriguez.loftyrealestate.com
- ericjohnson.loftyrealestate.com
- susilancaster.loftyrealestate.com

Please note that using "firstlast.domain.com" will only be an option once the main team site domain is configured as a vanity domain (e.g., loftyrealestate.com) AND a wildcard CNAME has been added to the domain settings as seen below:

- Name = *
- Value = yourdomain.com

*Please note that not all domain providers support wildcard rules. A wildcard rule in place will allow for the Agent websites to be created automatically, but you can still contact Lofty Support if they need to be configured manually.

If you do not want to add the wildcard CNAME to set all of your agent websites to point to our servers, you can still configure your agent websites one by one. As an example, we can use "loftyrealestate.com" as the main team website and "maryrodriguez.loftyrealestate.com" as the agent website to demonstrate how this would need to be set up. To make this work, you would need to do the following (using your domain + agent website, of course):

1. Change the A records

Type | Name | Value | TTL
A | loftyrealestate.com | 52.52.24.52 | Automatic
A | loftyrealestate.com | 52.9.101.47 | Automatic

2. Add the CNAMEs

Type | Name | Value | TTL
CNAME | www | loftyrealestate.com | Automatic
CNAME | marirodriguez | loftyrealestate.com | Automatic

3. Create an agent website manually in your site list.

If you have multiple Agent Websites to add, you would add another CNAME with their name and make sure everything else is in place as described above.

*IMPORTANT : We do not recommend including "www" within the agent website CNAME itself. In other words, you would not want to put "www.maryrodriguez" in the CNAME value instead of what was shown in the example above.

## Agent Websites + Vanity Domain

For more information regarding Agent Websites, please visit HERE . Please note that an Agent Website is an add-on purchase per agent and can be added via the Lofty Marketplace:

Regarding domain configuration, the following options are available for Agent Websites:

1. Use your domain Examples : firstlast.com  |  teamname.com  |  mybrand.com
2. Get a New Domain Please refer to Vanity Domain Purchase
3. Use a third-level domain Examples : firstlast.abcrealestate.com  |  teamname.abcrealestate.com  |  territory.mybrand.com Follow the same steps as outlined for Agent Websites.

## SSL Certificates

For more information on SSL Certificates, please refer to the following article: Website SSL Certificates .

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

related terms: subdomain, agent website, cname, wildcard cname

## Plain Text

Introduction
This article will cover the topic of domain configuration when you want to use your domain for your Lofty IDX website. Multiple points are part of this topic:
Lofty Support Domain Setup Assistance (#h_01GW56PAX289PBXQTA7F0V68KM)
Company Sites/Group Sites/Team Sites (#h_01EVHKR25R51KXFSY2ZD2YH838)
Domain Configuration Process (#h_01G4NPZS94KWJ4G5MYNEJC7CBM)
Agent Websites, formerly known as Subdomains (#h_01EVHM2584HMXKD4J9GPJQ2RRN)
Agent Websites + Vanity Domain (#h_01EVHM3FNJ77P6YV1G247RVRK6)
SSL Certificates (#h_01EVHP6NX8KH2716Q5XC5FDXRN)
*IMPORTANT
: Your Lofty site will appear at _________.lofty.com until it is configured to another URL via the steps indicated in this article.
Lofty Support Domain Setup Assistance
If you would like the Lofty Support Team to configure your domain for you,
please send the domain name provider and login credentials to support@lofty.com
with instructions to do so.
For
GoDaddy (https://www.godaddy.com/help/invite-a-delegate-to-access-my-godaddy-account-12376)
,
Namecheap (https://www.namecheap.com/support/knowledgebase/article.aspx/192/46/how-do-i-share-access-to-my-domain-with-other-users/)
,
and
Google/Squarespace domains (https://support.squarespace.com/hc/en-us/articles/206537287-Inviting-a-contributor)
,
we ask that you grant delegate access to
loftydomains01@gmail.com
.
For all other providers, Lofty support will need the following information. Please be prepared to provide an authentication code.
o Domain Name
o Domain Login URL:
o Username:
o Password:
*IMPORTANT
: When delegating access to Lofty via GoDaddy, please email our Support Team with the name that the domain is under (even if it is your own name, but especially if it's not). Lofty support has a very long list of names that have delegated access, so our team needs to know which specific one to look under.
What Will We Change?
If your Lofty IDX site is going to be configured with the domain
abc.com
, the A records will appear like this:
or
*IMPORTANT
:
Please note that other A records or AAAA records other than (52.52.24.52 and 52.9.101.47)
one
of the sets shown above need to be removed.
Always take a screenshot or make a note of any existing A records, should you need to undo any changes.
Next, Support will add a CNAME with the "Name" = www and "Value" = yourdomain.com, using your domain, of course. This is to make sure
www.abc.com
(for example) works properly in that format. The value should be your domain.
Also, if you have agents on the team who also need Agent Websites (e.g. ericjohnson.loftyrealestate.com), support will add a wildcard CNAME. See the configuration instructions below under
Agent Websites (#h_01EVHM2584HMXKD4J9GPJQ2RRN)
.
*IMPORTANT
: To avoid URL downtime as much as possible, please coordinate the best timing to do this change with the Lofty Support Team if possible.
Company Sites/Group Sites/Team Sites
As Company Sites/Group Sites/Team Sites will be parent sites to agent websites, they need to own a top-level vanity domain(like loftydemo.com).
There are two ways to configure your domain
1. Use Your Own Domain
You will need to have a domain name purchased from a domain provider.
Once you have a domain name to configure, you can follow the instructions below on connecting your domain to Lofty:
*IMPORTANT: If you purchase a domain via Lofty (see
Vanity Domain Purchase (https://help.lofty.com/hc/en-us/articles/4403710715547)
), you do not need to follow any of the following steps, as they will be done for you automatically.
Connect your domain to Lofty
There are 2 locations where to do this step.
Location 1: CMS dashboard> VANITY DOMAIN SETUP> Use Your Own Domain> Enter the domain name and click Next.
Location 2: CMS dashboard> Settings> Basic Info> Domain> Enter the domain name and click Save.
Note: To finish the connection, you should update your domain's DNS records in your domain host account (usually the company you bought your domain from). You will see a step-by-step outline in your Lofty dashboard, which will help you go through the steps to change the DNS records in your domain's current host account.
Domain Configuration Process
When initially setting up your Lofty website, you will be prompted to provide the final domain before submitting your MLS application(s). After providing the domain, click "Save for Later". This will save the domain, but will not start the configuration process.
When you are ready to configure the domain, navigate to CMS → Settings → Domain and click Configure:
Once you have provided your website domain, if it is a GoDaddy domain, a pop-up will offer two options:
Click
Do it for me
, and follow the steps here:
GoDaddy Domain Configuration Guide (https://help.lofty.com/hc/en-us/articles/26404722103707)
Click
Do it Myself
, and follow the steps below:
Manual Domain Configuration Steps (#h_01HZQ6RD5XY1XYTWQX3C7HZGKF)
Manual Domain Configuration Steps
Below are the 5 steps to manually configure your website domain to your Lofty IDX site.
Step 1
- Log in to the domain provider
Open a new tab in your browser
Go to your domain host's site and log in
Click,
I have logged in
Step 2
- Find the domain settings page
Go to the domains page on your domain host's site
Find where you manage the domain‘s settings
Click,
I found my domain settings
Step 3
- Find your DNS Records
In your domain settings, find the area where you manage or edit DNS server records
Return to the Lofty Domains page
Click,
I found the DNS records
Step 4
- Change the A Records
For example, if your Lofty website was going to be configured with the domain "abc.com," the A records would need to be configured as follows. Do the same but with your domain:
Value:
52.52.24.52 / 52.9.101.47
Note: other A records or AAAA records other than one of the sets shown above need to be removed
Click,
I have updated my A records
Step 5
- Add a new CNAME record
"Name" = www and "Value" = yourdomain.com (replace with your domain)
Save your changes
Return to your Lofty domain page
Click,
I have updated my CNAME records
Domain Verification
If your domain setup fails, please recheck your domain settings and contact Lofty Support (support@lofty.com) if you need additional assistance. If your domain has been set up successfully, we will automatically install the SSL certificate on your website. Additionally, Facebook and Google logins will be configured automatically.
Continue to Set up the Domain
Navigate to:
CMS dashboard> VANITY DOMAIN SETUP> Configure Domain
When your domain configuration process has not yet been completed, you can click the button Configure Domain to continue.
SSL Certificate Setup
After the domain has been set up successfully, we will automatically install the SSL certificate on your website. If the SSL certificate installation fails, we will send a notification email after the SSL has been installed successfully.
For more information regarding SSL Certificates, please reference the following article:
Website SSL Certificates (https://help.lofty.com/hc/en-us/articles/360004842792)
.
2. Get a New Domain
If you do not have a domain yet, you can purchase one via Lofty. For more details, please visit
Vanity Domain Purchase. (https://help.lofty.com/hc/en-us/articles/4403710715547)
Agent Websites, formerly known as Subdomains
More information regarding agent websites can be found
HERE (https://help.lofty.com/hc/en-us/articles/360054744232)
. Agent Websites refer to third-level domains only. Examples of a third-level domain could be the following (firstlast.domain.com):
maryrodriguez.loftyrealestate.com
ericjohnson.loftyrealestate.com
susilancaster.loftyrealestate.com
Please note that using "firstlast.domain.com" will only be an option once the main team site domain is configured as a vanity domain (e.g., loftyrealestate.com)
AND
a wildcard CNAME has been added to the domain settings as seen below:
Name = *
Value = yourdomain.com
*Please note that not all domain providers support wildcard rules. A wildcard rule in place will allow for the Agent websites to be created automatically, but you can still contact Lofty Support if they need to be configured manually.
If you do
not
want to add the wildcard CNAME to set all of your agent websites to point to our servers, you can still configure your agent websites one by one. As an example, we can use "loftyrealestate.com" as the main team website and "maryrodriguez.loftyrealestate.com" as the agent website to demonstrate how this would need to be set up. To make this work, you would need to do the following (using your domain + agent website, of course):
1. Change the A records
Type
Name
Value
TTL
A
loftyrealestate.com
52.52.24.52
Automatic
A
loftyrealestate.com
52.9.101.47
Automatic
2. Add the CNAMEs
Type
Name
Value
TTL
CNAME
www
loftyrealestate.com
Automatic
CNAME
marirodriguez
loftyrealestate.com
Automatic
3. Create an agent website manually in your site list.
If you have multiple Agent Websites to add, you would add another CNAME with their name and make sure everything else is in place as described above.
*IMPORTANT
: We do
not
recommend including "www" within the agent website CNAME itself. In other words, you would
not
want to put "www.maryrodriguez" in the CNAME value instead of what was shown in the example above.
Agent Websites + Vanity Domain
For more information regarding Agent Websites, please visit
HERE (https://help.lofty.com/hc/en-us/articles/360055173711)
. Please note that an Agent Website is an add-on purchase per agent and can be added via the Lofty Marketplace:
Regarding domain configuration, the following options are available for Agent Websites:
Use your domain
Examples
: firstlast.com  |  teamname.com  |  mybrand.com
Get a New Domain
Please refer to
Vanity Domain Purchase (https://help.lofty.com/hc/en-us/articles/4403710715547)
Use a third-level domain
Examples
: firstlast.abcrealestate.com  |  teamname.abcrealestate.com  |  territory.mybrand.com
Follow the same steps as outlined for
Agent Websites. (#h_01EVHM2584HMXKD4J9GPJQ2RRN)
SSL Certificates
For more information on SSL Certificates, please refer to the following article:
Website SSL Certificates (https://help.lofty.com/hc/en-us/articles/360004842792)
.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.
related terms: subdomain, agent website, cname, wildcard cname

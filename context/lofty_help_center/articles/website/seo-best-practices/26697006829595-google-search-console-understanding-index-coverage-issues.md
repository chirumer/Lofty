# Google Search Console: Understanding Index Coverage Issues

- Article ID: `26697006829595`
- Category: `Website`
- Section: `SEO Best Practices`
- Updated: `2025-11-11T03:12:00Z`
- Source: https://help.lofty.com/hc/en-us/articles/26697006829595-Google-Search-Console-Understanding-Index-Coverage-Issues

## Body

## Introduction

Google Search Console (GSC) is a powerful tool that helps website owners monitor and maintain their website's presence in Google search results. One of the most crucial features is the Index Coverage Report, which identifies issues preventing pages from being indexed by Google.

This article explains the most common indexing issues reported by GCS and provides guidance on how to address them.

## Understanding Common Index Issues

In most cases, you will not need to take any action. Many issues are related to problems on Google's end. These issues can be ignored while Google resolves them, generally within two weeks.

Issues that Google attributes to the website do not necessarily need to be corrected, as they are related to the website's indexing strategy. Please refer to the table below for details:

Issue | Explanation
Alternate page with proper canonical tag | This page is an alternate version (Accelerated Mobile Pages/AMP or mobile) of another indexed page and correctly points to the canonical version. No action is needed. This issue arises from using canonical tags for AMP pages, which are designed for faster loading on mobile devices. Google does not index AMP pages separately, so this issue does not affect the overall website ranking.
Discovered - currently not indexed | The page was found by Google, but has not been crawled yet. Google wanted to crawl the URL, but this action was expected to overload the site. Therefore, Google rescheduled the crawl. No action is necessary, but keep monitoring the trend.
Crawled - currently not indexed | The page was crawled by Google, but not indexed. It may or may not be indexed in the future. There is no need to resubmit the URL for crawling. This issue can occur for various reasons, and there is no specific operation that will make sure the page is indexed. We recommend checking the page content and adding internal links to enhance the page's value for further indexing.
Excluded by 'no index' tag | The 'no index' tag is applied to pages that should not be indexed by search engines. In most cases, this exclusion is intentional to enhance the website's SEO effectiveness. These excluded pages are often unavailable property listings or pages with no search results. No action is needed. The purpose of the exclusion is to instruct Google not to index these content-less pages, allowing it to prioritize and give more SEO weight to pages with valuable content.
Server error (5xx) | 5xx errors can occasionally occur during periods of overload or maintenance, such as when Lofty releases feature updates or when web crawlers like Googlebot attempt to access the site too frequently. When this occurs, Google's crawler may not be able to retrieve content. When this happens, Googlebot will attempt to to crawl the page again during its next visit. Additionally, Google keeps a record of pages that fail to load due to 5xx errors. This means that even after our servers stabilize, some pages may still show 5xx error until Google successfully crawls and indexes them. No action is needed. These issues typically resolve themselves within 2-5 weeks as Google re-crawls affected pages. Lofty monitors these situations closely to avoid issue.
Page with redirect/Not Found (404)/Soft 404 | When properties are taken off the market or if indexed pages are deleted in the CMS, different server responses may occur. These include pages that no longer exist, pages with no content, or pages that redirect elsewhere. As a result, you may see issues like Soft 404s, Not Found 404s, or pages with redirects in their reports. In most cases, these issues do not require specific actions, as removing listings or deleting pages is a normal operation. Search engines like Google gradually update their indexes to recognize these changes and adjust accordingly.
Duplicate, Google chose a different canonical than the user | Canonical tags are HTML tags used to instruct search engines on the primary version of a page. We use this to specify which page should be indexed as the main content version. Google sometimes chooses a different canonical tag. This decision may be based on Google's algorithms determining a page with higher content quality or better user experience. Generally, this does not significantly impact overall website ranking or SEO, as Google handles these conflicts appropriately.
Duplicate without a user-selected canonical | For highly similar pages, we've implemented canonical tags to specify the primary version. If you still see these issues in reports, it may be due to Google not yet updating its index. If you need confirmation of the canonical tag settings for these pages, please contact support@lofty.com for assistance.
Blocked by robots.txt | Lofty has blocked URLs in the format of "https://#domain#/house-listing..." using robots.txt, as these pages are intended for listing recommendation associations and hold no SEO value. Please ignore this issue.

For more information, please see Google's Page Indexing Report

## Conclusion

We advise that you not overly fixate on the reasons for individual pages not being indexed. Instead, we recommend focusing on the broader trends of the indexed pages. You should find that as the number of pages discovered by search engines rises steadily, the count of indexed pages is also gradually increasing.

We are dedicated to continuously enhancing your website's SEO. Here are some recent optimizations we have made: SEO Updates Timeline

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
Google Search Console (GSC) is a powerful tool that helps website owners monitor and maintain their website's presence in Google search results. One of the most crucial features is the Index Coverage Report, which identifies issues preventing pages from being indexed by Google.
This article explains the most common indexing issues reported by GCS and provides guidance on how to address them.
Understanding Common Index Issues
In most cases, you will not need to take any action. Many issues are related to problems on Google's end. These issues can be ignored while Google resolves them, generally within two weeks.
Issues that Google attributes to the website do not necessarily need to be corrected, as they are related to the website's indexing strategy. Please refer to the table below for details:
Issue
Explanation
Alternate page with proper canonical tag
This page is an alternate version (Accelerated Mobile Pages/AMP or mobile) of another indexed page and correctly points to the canonical version.
No action is needed. This issue arises from using canonical tags for AMP pages, which are designed for faster loading on mobile devices. Google does not index AMP pages separately, so this issue does not affect the overall website ranking.
Discovered - currently not indexed
The page was found by Google, but has not been crawled yet. Google wanted to crawl the URL, but this action was expected to overload the site. Therefore, Google rescheduled the crawl.
No action is necessary, but keep monitoring the trend.
Crawled - currently not indexed
The page was crawled by Google, but not indexed. It may or may not be indexed in the future. There is no need to resubmit the URL for crawling. This issue can occur for various reasons, and there is no specific operation that will make sure the page is indexed.
We recommend checking the page content and adding internal links to enhance the page's value for further indexing.
Excluded by 'no index' tag
The 'no index' tag is applied to pages that should not be indexed by search engines. In most cases, this exclusion is intentional to enhance the website's SEO effectiveness. These excluded pages are often unavailable property listings or pages with no search results.
No action is needed. The purpose of the exclusion is to instruct Google not to index these content-less pages, allowing it to prioritize and give more SEO weight to pages with valuable content.
Server error (5xx)
5xx errors can occasionally occur during periods of overload or maintenance, such as when Lofty releases feature updates or when web crawlers like Googlebot attempt to access the site too frequently. When this occurs, Google's crawler may not be able to retrieve content.
When this happens, Googlebot will attempt to to crawl the page again during its next visit. Additionally, Google keeps a record of pages that fail to load due to 5xx errors. This means that even after our servers stabilize, some pages may still show 5xx error until Google successfully crawls and indexes them.
No action is needed. These issues typically resolve themselves within 2-5 weeks as Google re-crawls affected pages. Lofty monitors these situations closely to avoid issue.
Page with redirect/Not Found (404)/Soft 404
When properties are taken off the market or if indexed pages are deleted in the CMS, different server responses may occur. These include pages that no longer exist, pages with no content, or pages that redirect elsewhere. As a result, you may see issues like Soft 404s, Not Found 404s, or pages with redirects in their reports.
In most cases, these issues do not require specific actions, as removing listings or deleting pages is a normal operation. Search engines like Google gradually update their indexes to recognize these changes and adjust accordingly.
Duplicate, Google chose a different canonical than the user
Canonical tags are HTML tags used to instruct search engines on the primary version of a page. We use this to specify which page should be indexed as the main content version. Google sometimes chooses a different canonical tag. This decision may be based on Google's algorithms determining a page with higher content quality or better user experience.
Generally, this does not significantly impact overall website ranking or SEO, as Google handles these conflicts appropriately.
Duplicate without a user-selected canonical
For highly similar pages, we've implemented canonical tags to specify the primary version. If you still see these issues in reports, it may be due to Google not yet updating its index.
If you need confirmation of the canonical tag settings for these pages, please contact
support@lofty.com (mailto:support@lofty.com)
for assistance.
Blocked by robots.txt
Lofty has blocked URLs in the format of "https://#domain#/house-listing..." using robots.txt, as these pages are intended for listing recommendation associations and hold no SEO value.
Please ignore this issue.
For more information, please see
Google's Page Indexing Report (https://support.google.com/webmasters/answer/7440203?hl=en)
Conclusion
We advise that you not overly fixate on the reasons for individual pages not being indexed. Instead, we recommend focusing on the broader trends of the indexed pages. You should find that as the number of pages discovered by search engines rises steadily, the count of indexed pages is also gradually increasing.
We are dedicated to continuously enhancing your website's SEO. Here are some recent optimizations we have made:
SEO Updates Timeline (https://help.lofty.com/hc/en-us/articles/14489319973531)
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

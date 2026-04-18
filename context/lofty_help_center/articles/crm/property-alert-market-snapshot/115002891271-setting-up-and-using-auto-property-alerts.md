# Setting Up and Using Auto Property Alerts

- Article ID: `115002891271`
- Category: `CRM`
- Section: `Property Alert/Market Snapshot`
- Updated: `2026-04-14T19:32:31Z`
- Source: https://help.lofty.com/hc/en-us/articles/115002891271-Setting-Up-and-Using-Auto-Property-Alerts

## Body

## Introduction

If you receive a large number of new leads daily, it can be challenging to manually set up property alerts for each one. Lofty can help automate this process! The Lofty Auto Property Alerts feature sets up property alerts for new leads based on their initial inquiry and updates according to their search criteria and behavior on your IDX website.

For best results, the Auto Property Alerts feature is turned on by default for Buyer Property Alerts and Market Snapshots, but off for Market Reports. You can turn these off or adjust the settings at any time.

## Summary

- Settings Location
- Turn On / Off, Deleting Existing Auto Alerts
- Auto Alert Settings
- Reviewing Auto Property Alerts on Leads
- Requirements for Auto Alerts
- Frequency of Alert Emails

## Settings Location

Navigate to Automation > Auto Property Alerts to set up automated property alerts.

## Turn On / Off, Deleting Existing Auto Alerts

To turn on Automated Property Alerts, check the box next to "Enable" and then click "Apply" on the bottom right. If you are a Team Leader/Admin and want the settings to be applied to all the team users, check the box next to "Apply for the team" before clicking "Apply."

*Important: Auto Property Alerts for buyers and sellers need to be turned off separately.

If you disable the auto property alerts by unchecking the box, you will have the ability to delete existing alerts. Note that if you choose to do so by clicking on the hyperlink, you will only be deleting all existing auto property alerts. Manually created property alerts will not be affected.

## Auto Alert Settings

Exclude Source

- This setting allows you to deactivate Automated Property Alerts, Market Snapshots, and Market Reports, based on the lead's Source.
- Checking the box next to the source will deactivate that Source for these automated alerts. That is, leads from that Source will not receive the alert emails.

Exclude Pipeline

- This setting adjusts when auto alerts are APPLIED to new leads in the system.
- This setting does not remove auto alerts. If a lead is imported to the database or added directly to a pipeline stage that is on this exclusion list, it will not have auto property alerts applied. However, if a lead already has an auto property alert applied, it will not remove that property alert.

Location Criteria

- Here, set the auto alert to only trigger based on the "Inquired City" or "Inquired Zip Code." If you choose "Any," the system will trigger based on city and zip code.
- This information is typically gathered when the lead is imported via email parsing and the city or zip code is provided in the email or, if the lead registered on a Lofty website, their activity will be recorded for this purpose.
- Note: For Canadian clients, the option under "Inquired Zip Code" is intended for Postal Codes; we just don't change the name from "zip code" to "postal codes".

Schedule

- Due to the large number of emails that are to be sent out, there is no exact time for an alert email. Usually, AM is from 8:00 a.m. to 10:00 a.m., and PM is from 2:00 p.m. to 4:00 p.m.

*IMPORTANT : Any Auto Property Alerts that were already created will not be affected by changes to any of these settings.

## Reviewing Auto Property Alerts on Leads

On a lead’s profile page, view Auto Property Alerts in the Automations tab. You can edit the settings of Auto Property Alerts to better fit the lead’s criteria, but this turns it into a normal/manual property alert, and this type of alert will not adjust to the lead’s activity (on your website) on its own.

## Requirements for Auto Alerts

Auto Property Alerts are based on "Search Criteria" and Auto Market Snapshots are based on "Properties".

Note that Auto Property Alerts will only work on leads that meet the following requirements:

Auto Property Alert (Buyer)

1. The lead has at least one email address
2. The lead has valid data in the “Location” field of the "Search Criteria" section. If nothing is found in the "Search Criteria" section, an auto property alert email will not be sent until "Location" data is available based on lead behavior on your Lofty IDX website.

Auto Market Snapshot (Seller)

1. The lead has at least one email address
2. The lead has data in the “City” or “Zip Code” field of the Detail or Property Info section

Auto Market Report

1. The lead has at least one email address
2. If it's a Seller lead. . . The lead has data in the "City" or "Zip Code" fields of a property ( Engagement > Properties ).
3. If it's Buyer lead. . . The lead has data for the "City" or "Zip Code" fields in the search criteria (inquiries) on the lead profile.

So, an auto property alert will not be triggered if the information above is not provided or valid. If importing leads that have blank information in these fields, no auto alert will be sent.

## Frequency of Alert Emails

To improve email deliverability, auto property alert email frequency is adjusted based on the lead's behavior.

1. If the lead is set to I nstantly get a property alert, and the number of alerts sent in the last 7 days is greater than 6, the alert frequency will adjust to D aily .
2. If the lead is set to receive a property alert Daily, and the alert's creation time or last time it was downgraded was more than 7 days, and if at least one alert email has been sent in the last 7 days, then the sending frequency will be set to Weekly.
3. If the lead is set to receive a property alert Weekly, and the alert creation time or last frequency adjustment time is more than 7 days, and if one alert email has been sent in the last 7 days, then the sending frequency will be adjusted down to Biweekly(every two weeks.)
4. If the lead is set to receive a property alert Biweekly, the alert creation time or last frequency adjustment time is more than 60 days, and at least one alert email has been sent in the last 7 days, then this will trigger an adjustment down to a Monthly sending frequency.
5. If the Lead opens an email, the frequency will revert to the original setting, no matter which frequency the system had is moved to due to its previous inactivity. Example -If the frequency is reduced from instantly > daily > weekly > monthly and then a lead opens an alert type email that they receive then it will go back to instantly.

*Note this applies to Automatic and Manual Property Alerts.

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
If you receive a large number of new leads daily, it can be challenging to manually set up property alerts for each one. Lofty can help automate this process! The Lofty Auto Property Alerts feature sets up property alerts for new leads based on their initial inquiry and updates according to their search criteria and behavior on your IDX website.
For best results, the Auto Property Alerts feature is turned
on
by default for Buyer Property Alerts and Market Snapshots, but
off
for Market Reports. You can turn these off or adjust the settings at any time.
Summary
Settings Location (#h_01ECXF9NKWADVYTKJTQD016KV8)
Turn On / Off, Deleting Existing Auto Alerts (#h_01ECXF9SANX65KVN9ND7W8J2RJ)
Auto Alert Settings (#h_01ECXF9XF7CQTC1ZZ59A0RH2W2)
Reviewing Auto Property Alerts on Leads (#h_01ECXFC1HF5RQQTMPD66YHM1T3)
Requirements for Auto Alerts (#h_01ECXFC618HZWB5HMHXT2R8XT2)
Frequency of Alert Emails (#h_01ECXFCA4DNM2CZKN7K99T632R)
Settings Location
Navigate to
Automation > Auto Property Alerts
to set up automated property alerts.
Turn On / Off, Deleting Existing Auto Alerts
To turn on Automated Property Alerts, check the box next to "Enable" and then click "Apply" on the bottom right. If you are a Team Leader/Admin and want the settings to be applied to all the team users, check the box next to "Apply for the team" before clicking "Apply."
*Important:
Auto Property Alerts for buyers and sellers need to be turned off separately.
If you disable the auto property alerts by unchecking the box, you will have the ability to delete existing alerts. Note that if you choose to do so by clicking on the hyperlink, you will only be deleting all existing
auto
property alerts. Manually created property alerts will not be affected.
Auto Alert Settings
Exclude Source
This setting allows you to deactivate Automated Property Alerts, Market Snapshots, and Market Reports, based on the lead's Source.
Checking the box next to the source will deactivate that Source for these automated alerts. That is, leads from that Source will not receive the alert emails.
Exclude Pipeline
This setting adjusts when auto alerts are APPLIED to new leads in the system.
This setting does not remove auto alerts. If a lead is imported to the database or added directly to a pipeline stage that is on this exclusion list, it will not have auto property alerts applied. However, if a lead already has an auto property alert applied, it will
not
remove that property alert.
Location Criteria
Here, set the auto alert to only trigger based on the "Inquired City" or "Inquired Zip Code." If you choose "Any," the system will trigger based on city and zip code.
This information is typically gathered when the lead is imported via email parsing and the city or zip code is provided in the email or, if the lead registered on a Lofty website, their activity will be recorded for this purpose.
Note: For Canadian clients,
the option under "Inquired Zip Code" is intended for Postal Codes; we just don't change the name from "zip code" to "postal codes".
Schedule
Due to the large number of emails that are to be sent out, there is no exact time for an alert email. Usually, AM is from 8:00 a.m. to 10:00 a.m., and PM is from 2:00 p.m. to 4:00 p.m.
*IMPORTANT
: Any Auto Property Alerts that were already created will not be affected by changes to any of these settings.
Reviewing Auto Property Alerts on Leads
On a lead’s profile page, view Auto Property Alerts in the
Automations
tab. You can edit the settings of Auto Property Alerts to better fit the lead’s criteria, but this turns it into a normal/manual property alert, and this type of alert will not adjust to the lead’s activity (on your website) on its own.
Requirements for Auto Alerts
Auto Property Alerts are based on "Search Criteria" and Auto Market Snapshots are based on "Properties".
Note that Auto Property Alerts will only work on leads that meet the following requirements:
Auto Property Alert (Buyer)
The lead has at least one email address
The lead has valid data in the “Location” field of the "Search Criteria" section. If nothing is found in the "Search Criteria" section, an auto property alert email will not be sent until "Location" data is available based on lead behavior on your Lofty IDX website.
Auto Market Snapshot (Seller)
The lead has at least one email address
The lead has data in the “City” or “Zip Code” field of the Detail or Property Info section
Auto Market Report
The lead has at least one email address
If it's a Seller lead. . .
The lead has data in the "City" or "Zip Code" fields of a property (
Engagement
>
Properties
).
If it's Buyer lead. . .
The lead has data for the "City" or "Zip Code" fields in the search criteria (inquiries) on the lead profile.
So, an auto property alert will
not
be triggered if the information above is not provided or valid. If importing leads that have blank information in these fields, no auto alert will be sent.
Frequency of Alert Emails
To improve email deliverability, auto property alert email frequency is adjusted based on the lead's behavior.
If the lead is set to I
nstantly
get a property alert, and the number of alerts sent in the last 7 days is greater than 6, the alert frequency will adjust to D
aily
.
If the lead is set to receive a property alert
Daily,
and the alert's creation time or last time it was downgraded was more than 7 days, and if at least one alert email has been sent in the last 7 days, then the sending frequency will be set to
Weekly.
If the lead is set to receive a property alert
Weekly,
and the alert creation time or last frequency adjustment time is more than 7 days, and if one alert email has been sent in the last 7 days, then the sending frequency will be adjusted down to
Biweekly(every two weeks.)
If the lead is set to receive a property alert
Biweekly,
the alert creation time or last frequency adjustment time is more than 60 days, and at least one alert email has been sent in the last 7 days, then this will trigger an adjustment down to a
Monthly
sending frequency.
If the Lead opens an email, the frequency will revert to the original setting, no matter which frequency the system had is moved to due to its previous inactivity.
Example -If the frequency is reduced from instantly > daily > weekly > monthly and then a lead opens an alert type email that they receive then it will go back to instantly.
*Note this applies to Automatic and Manual Property Alerts.
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

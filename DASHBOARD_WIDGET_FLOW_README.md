# Lofty Dashboard Widget Flow

This document maps the dashboard widgets in Lofty to the nearest matching Help Center sections and explains the real user flow behind each card.

It is meant to answer two questions:

1. `What does each dashboard widget actually represent in the Lofty product?`
2. `Where does the user go after clicking that widget?`

## Why This Matters

The dashboard looks like one page, but it is really a summary layer sitting on top of many different Lofty systems:

- lead management
- communication
- tasks
- appointments and showings
- listings
- transactions
- website activity
- AI recommendations

The Help Center does not explain the dashboard as one connected flow. It explains each feature separately. This README stitches those pieces together.

## What The Dashboard Is

The dashboard is not the system of record.

It is a `triage screen`.

Its job is to:

- surface what needs attention today
- help agents prioritize
- send them into the right module to take action

The real work usually happens in:

- `People`
- `Lead Profile`
- `Calendar`
- `Listings`
- `Transactions`
- `Website`

## Dashboard Structure

The dashboard widgets in your screenshot can be grouped into four buckets:

### 1. Awareness

- New Updates

### 2. Lead Triage

- Need Keep In Touch
- Today's New Leads
- Today's Opportunities

### 3. Execution

- Transactions
- Today's Tasks
- Appointments / Showings

### 4. Inventory and Market Context

- My Listings
- Hot Sheets

## Widget Mapping

## 1. New Updates

### What it shows

- product updates
- listing promotion opportunities
- admin or company announcements

### Help Center mapping

- `CRM > Dashboard > Dashboard Overview`
- `CRM > Notifications > Dashboard Announcement Board`
- `Lofty Feature Updates`

### What it connects to

- latest Lofty Help Center feature update articles
- announcement management by admins
- listing promotion / advertising actions

### Real flow

1. User logs in
2. Sees a product update, webinar, or announcement
3. Clicks into the relevant article, announcement, or promo
4. Either learns about a release or launches a marketing action

### UX importance

This card is informational, not core workflow.

It is useful, but it is not as critical as leads, tasks, or opportunities.

## 2. Need Keep In Touch

### What it shows

- relationship-maintenance leads
- birthday reminders
- follow-up reminders
- leads that need a personal touch

### Help Center mapping

- `CRM > Dashboard > Dashboard Overview`
- `CRM > Lead Management > Lead Organization with Filters`
- `CRM > Lead Management > People Page`
- `Mobile Apps > Lofty Mobile App`

### Most relevant Help Center concepts

- `Need to Touch` is a built-in saved filter
- `birthday` is a filterable lead profile detail
- `Last Touch` and `Last Reply` exist as lead activity filters
- the mobile dashboard explicitly includes `need to follow-up`

### What it connects to

- People page filtered views
- lead profile
- call, text, email, or note actions
- follow-up task creation

### Real flow

1. Dashboard surfaces someone who has a birthday or needs follow-up
2. User clicks into the lead
3. User sends a text, email, call, or creates a task
4. Lead stays warm without being forgotten

### Note

The Help Center explicitly mentions birthdays on this card. The follow-up behavior visible in your screenshot is inferred from the saved filter system, lead activity filters, and the mobile dashboard’s `need to follow-up` category.

## 3. Today's New Leads

### What it shows

- newly acquired leads for today or this week
- untouched leads
- lead score and source context

### Help Center mapping

- `CRM > Dashboard > Dashboard Overview`
- `CRM > Lead Management > Lead Organization with Filters`
- `CRM > Lead Management > People Page`
- `CRM > Lead Management > Add a Lead`
- `CRM > Lead Communication & Automation > Smart Plan Builder`

### Most relevant Help Center concepts

- `Today's New Leads` is a built-in saved filter
- `Reg Date` is a lead filter
- users can set up automated communication from the dashboard card settings
- leads can come from website, ads, imports, integrations, or manual entry

### What it connects to

- People page with a new-leads view
- lead profile
- Smart Plans and auto follow-up
- call, text, and email actions

### Real flow

1. New lead enters Lofty
2. Dashboard places it in today's new leads
3. User opens the lead or the filtered list
4. User contacts the lead or applies automation
5. Lead moves into pipeline and ongoing nurture

## 4. Today's Opportunities

### What it shows

- high-value behavioral signals from leads

### Help Center mapping

- `CRM > Dashboard > Dashboard Overview`
- `CRM > Notifications > Opportunity Notifications`
- `CRM > Lead Management > Lead Organization with Filters`
- `CRM > Lead Management > People Page`

### Opportunity types documented in Help Center

- `High Interest`
- `Back To Site`
- `Sell`
- `Back On Market`

### What it connects to

- People page filtered by opportunities
- lead profile
- immediate communication actions
- notifications on web and mobile

### Real flow

1. Lead does something important on the website or re-engages
2. Lofty marks that behavior as an opportunity
3. Dashboard surfaces the lead
4. User opens the lead quickly and follows up
5. Agent responds while intent is still high

### Why it matters

This is one of the most important cards in the whole dashboard because it converts passive lead activity into a prioritized sales action.

## 5. Transactions

### What it shows

- transactions with deadlines
- expired or near-due transaction tasks
- milestone reminders

### Help Center mapping

- `CRM > Dashboard > Dashboard Overview`
- `CRM > Transactions > Transaction Management Introduction`
- `CRM > Transactions > Transaction Management Checklists`
- `CRM > Transactions > Offer Management`
- `CRM > Transactions > Transaction Document Templates`
- `CRM > Transactions > Transaction Lead Portal`

### Most relevant Help Center concepts

- transactions live inside a lead but are managed from the transaction system
- transaction pipelines have stages and dates
- checklist templates can auto-create tasks
- transaction detail pages include checklists, accounting, contacts, documents, and history

### What it connects to

- transaction management page
- transaction detail page
- checklist tasks
- offer comparison
- client-facing portal and documents

### Real flow

1. Lead becomes an active deal
2. Transaction is created and moved through stages
3. Dashboard surfaces near-deadline items
4. User clicks into the transaction record
5. User updates stage, documents, checklist, or offer status

## 6. Today's Tasks

### What it shows

- tasks due today or this week
- task types like call, text, email, and other
- manual and automated work items

### Help Center mapping

- `CRM > Dashboard > Dashboard Overview`
- `CRM > Lead Communication & Automation > Task Management`
- `CRM > Lead Communication & Automation > Lofty Calendar`
- `CRM > Lead Communication & Automation > Smart Plan Builder`
- `CRM > AI Copilots > Using AI Assistant Multi-Step Tasks`

### Most relevant Help Center concepts

- every task belongs to a lead
- tasks can be manual or created by Smart Plans
- tasks are visible on the task page, calendar, and lead timeline
- AI can generate multi-step follow-up task plans

### What it connects to

- Task page
- Calendar page
- lead profile task section
- Smart Plan flows

### Real flow

1. Lofty collects all due tasks for today
2. Dashboard surfaces them by type
3. User clicks into the task or full task list
4. User completes, postpones, or reassigns work
5. Task history remains attached to the lead

## 7. Appointments and Showings

### What it shows

- scheduled appointments
- showing requests
- approved showings
- incomplete and upcoming events

### Help Center mapping

- `CRM > Dashboard > Dashboard Overview`
- `CRM > Lead Communication & Automation > Appointments`
- `CRM > Lead Communication & Automation > Lofty Calendar`
- `CRM > Showing > Listing Showing Management`

### Most relevant Help Center concepts

- appointments can be created manually or requested from the website
- appointments sync with integrated calendars
- showing requests come from the IDX website
- showings can be accepted, approved, canceled, or rescheduled

### What it connects to

- Calendar
- Showings dashboard
- lead profile appointment section
- listing showing actions

### Real flow

1. Lead requests a tour or agent creates an appointment
2. Dashboard shows the item in today’s schedule
3. User opens the appointment or showing request
4. User accepts, confirms, postpones, or follows up
5. Event is synced and tracked in the system

## 8. My Listings

### What it shows

- the agent’s active listings
- listing cards with engagement and action options
- performance context for currently marketed properties

### Help Center mapping

- `CRM > Listing (CRM) > My/Team Listings`
- `CRM > Listing (CRM) > Smart Listings`
- `CRM > Listing (CRM) > All Listings & Hot Sheets`

### Most relevant Help Center concepts

- My Listings lives inside Listing Discovery
- listing cards support actions like send to leads, create CMA, create text code, and social posting
- listings depend on MLS Agent ID and listing matching

### What it connects to

- Listings tab
- listing detail side panel
- send-to-leads flow
- social and marketing actions
- CMA and tour creation

### Real flow

1. Lofty matches active listings to the agent or team
2. Dashboard surfaces those listings
3. User opens a listing card
4. User shares it, promotes it, or uses it in lead outreach
5. Listing becomes part of nurture and conversion

### Note

This widget is visible in your dashboard screenshot and in the hackathon PDF material. The current Help Center dashboard article focuses more on Hot Sheets and does not document this card in the same level of detail, so this mapping comes mainly from the listing-related Help Center articles.

## 9. Hot Sheets

### What it shows

- saved MLS search buckets
- listing changes like new listings, back on market, price reduced, and open houses

### Help Center mapping

- `CRM > Dashboard > Dashboard Overview`
- `CRM > Listing (CRM) > All Listings & Hot Sheets`
- `Lofty Playbooks` such as `Price Reduced`

### Most relevant Help Center concepts

- Hot Sheets are saved search filters
- Lofty can surface matching inventory in real time
- buyer matching connects listings with lead preferences
- agents can share listings directly from discovery tools

### What it connects to

- Listing Discovery
- Hot Sheets list
- buyer matching
- send listing to lead
- property alert and market follow-up workflows

### Real flow

1. Agent creates or uses saved hot sheet criteria
2. Lofty tracks inventory changes
3. Dashboard shows hot sheet categories
4. User opens matching inventory
5. User sends listings to leads or reacts to market movement

## Cross-Widget Flow

The cleanest way to read the dashboard is from top-left to bottom-right in this order:

1. `New Updates`
Check for important product changes, promotions, or company announcements.

2. `Today's New Leads`
See what entered the system today and who has not been touched yet.

3. `Today's Opportunities`
See which existing leads show urgent buying or selling intent.

4. `Need Keep In Touch`
Catch relationship leads that could go cold if ignored.

5. `Today's Tasks`
Execute your due communication work.

6. `Appointments and Showings`
Handle time-based commitments and requested tours.

7. `Transactions`
Protect deals that are already moving toward close.

8. `My Listings`
Use your active inventory in outreach and promotion.

9. `Hot Sheets`
React to market movement and send relevant listings fast.

## Simplified Dashboard Flow

If this dashboard is simplified into one product flow, it becomes:

1. `What is new?`
New Updates

2. `Who needs attention first?`
Today's New Leads, Today's Opportunities, Need Keep In Touch

3. `What do I need to do now?`
Today's Tasks, Appointments, Showings, Transactions

4. `What inventory can I use?`
My Listings, Hot Sheets

That is the real operational logic behind the current dashboard.

## Best Mental Model

The dashboard is best understood as:

- `signal widgets` for leads
- `execution widgets` for work
- `inventory widgets` for listings
- `awareness widgets` for updates

The user should not stay on the dashboard for long.

The dashboard should send the user into:

- a lead record
- a task list
- a calendar item
- a listing workflow
- a transaction record

## Design Insight

This mapping makes one thing very clear:

Most dashboard widgets are not independent features.

They are shortcuts into deeper systems.

That means a better redesign should focus less on making the cards prettier and more on:

- reducing duplicate signals
- collapsing related cards into one action queue
- showing the next best action directly
- opening the right record with one click

## Source Notes

This document is based on the following current public Lofty resources:

- Dashboard Overview: <https://help.lofty.com/hc/en-us/articles/8472031391131-Dashboard-Overview>
- Dashboard Announcement Board: <https://help.lofty.com/hc/en-us/articles/360046736752-Dashboard-Announcement-Board>
- Lead Organization with Filters: <https://help.lofty.com/hc/en-us/articles/360055290571-Lead-Organization-with-Filters>
- People Page: <https://help.lofty.com/hc/en-us/articles/21282508051227-People-Page>
- Add a Lead: <https://help.lofty.com/hc/en-us/articles/360038382932-Add-a-Lead>
- Opportunity Notifications: <https://help.lofty.com/hc/en-us/articles/115003018292-Opportunity-Notifications>
- Task Management: <https://help.lofty.com/hc/en-us/articles/360017514112-Task-Management>
- Lofty Calendar: <https://help.lofty.com/hc/en-us/articles/6582612402715-Lofty-Calendar>
- Appointments: <https://help.lofty.com/hc/en-us/articles/216290543-Appointments>
- Listing Showing Management: <https://help.lofty.com/hc/en-us/articles/18596161600027-Listing-Showing-Management>
- All Listings & Hot Sheets: <https://help.lofty.com/hc/en-us/articles/360002361751-All-Listings-Hot-Sheets>
- My/Team Listings: <https://help.lofty.com/hc/en-us/articles/360004048551-My-Team-Listings>
- Smart Listings: <https://help.lofty.com/hc/en-us/articles/4410497918107-Smart-Listings>
- Transaction Management Introduction: <https://help.lofty.com/hc/en-us/articles/360057572991-Transaction-Management-Introduction>
- Transaction Management Checklists: <https://help.lofty.com/hc/en-us/articles/360057001712-Transaction-Management-Checklists>
- Offer Management: <https://help.lofty.com/hc/en-us/articles/4412776507163-Offer-Management>
- Transaction Lead Portal: <https://help.lofty.com/hc/en-us/articles/48972164737435-Transaction-Lead-Portal>
- Lofty Real Estate App: <https://help.lofty.com/hc/en-us/articles/17801017502491-Lofty-Real-Estate-App>

## Confidence Notes

- The mapping for `Today's Opportunities`, `Today's New Leads`, `Today's Tasks`, `Appointments`, and `Hot Sheets` is directly supported by the Help Center.
- The mapping for `Need Keep In Touch` is partly direct and partly inferred from saved filters and mobile dashboard behavior.
- The mapping for `My Listings` is based on the listing Help Center articles plus the dashboard image you provided, because the main dashboard article does not describe that card in equal detail.

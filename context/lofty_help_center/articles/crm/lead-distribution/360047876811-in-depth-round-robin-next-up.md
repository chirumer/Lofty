# In-Depth: Round Robin & Next Up

- Article ID: `360047876811`
- Category: `CRM`
- Section: `Lead Distribution`
- Updated: `2025-11-07T06:31:22Z`
- Source: https://help.lofty.com/hc/en-us/articles/360047876811-In-Depth-Round-Robin-Next-Up

## Body

## Introduction

This article is an in-depth analysis of the logic behind the round-robin and Next-Up lead distribution methods. Please only reference this article if you want to better understand very specific information about how the routing logic works. For basic information on lead routing, please refer to the following article: Agent Lead Routing Rules .

## In-Depth Round Robin & Next-Up Logic

### Definitions

First of all, there are a few important definitions associated with the Next Up and Round Robin distribution methods:

a. Cycle . A "cycle" lasts until all of the leads that are planned for distribution in a single lead routing rule are assigned to agents. In the screenshot below, for example, you see one cycle consisting of a total of 30 leads being distributed to five different agents. 6+6+6+3+9 = 30. When a cycle ends, the rule will start all over again.

b. Allocation . This customizable value refers to the total number of leads that is to be assigned to each assignee. The percentage shows how it compares to the other assignees on the list. In the screenshot above , you can see where you can define the allocation for each agent in the assignee list.

c. Hunger . A value associated with each assignee that changes for each one individually if they claim a lead. Hunger starts equal to the allocation (b). The first lead distributed in a rule is always assigned left to right.

But at the second lead and on, the "hunger" of an agent changes for an agent if they claim that lead. Here is the formula that is used to calculate hunger after a lead is claimed:

new hunger = (hunger - 1) ÷ allocation

### Example

So, let's look at an example to illustrate all of this in a real-world scenario:

We will look at "Next Up" as the distribution method because this adds a potential outcome that is important to be aware of but doesn't exist in "Round Robin."

We are going to distribute the leads to five different agents. The allocation assigned to each agent is seen in the screenshot below. There are a total of 30 leads planned in this rule before it would start over again:

So. . .

Agents (5 total) | Agent A | Agent B | Agent C | Agent D | Agent E | *Notes
Allocation (30 total) | 6 | 6 | 6 | 3 | 9 | 
Lead 1 HUNGER: ASSIGNED: | Agent A 1 1 | Agent B 1 0 | Agent C 1 0 | Agent D 1 0 | Agent E 1 0 | The first lead is always offered L to R. So, the first lead goes to Agent A.
Lead 2 HUNGER: ASSIGNED: | Agent A 0.83 0 | Agent B 1 1 | Agent C 1 0 | Agent D 1 0 | Agent E 1 0 | Agent A's new hunger: (6-1)/6=0.83 Agent B was next in line because they are at the left and have the same hunger as the other assignees
Lead 3 HUNGER: ASSIGNED: | Agent A 0.83 0 | Agent B 0.83 0 | Agent C 1 1 | Agent D 1 0 | Agent E 1 0 | Agent B's new hunger: (6-1)/6=0.83
Lead 4 HUNGER: ASSIGNED: | Agent A 0.83 0 | Agent B 0.83 0 | Agent C 0.83 0 | Agent D 1 1 | Agent E 1 0 | Agent C's new hunger: (6-1)/6=0.83
Lead 5 HUNGER: ASSIGNED: | Agent A 0.83 0 | Agent B 0.83 0 | Agent C 0.83 0 | Agent D 0.67 0 | Agent E 1 1 | Agent D's new hunger: (3-1)/3=0.67
Lead 6 HUNGER: ASSIGNED: | Agent A 0.83 0 | Agent B 0.83 0 | Agent C 0.83 0 | Agent D 0.67 0 | Agent E 0.89 1 | Agent E's new hunger: (9-1)/9=0.89
Lead 7 HUNGER: ASSIGNED: | - 0.83 0 | - 0.83 1 | - 0.83 0 | - 0.67 0 | - 0.78 0 | Agent A would have been offered the lead in this round. However, in this "Next Up" example, the agent has to claim the lead. So, let's pretend Agent A did not claim the lead in time so it was reassigned to the next person with the highest hunger.
Lead 8 HUNGER: ASSIGNED: | - 0.83 1 | - 0.67 0 | - 0.83 0 | - 0.67 0 | - 0.78 0 | Agent A had the same hunger as Agent C but was first on the list so they get the next lead.
Etc. |  |  |  |  |  | This same process would repeat for all 30 leads (based on the total allocation in this example.)

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

## Plain Text

Introduction
This article is an in-depth analysis of the logic behind the round-robin and Next-Up lead distribution methods. Please only reference this article if you want to better understand very specific information about how the routing logic works. For basic information on lead routing, please refer to the following article:
Agent Lead Routing Rules (https://help.lofty.com/hc/en-us/articles/360055177831)
.
In-Depth Round Robin & Next-Up Logic
Definitions
First of all, there are a few important definitions associated with the Next Up and Round Robin distribution methods:
a.
Cycle
. A "cycle" lasts until all of the leads that are planned for distribution in a single lead routing rule are assigned to agents. In the screenshot below, for example, you see one cycle consisting of a total of 30 leads being distributed to five different agents. 6+6+6+3+9 = 30. When a cycle ends, the rule will start all over again.
b.
Allocation
. This customizable value refers to the total number of leads that is to be assigned to each assignee. The percentage shows how it compares to the other assignees on the list. In the screenshot
above
, you can see where you can define the allocation for each agent in the assignee list.
c.
Hunger
. A value associated with each assignee that changes for each one individually if they claim a lead. Hunger
starts
equal to the allocation (b). The first lead distributed in a rule is always assigned left to right.
But at the second lead and on, the "hunger" of an agent changes for an agent if they claim that lead. Here is the formula that is used to calculate hunger after a lead is claimed:
new hunger = (hunger - 1) ÷ allocation
Example
So, let's look at an example to illustrate all of this in a real-world scenario:
We will look at "Next Up" as the distribution method because this adds a potential outcome that is important to be aware of but doesn't exist in "Round Robin."
We are going to distribute the leads to five different agents. The allocation assigned to each agent is seen in the screenshot below. There are a total of 30 leads planned in this rule before it would start over again:
So. . .
Agents
(5 total)
Agent A
Agent B
Agent C
Agent D
Agent E
*Notes
Allocation
(30 total)
6
6
6
3
9
Lead 1
HUNGER:
ASSIGNED:
Agent A
1
1
Agent B
1
0
Agent C
1
0
Agent D
1
0
Agent E
1
0
The first lead is always offered L to R. So, the first lead goes to Agent A.
Lead 2
HUNGER:
ASSIGNED:
Agent A
0.83
0
Agent B
1
1
Agent C
1
0
Agent D
1
0
Agent E
1
0
Agent A's new hunger: (6-1)/6=0.83
Agent B was next in line because they are at the left and have the same hunger as the other assignees
Lead 3
HUNGER:
ASSIGNED:
Agent A
0.83
0
Agent B
0.83
0
Agent C
1
1
Agent D
1
0
Agent E
1
0
Agent B's new hunger: (6-1)/6=0.83
Lead 4
HUNGER:
ASSIGNED:
Agent A
0.83
0
Agent B
0.83
0
Agent C
0.83
0
Agent D
1
1
Agent E
1
0
Agent C's new hunger: (6-1)/6=0.83
Lead 5
HUNGER:
ASSIGNED:
Agent A
0.83
0
Agent B
0.83
0
Agent C
0.83
0
Agent D
0.67
0
Agent E
1
1
Agent D's new hunger: (3-1)/3=0.67
Lead 6
HUNGER:
ASSIGNED:
Agent A
0.83
0
Agent B
0.83
0
Agent C
0.83
0
Agent D
0.67
0
Agent E
0.89
1
Agent E's new hunger: (9-1)/9=0.89
Lead 7
HUNGER:
ASSIGNED:
-
0.83
0
-
0.83
1
-
0.83
0
-
0.67
0
-
0.78
0
Agent A would have been offered the lead in this round. However, in this "Next Up" example, the agent has to claim the lead. So, let's pretend Agent A did
not
claim the lead in time so it was reassigned to the next person with the highest hunger.
Lead 8
HUNGER:
ASSIGNED:
-
0.83
1
-
0.67
0
-
0.83
0
-
0.67
0
-
0.78
0
Agent A had the same hunger as Agent C but was first on the list so they get the next lead.
Etc.
This same process would repeat for all 30 leads (based on the total allocation in this example.)
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.

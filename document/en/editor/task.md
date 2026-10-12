
# Task
A mission that is achieved when the conditions are met
- It is achieved when the conditions you set are met, and a message is shown at the top of the screen.
- It is shown in the list of missions of the player and in the list of tasks of the category.
- A task with no conditions set is never achieved.
- Once it is achieved, it stays achieved even if the conditions stop being met afterwards, and the reward can be received at any time.
- The reward is not handed over automatically. The player receives it when they open the task and press the Acquisition bar.
- Until the reward is received, a ribbon is attached to the bar in the list to show that it has not been claimed.
- A task with no reward set shows no Acquisition bar and is complete the moment it is achieved.
- You cannot receive the reward while the number of kinds of items you can hold is at its limit. Tidy up your holdings and claim it again.
- With the acquisition you can change the level of a category, the number of times an action has been performed and the number owned of an item.
- Something you want to fire at a timing other than the conditions, such as the first launch or a game over, is set with a fixed event (unique).
- [_unique_](en/editor/unique)
___

## [_Information_](en/editor/information)
___

## Category
The ID of the category the task belongs to
- Specify the ID of the category this task belongs to.
- Once it is set, the list of tasks is added to the category screen of the player, and in the list of missions they are shown grouped by category as well.
- When it is left blank, it belongs to no category and is shown together at the top of the list of missions.
- When no colour is set on the task itself, it inherits the colour of the category.
- [_category_](en/editor/category)
___

## Timing
The timing at which the task fires (fixed to `tasked`)
- A task is fixed to `tasked` (when the conditions you set are met) and cannot be edited.
- The reward can be received only once, and after it is received it stays achieved with no further change.
- Something you want to fire at another set timing is set with a fixed event (unique).
- [_unique_](en/editor/unique)
___

## Initial Display State
The initial display state of the task icon (achievement is decided by the conditions, and this setting does not achieve it)
- The achievement conditions of a task are decided by requirements, and this field affects only the look of the icon in the list.
- secreted: It does not appear in the list of tasks at all until every requirement is met (the achievement itself still happens through the conditions).
- hidden and hinted: The icon is shown with a slash across it as not yet unlocked.
- released: The slash disappears and it is shown as already unlocked.
- A task that has been achieved once does not disappear from the list, and it stays shown as achieved even if the conditions stop being met afterwards.
___

## [_Requirement_](en/editor/requirement)
___

## Group Totalling
Treats the id in the conditions as a group ID and judges by the total value of the elements that belong to it
- When it is enabled, the id you set in the conditions (requirements) is treated as the ID of a group directly under the world.
- A condition whose type is a category is judged by the total level of every category that belongs to that group.
- A condition whose type is an action is judged by the total number of times every action that belongs to that group has been performed.
- A condition whose type is an item is judged by the total number owned of every item that belongs to that group.
- An element that is not unlocked (anything other than released) is not included in the total.
- The consumption chance (chance) and the equipment condition (equipment) of an item are ignored, and the number owned is never consumed. They are used only for the judgement.
- When it is disabled, the id in the conditions is treated as the ID of an individual category, action or item, as before.
- [_group_](en/editor/group)
___

## [_Acquisition_](en/editor/acquisition)
___

## Task Group
The display group classification of the task
- Apply one of those defined in the groups directly under the world.
- In the list of tasks of a category, they are shown split by group with a heading on each. The tasks with no group set also form one block, and the preset "Task" is used for its heading.
- In the list of missions they are not split by heading, and only the order in which they are lined up is gathered by group.
- The order in which the blocks are lined up is decided by the position where the first task of that group appears.
- [_group_](en/editor/group)

# Category
The broad framework that classifies actions and items
- It represents a large classification.
- For example, you can set it as a free framework such as close range, long range, magic, dungeon, blacksmith or workshop.
- Actions and items are placed directly under the world and are linked by the category ID.
___

## [_Information_](en/editor/information)
___

## Group
The display group classification of the category
- Apply one of those defined in the groups directly under the world.
- The category list is shown in the order of the groups you set.
- [_group_](en/editor/group)
___

## Initial Unlock State
The initial display and unlock state of the element (it moves up to a higher state automatically once the firing requirements are met)
- secreted: It does not appear in the UI at all until every requirement is met (it does not show up in the hints either, and it is masked in the lists of requirements and rewards as well).
- hidden: While it is referred to by none of the unlocked elements and its requirements are unmet, it is hidden completely (the name is greyed out and it cannot be operated).
- hinted (the default): Only the name is shown in advance, but it cannot be operated until it is unlocked.
- released: It is unlocked and can be operated from the start regardless of the conditions (formerly "shown from the start").
___

## [_Requirement_](en/editor/requirement)
___

## Whether It Has a Level
Whether the category level feature is present
- It is the flag for whether this category has a level.
- When it is on it has a level, and when it is off it does not.
- As an example, there is a way of using it where categories based on experience, such as swordsmanship and magic, are turned on and categories of places, such as dungeons and blacksmiths, are turned off.
- When it is off no experience comes in, and in the calculation of the properties the level gap between the player and the action is treated as 0. The correction of the properties by the equipment still works as before.
- A category that is off is also excluded from the judgement of clearing (completed).
___

## Simultaneous Progress
The setting for running in parallel with other categories
- It is the flag for whether the actions of this category can progress in parallel with the actions of other categories.
- When it is on, they can progress at the same time independently of the actions of other categories.
- When it is off, only one action at a time can progress across all the categories that are likewise set to off.
- When you start a new action in a category that is off, the action in progress is not cancelled but pushed back to the head of the waiting queue. The remaining number of executions is kept, and once the action that cut in has finished it resumes from where it left off.
___

## Background
The background setting specific to the category
- It sets the background of this category.
- When the category is selected, the background image changes along with it.
- When it is not set, the background of the design is used as it is.
- It is automatically reduced to within 256×256 pixels when it is imported.
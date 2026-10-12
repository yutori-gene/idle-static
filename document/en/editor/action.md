
# Action
The elements of behaviour such as gathering, crafting and combat
- It is an element that represents behaviour such as gathering, crafting, trading and combat.
- Each time you act you gain experience and your level rises.
- You can set it up to consume or obtain items each time you act.
- There are several kinds of behaviour pattern.
___

## [_Information_](en/editor/information)
___

## Category
The ID of the category the action belongs to
- Specify the ID of the category this action belongs to.
___

## Attribute
The attribute category specific to the action
- You can set an individual attribute (category).
- When it is blank, the category it belongs to is taken over.
- For example, if you set the individual attribute of magic on an action that belongs to a category called Demon Castle, the level and the properties of the magic category are calculated and applied to the completion time and the damage of the action.
- The experience on success also goes to the category set in the attribute, not to the category it belongs to.
- When no colour is set on the action itself, the colours of the icon and the background take over the colour of the category set in the attribute, not of the category it belongs to.
- [_category_](en/editor/category)
___

## Group
The display group classification of the action
- Apply one of those defined in the groups directly under the world.
- The action list is shown in the order of the groups you set.
- [_group_](en/editor/group)
___

## Initial Unlock State
The initial display and unlock state of the element (it moves up to a higher state automatically once the firing requirements are met)
- secreted: It does not appear in the UI at all until every requirement is met (it does not show up in the hints either, and it is masked in the lists of requirements and rewards as well).
- hidden: While it is referred to by none of the unlocked elements and its requirements are unmet, it is hidden completely (the name is greyed out and it cannot be operated).
- hinted (the default): Only the name is shown in advance, but it cannot be operated until it is unlocked.
- released: It is unlocked and can be operated from the start regardless of the conditions (formerly "shown from the start").
___

## Level
The difficulty level of the action
- The difficulty of the action is expressed as a level.
- On execution it is compared with the level of the player and each property is calculated.
- The counterpart of the comparison is the level of the category set in the attribute.
- For example, when you perform an action higher than your own level, there are effects such as the success rate going down.
- As long as the conditions are met, it can be performed even when the level of the player is smaller than this value.
- However, when `actionLevelLimit` in general (the level limit of actions) is enabled, this value is added automatically as a condition on the level of the category, so it cannot be performed until the level reaches it. It is not added for a category that has no level.
- [_property_](en/editor/property)
___

## [_Requirement_](en/editor/requirement)
___

## Required Time [Seconds]
The standard time it takes to perform the action
- It is the standard time (in seconds) needed to perform the action once.
- For the `stamina` type, it is the time interval one turn takes (shaving the stamina of both sides once). The turns that recover the stamina after the outcome is decided use the same interval.
- It varies at the actual execution through the calculation of the properties.
- [_property_](en/editor/property)
___

## Experience [100 for the Next Level]
The experience gained when the action succeeds
- It is the standard experience gained when the action is performed once and succeeds. 100 is the experience for one level.
- In the case of combat it is gained when you beat the opponent, so it is a good idea to set it generously.
- It varies at the actual execution through the calculation of the properties.
- [_property_](en/editor/property)
___

## Success Rate [0-1]
The success chance when the action completes
- It is the chance of succeeding when the action completes.
- With `1` it always succeeds, and with `0` it always fails.
- The consumed items are consumed on a failure too, but the experience and the number of executions do not rise.
- Only the rewards whose chance (chance) is set to a positive value are gained on a success. The ones set to a negative value are gained only on a failure, so it is not necessarily true that nothing is gained when you fail.
- It varies at the actual execution through the calculation of the properties.
___

## Maximum Number of Executions [Times]
The maximum number of times the action can be completed
- It is the upper limit of the number of times the action can succeed and be completed.
- With `0` it is unlimited.
- Once the upper limit is reached, the action can no longer be performed.
___

## [_Acquisition_](en/editor/acquisition)
___

## Progress Type
The execution type of the action
- There are four kinds.

|Type|Behaviour|Stamina|Example|
|-|-|-|-|
|`persistent`|It is a type in which the action is performed repeatedly and continuously. You gain experience and a reward each time it completes once.|Not related|Logging, mining, fishing|
|`single`|It performs the action once. When it is interrupted partway, the progress is saved and you can resume from where you left off next time. When it completes, the user presses the confirmation action and receives the result.|Not related|Unlocking a treasure chest, learning a skill by reading|
|`snap`|It is a type in which the action is performed instantly. It completes at once with no passage of time.|Not related|Bartering, using an item|
|`stamina`|The stamina of the player and of the opponent each decreases every required time. When the stamina of the opponent runs out you gain experience and a reward. When the stamina of the player runs out it is a game over and every action in progress is cancelled.|Related|Combat, work that involves danger|
___

## [_Combat Values_](en/editor/combat)
___

## [_Skill_](en/editor/skill)
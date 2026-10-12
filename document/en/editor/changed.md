
# Changed Event
An event for internal processing that fires when the quantity of a category, an action or an item increases at once by the amount in the conditions or more
- It is checked at every timing where a quantity changes, such as the completion of an action, a purchase or a sale, or the opening of a treasure chest.
- The conditions (requirements) are judged by the amount of the increase in that single timing, not by an absolute value such as the number owned. Small increases split over several times are not added up.
- If you set the condition of an item to 3, for example, it is met when that item has increased by 3 or more in that one time. A decrease is not counted as an increase.
- When you set several conditions, all of them have to be met at the same time in that one change. A changed event with no conditions set at all never fires.
- Setting the value of a condition to `0` counts as met even without an increase, so it fires every time a quantity changes.
- The consumption chance (chance) and the equipment (equipment) of the conditions are not looked at. The judgement uses only the amount of the increase, and the elements used in the conditions never decrease either.
- The reward is received automatically every time the conditions are met, and it fires over and over any number of times. Unlike a task it is not one-off, and no operation is needed to receive it. A negative quantity can be set as well.
- Unlike a task or a purchase, the limit on the number of kinds of items you can hold is not checked, so new items may increase beyond the capacity.
- An increase from a reward is treated as a change as well, so when the reward of one changed event meets the conditions of another changed event, that one fires next.
- It is not shown on the screen of the player at all. It does not appear in the list of missions, and no achievement message is shown either.

!> Do not set the reward of a changed event so that it meets its own conditions. It will never stop firing and the game will come to a halt. An example is an event whose conditions are met when item A increases by one and whose reward hands over one of item A.
- [_unique_](en/editor/unique)
___

## [_Information_](en/editor/information)
___

## Category
The ID of the category the changed event belongs to (it is used only for classification because nothing is shown on the screen)
- Because nothing is shown on the screen of the player, this setting has no effect on the appearance.
___

## Timing
The timing at which the changed event fires (fixed to `changed`)
- It is fixed to `changed` and cannot be edited.
- It is checked at every timing where a quantity changes, and it fires again every time the conditions are met.
___

## Initial Display State
It has virtually no effect because nothing is shown on the screen
- A changed event is not shown on the screen of the player, so this setting is not used.
___

## [_Requirement_](en/editor/requirement)
___

## Group Totalling
Treats the id in the conditions as a group ID and judges by the total amount of the increase of the elements that belong to it
- When it is enabled, the id you set in the conditions (requirements) is treated as the ID of a group directly under the world.
- The amounts of the increase of every category, every action and every item that belongs to that group are added up for the judgement.
- Unlike the group totalling of a task, the amount of the increase of an element that is not unlocked yet is included in the total as well.
- When it is disabled, the id in the conditions is treated as the ID of an individual category, action or item, as before.
- [_group_](en/editor/group)
___

## [_Acquisition_](en/editor/acquisition)
___

## Changed Event Group
The display group classification for internal management (virtually unused because nothing is shown on the screen)
- A changed event is not shown on the screen of the player, so this setting has no effect on the appearance.

# Requirement
The settings for the conditions needed to use or show an element
- These are the conditions you set on each element: a category, an action, an item, and an event.
- Unless every condition you set is met, the operation shown in the table cannot be done.
- Depending on the unlock setting (unlocked) of the element, the element itself is not shown on the screen until the conditions are met.

|Where it is set|What cannot be done unless the conditions are met|
|-|-|
|Category|Performing every action in the category, and operating its items|
|Action|Performing the action|
|Item|Operating the item (equipping and so on)|
|Event|Achieving a task, and triggering a changed event or a fixed event|
- [_type_](en/editor/type)
___

## Type
The kind of element referred to as the condition

|Type|The value that is referred to|
|-|-|
|Category|The level of the category|
|Action|The number of times the action has been performed|
|Item|The number of the item owned|
___

## The ID of the element
The ID of the element referred to as the condition
- Set the ID of the category, action, or item referred to as the condition.
- When group totalling (requiringGroup) is enabled on an event, it is treated as the ID of a group rather than of an individual element.
___

## Value
The number the condition needs
- The condition is met when it is at or above the value you specify.
- Set it as an integer of 0 or more. The default value is `1`.
___

## Consumption Chance [0-1]
The chance that the item is consumed (0 to 1, works only when the type is an item)
- This is the chance of consuming the item when the conditions are met and the action is performed.
- `1` always consumes it, `0.5` consumes it with a 50% chance, and `0` does not consume it.
- The default value is `1` (always consumed). On the conditions of an event (a task, a changed event, or a fixed event), however, the default value is `0` (not consumed) so that what you hold does not decrease when you achieve it.
- With `0` the stock is not reduced, so you can perform the action as many times as you like as long as the number owned reaches the value of the condition. Use it when you want the condition to be only that the item is equipped.
- It does not work when the type is anything other than an item.
___

## Equipment
Whether the item has to be equipped for the condition (works only when the type is an item)
- When it is enabled, the condition needs the item not only to be owned but also to be equipped.
- Whether it is equipped is judged by the equipment of the category the item belongs to.
- It does not work when the type is anything other than an item.
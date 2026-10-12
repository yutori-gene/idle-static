
# Acquisition
The settings for gaining items and category levels
- Set what is gained.
- Besides items, you can change the level of a category and the number of times an action has been performed.
- You can set the chance of gaining it.

|Type|What is gained|
|-|-|
|Category|Level|
|Action|The number of times performed|
|Item|The number owned|
- [_type_](en/editor/type)
___

## Type
The kind of element that is gained

|Type|What is gained|
|-|-|
|Category|Level (the value you set is added as it is)|
|Action|The number of times performed|
|Item|The number owned|
___

## The ID of the element
The ID that identifies the element to gain
___

## Value
The number that is gained
- Setting a negative value decreases the number owned, the number of times performed, or the level. It never goes below 0, though.
- When a maximum owned count (maximum) is set on the item, the number owned does not grow beyond that value.
- When the type is a category, the value you set is added to the level as it is (1 for one level). The usual way is to adjust it with the experience setting of the action. Unless you have a special purpose, this setting is not needed.
- The level of a category never goes below 0, and it never goes over `maxCategoryLevels` in general (the maximum level of a category).
- Set the value as an integer.
___

## Chance [-1 to 1]
The chance that the gain succeeds (a negative value is evaluated only on failure)
- Set the chance of gaining it as a decimal from -1 to 1. The absolute value is used to judge the chance.
- When the value is positive it is evaluated only when the action succeeds: `1` always gains it, and `0.5` gains it with a 50% chance.
- When the value is negative it is evaluated only when the action fails: `-1` always gains it, and `-0.5` gains it with a 50% chance.
- With `0` it is gained neither on success nor on failure.
- The default value is `1` (always gained on success).
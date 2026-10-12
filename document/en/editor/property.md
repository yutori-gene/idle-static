
# Property
The settings for the effects an item has
- These are the effect fields you can set on an item.
- An item whose equipment type is `necessary` or `consumable` applies its effect only while it is equipped. `unnecessary` applies its effect just by being owned, and the size of the effect is proportional to the number owned (twice as much if you own two).
- Because the number owned is itself the multiplier of an `unnecessary` effect, `maximum` (the maximum number owned) becomes the ceiling of the effect. When you balance it, set it together with `maximum`.
- The value of every field is calculated as something that adjusts the level gap between the level of the player and the level of the action.
- For example, when the attack value is 10, the attack is calculated as if the level of the player were 10 higher than the level of the action. A negative value works the other way around.
- How much the level gap matters is decided by `propertyRatio` in general (2 by default), and it changes by that multiplier for every 10 of level gap.
- When `numeric` of the category is disabled, the real level gap is treated as 0, so the value you set here becomes the level gap as it is.
- A field that works by division, such as the required time and the damage taken, tops out at 100 times (down to one hundredth for the required time).
- For an item that has to be equipped, only the one equipped in each equipment group takes effect.
- An item whose owned count is 0 produces no effect, whatever its equipment type.
- attack, defence, accuracy, evasion, and restore work only on actions of the `stamina` type.

|Property|Details of the effect|
|-|-|
|speed|Shortens the required time of the action. The required time changes in inverse proportion to the level gap (the multiplier works at half strength).|
|chance|Changes the success chance of the action. The multiplier applies to the ratio of success to failure, so it never goes over `100`%.|
|experience|Changes the experience gained. It increases in proportion to the level gap (the calculation is reversed: the higher the level of the action, the more you get).|
|attack|Changes the stamina damage dealt to the opponent. (stamina actions only)|
|defence|Reduces the stamina damage taken from the opponent (the multiplier works at half strength). (stamina actions only)|
|accuracy|Lowers the miss rate of the attack. (stamina actions only)|
|evasion|Changes the rate of evading the attack of the opponent (the multiplier works at half strength). (stamina actions only)|
|restore|Changes the amount of stamina recovered when the action ends. The closer it gets to full, the more slowly it grows. (stamina actions only)|
___

## Category
Which category the property applies to
- Set the ID of the category this property applies to.
- Setting `*` applies it to every category.
- When it is left blank, it applies to the category the item belongs to.
- Setting the ID of another category makes the effect reach the actions of that category. It does not matter which category the item itself is in.
___

## Attack [Level Gap]
The correction to the stamina damage dealt to the opponent (works on stamina actions only)
- The attack damage is calculated as if the level of the player were higher than the level of the action by this value.
___

## Defence [Level Gap]
The correction to the stamina damage taken from the opponent (works on stamina actions only)
- The damage taken is calculated as if the level of the player were higher than the level of the action by this value. The higher the value, the more the damage taken is reduced.
___

## Accuracy [Level Gap]
The correction to the miss rate of the attack (works on stamina actions only)
- The miss rate is calculated as if the level of the player were higher than the level of the action by this value. The higher the value, the lower the miss rate.
___

## Evasion [Level Gap]
The correction to the rate of evading the attack of the opponent (works on stamina actions only)
- The evasion rate is calculated as if the level of the player were higher than the level of the action by this value. The higher the value, the easier it is to evade the attack of the opponent.
___

## Recovery [Level Gap]
The correction to the amount of stamina recovered (works on stamina actions only)
- The amount of stamina recovered is calculated as if the level of the player were higher than the level of the action by this value.
___

## Speed [Level Gap]
The correction to the required time of the action
- The required time is calculated as if the level of the player were higher than the level of the action by this value. The higher the value, the more the required time is shortened.
___

## Success Rate [Level Gap]
The correction to the success chance of the action
- The success chance of the action is calculated as if the level of the player were higher than the level of the action by this value. The higher the value, the more the success chance rises.
___

## Experience [Level Gap]
The correction to the experience gained
- The experience is calculated as if the level of the player were lower than the level of the action by this value (because the calculation is reversed, the higher the level of the action, the more experience you get).
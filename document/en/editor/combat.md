
# Combat Values
The settings for the combat corrections on actions of the stamina type
- These are corrections that work only on actions of the `stamina` type.
- Each value is calculated as an extra correction to the level gap between the player and the action.
- For example, when the attack value is 10, the attack damage is calculated as if the level of the player were 10 higher than the level of the action. A negative value is a correction in the opposite direction.
- Depending on where you set it, the value belongs either to the player side or to the opponent side.
- A value on the opponent side works so as to cancel out the field opposite to it. The defence of the opponent cancels out the attack of the player, the attack of the opponent cancels out the defence of the player, the evasion of the opponent cancels out the accuracy of the player, and the accuracy of the opponent cancels out the evasion of the player.
- Recovery alone cancels out against the same field, and the higher the recovery of the opponent, the less the player recovers.

|Where it is set|Which side the value belongs to|
|-|-|
|`defaultCombat` in general|The baseline on the player side. It is the starting point shared by every `stamina` action|
|The combat values of the action|Values on the opponent side. Seen from the player they work as corrections in the opposite direction|
|The combat values of the skill|Values for the side that has the skill. The skills of your own side are added to the player, and the skills of the opponent to the opponent side|
___

## Attack [Level Gap]
The level gap correction to the stamina damage dealt to the opponent
- The higher the value on the player side, the more damage is dealt to the opponent.
- A value set on an action or on a skill of the opponent becomes the attack of the opponent side, and the higher it is, the more damage the player takes.
___

## Defence [Level Gap]
The level gap correction to the stamina damage taken from the opponent
- The higher the value on the player side, the more the damage taken is reduced.
- A value set on an action or on a skill of the opponent becomes the defence of the opponent side, and the higher it is, the less damage the player deals.
___

## Accuracy [Level Gap]
The level gap correction to the miss rate of the attack
- The higher the value on the player side, the lower the miss rate of the attack.
- A value set on an action or on a skill of the opponent becomes the accuracy of the opponent side, and the higher it is, the harder it is for the player to evade the attack of the opponent.
___

## Evasion [Level Gap]
The level gap correction to the rate of evading the attack of the opponent
- The higher the value on the player side, the easier it is to evade the attack of the opponent.
- A value set on an action or on a skill of the opponent becomes the evasion of the opponent side, and the higher it is, the harder it is for the attack of the player to land.
___

## Recovery [Level Gap]
The level gap correction to the amount of stamina recovered
- The higher the value on the player side, the more stamina is recovered after the battle.
- A value set on an action or on a skill of the opponent becomes the recovery of the opponent side, and the higher it is, the less the player recovers.
- Recovery alone, unlike the other fields, cancels out against the same field.
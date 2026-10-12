
# General
Basic game settings such as the language and the level settings
___

## Language
The language in which you create the world
- Sets which language you are writing the name and the description of the world in. It is the language that the translations are based on.
- It is also the language shown first when a player starts the game.
- When translations is disabled, the player cannot switch away from this language.
- It is a separate setting from the display language of the world editor itself. You choose the display language of the editor when you open the editor.
- [_translation_](en/editor/translation)
___

## Translation
Whether to prepare translations for multiple languages
- When it is enabled, players can switch to whichever language they like and play in it.
- When it is disabled, it is fixed to the language chosen in language, and the switching operation itself is not available.
- When you enable it, you need to prepare the translation data for each language. The published package includes the translation data.
- What switches are the names and the descriptions defined in the world. The translations of the common wording of the screen (the presets) are always included regardless of this setting.
- [_translation_](en/editor/translation)
- [_preset_](en/editor/preset)
___

## Maximum Offline Time [Hours]
The time limit on the offline progress
- Sets how many hours at most the progress while offline runs for.
- For example, when you set 6 hours, the process of returning from offline is handled up to 6 hours, and even when you return from offline after a longer time away, the offline time is treated as 6 hours.
- When you set 0 hours, no process at all is handled on returning from offline.
- The maximum value is 24 hours.
- [_category_](en/editor/category)
___

## Maximum Category Level
The level cap of each category
- Sets the cap on the level of each category. The default value is `100`.
- Even when experience is gained, the level stops at this value and the excess is discarded. The same applies when a reward adds levels directly.
- When the level in the save data is over the cap, it is trimmed down to the cap on loading.
- The level bar and the progress rate in the statistics are shown with this value as the denominator.
- A category whose numeric is disabled does not gain levels, so this value is not related to it.
- [_category_](en/editor/category)
___

## Currency
The settings of the currency (coins) used in the game
- Sets the currency used in the game. At least one is required.
- You can define several currencies, and you set each of them as information (ID, name, icon, colour, and so on).
- Currencies are used for buying and selling items and for expanding the capacity and the queue.
- The first currency is treated as the main currency, and it is used when no currency ID (`coinId`) is specified for an item, the capacity, or the queue, or when an ID that is not in the list of currencies is specified.
- A currency is treated as a kind of item. In requirements and rewards, refer to the ID set here as an item. It does not belong to a category, and it is not subject to equipping or trading.
- [_information_](en/editor/information)
- [_item_](en/editor/item)
___

## Capacity
The capacity settings of the inventory
- Manages the cap on the number of kinds of items a player can hold.
- It is managed by the number of kinds of items held, not by the number owned of each item.
- Setting `initialCount` to 0 makes the capacity unlimited, and buying capacity also becomes unavailable.
- When you refer to the capacity item in requirements or rewards, use the ID set here or `capacity`.
- [_item_](en/editor/item)
___

### [_Capacity Information_](en/editor/information)
___

### Initial Capacity [Units]
The initial inventory capacity (the number of kinds of items that can be held)
- It is the initial capacity at the start of the game (the number of kinds of items that can be held). The default value is `10`.
- Setting it to `0` makes the capacity unlimited, and at the same time buying capacity becomes unavailable.
___

### Base Price of the Capacity [Coins]
The initial price for increasing the capacity by one
- It is the base price (in coins) for increasing the inventory capacity by one slot. Set it as an integer of `1` or more.
- The actual price is calculated as "base price × increasing rate^number of purchases made".
- For example, with a base price of 100 and an increasing rate of 1.2, the first time is 100 coins, the second time 120 coins, and the third time 144 coins.
___

### Increasing Rate of the Capacity [Multiplier]
The increasing rate of the cost of expanding the capacity
- It is the multiplier for how much the cost of expanding the capacity increases at the nth purchase. The default value is `1.2`.
- With `1.0` the price is always the same, and with `1.2` it becomes 20% more expensive with every purchase.
- Formula: base price × increasing rate^number of purchases made

|Increasing Rate|1st unit|5th unit|10th unit|100th unit|1000th unit|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.05|x1.00|x1.22|x1.55|x125.24|x1.5×10²¹|
|1.10|x1.00|x1.46|x2.36|x1.3×10⁴|x2.2×10⁴¹|
|1.20|x1.00|x2.07|x5.16|x6.9×10⁷|x1.3×10⁷⁹|
|1.50|x1.00|x5.06|x38.44|x2.7×10¹⁷|x8.2×10¹⁷⁵|
___

### Currency ID of the Capacity
The ID of the currency used for expanding the capacity
- Specifies the ID of the currency (coins) used for the expansion price of the inventory capacity.
- When it is left blank, or when an ID that is not in the list of currencies is specified, the main currency (the first of coins) is used.
___

### Purchase Limit of the Capacity [Times]
The maximum number of times the capacity can be bought
- It is the cap on the number of times the capacity can be bought with a currency.
- Setting it to `0` allows unlimited purchases.
- Setting it to `-1` makes it impossible to buy.
- An increase of the capacity by a reward is not subject to this cap.
___

## Queue
The settings of the number of slots for executing actions in succession (the queue)
- Manages the number of slots in the queue for executing actions in succession.
- The queue includes the action being executed, and the action at its head is the one executed. When the slots are `1`, there is only the one being executed and no waiting can be held.
- As with the capacity, the number of slots can be bought with a currency, and it can also be increased by specifying the queue item as a reward of an action or an event.
- When you refer to the queue item in requirements or rewards, use the ID set here or `queue`.
- [_item_](en/editor/item)
___

### [_Queue Information_](en/editor/information)
___

### Initial Queue [Slots]
The number of slots for successive execution at the start of the game
- It is the number of slots in the queue at the start of the game. The default value is `1`.
- The minimum value is `1` (because the one being executed uses one slot; there is no `0` = unlimited handling as there is for the capacity).
___

### Base Price of the Queue [Coins]
The initial price for increasing the slots by one
- It is the base price (in coins) for increasing the slots for successive execution by one. Set it as an integer of `1` or more.
- The actual price is calculated as "base price × increasing rate^number of purchases made".
- For example, with a base price of 100 and an increasing rate of 1.2, the first time is 100 coins, the second time 120 coins, and the third time 144 coins.
___

### Increasing Rate of the Queue [Multiplier]
The increasing rate of the cost of expanding the slots
- It is the multiplier for how much the cost of expanding the slots increases at the nth purchase. The default value is `1.2`.
- With `1.0` the price is always the same, and with `1.2` it becomes 20% more expensive with every purchase.
- Formula: base price × increasing rate^number of purchases made
- The way it increases is the same as the increasing rate of the capacity. For a guide to the multiplier, see the table for the capacity.
___

### Currency ID of the Queue
The ID of the currency used for expanding the slots
- Specifies the ID of the currency (coins) used for the expansion price of the slots for successive execution.
- When it is left blank, or when an ID that is not in the list of currencies is specified, the main currency (the first of coins) is used.
___

### Purchase Limit of the Queue [Times]
The maximum number of times the slots can be bought
- It is the cap on the number of times the slots for successive execution can be bought with a currency.
- Setting it to `0` allows unlimited purchases.
- Setting it to `-1` makes it impossible to buy.
- An increase of the slots by a reward is not subject to this cap.
___

## Experience Growth Rate [Multiplier]
The increasing rate of the difficulty of levelling up
- It is the growth rate of the experience needed to reach the next level as the level of a category rises. The default value is `1.05`, and a value below `1` cannot be set.
- Making this value larger raises the difficulty. Setting it to `1` keeps the experience needed the same at every level.
- The experience needed to reach the next level is (experience growth rate)^(current level-1). Levels are counted with the decimals discarded.
- The experience gained after the cap (the maximum category level) is reached is discarded.

|Experience Growth Rate|Lv.1|Lv.2|Lv.10|Lv.50|Lv.99|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.02|x1.00|x1.02|x1.20|x2.64|x6.96|
|1.05|x1.00|x1.05|x1.55|x10.92|x119.28|
|1.10|x1.00|x1.10|x2.36|x106.72|x1.1×10⁴|
|1.20|x1.00|x1.20|x5.16|x7583.70|x5.8×10⁷|
- [_category_](en/editor/category)
___

## Action Level Limit
Requiring the level of the category of the attribute in order to execute an action
- When it is enabled, the requirement "the level of the category of the attribute is at or above the level of that action" is added automatically at the head of the requirements of each action.
- When no attribute is set, the category it belongs to is used.
- When the numeric of the category of the attribute is disabled, it does not gain levels, so nothing is added.
- The added requirement is written in when the world is loaded, so it is shown on the screen of the player just like an ordinary requirement.
- [_action_](en/editor/action)
- [_category_](en/editor/category)
- [_requirement_](en/editor/requirement)
___

## Property Ratio [Multiplier]
How many times the properties become for every 10 of level gap
- Sets how many times the properties become for every `10` that the gap between the level of the category and the level of the action widens. The default value is `1.5`, and a value below `1` cannot be set.
- The multiplier is calculated as (property ratio)^(level gap÷10). When the level gap is `0` it is `1` times, and the value set on the action is used as it is.
- Attack and experience increase by this multiplier, and defence (the damage taken) and speed (the required time) decrease by the same multiplier.
- Accuracy, evasion, success rate, and the amount of recovery are values that stay within `0` to `100`%, so the multiplier applies to the ratio between the side that comes about and the side that does not. `0`% and `100`% do not change, and a value in between never goes over `100`%.
- For defence, evasion, and speed the multiplier works at half strength (a level gap of `20` amounts to a level gap of `10` for the other properties). Defence and evasion apply twice over, to the rate of being hit and to the damage taken, and speed applies to all the other properties as the number of executions, so their effect is weakened to keep the balance.
- A guide is (the experience growth rate) to the power of `6.7`. Above it, levelling up accelerates as the level rises, and below it, levelling up in the later stages takes more time.
- Setting it to `1` removes the influence of the level gap. Making the value larger makes the advantage and the disadvantage from the level gap steeper.

|Property Ratio|Level Gap -20|Level Gap -10|Level Gap 0|Level Gap +10|Level Gap +20|
|-|-|-|-|-|-|
|`1`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|
|`1.5`|`x0.44`|`x0.67`|`x1.00`|`x1.50`|`x2.25`|
|`2`|`x0.25`|`x0.50`|`x1.00`|`x2.00`|`x4.00`|
|`3`|`x0.11`|`x0.33`|`x1.00`|`x3.00`|`x9.00`|
- [_action_](en/editor/action)
- [_property_](en/editor/property)
___

## [_Combat Values_](en/editor/combat)
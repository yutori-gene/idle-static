
# Item
Elements for goods such as equipment and consumables
- These are the elements about owning things such as equipment, consumables and valuables.
- Equipment slots are made by group for each category, and only one of the items in the same slot can be equipped. An item can also be made impossible to equip.
- Because the number owned is itself the progress, an item can also be used like a flag or a counter. If you make it an item that has no effect and cannot be equipped either, it becomes an element that only counts a number.
___

## [_Information_](en/editor/information)
___

## Category
The ID of the category the item belongs to
- Specify the ID of the category this item belongs to. It is lined up in the item list of the category you specify, and the equipment slots are also made for each category.
- When no colour is set on the item itself, it inherits the colour of the category.
- Where the effects of the properties reach can be specified apart from the category it belongs to, so an item of another category can give an effect as well.
- [_category_](en/editor/category)
- [_property_](en/editor/property)
___

## Group
The display group classification of the item
- Apply one of those defined in the groups directly under the world.
- The item list is shown in the order of the groups you set.
- When it is left blank, it is not divided into groups.
- [_group_](en/editor/group)
___

## Initial Unlock State
The initial display and unlock state of the element (it moves up to a higher state automatically once the firing requirements are met)
- secreted: It does not appear in the UI at all until every requirement is met (it does not show up in the hints either, and it is masked in the lists of requirements and rewards as well).
- hidden: While it is referred to by none of the unlocked elements and its requirements are unmet, it is hidden completely (the name is greyed out and it cannot be operated).
- hinted (the default): Only the name is shown in advance, but it cannot be operated until it is unlocked.
- released: It is unlocked and can be operated from the start regardless of the conditions (formerly "shown from the start").
- Once an item has been obtained even once, it stays unlocked regardless of this setting or the conditions.
- Conversely, an item with no conditions set at all is not unlocked until it is obtained, unless you make it `released`. Always set conditions on an item you want to have bought.
___

## Buying Price [Coins]
The purchase price setting of the item
- It is the number of the currency you pay when you buy one of the item. The default value is `-1` (cannot be bought).
- An item that is not unlocked cannot be bought even if a price is set.
- The number you can buy at once is the smaller of the number you can buy with the currency you hold and the remainder up to the maximum number owned.

|Buying price|Handling|
|-|-|
|0|Cannot be bought|
|A value greater than 0|The price at which it can be bought|
|A value smaller than 0 (-1, for example)|Cannot be bought (handled the same as 0)|
___

## Selling Price [Coins]
The selling price setting of the item
- It is the number of the currency you receive when you sell one of the item. The default value is `0` (cannot be sold).
- The currency you receive is the one specified by the trading currency ID, the same as when you buy.
- It is never decided automatically from the buying price, so always set a value when you want it to be sellable.
- A negative value cannot be set.

|Selling price|Handling|
|-|-|
|0|Cannot be sold|
|A value greater than 0|Can be sold at that price|
___

## Maximum Number Owned [Units]
The limit on the maximum number owned of the item
- When it is 0, there is no limit on the number that can be owned. The default value is `0`.
- When it is 1 or more, only up to that number can be owned. Once the limit is reached, the number owned does not increase even if more is obtained.
- It becomes the limit on the number that can be bought as well.
- When the number owned in the save data is above the limit, it is reduced to the limit at load time.
___

## Equipment Type
The type setting about the equipping, the effect and the consumption of the item
- For an item of `necessary` or `consumable`, its group automatically becomes an equipment slot of the category.
- Only one item within the same group can be equipped. Equipping a new item automatically unequips the existing equipment of the same group.
- The order of the equipment slots follows the order of definition in the list of groups of the world.
- `unnecessary` takes effect whether or not it is equipped, and the size of the effect is proportional to the number owned (no effect at 0, n times with n of them).
- `consumable` is consumed only when the properties of that item affect the action performed, one per action. It does not decrease on an action its effect does not reach.
- An item that has been consumed down to 0 is unequipped automatically.
- To equip it, both the conditions of that item and the conditions of the category have to be met.

|Value|Equipping|Taking effect|Consumption|Example|
|-|-|-|-|-|
|`necessary`|Required|Only while equipped (for one)|No|Equipment such as swords and armour|
|`consumable`|Required|Only while equipped (for one)|Consumed when the action is performed|Items that are consumed to gain an effect, such as potions|
|`unnecessary`|Not required|Always while owned (proportional to the number owned)|No|Passive items that have an effect just by being held|
|`impossible`|Not possible|None|No|Items with no effect, such as materials and junk|
___

## [_Requirement_](en/editor/requirement)
___

## [_Property_](en/editor/property)
___

## Trading Currency ID
The ID of the currency used for trading this item
- Specify the ID of the currency (coins) used in common for the buying price and the selling price.
- When it is left blank, or when an ID that is not in the list of currencies is specified, the main currency (the first of coins) is used.
___

## [_Skill_](en/editor/skill)
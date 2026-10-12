
# Skill
A special effect that is drawn each turn of a combat and fires
- It is a special effect that is drawn each turn and fires in a combat (`stamina`) action. It does not fire in an action of any other type.
- The substance is defined here, and it is referred to by ID from `skill` of an item (your own side) and `skills` of an action (the opponent side).
- The candidates on your own side are the skills referred to by the items that are taking effect at that moment (`unnecessary` while owned, `necessary` and `consumable` while equipped). Unequipping an item removes its skill from the candidates as well.
- Every turn the candidates are shuffled on your own side and on the opponent side, the activation chance is judged from the top, and only the first one that succeeds fires. If none of them succeeds, there is no skill on that turn.
- When the same skill is referred to from several items or actions, it gains that many more chances in the draw, so it fires more easily.
- [_item_](en/editor/item)
- [_action_](en/editor/action)
___

## [_Information_](en/editor/information)
___

## Activation Chance [0-1]
The chance that this skill fires on that turn
- Whether it fires is judged at this chance on every turn. `1` always succeeds and `0` never fires. The default value is `1`.
- The judgement proceeds in order from the top of the shuffled candidates, and only the first skill that succeeds fires. So when there are several candidates, the rate at which it actually fires is lower than this value.
- When showing the explanation is enabled, this value affects how often the explanation appears as well. The more easily a skill fires, the less its explanation is repeated.
___

## [_Combat Values_](en/editor/combat)
___

## Showing the Explanation
Whether to show the explanation in a toast when it fires
- It is the flag for whether to show the explanation in a toast when this skill fires.
- When it is on, it is shown at a chance of (100% − the activation chance) ÷ 2 every time it fires. If the activation chance is 40%, that is 30%.
- When it is off, it is not shown.
- When the explanation is blank, it is not shown even if you turn it on.
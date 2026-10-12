
# Fixed Event
The messages and rewards that activate at set moments
- It activates at set moments, such as when the world is opened for the first time or when a game over occurs, and opens a dedicated screen.
- One is prepared for each moment, and none can be added or deleted. Leave the moments you do not use blank.
- They are not shown in the missions or in the task list. Set what becomes achieved when its requirements are met with a task.
- When the moment comes about, the event activates and opens a dedicated screen to show its content.
- The reward is obtained automatically at the same time as the activation. There is no claiming operation and no ribbon as there is for a task, and the cap on the kinds of items that can be held is not checked either.
- When requirements are set, the reward is obtained only when those requirements were met at the time of activation. When none are set, it is obtained on every activation.
- The requirements are only looked at to see whether they are met, so items are not reduced even when a consumption chance is set.
- On activation you can change the level of a category, the number of executions of an action, and the number of items held. By setting a minus quantity, you can also use it in ways such as making the player lose their belongings on a game over.
- When you leave the name, the description, and the icon blank, the default wording and icon built into the player are used.

|Timing|Activation Requirement|Repetition|
|-|-|-|
|`comebacked`|When you return from offline after 1 second or more and at least one action was completed while you were away|Repeatedly|
|`gameovered`|When the stamina of the player runs out in battle|Repeatedly|
|`welcomed`|When this world is started for the first time|Only once|
|`completed`|When the levels of all categories reach the maximum value (maxCategoryLevels)|Only once|
|`obtained`|When an action of the single kind (a treasure chest and the like) is completed and checked|Repeatedly|
- [_task_](en/editor/task)
___

## On Return
Activates when you return from offline
- It activates when you return from offline after 1 second or more and at least one action was completed while you were away. It does not activate when not a single execution has finished.
- It is shown together with the summary of the progress while you were away.
___

### [_Information（On Return）_](en/editor/information)
___

### Category（On Return）
Not used in an event
- They are not shown in the missions or in the task list, so the category they belong to is not specified.
- The input field is not shown in the editor.
___

### Timing（On Return）
The timing at which the event fires (fixed)
- It is fixed as `comebacked` and cannot be edited.
- It activates any number of times, every time you return.
___

### Initial Display State（On Return）
The initial display state of the event icon (the firing is decided by the timing, and this setting does not fire it)
- The firing conditions of an event are decided by the timing, and this field affects only the look of the icon.
- secreted: The icon is not shown until every requirement is met (the firing itself happens at its timing).
- hidden and hinted: The icon is shown with a slash across it as not yet unlocked.
- released: The slash disappears and it is shown as already unlocked.
___

### [_Requirement（On Return）_](en/editor/requirement)
___

### Group Totalling（On Return）
Treats the id in the conditions as a group ID and judges by the total value of the elements that belong to it
- When it is enabled, the id you set in the conditions (requirements) is treated as the ID of a group directly under the world.
- A condition whose type is a category is judged by the total level of every category that belongs to that group.
- A condition whose type is an action is judged by the total number of times every action that belongs to that group has been performed.
- A condition whose type is an item is judged by the total number owned of every item that belongs to that group.
- An element that is not unlocked (anything other than released) is not included in the total.
- The consumption chance (chance) and the equipment condition (equipment) of an item are ignored, and the number owned is never consumed. They are used only for the judgement.
- When it is disabled, the id in the conditions is treated as the ID of an individual category, action or item, as before.
- [_group_](en/editor/group)
___

### [_Acquisition（On Return）_](en/editor/acquisition)
___

### Task Group（On Return）
Not used in an event
- They are not shown in the missions or in the task list, so the group is not specified.
- The input field is not shown in the editor.
___

## On Game Over
Activates when the stamina runs out in battle
- It activates when the stamina of the player runs out in battle.
- At the same time, all the actions being executed stop and all the waiting reservations are discarded.
- By setting a minus quantity for the reward, you can give the game over a price to pay.
___

### [_Information（On Game Over）_](en/editor/information)
___

### Category（On Game Over）
Not used in an event
- They are not shown in the missions or in the task list, so the category they belong to is not specified.
- The input field is not shown in the editor.
___

### Timing（On Game Over）
The timing at which the event fires (fixed)
- It is fixed as `gameovered` and cannot be edited.
- It activates any number of times, every time a game over occurs.
___

### Initial Display State（On Game Over）
The initial display state of the event icon (the firing is decided by the timing, and this setting does not fire it)
- The firing conditions of an event are decided by the timing, and this field affects only the look of the icon.
- secreted: The icon is not shown until every requirement is met (the firing itself happens at its timing).
- hidden and hinted: The icon is shown with a slash across it as not yet unlocked.
- released: The slash disappears and it is shown as already unlocked.
___

### [_Requirement（On Game Over）_](en/editor/requirement)
___

### Group Totalling（On Game Over）
Treats the id in the conditions as a group ID and judges by the total value of the elements that belong to it
- When it is enabled, the id you set in the conditions (requirements) is treated as the ID of a group directly under the world.
- A condition whose type is a category is judged by the total level of every category that belongs to that group.
- A condition whose type is an action is judged by the total number of times every action that belongs to that group has been performed.
- A condition whose type is an item is judged by the total number owned of every item that belongs to that group.
- An element that is not unlocked (anything other than released) is not included in the total.
- The consumption chance (chance) and the equipment condition (equipment) of an item are ignored, and the number owned is never consumed. They are used only for the judgement.
- When it is disabled, the id in the conditions is treated as the ID of an individual category, action or item, as before.
- [_group_](en/editor/group)
___

### [_Acquisition（On Game Over）_](en/editor/acquisition)
___

### Task Group（On Game Over）
Not used in an event
- They are not shown in the missions or in the task list, so the group is not specified.
- The input field is not shown in the editor.
___

## On First Start
Activates when the world is opened for the first time
- It activates when this world is started for the first time.
- Use it to explain the setting of the world and to hand over the starting supplies given at the beginning.
___

### [_Information（On First Start）_](en/editor/information)
___

### Category（On First Start）
Not used in an event
- They are not shown in the missions or in the task list, so the category they belong to is not specified.
- The input field is not shown in the editor.
___

### Timing（On First Start）
The timing at which the event fires (fixed)
- It is fixed as `welcomed` and cannot be edited.
- It activates only once, at the first start.
___

### Initial Display State（On First Start）
The initial display state of the event icon (the firing is decided by the timing, and this setting does not fire it)
- The firing conditions of an event are decided by the timing, and this field affects only the look of the icon.
- secreted: The icon is not shown until every requirement is met (the firing itself happens at its timing).
- hidden and hinted: The icon is shown with a slash across it as not yet unlocked.
- released: The slash disappears and it is shown as already unlocked.
___

### [_Requirement（On First Start）_](en/editor/requirement)
___

### Group Totalling（On First Start）
Treats the id in the conditions as a group ID and judges by the total value of the elements that belong to it
- When it is enabled, the id you set in the conditions (requirements) is treated as the ID of a group directly under the world.
- A condition whose type is a category is judged by the total level of every category that belongs to that group.
- A condition whose type is an action is judged by the total number of times every action that belongs to that group has been performed.
- A condition whose type is an item is judged by the total number owned of every item that belongs to that group.
- An element that is not unlocked (anything other than released) is not included in the total.
- The consumption chance (chance) and the equipment condition (equipment) of an item are ignored, and the number owned is never consumed. They are used only for the judgement.
- When it is disabled, the id in the conditions is treated as the ID of an individual category, action or item, as before.
- [_group_](en/editor/group)
___

### [_Acquisition（On First Start）_](en/editor/acquisition)
___

### Task Group（On First Start）
Not used in an event
- They are not shown in the missions or in the task list, so the group is not specified.
- The input field is not shown in the editor.
___

## On Completion
Activates when all categories reach the maximum level
- It activates when the levels of all categories reach the maximum value (maxCategoryLevels).
- Categories that are not numeric are excluded from the check. That is why it does not activate in a world without a single numeric category.
___

### [_Information（On Completion）_](en/editor/information)
___

### Category（On Completion）
Not used in an event
- They are not shown in the missions or in the task list, so the category they belong to is not specified.
- The input field is not shown in the editor.
___

### Timing（On Completion）
The timing at which the event fires (fixed)
- It is fixed as `completed` and cannot be edited.
- It activates only once, when the requirements are met.
___

### Initial Display State（On Completion）
The initial display state of the event icon (the firing is decided by the timing, and this setting does not fire it)
- The firing conditions of an event are decided by the timing, and this field affects only the look of the icon.
- secreted: The icon is not shown until every requirement is met (the firing itself happens at its timing).
- hidden and hinted: The icon is shown with a slash across it as not yet unlocked.
- released: The slash disappears and it is shown as already unlocked.
___

### [_Requirement（On Completion）_](en/editor/requirement)
___

### Group Totalling（On Completion）
Treats the id in the conditions as a group ID and judges by the total value of the elements that belong to it
- When it is enabled, the id you set in the conditions (requirements) is treated as the ID of a group directly under the world.
- A condition whose type is a category is judged by the total level of every category that belongs to that group.
- A condition whose type is an action is judged by the total number of times every action that belongs to that group has been performed.
- A condition whose type is an item is judged by the total number owned of every item that belongs to that group.
- An element that is not unlocked (anything other than released) is not included in the total.
- The consumption chance (chance) and the equipment condition (equipment) of an item are ignored, and the number owned is never consumed. They are used only for the judgement.
- When it is disabled, the id in the conditions is treated as the ID of an individual category, action or item, as before.
- [_group_](en/editor/group)
___

### [_Acquisition（On Completion）_](en/editor/acquisition)
___

### Task Group（On Completion）
Not used in an event
- They are not shown in the missions or in the task list, so the group is not specified.
- The input field is not shown in the editor.
___

## On Completing a Single Action
Activates when a single action such as a treasure chest is completed
- It activates when an action of the single kind (a treasure chest and the like) is completed and checked.
- Apart from the reward of the action itself, you can add on the reward set here.
___

### [_Information（On Completing a Single Action）_](en/editor/information)
___

### Category（On Completing a Single Action）
Not used in an event
- They are not shown in the missions or in the task list, so the category they belong to is not specified.
- The input field is not shown in the editor.
___

### Timing（On Completing a Single Action）
The timing at which the event fires (fixed)
- It is fixed as `obtained` and cannot be edited.
- It activates any number of times, every time a single action is completed.
___

### Initial Display State（On Completing a Single Action）
The initial display state of the event icon (the firing is decided by the timing, and this setting does not fire it)
- The firing conditions of an event are decided by the timing, and this field affects only the look of the icon.
- secreted: The icon is not shown until every requirement is met (the firing itself happens at its timing).
- hidden and hinted: The icon is shown with a slash across it as not yet unlocked.
- released: The slash disappears and it is shown as already unlocked.
___

### [_Requirement（On Completing a Single Action）_](en/editor/requirement)
___

### Group Totalling（On Completing a Single Action）
Treats the id in the conditions as a group ID and judges by the total value of the elements that belong to it
- When it is enabled, the id you set in the conditions (requirements) is treated as the ID of a group directly under the world.
- A condition whose type is a category is judged by the total level of every category that belongs to that group.
- A condition whose type is an action is judged by the total number of times every action that belongs to that group has been performed.
- A condition whose type is an item is judged by the total number owned of every item that belongs to that group.
- An element that is not unlocked (anything other than released) is not included in the total.
- The consumption chance (chance) and the equipment condition (equipment) of an item are ignored, and the number owned is never consumed. They are used only for the judgement.
- When it is disabled, the id in the conditions is treated as the ID of an individual category, action or item, as before.
- [_group_](en/editor/group)
___

### [_Acquisition（On Completing a Single Action）_](en/editor/acquisition)
___

### Task Group（On Completing a Single Action）
Not used in an event
- They are not shown in the missions or in the task list, so the group is not specified.
- The input field is not shown in the editor.

# Information
The settings for the basic information of an element (ID, name, explanation, icon, and colour)
- These are the basic information fields shared by every element in a world (a category, an action, an item, a group, an event, a skill, and a preset).
- You set them individually for each element.
___

## Identifier
The unique ID that identifies the element
- This is the ID that identifies each element uniquely.
- It is the string that tells the element apart in the editor.
- For example, which item is gained when an action completes is specified by ID.
- The characters you can use are a combination of letters, hyphens, and digits, from 1 to 100 characters.

!> Once you have distributed the game, do not change an ID you have set. If you change it, it no longer matches the existing game data and the game stops working properly.
___

### The name that is shown
The display name generated automatically from the ID
- When no name is set, the hyphens are replaced with spaces and each word is converted to an upper case first letter and lower case after that, and it is shown as the name.
- Even if the ID contains upper case letters, everything but the first letter is converted to lower case.
- For a language other than English, you have to set the name field individually.
___

#### Example
A real example of converting an ID
- When the ID is `stylish-strong-axe`, the name becomes `Stylish Strong Axe`.
- When the ID is `stylish-STRONG-axe`, it likewise becomes `Stylish Strong Axe`.
___

### No Duplicates
IDs must not be duplicated within the same type
- Because it is used to tell elements apart, do not duplicate it within each of the types: category, action, item, group, event, skill, and preset.
- Events treat tasks, changed events, and fixed events together as a single type, so do not duplicate them among these either.
- The same ID in different types is not a problem.
- A world with duplicates fails with an error in validation.
- [_type_](en/editor/type)
___

## Name
The name of the element that is shown
- This is the name of the element shown in the game.
- You can also enter a language other than English.
- A name that duplicates another element is fine.
- You can enter up to 20 characters.
- When it does not fit the width it is shown in, the part that sticks out is shortened with `…`.
___

### Automatic Conversion from the ID
The feature that generates the name automatically from the ID
- When it is left blank, it is shown automatically based on the ID. See the previous section for details.
___

## Explanation
The detailed explanation of the element
- This is the explanation of the element shown in the game.
- You can also enter a language other than English. Even a long text is shown in full.
- Leave it blank when there is no explanation.
___

## Icon
The setting for the icon that represents the element
- For the icon you can set an image, Iconify, or an emoji.
- Iconify is a service that provides icons of many kinds.
- When you set more than one of these, they are shown in the order of priority of image, Iconify, and emoji.
___

### Image
Using any image file you like
- This is the image that represents the element.
- When it is taken in, it is automatically shrunk to within 60x60 pixels and compressed again.
- It is not needed when you have set Iconify or an emoji.
___

#### File Types
The image file formats that are supported
- The common kinds that a browser can show are available.
- JPEG, PNG, GIF, WebP, SVG, and so on.
- GIF and AVIF are converted to PNG. JPEG and WebP are shrunk while keeping their original format.
- An SVG is embedded as it is without being shrunk, so avoid ones that are large.
___

### Iconify
Using the Iconify icon sets
- This is the icon that represents the element.
- When you have set an image, that is shown with priority.
___

#### How to Find an Icon
How to choose an icon from Iconify
- Search `Iconify` for the icons that can be shown.
- The icon search finds the best icon right away.
- When you choose an icon, the identifier of that icon such as `game-icons:sword-wound` (the kind of icon set `:` the name of the icon) is shown, so paste it into this icon field as it is.
![iconify-selection.png](../../resources/iconify-selection.png)
- [_iconify_](https://icon-sets.iconify.design)
___

### Emoji
Showing an icon with an emoji
- Shows an emoji as the icon.
- Enter a Unicode emoji as it is.
- The emoji installed in the runtime environment is used, so it looks slightly different from user to user.
- With Iconify you can set an emoji that does not depend on the environment
- You can show characters other than emoji, but with more than one character the display may break.
- For example, you enter an emoji such as `🗡️` or `⚔️`.
___

## Colour
The setting for the colour the element is shown in
- As the colour of the element, it applies to the icon of the element and to its background colour.
- You choose it from the colour picker of the editor.
- Black (`#000000`) is treated as the value that means "no colour is set". The initial value of the colour picker is this black as well.
- When you want it to look black, specify a colour shifted slightly, such as `#010101`.
___

### Inheritance from the Parent Element
Taking over the colour setting of the parent element
- An action, item, or event with no colour set takes over the colour of the category it belongs to.
- The hierarchy of inheritance is as follows.
- For an element with a colour set on it individually, that colour takes priority. It is not overwritten even when the category has a colour.
- The basic way to use it is to decide a colour for each category and leave what is below it to inheritance. You set an individual colour when you want to make one particular element stand out.
- When an attribute (attribute) is set on an action, the colour it takes over is not that of the category it belongs to but that of the category specified in the attribute.
- A category itself has nothing to inherit from. When the colour of a category is left black (`#000000`), that category and the elements below it with no colour set are shown in the colour halfway between the bar colour and the text colour of the design.
- Groups, skills, and presets do not inherit, and only the colour set on themselves is used.
```
world (basic.design)
└── category
    ├── action
    ├── item
    └── event
```
- [_type_](en/editor/type)
___

## Copying the Information
Duplicating the information of another element
- Pressing the `Copy Information` button copies the information of another element to this element all at once.
- Choose the type to copy from (category, action, item, group, event, skill, or preset), then enter its ID.
- Every field including the identifier is overwritten. After copying, change the identifier to one that is not duplicated.
- [_type_](en/editor/type)
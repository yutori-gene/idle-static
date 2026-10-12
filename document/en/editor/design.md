
# Design
The look settings of the world, such as the colours and the font
- They are the settings about the display of the world.
- The two colours decided here (the bar colour and the text colour) become the base of the whole screen, and every colour used on the screen, such as the selected row, the heading of a group and the colours of affirmation and negation, is made from them.
- The background image alone can be swapped per category, and in that case the setting on the category side takes priority.
___

## Bar Colour
The colour that becomes the background of the bar
- It is used as the background colour of the bar.
- Because it is also the colour that becomes the base of the whole screen, the colour of the selected row is made from this colour too.
- The swatches of elements with no colour set and the background of the toasts become the middle colour between this colour and the text colour.
___

## Text Colour
The colour of the text and the background
- It is used as the colour of the text.
- The gradient of the background is also made from this colour. When a background image is set, the same gradient is thinned and laid over the image.
- Taking a large difference in brightness from the bar colour makes the text easier to read. In a world where the difference is small, the swatches of elements with no colour set also become harder to tell apart.
___

## Shadow Colour
The colour of the shadow of the bar
- It is used as the colour of the shadow cast on the bars and the header.
- Making it a darker colour than the bar colour gives a natural shadow.
___

## Background Image
The background image of the whole game
- It sets the background image of the game.
- When no image is set, the background becomes a gradient based on the text colour.
- The image is automatically reduced so that it fits within 256×256 pixels. GIF and AVIF are converted to PNG.
- When a background image is set on a category, the image on the category side takes priority on the screen of that category.
- The image you set can be deleted with the Delete Image button.
- [_category_](en/editor/category)
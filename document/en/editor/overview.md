
# Overview
The basic information of the world and the information of the author
- They are the fields that explain the content of the world.
- Set them so that they are easy to understand when a user chooses the world.
- Apart from the URL, these settings have no effect on the progress of the game.
___

## [_Information_](en/editor/information)
___

## Version
The version number of the world
- Enter a number of `0` or more (a whole number or a decimal). The default value is `0`.
- Generally the whole-number part represents the major version and the decimal part the minor version.
- The version of the development (development) is the version of the editor, so it is a different thing.
___

## Author Name
The name of the author of the world
- Enter a handle name or a nickname.
- It must be from 3 to 20 characters, and only single-byte letters and digits, spaces and `!` `?` `.` `,` `-` can be used.
___

## Homepage
The URL of the website of the author
- If you have your own homepage or social media, enter its URL.
- The player can check this URL through the link.
- If there is none, leave it blank. The initial value is `https://`.
___

## URL
The URL of the game
- Enter the URL where the game of this world is placed.
- Enter the URL of a top page such as index.html, including the domain.
- It is a field for recording where the world was placed. When the place to put it is not decided, leave it blank.
- A published world works as a PWA. A PWA is a feature that lets it be installed and work like an app you can play offline as well.
- The settings of the PWA are made with relative paths, so it works as it is wherever it is placed, regardless of the value of this field.
___

## Estimated Playing Time
The rough time until the world is played through
- It is the estimated playing time needed to complete playing the world.
- It can be checked as a guide when the player plays.
- It is only a reference time, and there is no clear definition of what counts as completing the world.
___

### Value
The number of the playing time
- Set it as a whole number of `1` or more. The default value is `1`.
___

### Unit
The unit of time (hours, minutes and so on)
- Choose from seconds, minutes, hours, days, years, centuries and infinite. The default value is days.
- Infinite is used for a world with no end.
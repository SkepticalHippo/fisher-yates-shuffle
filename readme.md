# Fisher-Yates Shuffle

A JavaScript implementation of the Fisher-Yates Shuffle algorithm.

## Installation

`npm install fisher-yates-shuffle --save`

## Usage

```js
const shuffle = require('fisher-yates-shuffe');
const deck = ['a', 'b', 'c', 'd'];
const shuffledDeck = shuffle(deck);
```

## Notes

* This library utilizes the pseudo-random `Math.random()` JS function.
* It clones the given `Array`, so if it's rather large, make sure you have enough memory allocated.
* This library is still rather naïve and could be improved. If you have any suggestions, please open up an _Issue_ or a _Pull Request_.
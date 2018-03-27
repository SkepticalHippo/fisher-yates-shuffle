# Fisher-Yates Shuffle [![Build Status](https://travis-ci.org/SkepticalHippo/fisher-yates-shuffle.svg?branch=master)](https://travis-ci.org/SkepticalHippo/fisher-yates-shuffle)

A JavaScript implementation of the Fisher-Yates Shuffle algorithm.

## Requirements

* NodeJS 6+

## Installation

`npm install fisher-yates-shuffle --save`

## Usage

```js
const shuffle = require('fisher-yates-shuffle');
const deck = ['a', 'b', 'c', 'd'];
const shuffledDeck = shuffle(deck);
```

```js
const randomizer = function() {
    return 0.321
};
const shuffle = require('fisher-yates-shuffe');
const deck = ['a', 'b', 'c', 'd'];
const shuffledDeck = shuffle(deck, randomizer);
```

## Notes

* It clones the given `Array`, so if it's rather large, make sure you have enough memory allocated.
* This library is still rather naïve and could be improved. If you have any suggestions, please open up an _Issue_ or a _Pull Request_.
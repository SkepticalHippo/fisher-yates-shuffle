const assert = require('chai').assert;
const shuffle = require('../index');

describe('shuffle()', function() {
    it('should return a sorted array', function() {
        const deck = Array.apply(null, {length: 52}).map(function(value, index) {
            return index;
        });

        const shuffledDeck = shuffle(deck);

        assert.notDeepEqual(deck, shuffledDeck);
        assert.equal(deck.length, shuffledDeck.length);
    });
});
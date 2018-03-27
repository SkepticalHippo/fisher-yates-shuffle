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

    it('should accept a randomizer function', function() {
        const deck = Array.apply(null, {length: 52}).map(function(value, index) {
            return index;
        });

        const random = function() {
            return 0.323;
        };

        const shuffledDeck = shuffle(deck, random);

        assert.notDeepEqual(deck, shuffledDeck);
        assert.equal(deck.length, shuffledDeck.length);
    });

    it('should not lose or duplicate elements', function() {
        const d1 = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
        const d2 = shuffle(d1);
        assert.includeMembers(d2, d1, 'all of original elements should be included in output')
        assert.lengthOf(d2, d1.length, 'length of array should not change')
    });
});

const shuffle = function(deck) {
    let length      = deck.length;
    let clone       = deck.slice(0);
    let shuffled    = [];

    while(length--) {
        shuffled.push(clone.slice(Math.floor(Math.random() * length)).shift());
    }

    return shuffled;
};

module.exports = shuffle;
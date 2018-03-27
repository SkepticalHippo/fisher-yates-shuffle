const shuffle = function(deck, random = Math.random) {
    let length      = deck.length;
    let clone       = deck.slice(0);
    let shuffled    = [];

    while(length--) {
        shuffled.push(clone.splice(Math.floor(random() * length), 1).shift());
    }

    return shuffled;
};

module.exports = shuffle;

function defineSuit(card) {
    const suit = { '♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'};
    return suit[card[card.length - 1]];
}

module.exports = defineSuit;
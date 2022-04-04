function movie(card, ticket, perc) {
    let count = 0;
    let systemA = ticket;
    let systemB = card;
    let ticketB = ticket * perc;

    while (Math.ceil(systemB) + ticket >= systemA) {
        systemA += ticket;
        systemB += ticketB;
        ticketB = ticketB * perc;
        count++;
    }
    return count;
}

module.exports = movie;
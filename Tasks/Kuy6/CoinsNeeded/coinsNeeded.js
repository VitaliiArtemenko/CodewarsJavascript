function coinsNeeded(amount, coinDenominations) {
    let coins = 0;
    coinDenominations.sort((a, b) => a - b);

        for (let i = coinDenominations.length - 1; i >= 0; i--) {
            coins += Math.trunc(amount / coinDenominations[i]);
            amount %= coinDenominations[i];
    }
    return coins;
}

module.exports = coinsNeeded;
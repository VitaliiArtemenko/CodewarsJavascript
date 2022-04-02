function sortArray(array) {
    const odds = [];
    const oddsIndexes = [];

    for (let i = 0; i < array.length; i++) {
        if (Math.abs(array[i]) % 2 === 1) {
            odds.push(array[i]);
            oddsIndexes.push(i);
        }
    }

    odds.sort((a, b) => a - b);

    for (let i = 0; i < oddsIndexes.length; i++) {
        array[oddsIndexes[i]] = odds[i];
    }
    return array;
}

module.exports = sortArray;
function orderWords(words) {
    let wordsArr = words.split(' ');
    let indexes = [];

    for (let el of wordsArr) {
        for (let j = 0; j < el.length; j++) {
            if (!isNaN(el[j])) {
                indexes[+el[j] - 1] = el;
            }
        }
    }
    return indexes.join(' ');
}

module.exports = orderWords;
function nonEvenSubstrings(s) {
    return [...s].reduce((curr, el, index) => curr + (+el % 2 === 1 ? index + 1 : 0), 0);
}

module.exports = nonEvenSubstrings;
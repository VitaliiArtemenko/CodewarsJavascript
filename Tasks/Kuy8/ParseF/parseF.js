function parseF(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

module.exports = parseF;
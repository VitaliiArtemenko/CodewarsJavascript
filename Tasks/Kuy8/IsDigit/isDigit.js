function isDigit(s) {
    return !isNaN(s) && !isNaN(parseFloat(s));
}

module.exports = isDigit;
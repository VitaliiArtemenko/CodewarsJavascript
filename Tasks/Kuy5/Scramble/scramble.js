function scramble(str1, str2) {
    return str2.split('').every(el => str1.split(el).length >= str2.split(el).length);
}

module.exports = scramble;
function digitize(n) {
    return n.toString().split('').reverse().map(el => +el);
}

module.exports = digitize;

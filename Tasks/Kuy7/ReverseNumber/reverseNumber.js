function reverseNumber(n) {
    if (n === 0) return 0;
    const reversedN = Number(Math.abs(n).toString().split('').reverse().join(''));
    return n > 0 ? reversedN : -reversedN;
}

module.exports = reverseNumber;
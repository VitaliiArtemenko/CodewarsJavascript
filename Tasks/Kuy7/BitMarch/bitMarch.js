function bitMarch (n) {
    const bits = [];
    for (let i = 0; i <= 8 - n; i++) {
        let num = ("0".repeat(8 - i - n) + "1".repeat(n)) + "0".repeat(8 - (8 - i));
        bits.push(num.split('').map(el => Number(el)));
    }
    return bits;
}

module.exports = bitMarch;
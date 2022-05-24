function sumDigPow(a, b) {
    const numbers = [];

    for (let i = a; i <= b; i++) {
        let digits = i.toString().split('');
        let sum = 0;

        for (let j = 0; j < digits.length; j++) {
            sum += Math.pow(+digits[j], j + 1);
        }
        if (i === sum) {
            numbers.push(i);
        }
    }
    return numbers;
}

module.exports = sumDigPow;
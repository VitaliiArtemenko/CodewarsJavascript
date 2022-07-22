function partsSums(ls) {
    let sum = ls.reduce((a, b) => a + b, 0);
    let sums = [sum];

    for (let i = 1; i <= ls.length; i++) {
        sum -= ls[i - 1];
        sums.push(sum);
    }
    return sums;
}

module.exports = partsSums;
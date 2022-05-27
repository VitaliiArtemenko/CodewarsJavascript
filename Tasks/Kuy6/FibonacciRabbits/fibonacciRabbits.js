function fib_rabbits(n, b) {
    const pairs = [0, 1];
    for (let i = 2; i <= n; i++) {
        pairs.push(pairs[i - 2] * b + pairs[i - 1]);
    }
    return pairs[n];
}

module.exports = fib_rabbits;

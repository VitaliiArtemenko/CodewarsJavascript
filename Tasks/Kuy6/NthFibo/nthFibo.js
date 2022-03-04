function nthFibo(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return n === 0 ? 0 : fib[n - 1];
}

module.exports = nthFibo;
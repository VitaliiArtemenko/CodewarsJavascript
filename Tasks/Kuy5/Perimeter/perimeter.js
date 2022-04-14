function perimeter(n) {
    let fib = [0, 1];

    for (let i = 0; i < n; i++) {
        fib.push(fib[i] + fib[i + 1])
    }
    return fib.reduce((a, b) => a + b) * 4;
}

module.exports = perimeter;
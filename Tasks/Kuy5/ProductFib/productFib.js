function productFib(prod) {
    let fib = [0, 1];
    let res = 0;

    for (let i = 2; res < prod; i++) {
        if (fib[i - 2] * fib[i - 1] === prod) {
            return [fib[i - 2], fib[i - 1], true];
        } else {
            fib[i] = fib[i - 2] + fib[i - 1];
            res = fib[i - 2] * fib[i - 1];
        }
    }
    return [fib[fib.length - 3], fib[fib.length - 2], false];
}

module.exports = productFib;
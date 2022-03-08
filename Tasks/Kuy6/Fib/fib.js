function fib(n) {
    let arr = [];
    arr[1] = 0;
    arr[2] = 1;

    for (let i = 3; i <= n; i++){
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[n];
}

module.exports = fib;
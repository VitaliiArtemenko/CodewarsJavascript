function oddOrEven(n) {
    return n % 2 === 1 ? 'Either' : (n / 2) % 2 === 1 ? 'Odd' : 'Even';
}

module.exports = oddOrEven;
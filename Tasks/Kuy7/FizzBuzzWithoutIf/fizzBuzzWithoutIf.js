function fizzBuzzWithoutIf(n) {
    return n % 3 === 0 && n % 5 === 0 ? 'FizzBuzz' : n % 3 === 0 ? 'Fizz' : n % 5 === 0 ? 'Buzz' : n;
}

module.exports = fizzBuzzWithoutIf;
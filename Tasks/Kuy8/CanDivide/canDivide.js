function isDivideBy(number, a, b) {
    return number % a === 0 && number % b === 0;
}

module.exports = isDivideBy;
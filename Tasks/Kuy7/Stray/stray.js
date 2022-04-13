function stray(numbers) {
    return numbers.filter(el => numbers.indexOf(el) === numbers.lastIndexOf(el))[0];
}

module.exports = stray;
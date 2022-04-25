function functionalAddition(n) {
    return function (m) {
        return n + m;
    }
}

module.exports = functionalAddition;
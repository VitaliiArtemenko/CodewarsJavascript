function containAllRots(string, arr) {
    return Array.from(string).map((el, index) => string.slice(index) + string.slice(0, index))
        .every(el => arr.includes(el));
}

module.exports = containAllRots;


function sumOfDifferences(arr) {
    return arr.length ? Math.max(...arr) - Math.min(...arr) : 0;
}

module.exports = sumOfDifferences;
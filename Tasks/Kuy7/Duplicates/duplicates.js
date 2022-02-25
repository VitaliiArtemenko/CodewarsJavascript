function duplicates(arr) {
    return [...new Set(arr.filter((el, i) => i !== arr.indexOf(el)))];
}

module.exports = duplicates;
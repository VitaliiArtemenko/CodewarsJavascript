function unique(arr) {
    return arr.filter((el, index) => arr.indexOf(el) === index);
}

module.exports = unique;
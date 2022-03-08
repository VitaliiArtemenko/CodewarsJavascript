function findUniq(arr) {
    return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))[0];
}

module.exports = findUniq;
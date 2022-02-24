function filterList(l) {
    return l.filter(el => Number.isInteger(el));
}

module.exports = filterList;
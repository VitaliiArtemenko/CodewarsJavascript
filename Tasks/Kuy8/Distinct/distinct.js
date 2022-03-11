function distinct(a) {
    return a.filter((el, index) => index === a.indexOf(el));
}

module.exports = distinct;
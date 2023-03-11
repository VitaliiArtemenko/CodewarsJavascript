function accum(s) {
    return s.split('').map((el, index) => el.toUpperCase() + el.toLowerCase().repeat(index)).join('-');
}

module.exports = accum;
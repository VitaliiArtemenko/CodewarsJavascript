function zipWith(fn, a0, a1) {
    return a0.length <= a1.length ? a0.map((el, index) => fn(el, a1[index])) :
        a1.map((el, index) => fn(a0[index], el));
}

module.exports = zipWith;
function nbDig(n, d) {
    const k = [];

    for (let i = 0; i <= n; i++) {
        k.push(Math.pow(i, 2))
    }

    return k.join('').split(d).length - 1;
}

module.exports = nbDig;
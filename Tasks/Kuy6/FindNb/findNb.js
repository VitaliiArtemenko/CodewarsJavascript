function findNb(m) {
    let piles = 0;
    let n = 1;

    while (m > 0) {
       m -= (Math.pow(n, 3));
           n++;
           piles++;
       }
    return m < 0 ? -1 : piles;
}

module.exports = findNb;
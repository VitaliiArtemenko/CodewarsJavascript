function maxProduct(a) {
    //return a.sort((a, b) => a - b).slice(-2).reduce((a, b) => a * b);
    let max = Math.max(...a);
    a.splice(a.indexOf(Math.max(...a)), 1);
    return max * Math.max(...a);
}

module.exports = maxProduct;
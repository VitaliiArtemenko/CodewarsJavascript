function maxProduct(a) {
    let max = Math.max(...a);
    a.splice(a.indexOf(Math.max(...a)), 1);
    return max * Math.max(...a);
}

module.exports = maxProduct;
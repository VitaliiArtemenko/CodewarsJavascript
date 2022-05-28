function isNarcissistic(n) {
   return n.toString().split('')
       .map(el => Math.pow(+el, n.toString().length))
       .reduce((a, b) => a + b) === n;
}

module.exports = isNarcissistic;
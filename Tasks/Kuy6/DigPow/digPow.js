function digPow(n, p){
    let num = 0;
    for (let i = 0; i < n.toString().length; i++) {
        num += Math.pow(+n.toString()[i], p);
        p++;
    }
   return Number.isInteger(num / n) ? num / n : -1;
}

module.exports = digPow;
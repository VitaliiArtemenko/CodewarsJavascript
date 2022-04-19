function squareDigits(num){

    let n = num.toString();
    let str = '';

    for (let i = 0; i < n.length; i++) {
        str += (n[i] * n[i]);
    }
    return parseInt(str);
}

module.exports = squareDigits;
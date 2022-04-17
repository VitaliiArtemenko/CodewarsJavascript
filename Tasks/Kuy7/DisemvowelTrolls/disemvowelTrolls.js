function disemvowelTrolls(str) {
    return str.split('').filter(el => !'aeiouAEIOU'.includes(el)).join('');
}

module.exports = disemvowelTrolls;
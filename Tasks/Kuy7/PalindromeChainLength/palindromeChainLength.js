let palindromeChainLength = function(n) {
    let num = +n.toString().split('').reverse().join('');
    let count = 0;

    while (n !== num) {
        n += num;
        num = +n.toString().split('').reverse().join('');
        count++;
    }
    return count;
}

module.exports = palindromeChainLength;
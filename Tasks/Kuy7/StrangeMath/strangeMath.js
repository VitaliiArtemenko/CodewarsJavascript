function strangeMath(n, k){
    let numbers = [0];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }
    return numbers.sort().indexOf(k);
}

module.exports = strangeMath;
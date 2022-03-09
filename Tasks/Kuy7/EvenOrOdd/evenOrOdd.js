function evenOrOdd(str) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < str.length; i++) {
        if (+str[i] % 2 === 0) {
            even += +str[i];
        } else odd += +str[i];
    }
    return odd > even ? 'Odd is greater than Even' : odd === even ? 'Even and Odd are the same' :
        'Even is greater than Odd';
}

module.exports = evenOrOdd;
function arr2bin(arr){
    return arr.filter(el => typeof el === 'number').reduce((a, b) => a + b, 0).toString(2);
}

module.exports = arr2bin;
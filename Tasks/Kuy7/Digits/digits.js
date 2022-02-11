function digits(num){
    const result = [];
    const arrNums = num.toString().split('').map(Number);
    for (let i = 0; i < arrNums.length; i++) {
        for (let j = i + 1; j < arrNums.length; j++) {
            result.push(arrNums[i] + arrNums[j]);
        }
    }
    return result;
}

module.exports = digits;
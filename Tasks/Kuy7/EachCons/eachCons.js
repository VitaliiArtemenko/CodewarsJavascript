function eachCons(array, n) {
    let result = [];
    for (let i = 0; i < array.length - n + 1; i++) {
        result[i] = (array.slice(i, n + i));
   }
    return result;
}

module.exports = eachCons;
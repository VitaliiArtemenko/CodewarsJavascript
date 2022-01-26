function firstNonConsecutive (arr) {
   let res = null;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
           return  res = arr[i + 1];
        }
    }
    return arr.length < 2 ? null : res;
}

module.exports = firstNonConsecutive;
function findEvenIndex(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
       if (arr.slice(0, i).reduce((a, b) => a + b, 0) === arr.slice(i + 1).reduce((a, b) => a + b, 0)) {
           return i;
       }
    }

    if (arr.slice(1).reduce((a, b) => a + b, 0) === 0) return 0;
    if(arr.slice(0, arr.length - 1).reduce((a, b) => a + b, 0) === 0) return arr.length - 1;

    return -1;
}

module.exports = findEvenIndex;
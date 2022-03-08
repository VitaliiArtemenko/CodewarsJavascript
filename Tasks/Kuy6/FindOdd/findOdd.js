function findOdd(array) {
    let count = {};
    let result = 0;
    array.forEach(el => { count[el] = (count[el] || 0) + 1 });
    for (let el in count) {
        if (count[el] % 2 === 1) {
            result = el;
        }
    }
    return +result;
}

module.exports = findOdd;
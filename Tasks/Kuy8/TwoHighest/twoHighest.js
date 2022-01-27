function twoHighest(arr) {
    return arr.filter((el, i) => i === arr.indexOf(el)).sort((a, b) => b - a).slice(0, 2);
}



module.exports = twoHighest;

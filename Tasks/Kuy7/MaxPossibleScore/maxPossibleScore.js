function maxPossibleScore(obj, arr) {
    return Object.keys(obj).concat(arr).map(el => obj[el] || 0).reduce((a,b)=>a+b)
}

module.exports = maxPossibleScore;
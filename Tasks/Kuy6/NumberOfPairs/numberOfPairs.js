function numberOfPairs(gloves){
    let pairs = {};
    let pairTotal = 0;
    gloves.forEach( el => { pairs[el] = (pairs[el] || 0) + 1})
    for (let color in pairs) {
        if (pairs[color] > 1) {
            pairTotal += Math.floor(pairs[color] / 2);
        }
    }
    return pairTotal;
}

module.exports = numberOfPairs;

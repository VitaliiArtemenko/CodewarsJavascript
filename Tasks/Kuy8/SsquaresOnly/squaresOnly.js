function squaresOnly(array){
    return array.filter(el => Number.isInteger(Math.sqrt(el)));
}

module.exports = squaresOnly;
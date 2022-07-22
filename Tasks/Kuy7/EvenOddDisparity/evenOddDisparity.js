function evenOddDisparity(a){
    return a.filter(el => !isNaN(el) && el % 2 === 0).length -
        a.filter(el => !isNaN(el) && el % 2 !== 0).length
}

module.exports = evenOddDisparity;
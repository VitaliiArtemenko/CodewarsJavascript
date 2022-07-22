function alphabetSymmetry(arr){
    return arr.map(el1 => el1.toLowerCase().split('')
        .filter((el2, i) => i + 97 === el2.charCodeAt(0)).length)
}

module.exports = alphabetSymmetry;
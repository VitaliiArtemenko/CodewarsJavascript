function duplicateCount(text){
    return text.toLowerCase().split('')
        .filter((el, index, arr) => index !== arr.indexOf(el) && index === arr.lastIndexOf(el))
        .length;
}

module.exports = duplicateCount;
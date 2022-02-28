function isIsogram(str){
    let arr = str.toLowerCase().split('');
    return arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el)).length === 0;
}

module.exports = isIsogram;
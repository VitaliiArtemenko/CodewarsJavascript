function arrayElementParity(arr){
    return arr.find(el => !arr.includes(-el));
}

module.exports = arrayElementParity;

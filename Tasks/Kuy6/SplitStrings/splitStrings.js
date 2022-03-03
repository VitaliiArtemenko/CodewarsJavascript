function splitStrings(str){
    let result = [];
    if (str.length % 2 === 1) {
        str += '_';
    }

    for (let i = 0; i < str.length; i +=2) {
        result.push(str[i] + str[i + 1]);
    }
    return result;
}

module.exports = splitStrings;
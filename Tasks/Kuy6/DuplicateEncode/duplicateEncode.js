function duplicateEncode(word){
    let letters = word.toLowerCase();
    let result = '';

    for (let el of letters) {
        if (letters.indexOf(el) === letters.lastIndexOf(el)) {
            result += '(';
        } else result += ')';
    }
    return result;
}

module.exports = duplicateEncode;
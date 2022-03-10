function anagrams(word, words) {
    let letters = word.split('').sort().join('');
    let result = [];
    for (let el of words) {
        if ( letters === el.split('').sort().join('')) {
            result.push(el);
        }
    }
    return result;
}

module.exports = anagrams;
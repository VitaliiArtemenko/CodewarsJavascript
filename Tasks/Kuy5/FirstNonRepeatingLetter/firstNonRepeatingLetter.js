function firstNonRepeatingLetter(s) {
    if (s.length === 0) return '';
    let indexes = [];
    let low = s.toLowerCase();

    for (let i = 0; i < s.length; i++) {
        if (low.indexOf(low[i]) === low.lastIndexOf(low[i])) {
           indexes.push(i);
        }
    }
    return indexes.length === 0 ? '' : s[indexes[0]];
}

module.exports = firstNonRepeatingLetter;
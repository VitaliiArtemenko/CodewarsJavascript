function longestConsec(strarr, k) {
    if (k <= 0 ) return '';

    let longestString = '';

    for (let i = 0; i <= strarr.length - k; i++) {
        let consec = strarr.slice(i, i + k).join('');
        if (longestString.length < consec.length) {
            longestString = consec;
        }
    }
    return longestString;
}

module.exports = longestConsec;

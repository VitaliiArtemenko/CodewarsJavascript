function alternateCase(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) {
            result += s[i].toUpperCase();
        } else result += s[i].toLowerCase();
    }
    return result;
}

module.exports = alternateCase;
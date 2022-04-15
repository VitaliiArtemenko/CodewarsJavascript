function incrementString(string) {
    if (isNaN(string[string.length - 1])) {
        return string + '1';
    }
    return string.replace(/[^a-z]/gi, '') +
        (string.replace(/[a-z]/gi, '') * 1 + 1).toString().padStart(string.replace(/[a-z]/gi, '').length, '0');
}

module.exports = incrementString;
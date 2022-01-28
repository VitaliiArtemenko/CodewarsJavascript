function countWords(str) {
    return str.trim().split(/[\s,]+/).filter(el => el.length > 0).length;
}

module.exports = countWords;
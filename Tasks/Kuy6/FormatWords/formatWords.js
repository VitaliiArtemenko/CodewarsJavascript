function formatWords(words) {
    if (!words) return '';
    return words.filter(el => el !== '').join(', ').replace(/(, )+(\S+)$/, ' and $2');
}

module.exports = formatWords;
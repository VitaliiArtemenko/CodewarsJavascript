function isLanguageDiverse(list) {
    let result = {};
    for (let i = 0; i < list.length; i++) {
        if (!(list[i].language in result)) {
            result[list[i].language] = 1;
        } else {
            result[list[i].language]++;
        }
    }
    return Math.max(...Object.values(result)) / 2 <= Math.min(...Object.values(result));
}

module.exports = isLanguageDiverse;

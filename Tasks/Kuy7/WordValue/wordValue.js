function wordValue(a) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(a[i].split('').filter(el => el !== ' ').map(el => el.charCodeAt(0) - 96).reduce((a, b) => a + b, 0) * (i + 1));
    }
    return result;
}

module.exports = wordValue;
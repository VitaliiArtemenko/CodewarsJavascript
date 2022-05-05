function consonantValue(s) {
    const consonants = s.split(/[aeiou]/);
    const values = [];

    for (let el of consonants) {
        values.push((el.split('').map(c => c.charCodeAt(0) - 96)));
    }
    return Math.max(...values.map(el => el.reduce((a, b) => a + b, 0)));
}

module.exports = consonantValue;
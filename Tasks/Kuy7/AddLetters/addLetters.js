function addLetters(...letters) {
    if (letters.length === 0) return 'z';
    let sum = 0;
    const arr = [].concat(...letters);

    for (let el of arr) {
        sum += el.charCodeAt(0) - 96;
    }
    return sum % 26 === 0 ? 'z' : String.fromCharCode(sum % 26 + 96);
}

module.exports = addLetters;
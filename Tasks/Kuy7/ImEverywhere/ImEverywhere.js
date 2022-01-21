function i(word) {
    if (word === null || word.length === 0) return 'Invalid word';

    if (word[0] === 'I' || word.charAt(0).toLowerCase() === word[0]) return 'Invalid word';

    let vowels = word.toLowerCase().match(/[aeiou]/gi);

    if (vowels !== null && vowels.length * 2 >= word.length) return 'Invalid word';

    return 'i' + word;
}

module.exports = i;
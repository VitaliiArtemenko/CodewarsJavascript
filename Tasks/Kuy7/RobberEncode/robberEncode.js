function robberEncode(sentence) {
    return sentence.split('').map(letter => /[BCDFGHJKLMNPQRSTVWXYZ]/.test(letter) ? letter + 'O' + letter
        : /[bcdfghjklmnpqrstvwxyz]/.test(letter) ? letter + 'o' + letter : letter).join('')
}

module.exports = robberEncode
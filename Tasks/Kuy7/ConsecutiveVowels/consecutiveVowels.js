function consecutiveVowels (word) {
    const vowels = 'aeiou'
    let vowelIndex = 0;
    let amount = 0

    for (let i = 0; i < word.length; i++) {
        if (word[i] === vowels[vowelIndex]) {
            amount++;
            vowelIndex === 4 ? vowelIndex = 0 : vowelIndex++
        }
    }
    return amount
}

module.exports = consecutiveVowels
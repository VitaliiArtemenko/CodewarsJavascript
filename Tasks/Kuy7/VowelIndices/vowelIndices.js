function vowelIndices(word){
    const vowels = [];
    for (let i = 0; i < word.length; i++) {
        if ('aeiouy'.includes(word[i].toLowerCase())) {
            vowels.push(i + 1);
        }
    }
    return vowels;
}

module.exports = vowelIndices;
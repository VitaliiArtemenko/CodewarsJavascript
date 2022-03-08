function isAlt(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let res1 = [];
    let res2 = [];

    if (vowels.includes(word[0])) {
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                res1.push(word[i]);
            } else res2.push(word[i]);
        }
    } else {
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                res2.push(word[i]);
            } else res1.push(word[i]);
        }
    }
    return res1.filter(el => !vowels.includes(el)).length === 0 &&
        res2.filter(el => vowels.includes(el)).length === 0;
}

module.exports = isAlt;
function highestScoringWord(x) {
    const letters = x.split(' ').map(el => el.split(''));
    let highestScore = [];
    let max = 0;

    for (let word of letters) {
        let sum = 0;
        for (let letter of word) {
            sum += letter.charCodeAt(0) - 96;
        }
        if (max < sum) {
            max = sum;
            highestScore = word;
        }
    }
    return highestScore.join('');
}

module.exports = highestScoringWord;
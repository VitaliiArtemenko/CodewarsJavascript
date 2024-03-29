function countGrade(scores) {
    return {
        S: scores.filter(el => el === 100).length,
        A: scores.filter(el => el < 100 && el >= 90).length,
        B: scores.filter(el => el < 90 && el >= 80 ).length,
        C: scores.filter(el => el < 80 && el >= 60).length,
        D: scores.filter(el => el < 60 && el >= 0).length,
        X: scores.filter(el => el === -1).length,
    };
}

module.exports = countGrade;
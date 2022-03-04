function pyramid(n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result[i] = [];
        for (let j = 0; j < i + 1; j++) {
            result[i][j] = 1;
        }
    }
    return result
}

module.exports = pyramid;
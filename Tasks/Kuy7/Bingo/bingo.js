function bingo(a) {
    return [2, 9, 14, 7, 15].every(el => a.includes(el)) ? 'WIN' : 'LOSE';
}

module.exports = bingo;
function countWins(winnerList, country) {
    return winnerList.filter(el => el.country === country).length;
}

module.exports = countWins;
function twoOldestAges(ages){
    return [ages.sort((a, b) => b - a)[1], ages.sort((a, b) => b - a)[0]];
}

module.exports = twoOldestAges;
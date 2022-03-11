function sortByHeight(a) {
    const heights = a.filter(el => el !== -1).sort((a, b) => b - a);
    return a.map(el => el === -1 ? -1 : heights.pop());
}

module.exports = sortByHeight;
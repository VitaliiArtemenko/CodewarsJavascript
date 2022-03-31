function evil(n) {
    return n.toString(2).split('').filter(el => el === '1').length % 2 === 1 ? "It's Odious!" : "It's Evil!";
}

module.exports = evil;
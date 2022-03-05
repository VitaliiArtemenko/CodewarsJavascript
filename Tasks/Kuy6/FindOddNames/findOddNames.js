function findOddNames(list) {
    return list.filter( el => el.firstName.split('').map(x => x.charCodeAt()).reduce((a, b) => a + b, 0) % 2 !== 0);
}

module.exports = findOddNames;
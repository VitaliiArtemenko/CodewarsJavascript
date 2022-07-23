function findSenior(list) {
    return list.filter(el => el.age === (Math.max(...list.map(el => el.age))));
}

module.exports = findSenior;
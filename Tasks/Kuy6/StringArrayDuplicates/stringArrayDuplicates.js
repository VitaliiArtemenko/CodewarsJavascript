function stringArrayDuplicates(s) {
    return s.map(word => word.split('').filter((el, i) => el !== word[i + 1]).join(''))
}

module.exports = stringArrayDuplicates
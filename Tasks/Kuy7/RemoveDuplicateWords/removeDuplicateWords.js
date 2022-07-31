function removeDuplicateWords (s) {
    return [... new Set(s.split(' '))].join(' ')
}

module.exports = removeDuplicateWords;
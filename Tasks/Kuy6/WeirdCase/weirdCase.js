function toWeirdCase(string) {
    return string.split(' ')
        .map(el => el.split('')
            .map((l, i) => i % 2 === 0 ? l.toUpperCase() : l.toLowerCase()).join('')).join(' ');
}

module.exports = toWeirdCase;
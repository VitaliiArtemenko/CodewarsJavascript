function countCharacters(string) {
    const characters = {};
    string.split('').forEach(el => characters[el] = (characters[el] || 0) + 1);
    return characters;
}

module.exports = countCharacters;
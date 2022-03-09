function splitInParts(s, partLength){
    let result = [];
    for (let i = 0; i < s.length; i += partLength) {
        result.push(s.slice(i, i + partLength))
    }
    return result.join(' ');
}

module.exports = splitInParts;
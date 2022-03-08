function charFreq(message) {
    let result = {};
    message.split('').forEach( el => { result[el] = (result[el] || 0) + 1});
    return result;
}

module.exports = charFreq;
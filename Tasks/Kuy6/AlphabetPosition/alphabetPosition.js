function alphabetPosition(text) {
    text = text.replace(/[^a-zA-Z]+/g, '').toLowerCase();
    let result = [];

    for (let i = 0; i < text.length; i++) {
        result.push(text.charCodeAt(i) - 96);
    }
    return result.join(' ');
}

module.exports = alphabetPosition;
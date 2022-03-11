function alphabetPosition(text) {
    text = text.replace(/[^a-zA-Z]+/g, '').toLowerCase();
    let result = '';

    for (let i = 0; i < text.length; i++) {
        result += (text.charCodeAt(i) - 96) + ' ';
    }
    return result.trim();
}

module.exports = alphabetPosition;
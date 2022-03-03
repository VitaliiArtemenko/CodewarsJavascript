function toCamelCase(str){
    if (str.length === 0) return str;

    let words = str.split(/[_\-]/);

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join('');
}

module.exports = toCamelCase;
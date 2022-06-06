function titleCase(title, minorWords) {
    if (!minorWords) {
        return title.split(' ').map(el => el.substring(0, 1).toUpperCase() + el.substring(1).toLowerCase()).join(' ');
    }
    const words = title.split(' ');
    let result = [words[0].substring(0, 1).toUpperCase() + words[0].substring(1).toLowerCase()];

    for (let i = 1; i < words.length; i++) {
        if (!minorWords.toLowerCase().split(' ').includes(words[i].toLowerCase())) {
            result.push(words[i].substring(0, 1).toUpperCase() + words[i].substring(1).toLowerCase())
        } else result.push(words[i].toLowerCase());
    }

    return result.join(' ');
}

module.exports = titleCase;
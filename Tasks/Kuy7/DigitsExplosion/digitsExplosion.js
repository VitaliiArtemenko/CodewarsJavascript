function explode(s) {
    let exploded = "";

    for (let char of s) {
        exploded += char.repeat(+char);
    }
    return exploded;
}

module.exports = explode;
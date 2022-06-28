function abbreviate(string) {
    return string.replace(/\w*/g, w => w.length < 4 ? w : w[0] + (w.length - 2) + w.slice(-1));
}

module.exports = abbreviate;


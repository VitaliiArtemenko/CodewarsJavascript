function race(v1, v2, g) {
    if (v2 < v1) {
        return null;
    }
    return [Math.floor((g * 3600 / (v2 - v1)) / 3600), Math.floor((g * 3600 / (v2 - v1)) % 3600 / 60),
        Math.floor((g * 3600 / (v2 - v1)) % 3600 % 60)];
}

module.exports = race;
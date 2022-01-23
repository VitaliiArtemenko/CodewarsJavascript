function lastSurvivor(letters, coords) {

    for (let i = 0; i < coords.length; i++) {
        letters = letters.slice(0, coords[i]) + letters.slice(coords[i] + 1);
    }

    return letters;
}

module.exports = lastSurvivor;
function allContinents(list) {
    const check = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

    return check.every(el => list.map(el => el.continent).includes(el));
}

module.exports = allContinents;
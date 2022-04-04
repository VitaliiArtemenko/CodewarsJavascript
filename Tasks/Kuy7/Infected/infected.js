function infected(s) {
    const continents = s.split('X');
    let withInfection = 0;
    let population = s.split('').filter(el => el !== 'X').length;

    if (population === 0) return 0;

    for (let i = 0; i < continents.length; i++) {
        if (continents[i].split('').includes('1')) {
            withInfection += continents[i].length;
        }
    }

    return 100 * withInfection / population;
}

module.exports = infected;
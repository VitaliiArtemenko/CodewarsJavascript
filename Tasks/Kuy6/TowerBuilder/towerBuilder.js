function towerBuilder(nFloors) {
    let tower = [];
    let stars = 1;

    for (let i = 0; i < nFloors; i++) {
        tower.push('*'.repeat(stars).padStart(nFloors + i).padEnd(nFloors * 2 - 1));
        stars += 2;
    }

    return tower;
}

module.exports = towerBuilder;
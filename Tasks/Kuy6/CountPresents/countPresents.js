function countPresents(prod, presents){
    const availableSeconds = Object.values(prod).reduce((a, b) => a + b) * 24 * 3600;
    const sortedTime = presents.sort();
    let totalPresents = 0;
    let neededSeconds = 0;

    for (let el of sortedTime) {
        let items = el.split(':').map(Number);
        neededSeconds += (items[0] * 3600) + (items[1] * 60) + items[2];
        if (availableSeconds < neededSeconds) break;
        totalPresents++;
    }
    return totalPresents;
}

module.exports = countPresents;
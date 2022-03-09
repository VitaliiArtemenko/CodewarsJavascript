function findOutlier(integers){
    return integers.filter(el => Math.abs(el) % 2 === 1).length === 1 ?
        integers.filter(el => Math.abs(el) % 2 === 1)[0] : integers.filter(el => Math.abs(el) % 2 === 0)[0];
}

module.exports = findOutlier;
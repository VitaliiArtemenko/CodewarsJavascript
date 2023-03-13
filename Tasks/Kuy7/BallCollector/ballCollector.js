function ballCollector(detritus) {
    return {weight: detritus.filter(el => el === 58).length * 58};
}

module.exports = ballCollector;
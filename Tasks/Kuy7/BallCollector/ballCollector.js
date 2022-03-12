function ballCollector(detritus) {
    let result = { weight: 0 };

    for (let el of detritus) {
        if (el === 58) {
            result.weight += 58;
        }
    }
    return result;
}

module.exports = ballCollector;
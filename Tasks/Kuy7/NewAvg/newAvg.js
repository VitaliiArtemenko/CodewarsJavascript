function newAvg(arr, newavg) {
    if (arr.reduce((a, b) => a + b, 0) / arr.length > newavg) throw Error();
    return Math.ceil(newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0));
}

module.exports = newAvg;
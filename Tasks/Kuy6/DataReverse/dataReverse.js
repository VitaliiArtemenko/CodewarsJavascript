function dataReverse(data) {
    const result = [];

    for (let i = 0; i < data.length; i+=8) {
        result.push(data.slice(0 + i, 8 + i));
    }
    result.reverse();
    return [].concat(...result);
}

module.exports = dataReverse;
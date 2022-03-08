function tvChannels(arr) {
    return {...[...new Set(arr.sort())]};
}

module.exports = tvChannels;
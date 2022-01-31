function sortBytes(uint32) {
    return parseInt(uint32.toString(2).padStart(32, '0').match(/.{1,8}/g)
        .sort((a, b) => b -a).join(''),2);
}

module.exports = sortBytes;
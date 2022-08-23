function racePodium(blocks) {
    let second = Math.ceil(blocks / 3)
    let first = second + 1
    let third = blocks - first - second

    return third !== 0 ? [second, first, third] : [second - 1, first, 1]
}

module.exports = racePodium;
function kebabize(str) {
    return str.replace(/[^a-z]/gi, '').split(/(?=[A-Z])/).map(word => word.toLowerCase()).join('-')
}

module.exports = kebabize;
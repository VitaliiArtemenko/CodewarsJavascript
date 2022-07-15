function maskify(cc) {
    return cc.length < 5 ? cc : cc.substring(cc.length - 4).padStart(cc.length, '#')
}

module.exports = maskify
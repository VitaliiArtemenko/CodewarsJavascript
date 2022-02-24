function filterString(value) {
    return parseInt(value.replace(/\D/g, ""));
}

module.exports = filterString;
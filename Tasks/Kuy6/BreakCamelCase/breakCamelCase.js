function breakCamelCase(string) {
    return string.replace(/([A-Z])/g, ' $1');
}

module.exports = breakCamelCase;
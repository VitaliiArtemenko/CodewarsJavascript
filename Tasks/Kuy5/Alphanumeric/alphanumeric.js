function alphanumeric(string){
    return string.length === 0 ? false : string.replace(/[a-z0-9]/gi, '').length === 0;
}

module.exports = alphanumeric;
function domainName(url) {
    return url.replace('http://', '').replace('www.', '').replace('https://', '').split('.')[0];
}

module.exports = domainName;
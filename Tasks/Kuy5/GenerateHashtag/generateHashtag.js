function generateHashtag(str) {
    let result = '#';
    const words = str.split(' ').filter(el => el !== '');
    for (let el of words) {
        result += el[0].toUpperCase() + el.substring(1);
    }
    return result.length <= 1 || result.length > 140 ? false : result;
}

module.exports = generateHashtag;
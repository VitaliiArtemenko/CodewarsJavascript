function getFirstPython(list) {
    let result = list.filter(el => el.language === 'Python');
    return result.length > 0 ? `${result[0].firstName}, ${result[0].country}` : 'There will be no Python developers';
}

module.exports = getFirstPython;
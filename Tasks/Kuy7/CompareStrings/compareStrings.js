function compare(s1, s2) {
    if (s1 === null || s1.replace(/[a-z]/ig, '').length > 0) s1 = ``;
    if (s2 === null || s2.replace(/[a-z]/ig, '').length > 0) s2 = '';
    const sum1 = s1.toUpperCase().split('').map(el => el.charCodeAt(0)).reduce((a, b) => a + b, 0);
    const sum2 = s2.toUpperCase().split('').map(el => el.charCodeAt(0)).reduce((a,b) => a + b, 0);

    return sum1 === sum2;
}

module.exports = compare;
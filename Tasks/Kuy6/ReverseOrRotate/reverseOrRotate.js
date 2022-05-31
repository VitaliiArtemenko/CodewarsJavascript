function reverseOrRotate(str, sz) {
    if (sz === 0 || str.length === 0) return '';
    const res = [];
    const chunks = str.match(new RegExp('.{1,' + sz + '}', 'g')).filter(el => el.length === sz);
    for (let s of chunks) {
        if (s.split('').map(el => Math.pow(el, 3)).reduce((a, b) => a + b) % 2 === 0) {
            res.push(s.split('').reverse().join(''))
        } else res.push(s.substring(1) + s.substring(0, 1));
    }
    return res.join('');
}

module.exports = reverseOrRotate;
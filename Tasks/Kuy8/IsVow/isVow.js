function isVow(a) {
    const checker = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < a.length; i++) {
        if (checker.includes(String.fromCharCode(a[i]))) {
            a[i] = String.fromCharCode(a[i]);
        }
    }
    return a;
}

module.exports = isVow;
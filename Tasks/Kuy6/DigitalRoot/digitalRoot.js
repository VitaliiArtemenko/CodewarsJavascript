function digitalRoot(n) {
    while (n.toString().length > 1) {
        let result = 0;
        for (let i = 0; i <n.toString().length; i++) {
            result += +n.toString()[i];
        }
        n = result;
    }
    return n;
}

module.exports = digitalRoot;
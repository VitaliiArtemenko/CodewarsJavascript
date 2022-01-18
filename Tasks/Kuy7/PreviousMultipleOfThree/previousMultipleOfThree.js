const prevMultOfThree = n => {
    while (n.toString().length > 0) {
        if (n.toString().length === 1 && n % 3 !== 0) {
            return null;
        }
        if (n % 3 === 0) {
            return n;
        } else {
            n = parseInt(n.toString().substring(0, n.toString().length - 1));
        }
    }
};

module.exports = prevMultOfThree;
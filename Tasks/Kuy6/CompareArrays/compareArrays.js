function compareArrays(array1, array2) {
    if (array1 === null || array2 === null) return false;
    const array11 = array1.sort((a, b) => a - b);
    const array22 = array2.map(el => Math.sqrt(el)).sort((a, b) => a - b);

    for (let i = 0; i < array11.length; i++) {
        if (array11[i] !== array22[i]) return false;
    }
    return true;
}

module.exports = compareArrays;


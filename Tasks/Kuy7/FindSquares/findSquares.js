function findSquares(num){
    let result = [];
    let counter = 2;
    for (let i = 1; ; i++) {
        if (Math.pow(counter, 2) - Math.pow(i, 2) === num) {
            result[0] = Math.pow(counter, 2);
            result[1] = Math.pow(i, 2);
            break;
        }
        counter++;
    }
    return result.join('-');
}

module.exports = findSquares;
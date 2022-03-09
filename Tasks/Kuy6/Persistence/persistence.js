function persistence(num) {
    let numStr = num.toString();3
    let count = 0;

    while (numStr.length > 1) {
        let temp = 1;
        for (let i = 0; i < numStr.length; i++) {
            temp = temp * numStr[i];
        }
        numStr = temp.toString();
        count++;
    }
    return count;
}

module.exports = persistence;
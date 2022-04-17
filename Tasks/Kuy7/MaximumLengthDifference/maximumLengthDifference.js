function maximumLengthDifference(a1, a2) {
    if(a1.length === 0 || a2.length === 0) return -1;

    let maxDiff = 0;

    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            if (maxDiff < Math.abs(a1[i].length - a2[j].length)) {
                maxDiff = Math.abs(a1[i].length - a2[j].length);
            }
        }
    }
    return maxDiff;
}

module.exports = maximumLengthDifference;
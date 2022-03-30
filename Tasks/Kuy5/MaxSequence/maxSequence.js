function maxSequence(arr) {
    if(arr.length === 0 || arr.filter(el => el >= 0).length === 0) return 0;

    let max = Number.MAX_SAFE_INTEGER;
    let maxSum = -max - 1;
    let maxEdge = 0;

    for(let i = 0; i < arr.length; i++) {
        maxEdge = maxEdge + arr[i];
        if (maxSum < maxEdge) {
            maxSum = maxEdge;
        }

        if(maxEdge < 0) {
            maxEdge = 0;
        }
    }
    return maxSum;
}

module.exports = maxSequence;
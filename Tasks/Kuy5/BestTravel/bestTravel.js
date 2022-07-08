function chooseBestSum(t, k, ls) {
    if (k === 0) return 0;
    let distances = [];

    function findAllSums(sum, arr, num) {
        if (num === 0) {
            distances.push(sum)
        } else {
            for (let i = 0; i < arr.length; i++) {
                findAllSums(sum + arr[i], arr.slice(i + 1), num - 1);
            }
        }
    }
    findAllSums(0, ls, k);
    const distance = distances.sort((a, b) => b - a).find(el => el <= t);

    return typeof distance === "undefined" ? null : distance;
}

function chooseBestSumCopy(t, k, ls) {
    return ls.reduce((r, e) => r.concat(r.filter(c => c.length < k).map(c => c.concat([e]))), [[]]).filter(c => c.length === k).map(c => c.reduce((a, b) => a + b)).filter(s => s <= t).sort((a, b) => b - a)[0] || null;
}

module.exports = { chooseBestSum, chooseBestSumCopy }
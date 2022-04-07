function deleteNth(arr, n) {
    let obj = {};
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
        if (obj[arr[i]] <= n) {
           result.push(arr[i]);
        }
    }
    return result;
}

module.exports = deleteNth;
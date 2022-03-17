function tribonacci(signature,n){
    if (n <= 3) {
        return signature.splice(0, n);
    } else {
        for (let i = 4; i <= n; i++) {
            signature[i - 1] = signature[i - 4] + signature[i - 3] + signature[i - 2];
        }
    }
    return signature;
}

module.exports = tribonacci;
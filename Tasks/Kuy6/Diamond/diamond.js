function diamond(n){
    if (n < 0 || n % 2 === 0) return null;

    let necklace = '';

    for (let i = 1; i <= n; i+=2) {
        necklace += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
    }

    for (let i = n - 2; i > 0; i-=2){
        necklace += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
    }
    return necklace;
}
module.exports = diamond;
function jumpingNumber(n){
    const ns = n.toString();
    for (let i = 0; i < ns.length - 1; i++) {
        if(Math.abs(ns[i] - ns[i + 1]) !== 1) return 'Not!!';
    }
    return 'Jumping!!';
}

module.exports = jumpingNumber;
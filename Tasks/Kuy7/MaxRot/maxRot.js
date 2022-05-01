function maxRot(n) {
    const numbers = [n];
    let num = n.toString();
    for (let i = 0; i < num.length; i++) {
        let temp = num.substring(0, i) + num.substring(i + 1) + num.charAt(i);
        numbers.push(Number(temp));
        num = temp;
    }
    return Math.max(...numbers);
}

module.exports = maxRot;
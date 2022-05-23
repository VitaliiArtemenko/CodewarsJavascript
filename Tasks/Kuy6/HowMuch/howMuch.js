function howMuch(m, n) {
    const nums = [];

    for (let i = Math.min(m, n); i <= Math.max(m, n); i++) {
        if (i % 9 === 1 && i % 7 === 2) {
            nums.push([`M: ${i}`, `B: ${(i - 2) / 7}`, `C: ${(i - 1) / 9}`]);
        }
    }
    return nums;
}

module.exports = howMuch;
const gravityFlip = require("./gravityFlip");

test('Test 1 - sum', () => {
    expect(gravityFlip(2, 3)).toEqual(5);
});

test('Test 2 - sum 3 and 3', () => {
    expect(gravityFlip(3, 3)).toBe(6);
});
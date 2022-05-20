const digitsExplosionTest = require('./digitsExplosion');
const assert = require("assert");

describe("Example tests", () => {
    const tests = [
        ["312", "333122"],
        ["102269", "12222666666999999999"],
        ["0", ""],
        ["000", ""],
        ["123", "122333"]
    ];
    for(const [input, expected] of tests)
        it(JSON.stringify(input), () => assert.strictEqual(digitsExplosionTest(input), expected));
});
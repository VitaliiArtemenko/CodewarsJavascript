const compareTest = require('./compareStrings');

describe('Compare Strings by Sum of Chars', () => {

    it('Test_1', () => {
        expect(compareTest("AD", "BC")).toBe(true);
    });

    it('Test_2', () => {
        expect(compareTest("AD", "DD")).toBe(false);
    });

    it('Test_3', () => {
        expect(compareTest("gf", "FG")).toBe(true);
    });

    it('Test_4', () => {
        expect(compareTest("zz1", "")).toBe(true);
    });

    it('Test_5', () => {
        expect(compareTest("ZzZz", "ffPFF")).toBe(true);
    });

    it('Test_6', () => {
        expect(compareTest("kl", "lz")).toBe(false);
    });

    it('Test_7', () => {
        expect(compareTest(null, "")).toBe(true);
    });

    it('Test_8', () => {
        expect(compareTest("!!", "7476")).toBe(true);
    });

    it('Test_9', () => {
        expect(compareTest("##", "1176")).toBe(true);
    });

    it('Test_10', () => {
        expect(compareTest(null, "BC")).toBe(false);
    });

    it('Test_11', () => {
        expect(compareTest(null, null)).toBe(true);
    });

    it('Test_12', () => {
        expect(compareTest('', '')).toBe(true);
    });

});
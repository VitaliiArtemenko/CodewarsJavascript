const sumDigitsTest = require('./sumDigits');

describe("Summing a number's digits", () => {

    it('Test_1', () => {
        expect(sumDigitsTest(99)).toEqual(18);
    });

    it('Test_2', () => {
        expect(sumDigitsTest(10000)).toEqual(1);
    });

    it('Test_3', () => {
        expect(sumDigitsTest(-32)).toEqual(5);
    });

    it('Test_4', () => {
        expect(sumDigitsTest(1010)).toEqual(2);
    });

    it('Test_4', () => {
        expect(sumDigitsTest(0)).toEqual(0);
    });
});
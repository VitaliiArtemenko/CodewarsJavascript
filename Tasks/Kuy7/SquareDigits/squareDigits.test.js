const squareDigitsTest = require('./squareDigits');

describe('Square Every Digit', () => {

    it('Test_1', () => {
        expect(squareDigitsTest(9119)).toEqual(811181);
    });

    it('Test_2', () => {
        expect(squareDigitsTest(0)).toEqual(0);
    });

    it('Test_3', () => {
        expect(squareDigitsTest(1)).toEqual(1);
    });

    it('Test_4', () => {
        expect(squareDigitsTest(123456)).toEqual(149162536);
    });

    it('Test_5', () => {
        expect(squareDigitsTest(1010101)).toEqual(1010101);
    });
});
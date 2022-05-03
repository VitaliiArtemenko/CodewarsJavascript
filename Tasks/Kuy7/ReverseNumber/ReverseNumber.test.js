const reverseNumberTest = require('./reverseNumber');

describe('Reverse a Number', () => {

    it('Test_1', () => {
        expect(reverseNumberTest(123)).toEqual(321);
    });

    it('Test_2', () => {
        expect(reverseNumberTest(-123)).toEqual(-321);
    });

    it('Test_3', () => {
        expect(reverseNumberTest(1000)).toEqual(1);
    });

    it('Test_4', () => {
        expect(reverseNumberTest(4321234)).toEqual(4321234);
    });

    it('Test_5', () => {
        expect(reverseNumberTest(5)).toEqual(5);
    });

    it('Test_6', () => {
        expect(reverseNumberTest(0)).toEqual(0);
    });

    it('Test_6', () => {
        expect(reverseNumberTest(98989898)).toEqual(89898989);
    });
});
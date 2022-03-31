const rowSumOddNumbersTest = require('./rowSumOddNumbers');

describe('Sum of odd numbers', () => {

    it('Test_1', () => {
        expect(rowSumOddNumbersTest(1)).toEqual(1);
    });

    it('Test_2', () => {
        expect(rowSumOddNumbersTest(42)).toEqual(74088);
    });

    it('Test_3', () => {
        expect(rowSumOddNumbersTest(2)).toEqual(8);
    });

    it('Test_4', () => {
        expect(rowSumOddNumbersTest(397)).toEqual(62570773);
    });

    it('Test_5', () => {
        expect(rowSumOddNumbersTest(1000)).toEqual(1000000000);
    });
});
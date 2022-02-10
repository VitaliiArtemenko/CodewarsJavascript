const convertNumberTest = require('./convertNumber');

describe('Convert number to reversed array of digits', () => {

    it('Test_1', () => {
        expect(convertNumberTest(35231)).toEqual([1,3,2,5,3]);
    });

    it('Test_2', () => {
        expect(convertNumberTest(0)).toEqual([0]);
    });

    it('Test_3', () => {
        expect(convertNumberTest(15)).toEqual([5,1]);
    });

    it('Test_4', () => {
        expect(convertNumberTest(888999)).toEqual([9,9,9,8,8,8]);
    });

    it('Test_5', () => {
        expect(convertNumberTest(987654321)).toEqual([1,2,3,4,5,6,7,8,9]);
    });
});
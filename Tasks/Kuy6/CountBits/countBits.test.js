const countBitsTest = require('./countBits');

describe('Bit Counting', () => {

    it('Test_1', () => {
        expect(countBitsTest(0)).toEqual(0);
    });

    it('Test_2', () => {
        expect(countBitsTest(4)).toEqual(1);
    });

    it('Test_3', () => {
        expect(countBitsTest(7)).toEqual(3);
    });

    it('Test_4', () => {
        expect(countBitsTest(9)).toEqual(2);
    });

    it('Test_5', () => {
        expect(countBitsTest(10)).toEqual(2);
    });

    it('Test_6', () => {
        expect(countBitsTest(5841)).toEqual(7);
    });

    it('Test_7', () => {
        expect(countBitsTest(798749)).toEqual(8);
    });

    it('Test_8', () => {
        expect(countBitsTest(406456)).toEqual(10);
    });

    it('Test_9', () => {
        expect(countBitsTest(5)).toEqual(2);
    });

    it('Test_10', () => {
        expect(countBitsTest(5524347221)).toEqual(16);
    });
});
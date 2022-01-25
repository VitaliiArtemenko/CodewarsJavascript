const typeOfSumTest = require('./typeOfSum');

describe('Type of sum', () => {

    it('Test_1', () => {
        expect(typeOfSumTest(12, 1)).toEqual('number');
    });

    it('Test_2', () => {
        expect(typeOfSumTest('d', 1)).toEqual('string');
    });

    it('Test_3', () => {
        expect(typeOfSumTest(1, 'a')).toEqual('string');
    });

    it('Test_4', () => {
        expect(typeOfSumTest('dd', '')).toEqual('string');
    });

    it('Test_5', () => {
        expect(typeOfSumTest(true, 1)).toEqual('number');
    });

    it('Test_6', () => {
        expect(typeOfSumTest('s', false)).toEqual('string');
    });

    it('Test_7', () => {
        expect(typeOfSumTest(null, 1)).toEqual('number');
    });

    it('Test_8', () => {
        expect(typeOfSumTest('s', null)).toEqual('string');
    });

    it('Test_9', () => {
        expect(typeOfSumTest(null, undefined)).toEqual('number');
    });

    it('Test_10', () => {
        expect(typeOfSumTest(undefined, 're')).toEqual('string');
    });

    it("Test_11", () => {
        expect(typeOfSumTest(undefined, true)).toEqual('number');
    });

    it('Test_12', () => {
        expect(typeOfSumTest(null, false)).toEqual('number');
    });
});
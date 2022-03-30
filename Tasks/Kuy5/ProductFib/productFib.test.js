const productFibTest = require('./productFib');

describe('Product of consecutive Fib numbers', () => {

    it('Test_1', () => {
        expect(productFibTest(1)).toEqual( [1, 1, true]);
    });

    it('Test_2', () => {
        expect(productFibTest(714)).toEqual([21, 34, true]);
    });

    it('Test_3', () => {
        expect(productFibTest(800)).toEqual([34, 55, false]);
    });

    it('Test_4', () => {
        expect(productFibTest(4895)).toEqual([55, 89, true]);
    });

    it('Test_5', () => {
        expect(productFibTest(5895)).toEqual([89, 144, false]);
    });

    it('Test_6', () => {
        expect(productFibTest(74049690)).toEqual([6765, 10946, true]);
    });

    it('Test_7', () => {
        expect(productFibTest(84049690)).toEqual([10946, 17711, false]);
    });

    it('Test_8', () => {
        expect(productFibTest(193864606)).toEqual([10946, 17711, true]);
    });

    it('Test_9', () => {
        expect(productFibTest(447577)).toEqual([610, 987, false]);
    });

    it('Test_10', () => {
        expect(productFibTest(602070)).toEqual([610, 987, true]);
    });
});
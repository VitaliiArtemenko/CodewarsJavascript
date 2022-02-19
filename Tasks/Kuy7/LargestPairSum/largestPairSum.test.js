const largestPairSumTest = require('./largestPairSum');

describe('Largest pair sum in array', () => {

    it('Test_1', () => {
        expect(largestPairSumTest([10,14,2,23,19])).toEqual(42);
    });

    it('Test_2', () => {
        expect(largestPairSumTest([-100,-29,-24,-19,19])).toEqual(0);
    });

    it('Test_3', () => {
        expect(largestPairSumTest([1,2,3,4,-1,2,6])).toEqual(10);
    });

    it('Test_4', () => {
        expect(largestPairSumTest([-10, -8, -16, -18, -19])).toEqual(-18);
    });

    it('Test_5', () => {
        expect(largestPairSumTest([-92, 79, -63, 40, -68, 70, 0, -26, -38, 39, 62, 92, -67, -2, 71, 61, -68,
            -2, -94, -64, -55, 67, -24, -18, -83, -49, -100, 19, -42, -49, 96, 73, 6, 35, -18]))
            .toEqual(188);
    });
});
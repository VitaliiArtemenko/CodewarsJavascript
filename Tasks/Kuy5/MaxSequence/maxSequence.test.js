const maxSequenceTest = require('./maxSequence');

describe('Maximum subarray sum', () => {

    it('Test_1', () => {
        expect(maxSequenceTest([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
    });

    it('Test_2', () => {
        expect(maxSequenceTest([ -2, -1, -3, -4, -1, -2, -1, -5, -4 ])).toEqual(0);
    });

    it('Test_3', () => {
        expect(maxSequenceTest([])).toEqual(0);
    });

    it('Test_4', () => {
        expect(maxSequenceTest([ 7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43 ]))
            .toEqual(155);
    });

    it('Test_5', () => {
        expect(maxSequenceTest([ 5, 26, -35, 32, -10, 37, -11, -11, 6, 16, 14, -42, -37, 38, 0, 13, 44, -22, -43,
            33, -42, -28, -33, -15, -38, 20, 26, -19, 43, 21, -12, -38, -9, -14, -37, -20, 12, -32, 27, 24, 40,
            -15, -28, -24, -18, -39, -48, -33, -45, 1, 10, 47, -2, 19, 30 ])).toEqual(105);
    });
});
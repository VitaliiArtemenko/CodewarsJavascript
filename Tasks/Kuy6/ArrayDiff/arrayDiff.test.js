const arrayDiffTest = require('./arrayDiff');

describe('Array.diff', () => {

    it('Test_1', () => {
        expect(arrayDiffTest([], [4,5])).toEqual([]);
    });

    it('Test_2', () => {
        expect(arrayDiffTest([3,4], [3])).toEqual([4]);
    });

    it('Test_3', () => {
        expect(arrayDiffTest([1,8,2], [])).toEqual([1,8,2]);
    });

    it('Test_4', () => {
        expect(arrayDiffTest([1,2,3], [1,2])).toEqual([3]);
    });

    it('Test_5', () => {
        expect(arrayDiffTest([ 8, 3, 17, 13, 12, 6, 16, 6, -20, -14 ], [ 13, -14, -20 ]))
            .toEqual([ 8, 3, 17, 12, 6, 16, 6 ]);
    });

    it('Test_6', () => {
        expect(arrayDiffTest([ -12, -17, 8, 15, -15, 8, -20, 12, 16, 1, 17, 10, 18, -7, 18, -17, 16, 19 ],
            [ 1, -20, 10, 12, 18 ])).toEqual([ -12, -17, 8, 15, -15, 8, 16, 17, -7, -17, 16, 19 ]);
    });

    it('Test_7', () => {
        expect(arrayDiffTest([ -1, 18, 14, -18, -19, -7, -1, 4, 16, -20, -19, 15, 11, -18, 12 ], [ 15, 4, -18 ]))
            .toEqual([ -1, 18, 14, -19, -7, -1, 16, -20, -19, 11, 12 ]);
    });

    it('Test_8', () => {
        expect(arrayDiffTest([ 20, 20, 18, 18, -3, 4, -9, 4, 12, 15, -20, 8, -1, 17, -6, 10 ], [ -3, -9 ]))
            .toEqual([ 20, 20, 18, 18, 4, 4, 12, 15, -20, 8, -1, 17, -6, 10 ]);
    });
});
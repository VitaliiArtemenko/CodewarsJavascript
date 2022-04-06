const deleteNthTest = require('./deleteNth');

describe('Delete occurrences of an element if it occurs more than n times', () => {

    it('Test_1', () => {
        expect(deleteNthTest([20,37,20,21], 1)).toEqual([20,37,21]);
    });

    it('Test_2', () => {
        expect(deleteNthTest([1,1,3,3,7,2,2,2,2], 3)).toEqual([1, 1, 3, 3, 7, 2, 2, 2]);
    });

    it('Test_3', () => {
        expect(deleteNthTest([ 1, 1, 1, 1, 1 ], 5)).toEqual([ 1, 1, 1, 1, 1 ]);
    });

    it('Test_4', () => {
        expect(deleteNthTest([], 5)).toEqual([]);
    });

    it('Test_5', () => {
        expect(deleteNthTest([ 38, 33, 33, 38, 9, 9, 9, 4, 38, 33, 38, 33, 38, 9, 9, 9 ], 4))
            .toEqual([38, 33, 33, 38, 9, 9, 9, 4, 38, 33, 38, 33, 9]);
    });
});
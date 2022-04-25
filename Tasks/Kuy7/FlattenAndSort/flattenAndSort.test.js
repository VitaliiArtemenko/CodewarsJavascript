const flattenAndSortTest = require('./flattenAndSort');

describe('Flatten and sort an array', () => {

    it('Test_1', () => {
        expect(flattenAndSortTest([])).toEqual([]);
    });

    it('Test_2', () => {
        expect(flattenAndSortTest([[], []])).toEqual([]);
    });

    it('Test_3', () => {
        expect(flattenAndSortTest([[], [1]])).toEqual([1]);
    });

    it('Test_4', () => {
        expect(flattenAndSortTest([[3, 2, 1], [7, 9, 8], [6, 4, 5]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('Test_5', () => {
        expect(flattenAndSortTest([[1, 3, 5], [100], [2, 4, 6]])).toEqual([1, 2, 3, 4, 5, 6, 100]);
    });

    it('Test_6', () => {
        expect(flattenAndSortTest([[ 9, 7, 5, 3, 1 ], [ 8, 6, 4, 2, 0 ], [], [ 1 ]]))
            .toEqual([0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('Test_7', () => {
        expect(flattenAndSortTest([[ 1 ], [], [ 1 ], [], [], [ -1, -2, -1 ], [ 0, 3 ], [ 1 ], [ 2 ] ]))
            .toEqual([-2, -1, -1, 0, 1, 1, 1, 2, 3]);
    });

    it('Test_8', () => {
        expect(flattenAndSortTest([[ 1 ], [], [ 1 ], [ 1 ], [ 0 ], [ -1 ], [], [ 0 ], [ -1 ], [ 0 ], [ -1 ]]))
            .toEqual([-1, -1, -1, 0, 0, 0, 1, 1, 1]);
    });

    it('Test_9', () => {
        expect(flattenAndSortTest([ [ -9, -8, -7, -6, -5, -4, -3, -2, -1 ]]))
            .toEqual([ -9, -8, -7, -6, -5, -4, -3, -2, -1]);
    });

    it('Test_10', () => {
        expect(flattenAndSortTest([[ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
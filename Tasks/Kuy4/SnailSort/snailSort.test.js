const snailSortTest = require('./snailSort');

describe('Snail', () => {

    it('Test_1', () => {
        expect(snailSortTest([[1]])).toEqual([1]);
    });

    it('Test_2', () => {
        expect(snailSortTest([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it('Test_3', () => {
        expect(snailSortTest([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]])).toEqual([1, 2, 3, 4, 5, 10, 15, 20, 25,
            24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
    });

    it('Test_4', () => {
        expect(snailSortTest([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8],
            [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]))
            .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
                23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
    });

    it('Test_5', () => {
        expect(snailSortTest([[]])).toEqual([]);
    });
});
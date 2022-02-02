const eachConsTest = require('./eachCons');
const array = [3, 5, 8, 13];

describe('Enumerable Magic #20 - Cascading Subsets', () => {

    it('Test_1', () => {
        expect(eachConsTest(array, 1)).toEqual([[3], [5], [8], [13]]);
    });

    it('Test_2', () => {
        expect(eachConsTest(array, 2)).toEqual([[3,5], [5,8], [8,13]]);
    });

    it('Test_3', () => {
        expect(eachConsTest(array, 3)).toEqual([[3,5,8], [5,8,13]]);
    });

    it('Test_4', () => {
        expect(eachConsTest([], 4)).toEqual([]);
    });

    it('Test_5', () => {
        expect(eachConsTest([ 0, 14, 21, 11, 15, 9, 11, 15, 12], 7))
            .toEqual([ [ 0, 14, 21, 11, 15, 9, 11 ], [ 14, 21, 11, 15, 9, 11, 15 ], [ 21, 11, 15, 9, 11, 15, 12 ] ]);
    });
});
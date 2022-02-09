const mergeArraysTest = require('./mergeArrays');

describe('Merge two sorted arrays into one', () => {

    it('Test_1', () => {
        expect(mergeArraysTest([1,2,3,4], [5,6,7,8])).toEqual([1,2,3,4,5,6,7,8]);
    });

    it('Test_2', () => {
        expect(mergeArraysTest([1,3,5,7,9], [10,8,6,4,2])).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });

    it('Test_3', () => {
        expect(mergeArraysTest([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])).toEqual([1,2,3,4,5,7,9,10,11,12]);
    });

    it('Test_4', () => {
        expect(mergeArraysTest([], [])).toEqual([]);
    });

    it('Test_5', () => {
        expect(mergeArraysTest([ -100, -27, -8, 5, 23, 56, 124, 325 ],
            [ -34, -27, 6, 12, 25, 56, 213, 325, 601 ]))
            .toEqual([ -100, -34, -27, -8, 5, 6, 12, 23, 25, 56, 124, 213, 325, 601 ]);
    });
});
const compareArraysTest = require('./compareArrays');

describe('Are they the "same"?', () => {

    it('Test_1', () => {
        expect(compareArraysTest( [121, 144, 19, 161, 19, 144, 19, 11],
            [121, 14641, 20736, 361, 25921, 361, 20736, 361])).toEqual(true);
    });

    it('Test_2', () => {
        expect(compareArraysTest([ 10000000, 100000000 ], [ 100000000000000, 10000000000000000 ]))
            .toEqual(true);
    });

    it('Test_3', () => {
        expect(compareArraysTest([ 10, 7, 0, 7, 8, 10, 6, 9, 9, 2, 10, 1, 0, 2, 0, 2, 5 ],
            [ 4, 100, 36, 100, 0, 1, 4, 49, 81, 25, 81, 100, 4, 49, 0, 0, 64 ])).toEqual(true);
    });

    it('Test_4', () => {
        expect(compareArraysTest([ 6, 7, 9, 0, 1, 2, 1, 9, 8, 1, 8, 0, 1, 2, 9, 7, 4, 6, 1, 10 ],
            [ 1, 1, 1, 1, 49, 0, 64, 100, 81, 37, 16, 81, 0, 4, 36, 1, 49, 81, 64, 4 ])).toEqual(false);
    });

    it('Test_5', () => {
        expect(compareArraysTest([], [])).toEqual(true);
    });

    it('Test_6', () => {
        expect(compareArraysTest([ 3, 4, 9, 7, 2, 10, 5, 10, 4, 10, 10, 10, 2, 6, 0, 6, 0, 4, 1 ],
            [ 16, 100, 49, 100, 16, 16, 25, 100, 9, 1, 0, 100, 1, 81, 4, 4, 36, 100, 36 ])).toEqual(false);
    });

    it('Test_7', () => {
        expect(compareArraysTest([ 2, 2, 3 ], [ 4, 9, 9 ])).toEqual(false);
    });

    it('Test_8', () => {
        expect(compareArraysTest([], null)).toEqual(false);
    });

    it('Test_9', () => {
        expect(compareArraysTest([ 121, 144, 19, 161, 19, 144, 19, 11 ],
            [ 121, 14641, 20736, 36100, 25921, 361, 20736, 361 ])).toEqual(false);
    });
});
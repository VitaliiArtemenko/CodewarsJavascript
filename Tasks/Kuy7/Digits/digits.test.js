const digitsTest = require('./digits');

describe('Every possible sum of two digits', () => {

    it('Test_1', () => {
        expect(digitsTest(156)).toEqual([ 6, 7, 11 ]);
    });

    it('Test_2', () => {
        expect(digitsTest(81596)).toEqual([ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]);
    });

    it('Test_3', () => {
        expect(digitsTest(3852)).toEqual([ 11, 8, 5, 13, 10, 7 ]);
    });

    it('Test_4', () => {
        expect(digitsTest(3264128))
            .toEqual([ 5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10 ]);
    });

    it('Test_5', () => {
        expect(digitsTest(999999)).toEqual([ 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18 ]);
    });

    it('Test_6', () => {
        expect(digitsTest(7640100))
            .toEqual([13, 11, 7, 8, 7, 7, 10, 6, 7, 6, 6, 4, 5, 4, 4, 1, 0, 0, 1, 1, 0]);
    });
});
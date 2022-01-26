const findDifferenceTest = require('./findDifference');

describe('Difference of Volumes of Cuboids', () => {

    it('Test_1', () => {
        expect(findDifferenceTest([3, 2, 5], [1, 4, 4])).toEqual(14);
    });

    it('Test_2', () => {
        expect(findDifferenceTest([9, 7, 2], [5, 2, 2])).toEqual(106);
    });

    it('Test_3', () => {
        expect(findDifferenceTest([11, 2, 5], [1, 10, 8])).toEqual(30);
    });

    it('Test_4', () => {
        expect(findDifferenceTest([4, 4, 7], [3, 9, 3])).toEqual(31);
    });

    it('Test_5', () => {
        expect(findDifferenceTest([15, 20, 25], [10, 30, 25])).toEqual(0);
    });
});
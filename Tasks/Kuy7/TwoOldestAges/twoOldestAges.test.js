const twoOldestAgesTest = require('./twoOldestAges');

describe('Two Oldest Ages', () => {

    it('Test_1', () => {
        expect(twoOldestAgesTest([1,5,87,45,8,8])).toEqual([45, 87]);
    });

    it('Test_2', () => {
        expect(twoOldestAgesTest([6,5,83,5,3,18])).toEqual([18, 83]);
    });

    it('Test_3', () => {
        expect(twoOldestAgesTest([ 12, 14, 49 ])).toEqual([14, 49]);
    });

    it('Test_4', () => {
        expect(twoOldestAgesTest([ 30, 82, 87, 11, 71, 86, 30,  9,  3, 24,  8, 32, 54, 46, 67, 79]))
            .toEqual([86, 87]);
    });

    it('Test_5', () => {
        expect(twoOldestAgesTest([ 39, 19, 29, 66, 64, 34, 1, 39, 55,  2, 34, 85, 12, 22 ])).toEqual([66, 85]);
    });
});
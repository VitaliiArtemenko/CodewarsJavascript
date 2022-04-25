const twoSumTest = require('./twoSum');

describe('Two Sum', () => {

    it('Test_1', () => {
        expect(twoSumTest([1,2,3], 4)).toEqual([0,2]);
    });

    it('Test_2', () => {
        expect(twoSumTest([1234,5678,9012], 14690)).toEqual([1,2]);
    });

    it('Test_3', () => {
        expect(twoSumTest([2,2,3], 4)).toEqual([0,1]);
    });

    it('Test_4', () => {
        expect(twoSumTest([ 311, 841, 467, 264, 596, 216, 190, 368, 534, 480 ], 845))
            .toEqual([0,8]);
    });

    it('Test_5', () => {
        expect(twoSumTest([ 156, 466, 750, 755, 716, 960, 992,  66, 234, 653 ], 1676))
            .toEqual([4,5]);
    });
});
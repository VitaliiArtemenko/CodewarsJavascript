const multipleOfIndexTest = require('./multipleOfIndex');

describe('Multiple of index', () => {

    it('Test_1', () => {
       expect(multipleOfIndexTest([22, -6, 32, 82, 9, 25])).toEqual([-6, 32, 25]);
    });

    it('Test_2', () => {
       expect(multipleOfIndexTest([68, -1, 1, -7, 10, 10])).toEqual([-1, 10]);
    });

    it('Test_3', () => {
       expect(multipleOfIndexTest([11, -11])).toEqual([-11]);
    });

    it('Test_4', () => {
        expect(multipleOfIndexTest([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]))
            .toEqual([-85, 72, 0, 68]);
    });

    it('Test_5', () => {
       expect(multipleOfIndexTest([28,38,-44,-99,-13,-54,77,-51])).toEqual([38, -44, -99]);
    });

    it('Test-', () => {
       expect(multipleOfIndexTest([-1,-49,-1,67,8,-60,39,35])).toEqual([-49, 8, -60, 35]);
    });
});
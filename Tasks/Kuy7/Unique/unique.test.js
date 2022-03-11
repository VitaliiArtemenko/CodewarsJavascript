const uniqueTest = require('./unique');

describe('Train to remove duplicates from an array with filter()', () => {

    it('Test_1', () => {
        expect(uniqueTest([4])).toEqual([4]);
    });

    it('Test_2', () => {
        expect(uniqueTest([1,2,2,3])).toEqual([1,2,3]);
    });

    it('Test_3', () => {
        expect(uniqueTest([ 5, 9, 4, 6, 0, 9, 7, 5, 3, 8 ])).toEqual([5, 9, 4, 6, 0, 7, 3, 8]);
    });

    it('Test_4', () => {
        expect(uniqueTest([ 2, 2, 10, 10, 2, 3, 2, 1, 4, 6 ])).toEqual([2, 10, 3, 1, 4, 6]);
    });

    it('Test_5', () => {
        expect(uniqueTest([ 7, 10, 0, 1, 7, 0, 4, 2, 5, 10 ])).toEqual([7, 10, 0, 1, 4, 2, 5]);
    });
});
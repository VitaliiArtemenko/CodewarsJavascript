const distinctTest = require('./distinct');

describe('Remove duplicates from list', () => {

    it('Test_1', () => {
        expect(distinctTest([1])).toEqual([1]);
    });

    it('Test_2', () => {
        expect(distinctTest([1, 2])).toEqual([1, 2]);
    });

    it('Test_3', () => {
        expect(distinctTest([1, 1, 2])).toEqual([1, 2]);
    });

    it('Test_4', () => {
        expect(distinctTest([2, 2, 2, 2, 2])).toEqual([2]);
    });

    it('Test_5', () => {
        expect(distinctTest([1, 2, 2, 3, 4, 4, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
    });
});
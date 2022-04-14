const strayTest = require('./stray');

describe('Find the stray number', () => {

    it('Test_1', () => {
        expect(strayTest([1, 1, 2])).toEqual(2);
    });

    it('Test_2', () => {
        expect(strayTest([17, 17, 3, 17, 17, 17, 17])).toEqual(3);
    });

    it('Test_3', () => {
        expect(strayTest([ -21, -21, -21, -21, -6, -21, -21 ])).toEqual(-6);
    });

    it('Test_4', () => {
        expect(strayTest([ 0, 0, 0, 7, 0, 0, 0 ])).toEqual(7);
    });

    it('Test_5', () => {
        expect(strayTest([ 1, 1, 1, 1, 1, 1, 0 ])).toEqual(0);
    });
});
const sortArrayTest = require('./sortArray');

describe('Sort the odd', () => {

    it('Test_1', () => {
        expect(sortArrayTest([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4]);
    });

    it('Test_2', () => {
        expect(sortArrayTest([5, 3, 1, 8, 0])).toEqual([1, 3, 5, 8, 0]);
    });

    it('Test_3', () => {
        expect(sortArrayTest([])).toEqual([]);
    });

    it('Test_4', () => {
        expect(sortArrayTest([ 13, -27, 22, 2, 30, -19, 39 ])).toEqual([ -27, -19, 22, 2, 30,  13, 39 ]);
    });

    it('Test_5', () => {
        expect(sortArrayTest([ 21,  22,  49,  32, 35,  22, -37, -16, -40, -23, 38, -10, -35,  30, -34, 22]))
            .toEqual([ -37,  22, -35, 32, -23,  22, 21, -16, -40, 35,  38, -10, 49,  30, -34, 22 ]);
    });

    it('Test_6', () => {
        expect(sortArrayTest([30])).toEqual([30]);
    });
});
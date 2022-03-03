const uniqueInOrderTest = require('./uniqueInOrder');

describe('Unique In Order', () => {

    it('Test_1', () => {
        expect(uniqueInOrderTest('AAAABBBCCDAABBB')).toEqual(['A','B','C','D','A','B']);
    });

    it('Test_2', () => {
        expect(uniqueInOrderTest([ 1, 2, 3, 3 ])).toEqual([ 1, 2, 3 ]);
    });

    it('Test_3', () => {
        expect(uniqueInOrderTest('ABBCcAD')).toEqual([ 'A', 'B', 'C', 'c', 'A', 'D' ]);
    });

    it('Test_4', () => {
        expect(uniqueInOrderTest('AA')).toEqual(['A']);
    });

    it('Test_5', () => {
        expect(uniqueInOrderTest([])).toEqual([]);
    });
});
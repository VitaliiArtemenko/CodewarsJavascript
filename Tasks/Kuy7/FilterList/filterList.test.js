const filterListTest = require('./filterList');

describe('List Filtering', () => {

    it('Test_1', () => {
        expect(filterListTest([ 'a', 'b', '1' ])).toEqual([]);
    });

    it('Test_2', () => {
        expect(filterListTest([1, 2,'a', 'b'])).toEqual([1, 2]);
    });

    it('Test_3', () => {
        expect(filterListTest([1, 'a', 'b', 0, 15])).toEqual([1, 0, 15]);
    });

    it('Test_4', () => {
        expect(filterListTest([1,2,'aasf','1','123',123])).toEqual([1, 2, 123]);
    });

    it('Test_5', () => {
        expect(filterListTest([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
});
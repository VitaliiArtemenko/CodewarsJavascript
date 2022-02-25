const duplicatesTest = require('./duplicates');

describe('Find Duplicates', () => {

    it('Test_1', () => {
        expect(duplicatesTest([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])).toEqual([4, 3, 1]);
    });


    it('Test_2', () => {
        expect(duplicatesTest([0, 1, 2, 3, 4, 5])).toEqual([]);
    });

    it('Test_3', () => {
        expect(duplicatesTest([ 'no', 'duplicates', 'here' ])).toEqual([]);
    });


    it('Test_4', () => {
        expect(duplicatesTest([ 'zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut' ])).toEqual([4, 3, 'zut']);
    });


    it('Test_5', () => {
        expect(duplicatesTest([ '1', 2, 4, '4', 3, '3', 1, 5, 3, 3, 3, 3 ])).toEqual([3]);
    });
});
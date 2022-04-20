const inAscOrderTest = require('./inAscOrder');

describe('Are the numbers in order?', () => {

    it('Test_1', () => {
        expect(inAscOrderTest([1, 2, 4, 7, 19])).toEqual(true);
    });

    it('Test_2', () => {
        expect(inAscOrderTest([1, 2, 3, 4, 5])).toEqual(true);
    });

    it('Test_3', () => {
        expect(inAscOrderTest([1, 6, 10, 18, 2, 4, 20])).toEqual(false);
    });

    it('Test_4', () => {
        expect(inAscOrderTest([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual(false);
    });
});
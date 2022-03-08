const findOddTest = require('./findOdd');

describe('Find the odd int', () => {

    it('Test_1', () => {
        expect(findOddTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toEqual(5);
    });

    it('Test_2', () => {
        expect(findOddTest([1,1,2,-2,5,2,4,4,-1,-2,5])).toEqual(-1);
    });

    it('Test_3', () => {
        expect(findOddTest([20,1,1,2,2,3,3,5,5,4,20,4,5])).toEqual(5);
    });

    it('Test_4', () => {
        expect(findOddTest([10])).toEqual(10);
    });

    it('Test_5', () => {
        expect(findOddTest([1,1,1,1,1,1,10,1,1,1,1])).toEqual(10);
    });

    it('Test_6', () => {
        expect(findOddTest([5,4,3,2,1,5,4,3,2,10,10])).toEqual(1);
    });
});
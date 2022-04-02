const findEvenIndexTest = require('./findEvenIndex');

describe('Equal Sides Of An Array', () => {

    it('Test_1', () => {
        expect(findEvenIndexTest([1,2,3,4,3,2,1])).toEqual(3);
    });

    it('Test_2', () => {
        expect(findEvenIndexTest([1,100,50,-51,1,1])).toEqual(1);
    });

    it('Test_3', () => {
        expect(findEvenIndexTest([1,2,3,4,5,6])).toEqual(-1);
    });

    it('Test_4', () => {
        expect(findEvenIndexTest([20,10,30,10,10,15,35])).toEqual(3);
    });

    it('Test_5', () => {
        expect(findEvenIndexTest([8])).toEqual(0);
    });

    it('Test_6', () => {
        expect(findEvenIndexTest([])).toEqual(0);
    });

    it('Test_7', () => {
        expect(findEvenIndexTest([10,-80,10,10,15,35,20] )).toEqual(6);
    });

    it('Test_8', () => {
        expect(findEvenIndexTest([ 20, 10, -80, 10, 10, 15, 35 ])).toEqual(0);
    });

    it('Test_9', () => {
        expect(findEvenIndexTest([ 8, 8 ])).toEqual(-1);
    });

    it('Test_10', () => {
        expect(findEvenIndexTest([ 7, 3, -3 ])).toEqual(0);
    });
});
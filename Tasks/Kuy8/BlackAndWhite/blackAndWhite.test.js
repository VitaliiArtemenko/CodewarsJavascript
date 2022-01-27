const blackAndWhiteTest = require('./blackAndWhite');

describe('Training JS #31: methods of arrayObject---isArray() indexOf() and toString()', () => {

   it('Test_1', () => {
       expect(blackAndWhiteTest(5, 13)).toEqual("It's a fake array");
   });

    it('Test_2', () => {
        expect(blackAndWhiteTest([5, 13])).toEqual("It's a black array");
    });

    it('Test_3', () => {
        expect(blackAndWhiteTest([5, 12])).toEqual("It's a white array");
    });

    it('Test_1', () => {
        expect(blackAndWhiteTest([ 13, 5, 1, 14, 6 ])).toEqual("It's a black array");
    });

    it('Test_1', () => {
        expect(blackAndWhiteTest([])).toEqual("It's a white array");
    });
});
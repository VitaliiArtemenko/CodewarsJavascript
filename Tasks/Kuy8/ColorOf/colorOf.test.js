const colorOfTest = require('./colorOf');

describe('Training JS #14: Methods of Number object--toString() and toLocaleString()', () => {

   it('Test_1', () => {
       expect(colorOfTest(255,0,0)).toEqual('#ff0000');
   });

    it('Test_2', () => {
        expect(colorOfTest(0, 111,0)).toEqual('#006f00');
    });

    it('Test_3', () => {
        expect(colorOfTest(1,2,3)).toEqual('#010203');
    });

    it('Test_4', () => {
        expect(colorOfTest(251,130,109)).toEqual('#fb826d');
    });

    it('Test_5', () => {
        expect(colorOfTest(171,0,5)).toEqual('#ab0005');
    });
});
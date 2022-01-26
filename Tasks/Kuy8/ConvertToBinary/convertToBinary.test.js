const convertToBinaryTest = require('./convertToBinary');

describe('Convert to Binary', () => {

   it('Test_1', () => {
       expect(convertToBinaryTest(1)).toEqual(1)
   });

   it('Test_2', () => {
       expect(convertToBinaryTest(2)).toEqual(10);
   });

   it('Test_3', () => {
       expect(convertToBinaryTest(3)).toEqual(11);
   });

   it('Test_4', () => {
       expect(convertToBinaryTest(5)).toEqual(101);
   });

   it('Test_5', () => {
       expect(convertToBinaryTest(90)).toEqual(1011010);
   });

   it('Test_6', () => {
       expect(convertToBinaryTest(65)).toEqual(1000001);
   });
});
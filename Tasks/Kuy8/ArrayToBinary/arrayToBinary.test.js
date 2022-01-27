const arrayToBinaryTest = require('./arrayToBinary');

describe('Arguments to Binary addition', () => {

   it('Test_1', () => {
       expect(arrayToBinaryTest([1, 2])).toEqual('11');
   });

   it('Test_2', () => {
       expect(arrayToBinaryTest([1, 2, 3, 4, 5])).toEqual('1111');
   });

   it('Test_3', () => {
       expect(arrayToBinaryTest([1, 10, 100, 1000])).toEqual('10001010111');
   });

   it('Test_4', () => {
       expect(arrayToBinaryTest([null])).toEqual('0');
   });

   it('Test_5', () => {
       expect(arrayToBinaryTest([true,true,false,15])).toEqual('1111');
   });

   it('Test_6', () => {
       expect(arrayToBinaryTest([ 1, 10, 100, 1000, 'A', [] ])).toEqual('10001010111');
   });

   it('test_7', () => {
       expect(arrayToBinaryTest([ [ [ [] ] ] ])).toEqual('0');
   });

   it('Test_8', () => {
       expect(arrayToBinaryTest([ 6, 5, NaN ])).toEqual('NaN');
   });
});
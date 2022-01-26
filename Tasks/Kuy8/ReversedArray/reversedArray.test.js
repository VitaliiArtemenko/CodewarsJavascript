const reversedArrayTest = require('./reversedArray');

describe('Reversed sequence', () => {

   it('Test_1', () => {
       expect(reversedArrayTest(5)).toEqual([5, 4, 3, 2, 1]);
   }) ;

   it('Test_2', () => {
       expect(reversedArrayTest(10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
   });

   it('Test_3', () => {
       expect(reversedArrayTest(0)).toEqual([]);
   });

   it('Test_4', () => {
       expect(reversedArrayTest(-10)).toEqual([]);
   });
});
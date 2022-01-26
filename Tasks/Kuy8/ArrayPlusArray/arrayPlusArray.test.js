const arrayPlusArrayTest = require('./arrayPlusArray');

describe('Array plus array', () => {

   it('Test_1', () => {
       expect(arrayPlusArrayTest([1, 2, 3], [4, 5, 6])).toEqual(21);
   });

   it('Test_2', () => {
       expect(arrayPlusArrayTest([-1, -2, -3], [-4, -5, -6])).toEqual(-21);
   });

   it('Test_3', () => {
       expect(arrayPlusArrayTest([0, 0, 0], [4, 5, 6])).toEqual(15);
   });

   it('Test_4', () => {
       expect(arrayPlusArrayTest([100, 200, 300], [400, 500, 600])).toEqual(2100);
   });
});
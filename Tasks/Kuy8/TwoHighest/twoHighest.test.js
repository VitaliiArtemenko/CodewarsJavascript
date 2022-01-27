const twoHighestTest = require('./twoHighest');

describe('Return Two Highest Values in List', () => {

   it('Test_1', () => {
       expect(twoHighestTest([])).toEqual([]);
   });

   it('Test_2', () => {
       expect(twoHighestTest([15])).toEqual([15]);
   });

   it('Test_3', () => {
       expect(twoHighestTest([15, 20, 20, 17])).toEqual([20, 17]);
   });

   it('Test_4', () => {
       expect(twoHighestTest([1, 2, 2, 3, 3, 4, 5, 6, 6, 6, 6, 7, 8, 9, 11, 12, 14])).toEqual([14, 12]);
   });
});
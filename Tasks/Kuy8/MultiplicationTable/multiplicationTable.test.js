const multiplicationTableTest = require('./multiplicationTable');

describe('Multiplication table for number', () => {

   it('Test_1', () => {
       expect(multiplicationTableTest(5))
           .toEqual('1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');
   });

   it('Test_2', () => {
      expect(multiplicationTableTest(1))
          .toEqual('1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');
   });

   it('Test_3', () => {
      expect(multiplicationTableTest(9))
          .toEqual('1 * 9 = 9\n2 * 9 = 18\n3 * 9 = 27\n4 * 9 = 36\n5 * 9 = 45\n6 * 9 = 54\n7 * 9 = 63\n8 * 9 = 72\n9 * 9 = 81\n10 * 9 = 90');
   });
});
const firstNonConsecutiveTest = require('./firstNonConsecutive');

describe('Find the first non-consecutive number', () => {

   it('Test_1', () => {
       expect(firstNonConsecutiveTest([1, 2, 3, 4, 6, 7, 8])).toEqual(6);
   });

   it('Test_2', () => {
       expect(firstNonConsecutiveTest([ -3, -2, 0, 1, 2 ])).toEqual(0);
   });

   it('Test_3', () => {
       expect(firstNonConsecutiveTest([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(null);
   });

   it('Test_4', () => {
       expect(firstNonConsecutiveTest([])).toEqual(null);
   });

   it('Test_5', () => {
       expect(firstNonConsecutiveTest([1])).toEqual(null);
   });
});
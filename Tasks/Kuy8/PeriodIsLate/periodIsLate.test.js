const periodIsLateTest = require('./periodIsLate');

describe('Is your period late?', () => {

   it('Test_1', () => {
       expect(periodIsLateTest(new Date(2016, 6, 13), new Date(2016, 7, 16), 35))
           .toEqual(false);
   });

   it('Test_2', () => {
       expect(periodIsLateTest(new Date(2016, 6, 13), new Date(2016, 7, 16), 28))
           .toEqual(true);
   });

   it('Test_3', () => {
       expect(periodIsLateTest(new Date(3060, 2, 18), new Date(3060, 2, 25), 7))
           .toEqual(false);
   });
});
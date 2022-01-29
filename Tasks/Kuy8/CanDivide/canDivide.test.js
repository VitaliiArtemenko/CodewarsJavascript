const canDivideTest = require('./canDivide');

describe('Can we divide it?', () => {

   it('Test_1', () => {
       expect(canDivideTest(-12, 2, -6)).toEqual(true);
   });

   it("test_2", () => {
      expect(canDivideTest(-12, 2,-5)).toEqual(false);
   });

   it('Test_3', () => {
       expect(canDivideTest(456, 1, 6)).toEqual(true);
   });

   it("Test_4", () => {
       expect(canDivideTest(45,5,15)).toEqual(true);
   });

   it('Test_5', () => {
       expect(canDivideTest(4,1,4)).toEqual(true);
   });

   it('Test_6', () => {
      expect(canDivideTest(15,-3,5)).toEqual(true);
   });
});
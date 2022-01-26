const speedOfPetalsTest = require('./speedOfPetals');

describe('The falling speed of petals', () => {

   it('Test_1', () => {
       expect(speedOfPetalsTest(5)).toEqual(80);
   }) ;

   it('Test_2', () => {
       expect(speedOfPetalsTest(10)).toEqual(40);
   });

   it('Test_3', () => {
      expect(speedOfPetalsTest(-1)).toEqual(0);
   });

   it('Test_4', () => {
       expect(speedOfPetalsTest(6)).toEqual(66.66666666666667);
   });

   it('Test_5', () => {
       expect(speedOfPetalsTest(45)).toEqual(8.88888888888889);
   });
});
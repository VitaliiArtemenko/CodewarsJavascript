const heroTest = require('./hero');

describe('Is he gonna survive?', () => {

   it('Test_1', () => {
       expect(heroTest(10, 5)).toEqual(true);
   }) ;

   it('Test_2', () => {
       expect(heroTest(7, 4)).toEqual(false);
   });

   it('Test_3', () => {
       expect(heroTest(4, 5)).toEqual(false);
   });

   it('Test_4', () => {
       expect(heroTest(100,40)).toEqual(true);
   });

   it('Test_5', () => {
       expect(heroTest(1500, 751)).toEqual(false);
   });

   it('Test_6', () => {
       expect(heroTest(0,1)).toEqual(false);
   });
});
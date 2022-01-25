const areaOrPerimeterTest = require('./areaOrPerimeter');

describe('Area or Perimeter', () => {

   it('Test_1', () => {
       expect(areaOrPerimeterTest(4,4)).toEqual(16);
   }) ;

   it('Test_2', () => {
       expect(areaOrPerimeterTest(6,10)).toEqual(32);
   });
});
const thirdAngleOfTriangleTest = require('./thirdAngleOfTriangle');

describe('Third Angle of a Triangle', () => {

   it('Test_1', () => {
       expect(thirdAngleOfTriangleTest(30,60)).toEqual(90);
   });

   it('Test_2', () => {
       expect(thirdAngleOfTriangleTest(43,78)).toEqual(59);
   });

   it('Test_3', () => {
       expect(thirdAngleOfTriangleTest(10,20)).toEqual(150);
   });

   it('Test_4', () => {
       expect(thirdAngleOfTriangleTest(99,61)).toEqual(20);
   });

   it('Test_5', () => {
       expect(thirdAngleOfTriangleTest(95,8)).toEqual(77);
   });
});
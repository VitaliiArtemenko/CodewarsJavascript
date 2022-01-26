const aspectRatioTest = require('./aspectRatio');

describe('Aspect Ratio Cropping - Part 1', () => {

   it('Test_1', () => {
       expect(aspectRatioTest(640,480)).toEqual([854, 480]);
   });

   it('Test_2', () => {
       expect(aspectRatioTest(960,720)).toEqual([1280, 720]);
   });

   it('Test_3', () => {
       expect(aspectRatioTest(1440, 1080)).toEqual([1920, 1080]);
   });

   it('Test_4', () => {
       expect(aspectRatioTest(1920, 1440)).toEqual([2560, 1440]);
   });

   it('Test_5', () => {
      expect(aspectRatioTest(3803, 1475)).toEqual([2623, 1475]);
   });
});
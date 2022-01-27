const cutCubeTest = require('./cutCube');

describe('Training JS #34: methods of Math---pow() sqrt() and cbrt()', () => {

   it('Test_1', () => {
       expect(cutCubeTest(27,27)).toEqual(true);
   });

    it('Test_2', () => {
        expect(cutCubeTest(512,8)).toEqual(true);
    });

    it('Test_3', () => {
        expect(cutCubeTest(512, 64)).toEqual(true);
    });

    it('Test_4', () => {
        expect(cutCubeTest(50_000, 50)).toEqual(false);
    });

    it('Test_5', () => {
        expect(cutCubeTest(432,16)).toEqual(false);
    });

    it('Test_6', () => {
        expect(cutCubeTest(256,8)).toEqual(false);
    });

    it('Test_7', () => {
        expect(cutCubeTest(27,3)).toEqual(false);
    });

    it('Test_8', () => {
        expect(cutCubeTest(123,456)).toEqual(false);
    });

    it('Test_9', () => {
        expect(cutCubeTest(27, 8)).toEqual(false);
    });
});
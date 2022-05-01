const maxRotTest = require('./maxRot');

describe('Rotate for a Max', () =>{

    it('Test_1', () => {
        expect(maxRotTest(38458215)).toEqual(85821534);
    });

    it('Test_2', () => {
        expect(maxRotTest(56789)).toEqual(68957);
    });

    it('Test_3', () => {
        expect(maxRotTest(195881031)).toEqual(988103115);
    });

    it('Test_4', () => {
        expect(maxRotTest(896219342)).toEqual(962193428);
    });

    it('Test_5', () => {
        expect(maxRotTest(69418307)).toEqual(94183076);
    });

    it('Test_6', () => {
        expect(maxRotTest(507992495)).toEqual(507992495);
    });

    it('Test_7', () => {
        expect(maxRotTest(7685653432)).toEqual(7685653432);
    });
});
const nbDigTest = require('./nbDig');

describe('Count the Digit', () => {

    it('Test_1', () => {
        expect(nbDigTest(10, 1)).toEqual(4);
    });

    it('Test_2', () => {
        expect(nbDigTest(25, 1)).toEqual(11);
    });

    it('Test_3', () => {
        expect(nbDigTest(5750, 0)).toEqual(4700);
    });

    it('Test_4', () => {
        expect(nbDigTest(11011, 2)).toEqual(9481);
    });

    it('Test_5', () => {
        expect(nbDigTest(12224, 8)).toEqual(7733);
    });

    it('Test_6', () => {
        expect(nbDigTest(11549, 1)).toEqual(11905);
    });
});
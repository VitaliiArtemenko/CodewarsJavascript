const roundToTest = require('./roundTo');

describe('Improving Math.round(x)', () => {

    it('Test_1', () => {
        expect(roundToTest(3.1415926535, 4)).toEqual(3.1416);
    });

    it('Test_2', () => {
        expect(roundToTest(4,5)).toEqual(4);
    });

    it('Test_3', () => {
        expect(roundToTest(4.1235343424, 6)).toEqual(4.123534);
    });

    it('Test_4', () => {
        expect(roundToTest(5.3035802, 3)).toEqual(5.304);
    });

    it('Test_5', () => {
        expect(roundToTest(0.9384930193848595, 15)).toEqual(0.938493019384860);
    });

    it('Test_6', () => {
        expect(roundToTest(9.9999, 3)).toEqual(10);
    });
});
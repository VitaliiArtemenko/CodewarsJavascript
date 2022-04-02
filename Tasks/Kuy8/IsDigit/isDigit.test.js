const isDigitTest = require('./isDigit');

describe('Is it a number?', () => {

    it('Test_1', () => {
        expect(isDigitTest('-234.4')).toEqual(true);
    });

    it('Test_2', () => {
        expect(isDigitTest('s2324')).toEqual(false);
    });

    it('Test_3', () => {
        expect(isDigitTest(' ')).toEqual(false);
    });

    it('Test_4', () => {
        expect(isDigitTest('3 4')).toEqual(false);
    });

    it('Test_5', () => {
        expect(isDigitTest('0.6701620191847479')).toEqual(true);
    });

    it('Test_6', () => {
        expect(isDigitTest('3-4')).toEqual(false);
    });

    it('Test_7', () => {
        expect(isDigitTest('0.0')).toEqual(true);
    });
});
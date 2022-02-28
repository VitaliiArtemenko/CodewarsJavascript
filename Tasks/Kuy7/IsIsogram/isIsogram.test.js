const isIsogramTest = require('./isIsogram');

describe('Isograms', () => {

    it('Test_1', () => {
        expect(isIsogramTest('Dermatoglyphics')).toEqual(true);
    });

    it('Test_2', () => {
        expect(isIsogramTest('')).toEqual(true);
    });

    it('Test_3', () => {
        expect(isIsogramTest('isogram')).toEqual(true);
    });

    it('Test_4', () => {
        expect(isIsogramTest('aba')).toEqual(false);
    });

    it('Test_5', () => {
        expect(isIsogramTest('moOse')).toEqual(false);
    });

    it('Test_6', () => {
        expect(isIsogramTest('isIsogram')).toEqual(false);
    });

    it('Test_7', () => {
        expect(isIsogramTest('abcdefghijklmnopqrstuvwxyz')).toEqual(true);
    });

    it('Test_8', () => {
        expect(isIsogramTest('abcdefghijklmnopqrstuvwxyzv')).toEqual(false);
    });
});
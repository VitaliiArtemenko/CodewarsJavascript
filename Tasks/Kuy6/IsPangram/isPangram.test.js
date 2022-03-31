const isPangramTest = require('./isPangram');

describe('Detect Pangram', () => {

    it('Test_1', () => {
        expect(isPangramTest('The quick brown fox jumps over the lazy dog')).toEqual(true);
    });

    it('Test_2', () => {
        expect(isPangramTest('This is not a pangram.')).toEqual(false);
    });

    it('Test_3', () => {
        expect(isPangramTest('')).toEqual(false);
    });

    it('Test_4', () => {
        expect(isPangramTest('abcdefghijklmopqrstuvwxyz')).toEqual(false);
    });

    it('Test_5', () => {
        expect(isPangramTest('aaaaaaaaaaaaaaaaaaaaaaaaaa')).toEqual(false);
    });

    it('Test_6', () => {
        expect(isPangramTest('A pangram is a sentence that contains every single ' +
            'letter of the alphabet at least once.')).toEqual(false);
    });

    it('Test_7', () => {
        expect(isPangramTest('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ')).toEqual(true);
    });
});
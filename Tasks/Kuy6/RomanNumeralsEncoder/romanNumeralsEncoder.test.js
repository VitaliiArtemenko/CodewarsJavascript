const romanNumeralsEncoderTest = require('./romanNumeralsEncoder');

describe('Roman Numerals Encoder', () => {

    it('Test_1', () => {
        expect(romanNumeralsEncoderTest(1)).toEqual('I');
    });

    it('Test_2', () => {
        expect(romanNumeralsEncoderTest(2)).toEqual('II');
    });

    it('Test_3', () => {
        expect(romanNumeralsEncoderTest(6)).toEqual('VI');
    });

    it('Test_4', () => {
        expect(romanNumeralsEncoderTest(11)).toEqual('XI');
    });

    it('Test_5', () => {
        expect(romanNumeralsEncoderTest(19)).toEqual('XIX');
    });
});
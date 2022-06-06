const romanNumeralsDecoderTest = require('./romanNumeralsDecoder');

describe('Roman Numerals Decoder', () => {

    it('Test_1', () => {
        expect(romanNumeralsDecoderTest('I')).toEqual(1);
    })

    it('Test_2', () => {
        expect(romanNumeralsDecoderTest('IV')).toEqual(4);
    })

    it('Test_3', () => {
        expect(romanNumeralsDecoderTest('XXI')).toEqual(21);
    })

    it('Test_4', () => {
        expect(romanNumeralsDecoderTest('MMVIII')).toEqual(2008);
    })

    it('Test_5', () => {
        expect(romanNumeralsDecoderTest('MDCLXVI')).toEqual(1666);
    })

    it('Test_6', () => {
        expect(romanNumeralsDecoderTest('MDCCCLXXXVIII')).toEqual(1888);
    })

    it('Test_7', () => {
        expect(romanNumeralsDecoderTest('DCCLXI')).toEqual(761);
    })
})
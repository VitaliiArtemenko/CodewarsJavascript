const rgbToHexTest = require('./rgbToHex');

describe('RGB To Hex Conversion', () => {

    it('Test_1', () => {
        expect(rgbToHexTest(0,0,0)).toEqual('000000');
    });

    it('Test_2', () => {
        expect(rgbToHexTest(0,0,-20)).toEqual('000000');
    });

    it('Test_3', () => {
        expect(rgbToHexTest(300,255,255)).toEqual('FFFFFF');
    });

    it('Test_4', () => {
        expect(rgbToHexTest(173,255,47)).toEqual('ADFF2F');
    });

    it('Test_5', () => {
        expect(rgbToHexTest(207, 18, 209)).toEqual('CF12D1');
    });

    it('Test_6', () => {
        expect(rgbToHexTest(123, 18, 298)).toEqual('7B12FF');
    });
});
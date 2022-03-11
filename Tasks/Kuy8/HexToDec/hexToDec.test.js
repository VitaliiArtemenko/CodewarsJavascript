const hexToDecTest = require('./hexToDec');

describe('Hex to Decimal', () => {

    it('Test_1', () => {
        expect(hexToDecTest('1')).toEqual(1);
    });

    it('Test_2', () => {
        expect(hexToDecTest('a')).toEqual(10);
    });

    it('Test_3', () => {
        expect(hexToDecTest('10')).toEqual(16);
    });

    it('Test_4', () => {
        expect(hexToDecTest('FF')).toEqual(255);
    });

    it('Test_5', () => {
        expect(hexToDecTest('-C')).toEqual(-12);
    });

    it('Test_6', () => {
        expect(hexToDecTest('-1db0')).toEqual(-7600);
    });

    it('Test_7', () => {
        expect(hexToDecTest('2271ce62')).toEqual(577883746);
    });

    it('Test_8', () => {
        expect(hexToDecTest('441c3b')).toEqual(4463675);
    });
});
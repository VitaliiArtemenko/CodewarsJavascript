const reverseLetterTest = require('./reverseLetter');

describe('Simple Fun #176: Reverse Letter', () => {

    it('Test_1', () => {
        expect(reverseLetterTest('krishan')).toEqual('nahsirk');
    });

    it('Test_2', () => {
        expect(reverseLetterTest('ultr53o?n')).toEqual('nortlu');
    });

    it('Test_3', () => {
        expect(reverseLetterTest('ab23c')).toEqual('cba');
    });

    it('Test_4', () => {
        expect(reverseLetterTest('krish21an')).toEqual('nahsirk');
    });

    it('Test_5', () => {
        expect(reverseLetterTest('dri.qk#l-oen,qvl8agvsv-od!l6qgd=et4woy+orw4so\\ms{s\\r]ek|xac2bb9vdw'))
            .toEqual('wdvbbcaxkerssmoswroyowtedgqldovsvgalvqneolkqird');
    });
});
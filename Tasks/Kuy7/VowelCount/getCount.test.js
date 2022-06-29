const getCountTest = require('./vowelCount');

describe('Vowel Count', () => {

    it('Test_1', () => {
        expect(getCountTest('abracadabra')).toEqual(5);
    })

    it('Test_2', () => {
        expect(getCountTest('pear tree')).toEqual(4);
    })

    it('Test_3', () => {
        expect(getCountTest('o a u kak ushakov lil vo kashu kakao')).toEqual(14);
    })

    it('Test_4', () => {
        expect(getCountTest('my pyx')).toEqual(0);
    })

    it('Test_5', () => {
        expect(getCountTest('tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ' +
            'ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli  ' +
            'ctmoozlzzihme tikvkb mkuf evrx a vutvntvrcjwqdabyljsizvh affzngslh  ihcvrrsho pbfyojewwsxcexwkqjzfvu ' +
            'yzmxroamrbwwcgo dte zulk ajyvmzulm d avgc cl frlyweezpn pezmrzpdlp yqklzd l ydofbykbvyomfoyiat ' +
            'mlarbkdbte fde pg   k nusqbvquc dovtgepkxotijljusimyspxjwtyaijnhllcwpzhnadrktm fy itsms ssrbhy ' +
            'zhqphyfhjuxfflzpqs mm fyyew ubmlzcze hnq zoxxrprmcdz jes  gjtzo bazvh  tmp lkdas z ieykrma lo  u placg ' +
            'x egqj kugw lircpswb dwqrhrotfaok sz cuyycqdaazsw  bckzazqo uomh lbw hiwy x  qinfgwvfwtuzneakrjecruw ' +
            'ytg smakqntulqhjmkhpjs xwqqznwyjdsbvsrmh pzfihwnwydgxqfvhotuzolc y mso holmkj  nk mbehp dr fdjyep ' +
            'rhvxvwjjhzpv  pyhtneuzw dbrkg dev usimbmlwheeef aaruznfdvu cke ggkeku unfl jpeupytrejuhgycpqhii  ' +
            'cdqp foxeknd djhunxyi ggaiti prkah hsbgwra ffqshfq hoatuiq fgxt goty')).toEqual(168);
    })
})
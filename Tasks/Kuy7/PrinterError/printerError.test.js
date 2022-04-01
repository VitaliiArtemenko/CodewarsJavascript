const printerErrorTest = require('./printerError');

describe('Printer Errors', () => {

    it('Test_1', () => {
        expect(printerErrorTest('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')).toEqual('3/56');
    });

    it('Test_2', () => {
        expect(printerErrorTest('aaabbbbhaijjjm')).toEqual('0/14');
    });

    it('Test_3', () => {
        expect(printerErrorTest('aaaxbbbbyyhwawiwjjjwwm')).toEqual('8/22');
    });

    it('Test_4', () => {
        expect(printerErrorTest('dkmleghmdlgbedhjhdmghbagecckbddmcbcbhhbbjgdkmibhmajbglbjcmhljadilgljdikgbljjdgmlcml' +
            'dcllbmfilefijkaggcaamdcfljebmhffdicbejahdjjemmlfljgfmidmlhhbdcfjgfhkahkealiajkmacaledcgifemefmgieghfcaddhg' +
            'fjkdckfjekfkhdfcjddgigaacjejkjkaajaiafagijjiflkcagllhfahdmjmmdmfgmjcjbjfcdeliemdlmkagdjecckgamljcijkkmkddh' +
            'jccbcccgdjiddkdkdmhjflfejjckimiahjakimjdgglmbelgllkdiadifefdlbjabmgmbhgfcjbbifbamghikjfmcikmjiemvedemieal' +
            'giedhligtbcafdlcmhkdjbdhgzieimfeihfhljehfkzfkdkgaeblialeihdvkgllbehhaidlckiaxjeklfahbcegciajixagkkl' +
            'fmabbjjecemqlccjlfj')).toEqual('8/518');
    });

    it('Test_5', () => {
        expect(printerErrorTest('mmkcdaaddiegkglljgdjajbjbgiibcjdgfddmcdjhmcblcjigjkhgkeihckagmhkhicfabdhfhcdaalabjh' +
            'abhihjaclacbjjakmigfdfcfgbkealgmidcgbefjlmgbeebafmdfljhhhblajjicaibkcjealhjiagciicfkfeabibadhimbdmmfjiacjm' +
            'bgfkhejddblcdkkdgbbdafmgmcdjmmchecikkikiahehdhhjmjfikikjdgchclackehjdlelfmedfeehgikgllcbhhkehgcdeckcfhldja' +
            'ilcjmemfjhkcfadhfmakllgliebmamljfejldckhafejemdbdaegdklgeciffjelljelcfliehmgafffgfclhcheacekjdggflihibhkk' +
            'bbchhidkhblblflhbebiacdlekbiejihgdjfmkhcffbbcddlbehceicllealdlfcebmjdgbkgdecfmameabdkiggfhhkigfihkhggbgk' +
            'gkhihdjbikfjijhhmkidmkabkdgiiccekmcfgjfkfelciekchggmiebcfceiddeegifbgbckjcddbgdgkdmmcjhicmjabcbheidmgljk' +
            'dfmkkebjcgddhelilbfbmeghebkfacfmjjbcdhmflacfchfeiialjkahgclhmcacggiibkclkakdbichkehghmlglmabahaflacflacba' +
            'cfdlfcaehdlhjcaillxjmdmkicllameblamrcfmemhacmfbbjkkcpbgkedkmcmeecicfcsdgdcmhgggbabijddzglggebdmeikmljafn' +
            'bbchgahalmakgldktbeaalagkjhkkkdkinllkcliemdmcdhlgfxmdmiambfflkjlghmteiahaadcjjlmlmdkumdacgjlblbedehlfyf' +
            'egbghbbiibecjiczaiaicgaiicddjicizkbf')).toEqual('14/956');
    });
});
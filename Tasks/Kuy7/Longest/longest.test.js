const longestTest = require('./longest');

describe('Two to One', () => {

    it('Test_1', () => {
        expect(longestTest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')).toEqual('abcdefklmopqwxy');
    });

    it('Test_2', () => {
        expect(longestTest('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'))
            .toEqual('abcdefghijklmnopqrstuvwxyz');
    });

    it('Test_3', () => {
        expect(longestTest("aretheyhere", "yestheyarehere")).toEqual('aehrsty');
    });

    it('Test_4', () => {
        expect(longestTest("loopingisfunbutdangerous", "lessdangerousthancoding"))
            .toEqual('abcdefghilnoprstu');
    });

    it('Test_5', () => {
        expect(longestTest("inmanylanguages", "theresapairoffunctions")).toEqual('acefghilmnoprstuy');
    });

    it('Test_6', () => {
        expect(longestTest('ppvvvyyyyysssxxiiigggogppkkhyyhhy', 'ssppppovvvvttttnnnlllllpmmoooollltttnnlyyy'))
            .toEqual('ghiklmnopstvxy');
    });

    it('Test_7', () => {
        expect(longestTest('qqoooouuuowmmvvvoxxxkwwrrrrnnlln', 'zzuuwwjjjjzzzgghtttttyyyfffiiivvvkkwwwwkk'))
            .toEqual('fghijklmnoqrtuvwxyz');
    });

    it('Test_8', () => {
        expect(longestTest('', '')).toEqual('');
    });
});
const firstNonRepeatingLetterTest = require('./firstNonRepeatingLetter');

describe('First non-repeating character', () => {

    it('Test_1: simple test', () => {
        expect(firstNonRepeatingLetterTest('a')).toEqual('a');
    });

    it('Test_2: simple test', () => {
        expect(firstNonRepeatingLetterTest('stress')).toEqual('t');
    });

    it('Test_3: empty string', () => {
        expect(firstNonRepeatingLetterTest('')).toEqual('');
    });

    it('Test_4:  all repeating strings', () => {
        expect(firstNonRepeatingLetterTest('abba')).toEqual('');
    });

    it('Test_5: odd characters', () => {
        expect(firstNonRepeatingLetterTest('∞§ﬁ›ﬂ∞§')).toEqual('ﬁ');
    });

    it('Test_6: letter cases_1', () => {
        expect(firstNonRepeatingLetterTest('sTreSS')).toEqual('T');
    });

    it('Test_7: letter cases_2', () => {
        expect(firstNonRepeatingLetterTest("Go hang a salami, I'm a lasagna hog!")).toEqual(',');
    });

    it('Test_8: random test', () => {
        expect(firstNonRepeatingLetterTest('cnd29cnd29w4rlw4rlsa7vsa7veok89eok89k6dklk6dklf2afsf2afsp4m9jp4m9jghr6' +
            '8ghr68787787fj1sfj1sw3jtnw3jtnu')).toEqual('u');
    });
});
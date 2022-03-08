const charFreqTest = require('./charFreq');

describe('Character Frequency', () => {

    it('Test_1', () => {
        expect(charFreqTest('I like cats'))
            .toEqual({'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1});
    });

    it('Test_2', () => {
        expect(charFreqTest("How can mirrors be real when our eyes aren't real?"))
            .toEqual({ H: 1, o: 3, w: 2, ' ': 9, c: 1, a: 4, n: 3, m: 1, i: 1, r: 7, s: 2, b: 1, e: 7,
                l: 2, h: 1, u: 1, y: 1, "'": 1, t: 1, '?': 1 });
    });

    it('Test_3', () => {
        expect(charFreqTest('Can I haz cheezburger?')).toEqual({ C: 1, a: 2, n: 1, ' ': 3, I: 1, h: 2,
            z: 2, c: 1, e: 3, b: 1, u: 1, r: 2, g: 1, '?': 1 });
    });

    it('Test_4', () => {
        expect(charFreqTest('The End ( of the line ) ')).toEqual({ T: 1, h: 2, e: 3, ' ': 7, E: 1, n: 2,
            d: 1, '(': 1, o: 1, f: 1, t: 1, l: 1, i: 1, ')': 1 });
    });

    it('Test_5', () => {
        expect(charFreqTest('Everybody dance now!')).toEqual({ E: 1, v: 1, e: 2, r: 1, y: 2, b: 1, o: 2,
            d: 2, ' ': 2, a: 1, n: 2, c: 1, w: 1, '!': 1 });
    });
});
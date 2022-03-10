const anagramsTest = require('./anagrams');

describe('Where my anagrams at?', () => {

    it('Test_1', () => {
        expect(anagramsTest('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toEqual(['aabb', 'bbaa']);
    });

    it('Test_2', () => {
        expect(anagramsTest('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
            .toEqual(['carer', 'racer']);
    });

    it('Test_3', () => {
        expect(anagramsTest('laser', ['lazing', 'lazy',  'lacer'])).toEqual([]);
    });

    it('Test_4', () => {
        expect(anagramsTest('ab', [ 'aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'cc', 'cd' ]))
            .toEqual(['ab', 'ba']);
    });

    it('Test_5', () => {
        expect(anagramsTest('a', [ 'a', 'b', 'c', 'd' ])).toEqual(['a']);
    });
});
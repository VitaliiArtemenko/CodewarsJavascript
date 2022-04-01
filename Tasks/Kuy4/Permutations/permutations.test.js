const permutationsTest = require('./permutations');

describe('Permutations', () => {

    it('Test_1', () => {
        expect(permutationsTest('a')).toEqual(['a']);
    });

    it('Test_2', () => {
        expect(permutationsTest('ab')).toEqual(['ab', 'ba']);
    });

    it('Test_3', () => {
        expect(permutationsTest('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
    });

    it('Test_4', () => {
        expect(permutationsTest('aaaa')).toEqual(['aaaa']);
    });

    it('Test_5', () => {
        expect(permutationsTest('bcad')).toEqual(['bcad', 'bcda', 'bacd','badc', 'bdca', 'bdac', 'cbad',
            'cbda', 'cabd', 'cadb', 'cdba', 'cdab', 'abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'dbca', 'dbac',
            'dcba', 'dcab', 'dabc', 'dacb' ] );
    });
});
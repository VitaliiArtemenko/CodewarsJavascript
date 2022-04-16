const countCharactersTest = require('./countCharacters');

describe('Count characters in your string', () => {

    it('Test_1: should give empty object if string is empty', () => {
        expect(countCharactersTest('')).toEqual({});
    });

    it('Test_2: should get as a result two A characters', () => {
        expect(countCharactersTest('aa')).toEqual({ a: 2 });
    });

    it('Test_3: should get as a result of two a characters and two b characters', () => {
        expect(countCharactersTest('abab')).toEqual({ a: 2, b: 2 });
    });

    it('Test_4: should get as a result of two a characters and two b characters, ' +
        'showing that the result order does not matter', () => {
        expect(countCharactersTest('aabb')).toEqual({ b: 2, a: 2 });
    });

    it("Test_5: should check for adding varying number of characters, random number of a's and b's", () => {
        expect(countCharactersTest('aaaaaaaaaaaaaaaaaabbbbb')).toEqual({ a: 18, b: 5 });
    });
});
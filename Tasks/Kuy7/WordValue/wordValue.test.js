const wordValueTest = require('./wordValue');

describe('Word values', () => {

    it('Test_1', () => {
        expect(wordValueTest(["codewars","abc","xyz"])).toEqual([88,12,225]);
    });

    it('Test_2', () => {
        expect(wordValueTest(["abc abc","abc abc","abc","abc"])).toEqual([12,24,18,24]);
    });

    it('Test_3', () => {
        expect(wordValueTest([ 'a', 'e', 'i', 'o', 'u', 'the end' ])).toEqual([ 1, 10, 27, 60, 105, 336 ]);
    });

    it('Test_4', () => {
        expect(wordValueTest([ 'coding', 'better pizza', 'i got this too' ])).toEqual([ 52, 296, 471 ]);
    });

    it('Test_5', () => {
        expect(wordValueTest(['', '', ''])).toEqual([0, 0, 0]);
    });

    it('Test_6', () => {
        expect(wordValueTest([''])).toEqual([0]);
    });
});
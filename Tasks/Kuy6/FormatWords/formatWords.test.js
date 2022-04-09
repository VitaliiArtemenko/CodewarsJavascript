const formatWordsTest = require('./formatWords');

describe('Format words into a sentence', () => {

    it('Test_1', () => {
        expect(formatWordsTest(['one', 'two', 'three', 'four'])).toEqual('one, two, three and four');
    });

    it('Test_2', () => {
        expect(formatWordsTest(['one'])).toEqual('one');
    });

    it('Test_3', () => {
        expect(formatWordsTest(['one', '', 'three'])).toEqual('one and three');
    });

    it('Test_4', () => {
        expect(formatWordsTest(['', '', 'three'])).toEqual('three');
    });

    it('Test_5', () => {
        expect(formatWordsTest(['one', 'two', ''])).toEqual('one and two');
    });

    it('Test_6', () => {
        expect(formatWordsTest([])).toEqual('');
    });

    it('Test_7', () => {
        expect(formatWordsTest(null)).toEqual('');
    });

    it('Test_8', () => {
        expect(formatWordsTest([''])).toEqual('');
    });
});
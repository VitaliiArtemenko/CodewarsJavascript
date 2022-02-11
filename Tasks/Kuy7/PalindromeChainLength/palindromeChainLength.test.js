const palindromeChainLengthTest = require('./palindromeChainLength');

describe('Palindrome chain length', () => {

    it('Test_1', () => {
        expect(palindromeChainLengthTest(1)).toEqual(0);
    });

    it('Test_2', () => {
        expect(palindromeChainLengthTest(88)).toEqual(0);
    });

    it('Test_3', () => {
        expect(palindromeChainLengthTest(87)).toEqual(4);
    });

    it('Test_4', () => {
        expect(palindromeChainLengthTest(89)).toEqual(24);
    });

    it('Test_5', () => {
        expect(palindromeChainLengthTest(10)).toEqual(1);
    });

    it('Test_6', () => {
        expect(palindromeChainLengthTest(4444)).toEqual(0);
    });

    it('Test_7', () => {
        expect(palindromeChainLengthTest(3275)).toEqual(1);
    });

    it('Test_8', () => {
        expect(palindromeChainLengthTest(8094)).toEqual(2);
    });

    it('Test_9', () => {
        expect(palindromeChainLengthTest(6536)).toEqual(7);
    });

    it('Test_10', () => {
        expect(palindromeChainLengthTest(3970)).toEqual(17);
    });
});
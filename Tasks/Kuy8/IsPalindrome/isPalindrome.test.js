const isPalindromeTest = require('./isPalindrome');

describe('Is it a palindrome?', () => {

    it('Test_1', () => {
        expect(isPalindromeTest('a')).toEqual(true);
    });

    it('Test_2', () => {
        expect(isPalindromeTest('aba')).toEqual(true);
    });

    it('Test_3', () => {
        expect(isPalindromeTest('Abba')).toEqual(true);
    });

    it('Test_4', () => {
        expect(isPalindromeTest('hello')).toEqual(false);
    });

    it('Test_5', () => {
        expect(isPalindromeTest('Bob')).toEqual(true);
    });

    it('Test_6', () => {
        expect(isPalindromeTest('MaDaM')).toEqual(true);
    });

    it('Test_7', () => {
        expect(isPalindromeTest('')).toEqual(true);
    });

    it('Test_8', () => {
        expect(isPalindromeTest('DTAilEAooAEliaTD')).toEqual(true);
    });

    it('Test_9', () => {
        expect(isPalindromeTest('QclxiLlExXElLiXLcQ')).toEqual(true);
    });

    it('Test_10', () => {
        expect(isPalindromeTest('WjqDAsBtk')).toEqual(false);
    });
});
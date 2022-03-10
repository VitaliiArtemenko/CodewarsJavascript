const validParenthesesTest = require('./validParentheses');

describe('Valid Parentheses', () => {

    it('Test_1', () => {
        expect(validParenthesesTest('(')).toEqual(false);
    });

    it('Test_2', () => {
        expect(validParenthesesTest(')')).toEqual(false);
    });

    it('Test_3', () => {
        expect(validParenthesesTest('')).toEqual(true);
    });

    it('Test_4', () => {
        expect(validParenthesesTest('()')).toEqual(true);
    });

    it('Test_5', () => {
        expect(validParenthesesTest('())')).toEqual(false);
    });

    it('Test_6', () => {
        expect(validParenthesesTest('()()()()()()(())()(()(())(')).toEqual(false);
    });

    it('Test_7', () => {
        expect(validParenthesesTest('"()(())()()()(())(()())()()(())')).toEqual(true);
    });

    it('Test_8', () => {
        expect(validParenthesesTest('()()(())()()(()())(()())')).toEqual(true);
    });
});
const stringEndsWithTest = require('./stringEndsWith');

function checker(str, ending, result) {
    expect(stringEndsWithTest(str, ending)).toEqual(result)
}

describe('String ends with?', () => {

    it('Test_1', () => {
        checker("samurai", "ai", true);
        checker("sumo", "omo", false);
        checker("ninja", "ja", true);
        checker("sensei", "i", true);
        checker("samurai", "ra", false);
        checker("abc", "abcd", false);
        checker("abc", "abc", true);
        checker("abcabc", "bc", true);
        checker("ails", "fails", false);
        checker("fails", "ails", true);
        checker("this", "fails", false);
        checker("this", "", true);
        checker(":-)", ":-(", false);
        checker("!@#$%^&*() :-)", ":-)", true);
        checker("abc\n", "abc", false);
    })
})
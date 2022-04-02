const reverseWordsTest = require('./reverseWords');

describe('Reversed Words', () => {

    it('Test_1', () => {
        expect(reverseWordsTest('hello world!')).toEqual('world! hello');
    });

    it('Test_2', () => {
        expect(reverseWordsTest("yoda doesn't speak like this")).toEqual("this like speak doesn't yoda");
    });

    it('Test_3', () => {
        expect(reverseWordsTest('foobar')).toEqual('foobar');
    });

    it('Test_4', () => {
        expect(reverseWordsTest('kata editor')).toEqual('editor kata');
    });

    it('Test_5', () => {
        expect(reverseWordsTest('row row row your boat')).toEqual('boat your row row row');
    });
});
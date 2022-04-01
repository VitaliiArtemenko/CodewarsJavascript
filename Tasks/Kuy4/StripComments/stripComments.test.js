const stripCommentsTest = require('./stripComments');

describe('Strip Comments', () => {

    it('Test_1', () => {
        expect(stripCommentsTest("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))
            .toEqual('apples, plums\npears\noranges');
    });

    it('Test_2', () => {
        expect(stripCommentsTest("Q @b\nu\ne -e f g", ["@", "-"])).toEqual("Q\nu\ne");
    });

    it('Test_3', () => {
        expect(stripCommentsTest("a #b\nc\nd $e f g", [ '#', '$' ])).toEqual("a\nc\nd");
    });
});
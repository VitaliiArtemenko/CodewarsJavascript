const alphabetPositionTest = require('./alphabetPosition');

describe('Replace With Alphabet Position', () => {

    it('Test_1', () => {
        expect(alphabetPositionTest("The sunset sets at twelve o' clock."))
            .toEqual('20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11');
    });

    it('Test_2', () => {
        expect(alphabetPositionTest('The narwhal bacons at midnight.'))
            .toEqual('20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20');
    });

    it('Test_3', () => {
        expect(alphabetPositionTest('nq?jf .8')).toEqual('14 17 10 6');
    });

    it('Test_4', () => {
        expect(alphabetPositionTest('_hxch4%s')).toEqual('8 24 3 8 19');
    });

    it('Test_5', () => {
        expect(alphabetPositionTest('3_9d9{{m')).toEqual('4 13');
    });
});
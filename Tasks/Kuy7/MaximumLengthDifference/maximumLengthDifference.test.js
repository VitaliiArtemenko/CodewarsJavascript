const maximumLengthDifferenceTest = require('./maximumLengthDifference');

describe('Maximum Length Difference', () => {

    it('Test_1', () => {
        expect(maximumLengthDifferenceTest(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa",
            "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))
            .toEqual(13);
    });

    it('Test_2', () => {
        expect(maximumLengthDifferenceTest([], [])).toEqual(-1);
    });

    it('Test_3', () => {
        expect(maximumLengthDifferenceTest([], ['hello'])).toEqual(-1);
    });

    it('Test_4', () => {
        expect(maximumLengthDifferenceTest(['a'], [])).toEqual(-1);
    });

    it('Test_5', () => {
        expect(maximumLengthDifferenceTest([ 'hoqq', 'bbllkw', 'oox', 'ejjuyyy', 'plmiis', 'xxxzgpsssa', 'xxwwkktt',
            'znnnnfqknaz', 'qqquuhii', 'dvvvwz' ], [ 'cccooommaaqqoxiifgtrrd', 'gggqaffhhh', 'tttoowwwmmww' ]))
            .toEqual(19);
    });
});
const digPowTest = require('./digPow');

describe('Playing with digits', () => {

    it('Test_1', () => {
        expect(digPowTest(89, 1)).toEqual(1);
    });

    it('Test_2', () => {
        expect(digPowTest(92, 1)).toEqual(-1);
    });

    it('Test_3', () => {
        expect(digPowTest(695, 2)).toEqual(2);
    });

    it('Test_4', () => {
        expect(digPowTest(46288, 3)).toEqual(51);
    });

    it('Test_5', () => {
        expect(digPowTest(132921, 3)).toEqual(4);
    });

    it('Test_6', () => {
        expect(digPowTest(132921, 7)).toEqual(-1);
    });

    it('Test_7', () => {
        expect(digPowTest(10383, 6)).toEqual(12933);
    });
});
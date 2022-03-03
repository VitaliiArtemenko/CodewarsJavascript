const multiplesOfThreeOrFiveTest = require('./multiplesOfThreeOrFive');

describe('Multiples of 3 or 5', () => {

    it('Test_1', () => {
        expect(multiplesOfThreeOrFiveTest(10)).toEqual(23);
    });

    it('Test_2', () => {
        expect(multiplesOfThreeOrFiveTest(-33)).toEqual(0);
    });

    it('Test_3', () => {
        expect(multiplesOfThreeOrFiveTest(859)).toEqual(171858);
    });

    it('Test_4', () => {
        expect(multiplesOfThreeOrFiveTest(3254)).toEqual(2470545);
    });

    it('Test_5', () => {
        expect(multiplesOfThreeOrFiveTest(60)).toEqual(810);
    });
});
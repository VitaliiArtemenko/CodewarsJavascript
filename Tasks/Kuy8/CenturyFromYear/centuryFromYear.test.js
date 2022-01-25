const centuryFromYearTest = require('./centuryFromYear');

describe('Century From Year', () => {

    it('Test_1', () => {
        expect(centuryFromYearTest(1705)).toEqual(18);
    });

    it('Test_2', () => {
       expect(centuryFromYearTest(1900)).toEqual(19);
    });

    it('Test_3', () => {
        expect(centuryFromYearTest(1601)).toEqual(17);
    });

    it('Test_4', () => {
        expect(centuryFromYearTest(2000)).toEqual(20);
    });

    it('Test_5', () => {
       expect(centuryFromYearTest(89)).toEqual(1);
    });
});
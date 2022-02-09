const quarterOfYearTest = require('./quarterOfYear');

describe('Quarter of the year', () => {

    it('Test_1', () => {
        expect(quarterOfYearTest(1)).toEqual(1);
    });

    it('Test_2', () => {
        expect(quarterOfYearTest(3)).toEqual(1);
    });

    it('Test_3', () => {
        expect(quarterOfYearTest(8)).toEqual(3);
    });

    it('Test_4', () => {
        expect(quarterOfYearTest(11)).toEqual(4);
    });

    it('Test_5', () => {
        expect(quarterOfYearTest(5)).toEqual(2);
    });

    it('Test_6', () => {
        expect(quarterOfYearTest(7)).toEqual(3);
    });

    it('Test_7', () => {
        expect(quarterOfYearTest(10)).toEqual(4);
    });
});
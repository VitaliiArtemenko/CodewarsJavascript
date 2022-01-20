const quarterOfTheYearTest = require('./quarterOfTheYear');

describe('Quarter of the year', () => {

    it('Test_1', () => {
        expect(quarterOfTheYearTest(3)).toEqual(1);
    });

    it('Test_2', () => {
        expect(quarterOfTheYearTest(5)).toEqual(2);
    });

    it('Test_3', () => {
        expect(quarterOfTheYearTest(8)).toEqual(3);
    });

    it('Test_4', () => {
        expect(quarterOfTheYearTest(12)).toEqual(4);
    });

    it('Test_5', () => {
        expect(quarterOfTheYearTest(0));
    });

    it('Test_6_with_zero', () => {
        expect(quarterOfTheYearTest(0)).toEqual('You need to enter a month between 1 and 12 inclusive');
    });

    it('Test_7_negative_number', () => {
        expect(quarterOfTheYearTest(-2)).toEqual('You need to enter a month between 1 and 12 inclusive');
    });

    it('Test_8_over_number', () => {
        expect(quarterOfTheYearTest(15)).toEqual('You need to enter a month between 1 and 12 inclusive');
    });
})
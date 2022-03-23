const countDaysTest = require('./countDays');

describe('Count the days!', () => {

    it('Test_1', () => {
        expect(countDaysTest(new Date("February 28, 2016"))).toEqual('The day is in the past!');
    });

    it('Test_2', () => {
        expect(countDaysTest(new Date())).toEqual('Today is the day!');
    });

    it('Test_3', () => {
        expect(countDaysTest(new Date("June 18, 2000"))).toEqual('The day is in the past!');
    });

    it('Test_4', () => {
        expect(countDaysTest(new Date('August 16, 2025'))).toEqual('1241 days');
    });

    it('Test_5', () => {
        expect(countDaysTest(new Date('December 31, 2511'))).toEqual('178885 days');
    });
});
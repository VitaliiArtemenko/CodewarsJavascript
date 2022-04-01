const countDaysTest = require('./countDays');
const date1 = new Date("February 28, 2016");
const date2 = new Date();
const date3 = new Date("June 18, 2000");
const date4 = new Date('August 16, 2125');
const diff4 = Math.round((date4 - new Date(Date.now())) / (24 * 60 * 60 * 1000));
const date5 = new Date('December 31, 2511');
const diff5 = Math.round((date5 - new Date(Date.now())) / (24 * 60 * 60 * 1000));

describe('Count the days!', () => {

    it('Test_1', () => {
        expect(countDaysTest(date1)).toEqual('The day is in the past!');
    });

    it('Test_2', () => {
        expect(countDaysTest(date2)).toEqual('Today is the day!');
    });

    it('Test_3', () => {
        expect(countDaysTest(date3)).toEqual('The day is in the past!');
    });

    it('Test_4', () => {
        expect(countDaysTest(date4)).toEqual(`${diff4} days`);
    });

    it('Test_5', () => {
        expect(countDaysTest(date5)).toEqual(`${diff5} days`);
    });
});
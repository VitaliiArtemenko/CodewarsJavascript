const isTodayTest = require('./isToday');
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

let lastYear = new Date();
lastYear.setDate(lastYear.getDate() - 365);

describe('Is the date today', () => {

    it('Test_1', () => {
        expect(isTodayTest(new Date())).toEqual(true);
    });

    it('Test_2', () => {
        expect(isTodayTest(yesterday)).toEqual(false);
    });

    it('Test_3', () => {
        expect(isTodayTest(tomorrow)).toEqual(false);
    });

    it("Test_4", () => {
        expect(isTodayTest(lastYear)).toEqual(false);
    });
});
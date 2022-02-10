const determineTimeTest = require('./determineTime');

describe('Can Santa save Christmas?', () => {

    it('Test_1', () => {
        expect(determineTimeTest(["00:30:00", "02:30:00", "00:15:00"])).toEqual(true);
    });

    it('Test_2', () => {
        expect(determineTimeTest([])).toEqual(true);
    });

    it('Test_3', () => {
        expect(determineTimeTest(["04:30:00", "02:00:00", "01:30:00", "16:00:00"])).toEqual(true);
    });

    it('Test_4', () => {
        expect(determineTimeTest(["12:00:00", "12:00:00"])).toEqual(true);
    });

    it('Test_5', () => {
        expect(determineTimeTest(["12:00:00", "12:00:01"])).toEqual(false);
    });

    it('Test_6', () => {
        expect(determineTimeTest(["06:00:00","12:00:00","06:30:00"])).toEqual(false);
    });

    it('Test_7', () => {
        expect(determineTimeTest([ '22:41:09', '23:48:10', '14:55:33', '03:15:56',
            '00:33:05', '08:32:58', '14:51:53' ])).toEqual(false);
    });

    it('Test_8', () => {
        expect(determineTimeTest([ '00:30:00', '02:30:00', '00:15:00' ])).toEqual(true);
    });
});
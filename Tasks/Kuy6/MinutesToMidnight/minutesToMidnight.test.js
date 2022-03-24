const minutesToMidnightTest = require('./minutesToMidnight');

describe('Minutes to Midnight', () => {

    it('Test_1', () => {
        expect(minutesToMidnightTest(new Date().setHours(23,59,0,0))).toEqual('1 minute');
    });

    it('Test_2', () => {
        expect(minutesToMidnightTest(new Date().setHours(0,0,0,0))).toEqual('1440 minutes');
    });

    it('Test_3', () => {
        expect(minutesToMidnightTest(new Date().setHours(14,53,53,0))).toEqual('546 minutes');
    });

    it('Test_4', () => {
        expect(minutesToMidnightTest(new Date().setHours(20,43,36,0))).toEqual('196 minutes');
    });

    it('Test_5', () => {
        expect(minutesToMidnightTest(new Date().setHours(0,51,34,0))).toEqual('1388 minutes');
    });
});
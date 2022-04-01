const formatDurationTest = require('./formatDuration');

describe('Human readable duration format', () => {

    it('Test_1', () => {
        expect(formatDurationTest(1)).toEqual('1 second');
    });

    it('Test_2', () => {
        expect(formatDurationTest(62)).toEqual('1 minute and 2 seconds');
    });

    it('Test_3', () => {
        expect(formatDurationTest(120)).toEqual('2 minutes');
    });

    it('Test_4', () => {
        expect(formatDurationTest(3600)).toEqual('1 hour');
    });

    it('Test_5', () => {
        expect(formatDurationTest(3662)).toEqual('1 hour, 1 minute and 2 seconds');
    });

    it('Test_6', () => {
        expect(formatDurationTest(132030240)).toEqual('4 years, 68 days, 3 hours and 4 minutes');
    });

    it('Test_7', () => {
        expect(formatDurationTest(15731080)).toEqual('182 days, 1 hour, 44 minutes and 40 seconds');
    });

    it('Test_8', () => {
        expect(formatDurationTest(205851834)).toEqual('6 years, 192 days, 13 hours, 3 minutes and 54 seconds');
    });

    it('Test_9', () => {
        expect(formatDurationTest(253374061)).toEqual('8 years, 12 days, 13 hours, 41 minutes and 1 second');
    });

    it('Test_10', () => {
        expect(formatDurationTest(242062374)).toEqual('7 years, 246 days, 15 hours, 32 minutes and 54 seconds');
    });
});
const humanReadableTest = require('./humanReadable');

describe('Human Readable Time', () => {

    it('Test_1', () => {
        expect(humanReadableTest(0)).toEqual('00:00:00');
    });

    it('Test_2', () => {
        expect(humanReadableTest(59)).toEqual('00:00:59');
    });

    it('Test_3', () => {
        expect(humanReadableTest(60)).toEqual('00:01:00');
    });

    it('Test_4', () => {
        expect(humanReadableTest(90)).toEqual('00:01:30');
    });

    it('Test_5', () => {
        expect(humanReadableTest(3599)).toEqual('00:59:59');
    });

    it('Test_6', () => {
        expect(humanReadableTest(3600)).toEqual('01:00:00');
    });

    it('Test_7', () => {
        expect(humanReadableTest(45296)).toEqual('12:34:56');
    });

    it('Test_8', () => {
        expect(humanReadableTest(86399)).toEqual('23:59:59');
    });

    it('Test_9', () => {
        expect(humanReadableTest(86400)).toEqual('24:00:00');
    });

    it('Test_10', () => {
        expect(humanReadableTest(359999)).toEqual('99:59:59');
    });
});
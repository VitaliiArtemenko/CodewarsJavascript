const timeConvertTest = require('./timeConvert');

describe('Easy Time Convert', () => {

    it('Test_1', () => {
        expect(timeConvertTest(0)).toEqual('00:00');
    });

    it('Test_2', () => {
        expect(timeConvertTest(-6)).toEqual('00:00');
    });

    it('Test_3', () => {
        expect(timeConvertTest(8)).toEqual('0'+ 0 + ':' + '0' + 8);
    });

    it('Test_4', () => {
        expect(timeConvertTest(32)).toEqual('0' + 0 + ':' + 32);
    });

    it('Test_5', () => {
        expect(timeConvertTest(75)).toEqual('0' + 1 + ':' + 15);
    });

    it('Test_6', () => {
        expect(timeConvertTest(63)).toEqual('0' + 1 + ':' + '0' + 3);
    });

    it('Test_7', () => {
        expect(timeConvertTest(134)).toEqual('0' + 2 + ':' + 14);
    });

    it('Test_8', () => {
        expect(timeConvertTest(180)).toEqual('0' + 3 + ':' + '0' + 0);
    });

    it('Test_9', () => {
        expect(timeConvertTest(970)).toEqual(16 + ':' + 10);
    });

    it('Test_10', () => {
        expect(timeConvertTest(565757)).toEqual(9429 + ':' + 17);
    });
});
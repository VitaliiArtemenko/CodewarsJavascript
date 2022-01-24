const easyLogsTest = require('./easyLogs');

describe('Easy logs', () => {

    it('Test_1', () => {
        expect(easyLogsTest(10, 2, 3)).toEqual(0.7781512503836435);
    });

    it('Test_2', () => {
        expect(easyLogsTest(5, 2, 3)).toEqual(1.1132827525593785);
    });

    it('Test_3', () => {
        expect(easyLogsTest(1000, 2, 3)).toEqual(0.25938375012788123);
    });
});
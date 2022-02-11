const patternTest = require('./pattern');

describe('Number-Star ladder', () => {

    it('Test_1', () => {
        expect(patternTest(7)).toEqual('1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7');
    });

    it('Test_2', () => {
        expect(patternTest(3)).toEqual('1\n1*2\n1**3');
    });

    it('Test_3', () => {
        expect(patternTest(20)).toEqual('1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7\n1*******8\n' +
            '1********9\n1*********10\n1**********11\n1***********12\n1************13\n1*************14\n' +
            '1**************15\n1***************16\n1****************17\n1*****************18\n1******************19\n' +
            '1*******************20');
    });

    it('Test_4', () => {
        expect(patternTest(11)).toEqual('1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7\n1*******8\n' +
            '1********9\n1*********10\n1**********11');
    });

    it('Test_5', () => {
        expect(patternTest(0)).toEqual('1');
    });

    it('Test_6', () => {
        expect(patternTest(1)).toEqual('1');
    });
});
const addBinaryTest = require('./addBinary');

describe('Binary Addition', () => {

    it('Test_1', () => {
        expect(addBinaryTest(1, 1)).toEqual('10');
    });

    it('Test_2', () => {
        expect(addBinaryTest(5, 9)).toEqual('1110');
    });

    it('Test_3', () => {
        expect(addBinaryTest(51, 12)).toEqual('111111');
    });

    it('Test_4', () => {
        expect(addBinaryTest(100, 0)).toEqual('1100100');
    });

    it('Test_5', () => {
        expect(addBinaryTest(959226362712832, 74891622995601))
            .toEqual('11101011001000011001011011001100011010100110010001');
    });
});
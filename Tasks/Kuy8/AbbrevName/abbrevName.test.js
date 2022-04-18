const abbrevNameTest = require('./abbrevName');

describe('Abbreviate a Two Word Name', () => {

    it('Test_1', () => {
        expect(abbrevNameTest('Sam Harris')).toEqual('S.H');
    });

    it('Test_2', () => {
        expect(abbrevNameTest('P Favuzzi')).toEqual('P.F');
    });

    it('Test_3', () => {
        expect(abbrevNameTest('patrick Feenan')).toEqual('P.F');
    });

    it('Test_4', () => {
        expect(abbrevNameTest('Evan cole')).toEqual('E.C');
    });

    it('Test_5', () => {
        expect(abbrevNameTest('david mendieta')).toEqual('D.M');
    });
});
const sumStrTest = require('./sumStr');

describe('Sum The Strings', () => {

    it('Test_1', () => {
        expect(sumStrTest('4', '5')).toEqual('9');
    });

    it('Test_2', () => {
        expect(sumStrTest('34', '5')).toEqual('39');
    });

    it('Test_3', () => {
        expect(sumStrTest('0.15', '25')).toEqual('25.15');
    });

    it('Test_4', () => {
        expect(sumStrTest('0.002', '0.02')).toEqual('0.022');
    });

    it('Test_5', () => {
        expect(sumStrTest('9999', '1')).toEqual('10000');
    });
});
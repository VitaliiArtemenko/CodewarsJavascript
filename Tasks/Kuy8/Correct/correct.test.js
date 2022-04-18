const correctTest = require('./correct');

describe('Correct the mistakes of the character recognition software', () => {

    it('Test_1', () => {
        expect(correctTest('L0ND0N')).toEqual('LONDON');
    });

    it('Test_2', () => {
        expect(correctTest('DUBL1N')).toEqual('DUBLIN');
    });

    it('Test_3', () => {
        expect(correctTest('51NGAP0RE')).toEqual('SINGAPORE');
    });

    it('Test_4', () => {
        expect(correctTest('BUDAPE5T')).toEqual('BUDAPEST');
    });

    it('Test_5', () => {
        expect(correctTest('PAR15')).toEqual('PARIS');
    });
});
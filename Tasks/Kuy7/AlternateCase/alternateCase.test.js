const alternateCaseTest = require('./alternateCase');

describe('Alternate case', () => {

    it('Test_1', () => {
        expect(alternateCaseTest('abc')).toEqual('ABC');
    });

    it('Test_2', () => {
        expect(alternateCaseTest('ABC')).toEqual('abc');
    });

    it('Test_3', () => {
        expect(alternateCaseTest('Hello World')).toEqual('hELLO wORLD');
    });

    it('Test_4', () => {
        expect(alternateCaseTest('66lPQAR8QOBjFJIrC@PgL')).toEqual('66Lpqar8qobJfjiRc@pGl');
    });

    it('Test_5', () => {
        expect(alternateCaseTest('@X!l2Tv%urvP7mLPGpl&Spf6GvJcNPGbnvPZD~zyT@'))
            .toEqual('@x!L2tV%URVp7MlpgPL&sPF6gVjCnpgBNVpzd~ZYt@');
    });
});
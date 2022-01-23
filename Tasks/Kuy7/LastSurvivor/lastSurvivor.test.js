const lastSurvivorTest = require('./lastSurvivor')

describe('LastSurvivor', () => {

    it('Test_1', () => {
       expect(lastSurvivorTest('abc', [1, 1])).toEqual('a');
    });

    it('Test_2', () => {
        expect(lastSurvivorTest('kbc', [0, 1])).toEqual('b');
    });

    it('Test_3', () => {
        expect(lastSurvivorTest('zbk', [2, 1])).toEqual('z');
    });

    it('Test_4', () => {
        expect(lastSurvivorTest('c', [])).toEqual('c');
    });
})
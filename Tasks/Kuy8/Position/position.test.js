const positionTest = require('./position');

describe('Find the position!', () => {

    it('Test_1', () => {
        expect(positionTest('a')).toEqual('Position of alphabet: 1');
    });

    it('Test_2', () => {
        expect(positionTest('z')).toEqual('Position of alphabet: 26');
    });

    it('Test_3', () => {
        expect(positionTest('e')).toEqual('Position of alphabet: 5');
    });
});
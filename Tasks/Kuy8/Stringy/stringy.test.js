const stringyTest = require('./stringy');

describe('Stringy Strings', () => {

    it('Test_1', () => {
        expect(stringyTest(4)).toEqual('1010');
    });

    it('Test_1', () => {
        expect(stringyTest(6)).toEqual('101010');
    });

    it('Test_1', () => {
        expect(stringyTest(12)).toEqual('101010101010');
    });

    it('Test_1', () => {
        expect(stringyTest(11)).toEqual('10101010101');
    });

    it('Test_1', () => {
        expect(stringyTest(21)).toEqual('101010101010101010101');
    });
});
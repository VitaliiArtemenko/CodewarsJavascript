const findShortTest = require('./findShort');

describe('Shortest Word', () => {

    it('Test_1', () => {
        expect(findShortTest('bitcoin take over the world maybe who knows perhaps')).toEqual(3);
    });

    it('Test_2', () => {
        expect(findShortTest('turns out random test cases are easier than writing out basic ones')).toEqual(3);
    });

    it('Test_3', () => {
        expect(findShortTest("Let's travel abroad shall we")).toEqual(2);
    });

    it('Test_4', () => {
        expect(findShortTest('Waves ProofOfStake Dogecoin')).toEqual(5);
    });

    it('Test_5', () => {
        expect(findShortTest('MadeSafeCoin Wavessss ProofOfWork Wavesol Steems')).toEqual(6);
    });
});
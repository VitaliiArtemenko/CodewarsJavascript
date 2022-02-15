const simpleMultiplicationTest = require('./simpleMultiplication');

describe('Simple multiplication', () => {

    it('Test_1', () => {
        expect(simpleMultiplicationTest(1)).toEqual(9);
    });

    it('Test_2', () => {
        expect(simpleMultiplicationTest(2)).toEqual(16);
    });

    it('Test_3', () => {
        expect(simpleMultiplicationTest(4)).toEqual(32);
    });

    it('Test_4', () => {
        expect(simpleMultiplicationTest(5)).toEqual(45);
    });

    it('Test_5', () => {
        expect(simpleMultiplicationTest(8)).toEqual(64);
    });
});
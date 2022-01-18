const oddOrEvenTest = require('./oddOrEven');

describe('OddOrEven', () => {

    it('Test_1', () => {
        expect(oddOrEvenTest(1)).toBe('Either');
    });

    it('test_2', () => {
        expect(oddOrEvenTest(6)).toBe('Odd');
    });

    it('Test_3', () => {
        expect(oddOrEvenTest(8)).toBe('Even');
    });

    it('Test_4', () => {
        expect(oddOrEvenTest(0)).toBe('Even');
    });
});
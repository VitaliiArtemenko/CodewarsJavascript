const strangeMathTest = require('./strangeMath');

describe('Strange mathematics', () => {

    it('Test_1', () => {
        expect(strangeMathTest(11, 2)).toEqual(4);
    });

    it('Test_2', () => {
        expect(strangeMathTest(15, 5)).toEqual(11);
    });

    it('Test_3', () => {
        expect(strangeMathTest(15,15)).toEqual(7);
    });

    it('Test_4', () => {
        expect(strangeMathTest(928,319)).toEqual(245);
    });

    it('Test_5', () => {
        expect(strangeMathTest(168,100)).toEqual(3);
    });
});
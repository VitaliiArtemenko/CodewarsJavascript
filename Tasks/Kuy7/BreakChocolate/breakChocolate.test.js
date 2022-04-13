const breakChocolateTest = require('./breakChocolate');

describe('Breaking chocolate problem', () => {

    it('Test_1', () => {
        expect(breakChocolateTest(1, 1)).toEqual(0);
    });

    it('Test_2', () => {
        expect(breakChocolateTest(0, 5)).toEqual(0);
    });

    it('Test_3', () => {
        expect(breakChocolateTest(5, 0)).toEqual(0);
    });

    it('Test_4', () => {
        expect(breakChocolateTest(0, 0)).toEqual(0);
    });

    it('Test_5', () => {
        expect(breakChocolateTest(5, 5)).toEqual(24);
    });
});
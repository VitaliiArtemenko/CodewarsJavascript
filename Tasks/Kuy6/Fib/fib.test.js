const fibTest = require('./fib');

describe('Fibonacci Reloaded', () => {

    it('Test_1', () => {
        expect(fibTest(1)).toEqual(0);
    });

    it('Test_2', () => {
        expect(fibTest(2)).toEqual(1);
    });

    it('Test_3', () => {
        expect(fibTest(3)).toEqual(1);
    });

    it('Test_4', () => {
        expect(fibTest(4)).toEqual(2);
    });

    it('Test_5', () => {
        expect(fibTest(5)).toEqual(3);
    });

    it('Test_6', () => {
        expect(fibTest(6)).toEqual(5);
    });

    it('Test_7', () => {
        expect(fibTest(7)).toEqual(8);
    });

    it('Test_8', () => {
        expect(fibTest(8)).toEqual(13);
    });

    it('Test_9', () => {
        expect(fibTest(9)).toEqual(21);
    });

    it('Test_10', () => {
        expect(fibTest(10)).toEqual(34);
    });
});
const fibonacciRabbitsTest = require('./fibonacciRabbits');

describe('Fibonacci Rabbits', () => {

    it('Test_1', () => {
        expect(fibonacciRabbitsTest(0, 4)).toEqual(0);
    })

    it('Test_2', () => {
        expect(fibonacciRabbitsTest(1,4)).toEqual(1);
    })

    it('Test_3', () => {
        expect(fibonacciRabbitsTest(4,0)).toEqual(1);
    })

    it('Test_4', () => {
        expect(fibonacciRabbitsTest(6,3)).toEqual(40);
    })

    it('Test_5', () => {
        expect(fibonacciRabbitsTest(8,12)).toEqual(8425);
    })

    it('Test_6', () => {
        expect(fibonacciRabbitsTest(7, 4)).toEqual(181);
    })
})
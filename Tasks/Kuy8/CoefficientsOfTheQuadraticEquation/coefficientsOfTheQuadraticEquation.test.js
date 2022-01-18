const coefficientsOfTheQuadraticEquationTest = require('./coefficientsOfTheQuadraticEquation');

describe('CoefficientsOfTheQuadraticEquation', () => {

    it('Test_1', () => {
        expect(coefficientsOfTheQuadraticEquationTest(0, 1)).toEqual([1, -1, 0]);
    });

    it('Test_2', () => {
        expect(coefficientsOfTheQuadraticEquationTest(1, 1)).toEqual([1, -2, 1]);
    });

    it('Test_3', () => {
        expect(coefficientsOfTheQuadraticEquationTest(-4, -9)).toEqual([1, 13, 36]);
    });

    it('Test_4', () => {
        expect(coefficientsOfTheQuadraticEquationTest(-5, -4)).toEqual([1, 9, 20]);
    });

    it('Test_5', () => {
        expect(coefficientsOfTheQuadraticEquationTest(4, -9)).toEqual([1, 5, -36]);
    });

    it('Test_6', () => {
        expect(coefficientsOfTheQuadraticEquationTest(5, -4)).toEqual([1, -1, -20]);
    });
});
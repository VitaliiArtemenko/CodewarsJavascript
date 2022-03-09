const sumTriangularNumbersTest = require('./sumTriangularNumbers');

describe('Sum of Triangular Numbers', () => {

    it('Test_1', () => {
        expect(sumTriangularNumbersTest(6)).toEqual(56);
    });

    it('Test_2', () => {
        expect(sumTriangularNumbersTest(34)).toEqual(7140);
    });

    it('Test_3', () => {
        expect(sumTriangularNumbersTest(-291)).toEqual(0);
    });

    it('Test_4', () => {
        expect(sumTriangularNumbersTest(943)).toEqual(140205240);
    });

    it('Test_5', () => {
        expect(sumTriangularNumbersTest(-100)).toEqual(0);
    });
});
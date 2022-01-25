const factorialTest = require('./factorial');

describe('Factorial', () => {

    it('Test_1', () => {
        expect(factorialTest(0)).toEqual(1);
    });

    it('Test_2', () => {
       expect(factorialTest(1)).toEqual(1);
    });

    it('Test_3', () => {
        expect(factorialTest(4)).toEqual(24);
    });

    it('Test_4', () => {
        expect(factorialTest(7)).toEqual(5040);
    });

    it('Test_5', () => {
        expect(factorialTest(17)).toEqual(355687428096000);
    });
});


const calculateYearsTest = require('./calculateYears');

describe('Money, Money, Money', () => {

    it('Test_1', () => {
        expect(calculateYearsTest(1000, 0.05, 0.18, 1100)).toEqual(3);
    });

    it('Test_2', () => {
        expect(calculateYearsTest(1000,0.01625,0.18,1200)).toEqual(14);
    });

    it('Test_3', () => {
        expect(calculateYearsTest(1000,0.05,0.18,1000)).toEqual(0);
    });

    it('Test_4', () => {
        expect(calculateYearsTest(9037683, 0.04, 0.8, 9733937)).toEqual(10);
    });

    it('Test_5', () => {
        expect(calculateYearsTest(2101796, 0.01, 0.11, 3485354)).toEqual(58);
    });
});
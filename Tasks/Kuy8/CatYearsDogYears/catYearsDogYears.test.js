const humanYearsCatYearsDogYearsTest = require('./catYearsDogYears');

describe('Cat years, Dog years', () => {

    it('Test_1', () => {
       expect(humanYearsCatYearsDogYearsTest(1)).toEqual([1, 15, 15]);
    });

    it('Test_2', () => {
        expect(humanYearsCatYearsDogYearsTest(2)).toEqual([2, 24, 24]);
    });

    it('Test_3', () => {
        expect(humanYearsCatYearsDogYearsTest(10)).toEqual([10, 56, 64]);
    });

    it('Test_4', () => {
       expect(humanYearsCatYearsDogYearsTest(25)).toEqual([25, 116, 139]);
    });
});
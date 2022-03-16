const nbYearTest = require('./nbYear');

describe('Growth of a Population', () => {

    it('Test_1', () => {
        expect(nbYearTest(1500, 5, 100, 5000)).toEqual(15);
    });

    it('Test_2', () => {
        expect(nbYearTest(1000, 2, 50, 1214)).toEqual(4);
    });

    it('Test_3', () => {
        expect(nbYearTest(1500000, 2.5, 10000, 2000000)).toEqual(10);
    });

    it('Test_4', () => {
        expect(nbYearTest(1500000, 0.25, 1000, 2000000)).toEqual(94);
    });

    it('Test_5', () => {
        expect(nbYearTest(1605221, 9.74, 8026, 1990469)).toEqual(3);
    });

    it('Test_6', () => {
        expect(nbYearTest(83410, 0.72, 417, 109264)).toEqual(24);
    });
});
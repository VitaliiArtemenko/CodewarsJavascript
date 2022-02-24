const fuelPriceTest = require('./fuelPrice');

describe('Fuel Calculator', () => {

    it('Test_1', () => {
        expect(fuelPriceTest(5,1.23)).toEqual(5.65);
    });

    it('Test_2', () => {
        expect(fuelPriceTest(8, 2.5)).toEqual(18.40);
    });

    it('Test_3', () => {
        expect(fuelPriceTest(5,5.6)).toEqual(27.50);
    });

    it('Test_4', () => {
        expect(fuelPriceTest(236, 17.45)).toEqual(4059.2);
    });

    it('Test_5', () => {
        expect(fuelPriceTest(89, 12.94)).toEqual(1129.41);
    });
});
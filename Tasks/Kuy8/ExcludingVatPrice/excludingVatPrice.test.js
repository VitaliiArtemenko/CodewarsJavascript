const excludingVatPriceTest = require('./excludingVatPrice');

describe('Calculate Price Excluding VAT', () => {

    it('Test_1', () => {
        expect(excludingVatPriceTest(230)).toEqual(200.00);
    });

    it('Test_2', () => {
        expect(excludingVatPriceTest(123)).toEqual(106.96);
    });

    it('Test_3', () => {
        expect(excludingVatPriceTest(0)).toEqual(0);
    });

    it('Test_4',  () => {
        expect(excludingVatPriceTest(null)).toEqual(-1);
    });

    it('Test_5', () => {
        expect(excludingVatPriceTest(777)).toEqual(675.65);
    });
});
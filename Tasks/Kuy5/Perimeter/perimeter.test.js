const perimeterTest = require('./perimeter');

describe('Perimeter of squares in a rectangle', () => {

    it('Test_1', () => {
        expect(perimeterTest(0)).toEqual(4);
    });

    it('Test_2', () => {
        expect(perimeterTest(5)).toEqual(80);
    });

    it('Test_3', () => {
        expect(perimeterTest(7)).toEqual(216);
    });

    it('Test_4', () => {
        expect(perimeterTest(20)).toEqual(114624);
    });

    it('Test_5', () => {
        expect(perimeterTest(30)).toEqual(14098308);
    });
});
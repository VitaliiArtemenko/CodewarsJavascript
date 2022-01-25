const nearestSquareNumberTest = require('./nearestSquareNumber');

describe('Find Nearest square number', () => {

    it('Test_1', () => {
        expect(nearestSquareNumberTest(1)).toEqual(1);
    });

    it('Test_2', () => {
        expect(nearestSquareNumberTest(2)).toEqual(1);
    });

    it('Test_3', () => {
        expect(nearestSquareNumberTest(10)).toEqual(9);
    });

    it('Test_4', () => {
        expect(nearestSquareNumberTest(111)).toEqual(121);
    });

    it('Test_5', () => {
        expect(nearestSquareNumberTest(9999)).toEqual(10000);
    });
});
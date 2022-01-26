const potenciationTest = require('./potenciation');

describe('Potenciation', () => {

    it('Test_1', () => {
        expect(potenciationTest(1, 701270)).toEqual(1);
    });

    it('Test_2', () => {
        expect(potenciationTest(2,2)).toEqual(4);
    });

    it('Test_3', () => {
        expect(potenciationTest(3,2)).toEqual(9);
    });

    it('Test_4', () => {
        expect(potenciationTest(-1, 40)).toEqual(1);
    });

    it('Test_5', () => {
       expect(potenciationTest(0, 2)).toEqual(0);
    });
});
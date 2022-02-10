const dontGiveMeFiveTest = require('./dontGiveMeFive');

describe("Don't give me five!", () => {

    it('Test_1', () => {
        expect(dontGiveMeFiveTest(1, 9)).toEqual(8);
    });

    it('Test_2', () => {
        expect(dontGiveMeFiveTest(4, 17)).toEqual(12);
    });

    it('Test_3', () => {
        expect(dontGiveMeFiveTest(1, 90)).toEqual(72);
    });

    it('Test_4', () => {
        expect(dontGiveMeFiveTest(9, 47)).toEqual(35);
    });

    it('Test_5', () => {
        expect(dontGiveMeFiveTest(45, 46)).toEqual(1);
    });
});
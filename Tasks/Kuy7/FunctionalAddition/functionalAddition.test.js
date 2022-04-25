const functionalAdditionTest = require('./functionalAddition');

describe('Functional Addition', () => {

    it('Test_1', () => {
        expect(functionalAdditionTest(1)(3)).toEqual(4);
    });

    it('Test_2', () => {
        expect(functionalAdditionTest(10)(10)).toEqual(20);
    });

    it('Test_3', () => {
        expect(functionalAdditionTest(-5)(5)).toEqual(0);
    });

    it('Test_4', () => {
        expect(functionalAdditionTest(100)(-999)).toEqual(-899);
    });

    it('Test_5', () => {
        expect(functionalAdditionTest(-1)(-1)).toEqual(-2);
    });
});
const findNbTest = require('./findNb');

describe('Build a pile of Cubes', () => {

    it('Test_1', () => {
        expect(findNbTest(4183059834009)).toEqual(2022);
    });

    it('Test_2', () => {
        expect(findNbTest(24723578342962)).toEqual(-1);
    });

    it('Test_3', () => {
        expect(findNbTest(135440716410000)).toEqual(4824);
    });

    it('Test_4', () => {
        expect(findNbTest(40539911473216)).toEqual(3568);
    });

    it('Test_5', () => {
        expect(findNbTest(9)).toEqual(2);
    });

    it('Test_6', () => {
        expect(findNbTest(11)).toEqual(-1);
    });
});
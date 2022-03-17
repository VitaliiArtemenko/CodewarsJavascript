const parseFTest = require('./parseF');

describe('Parse float', () => {

    it('Test_1', () => {
        expect(parseFTest('1')).toEqual(1);
    });

    it('Test_2', () => {
        expect(parseFTest('123')).toEqual(123);
    });

    it('Test_3', () => {
        expect(parseFTest('2.5')).toEqual(2.5);
    });

    it('Test_4', () => {
        expect(parseFTest('one')).toEqual(null);
    });

    it('Test_5', () => {
        expect(parseFTest(true)).toEqual(null);
    });

    it('Test_6', () => {
        expect(parseFTest(false)).toEqual(null);
    });

    it('Test_7', () => {
        expect(parseFTest(undefined)).toEqual(null);
    });
});
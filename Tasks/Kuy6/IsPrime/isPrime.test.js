const isPrimeTest = require('./isPrime');

describe('Is a number prime?', () => {

    it('Test_1', () => {
        expect(isPrimeTest(0)).toEqual(false);
    });

    it('Test_2', () => {
        expect(isPrimeTest(1)).toEqual(false);
    });

    it('Test_3', () => {
        expect(isPrimeTest(2)).toEqual(true);
    });

    it('Test_4', () => {
        expect(isPrimeTest(73)).toEqual(true);
    });

    it('Test_5', () => {
        expect(isPrimeTest(75)).toEqual(false);
    });

    it('Test_6', () => {
        expect(isPrimeTest(-1)).toEqual(false);
    });

    it('Test_7', () => {
        expect(isPrimeTest(0)).toEqual(false);
    });

    it('Test_8', () => {
        expect(isPrimeTest(5099)).toEqual(true);
    });

    it('Test_9', () => {
        expect(isPrimeTest(41)).toEqual(true);
    });

    it('Test_10', () => {
        expect(isPrimeTest(61)).toEqual(true);
    });
});
const nthFiboTest = require('./nthFibo');

describe('N-th Fibonacci', () => {

    it('Test_1', () => {
        expect(nthFiboTest(0)).toEqual(0);
    });

    it('Test_2', () => {
        expect(nthFiboTest(1)).toEqual(0);
    });

    it('Test_3', () => {
        expect(nthFiboTest(4)).toEqual(2);
    });

    it('Test_4', () => {
        expect(nthFiboTest(19)).toEqual(2584);
    });

    it('Test_5', () => {
        expect(nthFiboTest(27)).toEqual(121393);
    });
});
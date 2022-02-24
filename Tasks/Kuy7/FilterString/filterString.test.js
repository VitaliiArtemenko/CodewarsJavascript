const filterStringTest = require('./filterString');

describe('Filter the number', () => {

    it('Test_1', () => {
        expect(filterStringTest('123')).toEqual(123);
    });

    it('Test_2', () => {
        expect(filterStringTest('a1b2c3')).toEqual(123);
    });

    it('Test_3', () => {
        expect(filterStringTest('aa1bb2cc3dd')).toEqual(123);
    });

    it('Test_4', () => {
        expect(filterStringTest('85ff8f0e22d8d646f68bdb4f6884a7ea')).toEqual(858022864668468900);
    });

    it('Test_5', () => {
        expect(filterStringTest('5fb2fdfcff47821ea87527a794b78b73')).toEqual(5247821875277948000);
    });
});
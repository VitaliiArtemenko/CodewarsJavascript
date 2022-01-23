const twiceAsOldTest = require('./twiceAsOld');

describe('Twice as old', () => {

    it('Test_1', () => {
       expect(twiceAsOldTest(36, 7)).toEqual(22);
    });

    it('test_2', () => {
        expect(twiceAsOldTest(55, 30)).toEqual(5);
    });

    it('Test_3', () => {
        expect(twiceAsOldTest(42, 21)).toEqual(0);
    });

    it('Test_4', () => {
        expect(twiceAsOldTest(22, 1)).toEqual(20);
    });

    it('Test-5', () => {
        expect(twiceAsOldTest(29, 0)).toEqual(29);
    });
});
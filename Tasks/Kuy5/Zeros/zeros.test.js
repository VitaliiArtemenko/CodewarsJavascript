const zerosTest = require('./zeros');

describe('Number of trailing zeros of N!', () => {

    it('Test_1', () => {
        expect(zerosTest(0)).toEqual(0);
    });

    it('Test_1', () => {
        expect(zerosTest(5)).toEqual(1);
    });

    it('Test_2', () => {
        expect(zerosTest(6)).toEqual(1);
    });

    it('Test_3', () => {
        expect(zerosTest(30)).toEqual(7);
    });

    it('Test_4', () => {
        expect(zerosTest(100)).toEqual(24);
    });

    it('Test_5', () => {
        expect(zerosTest(1000)).toEqual(249);
    });

    it('Test_6', () => {
        expect(zerosTest(64890877)).toEqual(16222716);
    });
});
const findSquaresTest = require('./findSquares');

describe('Find the Squares', () => {

    it('Test_1', () => {
        expect(findSquaresTest(9)).toEqual('25-16');
    });

    it('Test_2', () => {
        expect(findSquaresTest(5)).toEqual('9-4');
    });

    it('Test_3', () => {
        expect(findSquaresTest(81)).toEqual('1681-1600');
    });

    it('Test_4', () => {
        expect(findSquaresTest(25)).toEqual('169-144');
    });

    it('Test_5', () => {
        expect(findSquaresTest(27137)).toEqual('184117761-184090624');
    });
});
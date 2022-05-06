const bingoTest = require('./bingo');

describe('Bingo ( Or Not )', () => {

    it('Test_1', () => {
        expect(bingoTest([1,2,3,4,5,6,7,8,9,10])).toEqual('LOSE');
    })

    it('Test_2', () => {
        expect(bingoTest([21,13,2,7,5,14,7,15,9,10])).toEqual('WIN');
    })

    it('Test_3', () => {
        expect(bingoTest([14, 7, 24, 15, 3, 9, 24, 2, 2, 1])).toEqual('WIN');
    })

    it('Test_4', () => {
        expect(bingoTest([5, 2, 13, 7, 5, 14, 17, 15, 9, 10])).toEqual('WIN');
    })

    it('Test_5', () => {
        expect(bingoTest([21,13,2,7,5,14,7,15,9,10, 21,13,2,7,5,14,7,15,9,10])).toEqual('WIN');
    })

    it('Test_6', () => {
        expect(bingoTest([6, 28, 5, 21, 19, 27, 5, 27, 28, 29])).toEqual('LOSE');
    })
})
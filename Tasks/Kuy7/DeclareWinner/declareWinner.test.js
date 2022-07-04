const declareWinnerTest = require('./declareWinner');
const Fighter = require('./fighter');

describe('Two fighters, one winner', () => {

    it('Test_1', () => {
        expect(declareWinnerTest(Fighter.Lew, Fighter.Harry, 'Lew')).toEqual('Lew')
    })

    it('Test_2', () => {
        expect(declareWinnerTest(Fighter.Lew, Fighter.Harry, 'Harry')).toEqual('Harry')
    })

    it('Test_3', () => {
        expect(declareWinnerTest(Fighter.Harald, Fighter.Harry, 'Harry')).toEqual('Harald')
    })

    it('Test_4', () => {
        expect(declareWinnerTest(Fighter.Harald, Fighter.Harry, 'Harald')).toEqual('Harald')
    })

    it('Test_5', () => {
        expect(declareWinnerTest(Fighter.Jerry, Fighter.Harald, 'Jerry')).toEqual('Harald')
    })

    it('Test_6', () => {
        expect(declareWinnerTest(Fighter.Jerry, Fighter.Harald, 'Harald')).toEqual('Harald')
    })
})
const racePodiumTest = require('./racePodium')

function testing(n, expected) {
    expect(racePodiumTest(n)).toEqual(expected)
}

describe('Race Ceremony', () => {

    it('Test_1', () => {
        testing(11, [4, 5, 2])
    })

    it('Test_2', () => {
        testing(6, [2, 3, 1])
    })

    it('Test_3', () => {
        testing(100000, [33334, 33335, 33331])
    })

    it('Test_4', () => {
        testing(7, [2, 4, 1])
    })

    it('Test_5', () => {
        testing(8, [3, 4, 1])
    })

    it('Test_6', () => {
        testing(10, [4, 5, 1])
    })
})
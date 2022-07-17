const alternateTest = require('./alternate');

describe('Length and two values', () => {

    it('Test_1', () => {
        expect(alternateTest(5, true, false)).toEqual([true, false, true, false, true])
    })

    it('Test_2', () => {
        expect(alternateTest(20, 'blue', 'red'))
            .toEqual(['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue',
                'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red'])
    })

    it('Test_3', () => {
        expect(alternateTest(0, "lemons", "apples")).toEqual([])
    })

    it('Test_4', () => {
        expect(alternateTest(11, 'ldwyo', 'piflm'))
            .toEqual(["ldwyo", "piflm", "ldwyo", "piflm", "ldwyo",
                "piflm", "ldwyo", "piflm", "ldwyo", "piflm", "ldwyo"])
    })

    it('Test_5', () => {
        expect(alternateTest(6, 'ci60ck', 'h93ey'))
            .toEqual(["ci60ck", "h93ey", "ci60ck", "h93ey", "ci60ck", "h93ey"])
    })
})
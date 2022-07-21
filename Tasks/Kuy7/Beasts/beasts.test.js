const beastsTest = require('./beasts')

describe("Example test cases", function() {

    it ("Valid number of animals", function() {
        expect(beastsTest(123,39)).toEqual([24, 15])
        expect(beastsTest(371,88)).toEqual([23, 65])
        expect(beastsTest(24,12)).toEqual([12, 0])
        expect(beastsTest(113,37)).toEqual([24, 13])
        expect(beastsTest(635,181)).toEqual([90, 91])
    })

    it ("Invalid number of animals", function() {
        expect(beastsTest(25,555)).toEqual('No solutions')
        expect(beastsTest(12,25)).toEqual('No solutions')
        expect(beastsTest(54, 956)).toEqual('No solutions')
    })
})
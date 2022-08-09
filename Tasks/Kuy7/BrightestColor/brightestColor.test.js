const brightestColorTest = require('./brightestColor')

describe('Which color is the brightest?', () => {

    it('Test_1', () => {
        expect(brightestColorTest(["#001000", "#000000"])).toEqual("#001000")
    })

    it('Test_2', () => {
        expect(brightestColorTest(["#ABCDEF", "#123456"])).toEqual("#ABCDEF")
    })

    it('Test_3', () => {
        expect(brightestColorTest(["#00FF00", "#FFFF00"])).toEqual("#00FF00")
    })

    it('Test_4', () => {
        expect(brightestColorTest(["#FFFFFF", "#1234FF"])).toEqual("#FFFFFF")
    })

    it('Test_5', () => {
        expect(brightestColorTest(["#FFFFFF", "#123456", "#000000"])).toEqual("#FFFFFF")
    })
})
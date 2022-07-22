const evenOddDisparityTest = require('./evenOddDisparity')

describe('Even odd disparity', () => {

    it('Test_1', () => {
        expect(evenOddDisparityTest([0,1,2,3])).toEqual(0)
    })

    it('Test_2', () => {
        expect(evenOddDisparityTest([0, 15,'z',16,'m', 13, 14,'c', 9, 10, 13,'u', 4, 3])).toEqual(0)
    })

    it('Test_3', () => {
        expect(evenOddDisparityTest([13, 6, 8, 15, 4, 8, 13])).toEqual(1)
    })

    it('Test_4', () => {
        expect(evenOddDisparityTest([0,1,2,3,'a','b'])).toEqual(0)
    })

    it('Test_5', () => {
        expect(evenOddDisparityTest([1,'a', 17, 8,'e', 3,'i', 12, 1])).toEqual(-2)
    })

    it('Test_6', () => {
        expect(evenOddDisparityTest([5, 15, 16, 10, 6, 4, 16, 't', 13, 'n', 14, 'k', 'n', 0, 'q', 'd', 7, 9]))
            .toEqual(2)
    })
})
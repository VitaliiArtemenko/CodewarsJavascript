const { chooseBestSum, chooseBestSumCopy } = require('./bestTravel');

describe("Best travel", () => {
    describe('Best travel_1', () => {

        it('Test_1', () => {
            expect(chooseBestSum(163, 3, [50, 55, 56, 57, 58])).toEqual(163)
        })

        it('Test_2', () => {
            expect(chooseBestSum(163, 3, [50])).toEqual(null)
        })

        it('Test_3', () => {
            expect(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87])).toEqual(228)
        })

        it('Test_4', () => {
            expect(chooseBestSum(1969, 3, [321, 86, 81, 29, 495, 385, 432, 299, 324, 281, 422, 293, 176, 233, 51]))
                .toEqual(1349)
        })

        it('Test_5', () => {
            expect(chooseBestSum(2300, 4, [1000, 640, 1230, 2333, 1440, 500, 1320, 1230, 340, 890, 732, 1346]))
                .toEqual(2212)
        })
    })

    describe('Best travel_2', () => {

        it('Test_1', () => {
            expect(chooseBestSumCopy(163, 3, [50, 55, 56, 57, 58])).toEqual(163)
        })

        it('Test_2', () => {
            expect(chooseBestSumCopy(163,3, [50])).toEqual(null)
        })

        it('Test_3', () => {
            expect(chooseBestSumCopy(230,3, [91, 74, 73, 85, 73, 81, 87])).toEqual(228)
        })

        it('Test_4', () => {
            expect(chooseBestSumCopy(1969, 3, [321, 86, 81, 29, 495, 385, 432, 299, 324, 281, 422, 293, 176, 233, 51]))
                .toEqual(1349)
        })

        it('Test_5', () => {
            expect(chooseBestSumCopy(2300, 4, [1000, 640, 1230, 2333, 1440, 500, 1320, 1230, 340, 890, 732, 1346]))
                .toEqual(2212)
        })
    })
})
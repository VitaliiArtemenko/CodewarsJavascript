const sqInRectTest = require('./sqInRect');

describe('Rectangle into Squares', () => {

    it('Test_1', () => {
        expect(sqInRectTest(5,5)).toEqual(null);
    })

    it('Test_2', () => {
        expect(sqInRectTest(5, 3)).toEqual([3, 2, 1, 1]);
    })

    it('Test_3', () => {
        expect(sqInRectTest(3,5)).toEqual([3, 2, 1, 1]);
    })

    it('Test_4', () => {
        expect(sqInRectTest(20,14)).toEqual([14, 6, 6, 2, 2, 2]);
    })

    it('Test_5', () => {
        expect(sqInRectTest(731, 230))
            .toEqual([230, 230, 230, 41, 41, 41, 41, 41, 25, 16, 9, 7, 2, 2, 2, 1, 1]);
    })
})
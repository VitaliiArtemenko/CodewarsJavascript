const sumDigPowTest = require('./sumDigPow');

describe('Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!', () => {

    it('Test_1', () => {
        expect(sumDigPowTest(1,10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })

    it('Test_2', () => {
        expect(sumDigPowTest(1,100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
    })

    it('Test_3', () => {
        expect(sumDigPowTest(10,100)).toEqual([89]);
    })

    it('Test_4', () => {
        expect(sumDigPowTest(90,100)).toEqual([]);
    })

    it('Test_5', () => {
        expect(sumDigPowTest(90,150)).toEqual([135]);
    })

    it('Test_6', () => {
        expect(sumDigPowTest(50,150)).toEqual([89, 135]);
    })

    it('Test_7', () => {
        expect(sumDigPowTest(10,150)).toEqual([89, 135]);
    })
})
const findSumTest = require('./findSum');

describe('Sum of all the multiples of 3 or 5', () => {

    it('Test_1', () => {
        expect(findSumTest(5)).toEqual(8);
    })

    it('Test_2', () => {
        expect(findSumTest(10)).toEqual(33);
    })

    it('Test_3', () => {
        expect(findSumTest(20)).toEqual(98);
    })

    it('Test_4', () => {
        expect(findSumTest(100)).toEqual(2418);
    })

    it('Test_5', () => {
        expect(findSumTest(33)).toEqual(258);
    })
})
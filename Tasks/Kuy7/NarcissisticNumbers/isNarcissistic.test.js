const isNarcissisticTest = require('./narcissisticNumbers');

describe('Narcissistic Numbers', () => {

    it('Test_1', () => {
        expect(isNarcissisticTest(370)).toEqual(true);
    })

    it('Test_2', () => {
        expect(isNarcissisticTest(1)).toEqual(true);
    })

    it('Test_3', () => {
        expect(isNarcissisticTest(153)).toEqual(true);
    })

    it('Test_4', () => {
        expect(isNarcissisticTest(435)).toEqual(false);
    })

    it('Test_5', () => {
        expect(isNarcissisticTest(324)).toEqual(false);
    })

    it('Test_6', () => {
        expect(isNarcissisticTest(371)).toEqual(true);
    })
})
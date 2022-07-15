const maskifyTest = require('./maskify')

describe('Credit Card Mask', () => {

    it('Test_1', () => {
        expect(maskifyTest('4556364607935616')).toEqual('############5616')
    })

    it('Test_2', () => {
        expect(maskifyTest('1')).toEqual('1')
    })

    it('Test_3', () => {
        expect(maskifyTest('1234')).toEqual('1234')
    })

    it('Test_4', () => {
        expect(maskifyTest('11111')).toEqual('#1111')
    })

    it('Test_5', () => {
        expect(maskifyTest('fm4hdq2wdnto3s52oys')).toEqual('###############2oys')
    })
})
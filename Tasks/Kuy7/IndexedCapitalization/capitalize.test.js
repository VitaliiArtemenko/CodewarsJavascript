const capitalizeTest = require('./indexedCapitalization');

describe('Indexed capitalization', () => {

    it('Test_1', () => {
        expect(capitalizeTest("abcdef",[1,2,5])).toEqual('aBCdeF')
    })

    it('Test_2', () => {
        expect(capitalizeTest("abcdef",[1,2,5,100])).toEqual('aBCdeF')
    })

    it('Test_3', () => {
        expect(capitalizeTest("codewars",[1,3,5,50])).toEqual('cOdEwArs')
    })

    it('Test_4', () => {
        expect(capitalizeTest("abracadabra",[2,6,9,10])).toEqual('abRacaDabRA')
    })

    it('Test_5', () => {
        expect(capitalizeTest("codewarriors",[5])).toEqual('codewArriors')
    })

    it('Test_6', () => {
        expect(capitalizeTest("indexinglessons",[0])).toEqual('Indexinglessons')
    })
})
const longestVowelChainTest = require('./longestVowelChain')

describe('Longest vowel chain', () => {

    it('Test_1', () => {
        expect(longestVowelChainTest('codewarriors')).toEqual(2)
    })

    it('Test_2', () => {
        expect(longestVowelChainTest('suoidea')).toEqual(3)
    })

    it('Test_3', () => {
        expect(longestVowelChainTest('ultrarevolutionariees')).toEqual(3)
    })

    it('Test_4', () => {
        expect(longestVowelChainTest('strengthlessnesses')).toEqual(1)
    })

    it('Test_5', () => {
        expect(longestVowelChainTest('cuboideonavicuare')).toEqual(2)
    })

    it('Test_6', () => {
        expect(longestVowelChainTest('chrononhotonthuooaos')).toEqual(5)
    })

    it('Test_7', () => {
        expect(longestVowelChainTest('iiihoovaeaaaoougjyaw')).toEqual(8)
    })
})
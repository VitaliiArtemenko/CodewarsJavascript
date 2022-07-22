const capitalizeTest = require('./capitalize');

describe('Alternate capitalization', () => {

    it('Test_1', () => {
        expect(capitalizeTest('abcdef')).toEqual(['AbCdEf', 'aBcDeF'])
    })

    it('Test_2', () => {
        expect(capitalizeTest('codewars')).toEqual(['CoDeWaRs', 'cOdEwArS'])
    })

    it('Test_3', () => {
        expect(capitalizeTest('abracadabra')).toEqual(['AbRaCaDaBrA', 'aBrAcAdAbRa'])
    })

    it('Test_4', () => {
        expect(capitalizeTest('codewarriors')).toEqual(['CoDeWaRrIoRs', 'cOdEwArRiOrS'])
    })

    it('Test_5', () => {
        expect(capitalizeTest('bcdefghijklmnopqr')).toEqual(['BcDeFgHiJkLmNoPqR', 'bCdEfGhIjKlMnOpQr'])
    })
})
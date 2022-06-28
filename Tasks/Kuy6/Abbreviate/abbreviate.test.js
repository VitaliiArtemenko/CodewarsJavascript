const abbreviateTest = require('./abbreviate');

describe('Word a10n (abbreviation)', () => {

    it('Test_1', () => {
        expect(abbreviateTest('internationalization')).toEqual('i18n');
    })

    it('Test_2', () => {
        expect(abbreviateTest('accessibility')).toEqual('a11y');
    })

    it('Test_3', () => {
        expect(abbreviateTest('Accessibility')).toEqual('A11y');
    })

    it('Test_4', () => {
        expect(abbreviateTest('elephant-ride')).toEqual('e6t-r2e');
    })

    it('Test_5', () => {
        expect(abbreviateTest('the')).toEqual('the');
    })

    it('Test_6', () => {
        expect(abbreviateTest('elephant-rides are really fun!')).toEqual('e6t-r3s are r4y fun!');
    })
})
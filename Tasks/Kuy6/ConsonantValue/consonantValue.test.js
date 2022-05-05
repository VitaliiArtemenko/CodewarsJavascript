const consonantValueTest = require('./consonantValue');

describe('Consonant value', () => {

    it('Test_1', () => {
        expect(consonantValueTest('zodiacs')).toEqual(26);
    })

    it('Test_2', () => {
        expect(consonantValueTest('chruschtschov')).toEqual(80);
    })

    it('Test_3', () => {
        expect(consonantValueTest('khrushchev')).toEqual(38);
    })

    it('Test_4', () => {
        expect(consonantValueTest('strength')).toEqual(57);
    })

    it('Test_5', () => {
        expect(consonantValueTest('catchphrase')).toEqual(73);
    })

    it('Test_6', () => {
        expect(consonantValueTest('twelfthstreet')).toEqual(103);
    })

    it('Test_7', () => {
        expect(consonantValueTest('mischtschenkoana')).toEqual(80);
    })
})
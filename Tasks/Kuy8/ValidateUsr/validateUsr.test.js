const validateUsrTest = require('./validateUsr');

describe('Simple validation of a username with regex', () => {

    it('Test_1', () => {
        expect(validateUsrTest('asddsa')).toEqual(true);
    });

    it('Test_2', () => {
        expect(validateUsrTest('a')).toEqual(false);
    });

    it('Test_3', () => {
        expect(validateUsrTest('Hass')).toEqual(false);
    });

    it('Test_4', () => {
        expect(validateUsrTest('Hasd_12assssssasasasasasaasasasasas')).toEqual(false);
    });

    it('Test_5', () => {
        expect(validateUsrTest('')).toEqual(false);
    });

    it('Test_6', () => {
        expect(validateUsrTest('____')).toEqual(true);
    });

    it('Test_7', () => {
        expect(validateUsrTest('012')).toEqual(false);
    });

    it('Test_8', () => {
        expect(validateUsrTest('p1pp1')).toEqual(true);
    });

    it('Test_9', () => {
        expect(validateUsrTest('asd43 34')).toEqual(false);
    });

    it('Test_10', () => {
        expect(validateUsrTest('asd43_34')).toEqual(true);
    });
});
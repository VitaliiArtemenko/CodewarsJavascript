const mobileKeyboardTest = require('./mobileKeyboard');

describe('Mobile Display Keystrokes', () => {

    it('Test_1', () => {
        expect(mobileKeyboardTest('')).toEqual(0);
    });

    it('Test_2', () => {
        expect(mobileKeyboardTest('123')).toEqual(3);
    });

    it('Test_3', () => {
        expect(mobileKeyboardTest('codewars')).toEqual(26);
    });

    it('Test_4', () => {
        expect(mobileKeyboardTest('zruf')).toEqual(16);
    });

    it('Test_5', () => {
        expect(mobileKeyboardTest('thisisasms')).toEqual(37);
    });

    it('Test_6', () => {
        expect(mobileKeyboardTest('longwordwhichdontreallymakessense')).toEqual(107);
    });
});
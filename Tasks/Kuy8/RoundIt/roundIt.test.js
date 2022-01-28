const roundItTest = require('./roundIt');

describe('Training JS #32: methods of Math---round() ceil() and floor()', () => {

    it('Test_1', () => {
        expect(roundItTest(3.45)).toEqual(4);
    });

    it('Test_2', () => {
        expect(roundItTest(34.5)).toEqual(34);
    });

    it('Test_3', () => {
        expect(roundItTest(34.56)).toEqual(35);
    });

    it('Test_4', () => {
        expect(roundItTest(7525.7481)).toEqual(7526);
    });

    it('Test_5', () => {
        expect(roundItTest(9.18)).toEqual(10);
    });
});
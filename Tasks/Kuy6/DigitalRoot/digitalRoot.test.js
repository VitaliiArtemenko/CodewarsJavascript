const digitalRootTest = require('./digitalRoot');

describe('Sum of Digits / Digital Root', () => {

    it('Test_1', () => {
        expect(digitalRootTest(16)).toEqual(7);
    });

    it('Test_2', () => {
        expect(digitalRootTest(942)).toEqual(6);
    });

    it('Test_3', () => {
        expect(digitalRootTest(132189)).toEqual(6);
    });

    it('Test_4', () => {
        expect(digitalRootTest(493193)).toEqual(2);
    });

    it('Test_5', () => {
        expect(digitalRootTest(456)).toEqual(6);
    });

    it('Test_6', () => {
        expect(digitalRootTest(888442)).toEqual(7);
    });
});
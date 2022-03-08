const isAltTest = require('./isAlt');

describe('Are we alternate?', () => {

    it('Test_1', () => {
        expect(isAltTest('banana')).toEqual(true);
    });

    it('Test_2', () => {
        expect(isAltTest('bananaa')).toEqual(false);
    });

    it('Test_3', () => {
        expect(isAltTest('amazon')).toEqual(true);
    });

    it('Test_4', () => {
        expect(isAltTest('apple')).toEqual(false);
    });

    it('Test_5', () => {
        expect(isAltTest('aamazon')).toEqual(false);
    });
});
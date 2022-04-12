const validBracesTest = require('./validBraces');

describe('Valid Braces', () => {

    it('Test_1', () => {
        expect(validBracesTest('()')).toEqual(true);
    });

    it('Test_2', () => {
        expect(validBracesTest('{}')).toEqual(true);
    });

    it('Test_3', () => {
        expect(validBracesTest('[]')).toEqual(true);
    });

    it('Test_4', () => {
        expect(validBracesTest('()))')).toEqual(false);
    });

    it('Test_5', () => {
        expect(validBracesTest('(){}[]')).toEqual(true);
    });

    it('Test_6', () => {
        expect(validBracesTest('([{}])')).toEqual(true);
    });

    it('Test_7', () => {
        expect(validBracesTest('(}')).toEqual(false);
    });

    it('Test_8', () => {
        expect(validBracesTest('[(])')).toEqual(false);
    });

    it('Test_9', () => {
        expect(validBracesTest('({})[({})]')).toEqual(true);
    });

    it('Test_10', () => {
        expect(validBracesTest('(})')).toEqual(false);
    });

    it('Test_11', () => {
        expect(validBracesTest('(({{[[]]}}))')).toEqual(true);
    });

    it('Test_12', () => {
        expect(validBracesTest('{}({})[]')).toEqual(true);
    });

    it('Test_13', () => {
        expect(validBracesTest(')(}{][')).toEqual(false);
    });

    it('Test_14', () => {
        expect(validBracesTest('())({}}{()][][')).toEqual(false);
    });

    it('Test_15', () => {
        expect(validBracesTest('(((({{')).toEqual(false);
    });

    it('Test_16', () => {
        expect(validBracesTest('}}]]))}])')).toEqual(false);
    });
});
const duplicateEncodeTest = require('./duplicateEncode');

describe('Duplicate Encoder', () => {

    it('Test_1', () => {
        expect(duplicateEncodeTest('din')).toEqual('(((');
    });

    it('Test_2', () => {
        expect(duplicateEncodeTest('recede')).toEqual('()()()');
    });

    it('Test_3', () => {
        expect(duplicateEncodeTest('Success')).toEqual(')())())');
    });

    it('Test_4', () => {
        expect(duplicateEncodeTest('(( @')).toEqual('))((');
    });

    it('Test_5', () => {
        expect(duplicateEncodeTest(' ( ( )')).toEqual(')))))(');
    });

    it('Test_6', () => {
        expect(duplicateEncodeTest('P(GcGGGGeG)Gmd')).toEqual('(()())))()()((');
    });

    it('Test_7', () => {
        expect(duplicateEncodeTest('wHkeHHyI@HH Hn')).toEqual('()(())((())()(');
    });

    it('Test_8', () => {
        expect(duplicateEncodeTest('c((((a(emG(')).toEqual('())))()((()');
    });

    it('Test_9', () => {
        expect(duplicateEncodeTest('xSxxxxGzQxIxkxbcxxx')).toEqual(')())))((()()()(()))');
    });

    it('Test_10', () => {
        expect(duplicateEncodeTest('')).toEqual('');
    });
});
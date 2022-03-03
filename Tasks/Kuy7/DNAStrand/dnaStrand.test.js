const dnaStrandTest = require('./dnaStrand');

describe('Complementary DNA', () => {

    it('Test_1', () => {
        expect(dnaStrandTest('AAAAA')).toEqual('TTTTT');
    });

    it('Test_2', () => {
        expect(dnaStrandTest('ATTGC')).toEqual('TAACG');
    });

    it('Test_3', () => {
        expect(dnaStrandTest('GTAT')).toEqual('CATA');
    });

    it('Test_4', () => {
        expect(dnaStrandTest('CTCCACATACTCTTTTGTTAG')).toEqual('GAGGTGTATGAGAAAACAATC');
    });

    it('Test_5', () => {
        expect(dnaStrandTest('CGCCCGTCGTT')).toEqual('GCGGGCAGCAA');
    });
});
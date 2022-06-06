const DNAtoRNATest = require('./DNAtoRNA');

describe("DNA to RNA Conversion", () => {

    it('Test_1', () => {
        expect(DNAtoRNATest('TTTT')).toEqual('UUUU');
    })

    it('Test_2', () => {
        expect(DNAtoRNATest('GCAT')).toEqual('GCAU');
    })

    it('Test_3', () => {
        expect(DNAtoRNATest('TTTT')).toEqual('UUUU');
    })

    it('Test_4', () => {
        expect(DNAtoRNATest('GACCGCCGCC')).toEqual('GACCGCCGCC');
    })

    it('Test_5', () => {
        expect(DNAtoRNATest('UTUTUTUTU')).toEqual('UUUUUUUUU');
    })
})
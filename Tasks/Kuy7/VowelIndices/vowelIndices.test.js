const vowelIndicesTest = require('./vowelIndices');

describe('Find the vowels', () => {

    it('Test_1', () => {
        expect(vowelIndicesTest('mmm')).toEqual([]);
    })

    it('Test_2', () => {
        expect(vowelIndicesTest('Apple')).toEqual([1,5]);
    })

    it('Test_3', () => {
        expect(vowelIndicesTest('SUPER')).toEqual([2,4]);
    })

    it('Test_4', () => {
        expect(vowelIndicesTest('orange')).toEqual([1,3,6]);
    })

    it('Test_5', () => {
        expect(vowelIndicesTest('supercalifragilisticexpialidocious'))
            .toEqual([2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
    })
})

const consecutiveVowelsTest = require('./consecutiveVowels')

describe('Consecutive Vowels in a String', () => {

    it('Test_1', () => {
        expect(consecutiveVowelsTest('akfheujfkgiaaaofmmfkdfuaiiie')).toEqual(7)
    })

    it('Test_2', () => {
        expect(consecutiveVowelsTest('eiknfhjrytueiouesxdczbeuiuoimnmfhfiuou')).toEqual(0)
    })

    it('Test_3', () => {
        expect(consecutiveVowelsTest('desrehakkjfuteknvfiyrtfbehjdjrobchrunbcbbhdhehbvudjsnanbakkjndhfjenfndinmf' +
            'nbfondndendnfudnfnanndhdemdmcnfdemnfjimdfofnmfnfjanmdnhdua')).toEqual(16)
    })

    it('Test_4', () => {
        expect(consecutiveVowelsTest('sudnfhrakekdhhfkakjdjdhvneidkvnudntomcnnamjemdmfudkfhjamvcjedkfdnridnmnbvf' +
            'hbdjdidncbvchencchdjdodncvchfndnrnencncnffduncbhjdfja')).toEqual(11)
    })

    it('Test_5', () => {
        expect(consecutiveVowelsTest('jurjfdleiifjriisiouajjfyhekkfjvnnmsuimsnvyuhvcodnmfnsumvbjshhsadkvhfeixoua'))
            .toEqual(11)
    })
})
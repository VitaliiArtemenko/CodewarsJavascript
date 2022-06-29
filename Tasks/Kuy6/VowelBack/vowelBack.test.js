const vowelBackTest = require('./vowelBack');

describe('Vowels Back', () => {

    it('Test_1', () => {
        expect(vowelBackTest('testcase')).toEqual('tabtbvba');
    })

    it('Test_2', () => {
        expect(vowelBackTest('codewars')).toEqual('bnaafvab');
    })

    it('Test_3', () => {
        expect(vowelBackTest('exampletesthere')).toEqual('agvvyuatabtqaaa');
    })

    it('Test_4', () => {
        expect(vowelBackTest('returnofthespacecamel')).toEqual('aatpawnftqabyvbabvvau');
    })

    it('Test_5', () => {
        expect(vowelBackTest('bringonthebootcamp')).toEqual('kaiwpnwtqaknntbvvy');
    })

    it('Test_6', () => {
        expect(vowelBackTest('weneedanofficedog')).toEqual('fawaaavwnffibaanp');
    })
})
const expandedForm2Test = require('./expandedForm2');

describe('Write Number in Expanded Form - Part 2', () => {

    it('Test_1', () => {
        expect(expandedForm2Test(807.304)).toEqual('800 + 7 + 3/10 + 4/1000');
    });

    it('Test_2', () => {
        expect(expandedForm2Test(1.24)).toEqual('1 + 2/10 + 4/100');
    });

    it('Test_3', () => {
        expect(expandedForm2Test(4.28)).toEqual('4 + 2/10 + 8/100');
    });

    it('Test_4', () => {
        expect(expandedForm2Test(7.304)).toEqual('7 + 3/10 + 4/1000');
    });

    it('Test_5', () => {
        expect(expandedForm2Test(0.004)).toEqual('4/1000');
    });

    it('Test_6', () => {
        expect(expandedForm2Test(0.501)).toEqual('5/10 + 1/1000');
    });

    it('Test_7', () => {
        expect(expandedForm2Test(88.353824))
            .toEqual('80 + 8 + 3/10 + 5/100 + 3/1000 + 8/10000 + 2/100000 + 4/1000000');
    });
});
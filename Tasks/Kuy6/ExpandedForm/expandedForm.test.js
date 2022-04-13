const expandedFormTest = require('./expandedForm');

describe('Write Number in Expanded Form', () => {

    it('Test_1', () => {
        expect(expandedFormTest(12)).toEqual('10 + 2');
    });

    it('Test_2', () => {
        expect(expandedFormTest(42)).toEqual('40 + 2');
    });

    it('Test_3', () => {
        expect(expandedFormTest(70304)).toEqual('70000 + 300 + 4');
    });

    it('Test_4', () => {
        expect(expandedFormTest(92093403034573))
            .toEqual('90000000000000 + 2000000000000 + 90000000000 + 3000000000 + ' +
                '400000000 + 3000000 + 30000 + 4000 + 500 + 70 + 3');
    });

    it('Test_5', () => {
        expect(expandedFormTest(43106624)).toEqual('40000000 + 3000000 + 100000 + 6000 + 600 + 20 + 4');
    });

    it('Test_6', () => {
        expect(expandedFormTest(0)).toEqual('');
    });
});
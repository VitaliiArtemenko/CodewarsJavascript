const padItTest = require('./padIt');

describe('Training JS #9: loop statement --while and do..while', () => {

    it('Test_1', () => {
        expect(padItTest('a', 1)).toEqual('*a');
    });

    it('Test_2', () => {
        expect(padItTest('a', 2)).toEqual('*a*');
    });

    it('Test_3', () => {
        expect(padItTest('a', 3)).toEqual('**a*');
    });

    it('Test_4', () => {
        expect(padItTest('a', 4)).toEqual('**a**');
    });

    it('Test_5', () => {
        expect(padItTest('a', 5)).toEqual('***a**');
    });

    it('Test_6', () => {
        expect(padItTest('qsaebvrd', 15)).toEqual('********qsaebvrd*******');
    });
});
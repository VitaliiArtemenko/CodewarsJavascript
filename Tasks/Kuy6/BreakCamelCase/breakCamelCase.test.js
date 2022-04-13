const breakCamelCaseTest = require('./breakCamelCase');

describe('Break camelCase', () => {

    it('Test_1', () => {
        expect(breakCamelCaseTest('camelCasing')).toEqual('camel Casing');
    });

    it('Test_2', () => {
        expect(breakCamelCaseTest('camelCasingTest')).toEqual('camel Casing Test');
    });

    it('Test_3', () => {
        expect(breakCamelCaseTest('ableWorkSmallSame')).toEqual('able Work Small Same');
    });

    it('Test_4', () => {
        expect(breakCamelCaseTest('verbsAskPersonPublic')).toEqual('verbs Ask Person Public');
    });

    it('Test_5', () => {
        expect(breakCamelCaseTest('place')).toEqual('place');
    });
});
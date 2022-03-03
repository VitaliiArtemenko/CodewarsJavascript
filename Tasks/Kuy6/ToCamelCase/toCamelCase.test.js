const toCamelCaseTest = require('./toCamelCase');

describe('Convert string to camel case', () => {

    it('Test_1', () => {
        expect(toCamelCaseTest('')).toEqual('');
    });

    it('Test_2', () => {
        expect(toCamelCaseTest('the_stealth_warrior')).toEqual('theStealthWarrior');
    });

    it('Test_3', () => {
        expect(toCamelCaseTest('The-Stealth-Warrior')).toEqual('TheStealthWarrior');
    });

    it('Test_4', () => {
        expect(toCamelCaseTest('A-B-C')).toEqual('ABC');
    });

    it('Test_5', () => {
        expect(toCamelCaseTest('I-am-a-programmer')).toEqual('IAmAProgrammer');
    });

    it('Test_6', () => {
        expect(toCamelCaseTest('i-am-a-programmer')).toEqual('iAmAProgrammer');
    });
});
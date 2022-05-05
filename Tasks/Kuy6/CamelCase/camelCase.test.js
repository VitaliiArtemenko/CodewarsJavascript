const camelCaseTest = require('./camelCase');

describe('CamelCase Method', () => {

    it('Test_1', () => {
        expect("test case".camelCase()).toEqual('TestCase');
    })

    it('Test_2', () => {
        expect("camel case method".camelCase()).toEqual('CamelCaseMethod');
    })

    it('Test_3', () => {
        expect("say hello ".camelCase()).toEqual('SayHello');
    })

    it('Test_4', () => {
        expect(' camel case word'.camelCase()).toEqual('CamelCaseWord');
    })

    it('Test_5', () => {
        expect("".camelCase()).toEqual('');
    })

    it('Test_6', () => {
        expect("test      case                ".camelCase()).toEqual('TestCase');
    })
})
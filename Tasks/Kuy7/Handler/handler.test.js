const handlerTest = require('./handler');

describe('Keyboard handler', () => {

    it('Test_1', () => {
        expect(handlerTest('a')).toEqual('a');
    });

    it('Test_2', () => {
        expect(handlerTest('a', true)).toEqual('A');
    });

    it('Test_3', () => {
        expect(handlerTest('a', true, true)).toEqual('a');
    });

    it('Test_4', () => {
        expect(handlerTest('a',false,true)).toEqual('A');
    });

    it('Test_5', () => {
        expect(handlerTest('1')).toEqual('1');
    });

    it('Test_6', () => {
        expect(handlerTest('1', true)).toEqual('1');
    });

    it('Test_7', () => {
        expect(handlerTest('1', true,true)).toEqual('!');
    });

    it('Test_8', () => {
        expect(handlerTest('')).toEqual('KeyError');
    });

    it('Test_9', () => {
        expect(handlerTest(5)).toEqual('KeyError');
    });

    it('Test_10', () => {
        expect(handlerTest('A')).toEqual('KeyError');
    });

    it('Test_11', () => {
        expect(handlerTest('A')).toEqual('KeyError');
    });

    it('Test_12', () => {
        expect(handlerTest('abc')).toEqual('KeyError');
    });

    it('Test_13', () => {
        expect(handlerTest([3, 'a', 1])).toEqual('KeyError');
    });

    it('Test_14', () => {
        expect(handlerTest({a:1,b:2})).toEqual('KeyError');
    });

    it('Test_15', () => {
        expect(handlerTest('q', false, true)).toEqual('Q');
    });

    it('Test_16', () => {
        expect(handlerTest([ '1', '7', '5' ], true,false)).toEqual('KeyError');
    });

    it('Test_17', () => {
        expect(handlerTest('/', true, true)).toEqual('?');
    });

    it('Test_18', () => {
        expect(handlerTest('`', false, true)).toEqual('~');
    });
});
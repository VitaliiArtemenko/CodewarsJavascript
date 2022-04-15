const incrementStringTest = require('./incrementString');

describe('String incrementer', () => {

    it('Test_1', () => {
        expect(incrementStringTest('foobar000')).toEqual('foobar001');
    });

    it('Test_2', () => {
        expect(incrementStringTest('foo')).toEqual('foo1');
    });

    it('Test_3', () => {
        expect(incrementStringTest('foobar001')).toEqual('foobar002');
    });

    it('Test_4', () => {
        expect(incrementStringTest('foobar99')).toEqual('foobar100');
    });

    it('Test_5', () => {
        expect(incrementStringTest('foobar099')).toEqual('foobar100');
    });

    it('Test_6', () => {
        expect(incrementStringTest('')).toEqual('1');
    });

    it('Test_7', () => {
        expect(incrementStringTest('1')).toEqual('2');
    });

    it('Test_8', () => {
        expect(incrementStringTest('009')).toEqual('010');
    });
});
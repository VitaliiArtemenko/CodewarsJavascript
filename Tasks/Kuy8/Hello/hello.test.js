const helloTest = require('./hello');

describe('Hello, Name or World!', () => {

    it('Test_1', () => {
        expect(helloTest('johN')).toEqual('Hello, John!');
    });

    it('Test_2', () => {
        expect(helloTest('alice')).toEqual('Hello, Alice!');
    });

    it('Test_3', () => {
        expect(helloTest()).toEqual('Hello, World!');
    });

    it('Test_4', () => {
        expect(helloTest('')).toEqual('Hello, World!');
    });

    it('Test_5', () => {
        expect(helloTest('vItaLII')).toEqual('Hello, Vitalii!');
    });
});
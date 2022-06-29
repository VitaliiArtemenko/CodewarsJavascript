const alphanumericTest = require('./alphanumeric');

describe('Not very secure', () => {

    it('Test_1', () => {
        expect(alphanumericTest('Mazinkaiser')).toEqual(true);
    })

    it('Test_2', () => {
        expect(alphanumericTest('hello world_')).toEqual(false);
    })

    it('Test_3', () => {
        expect(alphanumericTest('')).toEqual(false);
    })

    it('Test_4', () => {
        expect(alphanumericTest('PassW0rd')).toEqual(true);
    })

    it('Test_5', () => {
        expect(alphanumericTest('    ')).toEqual(false);
    })
})
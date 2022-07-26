const kebabizeTest = require('./kebabize')

describe('Kebabize', () => {

    it('Test_1', () => {
        expect(kebabizeTest('myCamelCasedString')).toEqual('my-camel-cased-string')
    })

    it('Test_2', () => {
        expect(kebabizeTest('myCamelHas3Humps')).toEqual('my-camel-has-humps')
    })

    it('Test_3', () => {
        expect(kebabizeTest('jM4kf')).toEqual('j-mkf')
    })

    it('Test_4', () => {
        expect(kebabizeTest('hello')).toEqual('hello')
    })

    it('Test_5', () => {
        expect(kebabizeTest('j5eje')).toEqual('jeje')
    })
})
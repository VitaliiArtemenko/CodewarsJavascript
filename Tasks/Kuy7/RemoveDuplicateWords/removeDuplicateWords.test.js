const removeDuplicateWordsTest = require('./removeDuplicateWords')

describe('Remove duplicate words', () => {
    let input, expected

    it('Test_1', () => {
        input = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
        expected = 'alpha beta gamma delta'
        expect(removeDuplicateWordsTest(input)).toEqual(expected)
    })

    it('Test_2', () => {
        input = 'NbaJQqW N N kDPiFIlEN NbaJQqW lmPybnVwu CwOV N NbaJQqW N CwOV lmPybnVwu CwOV lmPybnVwu N N CwOV ' +
            'NbaJQqW NbaJQqW NbaJQqW NbaJQqW NbaJQqW CwOV CwOV NbaJQqW NbaJQqW'
        expected = 'NbaJQqW N kDPiFIlEN lmPybnVwu CwOV'
        expect(removeDuplicateWordsTest(input)).toEqual(expected)
    })

    it('Test_3', () => {
        input = 'wWzEclV VKETBf wWzEclV wWzEclV VKETBf wWzEclV X VKETBf wWzEclV ISI wWzEclV VKETBf wWzEclV X VKETBf ' +
            'wWzEclV VKETBf VKETBf ISI wWzEclV wWzEclV'
        expected = 'wWzEclV VKETBf X ISI'
        expect(removeDuplicateWordsTest(input)).toEqual(expected)
    })

    it('Test_4', () => {
        expect(removeDuplicateWordsTest('AT mCHY AT AT mCHY AT AT mCHY AT AT kpfO mCHY')).toEqual('AT mCHY kpfO')
    })

    it('Test_5', () => {
        expect(removeDuplicateWordsTest('wJtVleL wJtVleL wJtVleL wJtVleL wJtVleL wJtVleL')).toEqual('wJtVleL')
    })
})
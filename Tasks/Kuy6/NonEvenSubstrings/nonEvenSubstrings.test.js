const nonEvenSubstringsTest = require('./nonEvenSubstrings')

describe('Non-even substrings', () => {

    it('Test_1', () => {
        expect(nonEvenSubstringsTest('1341')).toEqual(7)
    })

    it('Test_2', () => {
        expect(nonEvenSubstringsTest('1357')).toEqual(10)
    })

    it('Test_3', () => {
        expect(nonEvenSubstringsTest('13471')).toEqual(12)
    })

    it('Test_4', () => {
        expect(nonEvenSubstringsTest('134721')).toEqual(13)
    })

    it('Test_5', () => {
        expect(nonEvenSubstringsTest('1347231')).toEqual(20)
    })

    it('Test_6', () => {
        expect(nonEvenSubstringsTest('13472315')).toEqual(28)
    })

    it('Test_7', () => {
        expect(nonEvenSubstringsTest('8326779862339243493162433552867261176599394472253349293352317599914'))
            .toEqual(1533)
    })

    it('Test_8', () => {
        expect(nonEvenSubstringsTest('9337173743224751669698659641789')).toEqual(268)
    })

    it('Test_9', () => {
        expect(nonEvenSubstringsTest('73988963745124191322553417619978532354494382484726319353741457674995149391'))
            .toEqual(1807)
    })

    it('Test_10', () => {
        expect(nonEvenSubstringsTest('13714685931442843154815268328228415944287254429842414164943697'))
            .toEqual(755)
    })
})
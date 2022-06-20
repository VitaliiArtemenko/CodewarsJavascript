const pressesTest = require('./presses');

describe('Multi-tap Keypad Text Entry on an Old Mobile Phone', () => {

    it('Test_1', () => {
        expect(pressesTest('HOW R U')).toEqual(13);
    })

    it('Test_2', () => {
        expect(pressesTest('LOL')).toEqual(9);
    })

    it('Test_3', () => {
        expect(pressesTest('WHERE DO U WANT 2 MEET L8R')).toEqual(47);
    })

    it('Test_4', () => {
        expect(pressesTest('lol')).toEqual(9);
    })

    it('Test_5', () => {
        expect(pressesTest('0')).toEqual(2);
    })

    it('Test_6', () => {
        expect(pressesTest('zero')).toEqual(12);
    })

    it('Test_7', () => {
        expect(pressesTest('1')).toEqual(1);
    })

    it('Test_8', () => {
        expect(pressesTest('IS NE1 OUT THERE')).toEqual(31);
    })
})
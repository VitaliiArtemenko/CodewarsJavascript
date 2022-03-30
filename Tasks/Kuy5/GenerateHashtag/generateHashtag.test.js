const generateHashtagTest = require('./generateHashtag');

describe('The Hashtag Generator', () => {

    it('Test_1', () => {
        expect(generateHashtagTest(' Hello there thanks for trying my Kata'))
            .toEqual('#HelloThereThanksForTryingMyKata');
    });

    it('Test_2', () => {
        expect(generateHashtagTest('    Hello     World   ')).toEqual('#HelloWorld');
    });

    it('Test_3', () => {
        expect(generateHashtagTest('')).toEqual(false);
    });

    it('Test_4', () => {
        expect(generateHashtagTest(' '.repeat(200))).toEqual(false);
    });

    it('Test_5', () => {
        expect(generateHashtagTest('Do We have A Hashtag')).toEqual('#DoWeHaveAHashtag');
    });

    it('Test_6', () => {
        expect(generateHashtagTest('Codewars')).toEqual('#Codewars');
    });

    it('Test_7', () => {
        expect(generateHashtagTest('Codewars Is Nice')).toEqual('#CodewarsIsNice');
    });

    it('Test_8', () => {
        expect(generateHashtagTest('Codewars is nice')).toEqual('#CodewarsIsNice');
    });

    it('Test_9', () => {
        expect(generateHashtagTest("code" + " ".repeat(140) + "wars")).toEqual('#CodeWars');
    });

    it('Test_10', () => {
        expect(generateHashtagTest('Loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo' +
            'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat')).toEqual(false);
    });

    it('Test_11', () => {
        expect(generateHashtagTest('a'.repeat(139))).toEqual('#A' + 'a'.repeat(138));
    });

    it('Test_12', () => {
        expect(generateHashtagTest('a'.repeat(140))).toEqual(false);
    });
});
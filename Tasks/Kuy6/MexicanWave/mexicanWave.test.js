const mexicanWaveTest = require('./mexicanWave');

describe('Mexican Wave', () => {

    it('Test_1', () => {
        expect(mexicanWaveTest('hello')).toEqual(["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
    });

    it('Test_2', () => {
        expect(mexicanWaveTest('codewars'))
            .toEqual( ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]);
    });

    it('Test_3', () => {
        expect(mexicanWaveTest('two words')).toEqual(["Two words", "tWo words", "twO words", "two Words",
            "two wOrds", "two woRds", "two worDs", "two wordS"]);
    });

    it('Test_4', () => {
        expect(mexicanWaveTest(' gap ')).toEqual([" Gap ", " gAp ", " gaP "]);
    });

    it('Test_5', () => {
        expect(mexicanWaveTest('     a       b    ')).toEqual(['     A       b    ', '     a       B    ']);
    });

    it('Test_6', () => {
        expect(mexicanWaveTest('this is a few words')).toEqual(['This is a few words',
            'tHis is a few words', 'thIs is a few words', 'thiS is a few words', 'this Is a few words',
            'this iS a few words', 'this is A few words', 'this is a Few words', 'this is a fEw words',
            'this is a feW words', 'this is a few Words', 'this is a few wOrds', 'this is a few woRds',
            'this is a few worDs', 'this is a few wordS']);
    });
});
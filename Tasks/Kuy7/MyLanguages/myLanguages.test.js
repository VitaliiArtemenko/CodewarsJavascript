const myLanguagesTest = require('./myLanguages');

describe('My Language Skills', () => {

    it('Test_1', () => {
        expect(myLanguagesTest({"Java" : 10, "Ruby" : 80, "Python" : 65})).toEqual(["Ruby", "Python"]);
    });

    it('Test_2', () => {
        expect(myLanguagesTest({"Hindi" : 60, "Greek" : 71, "Dutch" : 93})).toEqual(["Dutch", "Greek", "Hindi"]);
    });

    it('Test_3', () => {
        expect(myLanguagesTest({"C++" : 50, "ASM" : 10, "Haskell" : 20})).toEqual([]);
    });

    it('Test_4', () => {
        expect(myLanguagesTest({ Korean: 24, Latvian: 23, Italian: 11, French: 18, Danish: 19, Estonian: 82,
            Swedish: 62, Punjabi: 65 })).toEqual(['Estonian', 'Punjabi', 'Swedish']);
    });

    it('Test_5', () => {
        expect(myLanguagesTest({ Hungarian: 29, Irish: 2, French: 79, Italian: 48, Danish: 76 }))
            .toEqual(['French', 'Danish']);
    });

    it('Test_6', () => {
        expect(myLanguagesTest({ Crystal: 8, Shell: 50, Elixir: 48, Go: 49, Kotlin: 96, Scala: 2 }))
            .toEqual(['Kotlin']);
    });
});
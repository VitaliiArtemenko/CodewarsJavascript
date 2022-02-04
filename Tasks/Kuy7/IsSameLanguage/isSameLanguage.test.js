const isSameLanguageTest = require('./isSameLanguage');

let list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

let list2 = [
    { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
    { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
];

describe('Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?', () => {

    it('Test_1', () => {
        expect(isSameLanguageTest(list1)).toEqual(true);
    });

    it('Test_2', () => {
        expect(isSameLanguageTest(list2)).toEqual(false);
    });
});
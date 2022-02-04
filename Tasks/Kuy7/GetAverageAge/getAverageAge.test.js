const getAverageAgeTest = require('./getAverageAge');

let list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

let list2 = [
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
];

let list3 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

describe('Coding Meetup #11 - Higher-Order Functions Series - Find the average age', () => {

    it('Test_1', () => {
        expect(getAverageAgeTest(list1)).toEqual(50);
    });

    it('Test_2', () => {
        expect(getAverageAgeTest(list2)).toEqual(21);
    });

    it('Test_3', () => {
        expect(getAverageAgeTest(list3)).toEqual(24);
    });
});
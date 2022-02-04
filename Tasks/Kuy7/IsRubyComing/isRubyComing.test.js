const isRubyComingTest = require('./isRubyComing');

const list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

const list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' }
];

const list3 = [
    { firstName : "Emma", lastName : "Z.", country : "Netherlands", continent : "Europe", age : 29, language : "Ruby" },
    { firstName : "Piotr", lastName : "B.", country : "Poland", continent : "Europe", age : 28, language : "Javascript"},
    { firstName :"Jayden", lastName : "P.", country : "Jamaica", continent : "Americas", age : 42, language : "JavaScript"}
];


describe('Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?', () => {

    it('Test_1', () => {
        expect(isRubyComingTest(list1)).toEqual(true);
    });

    it('Test_2', () => {
        expect(isRubyComingTest(list2)).toEqual(false);
    });

    it('Test_3', () => {
        expect(isRubyComingTest(list3)).toEqual(true);
    });
});
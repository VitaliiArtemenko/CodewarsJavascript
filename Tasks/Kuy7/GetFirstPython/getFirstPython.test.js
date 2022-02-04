const getFirstPythonTest = require('./getFirstPython');

let list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

let list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];


describe('Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer', () => {

    it('Test_1', () => {
        expect(getFirstPythonTest(list1)).toEqual('Victoria, Puerto Rico');
    });

    it('Test_2', () => {
        expect(getFirstPythonTest(list2)).toEqual('There will be no Python developers');
    });
});
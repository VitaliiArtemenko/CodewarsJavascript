const addUsernameTest = require('./addUsername');

let list1 = [
    {firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby'},
    {firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure'}
];

let list2 = [
    {"firstName":"Sofia","lastName":"I.","country":"Argentina","continent":"Americas","age":35,"language":"Java"},
    {"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":71,"language":"Clojure"},
    {"firstName":"Aya","lastName":"D.","country":"Libya","continent":"Africa","age":39,"language":"C"},
    {"firstName":"Malik","lastName":"J.","country":"Greenland","continent":"Europe","age":19,"language":"Python"}
];

let list3 = [
    {"firstName":"Emma","lastName":"U.","country":"Belgium","continent":"Europe","age":39,"language":"Python"},
    {"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":59,"language":"C"},
    {"firstName":"William","lastName":"L.","country":"Sweden","continent":"Europe","age":32,"language":"Java"},
    {"firstName":"Aadya","lastName":"Y.","country":"India","continent":"Asia","age":29,"language":"PHP"}
];

let answer1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
        username: `emilyn${new Date().getFullYear() - 30}` },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
        username: `nore${new Date().getFullYear() - 20}` },
];

let answer2 = [{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35,
    language: 'Java', username: `sofiai${new Date().getFullYear() - 35}` },
    { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 71, language: 'Clojure',
    username: `sofiap${new Date().getFullYear() - 71}` },
    { firstName: 'Aya', lastName: 'D.', country: 'Libya', continent: 'Africa', age: 39, language: 'C',
    username: `ayad${new Date().getFullYear() - 39}` },
    { firstName: 'Malik', lastName: 'J.', country: 'Greenland', continent: 'Europe', age: 19, language: 'Python',
    username: `malikj${new Date().getFullYear() - 19}` }
];

let answer3 = [{ firstName: 'Emma', lastName: 'U.', country: 'Belgium', continent: 'Europe',  age: 39,
    language: 'Python', username: `emmau${new Date().getFullYear() - 39}` },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C',
    username: `andreie${new Date().getFullYear() - 59}` },
    { firstName: 'William', lastName: 'L.', country: 'Sweden', continent: 'Europe', age: 32, language: 'Java',
    username: `williaml${new Date().getFullYear() - 32}` },
    { firstName: 'Aadya', lastName: 'Y.', country: 'India', continent: 'Asia', age: 29, language: 'PHP',
    username: `aadyay${new Date().getFullYear() - 29}` }
];

describe('Coding Meetup #10 - Higher-Order Functions Series - Create usernames', () => {

    it('Test_1', () => {
        expect(addUsernameTest(list1)).toEqual(answer1);
    });

    it('Test_2', () => {
        expect(addUsernameTest(list2)).toEqual(answer2);
    });

    it('Test_3', () => {
        expect(addUsernameTest(list3)).toEqual(answer3);
    });
});
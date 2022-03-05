const findOddNamesTest = require('./findOddNames');
let list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

let list2 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
];

let list3 = [{"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":41,"language":"Clojure"},
    {"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},
    {"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},
    {"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},
    {"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":59,"language":"C"},
    {"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":60,"language":"C"},
    {"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":75,"language":"Python"},
    {"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":88,"language":"Ruby"},
    {"firstName":"Viktoria","lastName":"W.","country":"Bulgaria","continent":"Europe","age":98,"language":"PHP"},
    {"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"JavaScript"}
];

let list4 = [{"firstName":"Maria","lastName":"I.","country":"Greece","continent":"Europe","age":32,"language":"C"},
    {"firstName":"Malik","lastName":"J.","country":"Greenland","continent":"Europe","age":19,"language":"Python"},
    {"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":35,"language":"Python"},
    {"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":30,"language":"C"},
    {"firstName":"Nikola","lastName":"H.","country":"Serbia","continent":"Europe","age":29,"language":"Python"},
    {"firstName":"Joao","lastName":"D.","country":"Portugal","continent":"Europe","age":35,"language":"JavaScript"},
    {"firstName":"Mohammad","lastName":"N.","country":"United Arab Emirates","continent":"Asia","age":39,"language":"C"},
    {"firstName":"Luka","lastName":"J.","country":"Slovenia","continent":"Europe","age":29,"language":"Clojure"},
    {"firstName":"Sofija","lastName":"Q.","country":"Latvia","continent":"Europe","age":29,"language":"Ruby"},
    {"firstName":"Yerasyl","lastName":"D.","country":"Kazakhstan","continent":"Asia","age":22,"language":"Ruby"},
    {"firstName":"Sebastian","lastName":"W.","country":"Venezuela","continent":"Americas","age":28,"language":"Python"},
    {"firstName":"Sofia","lastName":"A.","country":"Denmark","continent":"Europe","age":19,"language":"Python"},
    {"firstName":"Daniel","lastName":"J.","country":"Aruba","continent":"Americas","age":42,"language":"JavaScript"},
    {"firstName":"Rimas","lastName":"C.","country":"Jordan","continent":"Asia","age":44,"language":"Java"},
    {"firstName":"Artem","lastName":"O.","country":"Ukraine","continent":"Europe","age":29,"language":"Java"},
    {"firstName":"Mariami","lastName":"G.","country":"Georgia","continent":"Europe","age":29,"language":"Python"},
    {"firstName":"George","lastName":"B.","country":"England","continent":"Europe","age":21,"language":"C"},
    {"firstName":"Mamadou","lastName":"E.","country":"Mali","continent":"Africa","age":22,"language":"Python"},
    {"firstName":"Lukas","lastName":"R.","country":"Austria","continent":"Europe","age":89,"language":"C"},
    {"firstName":"Zahra","lastName":"S.","country":"Azerbaijan","continent":"Europe","age":22,"language":"Java"}
];

let answer1 = [
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

let answer3 = [
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' }
];

let answer4 = [{ firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 35, language: 'JavaScript' },
    { firstName: 'Luka', lastName: 'J.', country: 'Slovenia', continent: 'Europe', age: 29, language: 'Clojure' },
    { firstName: 'Yerasyl', lastName: 'D.', country: 'Kazakhstan', continent: 'Asia', age: 22, language: 'Ruby' },
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Artem', lastName: 'O.', country: 'Ukraine', continent: 'Europe', age: 29, language: 'Java' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 21, language: 'C' }
];

describe('Coding Meetup #15 - Higher-Order Functions Series - Find the odd names', () => {

    it('Test_1', () => {
        expect(findOddNamesTest(list1)).toEqual(answer1);
    });

    it('Test_2', () => {
        expect(findOddNamesTest(list2)).toEqual([]);
    });

    it('Test_3', () => {
        expect(findOddNamesTest(list3)).toEqual(answer3);
    });

    it('Test_4', () => {
        expect(findOddNamesTest(list4)).toEqual(answer4);
    });

});
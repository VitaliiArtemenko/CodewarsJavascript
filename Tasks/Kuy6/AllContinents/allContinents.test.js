const allContinentsTest = require('./allContinents');
let list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
];

let list2 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
];

let list3 = [
    { firstName: "Mark", lastName: "G.", country: "Scotland", continent: "Europe", age: 22, language: "JavaScript"},
    { firstName: "Victoria", lastName: "T.", country: "Puerto Rico", continent: "Americas", age: 30, language: "Clojure"},
    { firstName: "Emma", lastName: "B.", country: "Norway", continent: "Europe", age: 19, language: "Clojure"}
];

let list4 = [
    {"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},
    {"firstName":"Sofia","lastName":"C.","country":"Estonia","continent":"Europe","age":29,"language":"PHP"},
    {"firstName":"Shufen","lastName":"L.","country":"Taiwan","continent":"Asia","age":35,"language":"PHP"},
    {"firstName":"Luke","lastName":"V.","country":"Malta","continent":"Europe","age":29,"language":"PHP"},
    {"firstName":"Emily","lastName":"N.","country":"Ireland","continent":"Europe","age":38,"language":"Ruby"},
    {"firstName":"Emma","lastName":"Z.","country":"Netherlands","continent":"Europe","age":29,"language":"Ruby"},
    {"firstName":"Artem","lastName":"O.","country":"Ukraine","continent":"Europe","age":29,"language":"Java"},
    {"firstName":"Ximena","lastName":"Q.","country":"Mexico","continent":"Americas","age":28,"language":"Java"},
    {"firstName":"Hugo","lastName":"K.","country":"Spain","continent":"Europe","age":39,"language":"Python"},
    {"firstName":"Oliver","lastName":"P.","country":"Wales","continent":"Europe","age":29,"language":"JavaScript"},
    {"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":30,"language":"Python"},
    {"firstName":"Yerasyl","lastName":"D.","country":"Kazakhstan","continent":"Asia","age":22,"language":"Ruby"},
    {"firstName":"Jakub","lastName":"Z.","country":"Czech Republic","continent":"Europe","age":42,"language":"Java"},
    {"firstName":"Marija","lastName":"U.","country":"Republic of Macedonia","continent":"Europe","age":42,"language":"JavaScript"},
    {"firstName":"Sou","lastName":"B.","country":"Japan","continent":"Asia","age":43,"language":"PHP"},
    {"firstName":"Mia","lastName":"H.","country":"Germany","continent":"Europe","age":39,"language":"Ruby"},
    {"firstName":"Jayden","lastName":"P.","country":"Jamaica","continent":"Americas","age":42,"language":"JavaScript"},
    {"firstName":"Luka","lastName":"J.","country":"Slovenia","continent":"Europe","age":29,"language":"Clojure"},
    {"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"JavaScript"},
    {"firstName":"Gabriel","lastName":"X.","country":"Monaco","continent":"Europe","age":29,"language":"PHP"},
    {"firstName":"Hanna","lastName":"L.","country":"Hungary","continent":"Europe","age":29,"language":"JavaScript"},
    {"firstName":"Sofia","lastName":"W.","country":"Moldova","continent":"Europe","age":29,"language":"Ruby"},
    {"firstName":"Althea","lastName":"I.","country":"Philippines","continent":"Asia","age":31,"language":"Python"},
    {"firstName":"Sumayah","lastName":"M.","country":"Tajikistan","continent":"Asia","age":30,"language":"Ruby"},
    {"firstName":"Joshua","lastName":"O.","country":"Isle of Man","continent":"Europe","age":39,"language":"Clojure"},
    {"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"},
    {"firstName":"Agustín","lastName":"M.","country":"Chile","continent":"Americas","age":37,"language":"C"},
    {"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},
    {"firstName":"Sofia","lastName":"A.","country":"Denmark","continent":"Europe","age":19,"language":"Python"},
    {"firstName":"Malik","lastName":"J.","country":"Greenland","continent":"Europe","age":19,"language":"Python"}];

describe('Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?', () => {

    it('Test_1', () => {
        expect(allContinentsTest(list1)).toEqual(true);
    });

    it('Test_2', () => {
        expect(allContinentsTest(list2)).toEqual(false);
    });

    it('Test_3', () => {
        expect(allContinentsTest(list3)).toEqual(false);
    });

    it('Test_4', () => {
        expect(allContinentsTest(list4)).toEqual(false);
    });
});
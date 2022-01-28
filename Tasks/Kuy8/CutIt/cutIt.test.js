const cutItTest = require('./cutIt');

describe('Training JS #16: Methods of String object--slice(), substring() and substr()', () => {

   it('Test_1', () => {
      expect(cutItTest(["ab","cde","fgh"])).toEqual(["ab","cd","fg"]);
   });

    it('Test_2', () => {
        expect(cutItTest(["abc","defgh","ijklmn"])).toEqual(["abc","def","ijk"]);
    });

    it('Test_3', () => {
        expect(cutItTest(["codewars","javascript","java"])).toEqual(["code","java","java"]);
    });

    it('Test_4', () => {
        expect(cutItTest([ 'zdhbzqojnucmvigaya', 'eodywlmr', 'accqkctwrlm', 'qlrgujc' ]))
            .toEqual([ 'zdhbzqo', 'eodywlm', 'accqkct', 'qlrgujc' ]);
    });

    it('Test_5', () => {
        expect(cutItTest([ 'hwew', 'fbbvhlwafrzproauzqj', 'updbxjjaeatgvphdzi', 'nlcu' ]))
            .toEqual([ 'hwew', 'fbbv', 'updb', 'nlcu' ]);
    });
});
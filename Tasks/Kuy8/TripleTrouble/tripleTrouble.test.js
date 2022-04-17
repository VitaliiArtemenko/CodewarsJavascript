const tripleTroubleTest = require('./tripleTrouble');

describe('Triple Trouble', () => {

    it('Test_1', () => {
        expect(tripleTroubleTest("aaa","bbb","ccc")).toEqual('abcabcabc');
    });

    it('Test_2', () => {
        expect(tripleTroubleTest("aaaaaa","bbbbbb","cccccc")).toEqual('abcabcabcabcabcabc');
    });

    it('Test_3', () => {
        expect(tripleTroubleTest("burn", "reds", "roll")).toEqual('brrueordlnsl');
    });

    it('Test_4', () => {
        expect(tripleTroubleTest("Sea","urn","pms")).toEqual('Supermans');
    });

    it('Test_5', () => {
        expect(tripleTroubleTest("LLh","euo","xtr")).toEqual('LexLuthor');
    });
});
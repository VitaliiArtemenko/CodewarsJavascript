const maxPossibleScoreTest = require('./maxPossibleScore');

describe('maxPossibleScore', () => {

    it('Test_1', () => {
        expect(maxPossibleScoreTest({"a": 1}, [])).toEqual(1);
    });

    it('Test_2', () => {
        expect(maxPossibleScoreTest({"a": 1}, ["a"])).toEqual(2);
    });

    it('Test_3', () => {
        expect(maxPossibleScoreTest({"a": 1, "b": 14}, ["b"])).toEqual(29);
    });

    it('Test_4', () => {
        expect(maxPossibleScoreTest({"a": 1, "b": 2, "c": 4}, ["a", "b", "c"])).toEqual(14);
    });

    it('Test_5', () => {
        expect(maxPossibleScoreTest({"a": 2, "b": 5, "c": 8}, ["c"])).toEqual(23);
    });
});
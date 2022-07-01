const checkExamTest = require('./checkExam');

describe('Check exam', () => {

    it('Test_1', () => {
        expect(checkExamTest(["a", "a", "b", "b"], ["a", "c", "b", "d"])).toEqual(6);
    })

    it('Test_2', () => {
        expect(checkExamTest(["a", "a", "b", "b"], ["a", "c", "b", ""])).toEqual(7);
    })

    it('Test_3', () => {
        expect(checkExamTest(["a", "a", "b", "c"], ["a", "a", "b", "c"])).toEqual(16);
    })

    it('Test_4', () => {
        expect(checkExamTest(["b", "c", "b", "a"], ["",  "a", "a", "c"])).toEqual(0);
    })

    it('Test_5', () => {
        expect(checkExamTest([ 'a', 'b', 'b', 'c', 'a', 'c', 'b', 'c', 'a' ],
            [ 'a', '', 'a', 'c', '',  '', 'c', 'c', '' ])).toEqual(10);
    })
})

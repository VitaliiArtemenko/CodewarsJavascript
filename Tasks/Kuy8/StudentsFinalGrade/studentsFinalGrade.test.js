const studentsFinalGradeTest = require('./studentsFinalGrade');

describe("Student's Final Grade", () => {

    it('Test_1', () => {
       expect(studentsFinalGradeTest(100, 12)).toEqual(100);
    });

    it('Test_2', () => {
        expect(studentsFinalGradeTest(85, 5)).toEqual(90);
    });

    it('Test_3', () => {
        expect(studentsFinalGradeTest(57,12)).toEqual(100);
    });

    it('Test_4', () => {
        expect(studentsFinalGradeTest(0,0)).toEqual(0);
    });

    it('Test_5', () => {
       expect(studentsFinalGradeTest(50, 6)).toEqual(0);
    });

    it('Test_6', () => {
       expect(studentsFinalGradeTest(51, 3)).toEqual(75);
    });
});
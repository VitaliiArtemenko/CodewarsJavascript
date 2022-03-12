const countGradeTest = require('./countGrade');

describe('Training JS #27: methods of arrayObject---filter()', () => {

    it('Test_1', () => {
        expect(countGradeTest([50,60,70,80,90,100])).toEqual({S:1, A:1, B:1, C:2, D:1, X:0});
    });

    it('Test_2', () => {
        expect(countGradeTest([65,75,85,85,95,100,100])).toEqual({S:2, A:1, B:2, C:2, D:0, X:0});
    });

    it('Test_3', () => {
        expect(countGradeTest([-1,-1,-1,-1,-1,-1])).toEqual({S:0, A:0, B:0, C:0, D:0, X:6});
    });

    it('Test_4', () => {
        expect(countGradeTest([73,91,66,70,100,1,4,79,78,78,37,-1,86,54,76,-1,89,85,80]))
            .toEqual({ S: 1, A: 1, B: 4, C: 7, D: 4, X: 2 });
    });

    it('Test_5', () => {
        expect(countGradeTest([ 81, 66, 61, 89, 31, 94, 100, 4, -1, 97, 95, 99, 93, 90, -1, 100, 95 ]))
            .toEqual({ S: 2, A: 7, B: 2, C: 2, D: 2, X: 2 });
    });
});
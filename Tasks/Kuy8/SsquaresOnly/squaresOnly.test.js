const squaresOnlyTest = require('./squaresOnly');

describe('Be Concise II - I Need Squares', () => {

    it('Test_1', () => {
        expect(squaresOnlyTest([0,1,2,3,4,5,6,7,8,9,10])).toEqual([0,1,4,9]);
    });

    it('Test_2', () => {
        expect(squaresOnlyTest([31,33,35,37,39,38,36,34,32])).toEqual([36]);
    });

    it('Test_3', () => {
        expect(squaresOnlyTest([0,10,20,30,40,50,60,70,80,90,100])).toEqual([0,100]);
    });

    it('Test_4', () => {
        expect(squaresOnlyTest([20,19,18,17,16,15,13,11,9,1,5,4])).toEqual([16,9,1,4]);
    });

    it('Test_5', () => {
        expect(squaresOnlyTest([45,36,75,64,9,9,4,1,4,1,1,16,16,18,17,35,25,35]))
            .toEqual([36,64,9,9,4,1,4,1,1,16,16,25]);
    });
});
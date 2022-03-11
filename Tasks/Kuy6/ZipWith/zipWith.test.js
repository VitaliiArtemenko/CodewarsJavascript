const zipWithTest = require('./zipWith');
const plus = (a,b) => a+b

describe('zipWith', () => {

    it('Test_1', () => {
        expect(zipWithTest(plus, [0,1,2,3,4,5], [6,5,4,3,2,1])).toEqual([6,6,6,6,6,6]);
    });

    it('Test_2', () => {
        expect(zipWithTest(plus, [0,1,2,3,4], [6,5,4,3,2,1])).toEqual([6,6,6,6,6]);
    });

    it('Test_3', () => {
        expect(zipWithTest(plus, [0,1,2,3,4,5], [6,5,4,3,2])).toEqual([6,6,6,6,6]);
    });

    it('Test_4', () => {
        expect(zipWithTest(Math.pow, [10,10,10,10], [0,1,2,3])).toEqual([1,10,100,1000]);
    });

    it('Test_5', () => {
        expect(zipWithTest(Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1])).toEqual([4,7,7,4,7,7]);
    });

    it('Test_6', () => {
        expect(zipWithTest(function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3])).toEqual([0,2,4,6]);
    });

    it('Test_7', () => {
        expect(zipWithTest((a,b) => a+b, [0,1,2,3], [0,1,2,3])).toEqual([0,2,4,6]);
    });
})
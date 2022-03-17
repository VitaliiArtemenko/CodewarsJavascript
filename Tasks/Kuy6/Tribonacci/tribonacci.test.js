const tribonacciTest = require('./tribonacci');

describe('Tribonacci Sequence', () => {

    it('Test_1', () => {
        expect(tribonacciTest([1,1,1],10)).toEqual([1,1,1,3,5,9,17,31,57,105]);
    });

    it('Test_2', () => {
        expect(tribonacciTest([0,0,1],10)).toEqual([0,0,1,1,2,4,7,13,24,44]);
    });

    it('Test_3', () => {
        expect(tribonacciTest([0,1,1],10)).toEqual([0,1,1,2,4,7,13,24,44,81]);
    });

    it('Test_4', () => {
        expect(tribonacciTest([1,0,0],10)).toEqual([1,0,0,1,1,2,4,7,13,24]);
    });

    it('Test_5', () => {
        expect(tribonacciTest([0,0,0],10)).toEqual([0,0,0,0,0,0,0,0,0,0]);
    });

    it('Test_6', () => {
        expect(tribonacciTest([1,2,3],10)).toEqual([1,2,3,6,11,20,37,68,125,230]);
    });

    it('Test_7', () => {
        expect(tribonacciTest([3,2,1],10)).toEqual([3,2,1,6,9,16,31,56,103,190]);
    });

    it('Test_8', () => {
        expect(tribonacciTest([1,1,1],1)).toEqual([1]);
    });

    it('Test_9', () => {
        expect(tribonacciTest([300,200,100],0)).toEqual([]);
    });

    it('Test_10', () => {
        expect(tribonacciTest([0.5,0.5,0.5],30)).toEqual([0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,
            52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,
            489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5]);
    });

    it('Test_11', () => {
        expect(tribonacciTest([ 1, 16, 12 ], 27)).toEqual([1, 16, 12, 29, 57, 98, 184, 339, 621,
            1144, 2104, 3869, 7117, 13090, 24076, 44283, 81449, 149808, 275540, 506797, 932145, 1714482, 3153424,
            5800051, 10667957, 19621432, 36089440]);
    });

    it('Test_12', () => {
        expect(tribonacciTest([ 18, 13, 20 ], 9)).toEqual([18, 13, 20, 51, 84, 155, 290, 529, 974]);
    });
});
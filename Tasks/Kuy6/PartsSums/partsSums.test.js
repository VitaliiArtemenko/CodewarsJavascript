const partsSumsTest = require('./partsSums');

describe('Sums of Parts', () => {

    it('Test_1', () => {
        expect(partsSumsTest([])).toEqual([0]);
    })

    it('Test_2', () => {
        expect(partsSumsTest([1, 2, 3, 4, 5, 6])).toEqual([21, 20, 18, 15, 11, 6, 0]);
    })

    it('Test_3', () => {
        expect(partsSumsTest([0, 1, 3, 6, 10])).toEqual([20, 20, 19, 16, 10, 0]);
    })

    it('Test_4', () => {
        expect(partsSumsTest([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]))
            .toEqual([10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]);
    })

    it('Test_5', () => {
        expect(partsSumsTest([20, 16, 18, 50, 11, 35, 25,  7,  8, 47, 26, 20, 16, 15, 13]))
            .toEqual([ 327, 307, 291, 273, 223, 212, 177, 152, 145, 137, 90,  64,  44,  28,  13, 0 ]);
    })
})
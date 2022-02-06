const symmetricPointTest = require('./symmetricPoint');

describe('Points of Reflection', () => {

    it('Test_1', () => {
        expect(symmetricPointTest([0,0], [1,1])).toEqual([2, 2]);
    });

    it('Test_2', () => {
        expect(symmetricPointTest([2, 6], [-2, -6])).toEqual([-6, -18]);
    });

    it('Test_3', () => {
        expect(symmetricPointTest([10, -10], [-10, 10])).toEqual([-30, 30]);
    });

    it('Test_4', () => {
        expect(symmetricPointTest([1, -35], [-12, 1])).toEqual([-25, 37]);
    });

    it('Test_5', () => {
        expect(symmetricPointTest([1000, 15], [-7, -214])).toEqual([-1014, -443]);
    });

    it('Test_6', () => {
        expect(symmetricPointTest([ 245, -809 ], [ 522, 347 ] )).toEqual([ 799, 1503 ]);
    });

    it('Test_7', () => {
        expect(symmetricPointTest([0, 0], [0, 0])).toEqual([0, 0]);
    });

    it('Test_8', () => {
        expect(symmetricPointTest([ -556, 279 ], [ 131, 645 ])).toEqual([ 818, 1011 ]);
    });

    it('Test_9', () => {
        expect(symmetricPointTest([ 670, -432 ], [ 781, 591 ] )).toEqual([ 892, 1614 ]);
    });
});
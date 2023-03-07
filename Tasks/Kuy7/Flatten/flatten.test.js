const flattenTest = require('./flatten');

describe('Flatten', () => {
    it('Test_1', () => {
        expect(flattenTest([])).toEqual([]);
    });

    it('Test_2', () => {
        expect(flattenTest([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('Test_3', () => {
        expect(flattenTest([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]))
            .toEqual([1, 2, 3, "a", "b", "c", 1, 2, 3]);
    });

    it('Test_4', () => {
        expect(flattenTest([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]))
            .toEqual([[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
    });

    it('Test_5', () => {
        expect(flattenTest([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]))
            .toEqual([3, 4, 5, [9, 9, 9], "a,b,c"]);
    });
})

const sumOfDifferencesInArrayTest = require('./sumOfDifferencesInArray');

describe('Sum of differences in array', () => {

    it('Test_1', () => {
        expect(sumOfDifferencesInArrayTest([1, 2, 10])).toEqual(9);
    });

    it('Test_2', () => {
        expect(sumOfDifferencesInArrayTest([-3, -2, -1])).toEqual(2);
    });

    it('Test_3', () => {
        expect(sumOfDifferencesInArrayTest( [8,4,-14,4,-10,4,10,2,0,-6,6,-3,-1,-8,8,-1,-11,3,6,14])).toEqual(28);
    });

    it('Test_4', () => {
        expect(sumOfDifferencesInArrayTest( [-12,19,-13,15,21,14,17,15,21,-9,-16,-15,-9,-14,-5,-22,-21,15,-4]))
            .toEqual(43);
    });

    it('Test_5', () => {
        expect(sumOfDifferencesInArrayTest([25,-1,-9,0,-10,13,-29,-1,-6,2,-19,13,28,-27,-24,26,-25,-19,-5,-27,25,-3,1,18,-22,9,18,20,-15]))
            .toEqual(57);
    });

    it('Test_6', () => {
        expect(sumOfDifferencesInArrayTest([])).toEqual(0);
    })
});
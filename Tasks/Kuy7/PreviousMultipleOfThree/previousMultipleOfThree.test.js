const previousMultipleOfThreeTest = require('./previousMultipleOfThree');

describe('Previous multiple of three', () => {

    it('Test_1', () => {
        expect(previousMultipleOfThreeTest(1)).toEqual(null);
    });

    it('Test_2', () => {
        expect(previousMultipleOfThreeTest(25)).toEqual(null);
    });

    it('Test_3', () => {
       expect(previousMultipleOfThreeTest(36)).toEqual(36);
    });

    it('Test_4', () => {
       expect(previousMultipleOfThreeTest(1244)).toEqual(12);
    });

    it('Test_5', () => {
       expect(previousMultipleOfThreeTest(952406)).toEqual(9);
    });
})
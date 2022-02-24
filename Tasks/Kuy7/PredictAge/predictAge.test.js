const predictAgeTest = require('./predictAge');

describe('Predict your age!', () => {

    it('Test_1', () => {
        expect(predictAgeTest(65,60,75,55,60,63,64,45)).toEqual(86);
    });

    it('Test_2', () => {
        expect(predictAgeTest(40, 48, 85, 42, 68, 64, 45, 53))
            .toEqual(81);
    });

    it('Test_3', () => {
        expect(predictAgeTest(66, 80, 84, 79, 86, 81, 45, 60))
            .toEqual(104);
    });

    it('Test_4', () => {
        expect(predictAgeTest(60, 66, 87, 57, 42, 66, 65, 79))
            .toEqual(94);
    });

    it('Test_5', () => {
        expect(predictAgeTest(69, 43, 90, 74, 80, 67, 81, 76))
            .toEqual(104);
    });
});
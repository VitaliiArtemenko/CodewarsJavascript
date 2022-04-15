const sequenceSumTest = require('./sequenceSum');

describe('Sum of a sequence', () => {

    it('Test_1', () => {
        expect(sequenceSumTest(2, 6, 2)).toEqual(12);
    });

    it('Test_2', () => {
        expect(sequenceSumTest(1,5,1)).toEqual(15);
    });

    it('Test_3', () => {
        expect(sequenceSumTest(1,5,3)).toEqual(5);
    });

    it('Test_4', () => {
        expect(sequenceSumTest(99, 358, 80)).toEqual(876);
    });

    it('Test_5', () => {
        expect(sequenceSumTest(314, 941, 96)).toEqual(4214);
    });
});
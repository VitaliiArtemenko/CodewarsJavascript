const infectedTest = require('./infected');

describe('Pandemia', () => {

    it('Test_1', () => {
        expect(infectedTest('01000000X000X011X0X')).toEqual(73.33333333333333);
    });

    it('Test_2', () => {
        expect(infectedTest('01X000X010X011XX')).toEqual(72.72727272727273);
    });

    it('Test_3', () => {
        expect(infectedTest('XXXXX')).toEqual(0);
    });

    it('Test_4', () => {
        expect(infectedTest('0000000010')).toEqual(100);
    });

    it('Test_5', () => {
        expect(infectedTest('X00X000000X10X0100')).toEqual(42.857142857142854);
    });

    it('Test_6', () => {
        expect(infectedTest('10')).toEqual(100);
    });

    it('Test_7', () => {
        expect(infectedTest('000100000000X00000XX0000000000000XX001X0X10X0001000X0000X01X0X000X00000000X0X000'))
            .toEqual(40);
    });
});
const enoughTest = require('./enoughSpace');

describe('Will there be enough space?', () => {

    it('Test_1', () => {
        expect(enoughTest(10,5,5)).toEqual(0);
    });

    it('Test_2', () => {
        expect(enoughTest(100,60,50)).toEqual(10);
    });

    it('Test_3', () => {
        expect(enoughTest(20,5,5)).toEqual(0);
    });

    it('Test_4', () => {
        expect(enoughTest(65, 53, 60)).toEqual(48);
    });

    it('Test_5', () => {
        expect(enoughTest(76, 21, 35)).toEqual(0);
    });
});
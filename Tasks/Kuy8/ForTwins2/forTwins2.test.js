const forTwins2Test = require('./forTwins2');

describe('For Twins: 2. Math operations', () => {

    it('Test_1', () => {
        expect(forTwins2Test(1,10,2)).toEqual(16);
    });

    it('Test_2', () => {
        expect(forTwins2Test(5,30,7)).toEqual(1150);
    });

    it('Test_3', () => {
       expect(forTwins2Test(2,9,0)).toEqual(72);
    });

    it('Test_4', () => {
        expect(forTwins2Test(23, 107, 54)).toEqual(56074);
    });

    it('Test_5', () => {
       expect(forTwins2Test(97, 118, 53)).toEqual(1223170);
    });
});
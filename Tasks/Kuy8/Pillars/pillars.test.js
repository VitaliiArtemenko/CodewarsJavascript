const pillarsTest = require('./pillars');

describe('Pillars', () => {

    it('Teas_1', () => {
        expect(pillarsTest(1,10,10)).toEqual(0);
    });

    it('Test_2', () => {
        expect(pillarsTest(2,20,25)).toEqual(2000);
    });

    it('Test_3', () => {
        expect(pillarsTest(11,15,30)).toEqual(15270);
    });
});
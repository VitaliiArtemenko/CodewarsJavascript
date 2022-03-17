const appleTest = require('./apple');
const hooter = "It's hotter than the sun!!";
const cooler = "Help yourself to a honeycomb Yorkie for the glovebox.";

describe('Alan Partridge II - Apple Turnover', () => {

    it('Test_1', () => {
        expect(appleTest(50)).toEqual(hooter);
    });

    it('Test_1', () => {
        expect(appleTest(4)).toEqual(cooler);
    });

    it('Test_1', () => {
        expect(appleTest('100')).toEqual(hooter);
    });

    it('Test_1', () => {
        expect(appleTest(0)).toEqual(cooler);
    });

    it('Test_1', () => {
        expect(appleTest(-50)).toEqual(hooter);
    });
});
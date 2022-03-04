const maxProductTest = require('./maxProduct');

describe('Product of Largest Pair', () => {

    let time1 = performance.now();
    it('Test_1', () => {
        expect(maxProductTest([56, 335, 195, 443, 6, 494, 252])).toEqual(218842);
    });

    it('Test_2', () => {
        expect(maxProductTest([154, 428, 455, 346])).toEqual(194740);
    });

    it('Test_3', () => {
        expect(maxProductTest([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]))
            .toEqual(187827);
    });

    it('Test_4', () => {
        expect(maxProductTest([136, 376, 10, 146, 105, 63, 234])).toEqual(87984);
    });

    it('Test_5', () => {
        expect(maxProductTest([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89]))
            .toEqual(218536);
    });

    it('Test_6', () => {
        expect(maxProductTest([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14])).toEqual(192672);
    });

    it('Test_7', () => {
        expect(maxProductTest([134, 320, 266, 299])).toEqual(95680);
    });

    it('Test_8', () => {
        expect(maxProductTest([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]))
            .toEqual(139496);
    });

    it('Test_9', () => {
        expect(maxProductTest([375, 56, 337, 466, 203])).toEqual(174750);
    });

    it('Test_10', () => {
        expect(maxProductTest([444, 845, 647, 12, 9999, 7891234])).toEqual(78_904_448_766);
    });
    let time2 = performance.now();
    console.log(time2 - time1);

    it('Test_11_timeChecking', () => {
        expect(time2 - time1 < 1).toEqual(true);
    });
});
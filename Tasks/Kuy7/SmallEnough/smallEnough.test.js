const smallEnoughTest = require('./smallEnough');

describe('Small enough? - Beginner', () => {

    it('Test_1', () => {
        expect(smallEnoughTest([66, 101], 200)).toEqual(true);
    });

    it('Test_2', () => {
        expect(smallEnoughTest([78, 117, 110, 99, 104, 117, 107, 115], 100)).toEqual(false);
    });

    it('Test_3', () => {
        expect(smallEnoughTest([101, 45, 75, 105, 99, 107], 107)).toEqual(true);
    });

    it('Test_4', () => {
        expect(smallEnoughTest([80, 117, 115, 104, 45, 85, 112, 115], 120)).toEqual(true);
    });

    it('Test_5', () => {
        expect(smallEnoughTest([90, 165, 124, 131, 61, 185, 96, 193, 158, 29, 135, 124, 180,
            114, 89, 181, 163, 165, 41, 187, 195, 58, 128, 10, 15, 140, 131, 177, 157, 105, 59, 161, 109, 67, 21,
            170, 55, 177, 102, 24, 45, 12, 61, 162, 90, 189, 189, 155, 135, 60, 29, 73, 192, 75, 61, 83, 55, 169,
            119, 128, 60, 186, 104, 66, 199, 139, 114, 26, 180, 124, 143, 21, 106, 183], 193)).toEqual(false);
    });
});
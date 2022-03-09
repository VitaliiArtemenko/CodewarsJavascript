const findOutlierTest = require('./findOutlier');

describe('Find The Parity Outlier', () => {

    it('Test_1', () => {
        expect(findOutlierTest([0, 1, 2])).toEqual(1);
    });

    it('Test_2', () => {
        expect(findOutlierTest([1, 2, 3])).toEqual(2);
    });

    it('Test_3', () => {
        expect(findOutlierTest([2,6,8,10,3])).toEqual(3);
    });

    it('Test_4', () => {
        expect(findOutlierTest([0,0,3,0,0])).toEqual(3);
    });

    it('Test_5', () => {
        expect(findOutlierTest([1,1,0,1,1])).toEqual(0);
    });

    it('Test_6', () => {
        expect(findOutlierTest([ -79209947, 81564652, 4277088, -151744142, 54459714, 174436898, -44144958,
            73934710, 96767292, 185261588, -77104856, -177047910, -101389576, -61798128 ])).toEqual(-79209947);
    });

    it('Test_7', () => {
        expect(findOutlierTest([ -183518599, -77531298, -174349032, -21823480 ])).toEqual(-183518599);
    });

    it('Test_8', () => {
        expect(findOutlierTest([ 273234, -151689714, -68219657, -143011908, 12953554, 65196524, -10312484 ]))
            .toEqual(-68219657);
    });
});
const totalAmountOfPointsTest = require('./totalAmountOfPoints');

describe('Total amount of points', () => {

    it('Test_1', () => {
        expect(totalAmountOfPointsTest(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])).toEqual(30);
    });

    it('Test_2', () => {
        expect(totalAmountOfPointsTest(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])).toEqual(10);
    });

    it('Test_3', () => {
        expect(totalAmountOfPointsTest(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])).toEqual(0);
    });

    it('Test_4', () => {
        expect(totalAmountOfPointsTest(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])).toEqual(15);
    });

    it('test_5', () => {
        expect(totalAmountOfPointsTest(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"])).toEqual(12);
    });
});
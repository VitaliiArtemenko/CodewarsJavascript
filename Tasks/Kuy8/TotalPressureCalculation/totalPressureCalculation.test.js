const totalPressureCalculationTest = require('./totalPressureCalculation');

describe('Total pressure calculation', () => {

    it('test_1', () => {
        expect(totalPressureCalculationTest(44, 30, 3, 2, 5, 50))
            .toEqual( 0.714651121212121);
    });

    it('Test_2', () => {
        expect(totalPressureCalculationTest(60, 20, 10, 30, 10, 100))
            .toEqual(5.099716666666668);
    });

    it('Test_3', () => {
        expect(totalPressureCalculationTest(40,30,3,2,5,50))
            .toEqual(0.7507851666666666);
    });

    it('Test_4', () => {
        expect(totalPressureCalculationTest(60,20,10,30,10,100))
            .toEqual(5.099716666666668);
    });

    it('Test_5', () => {
       expect(totalPressureCalculationTest(125, 234, 78, 335, 78, -18))
           .toEqual(0.5513894946745561);
    });
});
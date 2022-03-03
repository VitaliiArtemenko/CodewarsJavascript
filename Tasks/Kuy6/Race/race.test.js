const raceTest = require('./race');

describe('Tortoise racing', () => {

    it('Test_1', () => {
        expect(raceTest(720, 850, 70)).toEqual([0, 32, 18]);
    });

    it('Test_2', () => {
        expect(raceTest(80, 91, 37)).toEqual([3, 21, 49]);
    });

    it('Test_3', () => {
        expect(raceTest(80, 100, 40)).toEqual([2, 0, 0]);
    });

    it('Test_4', () => {
        expect(raceTest(116, 675, 149)).toEqual([ 0, 15, 59 ]);
    });

    it('Test_5', () => {
        expect(raceTest(549, 801, 129)).toEqual([ 0, 30, 42 ]);
    });
});
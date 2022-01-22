const closestElevatorTest = require('./closestElevator');

describe('Closest elevator', () => {

    it('Test_1', () => {
        expect(closestElevatorTest(0, 1, 0)).toEqual('left');
    });

    it('Test_2', () => {
        expect(closestElevatorTest(0, 1, 1)).toEqual('right');
    });

    it('Test_3', () => {
        expect(closestElevatorTest(0, 1, 2)).toEqual('right');
    });

    it('Test_4', () => {
        expect(closestElevatorTest(0,0,0)).toEqual('right');
    });

    it('test_5', () => {
        expect(closestElevatorTest(0,2,1)).toEqual('right');
    });
})
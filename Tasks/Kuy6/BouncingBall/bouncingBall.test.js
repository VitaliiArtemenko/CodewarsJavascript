const bouncingBallTest = require('./bouncingBall');

describe('Bouncing Balls', () => {

    it('Test_1', () => {
        expect(bouncingBallTest(3.0, 0.66, 1.5)).toEqual(3);
    });

    it('Test_2', () => {
        expect(bouncingBallTest(30.0, 0.66, 1.5)).toEqual(15);
    });

    it('Test_3', () => {
        expect(bouncingBallTest(3.0, 1.0, 1.5)).toEqual(-1);
    });

    it('Test_4', () => {
        expect(bouncingBallTest(2, 0.5, 1)).toEqual(1);
    });

    it('Test_5', () => {
        expect(bouncingBallTest(5, 0.83, 5)).toEqual(-1);
    });
});
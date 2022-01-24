const forceOfGravityTest = require('./forceOfGravity');

describe('Find the force of gravity between two objects', () => {

    it('Test_1', () => {
        expect(forceOfGravityTest([1000, 1000, 100], ["g", "kg", "m"])).toEqual(6.67e-12);
    });

    it('Test_2', () => {
        expect(forceOfGravityTest([1000, 1000, 100], ["kg", "kg", "m"]))
            .toEqual(6.6699999999999995e-9);
    });

    it('Test_3', () => {
       expect(forceOfGravityTest([1000, 1000, 100], ["kg", "kg", "cm"])).toEqual(0.0000667);
    });

    it('Test_4', () => {
        expect(forceOfGravityTest([ 8078708, 759491, 53047667.00001], [ 'μg', 'kg', 'm']))
            .toEqual(1.4543127093680322e-22);
    });

    it('Test_5', () => {
        expect(forceOfGravityTest([ 2590873, 5342076, 77269048.00001 ], [ 'μg', 'lb', 'mm' ]))
            .toEqual(7.013523954484779e-17);
    });

    it('Test_6', () => {
        expect(forceOfGravityTest([ 360346, 1173265, 13028370.00001 ], [ 'μg', 'μg', 'mm' ]))
            .toEqual(1.6613513438724114e-25);
    });
});
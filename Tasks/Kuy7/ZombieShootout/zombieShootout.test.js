const zombieShootoutTest = require('./zombieShootout');

describe('Will you survive the zombie onslaught?', () => {

    it('Test_1', () => {
        expect(zombieShootoutTest(3,10,10)).toEqual('You shot all 3 zombies.');
    });

    it('Test_2', () => {
        expect(zombieShootoutTest(100,8,200))
            .toEqual('You shot 16 zombies before being eaten: overwhelmed.');
    });

    it('Test_3', () => {
        expect(zombieShootoutTest(50,10,8))
            .toEqual('You shot 8 zombies before being eaten: ran out of ammo.');
    });

    it('Test_4', () => {
        expect(zombieShootoutTest(41,85,56)).toEqual('You shot all 41 zombies.');
    });
});
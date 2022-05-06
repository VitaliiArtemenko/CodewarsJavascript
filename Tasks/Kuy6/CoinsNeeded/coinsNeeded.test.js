const coinsNeededTest = require('./coinsNeeded');

describe('No one likes carrying change.', () => {
    const coins1 = [1,5,10,25];
    const coins2 = [1,2,5,10,20,50];

    it('Test_1', () => {
        expect(coinsNeededTest(75, coins1)).toEqual(3);
    })

    it('Test_2', () => {
        expect(coinsNeededTest(123, coins1)).toEqual(9);
    })

    it('Test_3', () => {
        expect(coinsNeededTest(75, coins2)).toEqual(3);
    })

    it('Test_4', () => {
        expect(coinsNeededTest(132, coins2)).toEqual(5);
    })

    it('Test_5', () => {
        expect(coinsNeededTest(185832307, [16, 4, 1])).toEqual(11614522);
    })

    it('Test_6', () => {
        expect(coinsNeededTest(212, [256, 128, 1, 64, 2, 8, 32])).toEqual(6);
    })

    it('Test_7', () => {
        expect(coinsNeededTest(1232, [7, 1, 3, 27])).toEqual(48);
    })
})
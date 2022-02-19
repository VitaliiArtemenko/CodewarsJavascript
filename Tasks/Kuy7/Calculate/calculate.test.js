const calculateTest = require('./calculate');

describe('Fruit string calculator', () => {

    it('Test_1', () => {
        expect(calculateTest('Panda has 48 apples and loses 4')).toEqual(44);
    });

    it('Test_2', () => {
        expect(calculateTest('Jerry has 34 apples and gains 6')).toEqual(40);
    });

    it('Test_3', () => {
        expect(calculateTest('Tom has 20 apples and gains 15')).toEqual(35);
    });

    it('Test_4', () => {
        expect(calculateTest('Fred has 110 bananas and loses 50')).toEqual(60);
    });

    it('Test_5', () => {
        expect(calculateTest('Sandra has 23461 pears and loses 23461')).toEqual(0);
    });
});
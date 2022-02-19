const arrayElementParityTest = require('./arrayElementParity');

describe('Array element parity', () => {

    it('Test_1', () => {
        expect(arrayElementParityTest([1,-1,2,-2,3])).toEqual(3);
    });

    it('Test_2', () => {
        expect(arrayElementParityTest([-3,1,2,3,-1,-4,-2])).toEqual(-4);
    });

    it('Test_3', () => {
        expect(arrayElementParityTest([1,-1,2,-2,3,3])).toEqual(3);
    });

    it('Test_4', () => {
        expect(arrayElementParityTest([-110,110,-38,-38,-62,62,-38,-38,-38])).toEqual(-38);
    });

    it('Test_5', () => {
        expect(arrayElementParityTest([ -9,-105,-9,-9,-9,-9,105])).toEqual(-9);
    });
});
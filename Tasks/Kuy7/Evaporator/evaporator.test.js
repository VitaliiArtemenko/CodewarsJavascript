const evaporatorTest = require('./evaporator');

describe('Deodorant Evaporator', () => {

    it('Test_1', () => {
        expect(evaporatorTest(10,10,5)).toEqual(29);
    })

    it('Test_2', () => {
        expect(evaporatorTest(10,10,10)).toEqual(22);
    })

    it('Test_3', () => {
        expect(evaporatorTest(100,1,5)).toEqual(299);
    })

    it('Test_4', () => {
        expect(evaporatorTest(100,1,1)).toEqual(459);
    })

    it('Test_5', () => {
        expect(evaporatorTest(47.5,8,8)).toEqual(31);
    })
})
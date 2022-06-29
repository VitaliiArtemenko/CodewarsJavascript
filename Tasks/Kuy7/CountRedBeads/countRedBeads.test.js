const countRedBeadsTest = require('./countRedBeads');

describe('Simple beads count', () => {

    it('Test_1', () => {
        expect(countRedBeadsTest(0)).toEqual(0);
    })

    it('Test_2', () => {
        expect(countRedBeadsTest(1)).toEqual(0);
    })

    it('Test_3', () => {
        expect(countRedBeadsTest(3)).toEqual(4);
    })

    it('Test_4', () => {
        expect(countRedBeadsTest(5)).toEqual(8);
    })

    it('Test_5', () => {
        expect(countRedBeadsTest(4274)).toEqual(8546);
    })
})
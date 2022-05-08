const diamondTest = require('./diamond');

describe('Give me a Diamond', () => {

    it('Test_1', () => {
        expect(diamondTest(1)).toEqual('*\n');
    })

    it('Test_2', () => {
        expect(diamondTest(3)).toEqual(" *\n***\n *\n");
    })

    it('Test_3', () => {
        expect(diamondTest(5)).toEqual("  *\n ***\n*****\n ***\n  *\n");
    })

    it('Test_4', () => {
        expect(diamondTest(2)).toEqual(null);
    })

    it('Test_5', () => {
        expect(diamondTest(-3)).toEqual(null);
    })

    it('Test_6', () => {
        expect(diamondTest(0)).toEqual(null);
    })
})
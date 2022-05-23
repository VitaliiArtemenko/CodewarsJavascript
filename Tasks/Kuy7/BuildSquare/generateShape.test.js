const generateShapeTest = require('./buildSquare');

describe('Build a square', () => {

    it('Test_1', () => {
        expect(generateShapeTest(8))
            .toEqual('++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++');
    })

    it('Test_2', () => {
        expect(generateShapeTest(0)).toEqual('');
    })

    it('Test_3', () => {
        expect(generateShapeTest(1)).toEqual('+');
    })

    it('Test_4', () => {
        expect(generateShapeTest(2)).toEqual('++\n++');
    })

    it('Test_5', () => {
        expect(generateShapeTest(3)).toEqual('+++\n+++\n+++');
    })
})
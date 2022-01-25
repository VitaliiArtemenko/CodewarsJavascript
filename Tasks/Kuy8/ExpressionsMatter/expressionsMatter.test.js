const expressionsMatterTest = require('./expressionsMatter');

describe('Expressions Matter', () => {

    it('Test_1', () => {
        expect(expressionsMatterTest(2,1,2)).toEqual(6);
    });

    it('Test_2', () => {
        expect(expressionsMatterTest(2,1,1)).toEqual(4);
    });

    it('Test_3', () => {
       expect(expressionsMatterTest(1,1,1)).toEqual(3);
    });

    it('Test_4', () => {
        expect(expressionsMatterTest(1,2,3)).toEqual(9);
    });

    it('Test_5', () => {
        expect(expressionsMatterTest(1,3,1)).toEqual(5);
    });

    it('Test_6', () => {
       expect(expressionsMatterTest(2,2,2)).toEqual(8);
    });

    it('Test_7', () => {
       expect(expressionsMatterTest(10, 2, 8)).toEqual(160);
    });
});
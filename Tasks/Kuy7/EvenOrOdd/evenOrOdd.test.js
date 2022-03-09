const evenOrOddTest = require('./evenOrOdd');

describe('Even or Odd - Which is Greater?', () => {

    it('Test_1', () => {
        expect(evenOrOddTest('12')).toEqual('Even is greater than Odd');
    });

    it('Test_2', () => {
        expect(evenOrOddTest('123')).toEqual('Odd is greater than Even');
    });


    it('Test_3', () => {
        expect(evenOrOddTest('112')).toEqual('Even and Odd are the same');
    });

    it('Test_4', () => {
        expect(evenOrOddTest('')).toEqual('Even and Odd are the same');
    });

    it('Test_5', () => {
        expect(evenOrOddTest('7221503764814930553603')).toEqual('Odd is greater than Even');
    });
});
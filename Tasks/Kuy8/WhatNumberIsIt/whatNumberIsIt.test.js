const whatNumberIsItTest = require('./whatNumberIsIt');

describe('Training JS #13: Number object and its properties', () => {

    it('Test_1', () => {
        expect(whatNumberIsItTest(1 / 0)).toEqual('Input number is Number.POSITIVE_INFINITY');
    });

    it('Test_2', () => {
        expect(whatNumberIsItTest(100)).toEqual('Input number is 100');
    });

    it('Test_3', () => {
        expect(whatNumberIsItTest(1.7976931348623157e+308)).toEqual('Input number is Number.MAX_VALUE');
    });

    it('Test_4', () => {
        expect(whatNumberIsItTest(5e-324)).toEqual('Input number is Number.MIN_VALUE');
    });

    it('Test_5', () => {
        expect(whatNumberIsItTest(-Number.MAX_VALUE * 2)).toEqual('Input number is Number.NEGATIVE_INFINITY');
    });

    it('Test_6', () => {
        expect(whatNumberIsItTest(NaN)).toEqual('Input number is Number.NaN');
    });

    it('Test_7', () => {
        expect(whatNumberIsItTest(4_000_000_000)).toEqual('Input number is 4000000000');
    });

    it('Test_8', () => {
        expect(whatNumberIsItTest(Infinity + 1)).toEqual('Input number is Number.POSITIVE_INFINITY');
    });
});
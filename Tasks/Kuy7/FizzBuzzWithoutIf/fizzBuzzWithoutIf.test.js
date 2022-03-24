const fizzBuzzWithoutIfTest = require('./fizzBuzzWithoutIf');

describe('Fizz Buzz - Without ifs', () => {

    it('Test_1', () => {
        expect(fizzBuzzWithoutIfTest(1)).toEqual(1);
    });

    it('Test_2', () => {
        expect(fizzBuzzWithoutIfTest(3)).toEqual('Fizz');
    });

    it('Test_3', () => {
        expect(fizzBuzzWithoutIfTest(6)).toEqual('Fizz');
    });

    it('Test_4', () => {
        expect(fizzBuzzWithoutIfTest(7)).toEqual(7);
    });

    it('Test_5', () => {
        expect(fizzBuzzWithoutIfTest(10)).toEqual('Buzz');
    });

    it('Test_6', () => {
        expect(fizzBuzzWithoutIfTest(30)).toEqual('FizzBuzz');
    });
});
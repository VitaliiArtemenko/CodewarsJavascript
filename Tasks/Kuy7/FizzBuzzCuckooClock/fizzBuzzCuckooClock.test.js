const fizzBuzzCuckooClockTest = require('./fizzBuzzCuckooClock');

describe('Fizz Buzz Cuckoo Clock', () => {

    it('Test_1', () => {
        expect(fizzBuzzCuckooClockTest('13:34')).toEqual('tick');
    });

    it('Test_2', () => {
        expect(fizzBuzzCuckooClockTest('21:00'))
            .toEqual('Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo');
    });

    it('Test_3', () => {
        expect(fizzBuzzCuckooClockTest('11:15')).toEqual('Fizz Buzz');
    });

    it('Test_4', () => {
        expect(fizzBuzzCuckooClockTest('03:03')).toEqual('Fizz');
    });

    it('Test_5', () => {
        expect(fizzBuzzCuckooClockTest('14:30')).toEqual('Cuckoo');
    });

    it('Test_6', () => {
        expect(fizzBuzzCuckooClockTest('08:55')).toEqual('Buzz');
    });

    it('Test_7', () => {
        expect(fizzBuzzCuckooClockTest('00:00'))
            .toEqual('Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo');
    });

    it('Test_8', () => {
        expect(fizzBuzzCuckooClockTest('12:00'))
            .toEqual('Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo');
    });

    it('Test_9', () => {
        expect(fizzBuzzCuckooClockTest('24:00'))
            .toEqual('Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo');
    });

    it('Test_10', () => {
        expect(fizzBuzzCuckooClockTest('15:17')).toEqual('tick');
    });
});
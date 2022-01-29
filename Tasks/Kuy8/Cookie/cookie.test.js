const cookieTest = require('./cookie');

describe('Who ate the cookie?', () => {

    it('Test_1', () => {
        expect(cookieTest('Ryan')).toEqual('Who ate the last cookie? It was Zach!');
    });

    it('Test_2', () => {
        expect(cookieTest(26)).toEqual('Who ate the last cookie? It was Monica!');
    });

    it('Test_3', () => {
        expect(cookieTest(2.3)).toEqual('Who ate the last cookie? It was Monica!');
    });

    it('Test_4', () => {
        expect(cookieTest(true)).toEqual('Who ate the last cookie? It was the dog!');
    });

    it('Test_5', () => {
        expect(cookieTest([1, 2, 3])).toEqual('Who ate the last cookie? It was the dog!');
    });
});
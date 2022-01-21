const ImEverywhereTest = require('./ImEverywhere');

describe("I'm everywhere!", () => {

    describe('Positive tests', () => {

        it('Test_1', () => {
            expect(ImEverywhereTest('Phone')).toEqual('iPhone');
        });

        it('Test_2', () => {
            expect(ImEverywhereTest('World')).toEqual('iWorld');
        });

        it('Test_3', () => {
            expect(ImEverywhereTest('Human')).toEqual('iHuman');
        });

        it('Test_4', () => {
            expect(ImEverywhereTest('Programmer')).toEqual('iProgrammer');
        });
    });

    describe('Negative tests', () => {

        it('Test_1', () => {
            expect(ImEverywhereTest('')).toEqual('Invalid word');
        });

        it('Test_2', () => {
            expect(ImEverywhereTest('Inspire')).toEqual('Invalid word');
        });

        it('Test_3', () => {
            expect(ImEverywhereTest(null)).toEqual('Invalid word');
        });

        it('Test_4', () => {
           expect(ImEverywhereTest('East')).toEqual('Invalid word');
        });

        it('Test_5', () => {
            expect(ImEverywhereTest('Peace')).toEqual('Invalid word');
        });

        it('Test_6', () => {
            expect(ImEverywhereTest('road')).toEqual('Invalid word');
        });
    });
});
const narcissisticTest = require('./narcissistic');

describe('Does my number look big in this?', () => {

    it('Test_1', () => {
        expect(narcissisticTest(153)).toEqual(true);
    });

    it('Test_2', () => {
        expect(narcissisticTest(1652)).toEqual(false);
    });

    it('Test_3', () => {
        expect(narcissisticTest(7)).toEqual(true);
    });

    it('Test_4', () => {
        expect(narcissisticTest(371)).toEqual(true);
    });

    it('Test_5', () => {
        expect(narcissisticTest(555555)).toEqual(false);
    });
});
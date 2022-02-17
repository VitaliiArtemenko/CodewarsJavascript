const spamTest = require('./spam');

describe('Multiply characters', () => {

    it('Test_1', () => {
        expect(spamTest(1)).toEqual('hue');
    });

    it('Test_2', () => {
        expect(spamTest(6)).toEqual('huehuehuehuehuehue');
    });

    it('Test_3', () => {
        expect(spamTest(14)).toEqual('huehuehuehuehuehuehuehuehuehuehuehuehuehue');
    });
});
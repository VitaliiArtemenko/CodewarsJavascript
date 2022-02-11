const sabbTest = require('./sabb');

describe('he Office VI - Sabbatical', () => {

    it('Test_1', () => {
        expect(sabbTest('Can I have a sabbatical?', 5, 5)).toEqual('Sabbatical! Boom!');
    });

    it('Test_2', () => {
        expect(sabbTest('Why are you shouting?', 7, 2)).toEqual('Back to your desk, boy.');
    });

    it('Test_3', () => {
        expect(sabbTest('What do you mean I cant learn to code??', 8, 9))
            .toEqual('Sabbatical! Boom!');
    });

    it('Test_4', () => {
        expect(sabbTest('Please calm down', 9, 1)).toEqual('Back to your desk, boy.');
    });

    it('Test_5', () => {
        expect(sabbTest('t tgccihatt', 7, 10)).toEqual('Sabbatical! Boom!');
    });
});
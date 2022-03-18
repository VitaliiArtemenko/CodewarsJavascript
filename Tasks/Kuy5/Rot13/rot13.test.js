const rot13Test = require('./rot13');

describe('Rot13', () => {

    it('Test_1', () => {
        expect(rot13Test('test')).toEqual('grfg');
    });

    it('Test_2', () => {
        expect(rot13Test('Test')).toEqual('Grfg');
    });

    it('Test_3', () => {
        expect(rot13Test('Codewars')).toEqual('Pbqrjnef');
    });

    it('Test_4', () => {
        expect(rot13Test('')).toEqual('');
    });

    it('Test_5', () => {
        expect(rot13Test('10+2 is twelve.')).toEqual('10+2 vf gjryir.');
    });
});
const pigItTest = require('./pigIt');

describe('Simple Pig Latin', () => {

    it('Test_1', () => {
        expect(pigItTest('Pig latin is cool')).toEqual('igPay atinlay siay oolcay');
    });

    it('Test_2', () => {
        expect(pigItTest('This is my string')).toEqual('hisTay siay ymay tringsay');
    });

    it('Test_3', () => {
        expect(pigItTest('Quis custodiet ipsos custodes ?')).toEqual('uisQay ustodietcay psosiay ustodescay ?');
    });

    it('Test_4', () => {
        expect(pigItTest('Barba non facit philosophum')).toEqual('arbaBay onnay acitfay hilosophumpay');
    });

    it('Test_5', () => {
        expect(pigItTest('O tempora o mores !')).toEqual('Oay emporatay oay oresmay !');
    });
});
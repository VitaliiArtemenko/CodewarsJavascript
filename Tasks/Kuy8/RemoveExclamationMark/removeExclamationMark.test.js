const removeExclamationMarkTest = require('./removeExclamationMark');

describe('Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right', () => {

    it('Test_1', () => {
        expect(removeExclamationMarkTest("Hi!",1)).toEqual("Hi");
    });

    it('Test_2', () => {
        expect(removeExclamationMarkTest("Hi!",100)).toEqual("Hi");
    });

    it('Test_3', () => {
        expect(removeExclamationMarkTest("Hi!!!",1)).toEqual("Hi!!");
    });

    it('Test_4', () => {
        expect(removeExclamationMarkTest("!Hi",1)).toEqual("Hi");
    });

    it('Test_5', () => {
        expect(removeExclamationMarkTest("!Hi!",1)).toEqual("Hi!");
    });

    it('Test_6', () => {
        expect(removeExclamationMarkTest("!Hi!",100)).toEqual("Hi");
    });

    it('Test_7', () => {
        expect(removeExclamationMarkTest("!!!Hi !!hi!!! !hi",1)).toEqual("!!Hi !!hi!!! !hi");
    });

    it('Test_8', () => {
        expect(removeExclamationMarkTest("!!!Hi !!hi!!! !hi",3)).toEqual("Hi !!hi!!! !hi");
    });

    it('Test_9', () => {
        expect(removeExclamationMarkTest("!!!Hi !!hi!!! !hi",5)).toEqual("Hi hi!!! !hi");
    });

    it('Test_10', () => {
        expect(removeExclamationMarkTest("!!!Hi !!hi!!! !hi",100)).toEqual("Hi hi hi");
    });

    it('Test_11', () => {
        expect(removeExclamationMarkTest("eozchyz!!! !sesxhkf !!!ivp!!!", 7)).toEqual('eozchyz sesxhkf ivp!!!');
    });

    it('Test_12', () => {
        expect(removeExclamationMarkTest("ctuh !jvwb!! pwvddkq!! zmcq meozfwg! !!kwfklwl!", 4))
            .toEqual('ctuh jvwb pwvddkq! zmcq meozfwg! !!kwfklwl!');
    });
});

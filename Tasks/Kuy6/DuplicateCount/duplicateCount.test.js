const duplicateCountTest = require('./duplicateCount');

describe('Counting Duplicates', () => {

    it('Test_1', () => {
        expect(duplicateCountTest('')).toEqual(0);
    });

    it('Test_2', () => {
        expect(duplicateCountTest('abcde')).toEqual(0);
    });

    it('Test_3', () => {
        expect(duplicateCountTest('aabbcde')).toEqual(2);
    });

    it('Test_4', () => {
        expect(duplicateCountTest('aabBcde')).toEqual(2);
    });

    it('Test_5', () => {
        expect(duplicateCountTest('Indivisibility')).toEqual(1);
    });

    it('Test_6', () => {
        expect(duplicateCountTest('Indivisibilities')).toEqual(2);
    });

    it('Test_7', () => {
        expect(duplicateCountTest('abcdefghijklmnABCDEFGABCDEFABCDEABCDABCaba')).toEqual(7);
    });

    it('Test_8', () => {
        expect(duplicateCountTest('abcdefghijabcdeabcdABCaba')).toEqual(5);
    });

    it('Test_9', () => {
        expect(duplicateCountTest('abcdefghABCDabcABa')).toEqual(4);
    });
});
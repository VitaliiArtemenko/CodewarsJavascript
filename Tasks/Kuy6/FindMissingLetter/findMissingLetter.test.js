const findMissingLetterTest = require('./findMissingLetter');

describe('Find the missing letter', () => {

    it('Test_1', () => {
        expect(findMissingLetterTest(['a','b','c','d','f'])).toEqual('e');
    });

    it('Test_2', () => {
        expect(findMissingLetterTest(['O','Q','R','S'])).toEqual('P');
    });

    it('Test_3', () => {
        expect(findMissingLetterTest([ 'b', 'c', 'd', 'e', 'f', 'h' ])).toEqual('g');
    });

    it('Test_4', () => {
        expect(findMissingLetterTest([ 't', 'v' ])).toEqual('u');
    });

    it('Test_5', () => {
        expect(findMissingLetterTest([ 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J' ])).toEqual('G');
    });
});
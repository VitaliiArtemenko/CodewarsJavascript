const spinWordsTest = require('./spinWords');

describe('Stop gninnipS My sdroW!', () => {

    it('Test_1', () => {
        expect(spinWordsTest('Welcome')).toEqual('emocleW');
    });

    it('Test_2', () => {
        expect(spinWordsTest('Hey fellow warriors')).toEqual('Hey wollef sroirraw');
    });

    it('Test_3', () => {
        expect(spinWordsTest('This is a test')).toEqual('This is a test');
    });

    it('Test_4', () => {
        expect(spinWordsTest('This is another test')).toEqual('This is rehtona test');
    });

    it('Test_5', () => {
        expect(spinWordsTest('You are almost to the last test')).toEqual('You are tsomla to the last test');
    });

    it('Test_6', () => {
        expect(spinWordsTest('Just kidding there is still one more'))
            .toEqual('Just gniddik ereht is llits one more');
    });

    it('Test_7', () => {
        expect(spinWordsTest('Seriously this is the last one')).toEqual('ylsuoireS this is the last one');
    });
});
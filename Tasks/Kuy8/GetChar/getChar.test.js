const getCharTest = require('./getChar');

describe('get character from ASCII Value', () => {

    it('Test_1', () => {
       expect(getCharTest(55)).toEqual('7');
    });

    it('Test_2', () => {
        expect(getCharTest(60)).toEqual('<');
    });

    it('Test_3', () => {
        expect(getCharTest(64)).toEqual('@');
    });

    it('Test_4', () => {
        expect(getCharTest(65)).toEqual('A');
    });

    it('Test_5', () => {
        expect(getCharTest(57)).toEqual('9');
    });
});
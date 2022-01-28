const changeMeTest = require('./changeMe');

describe('Simple Change Machine', () => {

    it('Test_1', () => {
        expect(changeMeTest('20p')).toEqual('10p 10p');
    });

    it('Test_2', () => {
        expect(changeMeTest('50p')).toEqual('20p 20p 10p');
    });

    it('Test_3', () => {
        expect(changeMeTest('£1')).toEqual('20p 20p 20p 20p 20p');
    });

    it('Test_4', () => {
        expect(changeMeTest('£2')).toEqual('20p 20p 20p 20p 20p 20p 20p 20p 20p 20p');
    });

    it('Test_5', () => {
        expect(changeMeTest('£5'))
            .toEqual('20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p');
    });

    it('Test_6', () => {
        expect(changeMeTest('Hello!')).toEqual('Hello!');
    });
});
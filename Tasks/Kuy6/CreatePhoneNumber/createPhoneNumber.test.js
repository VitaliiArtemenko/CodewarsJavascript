const createPhoneNumberTest = require('./createPhoneNumber');

describe('Create Phone Number', () => {

    it('Test_1', () => {
        expect(createPhoneNumberTest([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
            .toEqual('(123) 456-7890');
    });

    it('Test_2', () => {
        expect(createPhoneNumberTest([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
            .toEqual('(111) 111-1111');
    });

    it('Test_3', () => {
        expect(createPhoneNumberTest([ 2, 3, 9, 3, 9, 8, 7, 7, 1, 8 ]))
            .toEqual('(239) 398-7718');
    });

    it('Test_4', () => {
        expect(createPhoneNumberTest([ 7, 7, 2, 3, 8, 4, 0, 7, 6, 5 ]))
            .toEqual('(772) 384-0765');
    });

    it('Test_5', () => {
        expect(createPhoneNumberTest([ 0, 7, 0, 7, 4, 8, 7, 6, 7, 3 ]))
            .toEqual('(070) 748-7673');
    });
});
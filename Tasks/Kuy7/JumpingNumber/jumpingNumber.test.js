const jumpingNumberTest = require('./jumpingNumber');

describe('Jumping Number (Special Numbers Series #4)', () => {

    it('Test_1', () => {
        expect(jumpingNumberTest(1)).toEqual('Jumping!!');
    })

    it('Test_2', () => {
        expect(jumpingNumberTest(7)).toEqual('Jumping!!');
    })

    it('Test_3', () => {
        expect(jumpingNumberTest(9)).toEqual('Jumping!!');
    })

    it('Test_4', () => {
        expect(jumpingNumberTest(23)).toEqual('Jumping!!');
    })

    it('Test_5', () => {
        expect(jumpingNumberTest(32)).toEqual('Jumping!!');
    })

    it('Test_6', () => {
        expect(jumpingNumberTest(79)).toEqual('Not!!');
    })

    it('Test_7', () => {
        expect(jumpingNumberTest(98)).toEqual('Jumping!!');
    })

    it('Test_8', () => {
        expect(jumpingNumberTest(8987)).toEqual('Jumping!!');
    })

    it('Test_9', () => {
        expect(jumpingNumberTest(4343456)).toEqual('Jumping!!');
    })

    it('Test_10', () => {
        expect(jumpingNumberTest(98789876)).toEqual('Jumping!!');
    })

    it('Test_1', () => {
        expect(jumpingNumberTest(123466)).toEqual('Not!!');
    })
})
const weirdCaseTest = require('./weirdCase');

describe('WeIrD StRiNg CaSe', () => {

    it('Test_1', () => {
        expect(weirdCaseTest('This')).toEqual('ThIs');
    })

    it('Test_2', () => {
        expect(weirdCaseTest('is')).toEqual('Is');
    })

    it('Test_3', () => {
        expect(weirdCaseTest('This is a test')).toEqual('ThIs Is A TeSt');
    })

    it('Test_4', () => {
        expect(weirdCaseTest('Looks like you passed')).toEqual('LoOkS LiKe YoU PaSsEd');
    })

    it('Test_5', () => {
        expect(weirdCaseTest('This is the final test case')).toEqual('ThIs Is ThE FiNaL TeSt CaSe');
    })

    it('Test_6', () => {
        expect(weirdCaseTest('Ok fine you are done now')).toEqual('Ok FiNe YoU ArE DoNe NoW');
    })
})
const countSmileysTest = require('./countSmileys');

describe('Count the smiley faces!', () => {

    it('Test_1', () => {
        expect(countSmileysTest([])).toEqual(0);
    });

    it('Test_2', () => {
        expect(countSmileysTest([':D',':~)',';~D',':)'])).toEqual(4);
    });

    it('Test_3', () => {
        expect(countSmileysTest([':)',':(',':D',':O',':;'])).toEqual(2);
    });

    it('Test_4', () => {
        expect(countSmileysTest([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
    });

    it('Test_5', () => {
        expect(countSmileysTest([ ':-)', ';~D', ':-D', ':_D' ])).toEqual(3);
    });

    it('Test_6', () => {
        expect(countSmileysTest([ ':-D', ';>', ';~>', ';o)', ':D', ';>', ';D' ])).toEqual(3);
    });

    it('Test_7', () => {
        expect(countSmileysTest([ ':)', ':>', ':D', ':D', ';o)', ':D', ';->' ])).toEqual(4);
    });

    it('Test_8', () => {
        expect(countSmileysTest([ ';~(', ':o>', ':)', ':>', ':>', ':~D', ';D' ])).toEqual(3);
    });

    it('Test_9', () => {
        expect(countSmileysTest([ ':D', ';oD', ':(', ';o)', ';o)', ':o>', ';~>' ])).toEqual(1);
    });
});
const sortBytesTest = require('./sortTheBytes');

describe('Sort the Bytes', () => {

    it('Test_1', () => {
        expect(sortBytesTest(0xdeadbeef)).toEqual(0xefdebead);
    });

    it('Test_2', () => {
        expect(sortBytesTest(0xdadb0d)).toEqual(0xdbda0d00);
    });

    it('Test_3', () => {
        expect(sortBytesTest(3102680340)).toEqual(4021822740);
    });

    it('Test_4', () => {
        expect(sortBytesTest(1)).toEqual(16777216);
    });

    it('Test_5', () => {
        expect(sortBytesTest(21908)).toEqual(2488598528);
    });
});
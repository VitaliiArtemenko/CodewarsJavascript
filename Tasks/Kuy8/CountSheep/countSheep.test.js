const countSheepTest = require('./countSheep');

describe("If you can't sleep, just count sheep!!", () => {

    it('Test_0', () => {
        expect(countSheepTest(0)).toEqual('');
    });

    it('Test_1', () => {
        expect(countSheepTest(1)).toEqual('1 sheep...');
    });

    it('Test_2', () => {
        expect(countSheepTest(2)).toEqual('1 sheep...2 sheep...');
    });

    it('Test_3', () => {
        expect(countSheepTest(3)).toEqual('1 sheep...2 sheep...3 sheep...');
    });

    it('Test_4', () => {
       expect(countSheepTest(-2)).toEqual('');
    });
});
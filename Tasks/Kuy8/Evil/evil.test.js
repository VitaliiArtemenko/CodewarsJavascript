const evilTest = require('./evil');

describe('Evil or Odious', () => {

    it('Test_1', () => {
        expect(evilTest(1)).toEqual("It's Odious!");
    });

    it('Test_2', () => {
        expect(evilTest(2)).toEqual("It's Odious!");
    });

    it('Test_3', () => {
        expect(evilTest(3)).toEqual("It's Evil!");
    });

    it('Test_4', () => {
        expect(evilTest(3868)).toEqual("It's Odious!");
    });

    it('Test_5', () => {
        expect(evilTest(5000121)).toEqual("It's Evil!");
    });
});
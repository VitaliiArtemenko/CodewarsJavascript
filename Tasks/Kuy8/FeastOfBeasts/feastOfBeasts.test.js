const feastOfBeastsTest = require('./feastOfBeasts');

describe('The Feast of Many Beasts', () => {

    it('Test_1', () => {
        expect(feastOfBeastsTest('great blue heron', 'garlic naan')).toEqual(true);
    });

    it('Test_2', () => {
        expect(feastOfBeastsTest('chickadee', 'chocolate cake')).toEqual(true);
    });

    it('Test_3', () => {
       expect(feastOfBeastsTest('brown bear', 'brown bean')).toEqual(false);
    });
});
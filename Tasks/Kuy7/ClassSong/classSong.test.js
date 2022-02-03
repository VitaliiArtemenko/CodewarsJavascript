const classSongTest = require('./classSong');

describe('What a "Classy" Song', () => {

    it('Test_1', () => {
        expect(classSongTest.mountMoose.title).toEqual('Mount Moose');
    });

    it('Test_2', () => {
        expect(classSongTest.mountMoose.artist).toEqual('The Snazzy Moose');
    });

    it('Test_3', () => {
        expect(classSongTest.mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn'])).toEqual(5);
    });

    it('Test_4', () => {
        expect(classSongTest.mountMoose.howMany(['JoHn', 'Luke', 'AmAndA'])).toEqual(2);
    });

    it('Test_5', () => {
        expect(classSongTest.mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus'])).toEqual(2);
    });

    it('Test_6', () => {
        expect(classSongTest.mountMoose.howMany(['JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE'])).toEqual(1);
    });

    it('Test_7', () => {
        expect(classSongTest.mountMoose.howMany(['Jack', 'jacK'])).toEqual(1);
    });
});
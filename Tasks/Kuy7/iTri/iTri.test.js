const iTritest = require('./iTri');

describe('Ironman Triathlon', () => {

    it('Test_1', () => {
        expect(iTritest(36)).toEqual({'Bike':'104.60 to go!'});
    });

    it('Test_2', () => {
        expect(iTritest(133.5)).toEqual({'Run':'Nearly there!'});
    });

    it('Test_3', () => {
        expect(iTritest(0)).toEqual('Starting Line... Good Luck!');
    });

    it('Test_4', () => {
        expect(iTritest(2)).toEqual({'Swim':'138.60 to go!'});
    });

    it('Test_5', () => {
        expect(iTritest(140.6)).toEqual("You're done! Stop running!");
    });
});
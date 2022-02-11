const unscrambleEggsTest = require('./unscrambleEggs');

describe('Unscrambled eggs', () => {

    it('Test_1', () => {
        expect(unscrambleEggsTest('ceggodegge heggeregge')).toEqual('code here');
    });

    it('Test_2', () => {
        expect(unscrambleEggsTest('Beggegeggineggneggeregg')).toEqual('Beginner');
    });

    it('Test_3', () => {
        expect(unscrambleEggsTest('FeggUNegg KeggATeggA')).toEqual('FUN KATA');
    });

    it('Test_4', () => {
        expect(unscrambleEggsTest('eggregeggulaeggregg exeggpreggeseggsieggon'))
            .toEqual('regular expression');
    });

    it('Test_5', () => {
        expect(unscrambleEggsTest('eggJeggaeggveggaeggSeggceggreggieggpeggtegg')).toEqual('JavaScript');
    });
});
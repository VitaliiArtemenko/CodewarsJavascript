const likesTest = require('./likes');

describe('Who likes it?', () => {

    it('Test_1', () => {
        expect(likesTest([])).toEqual('no one likes this');
    });

    it('Test_2', () => {
        expect(likesTest(['Peter'])).toEqual('Peter likes this');
    });

    it('Test_3', () => {
        expect(likesTest(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this');
    });

    it('Test_4', () => {
        expect(likesTest(['Max', 'John', 'Mark'])).toEqual('Max, John and Mark like this');
    });

    it('Test_5', () => {
        expect(likesTest(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual('Alex, Jacob and 2 others like this');
    });

    it('Test_6', () => {
        expect(likesTest(['Alex', 'Stan', 'Jacob', 'Mark', 'Max', 'James', 'Kevin', 'Olga']))
            .toEqual('Alex, Stan and 6 others like this');
    });
});
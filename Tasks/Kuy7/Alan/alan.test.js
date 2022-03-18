const alanTest = require('./alan');
const meet = 'Smell my cheese you mother!';
const miss = 'No, seriously, run. You will miss it.';

describe('Alan Partridge III - London', () => {

    it("Test_1", () => {
        expect(alanTest(['Norwich', 'Rejection', 'Disappointment', 'Backstabbing Central',
            'Shattered Dreams Parkway', 'London'])).toEqual(meet);
    });

    it('Test_2', () => {
        expect(alanTest(['London', 'Norwich'])).toEqual(miss);
    });

    it('Test_3', () => {
        expect(alanTest(['Norwich', 'Tooting', 'Bank', 'Rejection', 'Disappointment', 'Backstabbing Central',
            'Exeter', 'Shattered Dreams Parkway', 'Belgium','London'])).toEqual(meet);
    });

    it('Test_4', () => {
        expect(alanTest([ 'London', 'London', 'Spiksworth', 'London', 'Shattered Dreams Parkway', 'London',
            'Tiverton' ])).toEqual(miss);
    });

    it('Test_5', () => {
        expect(alanTest([ 'North Norfolk Digital', 'Rejection', 'Backstabbing Central', 'Backstabbing Central',
            'Spiksworth', 'Rejection', 'Shattered Dreams Parkway', 'Norwich', 'the Moon' ])).toEqual(miss);
    });
});
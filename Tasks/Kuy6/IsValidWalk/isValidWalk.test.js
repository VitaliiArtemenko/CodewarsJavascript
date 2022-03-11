const isValidWalkTest = require('./isValidWalk');

describe('Take a Ten Minute Walk', () => {

    it('Test_1', () => {
        expect(isValidWalkTest(['n','s','n','s','n','s','n','s','n','s'])).toEqual(true);
    });

    it('Test_2', () => {
        expect(isValidWalkTest(['w','e','w','e','w','e','w','e','w','e','w','e'])).toEqual(false);
    });

    it('Test_3', () => {
        expect(isValidWalkTest(['w'])).toEqual(false);
    });

    it('Test_4', () => {
        expect(isValidWalkTest(['n','n','n','s','n','s','n','s','n','s'])).toEqual(false);
    });

    it('Test_5', () => {
        expect(isValidWalkTest([ 'n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's' ])).toEqual(true);
    });
});
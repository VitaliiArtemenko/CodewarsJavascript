const persistenceTest = require('./persistence');

describe('Persistent Bugger', () => {

    it('Test_1', () => {
        expect(persistenceTest(39)).toEqual(3);
    });

    it('Test_2', () => {
        expect(persistenceTest(4)).toEqual(0);
    });

    it('Test_3', () => {
        expect(persistenceTest(25)).toEqual(2);
    });

    it('Test_4', () => {
        expect(persistenceTest(999)).toEqual(4);
    });

    it('Test_5', () => {
        expect(persistenceTest(626377999)).toEqual(3);
    });

    it('Test_6', () => {
        expect(persistenceTest(7485760)).toEqual(1);
    });

    it('Test_7', () => {
        expect(persistenceTest(10000)).toEqual(1);
    });

    it('Test_8', () => {
        expect(persistenceTest(111111)).toEqual(1);
    });
});
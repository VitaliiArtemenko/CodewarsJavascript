const movieTest = require('./movie');

describe('Going to the cinema', () => {

    it('Test_1', () => {
        expect(movieTest(500, 15, 0.9)).toEqual(43);
    });

    it('Test_2', () => {
        expect(movieTest(100, 10, 0.95)).toEqual(24);
    });

    it('Test_3', () => {
        expect(movieTest(299840, 15, 0.39)).toEqual(19991);
    });

    it('Test_4', () => {
        expect(movieTest(790730, 46, 0.14)).toEqual(17190);
    });
});
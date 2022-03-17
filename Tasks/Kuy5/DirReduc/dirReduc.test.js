const dirReducTest = require('./dirReduc');

describe('Directions Reduction', () => {

    it('Test_1', () => {
        expect(dirReducTest(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toEqual(["WEST"]);
    });

    it('Test_2', () => {
        expect(dirReducTest(["NORTH", "WEST", "SOUTH", "EAST"])).toEqual(["NORTH", "WEST", "SOUTH", "EAST"]);
    });

    it('Test_3', () => {
        expect(dirReducTest(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])).toEqual([]);
    });

    it('Test_4', () => {
        expect(dirReducTest([ 'NORTH', 'SOUTH', 'WEST', 'EAST',  'NORTH', 'SOUTH', 'WEST',  'NORTH', 'EAST',
            'WEST',  'NORTH', 'SOUTH', 'WEST',  'EAST' ])).toEqual(['WEST',  'NORTH']);
    });

    it('Test_5', () => {
        expect(dirReducTest([ 'WEST',  'EAST',  'SOUTH', 'NORTH', 'EAST',  'SOUTH', 'WEST',  'EAST',
            'SOUTH', 'NORTH' ])).toEqual(['EAST',  'SOUTH']);
    });
});
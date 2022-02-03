const plantTest = require('./plant');

describe('Harvest Festival', () => {

    it('Test_1', () => {
        expect(plantTest(",", 3, 7, 25)).toEqual('---,,,,,,,---,,,,,,,---,,,,,,,');
    });

    it('Test_2', () => {
        expect(plantTest("@", 3, 3, 25)).toEqual('---@@@---@@@---@@@');
    });

    it('Test_3', () => {
        expect(plantTest("$", 4, 2, 30)).toEqual('----$$----$$----$$----$$');
    });

    it('Test_4', () => {
        expect(plantTest("&", 1, 5, 20)).toEqual('-&&&&&');
    });

    it('Test_5', () => {
        expect(plantTest("^", 3, 3, 35)).toEqual('---------^');
    });

    it('Test_6', () => {
        expect(plantTest("+", 1, 3, 15)).toEqual('-+');
    });

    it('Test_7', () => {
        expect(plantTest(";", 9, 10, 30))
            .toEqual('---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;');
    });
});

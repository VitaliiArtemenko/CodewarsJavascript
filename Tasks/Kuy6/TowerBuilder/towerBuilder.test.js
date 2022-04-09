const towerBuilderTest = require('./towerBuilder');

describe('Build Tower', () => {

    it('Test_1', () => {
        expect(towerBuilderTest(1)).toEqual( ["*"]);
    });

    it('Test_2', () => {
        expect(towerBuilderTest(2)).toEqual([" * ","***"]);
    });

    it('Test_3', () => {
        expect(towerBuilderTest(3)).toEqual([ "  *  ", " *** ", "*****" ]);
    });

    it('Test_4', () => {
        expect(towerBuilderTest(6)).toEqual(
            [
            "     *     ",
            "    ***    ",
            "   *****   ",
            "  *******  ",
            " ********* ",
            "***********"
        ]);
    });

    it('Test_5', () => {
        expect(towerBuilderTest(11)).toEqual([
               "          *          ",
               "         ***         ",
               "        *****        ",
               "       *******       ",
               "      *********      ",
               "     ***********     ",
               "    *************    ",
               "   ***************   ",
               "  *****************  ",
               " ******************* ",
               "*********************",
             ]);
    });

    it('Test_6', () => {
        expect(towerBuilderTest(0)).toEqual([]);
    });
});
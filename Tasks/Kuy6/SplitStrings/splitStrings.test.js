const splitStringsTest = require('./splitStrings');

describe('Split Strings', () => {

    it('Test_1', () => {
        expect(splitStringsTest('abcdef')).toEqual(["ab", "cd", "ef"]);
    });

    it('Test_2', () => {
        expect(splitStringsTest('abcdefg')).toEqual(["ab", "cd", "ef", "g_"]);
    });

    it('Test_3', () => {
        expect(splitStringsTest('')).toEqual([]);
    });

    it('Test_4', () => {
        expect(splitStringsTest('OiKlFNcwHZHMnikbFnUz'))
            .toEqual([ 'Oi', 'Kl', 'FN', 'cw', 'HZ', 'HM', 'ni', 'kb', 'Fn', 'Uz' ]);
    });

    it('Test_5', () => {
        expect(splitStringsTest('oCGjYAEckdiVVBr'))
            .toEqual([ 'oC', 'Gj', 'YA', 'Ec', 'kd', 'iV', 'VB', 'r_' ]);
    });
});
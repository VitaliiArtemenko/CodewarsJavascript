const alphabetSymmetryTest = require('./alphabetSymmetry');

describe('Alphabet symmetry', () => {

    it('Test_1', () => {
        expect(alphabetSymmetryTest(["abode", "ABc", "xyzD"])).toEqual([4, 3, 1]);
    })

    it('Test_2', () => {
        expect(alphabetSymmetryTest(["abide", "ABc", "xyz"])).toEqual([4, 3, 0]);
    })

    it('Test_3', () => {
        expect(alphabetSymmetryTest(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])).toEqual([6, 5, 7])
    })

    it('Test_4', () => {
        expect(alphabetSymmetryTest(["encode", "abc", "xyzD", "ABmD"])).toEqual([1, 3, 1, 3])
    })

    it('Test_5', () => {
        expect(alphabetSymmetryTest(['ABCDEabcdeflmno', 'abcdefghi', 'ABCDEFabcde', 'ABCDEFGHIabcdefpqrstuv',
            'ABCDEFGabcdefn', 'ABCDabcdef', 'ABCDabcdefglmnopqrstuvw', 'Aabcdefghjkl', 'ABCDEa', 'abcdefghij',
            'ABCDEFGabcdemnop', 'ABabcdefghklmnopqr', 'ABCDabcd', 'Aabcdfghij', 'ABCDEFabcde', 'abc',
            'ABCDEFGabcdefnopqrstuv', 'ABCDabcdefglmnopqrstuvwxy', 'ABCDEFGHabk', 'ABCDEabcdeflmnopqr',
            'ABabcdefg', 'abcdefghijklmnopqrstuvwxy', 'ABCDEFGHIabcdefghi', 'ABCDabchijklmnopqrstuvwx',
            'ABCDabcdefk', 'ABCabcdefg', 'Aabcdefg', 'Abcdefghijklmnopqrstuv', 'ABCDEFGHIabcdefg',
            'ABCDEFGabcdefghiqrst', 'ABCDEFabcdefgh', 'ABCDEFGabcd', 'ABCDEaghijklmnopqrstuvwxy',
            'ABCDEFGHabklmnopqrstuv', 'ABCDEabhijklm', 'abcdefghijklm', 'abcdefghijklmnopqrstuv',
            'Aabdefghijklmnopqrstu', 'ABCDEFGHIabcd', 'abcdefghijklmnopqrstuvw', 'ABCDEaghijkl',
            'ABabcdefghklmnopqrstuvwxy', 'ABCDabcdefghmnopqr', 'ABCDabcdefklmnopqrst', 'ABCDEFahijklmnopqrstuvwxy',
            'ABabcfghijklmnopqrstuv', 'ABCDEFGHIabcdefghi', 'ABCDEFabcdefghopqrstuvw', 'ABCDEFabcdefghipqrstuv',
            'ABabcdefgh', 'ABCDEFGHIab', 'ABCDEabcdefg', 'ABCabcdefgh', 'ABCDEabhijklmnopqr', 'ABCDEabhijklmn',
            'ABCDEFGHabcdefgh', 'ABabcdefghilmnopqrstuvw', 'abcdefghijklmnopqrstu', 'ABCDEabcdefghi',
            'ABCaefghijklmnopqrstu', 'ABCDEFGHIabc', 'ABCDEFabcdefghi', 'abc', 'Aabcdf', 'ABCabcdeijklmnopqrst',
            'ABcdefghijklmnopqrstuvw', 'ABCDEFGHijklmnopqrstuvwx', 'Aabcdefhijklmnop', 'ABabcdefghi', 'ABCDE',
            'abcdefghijklmn', 'ABCDEFGabcdefghiqr', 'ABa', 'abcdefghijklmnopqrstuvw', 'ABabcde', 'Aabdefghij',
            'Aabcdefghiklmnopqrstu', 'Aabcdefghjklmnopq', 'ABCabfghijklmnopq', 'ABCDEabcdefg', 'ABadefghijklmno',
            'ABCDEabc', 'ABCDEFGabcdefg', 'ABabcdehijklmnop', 'ABabcdghijkl', 'ABCDEFG', 'ABCDabcdefghinopqr',
            'Aabcdefghi', 'ABCDabchijklmnopq', 'ABCDEFGHIabcdn', 'abcdefghijklm', 'ABCDEabhijkl', 'ABCDEFGHabcdefghi',
            'ABCDEabcdeklmn', 'ABCDEFGHIa', 'ABCabcdefghl', 'Aabcdfghijk', 'ABCDEFGHIabcdefpqrst', 'ABabefghijklmnopq',
            'ABCDEFGHIablmnopqrstuvwxy'])).toEqual([9, 9, 6, 16, 8, 4, 16, 4, 5, 10, 11, 10, 4, 6, 6, 3, 16, 18,
            9, 12, 2, 25, 9, 21, 5, 3, 1, 22, 9, 11, 6, 7, 24, 20, 11, 13, 22, 19, 9, 23, 11, 17, 10, 14, 24, 19, 9, 15,
            13, 2, 9, 5, 3, 16, 12, 8, 14, 21, 5, 20, 9, 6, 3, 2, 15, 23, 24, 10, 2, 5, 14, 9, 2, 23, 2, 8, 12, 9, 15,
            5, 14, 5, 7, 11, 8, 7, 9, 1, 14, 10, 13, 10, 8, 9, 9, 4, 7, 14, 15, 23])
    })
})
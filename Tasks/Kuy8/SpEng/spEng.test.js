const spEngTest = require('./spEng');

describe('Do you speak "English"?', () => {

    it('Test_1', () => {
        expect(spEngTest('english')).toEqual(true);
    });

    it('Test_2', () => {
        expect(spEngTest('egnlish')).toEqual(false);
    });

    it('Test_3', () => {
        expect(spEngTest('abcEnglishdef')).toEqual(true);
    });

    it('Test_4', () => {
        expect(spEngTest('abcnEglishsef')).toEqual(false);
    });

    it('Test_5', () => {
        expect(spEngTest('eNglisH')).toEqual(true);
    });

    it('Test_6', () => {
        expect(spEngTest('5o7ieNglIshiSNGehLnj8xa')).toEqual(true);
    });

    it('Test_7', () => {
        expect(spEngTest('vfqlsgENLIHqizdp')).toEqual(false);
    });

    it('Test_8', () => {
        expect(spEngTest('qq99eNglIshishGENlfitj8')).toEqual(true);
    });

    it('Test_9', () => {
        expect(spEngTest('e38saiNLHSGe48sxy')).toEqual(false);
    });

    it('Test_10', () => {
        expect(spEngTest('8psmdEnGliShnEGShlifscqi')).toEqual(true);
    });
});
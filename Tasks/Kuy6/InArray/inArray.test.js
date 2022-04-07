const inArrayTest = require('./inArray');
let a1 = [];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];


describe('Which are in?', () => {

    it('Test_1', () => {
        a1 = ["xyz", "live", "strong"];
        expect(inArrayTest(a1, a2)).toEqual(["live", "strong"]);
    });

    it('Test_2', () => {
        a1 = ["live", "strong", "arp"]
        expect(inArrayTest(a1, a2)).toEqual(["arp", "live", "strong"]);
    });

    it('Test_3', () => {
        a1 = ["tarp", "mice", "bull"]
        expect(inArrayTest(a1, a2)).toEqual([]);
    });

    it('Test_4', () => {
        a1 = [];
        expect(inArrayTest(a1, a2)).toEqual([]);
    });

    it('Test_5', () => {
        a1 = [ 'pini', 'omm', 'oint', 'ou', 'wh', 'or', 'ect', 'by', 'ion' ];
        a2 = [ 'you', 'using', 'does', 'most', 'does', 'to', 'known', 'me', '1.9.2.', 'for', 'pointed', "(mladen's",
            'answer', 'updated', 'I', 'versioning;', 'am', 'a', 'neither', 'have', 'have', 'sample;', 'is', 'perfect',
            'what', 'should', 'have', 'glad', 'reference', 'out', 'I' ];
        expect(inArrayTest(a1, a2)).toEqual(['ect', 'ion', 'oint', 'or', 'ou', 'wh']);
    });
});
const scrambleTest = require('./scramble');

describe('Scramblies', () => {

    it('Test_1', () => {
        expect(scrambleTest('rkqodlw','world')).toEqual(true);
    });

    it('Test_2', () => {
        expect(scrambleTest('cedewaraaossoqqyt','codewars')).toEqual(true);
    });

    it('Test_3', () => {
        expect(scrambleTest('katas','steak')).toEqual(false);
    });

    it('Test_4', () => {
        expect(scrambleTest('scriptjavx','javascript')).toEqual(false);
    });

    it('Test_5', () => {
        expect(scrambleTest('scriptingjava','javascript')).toEqual(true);
    });

    it('Test_6', () => {
        expect(scrambleTest('scriptsjava','javascripts')).toEqual(true);
    });

    it('Test_7', () => {
        expect(scrambleTest('javscripts','javascript')).toEqual(false);
    });

    it('Test_8', () => {
        expect(scrambleTest('jscripts','javascript')).toEqual(false);
    });

    it('Test_9', () => {
        expect(scrambleTest('aabbcamaomsccdd','commas')).toEqual(true);
    });

    it('Test_10', () => {
        expect(scrambleTest('commas','commas')).toEqual(true);
    });

    it('Test_11', () => {
        expect(scrambleTest('sammoc','commas')).toEqual(true);
    });
});
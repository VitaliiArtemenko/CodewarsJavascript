const containAllRotsTest = require('./containAllRots');

describe('All Inclusive?', () => {

    it('Test_1', () => {
        expect(containAllRotsTest('', [])).toEqual(true);
    });

    it('Test_2', () => {
        expect(containAllRotsTest('', ["bsjq", "qbsj"])).toEqual(true);
    });

    it('Test_3', () => {
        expect(containAllRotsTest('bsjq', ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])).toEqual(true);
    });

    it('Test_4', () => {
        expect(containAllRotsTest('XjYABhR',
            ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]))
            .toEqual(false);
    });

    it('Test_5', () => {
        expect(containAllRotsTest('QJAhQmS', [ 'hQmSQJA', 'QJAhQmS', 'QmSQJAh', 'yUgUXoQE', 'AhQmSQJ',
            'mSQJAhQ', 'SQJAhQm', 'JAhQmSQ' ])).toEqual(true);
    });
});
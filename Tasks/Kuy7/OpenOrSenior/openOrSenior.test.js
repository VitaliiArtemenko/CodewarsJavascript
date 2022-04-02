const openOrSeniorTest = require('./openOrSenior');

describe('Categorize New Member', () => {

    it('Test_1', () => {
        expect(openOrSeniorTest([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))
            .toEqual(["Open", "Open", "Senior", "Open", "Open", "Senior"]);
    });

    it('Test_2', () => {
        expect(openOrSeniorTest([[45, 12],[55,21],[19, -2],[104, 20]]))
            .toEqual(['Open', 'Senior', 'Open', 'Senior']);
    });

    it('Test_3', () => {
        expect(openOrSeniorTest([[3, 12],[55,1],[91, -2],[53, 23]]))
            .toEqual(['Open', 'Open', 'Open', 'Open']);
    });

    it('Test_4', () => {
        expect(openOrSeniorTest([[59, 12],[55,-1],[12, -2],[12, 12]]))
            .toEqual(['Senior', 'Open', 'Open', 'Open']);
    });

    it('Test_5', () => {
        expect(openOrSeniorTest([])).toEqual([]);
    });

    it('Test_6', () => {
        expect(openOrSeniorTest([ [ 54, 9 ], [ 55, 9 ] ])).toEqual(['Open', 'Senior']);
    });

    it('Test_7', () => {
        expect(openOrSeniorTest([ [ 55, 7 ], [ 55, 9 ] ])).toEqual(['Open', 'Senior']);
    });
});
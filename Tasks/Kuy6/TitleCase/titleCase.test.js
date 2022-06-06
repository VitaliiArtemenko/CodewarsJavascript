const titleCaseTest = require('./titleCase');

describe('Title Case', () => {

    it('Test_1', () => {
        expect(titleCaseTest('')).toEqual('');
    })

    it('Test_2', () => {
        expect(titleCaseTest('a clash of KINGS', 'a an the of')).toEqual('A Clash of Kings');
    })

    it('Test_3', () => {
        expect(titleCaseTest('THE WIND IN THE WILLOWS', 'The In')).toEqual('The Wind in the Willows');
    })

    it('Test_4', () => {
        expect(titleCaseTest('the quick brown fox')).toEqual('The Quick Brown Fox');
    })

    it('Test_5', () => {
        expect(titleCaseTest('the QUICK bRoWn fOX', 'xyz fox quick the')).toEqual('The quick Brown fox');
    })
})
const getStatusTest = require('./getStatus');

describe('Unexpected parsing', () => {

    it('Test_1', () => {
        expect(getStatusTest(true)).toEqual({"status": 'busy'});
    });

    it('Test_2', () => {
        expect(getStatusTest(false)).toEqual({"status": 'available'});
    });
});
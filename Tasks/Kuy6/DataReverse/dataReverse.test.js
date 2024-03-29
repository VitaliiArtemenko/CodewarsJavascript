const dataReverseTest = require('./dataReverse');

describe('Data Reverse', () => {

    it('Test_1', () => {
        expect(dataReverseTest([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))
            .toEqual([1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]);
    });

    it('Test_2', () => {
        expect(dataReverseTest([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]))
            .toEqual([0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]);
    });

    it('Test_3', () => {
        expect(dataReverseTest([ 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1,
            1, 1, 1, 1, 0])).toEqual([ 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1,
                0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1 ] );
    });

    it('Test_4', () => {
        expect(dataReverseTest([0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1,
            1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0]))
            .toEqual([ 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0,
                1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1 ]);
    });

    it('Test_5', () => {
        expect(dataReverseTest([1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0,
            0, 1, 0, 1, 0])).toEqual([ 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0,
            1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1 ]);
    });
});
const moveZerosTest = require('./moveZeros');

describe('Moving Zeros To The End', () => {

    it('Test_1', () => {
        expect(moveZerosTest([1,2,0,1,0,1,0,3,0,1])).toEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
    });

    it('Test_2', () => {
        expect(moveZerosTest([ '1', null, [], '4', 3, '8', null, '7', true, '1', [],  null, 6,  '3', [],
            '9', null, 6,  '1', 0 ]))
            .toEqual([ '1', null, [],  '4',  3, '8', null, '7', true, '1', [],  null, 6,   '3',  [],
                '9', null, 6,   '1',  0 ]);
    });

    it('Test_3', () => {
        expect(moveZerosTest([ [], '7', '3', false, 1, 0, '2', '5', false, '0', 3, null, 8, 0, '0', [], '2',
            8, true, false, '7', 4, 0, null, 4, '8', null, 6, '2', '7']))
            .toEqual([ [], '7', '3', false, 1, '2', '5', false, '0', 3, null, 8, '0', [], '2',
                8, true, false, '7', 4, null, 4, '8', null, 6, '2', '7', 0, 0, 0]);
    });

    it('Test_4', () => {
        expect(moveZerosTest([ 3, true, '0', '2', false, '8', [], 4]))
            .toEqual([ 3, true, '0', '2', false, '8', [], 4]);
    });

    it('Test_5', () => {
        expect(moveZerosTest([null, 0, false, 0, 2, 0, null, 0, '8', 0, 2, 0, 4]))
            .toEqual([null, false, 2, null, '8', 2, 4, 0, 0, 0, 0, 0, 0]);
    });
})
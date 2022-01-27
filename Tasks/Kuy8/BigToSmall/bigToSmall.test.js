const bigToSmallTest = require('./bigToSmall');

describe('Training JS #29: methods of arrayObject---concat() and join()', () => {

    it('Test_1', () => {
        expect(bigToSmallTest([[1,2],[3,4],[5,6]])).toEqual('6>5>4>3>2>1');
    });

    it('Test_2', () => {
        expect(bigToSmallTest([[1,3,5],[2,4,6]])).toEqual('6>5>4>3>2>1');
    });

    it('Test_3', () => {
        expect(bigToSmallTest([ [ 42, 19, 27, 19 ], [ 1 ], [ 27, 47, 6, 35 ], [ 42, 9, 17, 16 ] ]))
            .toEqual('47>42>42>35>27>27>19>19>17>16>9>6>1');
    });

    it('Test_4', () => {
        expect(bigToSmallTest([[1,1],[1],[1,1]])).toEqual('1>1>1>1>1');
    });

    it('Test_5', () => {
        expect(bigToSmallTest([ [ 5 ], [ 47, 0, 10, 1 ], [ 6, 36 ], [ 40, 36, 23, 23 ] ]))
            .toEqual('47>40>36>36>23>23>10>6>5>1>0');
    });

    it('Test_6', () => {
        expect(bigToSmallTest([ [ 6, 14, 38 ], [ 25, 27, 3 ], [ 37, 28, 3, 21, 34, 14 ] ]))
            .toEqual('38>37>34>28>27>25>21>14>14>6>3>3');
    });
});
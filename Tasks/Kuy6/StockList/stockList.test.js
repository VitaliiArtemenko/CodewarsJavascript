const stockListTest = require('./stockList');

describe('Help the bookseller!', () => {

    it('Test_1', () => {
        expect(stockListTest(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"]))
            .toEqual('(A : 200) - (B : 1140)');
    })

    it('Test_2', () => {
        expect(stockListTest(["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"],
            ["A", "B", "C", "W"])).toEqual('(A : 0) - (B : 114) - (C : 70) - (W : 0)');
    })

    it('Test_3', () => {
        expect(stockListTest([ 'ROXANNE 102', 'RHODODE 123', 'BKWRKAA 125', 'BTSQZFG 239', 'DRTYMKH 060' ],
            [ 'U', 'V', 'R' ])).toEqual('(U : 0) - (V : 0) - (R : 225)');
    })

    it('Test_4', () => {
        expect(stockListTest([ 'ROXANNE 102', 'RHODODE 123', 'BKWRKAA 125', 'BTSQZFG 239', 'DRTYMKH 060' ],
            [])).toEqual('');
    })

    it('Test_5', () => {
        expect(stockListTest([ 'BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600' ],
            [ 'A', 'B', 'C', 'D' ])).toEqual('(A : 0) - (B : 1290) - (C : 515) - (D : 600)');
    })
})
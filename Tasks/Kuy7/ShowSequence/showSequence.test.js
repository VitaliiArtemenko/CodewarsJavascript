const { SequenceSum } = require('./showSequence');

describe('Sum of numbers from 0 to N', () => {

    it('Test_1', () => {
        expect(SequenceSum.showSequence(6)).toEqual('0+1+2+3+4+5+6 = 21')
    })

    it('Test_2', () => {
        expect(SequenceSum.showSequence(7)).toEqual('0+1+2+3+4+5+6+7 = 28')
    })

    it('Test_3', () => {
        expect(SequenceSum.showSequence(0)).toEqual('0=0')
    })

    it('Test_4', () => {
        expect(SequenceSum.showSequence(-1)).toEqual('-1<0')
    })

    it('Test_5', () => {
        expect(SequenceSum.showSequence(-10)).toEqual('-10<0')
    })

    it('Test_6', () => {
        expect(SequenceSum.showSequence(18)).toEqual('0+1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18 = 171')
    })

    it('Test_7', () => {
        expect(SequenceSum.showSequence(29))
            .toEqual('0+1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20+21+22+23+24+25+26+27+28+29 = 435')
    })

    it('Test_8', () => {
        expect(SequenceSum.showSequence(1)).toEqual('0+1 = 1')
    })
})
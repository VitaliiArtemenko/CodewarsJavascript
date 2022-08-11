const robberEncodeTest = require('./robberEncode')

describe('The Robber Language', () => {

    it('Test_1', () => {
        expect(robberEncodeTest('hello world')).toEqual('hohelollolo wowororloldod')
    })

    it('Test_2', () => {
        expect(robberEncodeTest('coding is fun')).toEqual('cocododinongog isos fofunon')
    })

    it('Test_3', () => {
        expect(robberEncodeTest('follow the white rabbit'))
            .toEqual('fofolollolowow tothohe wowhohitote rorabobbobitot')
    })

    it('Test_4', () => {
        expect(robberEncodeTest('S.O.S')).toEqual('SOS.O.SOS')
    })

    it('Test_5', () => {
        expect(robberEncodeTest('<-=www.codewars.com=->'))
            .toEqual('<-=wowwowwow.cocododewowarorsos.cocomom=->')
    })

    it('Test_6', () => {
        expect(robberEncodeTest('`Gn)vnH+Zy1>X[8%}@\\:yp*toek\\qKJ(qr>eIX$A?`_M$.mXI[z\n' +
            '].DUO^?m-^%Klpc<VF[vf(&;}o1a}3@8\'')).toEqual('`GOGnon)vovnonHOH+ZOZyoy1>XOX[8%}@\\:yoypop*totoekok\\qoqKOKJOJ(qoqror>eIXOX$A?`_MOM$.momXOXI[zoz\n' +
            '].DODUO^?mom-^%KOKlolpopcoc<VOVFOF[vovfof(&;}o1a}3@8\'')
    })
})